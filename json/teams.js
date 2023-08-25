const teams = {
	"1": {
		"name": "TF Bennett",
		"description": "Weirdest way to use Bennettt out of all the possibilities. This variation takes advantage of the synergy between Bennettt's Ascension Passives and the TF set, which are effectively two sources of cooldown reduction. Play Bennett onfield with NA + E spam.",
        "rotation": "Fischl E > Xingqiu Q + E > Bennett Q > Beidou E + Q > Fischl Q > Spam Bennett NA + E",
        "archetype": "Overvape",
        "viability": "Unique",

        "character_1": {
            "name": "Bennett",
            "constellation": "",
            "weapon": "Iron Sting",
            "set": "Thundering Fury",
            "main_stat": { 
                "Sands": "EM",
                "Goblet": "Pyro",
                "Circlet": "Crit",
            },
            "subs_stat": ["", "", "", ""]
        },
        "character_2": {
            "name": "Fischl",
            "constellation": "",
            "weapon": "Polar Star",
            "set": "Golden Troupe",
            "main_stat": { 
                "Sands": "ATK%",
                "Goblet": "Electro",
                "Circlet": "Crit"
            },
            "subs_stat": ["ER", "Crit", "ATK%", ""]
        },
        "character_3": {
            "name": "Beidou",
            "constellation": "",
            "weapon": "Serpent Spine",
            "set": "Emblem of Severed Fate",
            "main_stat": { 
                "Sands": "ATK%",
                "Goblet": "Electro",
                "Circlet": "Crit"
            },
            "subs_stat": ["ER", "Crit", "ATK%", ""]
        },
        "character_4": {
            "name": "Xingqiu",
            "constellation": "",
            "weapon": "Sacrificial Sword",
            "set": "Emblem of Severed Fate",
            "main_stat": { 
                "Sands": "ATK%",
                "Goblet": "Hydro",
                "Circlet": "Crit"
            },
            "subs_stat": ["Crit", "ATK%", "ER"]
        }
    },

    "2": {
		"name": "International",
		"description": "An National variation that uses Childe and Kazuha",
        "rotation": "E Childe > Q Bennett > E + Q Kazuha > E + Q Xiangling > Q + E Childe 2NA+CA (8-12s) > Funnel Xiangling",
        "archetype": "National",
        "viability": "Meta",

        "character_1": {
            "name": "Tartaglia",
            "constellation": "",
            "weapon": "Polar Star",
            "set": "Heart of Depth",
            "main_stat": { 
                "Sands": "ATK%",
                "Goblet": "Hydro",
                "Circlet": "Crit",
            },
            "subs_stat": ["Crit", "ATK%", "EM"]
        },
        "character_2": {
            "name": "Kaedehara Kazuha",
            "constellation": "",
            "weapon": "Favonious Sword",
            "set": "Viridescent Venerer",
            "main_stat": { 
                "Sands": "EM",
                "Goblet": "EM",
                "Circlet": "EM"
            },
            "subs_stat": ["Crit Rate", "EM", "ER", "Crit Damage"]
        },
        "character_3": {
            "name": "Xiangling",
            "constellation": "",
            "weapon": "The Catch",
            "set": "Emblem of Severed Fate",
            "main_stat": { 
                "Sands": "ATK%",
                "Goblet": "Pyro",
                "Circlet": "Crit"
            },
            "subs_stat": ["ER", "Crit", "ATK%", "EM"]
        },
        "character_4": {
            "name": "Bennett",
            "constellation": "",
            "weapon": "Aquila Favonia",
            "set": "Noblesse Oblige",
            "main_stat": { 
                "Sands": "ER",
                "Goblet": "Pyro",
                "Circlet": "Crit"
            },
            "subs_stat": ["ER"]
        }
    },

    "3": {
		"name": "Vape Dehya",
		"description": "Basically Dehya and her powerfull damage carring the whole abyss. Since Dehya cds, you can alter the rotation in order to fix her E cooldown. For example, doing Kazuha's ult at the end of the rotation to gain time. ",
        "rotation": "E Dehya >  E + Q Bennett > E + (Q) Kazuha  > Q + E Mona > Q Dehya (and click so hard)",
        "archetype": "On-Field Vape",
        "viability": "Troll",

        "character_1": {
            "name": "Dehya",
            "constellation": "",
            "weapon": "Beacon of the Reed Sea",
            "set": "Emblem of Severed Fate",
            "main_stat": { 
                "Sands": "ATK%",
                "Goblet": "Pyro",
                "Circlet": "Crit",
            },
            "subs_stat": ["Crit", "ATK%", "EM"]
        },
        "character_2": {
            "name": "Kaedehara Kazuha",
            "constellation": "",
            "weapon": "Favonious Sword",
            "set": "Viridescent Venerer",
            "main_stat": { 
                "Sands": "EM",
                "Goblet": "EM",
                "Circlet": "EM"
            },
            "subs_stat": ["Crit Rate", "EM", "ER", "Crit Damage"]
        },
        "character_3": {
            "name": "Mona",
            "constellation": "",
            "weapon": "Favonius Codex",
            "set": "Instructor",
            "main_stat": { 
                "Sands": "ATK%",
                "Goblet": "Hydro",
                "Circlet": "Crit"
            },
            "subs_stat": ["ER", "Crit", "ATK%"]
        },
        "character_4": {
            "name": "Bennett",
            "constellation": "",
            "weapon": "Aquila Favonia",
            "set": "Noblesse Oblige",
            "main_stat": { 
                "Sands": "ER",
                "Goblet": "Pyro",
                "Circlet": "Crit"
            },
            "subs_stat": ["ER"]
        }
    },

    "4": {
		"name": "Vape Yoimiya",
		"description": "Good Single Target damage thanks to Yoimiya and Xingqiu. Rotation did with Reminiscence artifacts.",
        "rotation": "Q + E Bennett > Q + E Xingqiu > E + Q Yun Jin > Yoimiya E + NA until end, then Q",
        "archetype": "On-field Vape",
        "viability": "Viable",

        "character_1": {
            "name": "Yoimiya",
            "constellation": "",
            "weapon": "Thundering Pulse",
            "set": "Shimenawa's Reminiscence",
            "main_stat": { 
                "Sands": "ATK%",
                "Goblet": "Pyro",
                "Circlet": "Crit",
            },
            "subs_stat": ["Crit", "ATK", "EM", "ER"]
        },
        "character_2": {
            "name": "Yun Jin",
            "constellation": "",
            "weapon": "Favonious Lance",
            "set": "Husk of Opulent Dreams",
            "main_stat": { 
                "Sands": "DEF%",
                "Goblet": "DEF%",
                "Circlet": "DEF%"
            },
            "subs_stat": ["ER", "Crit Rate", "DEF"]
        },
        "character_3": {
            "name": "Xingqiu",
            "constellation": "",
            "weapon": "Sacrificial Sword",
            "set": "Emblem of Severed Fate",
            "main_stat": { 
                "Sands": "ATK%",
                "Goblet": "Hydro",
                "Circlet": "Crit"
            },
            "subs_stat": ["Crit", "ATK%", "ER"]
        },
        "character_4": {
            "name": "Bennett",
            "constellation": "",
            "weapon": "Aquila Favonia",
            "set": "Noblesse Oblige",
            "main_stat": { 
                "Sands": "ER",
                "Goblet": "Pyro",
                "Circlet": "Crit"
            },
            "subs_stat": ["ER"]
        },
    },

    "5": {
		"name": "Childe National",
		"description": "An National variation that uses Childe and Sucrose",
        "rotation": "E Childe > Q Bennett > E Xiangling > E + Q Sucrose > Q Xiangling > Q + E Childe 2NA+CA (8-12s) > Funnel Xiangling",
        "archetype": "National",
        "viability": "Meta",

        "character_1": {
            "name": "Tartaglia",
            "constellation": "",
            "weapon": "",
            "set": "",
            "main_stat": { 
                "Sands": "",
                "Goblet": "",
                "Circlet": "",
            },
            "subs_stat": ["", "", "", ""]
        },
        "character_2": {
            "name": "Sucrose",
            "constellation": "",
            "weapon": "",
            "set": "",
            "main_stat": { 
                "Sands": "",
                "Goblet": "",
                "Circlet": ""
            },
            "subs_stat": [""]
        },
        "character_3": {
            "name": "Xiangling",
            "constellation": "",
            "weapon": "",
            "set": "",
            "main_stat": { 
                "Sands": "",
                "Goblet": "",
                "Circlet": ""
            },
            "subs_stat": [""]
        },
        "character_4": {
            "name": "Bennett",
            "constellation": "",
            "weapon": "",
            "set": "",
            "main_stat": { 
                "Sands": "",
                "Goblet": "",
                "Circlet": ""
            },
            "subs_stat": ["", "", ""]
        }
    },

    "6": {
		"name": "Intergrational",
		"description": "International team but swapping Xiangling with Nahida",
        "rotation": "E (+ Q) Nahida > E + Q Bennett > E + Q Kazuha > E + Q Childe 2NA+CA (2-3 times)",
        "archetype": "National",
        "viability": "Meta",

        "character_1": {
            "name": "Tartaglia",
            "constellation": "",
            "weapon": "",
            "set": "",
            "main_stat": { 
                "Sands": "",
                "Goblet": "",
                "Circlet": "",
            },
            "subs_stat": ["", "", "", ""]
        },
        "character_2": {
            "name": "Kaedehara Kazuha",
            "constellation": "",
            "weapon": "",
            "set": "",
            "main_stat": { 
                "Sands": "",
                "Goblet": "",
                "Circlet": ""
            },
            "subs_stat": [""]
        },
        "character_3": {
            "name": "Nahida",
            "constellation": "",
            "weapon": "",
            "set": "",
            "main_stat": { 
                "Sands": "",
                "Goblet": "",
                "Circlet": ""
            },
            "subs_stat": [""]
        },
        "character_4": {
            "name": "Bennett",
            "constellation": "",
            "weapon": "",
            "set": "",
            "main_stat": { 
                "Sands": "",
                "Goblet": "",
                "Circlet": ""
            },
            "subs_stat": ["", "", ""]
        }
    },

    "7": {
		"name": "Electro-Charged Childe",
		"description": "An old team similar to taser",
        "rotation": "",
        "archetype": "Taser",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "constellation": "",
            "weapon": "",
            "set": "",
            "main_stat": { 
                "Sands": "",
                "Goblet": "",
                "Circlet": "",
            },
            "subs_stat": ["", "", "", ""]
        },
        "character_2": {
            "name": "Fischl",
            "constellation": "",
            "weapon": "",
            "set": "",
            "main_stat": { 
                "Sands": "",
                "Goblet": "",
                "Circlet": ""
            },
            "subs_stat": [""]
        },
        "character_3": {
            "name": "Beidou",
            "constellation": "",
            "weapon": "",
            "set": "",
            "main_stat": { 
                "Sands": "",
                "Goblet": "",
                "Circlet": ""
            },
            "subs_stat": [""]
        },
        "character_4": {
            "name": "Bennett",
            "constellation": "",
            "weapon": "",
            "set": "",
            "main_stat": { 
                "Sands": "",
                "Goblet": "",
                "Circlet": ""
            },
            "subs_stat": ["", "", ""]
        }
    },

    "8": {
		"name": "Electro-Charged Childe",
		"description": "An old team similar to taser",
        "rotation": "",
        "archetype": "Taser",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "constellation": "",
            "weapon": "",
            "set": "",
            "main_stat": { 
                "Sands": "",
                "Goblet": "",
                "Circlet": "",
            },
            "subs_stat": ["", "", "", ""]
        },
        "character_2": {
            "name": "Fischl",
            "constellation": "",
            "weapon": "",
            "set": "",
            "main_stat": { 
                "Sands": "",
                "Goblet": "",
                "Circlet": ""
            },
            "subs_stat": [""]
        },
        "character_3": {
            "name": "Beidou",
            "constellation": "",
            "weapon": "",
            "set": "",
            "main_stat": { 
                "Sands": "",
                "Goblet": "",
                "Circlet": ""
            },
            "subs_stat": [""]
        },
        "character_4": {
            "name": "Bennett",
            "constellation": "",
            "weapon": "",
            "set": "",
            "main_stat": { 
                "Sands": "",
                "Goblet": "",
                "Circlet": ""
            },
            "subs_stat": ["", "", ""]
        }
    },

}

//"character_1": {
//    "name": "",
//    "constellation": "",
//    "weapon": "",
//    "set": "",
//    "main_stat": { 
//        "Sands": "",
//        "Goblet": "",
//        "Circlet": "",
//    },
//    "subs_stat": ["", "", "", ""]
//},
//"character_2": {
//    "name": "",
//    "constellation": "",
//    "weapon": "",
//    "set": "",
//    "main_stat": { 
//        "Sands": "",
//        "Goblet": "",
//        "Circlet": ""
//    },
//    "subs_stat": [""]
//},
//"character_3": {
//    "name": "",
//    "constellation": "",
//    "weapon": "",
//    "set": "",
//    "main_stat": { 
//        "Sands": "",
//        "Goblet": "",
//        "Circlet": ""
//    },
//    "subs_stat": [""]
//},
//"character_4": {
//    "name": "",
//    "constellation": "",
//    "weapon": "",
//    "set": "",
//    "main_stat": { 
//        "Sands": "",
//        "Goblet": "",
//        "Circlet": ""
//    },
//    "subs_stat": ["", "", ""]
//}