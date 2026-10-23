window.HEROES = {
  "factions": [
    {
      "id": "castle",
      "name": "Castle"
    },
    {
      "id": "rampart",
      "name": "Rampart"
    },
    {
      "id": "tower",
      "name": "Tower"
    },
    {
      "id": "inferno",
      "name": "Inferno"
    },
    {
      "id": "necropolis",
      "name": "Necropolis"
    },
    {
      "id": "dungeon",
      "name": "Dungeon"
    },
    {
      "id": "stronghold",
      "name": "Stronghold"
    },
    {
      "id": "fortress",
      "name": "Fortress"
    },
    {
      "id": "conflux",
      "name": "Conflux"
    },
    {
      "id": "cove",
      "name": "Cove"
    },
    {
      "id": "factory",
      "name": "Factory"
    },
    {
      "id": "bulwark",
      "name": "Bulwark"
    }
  ],
  "tiers": [
    {
      "tier": 1,
      "rows": [
        {
          "f": "castle",
          "base": {
            "id": "pikeman",
            "name": "Pikeman",
            "dmg": [
              1,
              3
            ],
            "atk": 4,
            "def": 5,
            "hp": 10,
            "spd": 4,
            "gr": 14,
            "gold": 60,
            "ai": 80,
            "ab": "Immune to jousting"
          },
          "up": {
            "id": "halberdier",
            "name": "Halberdier",
            "dmg": [
              2,
              3
            ],
            "atk": 6,
            "def": 5,
            "hp": 10,
            "spd": 5,
            "gr": 14,
            "gold": 75,
            "ai": 115,
            "ab": "Immune to jousting"
          }
        },
        {
          "f": "rampart",
          "base": {
            "id": "centaur",
            "name": "Centaur",
            "dmg": [
              2,
              3
            ],
            "atk": 5,
            "def": 3,
            "hp": 8,
            "spd": 6,
            "gr": 14,
            "gold": 70,
            "ai": 100,
            "ab": "Two-hex"
          },
          "up": {
            "id": "centaur-captain",
            "name": "Centaur Captain",
            "dmg": [
              2,
              3
            ],
            "atk": 6,
            "def": 3,
            "hp": 10,
            "spd": 8,
            "gr": 14,
            "gold": 90,
            "ai": 138,
            "ab": "Two-hex"
          }
        },
        {
          "f": "tower",
          "base": {
            "id": "gremlin",
            "name": "Gremlin",
            "dmg": [
              1,
              2
            ],
            "atk": 3,
            "def": 3,
            "hp": 4,
            "spd": 4,
            "gr": 16,
            "gold": 30,
            "ai": 44,
            "ab": ""
          },
          "up": {
            "id": "master-gremlin",
            "name": "Master Gremlin",
            "dmg": [
              1,
              2
            ],
            "atk": 4,
            "def": 4,
            "hp": 4,
            "spd": 5,
            "gr": 16,
            "gold": 40,
            "ai": 66,
            "ab": "Ranged (8)"
          }
        },
        {
          "f": "inferno",
          "base": {
            "id": "imp",
            "name": "Imp",
            "dmg": [
              1,
              2
            ],
            "atk": 2,
            "def": 3,
            "hp": 4,
            "spd": 5,
            "gr": 15,
            "gold": 50,
            "ai": 50,
            "ab": ""
          },
          "up": {
            "id": "familiar",
            "name": "Familiar",
            "dmg": [
              1,
              2
            ],
            "atk": 4,
            "def": 4,
            "hp": 4,
            "spd": 7,
            "gr": 15,
            "gold": 60,
            "ai": 60,
            "ab": "Steals mana"
          }
        },
        {
          "f": "necropolis",
          "base": {
            "id": "skeleton",
            "name": "Skeleton",
            "dmg": [
              1,
              3
            ],
            "atk": 5,
            "def": 4,
            "hp": 6,
            "spd": 4,
            "gr": 12,
            "gold": 60,
            "ai": 60,
            "ab": "Undead"
          },
          "up": {
            "id": "skeleton-warrior",
            "name": "Skeleton Warrior",
            "dmg": [
              1,
              3
            ],
            "atk": 6,
            "def": 6,
            "hp": 6,
            "spd": 5,
            "gr": 12,
            "gold": 70,
            "ai": 85,
            "ab": "Undead"
          }
        },
        {
          "f": "dungeon",
          "base": {
            "id": "troglodyte",
            "name": "Troglodyte",
            "dmg": [
              1,
              3
            ],
            "atk": 4,
            "def": 3,
            "hp": 5,
            "spd": 4,
            "gr": 14,
            "gold": 50,
            "ai": 59,
            "ab": "Immune to blind and petrify"
          },
          "up": {
            "id": "infernal-troglodyte",
            "name": "Infernal Troglodyte",
            "dmg": [
              1,
              3
            ],
            "atk": 5,
            "def": 4,
            "hp": 6,
            "spd": 5,
            "gr": 14,
            "gold": 65,
            "ai": 84,
            "ab": "Immune to blind and petrify"
          }
        },
        {
          "f": "stronghold",
          "base": {
            "id": "goblin",
            "name": "Goblin",
            "dmg": [
              1,
              2
            ],
            "atk": 4,
            "def": 2,
            "hp": 5,
            "spd": 5,
            "gr": 15,
            "gold": 40,
            "ai": 60,
            "ab": ""
          },
          "up": {
            "id": "hobgoblin",
            "name": "Hobgoblin",
            "dmg": [
              1,
              2
            ],
            "atk": 5,
            "def": 3,
            "hp": 5,
            "spd": 7,
            "gr": 15,
            "gold": 50,
            "ai": 78,
            "ab": ""
          }
        },
        {
          "f": "fortress",
          "base": {
            "id": "gnoll",
            "name": "Gnoll",
            "dmg": [
              2,
              3
            ],
            "atk": 3,
            "def": 5,
            "hp": 6,
            "spd": 4,
            "gr": 12,
            "gold": 50,
            "ai": 56,
            "ab": ""
          },
          "up": {
            "id": "gnoll-marauder",
            "name": "Gnoll Marauder",
            "dmg": [
              2,
              3
            ],
            "atk": 4,
            "def": 6,
            "hp": 6,
            "spd": 5,
            "gr": 12,
            "gold": 70,
            "ai": 90,
            "ab": ""
          }
        },
        {
          "f": "conflux",
          "base": {
            "id": "pixie",
            "name": "Pixie",
            "dmg": [
              1,
              2
            ],
            "atk": 2,
            "def": 2,
            "hp": 3,
            "spd": 7,
            "gr": 20,
            "gold": 25,
            "ai": 55,
            "ab": "Flying"
          },
          "up": {
            "id": "sprite",
            "name": "Sprite",
            "dmg": [
              1,
              3
            ],
            "atk": 2,
            "def": 2,
            "hp": 3,
            "spd": 9,
            "gr": 20,
            "gold": 30,
            "ai": 95,
            "ab": "Flying, No retaliation"
          }
        },
        {
          "f": "cove",
          "base": {
            "id": "nymph",
            "name": "Nymph",
            "dmg": [
              1,
              2
            ],
            "atk": 5,
            "def": 2,
            "hp": 4,
            "spd": 6,
            "gr": 16,
            "gold": 35,
            "ai": 57,
            "ab": "Flying, Immune to ice"
          },
          "up": {
            "id": "oceanid",
            "name": "Oceanid",
            "dmg": [
              1,
              3
            ],
            "atk": 6,
            "def": 2,
            "hp": 4,
            "spd": 8,
            "gr": 16,
            "gold": 45,
            "ai": 75,
            "ab": "Flying, Immune to ice"
          }
        },
        {
          "f": "factory",
          "base": {
            "id": "halfling",
            "name": "Halfling",
            "dmg": [
              1,
              3
            ],
            "atk": 4,
            "def": 2,
            "hp": 4,
            "spd": 5,
            "gr": 15,
            "gold": 40,
            "ai": 75,
            "ab": "Ranged (24), Positive luck"
          },
          "up": {
            "id": "halfling-grenadier",
            "name": "Halfling Grenadier",
            "dmg": [
              2,
              3
            ],
            "atk": 5,
            "def": 2,
            "hp": 4,
            "spd": 6,
            "gr": 15,
            "gold": 60,
            "ai": 95,
            "ab": "Ranged (24), Positive luck, Ignores 20% defense when shooting"
          }
        },
        {
          "f": "bulwark",
          "base": {
            "id": "kobold",
            "name": "Kobold",
            "dmg": [
              1,
              2
            ],
            "atk": 3,
            "def": 4,
            "hp": 8,
            "spd": 3,
            "gr": 15,
            "gold": 40,
            "ai": 54,
            "ab": "1 gold per day"
          },
          "up": {
            "id": "kobold-foreman",
            "name": "Kobold Foreman",
            "dmg": [
              1,
              2
            ],
            "atk": 5,
            "def": 6,
            "hp": 8,
            "spd": 5,
            "gr": 15,
            "gold": 60,
            "ai": 84,
            "ab": "1 gold per day"
          }
        }
      ]
    },
    {
      "tier": 2,
      "rows": [
        {
          "f": "castle",
          "base": {
            "id": "archer",
            "name": "Archer",
            "dmg": [
              2,
              3
            ],
            "atk": 6,
            "def": 3,
            "hp": 10,
            "spd": 4,
            "gr": 9,
            "gold": 100,
            "ai": 126,
            "ab": "Ranged (12)"
          },
          "up": {
            "id": "marksman",
            "name": "Marksman",
            "dmg": [
              2,
              3
            ],
            "atk": 6,
            "def": 3,
            "hp": 10,
            "spd": 6,
            "gr": 9,
            "gold": 150,
            "ai": 184,
            "ab": "Double shot (24)"
          }
        },
        {
          "f": "rampart",
          "base": {
            "id": "dwarf",
            "name": "Dwarf",
            "dmg": [
              2,
              4
            ],
            "atk": 6,
            "def": 7,
            "hp": 20,
            "spd": 3,
            "gr": 8,
            "gold": 120,
            "ai": 138,
            "ab": "20% spell resistance"
          },
          "up": {
            "id": "battle-dwarf",
            "name": "Battle Dwarf",
            "dmg": [
              2,
              4
            ],
            "atk": 7,
            "def": 7,
            "hp": 20,
            "spd": 5,
            "gr": 8,
            "gold": 150,
            "ai": 209,
            "ab": "40% spell resistance"
          }
        },
        {
          "f": "tower",
          "base": {
            "id": "stone-gargoyle",
            "name": "Stone Gargoyle",
            "dmg": [
              2,
              3
            ],
            "atk": 6,
            "def": 6,
            "hp": 16,
            "spd": 6,
            "gr": 9,
            "gold": 130,
            "ai": 165,
            "ab": "Flying, Gargoyle"
          },
          "up": {
            "id": "obsidian-gargoyle",
            "name": "Obsidian Gargoyle",
            "dmg": [
              2,
              3
            ],
            "atk": 7,
            "def": 7,
            "hp": 16,
            "spd": 9,
            "gr": 9,
            "gold": 160,
            "ai": 201,
            "ab": "Flying, Gargoyle"
          }
        },
        {
          "f": "inferno",
          "base": {
            "id": "gog",
            "name": "Gog",
            "dmg": [
              2,
              4
            ],
            "atk": 6,
            "def": 4,
            "hp": 13,
            "spd": 4,
            "gr": 8,
            "gold": 125,
            "ai": 159,
            "ab": "Ranged (12)"
          },
          "up": {
            "id": "magog",
            "name": "Magog",
            "dmg": [
              2,
              4
            ],
            "atk": 7,
            "def": 4,
            "hp": 13,
            "spd": 6,
            "gr": 8,
            "gold": 175,
            "ai": 240,
            "ab": "Ranged (24), Fire cloud"
          }
        },
        {
          "f": "necropolis",
          "base": {
            "id": "walking-dead",
            "name": "Walking Dead",
            "dmg": [
              2,
              3
            ],
            "atk": 5,
            "def": 5,
            "hp": 15,
            "spd": 3,
            "gr": 8,
            "gold": 100,
            "ai": 98,
            "ab": "Undead"
          },
          "up": {
            "id": "zombie",
            "name": "Zombie",
            "dmg": [
              2,
              3
            ],
            "atk": 5,
            "def": 5,
            "hp": 20,
            "spd": 4,
            "gr": 8,
            "gold": 125,
            "ai": 128,
            "ab": "Undead, 20% disease"
          }
        },
        {
          "f": "dungeon",
          "base": {
            "id": "harpy",
            "name": "Harpy",
            "dmg": [
              1,
              4
            ],
            "atk": 6,
            "def": 5,
            "hp": 14,
            "spd": 6,
            "gr": 8,
            "gold": 130,
            "ai": 154,
            "ab": "Flying, Strike and return"
          },
          "up": {
            "id": "harpy-hag",
            "name": "Harpy Hag",
            "dmg": [
              1,
              4
            ],
            "atk": 6,
            "def": 6,
            "hp": 14,
            "spd": 9,
            "gr": 8,
            "gold": 170,
            "ai": 238,
            "ab": "Flying, Strike and return, No retaliation"
          }
        },
        {
          "f": "stronghold",
          "base": {
            "id": "wolf-rider",
            "name": "Wolf Rider",
            "dmg": [
              2,
              4
            ],
            "atk": 7,
            "def": 5,
            "hp": 10,
            "spd": 6,
            "gr": 9,
            "gold": 100,
            "ai": 130,
            "ab": "Two-hex"
          },
          "up": {
            "id": "wolf-raider",
            "name": "Wolf Raider",
            "dmg": [
              3,
              4
            ],
            "atk": 8,
            "def": 5,
            "hp": 10,
            "spd": 8,
            "gr": 9,
            "gold": 140,
            "ai": 203,
            "ab": "Double attack, Two-hex"
          }
        },
        {
          "f": "fortress",
          "base": {
            "id": "lizardman",
            "name": "Lizardman",
            "dmg": [
              2,
              3
            ],
            "atk": 5,
            "def": 6,
            "hp": 14,
            "spd": 4,
            "gr": 9,
            "gold": 110,
            "ai": 126,
            "ab": "Ranged (12)"
          },
          "up": {
            "id": "lizard-warrior",
            "name": "Lizard Warrior",
            "dmg": [
              2,
              5
            ],
            "atk": 6,
            "def": 8,
            "hp": 15,
            "spd": 5,
            "gr": 9,
            "gold": 140,
            "ai": 156,
            "ab": "Ranged (24)"
          }
        },
        {
          "f": "conflux",
          "base": {
            "id": "air-elemental",
            "name": "Air Elemental",
            "dmg": [
              2,
              8
            ],
            "atk": 9,
            "def": 9,
            "hp": 25,
            "spd": 7,
            "gr": 6,
            "gold": 250,
            "ai": 356,
            "ab": "Elemental, Hatred of earth, Immune to meteor shower, Vulnerable to lightning"
          },
          "up": {
            "id": "storm-elemental",
            "name": "Storm Elemental",
            "dmg": [
              2,
              8
            ],
            "atk": 9,
            "def": 9,
            "hp": 25,
            "spd": 8,
            "gr": 6,
            "gold": 275,
            "ai": 486,
            "ab": "Elemental, Hatred of earth, Immune to meteor shower, Vulnerable to lightning, Ranged (24), Air protection (3)"
          }
        },
        {
          "f": "cove",
          "base": {
            "id": "crew-mate",
            "name": "Crew Mate",
            "dmg": [
              2,
              4
            ],
            "atk": 7,
            "def": 4,
            "hp": 15,
            "spd": 5,
            "gr": 9,
            "gold": 110,
            "ai": 155,
            "ab": ""
          },
          "up": {
            "id": "seaman",
            "name": "Seaman",
            "dmg": [
              3,
              4
            ],
            "atk": 8,
            "def": 6,
            "hp": 15,
            "spd": 6,
            "gr": 9,
            "gold": 140,
            "ai": 174,
            "ab": ""
          }
        },
        {
          "f": "factory",
          "base": {
            "id": "mechanic",
            "name": "Mechanic",
            "dmg": [
              3,
              4
            ],
            "atk": 6,
            "def": 5,
            "hp": 14,
            "spd": 6,
            "gr": 8,
            "gold": 140,
            "ai": 186,
            "ab": "Breath, Repairs machines (10)"
          },
          "up": {
            "id": "engineer",
            "name": "Engineer",
            "dmg": [
              3,
              5
            ],
            "atk": 7,
            "def": 5,
            "hp": 16,
            "spd": 7,
            "gr": 8,
            "gold": 170,
            "ai": 278,
            "ab": "Breath, Repairs machines (20)"
          }
        },
        {
          "f": "bulwark",
          "base": {
            "id": "mountain-ram",
            "name": "Mountain Ram",
            "dmg": [
              3,
              4
            ],
            "atk": 7,
            "def": 6,
            "hp": 18,
            "spd": 7,
            "gr": 9,
            "gold": 135,
            "ai": 228,
            "ab": ""
          },
          "up": {
            "id": "argali",
            "name": "Argali",
            "dmg": [
              3,
              4
            ],
            "atk": 8,
            "def": 6,
            "hp": 18,
            "spd": 8,
            "gr": 9,
            "gold": 170,
            "ai": 250,
            "ab": "Immune to ice, Nearby foes take +20% spell damage"
          }
        }
      ]
    },
    {
      "tier": 3,
      "rows": [
        {
          "f": "castle",
          "base": {
            "id": "griffin",
            "name": "Griffin",
            "dmg": [
              3,
              6
            ],
            "atk": 8,
            "def": 8,
            "hp": 25,
            "spd": 6,
            "gr": 7,
            "gold": 200,
            "ai": 351,
            "ab": "Flying, Retaliates twice, Two-hex"
          },
          "up": {
            "id": "royal-griffin",
            "name": "Royal Griffin",
            "dmg": [
              3,
              6
            ],
            "atk": 9,
            "def": 9,
            "hp": 25,
            "spd": 9,
            "gr": 7,
            "gold": 240,
            "ai": 448,
            "ab": "Flying, Unlimited retaliation, Two-hex"
          }
        },
        {
          "f": "rampart",
          "base": {
            "id": "wood-elf",
            "name": "Wood Elf",
            "dmg": [
              3,
              5
            ],
            "atk": 9,
            "def": 5,
            "hp": 15,
            "spd": 6,
            "gr": 7,
            "gold": 200,
            "ai": 234,
            "ab": "Ranged (24)"
          },
          "up": {
            "id": "grand-elf",
            "name": "Grand Elf",
            "dmg": [
              3,
              5
            ],
            "atk": 9,
            "def": 5,
            "hp": 15,
            "spd": 7,
            "gr": 7,
            "gold": 225,
            "ai": 331,
            "ab": "Double shot (24)"
          }
        },
        {
          "f": "tower",
          "base": {
            "id": "stone-golem",
            "name": "Stone Golem",
            "dmg": [
              4,
              5
            ],
            "atk": 7,
            "def": 10,
            "hp": 30,
            "spd": 3,
            "gr": 6,
            "gold": 150,
            "ai": 250,
            "ab": "Golem, −50% spell damage"
          },
          "up": {
            "id": "iron-golem",
            "name": "Iron Golem",
            "dmg": [
              4,
              5
            ],
            "atk": 9,
            "def": 10,
            "hp": 35,
            "spd": 5,
            "gr": 6,
            "gold": 200,
            "ai": 412,
            "ab": "Golem, −75% spell damage"
          }
        },
        {
          "f": "inferno",
          "base": {
            "id": "hell-hound",
            "name": "Hell Hound",
            "dmg": [
              2,
              7
            ],
            "atk": 10,
            "def": 6,
            "hp": 25,
            "spd": 7,
            "gr": 5,
            "gold": 200,
            "ai": 357,
            "ab": "Two-hex"
          },
          "up": {
            "id": "cerberus",
            "name": "Cerberus",
            "dmg": [
              2,
              7
            ],
            "atk": 10,
            "def": 8,
            "hp": 25,
            "spd": 8,
            "gr": 5,
            "gold": 250,
            "ai": 392,
            "ab": "Three-headed attack, No retaliation, Two-hex"
          }
        },
        {
          "f": "necropolis",
          "base": {
            "id": "wight",
            "name": "Wight",
            "dmg": [
              3,
              5
            ],
            "atk": 7,
            "def": 7,
            "hp": 18,
            "spd": 5,
            "gr": 7,
            "gold": 200,
            "ai": 252,
            "ab": "Undead, Flying, Regeneration"
          },
          "up": {
            "id": "wraith",
            "name": "Wraith",
            "dmg": [
              3,
              5
            ],
            "atk": 7,
            "def": 7,
            "hp": 18,
            "spd": 7,
            "gr": 7,
            "gold": 230,
            "ai": 315,
            "ab": "Undead, Flying, Regeneration, Mana burn"
          }
        },
        {
          "f": "dungeon",
          "base": {
            "id": "beholder",
            "name": "Beholder",
            "dmg": [
              3,
              5
            ],
            "atk": 9,
            "def": 7,
            "hp": 22,
            "spd": 5,
            "gr": 7,
            "gold": 250,
            "ai": 336,
            "ab": "Ranged (12), No melee penalty"
          },
          "up": {
            "id": "evil-eye",
            "name": "Evil Eye",
            "dmg": [
              3,
              5
            ],
            "atk": 10,
            "def": 8,
            "hp": 22,
            "spd": 7,
            "gr": 7,
            "gold": 280,
            "ai": 367,
            "ab": "Ranged (24), No melee penalty"
          }
        },
        {
          "f": "stronghold",
          "base": {
            "id": "orc",
            "name": "Orc",
            "dmg": [
              2,
              5
            ],
            "atk": 8,
            "def": 4,
            "hp": 15,
            "spd": 4,
            "gr": 7,
            "gold": 150,
            "ai": 192,
            "ab": "Ranged (12)"
          },
          "up": {
            "id": "orc-chieftain",
            "name": "Orc Chieftain",
            "dmg": [
              2,
              5
            ],
            "atk": 8,
            "def": 4,
            "hp": 20,
            "spd": 5,
            "gr": 7,
            "gold": 165,
            "ai": 240,
            "ab": "Ranged (24)"
          }
        },
        {
          "f": "fortress",
          "base": {
            "id": "serpent-fly",
            "name": "Serpent Fly",
            "dmg": [
              2,
              5
            ],
            "atk": 7,
            "def": 9,
            "hp": 20,
            "spd": 9,
            "gr": 8,
            "gold": 220,
            "ai": 268,
            "ab": "Flying, Dispels beneficial spells"
          },
          "up": {
            "id": "dragon-fly",
            "name": "Dragon Fly",
            "dmg": [
              2,
              5
            ],
            "atk": 8,
            "def": 10,
            "hp": 20,
            "spd": 13,
            "gr": 8,
            "gold": 240,
            "ai": 312,
            "ab": "Flying, Dispels beneficial spells, Weakness"
          }
        },
        {
          "f": "conflux",
          "base": {
            "id": "water-elemental",
            "name": "Water Elemental",
            "dmg": [
              3,
              7
            ],
            "atk": 8,
            "def": 10,
            "hp": 30,
            "spd": 5,
            "gr": 6,
            "gold": 300,
            "ai": 315,
            "ab": "Elemental, Hatred of fire, Immune to ice, Vulnerable to fire, Two-hex"
          },
          "up": {
            "id": "ice-elemental",
            "name": "Ice Elemental",
            "dmg": [
              3,
              7
            ],
            "atk": 8,
            "def": 10,
            "hp": 30,
            "spd": 6,
            "gr": 6,
            "gold": 375,
            "ai": 380,
            "ab": "Elemental, Hatred of fire, Immune to ice, Vulnerable to fire, Ranged (24), Water protection (3), Two-hex"
          }
        },
        {
          "f": "cove",
          "base": {
            "id": "pirate",
            "name": "Pirate",
            "dmg": [
              3,
              7
            ],
            "atk": 8,
            "def": 6,
            "hp": 15,
            "spd": 6,
            "gr": 7,
            "gold": 225,
            "ai": 312,
            "ab": "Ranged (4), No melee penalty"
          },
          "up": {
            "id": "corsair",
            "name": "Corsair",
            "dmg": [
              3,
              7
            ],
            "atk": 10,
            "def": 8,
            "hp": 15,
            "spd": 7,
            "gr": 7,
            "gold": 275,
            "ai": 407,
            "ab": "Ranged (4), No melee penalty, No retaliation"
          }
        },
        {
          "f": "cove",
          "base": null,
          "up": {
            "id": "sea-dog",
            "name": "Sea Dog",
            "dmg": [
              3,
              7
            ],
            "atk": 12,
            "def": 11,
            "hp": 15,
            "spd": 8,
            "gr": 7,
            "gold": 375,
            "ai": 602,
            "ab": "Ranged (12), No melee penalty, No retaliation, Accurate shot"
          }
        },
        {
          "f": "factory",
          "base": {
            "id": "armadillo",
            "name": "Armadillo",
            "dmg": [
              3,
              5
            ],
            "atk": 5,
            "def": 10,
            "hp": 25,
            "spd": 4,
            "gr": 6,
            "gold": 200,
            "ai": 198,
            "ab": "Two-hex"
          },
          "up": {
            "id": "bellwether-armadillo",
            "name": "Bellwether Armadillo",
            "dmg": [
              3,
              5
            ],
            "atk": 6,
            "def": 11,
            "hp": 25,
            "spd": 6,
            "gr": 6,
            "gold": 230,
            "ai": 256,
            "ab": "Two-hex"
          }
        },
        {
          "f": "bulwark",
          "base": {
            "id": "snow-elf",
            "name": "Snow Elf",
            "dmg": [
              4,
              6
            ],
            "atk": 9,
            "def": 8,
            "hp": 21,
            "spd": 6,
            "gr": 7,
            "gold": 230,
            "ai": 370,
            "ab": "Ranged (4), No melee penalty"
          },
          "up": {
            "id": "steel-elf",
            "name": "Steel Elf",
            "dmg": [
              4,
              6
            ],
            "atk": 9,
            "def": 10,
            "hp": 24,
            "spd": 7,
            "gr": 7,
            "gold": 260,
            "ai": 526,
            "ab": "Ranged (8), No melee penalty, Shoots while blocked"
          }
        }
      ]
    },
    {
      "tier": 4,
      "rows": [
        {
          "f": "castle",
          "base": {
            "id": "swordsman",
            "name": "Swordsman",
            "dmg": [
              6,
              9
            ],
            "atk": 10,
            "def": 12,
            "hp": 35,
            "spd": 5,
            "gr": 4,
            "gold": 300,
            "ai": 445,
            "ab": ""
          },
          "up": {
            "id": "crusader",
            "name": "Crusader",
            "dmg": [
              7,
              10
            ],
            "atk": 12,
            "def": 12,
            "hp": 35,
            "spd": 6,
            "gr": 4,
            "gold": 400,
            "ai": 588,
            "ab": "Double attack"
          }
        },
        {
          "f": "rampart",
          "base": {
            "id": "pegasus",
            "name": "Pegasus",
            "dmg": [
              5,
              9
            ],
            "atk": 9,
            "def": 8,
            "hp": 30,
            "spd": 8,
            "gr": 5,
            "gold": 250,
            "ai": 518,
            "ab": "Flying, Spell cost +2, Two-hex"
          },
          "up": {
            "id": "silver-pegasus",
            "name": "Silver Pegasus",
            "dmg": [
              5,
              9
            ],
            "atk": 9,
            "def": 10,
            "hp": 30,
            "spd": 12,
            "gr": 5,
            "gold": 275,
            "ai": 532,
            "ab": "Flying, Spell cost +2, Two-hex"
          }
        },
        {
          "f": "tower",
          "base": {
            "id": "mage",
            "name": "Mage",
            "dmg": [
              7,
              9
            ],
            "atk": 11,
            "def": 8,
            "hp": 25,
            "spd": 5,
            "gr": 4,
            "gold": 350,
            "ai": 570,
            "ab": "Ranged (24), No melee penalty, No wall penalty, Spell cost −2"
          },
          "up": {
            "id": "arch-mage",
            "name": "Arch Mage",
            "dmg": [
              7,
              9
            ],
            "atk": 12,
            "def": 9,
            "hp": 30,
            "spd": 7,
            "gr": 4,
            "gold": 450,
            "ai": 680,
            "ab": "Ranged (24), No melee penalty, No wall penalty, Spell cost −2"
          }
        },
        {
          "f": "inferno",
          "base": {
            "id": "demon",
            "name": "Demon",
            "dmg": [
              7,
              9
            ],
            "atk": 10,
            "def": 10,
            "hp": 35,
            "spd": 5,
            "gr": 4,
            "gold": 250,
            "ai": 445,
            "ab": ""
          },
          "up": {
            "id": "horned-demon",
            "name": "Horned Demon",
            "dmg": [
              7,
              9
            ],
            "atk": 10,
            "def": 10,
            "hp": 40,
            "spd": 6,
            "gr": 4,
            "gold": 270,
            "ai": 480,
            "ab": ""
          }
        },
        {
          "f": "necropolis",
          "base": {
            "id": "vampire",
            "name": "Vampire",
            "dmg": [
              5,
              8
            ],
            "atk": 10,
            "def": 9,
            "hp": 30,
            "spd": 6,
            "gr": 4,
            "gold": 360,
            "ai": 555,
            "ab": "Undead, Flying, No retaliation"
          },
          "up": {
            "id": "vampire-lord",
            "name": "Vampire Lord",
            "dmg": [
              5,
              8
            ],
            "atk": 10,
            "def": 10,
            "hp": 40,
            "spd": 9,
            "gr": 4,
            "gold": 500,
            "ai": 783,
            "ab": "Undead, Flying, No retaliation, Life drain"
          }
        },
        {
          "f": "dungeon",
          "base": {
            "id": "medusa",
            "name": "Medusa",
            "dmg": [
              6,
              8
            ],
            "atk": 9,
            "def": 9,
            "hp": 25,
            "spd": 5,
            "gr": 4,
            "gold": 300,
            "ai": 517,
            "ab": "Ranged (4), No melee penalty, 20% petrify, Two-hex"
          },
          "up": {
            "id": "medusa-queen",
            "name": "Medusa Queen",
            "dmg": [
              6,
              8
            ],
            "atk": 10,
            "def": 10,
            "hp": 30,
            "spd": 6,
            "gr": 4,
            "gold": 330,
            "ai": 577,
            "ab": "Ranged (8), No melee penalty, 20% petrify, Two-hex"
          }
        },
        {
          "f": "stronghold",
          "base": {
            "id": "ogre",
            "name": "Ogre",
            "dmg": [
              6,
              12
            ],
            "atk": 13,
            "def": 7,
            "hp": 40,
            "spd": 4,
            "gr": 4,
            "gold": 300,
            "ai": 416,
            "ab": ""
          },
          "up": {
            "id": "ogre-mage",
            "name": "Ogre Mage",
            "dmg": [
              6,
              12
            ],
            "atk": 13,
            "def": 7,
            "hp": 60,
            "spd": 5,
            "gr": 4,
            "gold": 400,
            "ai": 672,
            "ab": "Bloodlust (3)"
          }
        },
        {
          "f": "fortress",
          "base": {
            "id": "basilisk",
            "name": "Basilisk",
            "dmg": [
              6,
              10
            ],
            "atk": 11,
            "def": 11,
            "hp": 35,
            "spd": 5,
            "gr": 4,
            "gold": 325,
            "ai": 552,
            "ab": "20% petrify, Two-hex"
          },
          "up": {
            "id": "greater-basilisk",
            "name": "Greater Basilisk",
            "dmg": [
              6,
              10
            ],
            "atk": 12,
            "def": 12,
            "hp": 40,
            "spd": 7,
            "gr": 4,
            "gold": 400,
            "ai": 714,
            "ab": "20% petrify, Two-hex"
          }
        },
        {
          "f": "conflux",
          "base": {
            "id": "fire-elemental",
            "name": "Fire Elemental",
            "dmg": [
              4,
              6
            ],
            "atk": 10,
            "def": 8,
            "hp": 35,
            "spd": 6,
            "gr": 5,
            "gold": 350,
            "ai": 345,
            "ab": "Elemental, Immune to fire, Hatred of water, Vulnerable to ice"
          },
          "up": {
            "id": "energy-elemental",
            "name": "Energy Elemental",
            "dmg": [
              4,
              6
            ],
            "atk": 12,
            "def": 8,
            "hp": 35,
            "spd": 8,
            "gr": 5,
            "gold": 400,
            "ai": 470,
            "ab": "Flying, Elemental, Immune to fire, Hatred of water, Vulnerable to ice, Fire protection (3)"
          }
        },
        {
          "f": "cove",
          "base": {
            "id": "stormbird",
            "name": "Stormbird",
            "dmg": [
              6,
              9
            ],
            "atk": 10,
            "def": 8,
            "hp": 30,
            "spd": 9,
            "gr": 4,
            "gold": 275,
            "ai": 502,
            "ab": "Flying, Two-hex"
          },
          "up": {
            "id": "ayssid",
            "name": "Ayssid",
            "dmg": [
              6,
              10
            ],
            "atk": 11,
            "def": 8,
            "hp": 30,
            "spd": 11,
            "gr": 4,
            "gold": 325,
            "ai": 645,
            "ab": "Flying, Two-hex, Ferocity"
          }
        },
        {
          "f": "factory",
          "base": {
            "id": "automaton",
            "name": "Automaton",
            "dmg": [
              7,
              7
            ],
            "atk": 12,
            "def": 10,
            "hp": 30,
            "spd": 8,
            "gr": 5,
            "gold": 350,
            "ai": 669,
            "ab": "Two-hex, Mechanical, Detonation"
          },
          "up": {
            "id": "sentinel-automaton",
            "name": "Sentinel Automaton",
            "dmg": [
              9,
              9
            ],
            "atk": 12,
            "def": 10,
            "hp": 30,
            "spd": 9,
            "gr": 5,
            "gold": 450,
            "ai": 947,
            "ab": "Two-hex, Mechanical, Detonation, No retaliation"
          }
        },
        {
          "f": "bulwark",
          "base": {
            "id": "yeti",
            "name": "Yeti",
            "dmg": [
              7,
              9
            ],
            "atk": 10,
            "def": 8,
            "hp": 40,
            "spd": 6,
            "gr": 4,
            "gold": 325,
            "ai": 504,
            "ab": "Shakes off negative effects"
          },
          "up": {
            "id": "yeti-runemaster",
            "name": "Yeti Runemaster",
            "dmg": [
              7,
              9
            ],
            "atk": 11,
            "def": 9,
            "hp": 45,
            "spd": 7,
            "gr": 4,
            "gold": 400,
            "ai": 751,
            "ab": "Shakes off negative effects, Runes"
          }
        }
      ]
    },
    {
      "tier": 5,
      "rows": [
        {
          "f": "castle",
          "base": {
            "id": "monk",
            "name": "Monk",
            "dmg": [
              10,
              12
            ],
            "atk": 12,
            "def": 7,
            "hp": 30,
            "spd": 5,
            "gr": 3,
            "gold": 400,
            "ai": 485,
            "ab": "Ranged (12)"
          },
          "up": {
            "id": "zealot",
            "name": "Zealot",
            "dmg": [
              10,
              12
            ],
            "atk": 12,
            "def": 10,
            "hp": 30,
            "spd": 7,
            "gr": 3,
            "gold": 450,
            "ai": 750,
            "ab": "Ranged (24), No melee penalty"
          }
        },
        {
          "f": "rampart",
          "base": {
            "id": "dendroid-guard",
            "name": "Dendroid Guard",
            "dmg": [
              10,
              14
            ],
            "atk": 9,
            "def": 12,
            "hp": 55,
            "spd": 3,
            "gr": 3,
            "gold": 350,
            "ai": 517,
            "ab": "Binding"
          },
          "up": {
            "id": "dendroid-soldier",
            "name": "Dendroid Soldier",
            "dmg": [
              10,
              14
            ],
            "atk": 9,
            "def": 12,
            "hp": 65,
            "spd": 4,
            "gr": 3,
            "gold": 425,
            "ai": 803,
            "ab": "Binding"
          }
        },
        {
          "f": "tower",
          "base": {
            "id": "genie",
            "name": "Genie",
            "dmg": [
              13,
              16
            ],
            "atk": 12,
            "def": 12,
            "hp": 40,
            "spd": 7,
            "gr": 3,
            "gold": 550,
            "ai": 884,
            "ab": "Flying, Hatred of efreet"
          },
          "up": {
            "id": "master-genie",
            "name": "Master Genie",
            "dmg": [
              13,
              16
            ],
            "atk": 12,
            "def": 12,
            "hp": 40,
            "spd": 11,
            "gr": 3,
            "gold": 600,
            "ai": 942,
            "ab": "Flying, Hatred of efreet, Random spell (3)"
          }
        },
        {
          "f": "inferno",
          "base": {
            "id": "pit-fiend",
            "name": "Pit Fiend",
            "dmg": [
              13,
              17
            ],
            "atk": 13,
            "def": 13,
            "hp": 45,
            "spd": 6,
            "gr": 3,
            "gold": 500,
            "ai": 765,
            "ab": ""
          },
          "up": {
            "id": "pit-lord",
            "name": "Pit Lord",
            "dmg": [
              13,
              17
            ],
            "atk": 13,
            "def": 13,
            "hp": 45,
            "spd": 7,
            "gr": 3,
            "gold": 700,
            "ai": 1224,
            "ab": "Summons demons (1)"
          }
        },
        {
          "f": "necropolis",
          "base": {
            "id": "lich",
            "name": "Lich",
            "dmg": [
              11,
              13
            ],
            "atk": 13,
            "def": 10,
            "hp": 30,
            "spd": 6,
            "gr": 3,
            "gold": 550,
            "ai": 848,
            "ab": "Undead, Ranged (12), Death cloud"
          },
          "up": {
            "id": "power-lich",
            "name": "Power Lich",
            "dmg": [
              11,
              15
            ],
            "atk": 13,
            "def": 10,
            "hp": 40,
            "spd": 7,
            "gr": 3,
            "gold": 600,
            "ai": 1079,
            "ab": "Undead, Ranged (24), Death cloud"
          }
        },
        {
          "f": "dungeon",
          "base": {
            "id": "minotaur",
            "name": "Minotaur",
            "dmg": [
              12,
              20
            ],
            "atk": 14,
            "def": 12,
            "hp": 50,
            "spd": 6,
            "gr": 3,
            "gold": 500,
            "ai": 835,
            "ab": "Positive morale"
          },
          "up": {
            "id": "minotaur-king",
            "name": "Minotaur King",
            "dmg": [
              12,
              20
            ],
            "atk": 15,
            "def": 15,
            "hp": 50,
            "spd": 8,
            "gr": 3,
            "gold": 575,
            "ai": 1068,
            "ab": "Positive morale"
          }
        },
        {
          "f": "stronghold",
          "base": {
            "id": "roc",
            "name": "Roc",
            "dmg": [
              11,
              15
            ],
            "atk": 13,
            "def": 11,
            "hp": 60,
            "spd": 7,
            "gr": 3,
            "gold": 600,
            "ai": 1027,
            "ab": "Flying, Two-hex"
          },
          "up": {
            "id": "thunderbird",
            "name": "Thunderbird",
            "dmg": [
              11,
              15
            ],
            "atk": 13,
            "def": 11,
            "hp": 60,
            "spd": 11,
            "gr": 3,
            "gold": 700,
            "ai": 1106,
            "ab": "Flying, 20% lightning, Two-hex"
          }
        },
        {
          "f": "fortress",
          "base": {
            "id": "gorgon",
            "name": "Gorgon",
            "dmg": [
              12,
              16
            ],
            "atk": 10,
            "def": 14,
            "hp": 70,
            "spd": 5,
            "gr": 3,
            "gold": 525,
            "ai": 890,
            "ab": "Two-hex"
          },
          "up": {
            "id": "mighty-gorgon",
            "name": "Mighty Gorgon",
            "dmg": [
              12,
              16
            ],
            "atk": 11,
            "def": 16,
            "hp": 70,
            "spd": 6,
            "gr": 3,
            "gold": 600,
            "ai": 1028,
            "ab": "10% death stare, Two-hex"
          }
        },
        {
          "f": "conflux",
          "base": {
            "id": "earth-elemental",
            "name": "Earth Elemental",
            "dmg": [
              4,
              8
            ],
            "atk": 10,
            "def": 10,
            "hp": 40,
            "spd": 4,
            "gr": 4,
            "gold": 400,
            "ai": 330,
            "ab": "Elemental, Hatred of air, Immune to lightning, Vulnerable to meteor shower"
          },
          "up": {
            "id": "magma-elemental",
            "name": "Magma Elemental",
            "dmg": [
              6,
              10
            ],
            "atk": 11,
            "def": 11,
            "hp": 40,
            "spd": 6,
            "gr": 4,
            "gold": 500,
            "ai": 490,
            "ab": "Elemental, Hatred of air, Immune to lightning, Vulnerable to meteor shower, Earth protection (3)"
          }
        },
        {
          "f": "cove",
          "base": {
            "id": "sea-witch",
            "name": "Sea Witch",
            "dmg": [
              10,
              14
            ],
            "atk": 12,
            "def": 7,
            "hp": 35,
            "spd": 6,
            "gr": 3,
            "gold": 515,
            "ai": 790,
            "ab": "Ranged (12), Casts after shot"
          },
          "up": {
            "id": "sorceress",
            "name": "Sorceress",
            "dmg": [
              10,
              16
            ],
            "atk": 12,
            "def": 9,
            "hp": 35,
            "spd": 7,
            "gr": 3,
            "gold": 565,
            "ai": 852,
            "ab": "Ranged (12), Casts after shot"
          }
        },
        {
          "f": "factory",
          "base": {
            "id": "sandworm",
            "name": "Sandworm",
            "dmg": [
              12,
              16
            ],
            "atk": 13,
            "def": 12,
            "hp": 50,
            "spd": 8,
            "gr": 3,
            "gold": 575,
            "ai": 991,
            "ab": "Two-hex, Burrows, Immune to blind and petrify"
          },
          "up": {
            "id": "olgoi-khorkhoi",
            "name": "Olgoi-Khorkhoi",
            "dmg": [
              12,
              16
            ],
            "atk": 15,
            "def": 12,
            "hp": 60,
            "spd": 10,
            "gr": 3,
            "gold": 650,
            "ai": 1220,
            "ab": "Two-hex, Burrows, Immune to blind and petrify, Devours corpses"
          }
        },
        {
          "f": "bulwark",
          "base": {
            "id": "shaman",
            "name": "Shaman",
            "dmg": [
              11,
              13
            ],
            "atk": 11,
            "def": 8,
            "hp": 35,
            "spd": 5,
            "gr": 3,
            "gold": 450,
            "ai": 685,
            "ab": "Ranged (12), Casts Air Shield"
          },
          "up": {
            "id": "great-shaman",
            "name": "Great Shaman",
            "dmg": [
              11,
              13
            ],
            "atk": 12,
            "def": 11,
            "hp": 35,
            "spd": 6,
            "gr": 3,
            "gold": 600,
            "ai": 818,
            "ab": "Ranged (24), Casts Air Shield, Freezing shot"
          }
        }
      ]
    },
    {
      "tier": 6,
      "rows": [
        {
          "f": "castle",
          "base": {
            "id": "cavalier",
            "name": "Cavalier",
            "dmg": [
              15,
              25
            ],
            "atk": 15,
            "def": 15,
            "hp": 100,
            "spd": 7,
            "gr": 2,
            "gold": 1000,
            "ai": 1946,
            "ab": "Jousting, Two-hex"
          },
          "up": {
            "id": "champion",
            "name": "Champion",
            "dmg": [
              20,
              25
            ],
            "atk": 16,
            "def": 16,
            "hp": 100,
            "spd": 9,
            "gr": 2,
            "gold": 1200,
            "ai": 2100,
            "ab": "Jousting, Two-hex"
          }
        },
        {
          "f": "rampart",
          "base": {
            "id": "unicorn",
            "name": "Unicorn",
            "dmg": [
              18,
              22
            ],
            "atk": 15,
            "def": 14,
            "hp": 90,
            "spd": 7,
            "gr": 2,
            "gold": 850,
            "ai": 1806,
            "ab": "20% blind, Aura of resistance, Two-hex"
          },
          "up": {
            "id": "war-unicorn",
            "name": "War Unicorn",
            "dmg": [
              18,
              22
            ],
            "atk": 15,
            "def": 14,
            "hp": 110,
            "spd": 9,
            "gr": 2,
            "gold": 950,
            "ai": 2030,
            "ab": "20% blind, Aura of resistance, Two-hex"
          }
        },
        {
          "f": "tower",
          "base": {
            "id": "naga",
            "name": "Naga",
            "dmg": [
              20,
              20
            ],
            "atk": 16,
            "def": 13,
            "hp": 110,
            "spd": 5,
            "gr": 2,
            "gold": 1100,
            "ai": 2016,
            "ab": "No retaliation, Two-hex"
          },
          "up": {
            "id": "naga-queen",
            "name": "Naga Queen",
            "dmg": [
              30,
              30
            ],
            "atk": 16,
            "def": 13,
            "hp": 110,
            "spd": 7,
            "gr": 2,
            "gold": 1600,
            "ai": 2840,
            "ab": "No retaliation, Two-hex"
          }
        },
        {
          "f": "inferno",
          "base": {
            "id": "efreet",
            "name": "Efreet",
            "dmg": [
              16,
              24
            ],
            "atk": 16,
            "def": 12,
            "hp": 90,
            "spd": 9,
            "gr": 2,
            "gold": 900,
            "ai": 1670,
            "ab": "Flying, Immune to fire, Hatred of genies"
          },
          "up": {
            "id": "efreet-sultan",
            "name": "Efreet Sultan",
            "dmg": [
              16,
              24
            ],
            "atk": 16,
            "def": 14,
            "hp": 90,
            "spd": 13,
            "gr": 2,
            "gold": 1100,
            "ai": 1848,
            "ab": "Flying, Immune to fire, Hatred of genies, Fire shield"
          }
        },
        {
          "f": "necropolis",
          "base": {
            "id": "black-knight",
            "name": "Black Knight",
            "dmg": [
              15,
              30
            ],
            "atk": 16,
            "def": 16,
            "hp": 120,
            "spd": 7,
            "gr": 2,
            "gold": 1200,
            "ai": 2087,
            "ab": "Undead, 25% curse, Two-hex"
          },
          "up": {
            "id": "dread-knight",
            "name": "Dread Knight",
            "dmg": [
              15,
              30
            ],
            "atk": 18,
            "def": 18,
            "hp": 120,
            "spd": 9,
            "gr": 2,
            "gold": 1500,
            "ai": 2382,
            "ab": "Undead, 25% curse, 20% death blow, Two-hex"
          }
        },
        {
          "f": "dungeon",
          "base": {
            "id": "manticore",
            "name": "Manticore",
            "dmg": [
              14,
              20
            ],
            "atk": 15,
            "def": 13,
            "hp": 80,
            "spd": 7,
            "gr": 2,
            "gold": 850,
            "ai": 1547,
            "ab": "Flying, Two-hex"
          },
          "up": {
            "id": "scorpicore",
            "name": "Scorpicore",
            "dmg": [
              14,
              20
            ],
            "atk": 16,
            "def": 14,
            "hp": 80,
            "spd": 11,
            "gr": 2,
            "gold": 1050,
            "ai": 1589,
            "ab": "Flying, 20% paralysis, Two-hex"
          }
        },
        {
          "f": "stronghold",
          "base": {
            "id": "cyclops",
            "name": "Cyclops",
            "dmg": [
              16,
              20
            ],
            "atk": 15,
            "def": 12,
            "hp": 70,
            "spd": 6,
            "gr": 2,
            "gold": 750,
            "ai": 1266,
            "ab": "Ranged (16), Attacks walls"
          },
          "up": {
            "id": "cyclops-king",
            "name": "Cyclops King",
            "dmg": [
              16,
              20
            ],
            "atk": 17,
            "def": 13,
            "hp": 70,
            "spd": 8,
            "gr": 2,
            "gold": 1100,
            "ai": 1443,
            "ab": "Ranged (24), Attacks walls"
          }
        },
        {
          "f": "fortress",
          "base": {
            "id": "wyvern",
            "name": "Wyvern",
            "dmg": [
              14,
              18
            ],
            "atk": 14,
            "def": 14,
            "hp": 70,
            "spd": 7,
            "gr": 2,
            "gold": 800,
            "ai": 1350,
            "ab": "Flying, Two-hex"
          },
          "up": {
            "id": "wyvern-monarch",
            "name": "Wyvern Monarch",
            "dmg": [
              18,
              22
            ],
            "atk": 14,
            "def": 14,
            "hp": 70,
            "spd": 11,
            "gr": 2,
            "gold": 1100,
            "ai": 1518,
            "ab": "Flying, Two-hex, 30% poison"
          }
        },
        {
          "f": "conflux",
          "base": {
            "id": "psychic-elemental",
            "name": "Psychic Elemental",
            "dmg": [
              10,
              20
            ],
            "atk": 15,
            "def": 13,
            "hp": 75,
            "spd": 7,
            "gr": 2,
            "gold": 750,
            "ai": 1669,
            "ab": "Elemental, Attack all around, No retaliation, Weak vs mind immunity"
          },
          "up": {
            "id": "magic-elemental",
            "name": "Magic Elemental",
            "dmg": [
              15,
              25
            ],
            "atk": 15,
            "def": 13,
            "hp": 80,
            "spd": 9,
            "gr": 2,
            "gold": 800,
            "ai": 2012,
            "ab": "Elemental, Attack all around, No retaliation, Spell immunity, Weak vs spell immunity"
          }
        },
        {
          "f": "cove",
          "base": {
            "id": "nix",
            "name": "Nix",
            "dmg": [
              18,
              22
            ],
            "atk": 13,
            "def": 16,
            "hp": 80,
            "spd": 6,
            "gr": 2,
            "gold": 1000,
            "ai": 1415,
            "ab": "Ignores 30% attack"
          },
          "up": {
            "id": "nix-warrior",
            "name": "Nix Warrior",
            "dmg": [
              18,
              22
            ],
            "atk": 14,
            "def": 17,
            "hp": 90,
            "spd": 7,
            "gr": 2,
            "gold": 1300,
            "ai": 2116,
            "ab": "Ignores 60% attack"
          }
        },
        {
          "f": "factory",
          "base": {
            "id": "gunslinger",
            "name": "Gunslinger",
            "dmg": [
              14,
              24
            ],
            "atk": 17,
            "def": 12,
            "hp": 45,
            "spd": 7,
            "gr": 2,
            "gold": 800,
            "ai": 1351,
            "ab": "Ranged (16), Preemptive shot (once a round)"
          },
          "up": {
            "id": "bounty-hunter",
            "name": "Bounty Hunter",
            "dmg": [
              14,
              24
            ],
            "atk": 18,
            "def": 14,
            "hp": 45,
            "spd": 8,
            "gr": 2,
            "gold": 1100,
            "ai": 1454,
            "ab": "Ranged (16), Preemptive shot (every shot)"
          }
        },
        {
          "f": "bulwark",
          "base": {
            "id": "mammoth",
            "name": "Mammoth",
            "dmg": [
              14,
              20
            ],
            "atk": 12,
            "def": 16,
            "hp": 120,
            "spd": 5,
            "gr": 2,
            "gold": 850,
            "ai": 1359,
            "ab": ""
          },
          "up": {
            "id": "war-mammoth",
            "name": "War Mammoth",
            "dmg": [
              14,
              20
            ],
            "atk": 14,
            "def": 18,
            "hp": 135,
            "spd": 6,
            "gr": 2,
            "gold": 1000,
            "ai": 1601,
            "ab": "+100% defense while defending"
          }
        }
      ]
    },
    {
      "tier": 7,
      "rows": [
        {
          "f": "castle",
          "base": {
            "id": "angel",
            "name": "Angel",
            "dmg": [
              50,
              50
            ],
            "atk": 20,
            "def": 20,
            "hp": 200,
            "spd": 12,
            "gr": 1,
            "gold": 3000,
            "ai": 5019,
            "ab": "Flying, Morale +1, Hatred of devils",
            "res": "1 gem"
          },
          "up": {
            "id": "archangel",
            "name": "Archangel",
            "dmg": [
              50,
              50
            ],
            "atk": 30,
            "def": 30,
            "hp": 250,
            "spd": 18,
            "gr": 1,
            "gold": 5000,
            "ai": 8776,
            "ab": "Flying, Morale +1, Hatred of devils, Resurrection (1), Two-hex",
            "res": "3 gems"
          }
        },
        {
          "f": "rampart",
          "base": {
            "id": "green-dragon",
            "name": "Green Dragon",
            "dmg": [
              40,
              50
            ],
            "atk": 18,
            "def": 18,
            "hp": 180,
            "spd": 10,
            "gr": 1,
            "gold": 2400,
            "ai": 4872,
            "ab": "Flying, Immune to spells 1–3, Breath, Two-hex",
            "res": "1 crystal"
          },
          "up": {
            "id": "gold-dragon",
            "name": "Gold Dragon",
            "dmg": [
              40,
              50
            ],
            "atk": 27,
            "def": 27,
            "hp": 250,
            "spd": 16,
            "gr": 1,
            "gold": 4000,
            "ai": 8613,
            "ab": "Flying, Immune to spells 1–4, Breath, Two-hex",
            "res": "2 crystals"
          }
        },
        {
          "f": "tower",
          "base": {
            "id": "giant",
            "name": "Giant",
            "dmg": [
              40,
              60
            ],
            "atk": 19,
            "def": 16,
            "hp": 150,
            "spd": 7,
            "gr": 1,
            "gold": 2000,
            "ai": 3718,
            "ab": "Immune to mind spells",
            "res": "1 gem"
          },
          "up": {
            "id": "titan",
            "name": "Titan",
            "dmg": [
              40,
              60
            ],
            "atk": 24,
            "def": 24,
            "hp": 300,
            "spd": 11,
            "gr": 1,
            "gold": 5000,
            "ai": 7500,
            "ab": "Immune to mind spells, Ranged (24), No melee penalty, Hatred of black dragons",
            "res": "2 gems"
          }
        },
        {
          "f": "inferno",
          "base": {
            "id": "devil",
            "name": "Devil",
            "dmg": [
              30,
              40
            ],
            "atk": 19,
            "def": 21,
            "hp": 160,
            "spd": 11,
            "gr": 1,
            "gold": 2700,
            "ai": 5101,
            "ab": "Flying, No retaliation, Hatred of angels, Luck −1",
            "res": "1 mercury"
          },
          "up": {
            "id": "arch-devil",
            "name": "Arch Devil",
            "dmg": [
              30,
              40
            ],
            "atk": 26,
            "def": 28,
            "hp": 200,
            "spd": 17,
            "gr": 1,
            "gold": 4500,
            "ai": 7115,
            "ab": "Flying, No retaliation, Hatred of angels, Luck −1",
            "res": "2 mercury"
          }
        },
        {
          "f": "necropolis",
          "base": {
            "id": "bone-dragon",
            "name": "Bone Dragon",
            "dmg": [
              25,
              50
            ],
            "atk": 17,
            "def": 15,
            "hp": 150,
            "spd": 9,
            "gr": 1,
            "gold": 1800,
            "ai": 3388,
            "ab": "Undead, Flying, Morale −1, Two-hex"
          },
          "up": {
            "id": "ghost-dragon",
            "name": "Ghost Dragon",
            "dmg": [
              25,
              50
            ],
            "atk": 19,
            "def": 17,
            "hp": 200,
            "spd": 14,
            "gr": 1,
            "gold": 3000,
            "ai": 4696,
            "ab": "Undead, Flying, Morale −1, 20% aging, Two-hex",
            "res": "1 mercury"
          }
        },
        {
          "f": "dungeon",
          "base": {
            "id": "red-dragon",
            "name": "Red Dragon",
            "dmg": [
              40,
              50
            ],
            "atk": 19,
            "def": 19,
            "hp": 180,
            "spd": 11,
            "gr": 1,
            "gold": 2500,
            "ai": 4702,
            "ab": "Flying, Immune to spells 1–3, Breath, Two-hex",
            "res": "1 sulfur"
          },
          "up": {
            "id": "black-dragon",
            "name": "Black Dragon",
            "dmg": [
              40,
              50
            ],
            "atk": 25,
            "def": 25,
            "hp": 300,
            "spd": 15,
            "gr": 1,
            "gold": 4000,
            "ai": 8721,
            "ab": "Flying, Spell immunity, Breath, Hatred of titans, Two-hex",
            "res": "2 sulfur"
          }
        },
        {
          "f": "stronghold",
          "base": {
            "id": "behemoth",
            "name": "Behemoth",
            "dmg": [
              30,
              50
            ],
            "atk": 17,
            "def": 17,
            "hp": 160,
            "spd": 6,
            "gr": 1,
            "gold": 1500,
            "ai": 3162,
            "ab": "Ignores 40% defense, Two-hex"
          },
          "up": {
            "id": "ancient-behemoth",
            "name": "Ancient Behemoth",
            "dmg": [
              30,
              50
            ],
            "atk": 19,
            "def": 19,
            "hp": 300,
            "spd": 9,
            "gr": 1,
            "gold": 3000,
            "ai": 6168,
            "ab": "Ignores 80% defense, Two-hex",
            "res": "1 crystal"
          }
        },
        {
          "f": "fortress",
          "base": {
            "id": "hydra",
            "name": "Hydra",
            "dmg": [
              25,
              45
            ],
            "atk": 16,
            "def": 18,
            "hp": 175,
            "spd": 5,
            "gr": 1,
            "gold": 2200,
            "ai": 4120,
            "ab": "Attack all around, No retaliation, Two-hex"
          },
          "up": {
            "id": "chaos-hydra",
            "name": "Chaos Hydra",
            "dmg": [
              25,
              45
            ],
            "atk": 18,
            "def": 20,
            "hp": 250,
            "spd": 7,
            "gr": 1,
            "gold": 3500,
            "ai": 5931,
            "ab": "Attack all around, No retaliation, Two-hex",
            "res": "1 sulfur"
          }
        },
        {
          "f": "conflux",
          "base": {
            "id": "firebird",
            "name": "Firebird",
            "dmg": [
              30,
              40
            ],
            "atk": 18,
            "def": 18,
            "hp": 150,
            "spd": 15,
            "gr": 1,
            "gold": 1500,
            "ai": 4547,
            "ab": "Flying, Breath, Two-hex, Immune to fire"
          },
          "up": {
            "id": "phoenix",
            "name": "Phoenix",
            "dmg": [
              30,
              40
            ],
            "atk": 21,
            "def": 18,
            "hp": 200,
            "spd": 21,
            "gr": 1,
            "gold": 2000,
            "ai": 6721,
            "ab": "Flying, Immune to fire, Breath, Rebirth, Two-hex",
            "res": "1 mercury"
          }
        },
        {
          "f": "cove",
          "base": {
            "id": "sea-serpent",
            "name": "Sea Serpent",
            "dmg": [
              30,
              55
            ],
            "atk": 22,
            "def": 16,
            "hp": 180,
            "spd": 9,
            "gr": 1,
            "gold": 2200,
            "ai": 3953,
            "ab": "30% poison, Two-hex",
            "res": "1 sulfur"
          },
          "up": {
            "id": "haspid",
            "name": "Haspid",
            "dmg": [
              30,
              55
            ],
            "atk": 29,
            "def": 20,
            "hp": 300,
            "spd": 12,
            "gr": 1,
            "gold": 4000,
            "ai": 7220,
            "ab": "30% poison, Two-hex, Revenge",
            "res": "2 sulfur"
          }
        },
        {
          "f": "factory",
          "base": {
            "id": "couatl",
            "name": "Couatl",
            "dmg": [
              25,
              45
            ],
            "atk": 17,
            "def": 17,
            "hp": 160,
            "spd": 11,
            "gr": 1,
            "gold": 2000,
            "ai": 3574,
            "ab": "Flying, Two-hex, Invulnerability (costs a turn)"
          },
          "up": {
            "id": "crimson-couatl",
            "name": "Crimson Couatl",
            "dmg": [
              25,
              45
            ],
            "atk": 21,
            "def": 21,
            "hp": 200,
            "spd": 15,
            "gr": 1,
            "gold": 3500,
            "ai": 5341,
            "ab": "Flying, Two-hex, Invulnerability (free)",
            "res": "1 crystal"
          }
        },
        {
          "f": "factory",
          "base": {
            "id": "dreadnought",
            "name": "Dreadnought",
            "dmg": [
              40,
              50
            ],
            "atk": 18,
            "def": 20,
            "hp": 200,
            "spd": 6,
            "gr": 1,
            "gold": 2200,
            "ai": 3879,
            "ab": "Two-hex, Mechanical, Heat ray (1)",
            "res": "1 crystal"
          },
          "up": {
            "id": "juggernaut",
            "name": "Juggernaut",
            "dmg": [
              40,
              50
            ],
            "atk": 23,
            "def": 23,
            "hp": 300,
            "spd": 7,
            "gr": 1,
            "gold": 3500,
            "ai": 6433,
            "ab": "Two-hex, Mechanical, Heat ray (1)",
            "res": "2 crystals"
          }
        },
        {
          "f": "bulwark",
          "base": {
            "id": "jotunn",
            "name": "Jotunn",
            "dmg": [
              40,
              50
            ],
            "atk": 18,
            "def": 18,
            "hp": 165,
            "spd": 8,
            "gr": 1,
            "gold": 2000,
            "ai": 4180,
            "ab": "Teleports allies (1), −1 speed to enemy flyers"
          },
          "up": {
            "id": "jotunn-warlord",
            "name": "Jotunn Warlord",
            "dmg": [
              40,
              50
            ],
            "atk": 20,
            "def": 20,
            "hp": 300,
            "spd": 10,
            "gr": 1,
            "gold": 3500,
            "ai": 6694,
            "ab": "Teleports allies, −2 speed to enemy flyers",
            "res": "1 gem"
          }
        }
      ]
    }
  ],
  "neutrals": [
    {
      "tier": 1,
      "rows": [
        {
          "f": "neutral",
          "base": {
            "id": "peasant",
            "name": "Peasant",
            "dmg": [1, 1],
            "atk": 1,
            "def": 1,
            "hp": 1,
            "spd": 3,
            "gr": 25,
            "gold": 10,
            "ai": 15,
            "ab": ""
          }
        }
      ]
    },
    {
      "tier": 2,
      "rows": [
        {
          "f": "neutral",
          "base": {
            "id": "boar",
            "name": "Boar",
            "dmg": [2, 3],
            "atk": 6,
            "def": 5,
            "hp": 15,
            "spd": 6,
            "gr": 8,
            "gold": 150,
            "ai": 145,
            "ab": "Two-hex"
          }
        },
        {
          "f": "neutral",
          "base": {
            "id": "rogue",
            "name": "Rogue",
            "dmg": [2, 4],
            "atk": 8,
            "def": 3,
            "hp": 10,
            "spd": 6,
            "gr": 8,
            "gold": 100,
            "ai": 135,
            "ab": "Spying"
          }
        },
        {
          "f": "neutral",
          "base": {
            "id": "leprechaun",
            "name": "Leprechaun",
            "dmg": [3, 5],
            "atk": 8,
            "def": 5,
            "hp": 15,
            "spd": 5,
            "gr": 9,
            "gold": 100,
            "ai": 208,
            "ab": "Doubles friendly luck, Casts Fortune"
          }
        }
      ]
    },
    {
      "tier": 3,
      "rows": [
        {
          "f": "neutral",
          "base": {
            "id": "mummy",
            "name": "Mummy",
            "dmg": [3, 5],
            "atk": 7,
            "def": 7,
            "hp": 30,
            "spd": 5,
            "gr": 7,
            "gold": 300,
            "ai": 270,
            "ab": "Undead, Curse"
          }
        },
        {
          "f": "neutral",
          "base": {
            "id": "nomad",
            "name": "Nomad",
            "dmg": [2, 6],
            "atk": 9,
            "def": 8,
            "hp": 30,
            "spd": 7,
            "gr": 7,
            "gold": 200,
            "ai": 345,
            "ab": "Sandwalker"
          }
        }
      ]
    },
    {
      "tier": 4,
      "rows": [
        {
          "f": "neutral",
          "base": {
            "id": "sharpshooter",
            "name": "Sharpshooter",
            "dmg": [8, 10],
            "atk": 12,
            "def": 10,
            "hp": 15,
            "spd": 9,
            "gr": 4,
            "gold": 400,
            "ai": 585,
            "ab": "Ranged (32), No range penalty, No obstacle penalty"
          }
        },
        {
          "f": "neutral",
          "base": {
            "id": "satyr",
            "name": "Satyr",
            "dmg": [6, 10],
            "atk": 10,
            "def": 11,
            "hp": 35,
            "spd": 7,
            "gr": 4,
            "gold": 300,
            "ai": 518,
            "ab": "Casts Mirth"
          }
        },
        {
          "f": "neutral",
          "base": {
            "id": "steel-golem",
            "name": "Steel Golem",
            "dmg": [6, 8],
            "atk": 10,
            "def": 11,
            "hp": 45,
            "spd": 6,
            "gr": 6,
            "gold": 400,
            "ai": 597,
            "ab": "Golem, −80% spell damage"
          }
        }
      ]
    },
    {
      "tier": 5,
      "rows": [
        {
          "f": "neutral",
          "base": {
            "id": "troll",
            "name": "Troll",
            "dmg": [10, 15],
            "atk": 14,
            "def": 7,
            "hp": 40,
            "spd": 7,
            "gr": 3,
            "gold": 500,
            "ai": 1024,
            "ab": "Regeneration"
          }
        },
        {
          "f": "neutral",
          "base": {
            "id": "gold-golem",
            "name": "Gold Golem",
            "dmg": [8, 10],
            "atk": 11,
            "def": 12,
            "hp": 50,
            "spd": 5,
            "gr": 3,
            "gold": 500,
            "ai": 600,
            "ab": "Golem, −85% spell damage"
          }
        },
        {
          "f": "neutral",
          "base": {
            "id": "fangarm",
            "name": "Fangarm",
            "dmg": [8, 12],
            "atk": 12,
            "def": 12,
            "hp": 50,
            "spd": 6,
            "gr": 3,
            "gold": 600,
            "ai": 929,
            "ab": "Flying, Immune to mind spells, Unlimited retaliation, Hypnotize"
          }
        }
      ]
    },
    {
      "tier": 6,
      "rows": [
        {
          "f": "neutral",
          "base": {
            "id": "diamond-golem",
            "name": "Diamond Golem",
            "dmg": [10, 14],
            "atk": 13,
            "def": 12,
            "hp": 60,
            "spd": 5,
            "gr": 2,
            "gold": 750,
            "ai": 775,
            "ab": "Golem, −95% spell damage"
          }
        },
        {
          "f": "neutral",
          "base": {
            "id": "enchanter",
            "name": "Enchanter",
            "dmg": [14, 14],
            "atk": 17,
            "def": 12,
            "hp": 30,
            "spd": 9,
            "gr": 2,
            "gold": 750,
            "ai": 1210,
            "ab": "Ranged (32), No melee penalty, No obstacle penalty, Spellcaster"
          }
        }
      ]
    }
  ],
  "dragons": [
    {
      "f": "neutral",
      "base": {
        "id": "faerie-dragon",
        "name": "Faerie Dragon",
        "dmg": [20, 30],
        "atk": 20,
        "def": 20,
        "hp": 500,
        "spd": 15,
        "gr": 1,
        "gold": 10000,
        "ai": 30501,
        "ab": "Flying, Spellcaster, Magic mirror, Two-hex",
        "res": "8 gems"
      }
    },
    {
      "f": "neutral",
      "base": {
        "id": "rust-dragon",
        "name": "Rust Dragon",
        "dmg": [50, 50],
        "atk": 30,
        "def": 30,
        "hp": 750,
        "spd": 17,
        "gr": 1,
        "gold": 15000,
        "ai": 26433,
        "ab": "Flying, Breath, Acid breath, Two-hex",
        "res": "14 sulfur"
      }
    },
    {
      "f": "neutral",
      "base": {
        "id": "crystal-dragon",
        "name": "Crystal Dragon",
        "dmg": [60, 75],
        "atk": 40,
        "def": 40,
        "hp": 800,
        "spd": 16,
        "gr": 1,
        "gold": 20000,
        "ai": 39388,
        "ab": "Crystal generation, 20% spell resistance, Two-hex",
        "res": "10 crystals"
      }
    },
    {
      "f": "neutral",
      "base": {
        "id": "azure-dragon",
        "name": "Azure Dragon",
        "dmg": [70, 80],
        "atk": 50,
        "def": 50,
        "hp": 1000,
        "spd": 19,
        "gr": 1,
        "gold": 30000,
        "ai": 78845,
        "ab": "Flying, Breath, Fear, Fearless, Immune to spells 1–3, Two-hex",
        "res": "20 mercury"
      }
    }
  ]
};
