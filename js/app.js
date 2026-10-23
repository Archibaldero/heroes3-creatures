(function () {
  const data = window.HEROES;
  const factionById = Object.fromEntries(data.factions.map((faction) => [faction.id, faction]));
  factionById.neutral = { id: "neutral", name: "Neutral" };
  const numeric = [
    ["dmg", "Dmg", "Damage"],
    ["hp", "HP", "Health"],
    ["atk", "Atk", "Attack"],
    ["def", "Def", "Defense"],
    ["spd", "Spd", "Speed"],
    ["gr", "Grw", "Growth"],
    ["gold", "Cost", "Cost, compared by gold"],
    ["ai", "AI", "AI value"],
  ];

  const resourceIcon = {
    gold: "assets/resources/gold.png",
    wood: "assets/resources/wood.png",
    ore: "assets/resources/ore.png",
    mercury: "assets/resources/mercury.png",
    sulfur: "assets/resources/sulfur.png",
    crystal: "assets/resources/crystal.png",
    gem: "assets/resources/gem.png",
  };

  const rail = document.getElementById("rail");
  const main = document.getElementById("main");

  const pages = document.createElement("div");
  pages.className = "pages";
  const statsTab = document.createElement("a");
  statsTab.href = "#tier-1";
  statsTab.textContent = "Stats";
  const vizTab = document.createElement("a");
  vizTab.href = "#viz";
  vizTab.textContent = "Visualization";
  const calcTab = document.createElement("a");
  calcTab.href = "#calc";
  calcTab.textContent = "Calculator";
  pages.append(statsTab, vizTab, calcTab);

  const tierLinks = document.createElement("div");
  tierLinks.className = "rail-links";
  const vizLinks = document.createElement("div");
  vizLinks.className = "rail-links legend";
  vizLinks.hidden = true;
  rail.append(pages, tierLinks, vizLinks);

  const statsView = document.createElement("div");
  statsView.id = "view-stats";
  const vizView = document.createElement("div");
  vizView.id = "viz";
  vizView.hidden = true;
  const calcView = document.createElement("div");
  calcView.id = "view-calc";
  calcView.hidden = true;
  main.append(statsView, vizView, calcView);

  let refreshStatsNav = function () {};

  const growthModes = [
    ["fort", "Fort"],
    ["citadel", "Citadel"],
    ["castle", "Castle"],
  ];

  let growthMode = "fort";

  function weeklyGrowth(base) {
    if (growthMode === "citadel") return base + Math.floor(base / 2);
    if (growthMode === "castle") return base * 2;
    return base;
  }

  const mast = document.createElement("header");
  mast.className = "masthead";
  mast.innerHTML = "<h1>Creatures of one tier, across towns.</h1><p>Growth is weekly at the selected town level. In each column, bold is the highest figure of the tier and italic is the lowest — every unit that shares it — base and upgraded together. Each end of a damage range is marked on its own.</p>";
  const statsPicks = document.createElement("div");
  statsPicks.className = "picks";
  statsPicks.append(picker("Town development", growthModes, () => growthMode, setGrowthMode));
  statsView.append(mast, statsPicks);

  for (const tier of data.tiers) {
    const section = document.createElement("section");
    section.className = "tier";
    section.id = "tier-" + tier.tier;

    const heading = document.createElement("h2");
    heading.textContent = "Tier " + tier.tier;
    section.append(heading);

    const pair = document.createElement("div");
    pair.className = "pair";
    pair.append(sheet(tier, "base"), sheet(tier, "up"));
    section.append(pair);

    statsView.append(section);

    const link = document.createElement("a");
    link.href = "#tier-" + tier.tier;
    link.textContent = "Tier " + tier.tier;
    link.dataset.tier = String(tier.tier);
    tierLinks.append(link);
  }

  appendCreatureGroup("neutrals", "Neutrals", "Neutrals", data.neutrals.map((band) => ({
    label: "Level " + band.tier,
    rows: band.rows,
  })));
  appendCreatureGroup("dragons", "Neutral dragons", "Dragons", [{ rows: data.dragons }]);

  const sources = document.createElement("p");
  sources.className = "sources";
  sources.textContent = "Castle through Factory: FizMiG v.2.92, Heroes III Complete and Horn of the Abyss 1.7.3. Where that book strikes a figure through, the current one is used. Bulwark is not in FizMiG 2.92; those figures are from the Heroes III Wiki. Neutrals and neutral dragons are from the Heroes III Wiki, with the Horn of the Abyss figure where an older one is struck through.";
  statsView.append(sources);

  markExtremes();
  bindTables();
  watchTiers();
  syncColumns();
  syncRowHeights();
  window.addEventListener("load", () => {
    syncColumns();
    syncRowHeights();
  });
    document.fonts.ready.then(() => {
    syncColumns();
    syncRowHeights();
    renderCharts();
    syncVizLegend();
  });
  watchSheetWidth();

  function sheet(tier, side) {
    const wrap = document.createElement("div");
    wrap.className = "sheet";

    const table = document.createElement("table");
    const cols = document.createElement("colgroup");
    for (let i = 0; i < 11; i += 1) cols.append(document.createElement("col"));
    table.append(cols);
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    headRow.append(th("Faction", "who"), th("Unit", "who"));
    for (const [, short, full] of numeric) headRow.append(th(short, "", full));
    headRow.append(th("Abilities", "who", "Abilities"));
    head.append(headRow);
    table.append(head);

    const body = document.createElement("tbody");
    let previous = null;
    tier.rows.forEach((row, index) => {
      const tr = document.createElement("tr");
      tr.dataset.order = String(index);
      if (row.f !== previous) tr.classList.add("town-start");
      previous = row.f;
      const unit = row[side];
      if (!unit) {
        tr.classList.add("blank");
        for (let i = 0; i < 11; i += 1) tr.append(document.createElement("td"));
      } else {
        const faction = factionById[row.f];
        tr.append(whoCell(faction.name, faction.id === "neutral" ? "" : "assets/factions/" + row.f + ".png"));
        tr.append(whoCell(unit.name, "assets/units/" + unit.id + ".png"));
        for (const [key] of numeric) {
          const cell = document.createElement("td");
          cell.dataset.stat = key;
          cell.dataset.kind = "num";
          if (key === "dmg") fillDamage(cell, unit);
          else {
            const value = key === "gr" && row.f !== "neutral" ? weeklyGrowth(unit.gr) : unit[key];
            if (key === "gr" && row.f !== "neutral") cell.dataset.base = String(unit.gr);
            cell.dataset.value = String(value);
            if (key === "gold") fillCost(cell, unit);
            else cell.textContent = formatStat(unit, key, value);
          }
          tr.append(cell);
        }
        const abilities = document.createElement("td");
        abilities.className = "ab";
        abilities.dataset.value = unit.ab;
        abilities.textContent = unit.ab;
        tr.append(abilities);
      }
      body.append(tr);
    });
    table.append(body);
    wrap.append(table);
    return wrap;
  }

  function th(text, className, title) {
    const cell = document.createElement("th");
    if (className) cell.className = className;
    const dir = document.createElement("span");
    dir.className = "dir";
    dir.setAttribute("aria-hidden", "true");
    const label = document.createTextNode(text);
    if (className === "who") cell.append(label, dir);
    else cell.append(dir, label);
    if (title) cell.title = title;
    return cell;
  }

  function whoCell(name, src) {
    const cell = document.createElement("td");
    cell.className = "who";
    cell.dataset.value = name;
    const holder = document.createElement("span");
    holder.className = "name";
    if (src) {
      const img = document.createElement("img");
      img.alt = "";
      img.src = src;
      img.addEventListener("error", () => img.remove());
      holder.append(img);
    }
    holder.append(document.createTextNode(name));
    cell.append(holder);
    return cell;
  }

  function fillDamage(cell, unit) {
    cell.dataset.value = String(unit.dmg[1] * 1000 + unit.dmg[0]);
    const low = document.createElement("span");
    low.dataset.n = String(unit.dmg[0]);
    low.textContent = String(unit.dmg[0]);
    const high = document.createElement("span");
    high.dataset.n = String(unit.dmg[1]);
    high.textContent = String(unit.dmg[1]);
    cell.append(low, document.createTextNode("–"), high);
  }

  function fillCost(cell, unit) {
    cell.classList.add("cost");
    cell.append(document.createTextNode(unit.gold.toLocaleString("en-US")), resourceImg("gold"));
    const resource = parseResource(unit.res);
    if (!resource) return;
    const amount = document.createElement("span");
    amount.className = "res-amt";
    amount.textContent = resource.amount;
    cell.append(amount, resourceImg(resource.kind));
  }

  function parseResource(text) {
    if (!text) return null;
    const match = String(text).trim().match(/^(\d+)\s+([A-Za-z]+)$/);
    if (!match) return null;
    let kind = match[2].toLowerCase();
    if (kind.endsWith("s")) kind = kind.slice(0, -1);
    if (!resourceIcon[kind]) return null;
    return { amount: match[1], kind };
  }

  function resourceImg(kind) {
    const img = document.createElement("img");
    img.className = "res";
    img.alt = kind;
    img.src = resourceIcon[kind];
    img.addEventListener("load", scheduleSync);
    return img;
  }

  let syncFrame = 0;
  function scheduleSync() {
    cancelAnimationFrame(syncFrame);
    syncFrame = requestAnimationFrame(() => {
      syncColumns();
      syncRowHeights();
    });
  }

  function formatStat(unit, key, value = unit[key]) {
    return key === "ai" ? value.toLocaleString("en-US") : String(value);
  }

  function markExtremes() {
    for (const tier of data.tiers) {
      const units = tier.rows.flatMap((row) => [row.base, row.up].filter(Boolean));
      markUnits(document.getElementById("tier-" + tier.tier), units);
    }
    const bands = [...document.querySelectorAll("#neutrals .band")];
    data.neutrals.forEach((band, index) => {
      markUnits(bands[index], band.rows.map((row) => row.base).filter(Boolean));
    });
    markUnits(document.getElementById("dragons"), data.dragons.map((row) => row.base).filter(Boolean));
  }

  function markUnits(section, units) {
    if (!section || units.length < 2) return;
    for (const [key] of numeric) {
      if (key === "dmg") {
        markDamage(section, units);
        continue;
      }
      const cells = [...section.querySelectorAll('td[data-stat="' + key + '"]')];
      let min = Infinity;
      let max = -Infinity;
      for (const cell of cells) {
        const value = Number(cell.dataset.value);
        if (value < min) min = value;
        if (value > max) max = value;
      }
      for (const cell of cells) {
        const value = Number(cell.dataset.value);
        cell.classList.toggle("is-max", value === max);
        cell.classList.toggle("is-min", value === min);
      }
    }
  }

  function appendCreatureGroup(id, title, linkText, bands) {
    const section = document.createElement("section");
    section.className = "tier";
    section.id = id;
    const heading = document.createElement("h2");
    heading.textContent = title;
    section.append(heading);
    for (const band of bands) {
      const block = document.createElement("div");
      block.className = "band";
      if (band.label) {
        const sub = document.createElement("h3");
        sub.textContent = band.label;
        block.append(sub);
      }
      const pair = document.createElement("div");
      pair.className = "pair";
      pair.append(sheet(band, "base"));
      block.append(pair);
      section.append(block);
    }
    statsView.append(section);
    const link = document.createElement("a");
    link.href = "#" + id;
    link.textContent = linkText;
    tierLinks.append(link);
  }

  function markDamage(section, units) {
    let min = Infinity;
    let max = -Infinity;
    for (const unit of units) {
      if (unit.dmg[0] < min) min = unit.dmg[0];
      if (unit.dmg[1] > max) max = unit.dmg[1];
    }
    for (const span of section.querySelectorAll('td[data-stat="dmg"] [data-n]')) {
      const n = Number(span.dataset.n);
      span.classList.toggle("is-max", n === max);
      span.classList.toggle("is-min", n === min);
    }
  }

  function bindTables() {
    for (const table of main.querySelectorAll("table")) {
      [...table.tHead.rows[0].cells].forEach((cell, index) => {
        cell.addEventListener("mouseenter", () => shadeColumn(table, index));
        cell.addEventListener("mouseleave", () => shadeColumn(table, null));
        cell.addEventListener("click", () => cycleSort(table, index));
      });
      for (const row of table.tBodies[0].rows) {
        row.addEventListener("click", () => pickRow(row));
      }
    }
  }

  function shadeColumn(table, index) {
    for (const cell of table.querySelectorAll(".is-col")) cell.classList.remove("is-col");
    if (index == null) return;
    for (const row of table.rows) row.cells[index].classList.add("is-col");
  }

  function pickRow(row) {
    const picked = row.classList.contains("is-picked");
    for (const other of row.parentElement.rows) other.classList.remove("is-picked");
    if (!picked) row.classList.add("is-picked");
  }

  function cycleSort(table, index) {
    const pair = table.closest(".pair");
    const tables = [...pair.querySelectorAll("table")];
    const active = String(tables.indexOf(table));
    const same = pair.dataset.sortTable === active && pair.dataset.sortCol === String(index);
    const dir = pair.dataset.sortDir || "";
    let next = "desc";
    if (same && dir === "desc") next = "asc";
    else if (same && dir === "asc") next = "";
    if (next) {
      pair.dataset.sortTable = active;
      pair.dataset.sortCol = String(index);
      pair.dataset.sortDir = next;
    } else {
      delete pair.dataset.sortTable;
      delete pair.dataset.sortCol;
      delete pair.dataset.sortDir;
    }
    const sequence = [...table.tBodies[0].rows]
      .sort((a, b) => rowCompare(a, b, index, next))
      .map((row) => row.dataset.order);
    for (const sheet of tables) {
      const body = sheet.tBodies[0];
      const byOrder = new Map([...body.rows].map((row) => [row.dataset.order, row]));
      for (const key of sequence) body.append(byOrder.get(key));
      [...sheet.tHead.rows[0].cells].forEach((cell, i) => {
        const on = sheet === table && next && i === index;
        cell.classList.toggle("sort-desc", on && next === "desc");
        cell.classList.toggle("sort-asc", on && next === "asc");
        if (on) cell.setAttribute("aria-sort", next === "desc" ? "descending" : "ascending");
        else cell.removeAttribute("aria-sort");
      });
    }
    scheduleSync();
  }

  function rowCompare(a, b, index, dir) {
    const ao = Number(a.dataset.order);
    const bo = Number(b.dataset.order);
    if (!dir) return ao - bo;
    const av = a.cells[index].dataset.value;
    const bv = b.cells[index].dataset.value;
    if (av == null || bv == null) {
      if (av == null && bv == null) return ao - bo;
      return av == null ? 1 : -1;
    }
    const numeric = a.cells[index].dataset.kind === "num";
    const cmp = numeric ? Number(av) - Number(bv) : av.localeCompare(bv, "en", { sensitivity: "base" });
    if (cmp === 0) return ao - bo;
    return dir === "desc" ? -cmp : cmp;
  }

  function watchTiers() {
    const links = [...tierLinks.querySelectorAll("a")];
    const sections = [...statsView.querySelectorAll(".tier")];

    function setCurrent(id) {
      for (const link of links) link.classList.toggle("current", link.getAttribute("href") === "#" + id);
    }

    function sectionAtReadingLine() {
      const line = 72;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section;
      }
      return current.id;
    }

    refreshStatsNav = function () {
      if (statsView.hidden) return;
      setCurrent(sectionAtReadingLine());
    };

    const observer = new IntersectionObserver(() => {
      refreshStatsNav();
    }, { threshold: [0, 0.25, 0.5, 1] });

    for (const section of sections) observer.observe(section);
    refreshStatsNav();

    for (const link of links) {
      link.addEventListener("click", () => setCurrent(link.getAttribute("href").slice(1)));
    }
  }

  function watchSheetWidth() {
    const widths = new WeakMap();
    let frame = 0;
    const observer = new ResizeObserver((entries) => {
      let changed = false;
      for (const entry of entries) {
        const width = Math.round(entry.contentRect.width);
        if (widths.get(entry.target) !== width) {
          widths.set(entry.target, width);
          changed = true;
        }
      }
      if (!changed) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        syncColumns();
        syncRowHeights();
      });
    });
    for (const sheet of main.querySelectorAll(".sheet")) observer.observe(sheet);
  }

  function cellWidth(cell) {
    const range = document.createRange();
    range.selectNodeContents(cell);
    const rects = [...range.getClientRects()];
    if (!rects.length) return 0;
    const content = Math.max(...rects.map((rect) => rect.right)) - Math.min(...rects.map((rect) => rect.left));
    const style = getComputedStyle(cell);
    return content + parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
  }

  function syncColumns() {
    if (statsView.hidden) return;
    const tables = [...main.querySelectorAll("table")];
    const fixed = 10;
    const widths = Array(fixed).fill(0);
    for (const table of tables) table.style.fontSize = "";
    for (const table of tables) {
      for (const tr of table.rows) {
        for (let i = 0; i < fixed; i += 1) {
          const cell = tr.cells[i];
          if (!cell || !cell.textContent.trim()) continue;
          widths[i] = Math.max(widths[i], cellWidth(cell));
        }
      }
    }
    const fixedSum = widths.reduce((sum, width) => sum + Math.ceil(width), 0);
    const abilityFloor = 140;
    for (const table of tables) {
      const cols = table.querySelectorAll("col");
      const total = table.parentElement.clientWidth;
      const needed = fixedSum + abilityFloor;
      const scale = total > 0 && needed > total ? total / needed : 1;
      if (scale < 1) {
        const base = parseFloat(getComputedStyle(table).fontSize);
        table.style.fontSize = base * scale + "px";
      }
      let used = 0;
      for (let i = 0; i < fixed; i += 1) {
        const width = Math.floor(Math.ceil(widths[i]) * scale);
        cols[i].style.width = width + "px";
        used += width;
      }
      cols[fixed].style.width = Math.max(0, Math.floor(total - used)) + "px";
    }
  }

  function syncRowHeights() {
    if (statsView.hidden) return;
    for (const pair of main.querySelectorAll(".pair")) {
      const bodies = [...pair.querySelectorAll("tbody")];
      if (bodies.length < 2) continue;
      const left = [...bodies[0].rows];
      const right = [...bodies[1].rows];
      const sideBySide = getComputedStyle(pair).gridTemplateColumns.split(" ").filter(Boolean).length > 1;
      for (let i = 0; i < left.length; i += 1) {
        left[i].style.height = "";
        right[i].style.height = "";
      }
      if (!sideBySide) continue;
      for (let i = 0; i < left.length; i += 1) {
        const height = Math.max(left[i].getBoundingClientRect().height, right[i].getBoundingClientRect().height);
        left[i].style.height = height + "px";
        right[i].style.height = height + "px";
      }
    }
  }

  const chartStats = [
    { key: "ai", id: "ai", title: "AI" },
    { key: "hp", id: "hp", title: "HP" },
    { key: "dmg", id: "dmg", title: "Damage" },
    { key: "gold", id: "cost", title: "Cost" },
  ];

  let creatureSide = "base";
  let tierPresentation = "together";
  const chartsRoot = document.createElement("div");

  function setGrowthMode(mode) {
    growthMode = mode;
    for (const button of main.querySelectorAll('.growth[aria-label="Town development"] button')) {
      const active = button.dataset.mode === mode;
      button.classList.toggle("current", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    }
    for (const cell of statsView.querySelectorAll('td[data-stat="gr"][data-base]')) {
      const value = weeklyGrowth(Number(cell.dataset.base));
      cell.dataset.value = String(value);
      cell.textContent = String(value);
    }
    markExtremes();
    scheduleSync();
    renderCharts();
  }

  function unitStat(unit, key) {
    if (key === "dmg") return (unit.dmg[0] + unit.dmg[1]) / 2;
    return unit[key];
  }

  function formatChartValue(value, key) {
    if (key === "dmg") {
      const rounded = Math.round(value * 10) / 10;
      return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
    }
    return Math.round(value).toLocaleString("en-US");
  }

  const tierColors = ["#D01020", "#1A4DFF", "#C47A00", "#8B3AE6", "#087A28", "#E23A96", "#0E8CA8"];

  function tierColor(tier) {
    return tierColors[tier - 1];
  }

  function sideUnits(factionId, side) {
    const line = side === "sea" ? "up" : side;
    const units = [];
    for (const tier of data.tiers) {
      for (const row of tier.rows) {
        if (row.f !== factionId) continue;
        const unit = row[line];
        if (!unit) continue;
        if (side === "up" && unit.id === "sea-dog") continue;
        if (side === "sea" && unit.id === "corsair") continue;
        units.push({ tier: tier.tier, unit });
      }
    }
    return units;
  }

  function townTotal(units, key) {
    let sum = 0;
    for (const item of units) sum += unitStat(item.unit, key) * weeklyGrowth(item.unit.gr);
    return sum;
  }

  function sideMax(key) {
    let max = 0;
    for (const faction of data.factions) {
      const total = townTotal(sideUnits(faction.id, creatureSide), key);
      if (total > max) max = total;
    }
    return max || 1;
  }

  function tierMax(key, tier) {
    let max = 0;
    for (const faction of data.factions) {
      const units = sideUnits(faction.id, creatureSide).filter((item) => item.tier === tier);
      const total = townTotal(units, key);
      if (total > max) max = total;
    }
    return max || 1;
  }

  function syncVizLegend() {
    const show = !vizView.hidden && tierPresentation !== "separately";
    vizLinks.hidden = !show;
    vizLinks.style.marginTop = "";
    if (!show || window.matchMedia("(max-width: 1100px)").matches) return;
    const target = chartsRoot.querySelector(".bars") || chartsRoot.firstElementChild;
    if (!target) return;
    const offset = target.getBoundingClientRect().top - vizLinks.getBoundingClientRect().top;
    if (offset > 0) vizLinks.style.marginTop = Math.round(offset) + "px";
  }

  function picker(label, modes, chosen, apply) {
    const group = document.createElement("div");
    group.className = "growth";
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", label);
    const title = document.createElement("span");
    title.textContent = label + ":";
    group.append(title);
    for (const [mode, text] of modes) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = text;
      button.dataset.mode = mode;
      const on = mode === chosen();
      button.classList.toggle("current", on);
      button.setAttribute("aria-pressed", on ? "true" : "false");
      button.addEventListener("click", () => {
        if (chosen() === mode) return;
        for (const other of group.querySelectorAll("button")) {
          const active = other.dataset.mode === mode;
          other.classList.toggle("current", active);
          other.setAttribute("aria-pressed", active ? "true" : "false");
        }
        tip.hidden = true;
        apply(mode);
      });
      group.append(button);
    }
    return group;
  }

  function buildViz() {
    const head = document.createElement("header");
    head.className = "masthead";
    head.innerHTML = "<h1>Weekly growth, summed by town.</h1><p>Each bar is a stat multiplied by weekly growth at the selected town level. Color marks the creature’s tier. Each tick is one creature.</p>";
    vizView.append(head);

    const picks = document.createElement("div");
    picks.className = "picks";
    picks.append(
      picker("Creature type", [
        ["base", "Base"],
        ["up", "Upgraded"],
        ["sea", "Upgraded (Sea Dogs)"],
      ], () => creatureSide, (mode) => {
        creatureSide = mode;
        renderCharts();
      }),
      picker("Town development", growthModes, () => growthMode, setGrowthMode),
      picker("Present tiers", [
        ["together", "Together"],
        ["separately", "Separately"],
      ], () => tierPresentation, (mode) => {
        tierPresentation = mode;
        renderCharts();
      }),
    );
    vizView.append(picks, chartsRoot);

    for (let tier = 1; tier <= 7; tier += 1) {
      const item = document.createElement("span");
      const swatch = document.createElement("i");
      swatch.style.background = tierColor(tier);
      item.append(swatch, document.createTextNode("Tier " + tier));
      vizLinks.append(item);
    }
    renderCharts();
  }

  function renderCharts() {
    chartsRoot.replaceChildren();
    for (const stat of chartStats) chartsRoot.append(chartSection(stat));
    syncVizLegend();
  }

  function chartSection(stat) {
    const section = document.createElement("section");
    section.className = "tier";
    section.id = "viz-" + stat.id;
    if (tierPresentation === "separately") {
      section.classList.add("split");
      section.append(chartSplit(stat));
    } else {
      const heading = document.createElement("h2");
      heading.textContent = stat.title;
      section.append(heading, chartSide(stat, sideMax(stat.key)));
    }
    return section;
  }

  function textWidth(sample) {
    const probe = document.createElement("span");
    probe.className = "bar-sum";
    probe.style.cssText = "position:absolute;visibility:hidden;white-space:nowrap";
    probe.textContent = sample;
    document.body.append(probe);
    const width = probe.offsetWidth;
    probe.remove();
    return width;
  }

  function chartSide(stat, max) {
    const wrap = document.createElement("div");
    wrap.className = "chart";

    const rows = data.factions.map((faction) => {
      const units = sideUnits(faction.id, creatureSide);
      const total = townTotal(units, stat.key);
      return { faction, units, total, text: formatChartValue(total, stat.key) };
    });
    let widest = 0;
    for (const row of rows) widest = Math.max(widest, textWidth(row.text));
    const reserve = widest + 10;

    const bars = document.createElement("div");
    bars.className = "bars";
    for (const row of rows) {
      const label = document.createElement("div");
      label.className = "bar-label";
      const img = document.createElement("img");
      img.alt = "";
      img.src = "assets/factions/" + row.faction.id + ".png";
      img.addEventListener("error", () => img.remove());
      const name = document.createElement("span");
      name.textContent = row.faction.name;
      label.append(img, name);

      const scale = document.createElement("div");
      scale.className = "bar-scale";
      const share = row.total / max;
      const bar = document.createElement("div");
      bar.className = "bar";
      bar.style.width = "calc((100% - " + reserve + "px) * " + share + ")";

      const tierGroups = [];
      for (const item of row.units) {
        let group = tierGroups[tierGroups.length - 1];
        if (!group || group.tier !== item.tier) {
          group = { tier: item.tier, items: [] };
          tierGroups.push(group);
        }
        group.items.push(item);
      }

      let cursor = 0;
      for (const group of tierGroups) {
        const tierStartCursor = cursor;
        let tierTotal = 0;
        const color = tierColor(group.tier);

        for (const item of group.items) {
          const count = weeklyGrowth(item.unit.gr);
          const value = unitStat(item.unit, stat.key);
          for (let i = 0; i < count; i += 1) {
            const block = document.createElement("span");
            block.className = "block";
            const start = row.total ? (cursor / row.total) * 100 : 0;
            const slice = row.total ? (value / row.total) * 100 : 0;
            block.style.left = start + "%";
            block.style.width = slice + "%";
            block.dataset.name = item.unit.name;
            block.dataset.value = formatChartValue(value, stat.key);
            block.dataset.stat = stat.title;
            const tick = document.createElement("span");
            tick.className = "tick";
            tick.style.background = color;
            block.append(tick);
            bar.append(block);
            cursor += value;
            tierTotal += value;
          }
        }

        const tierStart = row.total ? (tierStartCursor / row.total) * 100 : 0;
        const tierSlice = row.total ? (tierTotal / row.total) * 100 : 0;
        const seg = document.createElement("div");
        seg.className = "tier-seg";
        seg.style.left = tierStart + "%";
        seg.style.width = tierSlice + "%";

        const line = document.createElement("span");
        line.className = "tier-line";
        line.style.background = color;

        const tierSum = document.createElement("span");
        tierSum.className = "tier-sum";
        tierSum.style.color = color;
        tierSum.textContent = formatChartValue(tierTotal, stat.key);

        seg.append(line, tierSum);
        bar.append(seg);
      }

      const sum = document.createElement("div");
      sum.className = "bar-sum";
      sum.textContent = row.text;
      sum.style.left = "calc((100% - " + reserve + "px) * " + share + " + 10px)";
      scale.append(bar, sum);
      bars.append(label, scale);
    }
    wrap.append(bars);
    return wrap;
  }

  function chartSplit(stat) {
    const grid = document.createElement("div");
    grid.className = "chart-split";

    const title = document.createElement("div");
    title.className = "split-head";
    title.textContent = stat.title;
    grid.append(title);

    for (let tier = 1; tier <= 7; tier += 1) {
      const max = tierMax(stat.key, tier);
      const wrap = document.createElement("div");
      wrap.className = "chart";
      const color = tierColor(tier);
      wrap.style.setProperty("--axis", color);

      const head = document.createElement("div");
      head.className = "split-head";
      head.textContent = "Tier " + tier;
      wrap.append(head);

      const rows = data.factions.map((faction) => {
        const units = sideUnits(faction.id, creatureSide).filter((item) => item.tier === tier);
        const total = townTotal(units, stat.key);
        return { faction, units, total, text: formatChartValue(total, stat.key) };
      });
      let widest = 0;
      for (const row of rows) widest = Math.max(widest, textWidth(row.text));
      const reserve = widest + 10;

      const bars = document.createElement("div");
      bars.className = "bars bars-plain";

      for (const row of rows) {
        const label = document.createElement("div");
        label.className = "bar-label";
        const unit = row.units[0] && row.units[0].unit;
        if (unit) {
          const img = document.createElement("img");
          img.alt = unit.name;
          img.title = unit.name;
          img.src = "assets/units/" + unit.id + ".png";
          img.addEventListener("error", () => img.remove());
          label.append(img);
        }

        const scale = document.createElement("div");
        scale.className = "bar-scale";
        const share = row.total / max;
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.width = "calc((100% - " + reserve + "px) * " + share + ")";

        let cursor = 0;
        for (const item of row.units) {
          const count = weeklyGrowth(item.unit.gr);
          const value = unitStat(item.unit, stat.key);
          for (let i = 0; i < count; i += 1) {
            const block = document.createElement("span");
            block.className = "block";
            const start = row.total ? (cursor / row.total) * 100 : 0;
            const slice = row.total ? (value / row.total) * 100 : 0;
            block.style.left = start + "%";
            block.style.width = slice + "%";
            block.dataset.name = item.unit.name;
            block.dataset.value = formatChartValue(value, stat.key);
            block.dataset.stat = stat.title;
            const tick = document.createElement("span");
            tick.className = "tick";
            tick.style.background = color;
            block.append(tick);
            bar.append(block);
            cursor += value;
          }
        }

        const seg = document.createElement("div");
        seg.className = "tier-seg";
        seg.style.left = "0%";
        seg.style.width = "100%";
        const line = document.createElement("span");
        line.className = "tier-line";
        line.style.background = color;
        seg.append(line);
        bar.append(seg);

        const sum = document.createElement("div");
        sum.className = "bar-sum";
        sum.style.color = color;
        sum.textContent = row.text;
        sum.style.left = "calc((100% - " + reserve + "px) * " + share + " + 10px)";
        scale.append(bar, sum);
        bars.append(label, scale);
      }

      wrap.append(bars);
      grid.append(wrap);
    }

    return grid;
  }

  const tip = document.createElement("div");
  tip.className = "tip";
  tip.setAttribute("role", "tooltip");
  tip.hidden = true;
  document.body.append(tip);

  function placeTip(event) {
    const pad = 14;
    const width = tip.offsetWidth;
    const height = tip.offsetHeight;
    let x = event.clientX + pad;
    let y = event.clientY + pad;
    if (x + width > window.innerWidth - 8) x = event.clientX - width - pad;
    if (y + height > window.innerHeight - 8) y = event.clientY - height - pad;
    tip.style.left = Math.max(8, x) + "px";
    tip.style.top = Math.max(8, y) + "px";
  }

  function showTip(block, event) {
    tip.replaceChildren();
    const name = document.createElement("strong");
    name.textContent = block.dataset.name;
    const value = document.createElement("div");
    value.textContent = block.dataset.stat + " " + block.dataset.value;
    tip.append(name, value);
    tip.hidden = false;
    placeTip(event);
  }

  vizView.addEventListener("mouseover", (event) => {
    const block = event.target.closest(".block");
    if (!block || !vizView.contains(block)) return;
    showTip(block, event);
  });

  vizView.addEventListener("mousemove", (event) => {
    if (tip.hidden) return;
    const block = event.target.closest(".block");
    if (!block) return;
    placeTip(event);
  });

  vizView.addEventListener("mouseout", (event) => {
    const next = event.relatedTarget;
    if (next && next.closest) {
      const nextBlock = next.closest(".block");
      if (nextBlock && vizView.contains(nextBlock)) return;
    }
    if (!event.target.closest || !event.target.closest(".block")) return;
    tip.hidden = true;
  });

  let currentView = null;
  let unitPicker = null;
  let openSlot = null;
  let rangesMenu = null;
  let openCount = null;

  function closePicker() {
    if (!unitPicker) return;
    unitPicker.hidden = true;
    if (openSlot) openSlot.button.classList.remove("open");
    openSlot = null;
  }

  function closeRanges() {
    if (!rangesMenu) return;
    rangesMenu.hidden = true;
    if (openCount) openCount.button.setAttribute("aria-expanded", "false");
    openCount = null;
  }

  function viewFromHash() {
    const hash = location.hash;
    if (hash === "#viz" || hash.startsWith("#viz-")) return "viz";
    if (hash === "#calc") return "calc";
    return "stats";
  }

  function applyRoute() {
    const view = viewFromHash();
    const changed = view !== currentView;
    currentView = view;
    statsView.hidden = view !== "stats";
    vizView.hidden = view !== "viz";
    calcView.hidden = view !== "calc";
    tierLinks.hidden = view !== "stats";
    vizLinks.hidden = view !== "viz" || tierPresentation === "separately";
    statsTab.classList.toggle("current", view === "stats");
    vizTab.classList.toggle("current", view === "viz");
    calcTab.classList.toggle("current", view === "calc");
    document.title = view === "viz"
      ? "Visualization · Heroes III"
      : view === "calc"
        ? "Calculator · Heroes III"
        : "Creatures by tier · Heroes III";
    if (view !== "calc") {
      closePicker();
      closeRanges();
    }
    if (view === "stats" && changed) {
      requestAnimationFrame(() => {
        syncColumns();
        syncRowHeights();
        refreshStatsNav();
        const id = location.hash.slice(1);
        if (id.startsWith("tier-") || id === "neutrals" || id === "dragons") document.getElementById(id)?.scrollIntoView();
      });
    }
    if (view === "viz") {
      tip.hidden = true;
      requestAnimationFrame(() => {
        if (changed) window.scrollTo(0, 0);
        syncVizLegend();
      });
    }
    if (view === "calc" && changed) {
      tip.hidden = true;
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }

  function buildCalc() {
    const head = document.createElement("header");
    head.className = "masthead";
    head.innerHTML = "<h1>Two armies, compared slot by slot.</h1><p>Damage, health, AI value, and cost are each creature’s stat multiplied by the stack size. A stack can be one number or a range. Damage stays a range. Cost is gold, then any resources.</p>";
    calcView.append(head);

    const catalog = [];
    const byId = new Map();
    function addGroup(label, rows) {
      const units = [];
      for (const row of rows) {
        if (row.base) units.push(row.base);
        if (row.up) units.push(row.up);
      }
      for (const unit of units) byId.set(unit.id, unit);
      catalog.push({ label, units });
    }
    for (const tier of data.tiers) addGroup("Tier " + tier.tier, tier.rows);
    addGroup("Neutrals", data.neutrals.flatMap((band) => band.rows));
    addGroup("Dragons", data.dragons);

    const bands = [
      ["Few", "1–4"],
      ["Several", "5–9"],
      ["Pack", "10–19"],
      ["Lots", "20–49"],
      ["Horde", "50–99"],
      ["Throng", "100–249"],
      ["Swarm", "250–499"],
      ["Zounds", "500–999"],
      ["Legion", "1000+"],
    ];
    const armies = [[], []];
    const squares = [[], []];
    const inputs = [[], []];
    const sums = [];
    const cmpNodes = {};
    const arena = document.createElement("div");
    arena.className = "arena";
    const board = document.createElement("div");
    board.className = "armies";
    const verdict = document.createElement("p");
    verdict.className = "verdict";
    verdict.hidden = true;
    arena.append(board, verdict);
    const sides = [];
    calcView.append(arena);

    for (let army = 0; army < 2; army += 1) {
      const side = document.createElement("div");
      side.className = "side";
      const formation = document.createElement("div");
      formation.className = "formation";
      const top = document.createElement("div");
      top.className = "slot-row";
      const bottom = document.createElement("div");
      bottom.className = "slot-row";
      formation.append(top, bottom);

      for (let index = 0; index < 7; index += 1) {
        const state = { id: null, count: "" };
        armies[army].push(state);
        const slot = document.createElement("div");
        slot.className = "slot";
        const button = document.createElement("button");
        button.type = "button";
        button.className = "square";
        button.setAttribute("aria-label", "Empty slot");
        const count = document.createElement("div");
        count.className = "count";
        const input = document.createElement("input");
        input.type = "text";
        input.setAttribute("aria-label", "Count");
        input.autocomplete = "off";
        input.spellcheck = false;
        const arrow = document.createElement("button");
        arrow.type = "button";
        arrow.className = "count-arrow";
        arrow.setAttribute("aria-label", "Quantity ranges");
        arrow.setAttribute("aria-haspopup", "listbox");
        arrow.setAttribute("aria-expanded", "false");
        input.addEventListener("input", () => {
          state.count = input.value;
          paintSums();
        });
        arrow.addEventListener("click", () => {
          if (openCount && openCount.input === input) closeRanges();
          else openRanges(input, state, arrow);
        });
        button.addEventListener("click", () => {
          if (openSlot && openSlot.button === button) closePicker();
          else openPicker(army, index, button);
        });
        count.append(input, arrow);
        slot.append(button, count);
        (index < 4 ? top : bottom).append(slot);
        squares[army].push(button);
        inputs[army].push(input);
      }

      const list = document.createElement("dl");
      list.className = "sums";
      const nodes = {};
      for (const [label, key] of [["Damage", "dmg"], ["HP", "hp"], ["AI", "ai"], ["Price", "gold"]]) {
        const term = document.createElement("dt");
        term.textContent = label;
        const value = document.createElement("dd");
        if (key === "gold") value.className = "cost";
        if (army === 1) list.append(value, term);
        else list.append(term, value);
        nodes[key] = value;
      }
      sums.push(nodes);
      side.append(formation, list);
      sides.push(side);
    }

    const cmp = document.createElement("div");
    cmp.className = "cmp";
    for (const key of ["dmg", "hp", "ai", "gold"]) {
      const sign = document.createElement("span");
      cmp.append(sign);
      cmpNodes[key] = sign;
    }
    board.append(sides[0], cmp, sides[1]);

    unitPicker = document.createElement("div");
    unitPicker.className = "picker";
    unitPicker.hidden = true;
    unitPicker.setAttribute("role", "dialog");
    unitPicker.setAttribute("aria-label", "Creatures");
    document.body.append(unitPicker);

    function paintSlot(army, index) {
      const state = armies[army][index];
      const button = squares[army][index];
      const input = inputs[army][index];
      const unit = state.id ? byId.get(state.id) : null;
      button.replaceChildren();
      if (unit) {
        const img = document.createElement("img");
        img.alt = "";
        img.src = "assets/units/" + unit.id + ".png";
        button.append(img);
        button.setAttribute("aria-label", unit.name);
        button.title = unit.name;
      } else {
        button.setAttribute("aria-label", "Empty slot");
        button.removeAttribute("title");
      }
      if (document.activeElement !== input) input.value = state.count;
    }

    function armyTotals(slots) {
      const totals = {
        dmg0: 0, dmg1: 0,
        hp0: 0, hp1: 0,
        ai0: 0, ai1: 0,
        gold0: 0, gold1: 0,
        res0: new Map(),
        res1: new Map(),
      };
      for (const state of slots) {
        const unit = state.id ? byId.get(state.id) : null;
        const count = parseCount(state.count);
        if (!unit || count.max === 0) continue;
        addSpan(totals, "dmg", unit.dmg[0] * count.min, unit.dmg[1] * count.max);
        addSpan(totals, "hp", unit.hp * count.min, unit.hp * count.max);
        addSpan(totals, "ai", unit.ai * count.min, unit.ai * count.max);
        addSpan(totals, "gold", unit.gold * count.min, unit.gold * count.max);
        const resource = parseResource(unit.res);
        if (!resource) continue;
        const amount = Number(resource.amount);
        addResource(totals.res0, resource.kind, amount * count.min);
        addResource(totals.res1, resource.kind, amount * count.max);
      }
      return totals;
    }

    function paintSums() {
      const totals = [armyTotals(armies[0]), armyTotals(armies[1])];
      const score = {
        dmg: [measure(totals[0].dmg0, totals[0].dmg1), measure(totals[1].dmg0, totals[1].dmg1)],
        hp: [measure(totals[0].hp0, totals[0].hp1), measure(totals[1].hp0, totals[1].hp1)],
        ai: [measure(totals[0].ai0, totals[0].ai1), measure(totals[1].ai0, totals[1].ai1)],
        gold: [measure(totals[0].gold0, totals[0].gold1), measure(totals[1].gold0, totals[1].gold1)],
      };
      for (let army = 0; army < 2; army += 1) {
        const row = totals[army];
        const nodes = sums[army];
        nodes.dmg.textContent = formatRange(row.dmg0, row.dmg1);
        nodes.hp.textContent = formatRange(row.hp0, row.hp1);
        nodes.ai.textContent = formatRange(row.ai0, row.ai1);
        fillPrice(nodes.gold, row, army === 0);
        nodes.dmg.classList.toggle("is-max", score.dmg[army] > score.dmg[1 - army]);
        nodes.hp.classList.toggle("is-max", score.hp[army] > score.hp[1 - army]);
        nodes.ai.classList.toggle("is-max", score.ai[army] > score.ai[1 - army]);
        nodes.gold.classList.toggle("is-max", score.gold[army] > score.gold[1 - army]);
      }
      for (const key of ["dmg", "hp", "ai", "gold"]) {
        const sign = relation(score[key][0], score[key][1]);
        cmpNodes[key].textContent = sign;
        cmpNodes[key].setAttribute("aria-label", relationLabel(key, sign));
      }
      const line = fightLine(score.ai[0], score.ai[1]);
      verdict.hidden = !line;
      verdict.textContent = line;
    }

    function fillPrice(cell, row, mirror) {
      cell.replaceChildren();
      const extra = [];
      for (const kind of ["wood", "ore", "mercury", "sulfur", "crystal", "gem"]) {
        const low = row.res0.get(kind) || 0;
        const high = row.res1.has(kind) ? row.res1.get(kind) : 0;
        if (!low && !high) continue;
        const text = document.createElement("span");
        text.className = "res-amt";
        text.textContent = formatRange(low, high);
        extra.push({ kind, text });
      }
      if (mirror) {
        for (let i = extra.length - 1; i >= 0; i -= 1) {
          cell.append(costIcon(extra[i].kind), extra[i].text);
        }
        cell.append(costIcon("gold"), document.createTextNode(formatRange(row.gold0, row.gold1)));
      } else {
        cell.append(document.createTextNode(formatRange(row.gold0, row.gold1)), costIcon("gold"));
        for (const item of extra) {
          cell.append(item.text, costIcon(item.kind));
        }
      }
    }

    function openPicker(army, index, button) {
      closeRanges();
      closePicker();
      openSlot = { army, index, button };
      button.classList.add("open");
      renderPicker();
      unitPicker.hidden = false;
      placePicker(button);
      const current = unitPicker.querySelector(".pick.current") || unitPicker.querySelector(".pick");
      current?.focus();
    }

    function renderPicker() {
      unitPicker.replaceChildren();
      const chosen = armies[openSlot.army][openSlot.index].id;
      const clearRow = document.createElement("div");
      clearRow.className = "pick-grid";
      clearRow.append(pickButton(null, chosen));
      unitPicker.append(clearRow);
      for (const group of catalog) {
        const block = document.createElement("div");
        block.className = "pick-tier";
        const label = document.createElement("div");
        label.className = "pick-label";
        label.textContent = group.label;
        const grid = document.createElement("div");
        grid.className = "pick-grid";
        for (const unit of group.units) grid.append(pickButton(unit, chosen));
        block.append(label, grid);
        unitPicker.append(block);
      }
    }

    function pickButton(unit, chosen) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "pick";
      if (!unit) {
        button.classList.add("empty");
        button.setAttribute("aria-label", "Clear slot");
      } else {
        button.title = unit.name;
        button.setAttribute("aria-label", unit.name);
        const img = document.createElement("img");
        img.alt = "";
        img.src = "assets/units/" + unit.id + ".png";
        button.append(img);
        if (unit.id === chosen) button.classList.add("current");
      }
      button.addEventListener("click", () => choose(unit ? unit.id : null));
      return button;
    }

    function choose(id) {
      const army = openSlot.army;
      const index = openSlot.index;
      const state = armies[army][index];
      state.id = id;
      if (id && state.count.trim() === "") state.count = "1";
      if (!id) state.count = "";
      closePicker();
      paintSlot(army, index);
      paintSums();
    }

    function placePicker(button) {
      const rect = button.getBoundingClientRect();
      const margin = 8;
      let left = rect.left;
      let top = rect.bottom + 6;
      unitPicker.style.left = "0px";
      unitPicker.style.top = "0px";
      const width = unitPicker.offsetWidth;
      const height = unitPicker.offsetHeight;
      if (left + width > window.innerWidth - margin) left = window.innerWidth - width - margin;
      if (top + height > window.innerHeight - margin) top = rect.top - height - 6;
      unitPicker.style.left = Math.max(margin, left) + "px";
      unitPicker.style.top = Math.max(margin, top) + "px";
    }

    rangesMenu = document.createElement("div");
    rangesMenu.className = "ranges";
    rangesMenu.hidden = true;
    rangesMenu.setAttribute("role", "listbox");
    rangesMenu.setAttribute("aria-label", "Quantity ranges");
    document.body.append(rangesMenu);

    function openRanges(input, state, arrow) {
      closePicker();
      closeRanges();
      openCount = { input, state, button: arrow };
      arrow.setAttribute("aria-expanded", "true");
      rangesMenu.replaceChildren();
      for (const [name, value] of bands) {
        const option = document.createElement("button");
        option.type = "button";
        option.setAttribute("role", "option");
        const title = document.createElement("span");
        title.textContent = name;
        const band = document.createElement("span");
        band.className = "band";
        band.textContent = value;
        option.append(title, band);
        if (state.count === value) option.classList.add("current");
        option.addEventListener("click", () => {
          state.count = value;
          input.value = value;
          closeRanges();
          paintSums();
        });
        rangesMenu.append(option);
      }
      rangesMenu.hidden = false;
      placeRanges(input.parentElement);
    }

    function placeRanges(anchor) {
      const rect = anchor.getBoundingClientRect();
      const margin = 8;
      rangesMenu.style.left = "0px";
      rangesMenu.style.top = "0px";
      const width = rangesMenu.offsetWidth;
      const height = rangesMenu.offsetHeight;
      let left = rect.right - width;
      let top = rect.bottom + 4;
      if (left < margin) left = margin;
      if (top + height > window.innerHeight - margin) top = rect.top - height - 4;
      rangesMenu.style.left = left + "px";
      rangesMenu.style.top = Math.max(margin, top) + "px";
    }

    document.addEventListener("pointerdown", (event) => {
      const target = event.target;
      if (rangesMenu && !rangesMenu.hidden) {
        const onArrow = target.closest && target.closest(".count-arrow");
        if (!rangesMenu.contains(target) && !onArrow) closeRanges();
      }
      if (!unitPicker || unitPicker.hidden) return;
      if (unitPicker.contains(target)) return;
      if (target.closest && target.closest(".square")) return;
      closePicker();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      closePicker();
      closeRanges();
    });
    window.addEventListener("resize", () => {
      if (unitPicker && !unitPicker.hidden && openSlot) placePicker(openSlot.button);
      if (rangesMenu && !rangesMenu.hidden && openCount) placeRanges(openCount.input.parentElement);
      syncVizLegend();
    });
    window.addEventListener("scroll", (event) => {
      if (rangesMenu && !rangesMenu.hidden && openCount && event.target !== rangesMenu) {
        placeRanges(openCount.input.parentElement);
      }
      if (!unitPicker || unitPicker.hidden || !openSlot) return;
      if (event.target === unitPicker) return;
      placePicker(openSlot.button);
    }, true);

    paintSums();
  }

  function parseCount(text) {
    const raw = String(text).trim().replace(/[\s,]/g, "");
    if (!raw) return { min: 0, max: 0 };
    const open = raw.match(/^(\d+)\+$/);
    if (open) {
      const min = Number(open[1]);
      return min > 0 ? { min, max: Infinity } : { min: 0, max: 0 };
    }
    const range = raw.match(/^(\d+)[-–—](\d+)$/);
    if (range) {
      let low = Number(range[1]);
      let high = Number(range[2]);
      if (low > high) {
        const swap = low;
        low = high;
        high = swap;
      }
      return { min: low, max: high };
    }
    const partial = raw.match(/^(\d+)[-–—]$/);
    if (partial) {
      const value = Number(partial[1]);
      return { min: value, max: value };
    }
    const value = Number.parseInt(raw, 10);
    if (!Number.isFinite(value) || value < 0) return { min: 0, max: 0 };
    return { min: value, max: value };
  }

  function addSpan(totals, key, low, high) {
    totals[key + "0"] += low;
    if (totals[key + "1"] === Infinity || high === Infinity) totals[key + "1"] = Infinity;
    else totals[key + "1"] += high;
  }

  function addResource(map, kind, amount) {
    const prev = map.get(kind) || 0;
    if (prev === Infinity || amount === Infinity) map.set(kind, Infinity);
    else map.set(kind, prev + amount);
  }

  function measure(low, high) {
    if (high === Infinity) return low;
    return (low + high) / 2;
  }

  function relation(left, right) {
    if (left === right) return "=";
    return left > right ? ">" : "<";
  }

  // King's Bounty: The Legend rates a fight from the army-strength ratio.
  // Here that strength is Heroes III AI value.
  function fightLine(left, right) {
    if (!(left > 0) && !(right > 0)) return "";
    if (left === Infinity && right === Infinity) return "Fifty-fifty.";
    if (!(right > 0) || left === Infinity) return "Sure victory for the left army.";
    if (!(left > 0) || right === Infinity) return "Sure victory for the right army.";
    const edge = left >= right ? left / right : right / left;
    const side = left >= right ? "left" : "right";
    if (edge < 1.5) return "Fifty-fifty.";
    const tone = edge >= 5 ? "Sure victory"
      : edge >= 3 ? "An easy fight"
        : edge >= 2 ? "Advantage"
          : "Not a bad position";
    const tail = tone === "Advantage" ? " to the " : " for the ";
    return tone + tail + side + " army.";
  }

  function relationLabel(key, sign) {
    const name = { dmg: "Damage", hp: "HP", ai: "AI", gold: "Price" }[key];
    if (sign === "=") return name + ", equal";
    return name + (sign === ">" ? ", left is greater" : ", right is greater");
  }

  function formatRange(low, high) {
    if (high === Infinity) return low.toLocaleString("en-US") + "+";
    const left = low.toLocaleString("en-US");
    if (low === high) return left;
    return left + "–" + high.toLocaleString("en-US");
  }

  function costIcon(kind) {
    const img = document.createElement("img");
    img.className = "res";
    img.alt = kind;
    img.src = resourceIcon[kind];
    return img;
  }

  buildViz();
  buildCalc();
  window.addEventListener("hashchange", applyRoute);
  applyRoute();
})();
