const teams = {
    "1": {
        "name": "TF Bennett",
        "description": "Weirdest way to use Bennettt out of all the possibilities. This variation takes advantage of the synergy between Bennettt's Ascension Passives and the TF set, which are effectively two sources of cooldown reduction. Play Bennett onfield with NA + E spam.",
        "rotation": "Fischl E > Xingqiu Q + E > Bennett Q > Beidou E + Q > Fischl Q > Spam Bennett NA + E",
        "archetype": "Overvape",
        "viability": "Unique",

        "character_1": {
            "name": "Bennett",
            "build": "TF"
        },
        "character_2": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_3": {
            "name": "Beidou",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Xingqiu"],
            "build": ["Standard"]
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
            "build": "Standard"
        },
        "character_2": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Bennett"],
            "build": ["Standard"]
        }
    },

    "3": {
        "name": "Vape Dehya",
        "description": "Basically Dehya and her powerfull damage carring the whole abyss. Since Dehya cds, you can alter the rotation in order to fix her E cooldown. For example, doing Kazuha's ult at the end of the rotation to gain time. ",
        "rotation": "E Dehya >  E + Q Bennett > E + (Q) Kazuha  > Q + E Mona > Q Dehya (and click so hard)",
        "archetype": "Vaporize",
        "viability": "Troll",

        "character_1": {
            "name": "Dehya",
            "build": "Standard"
        },
        "character_2": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_3": {
            "name": "Mona",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Bennett"],
            "build": ["Standard"]
        }
    },

    "4": {
        "name": "Vape Yoimiya",
        "description": "Good Single Target damage thanks to Yoimiya and Xingqiu. Rotation did with Reminiscence artifacts.",
        "rotation": "Q + E Bennett > Q + E Xingqiu > E + Q Yun Jin > Yoimiya E + NA until end, then Q",
        "archetype": "Vaporize",
        "viability": "Viable",

        "character_1": {
            "name": "Yoimiya",
            "build": "Standard"
        },
        "character_2": {
            "name": "Yun Jin",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Bennett"],
            "build": ["Standard"]
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
            "build": "Standard"
        },
        "character_2": {
            "name": "Sucrose",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Bennett"],
            "build": ["Standard"]
        }
    },

    "6": {
        "name": "Childe National",
        "description": "An National variation that uses Childe and geo.",
        "rotation": "",
        "archetype": "National",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Albedo", "Zhongli"],
            "build": ["Standard", "Standard"]
        }
    },

    "7": {
        "name": "Intergrational",
        "description": "International team but swapping Xiangling with Nahida",
        "rotation": "E (+ Q) Nahida > E + Q Bennett > E + Q Kazuha > E + Q Childe 2NA+CA (2-3 times)",
        "archetype": "Sauté",
        "viability": "Meta",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Bennett"],
            "build": ["Standard"]
        }
    },

    "8": {
        "name": "Intergrational",
        "description": "A variant of Intergrational, using Xiangling instead of Kazuha. Less seeds due to pyro aplication and burn",
        "rotation": "",
        "archetype": "Burgeon",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Bennett"],
            "build": ["Standard"]
        }
    },

    "9": {
        "name": "Electro-Charged Childe",
        "description": "An old team similar to taser",
        "rotation": "",
        "archetype": "Taser",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_3": {
            "name": "Beidou",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Bennett"],
            "build": ["Standard"]
        }
    },
    "10": {
        "name": "Freeze childe",
        "description": "Fast rotations",
        "rotation": "Kaeya E > Tartaglia E+1NA > Kazuha Q + hold E > Rosaria E + Q > Kaeya E + Q > Tartaglia Q + E",
        "archetype": "Freeze",
        "viability": "Troll",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Kaeya",
            "build": "Standard"
        },
        "character_3": {
            "name": "Rosaria",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha"],
            "build": ["Standard"]
        }
    },

    "11": {
        "name": "Freeze childe",
        "description": "Fast rotations",
        "rotation": "Cryo E > Tartaglia E+1NA > Kazuha Q + hold E > Cryo (E)+Q > Ayaka Dash + CA + E + Q > Tartaglia Q + E + NA",
        "archetype": "Freeze",
        "viability": "Troll",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Kamisato Ayaka",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Diona"],
            "build": ["Standard","Standard","Standard"]
        }
    },


    "14": {
        "name": "Tartaglia MonoHydro",
        "description": "An no meta team, similar to Kokomi MonoHydro, but without healer. MonoHydro is not usually optimal, see monohydro archetype for more. Fun vs pyro content.",
        "rotation": "",
        "archetype": "MonoHydro",
        "viability": "Troll",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Yelan",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha"],
            "build": ["Standard"]
        }
    },

    "15": {
        "name": "Tartaglia MonoHydro",
        "description": "",
        "archetype": "MonoHydro",
        "viability": "Troll",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Yelan",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Jean"],
            "build": ["Standard"]
        }
    },

    "17": {
        "name": "Tartaglia MonoHydro",
        "description": "",
        "archetype": "MonoHydro",
        "viability": "Troll",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Sangonomiya Kokomi",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yelan", "Xingqiu"],
            "build": ["Standard", "Standard"]
        }
    },

    "18": {
        "name": "Kokomi MonoHydro",
        "description": "",
        "archetype": "MonoHydro",
        "viability": "Troll",

        "character_1": {
            "name": "Sangonomiya Kokomi",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Yelan",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha"],
            "build": ["Standard"]
        }
    },

    "19": {
        "name": "Childe Thoma Burgeon",
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. Adding Xingqiu or Yelan provides you with extra hydro and singletarget dmg.",
        "rotation": "",
        "archetype": "Burgeon",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "EM"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Xingqiu", "Yelan"],
            "build": ["Standard", "Standard"]
        }
    },

    "20": {
        "name": "Childe Thoma Burgeon",
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. You can put Kokomi in deepwood so nahida can have more personal damage.",
        "rotation": "",
        "archetype": "Burgeon",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "EM"
        },
        "character_3": {
            "name": "Nahida",
            "build": "EM"
        },
        "character_4": {
            "name": ["Sangonomiya Kokomi"],
            "build": ["Dendro"]
        }
    },

    "21": {
        "name": "Childe Thoma Burgeon",
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. Nahida dendro aplication is huge to go solo dendro, but you can pick another to comfort and consonance.",
        "rotation": "",
        "archetype": "Burgeon",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "EM"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Collei", "Aether", "Yaoyao", "Baizhu", "Kirara"],
            "build": ["Standard", "Dendro", "Standard", "Standard", "Standard"]
        }
    },

    "22": {
        "name": "Childe Thoma Burgeon",
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. To have enough dendro without nahida, you have to pick two of them,",
        "rotation": "",
        "archetype": "Burgeon",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "EM"
        },
        "character_3": {
            "name": "Aether",
            "build": "Dendro"
        },
        "character_4": {
            "name": ["Collei", "Yaoyao", "Baizhu", "Kirara"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },

    "23": {
        "name": "Childe Thoma Burgeon",
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. You can add an Anemo unit to group and have VV and more AoE.",
        "rotation": "",
        "archetype": "Burgeon",
        "viability": "Meta",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "EM"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Sucrose", "Kaedehara Kazuha"],
            "build": ["Standard", "Standard"]
        }
    },

    "24": {
        "name": "Childe Thoma Burgeon",
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. You can add an Anemo unit to group and have VV and more AoE.",
        "rotation": "",
        "archetype": "Burgeon",
        "viability": "Meta",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "EM"
        },
        "character_3": {
            "name": "Aether",
            "build": "Dendro"
        },
        "character_4": {
            "name": ["Sucrose", "Kaedehara Kazuha"],
            "build": ["Standard", "Standard"]
        }
    },
    

    "25": {
        "name": "Childe Thoma Burgeon",
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. To have enough dendro without nahida, you have to pick two of them,",
        "rotation": "",
        "archetype": "Burgeon",
        "viability": "Troll",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "EM"
        },
        "character_3": {
            "name": "Collei",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yaoyao", "Baizhu", "Kirara"],
            "build": ["Standard", "Standard", "Standard"]
        }
    },

    "26": {
        "name": "Childe Thoma Oven",
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. Add a cryo to have more seeds and Frozen.",
        "rotation": "",
        "archetype": "Oven",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "EM"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Diona", "Layla", "Ganyu"],
            "build": ["Standard", "Standard", "Standard", "Standard", "Ultimate"]
        }
    },

    "27": {
        "name": "Childe Thoma Oven",
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. Add a cryo to have more seeds and Frozen.",
        "rotation": "",
        "archetype": "Oven",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "EM"
        },
        "character_3": {
            "name": "Aether",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Diona", "Layla", "Ganyu"],
            "build": ["Standard", "Standard", "Standard", "Standard", "Ultimate"]
        }
    },

    "28": {
        "name": "Childe Thoma Oven",
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. Add a cryo to have more seeds. Yaoyao could not have enough AoE dendro aplication for Burgeon",
        "rotation": "",
        "archetype": "Oven",
        "viability": "Troll",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "EM"
        },
        "character_3": {
            "name": "Yaoyao",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Diona", "Layla", "Ganyu"],
            "build": ["Standard", "Standard", "Standard", "Standard", "Ultimate"]
        }
    },

    "29": {
        "name": "Childe Thoma Oven",
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. Add a cryo to have more seeds. Baizhu could not have enough AoE dendro aplication for Burgeon",
        "rotation": "",
        "archetype": "Oven",
        "viability": "Troll",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "EM"
        },
        "character_3": {
            "name": "Baizhu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Diona", "Layla", "Ganyu"],
            "build": ["Standard", "Standard", "Standard", "Standard", "Ultimate"]
        }
    },

    "30": {
        "name": "Childe Thoma Curry",
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. Fischl, Beidou or similars provides Electro reactions without triggering the bloom.",
        "rotation": "",
        "archetype": "Curry",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "EM"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Fischl", "Beidou", "Yae Miko"],
            "build": ["Standard", "SoloElectro", "SoloElectro"]
        }
    },

    "31": {
        "name": "Childe Thoma Curry",
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. Shinobu, Raiden or similars can do hyperbloom to do both reactions.",
        "rotation": "",
        "archetype": "Curry",
        "viability": "Troll",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "EM"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kuki Shinobu", "Raiden Shogun", "Dori"],
            "build": ["Standard", "EM", "EM"]
        }
    },

    "32": {
        "name": "Childe Thoma Curry",
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. Fischl, Beidou or similars provides Electro reactions without triggering the bloom.",
        "rotation": "",
        "archetype": "Curry",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "EM"
        },
        "character_3": {
            "name": "Aether",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Fischl", "Beidou", "Yae Miko"],
            "build": ["Standard", "SoloElectro", "SoloElectro"]
        }
    },

    "33": {
        "name": "Childe Thoma Curry",
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. Shinobu, Raiden or similars can do hyperbloom to do both reactions.",
        "rotation": "",
        "archetype": "Curry",
        "viability": "Troll",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "EM"
        },
        "character_3": {
            "name": "Aether",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kuki Shinobu", "Raiden Shogun", "Dori"],
            "build": ["Standard", "EM", "EM"]
        }
    },

    "34": {
        "name": "OverVape Tartaglia",
        "description": "",
        "rotation": "",
        "archetype": "Overvape",
        "viability": "Viable",
    
        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Bennett"],
            "build": ["Standard"]
        }
    },

    "12": {
        "name": "Tartaglia Sunfire Burgeon",
        "description": "",
        "rotation": "",
        "archetype": "Sauté",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Jean",
            "build": "EM"
        },
        "character_3": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Nahida", "Aether"],
            "build": ["Standard", "Standard"]
        }
    },

    "13": {
        "name": "Intergrational",
        "description": "International team but swapping Xiangling with Dendro MC. Be Carefull to waste MC ultimates with pyro.",
        "rotation": "E Childe > E + Q Dendro MC > E + Q Bennett > E + Q Kazuha > E + Q Childe 2NA+CA (2-3 times)",
        "archetype": "Sauté",
        "viability": "Troll",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_3": {
            "name": "Aether",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Bennett"],
            "build": ["Standard"]
        }
    },

    "16": {
        "name": "Tartaglia Unique",
        "description": "15 seconds rotations",
        "rotation": "E Tartaglia > Q Bennett > Hold E Kazuha + Q > Q Fischl > E Bennett > Q Tartaglia + E + NA  ",
        "archetype": "Overvape",
        "viability": "Unique",
    
        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Fischl"],
            "build": ["Standard"]
        }
    },


    "36": {
        "name": "Childe Hyperbloom",
        "description": "Tartaglia can be used in Hyperbloom but there are better hydros because of E cds. Shinobu is the more popular option to trigger bloom for comfort and healing, but other options like raiden may have more speed.",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Xingqiu", "Yelan", "Collei", "Aether", "Kaedehara Kazuha", "Sucrose", "Beidou", "Fischl", "Yae Miko"],
            "build": ["Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard"]
        }
    },

    "37": {
        "name": "Childe Hyperbloom",
        "description": "Tartaglia can be used in Hyperbloom but there are better hydros because of E cds. With Dendro MC as main dendro applier, you need a second one to rivalise with childe hydro aplication. Shinobu is the more popular option to trigger bloom for comfort and healing, but other options like raiden may have more speed.",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Aether",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Collei", "Yaoyao", "Baizhu"],
            "build": ["Standard","Standard","Standard"]
        }
    },

    "38": {
        "name": "Childe Hyperbloom",
        "description": "Tartaglia can be used in Hyperbloom but there are better hydros because of E cds. Raiden has more speed triggering bloom than Kuki in exchange of heal.",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Raiden Shogun",
            "build": "EM"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Xingqiu", "Yelan", "Collei", "Aether", "Kaedehara Kazuha", "Sucrose", "Beidou", "Fischl", "Yae Miko", "Yaoyao", "Baizhu", "Sangonomiya Kokomi"],
            "build": ["Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard"]
        }
    },

    "39": {
        "name": "Childe Hyperbloom",
        "description": "Tartaglia can be used in Hyperbloom but there are better hydros because of E cds. With Dendro MC as main dendro applier, you need a second one to rivalise with childe hydro aplication. Raiden has more speed triggering bloom than Kuki in exchange of heal.",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Raiden Shogun",
            "build": "EM"
        },
        "character_3": {
            "name": "Aether",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Collei", "Yaoyao", "Baizhu"],
            "build": ["Standard","Standard","Standard"]
        }
    },

    "40": {
        "name": "Childe Hyperbloom",
        "description": "Dori could be take as a joke, but actually she is the only unit that can be speed enought to trigger bloom with Nahida and Tartaglia. Huge frontloaded damage.",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Dori",
            "build": "Standard"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Xingqiu", "Yelan", "Collei", "Aether", "Kaedehara Kazuha", "Sucrose", "Beidou", "Fischl", "Yae Miko"],
            "build": ["Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard"]
        }
    },

    "41": {
        "name": "Childe Hyperbloom",
        "description": "",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Dori",
            "build": "Standard"
        },
        "character_3": {
            "name": "Aether",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Collei", "Yaoyao", "Baizhu"],
            "build": ["Standard","Standard","Standard"]
        }
    },

    "42": {
        "name": "Childe HyperFridge",
        "description": "Tartaglia can be used in HyperFridge but there are better hydros because of E cds. Shinobu is the more popular option to trigger bloom for comfort and healing, but other options like raiden may have more speed.",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Ganyu", "Layla", "Diona"],
            "build": ["Standard","Standard","Ultimate","Standard","Standard"]
        }
    },

    "43": {
        "name": "Childe HyperFridge",
        "description": "Tartaglia can be used in HyperFridge but there are better hydros because of E cds. With Dendro MC as main dendro applier, a cryo character can help you create seeds in order to rivalise with childe hydro aplication. Shinobu is the more popular option to trigger bloom for comfort and healing, but other options like raiden may have more speed.",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Aether",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Ganyu", "Layla", "Diona"],
            "build": ["Standard","Standard","Ultimate","Standard","Standard"]
        }
    },

    "44": {
        "name": "Childe HyperFridge",
        "description": "Tartaglia can be used in HyperFridge but there are better hydros because of E cds. With Yaoyao as main dendro applier, a cryo character can help you create seeds in order to rivalise with childe hydro aplication. Shinobu is the more popular option to trigger bloom for comfort and healing, but other options like raiden may have more speed.",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Yaoyao",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Ganyu", "Layla"],
            "build": ["Standard","Standard","Ultimate","Standard"]
        }
    },

    "45": {
        "name": "Childe HyperFridge",
        "description": "Tartaglia can be used in HyperFridge but there are better hydros because of E cds. With Baizhu as main dendro applier, a cryo character can help you create seeds in order to rivalise with childe hydro aplication. Shinobu is the more popular option to trigger bloom for comfort and healing, but other options like raiden may have more speed.",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Baizhu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Ganyu"],
            "build": ["Standard","Standard","Ultimate"]
        }
    },

    "46": {
        "name": "Childe HyperFridge",
        "description": "Tartaglia can be used in HyperFridge but there are better hydros because of E cds. Shinobu is the more popular option to trigger bloom for comfort and healing, but other options like raiden may have more speed.",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Raiden Shogun",
            "build": "EM"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Ganyu", "Layla", "Diona"],
            "build": ["Standard","Standard","Ultimate","Standard","Standard"]
        }
    },

    "47": {
        "name": "Childe HyperFridge",
        "description": "Tartaglia can be used in HyperFridge but there are better hydros because of E cds. With Dendro MC as main dendro applier, a cryo character can help you create seeds in order to rivalise with childe hydro aplication. Raiden has more speed triggering bloom than Kuki in exchange of heal.",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Raiden Shogun",
            "build": "EM"
        },
        "character_3": {
            "name": "Aether",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Ganyu", "Layla", "Diona"],
            "build": ["Standard","Standard","Ultimate","Standard","Standard"]
        }
    },

    "48": {
        "name": "Childe HyperFridge",
        "description": "Tartaglia can be used in HyperFridge but there are better hydros because of E cds. With Yaoyao as main dendro applier, a cryo character can help you create seeds in order to rivalise with childe hydro aplication. Raiden has more speed triggering bloom than Kuki in exchange of heal.",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Raiden Shogun",
            "build": "EM"
        },
        "character_3": {
            "name": "Yaoyao",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Ganyu", "Layla"],
            "build": ["Standard","Standard","Ultimate","Standard"]
        }
    },

    "49": {
        "name": "Childe HyperFridge",
        "description": "Tartaglia can be used in HyperFridge but there are better hydros because of E cds. With Baizhu as main dendro applier, a cryo character can help you create seeds in order to rivalise with childe hydro aplication. Raiden has more speed triggering bloom than Kuki in exchange of heal.",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Raiden Shogun",
            "build": "EM"
        },
        "character_3": {
            "name": "Baizhu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Ganyu"],
            "build": ["Standard","Standard","Ultimate"]
        }
    },

    "50": {
        "name": "Childe HyperFridge",
        "description": "Tartaglia can be used in HyperFridge but there are better hydros because of E cds. ",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Dori",
            "build": "Standard"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Ganyu", "Layla", "Diona"],
            "build": ["Standard","Standard","Ultimate","Standard","Standard"]
        }
    },

    "51": {
        "name": "Childe HyperFridge",
        "description": "Tartaglia can be used in HyperFridge but there are better hydros because of E cds. With Dendro MC as main dendro applier, a cryo character can help you create seeds in order to rivalise with childe hydro aplication. ",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Dori",
            "build": "Standard"
        },
        "character_3": {
            "name": "Aether",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Ganyu", "Layla", "Diona"],
            "build": ["Standard","Standard","Ultimate","Standard","Standard"]
        }
    },

    "52": {
        "name": "Childe HyperFridge",
        "description": "Tartaglia can be used in HyperFridge but there are better hydros because of E cds. With Yaoyao as main dendro applier, a cryo character can help you create seeds in order to rivalise with childe hydro aplication.",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Dori",
            "build": "Standard"
        },
        "character_3": {
            "name": "Yaoyao",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Ganyu", "Layla"],
            "build": ["Standard","Standard","Ultimate","Standard"]
        }
    },

    "53": {
        "name": "Childe HyperFridge",
        "description": "Tartaglia can be used in HyperFridge but there are better hydros because of E cds. With Baizhu as main dendro applier, a cryo character can help you create seeds in order to rivalise with childe hydro aplication.",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Dori",
            "build": "Standard"
        },
        "character_3": {
            "name": "Baizhu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Ganyu"],
            "build": ["Standard","Standard","Ultimate"]
        }
    },

    "54": {
        "name": "Klee Monopyro",
        "description": "Monopyro is the archetype where klee shines. ",
        "rotation": "",
        "archetype": "MonoPyro",
        "viability": "Meta",

        "character_1": {
            "name": "Klee",
            "build": "Monopyro"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha", "Venti", "Sucrose", "Zhongli"],
            "build": ["Standard", "Standard", "Standard", "Petra"]
        }
    },

    "55": {
        "name": "Klee Monopyro",
        "description": "Monopyro is the archetype where klee shines. ",
        "rotation": "",
        "archetype": "MonoPyro",
        "viability": "Meta",

        "character_1": {
            "name": "Klee",
            "build": "Monopyro"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Venti", "Zhongli"],
            "build": ["Standard", "Petra"]
        }
    },

    "56": {
        "name": "Klee Monopyro",
        "description": "Monopyro is the archetype where klee shines. There are better options to play monopyro, but you can play this way.",
        "rotation": "",
        "archetype": "MonoPyro",
        "viability": "Viable",

        "character_1": {
            "name": "Klee",
            "build": "Monopyro"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Sucrose", "Thoma"],
            "build": ["Standard", "Standard"]
        }
    },

    "57": {
        "name": "Vape Klee Doble Hydro",
        "description": "Good single target thanks to Xingqiu and Yelan, but Klee has better archetypes than vaporize.",
        "rotation": "",
        "archetype": "Vaporize",
        "viability": "Viable",

        "character_1": {
            "name": "Klee",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Yelan",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Bennett", "Zhongli", "Jean", "Thoma"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },

    "58": {
        "name": "Vape Klee Doble Hydro",
        "description": "Good single target thanks to Xingqiu and Yelan, but Klee has better archetypes than vaporize. You have no healer either shielder with Klee... good luck.",
        "rotation": "",
        "archetype": "Vaporize",
        "viability": "Viable",

        "character_1": {
            "name": "Klee",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Yelan",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha", "Sucrose", "Venti", "Xiangling"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },

    "59": {
        "name": "Vape Klee",
        "description": "Klee has better archetypes than vaporize. ",
        "rotation": "When using Xingqiu as the sole Hydro applicator, it is recommended as Klee to use N2C N1C combos.",
        "archetype": "Vaporize",
        "viability": "Troll",

        "character_1": {
            "name": "Klee",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha", "Sucrose", "Zhongli"],
            "build": ["Standard", "Standard", "Standard"]
        }
    },

    "60": {
        "name": "Vape Klee",
        "description": "Yelan may not has enough hydro application for Klee, this team is not recomended. Klee also has better archetypes than vaporize. ",
        "rotation": "",
        "archetype": "Vaporize",
        "viability": "Troll",

        "character_1": {
            "name": "Klee",
            "build": "Standard"
        },
        "character_2": {
            "name": "Yelan",
            "build": "Standard"
        },
        "character_3": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha", "Sucrose", "Zhongli"],
            "build": ["Standard", "Standard", "Standard"]
        }
    },

    "61": {
        "name": "Vape Klee",
        "description": "Klee has better archetypes than vaporize. You can use Thoma for shielding, but don't expecto high damage.",
        "rotation": "When using Xingqiu as the sole Hydro applicator, it is recommended as Klee to use N2C N1C combos.",
        "archetype": "Vaporize",
        "viability": "Troll",

        "character_1": {
            "name": "Klee",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Thoma",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha", "Sucrose", "Venti"],
            "build": ["Standard", "Standard", "Standard"]
        }
    },

    "62": {
        "name": "Vape Klee",
        "description": "One of the worst Klee teams. Use only if you love the characters or if don't have other ways to use Klee.",
        "rotation": "",
        "archetype": "Vaporize",
        "viability": "Troll",

        "character_1": {
            "name": "Klee",
            "build": "Standard"
        },
        "character_2": {
            "name": "Yelan",
            "build": "Standard"
        },
        "character_3": {
            "name": "Thoma",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha", "Sucrose", "Venti"],
            "build": ["Standard", "Standard", "Standard"]
        }
    },

    "63": {
        "name": "Vape Klee ",
        "description": "The weirdest Vape Klee team. Seems fun. But i don't have Klee. ",
        "rotation": "You need to Infuse Venti Ults with Hydro. Bennett E + Q > Mona Q + E > Venti E + Q > Klee N1 + E + Q + 3N1C > Repeat",
        "archetype": "Vaporize",
        "viability": "Unique",

        "character_1": {
            "name": "Klee",
            "build": "Standard"
        },
        "character_2": {
            "name": "Mona",
            "build": "Standard"
        },
        "character_3": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Venti"],
            "build": ["Standard"]
        }
    },

    "64": {
        "name": "Burger Klee",
        "description": "This team composition is a great way for those wanting to play both Klee and Nahida together. It is better than it seems. Kirara or Baizhu are normally the best flex option, but you can use zhongli, kokomi or Yaoyao",
        "rotation": "spam Klee's NA with Elemental Skill uses in between. You don't need to do the burst and CA.",
        "archetype": "Burgeon",
        "viability": "Unique",

        "character_1": {
            "name": "Klee",
            "build": "Burger"
        },
        "character_2": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Zhongli", "Kirara", "Baizhu", "Sangonomiya Kokomi", "Yaoyao"],
            "build": ["Standard","Standard","Standard","Standard","Standard"]
        }
    },

                        
    "65": {
        "name": "Klee Reverse Melt",
        "description": "",
        "rotation": "",
        "archetype": "Melt",
        "viability": "Troll",

        "character_1": {
            "name": "Klee",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Rosaria",
            "build": "Melt"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha", "Sucrose", "Zhongli", "Kaeya"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },
    
    "66": {
        "name": "Klee Overload",
        "description": "",
        "rotation": "",
        "archetype": "Overload",
        "viability": "Troll",

        "character_1": {
            "name": "Klee",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Beidou"],
            "build": ["Standard"]
        }
    },
    
    "67": {
        "name": "Klee Taser",
        "description": "An odd variation of taser, using Klee instead of Sucrose. ",
        "rotation": "",
        "archetype": "Overvape",
        "viability": "Troll",

        "character_1": {
            "name": "Klee",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Beidou"],
            "build": ["Standard"]
        }
    },
    
    "68": {
        "name": "Klee Overvape",
        "description": "",
        "rotation": "",
        "archetype": "Overvape",
        "viability": "Troll",

        "character_1": {
            "name": "Klee",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yelan", "Bennett", "Zhongli", "Jean", "Kaedehara Kazuha"],
            "build": ["Standard", "Standard", "Standard", "Standard", "Standard"]
        }
    },
    
        "68": {
        "name": "Lyney MonoPyro",
        "description": "Best damage output team for Lyney. Cons: You don't have either shielder or resistance interruption. Very hard to play vs agressive enemies.",
        "rotation": "Bennett > Kazuha E > Xiangling Q + E > Lyney (2-3 CA) + Q + E",
        "archetype": "MonoPyro",
        "viability": "Meta",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha"],
            "build": ["Standard"]
        }
    },
    
    "69": {
        "name": "Lyney MonoPyro",
        "description": "Good shield and resistance interruption with zhongli, but you don't have the grouping and VV that provides Anemo. In the first Rotation, you have to do Bennett E > Zhongli E in order to activate Petra. Otherwise, put Zhongli at ToM artifacts.",
        "rotation": "E Zhongli > Bennett > Q + E Xiangling > Lyney (2-3CA) + Q + E",
        "archetype": "MonoPyro",
        "viability": "Meta",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Zhongli"],
            "build": ["Petra"]
        }
    },
    
    "70": {
        "name": "Lyney MonpoPyro",
        "description": "No ironic, one team where Dehya can be a good option. She provides buffs, particle generations, resistance interruption, tankiness, three pyros... Not the same damage as the xiangling team, but can be a good alternative of xiangling/zhongli team (and maybe better if grouping/vv is necesary).",
        "rotation": "Bennett > Kazuha E > Dehya E > Lyney (2-3CA) + Q + E. (If fast rotations, you can do Dehya's E first, but be carefull with the 9s of resistance interruption)",
        "archetype": "MonoPyro",
        "viability": "Meta",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Dehya",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha"],
            "build": ["Standard"]
        }
    },
    

    
    "71": {
        "name": "Lyney MonoPyro",
        "description": "Layla, Diona, Kirara or Baizhu can be the shielder of Lyney, because cryo/dendro doesn't interrupt the pyro aura.",
        "rotation": "Layla > Bennett > Anemo > Lyney (2-3CA) + Q + E",
        "archetype": "MonoPyro",
        "viability": "Viable",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Layla", "Baizhu", "Diona", "Kirara"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },
    
    "71": {
        "name": "Lyney MonoPyro",
        "description": "Yeah, Tankfei is a good shielder but the boi. Just do it, but of course Yanfei C4. ",
        "rotation": "Yanfei E + Q > Bennett > Kazuha E > Lyney (2-3CA) + Q + E",
        "archetype": "MonoPyro",
        "viability": "Meta",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Yanfei",
            "build": "Tankfei"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha"],
            "build": ["Standard"]
        }
    },
    
    "72": {
        "name": "Lyney MonoPyro",
        "description": "Yeah, Tankfei is a good shielder but the boi. Just do it, but of course Yanfei C4. Use Venti/Sucrose for grouping and Lynette for atk% boost, ousia and taunt.",
        "rotation": "Yanfei E + Q > Bennett > Anemo > Lyney (2-3CA) + Q + E",
        "archetype": "MonoPyro",
        "viability": "Viable",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Yanfei",
            "build": "Tankfei"
        },
        "character_4": {
            "name": ["Sucrose", "Venti", "Lynette"],
            "build": ["Standard", "Standard", "Standard"]
        }
    },
    
    "73": {
        "name": "Lyney Reverse Melt",
        "description": "You can use Lyney en Reverse Melt. You could have not enough pyro application to keep pyro, but it can be a useful team.",
        "rotation": "",
        "archetype": "Melt",
        "viability": "Troll",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Layla",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Rosaria", "Kaeya"],
            "build": ["Melt", "Melt"]
        }
    },

        "74": {
        "name": "Lyney MonoPyro",
        "description": "Use Venti/Sucrose for grouping, and Lynette for atk% boost, ousia and taunt. ",
        "rotation": "",
        "archetype": "MonoPyro",
        "viability": "Viable",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Venti", "Sucrose", "Lynette"],
            "build": ["Standard", "Standard", "Standard"]
        }
    },
    
    "75": {
        "name": "Lyney MonoPyro",
        "description": "No ironic, one team where Dehya can be a good option. She provides buffs, particle generations, resistance interruption, tankiness, three pyros... Not the same damage as the xiangling team, but can be a good alternative of xiangling/zhongli team (and maybe better if grouping/vv is necesary). Use Venti/Sucrose for grouping, and Lynette for atk% boost, ousia and taunt.",
        "rotation": "",
        "archetype": "MonoPyro",
        "viability": "Viable",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Dehya",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Venti", "Sucrose", "Lynette"],
            "build": ["Standard", "Standard", "Standard"]
        }
    },

    "76": {
        "name": "Lyney MonoPyro",
        "description": "Layla, Diona, Kirara or Baizhu can be the shielder of Lyney, because cryo/dendro doesn't interrupt the pyro aura. Better with Kazuha.",
        "rotation": "Layla > Bennett > Anemo > Lyney (2-3CA) + Q + E",
        "archetype": "MonoPyro",
        "viability": "Troll",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Venti",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Layla", "Baizhu", "Diona", "Kirara"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },

    "77": {
        "name": "Lyney MonoPyro",
        "description": "Layla, Diona, Kirara or Baizhu can be the shielder of Lyney, because cryo/dendro doesn't interrupt the pyro aura. Better with Kazuha.",
        "rotation": "Layla > Bennett > Anemo > Lyney (2-3CA) + Q + E",
        "archetype": "MonoPyro",
        "viability": "Viable",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Sucrose",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Layla", "Baizhu", "Diona", "Kirara"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },

    "78": {
        "name": "Lyney MonoPyro",
        "description": "Layla, Diona, Kirara or Baizhu can be the shielder of Lyney, because cryo/dendro doesn't interrupt the pyro aura. Better with Kazuha.",
        "rotation": "Layla > Bennett > Anemo > Lyney (2-3CA) + Q + E",
        "archetype": "MonoPyro",
        "viability": "Viable",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Lynette",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Layla", "Baizhu", "Diona", "Kirara"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },

    "79": {
        "name": "Lyney MonoPyro",
        "description": "Layla, Diona, Kirara or Baizhu can be the shielder of Lyney, because cryo/dendro doesn't interrupt the pyro aura.",
        "rotation": "Layla > Bennett > Xiangling > Lyney (2-3CA) + Q + E",
        "archetype": "MonoPyro",
        "viability": "Viable",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Layla", "Baizhu", "Diona", "Kirara"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },
    
    "80": {
        "name": "Lyney MonoPyro",
        "description": "Zhongli doesn't generate pyro particles as dehya, but Lynette's ult is not necesary every rotation. Dehya can be the third pyro for lyney's passive, but zhongli is good with other advantages like shred and better uptime.",
        "rotation": "",
        "archetype": "MonoPyro",
        "viability": "Meta",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Zhongli",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha"],
            "build": ["Standard"]
        }
    },
    
    "81": {
        "name": "Lyney MonoPyro",
        "description": "Zhongli doesn't generate pyro particles as dehya, but Lynette's ult is not necesary every rotation. Dehya can be the third pyro for lyney's passive, but zhongli is good with other advantages like shred and better uptime. Use Venti/Sucrose for grouping, and Lynette for atk% boost, ousia and taunt.",
        "rotation": "",
        "archetype": "MonoPyro",
        "viability": "Viable",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Zhongli",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Venti", "Sucrose", "Lynette"],
            "build": ["Standard", "Standard", "Standard"]
        }
    },

        "82": {
        "name": "Lyney MonoPyro Doble Geo",
        "description": "Be careful, Albedo + Zhongli can interrupt Pyro aura with crystalize. Useful when VV/Grouping don't needed.",
        "rotation": "",
        "archetype": "MonoPyro",
        "viability": "Troll",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Zhongli",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Albedo"],
            "build": ["Standard"]
        }
    },

        "83": {
        "name": "Lyney MonoPyro",
        "description": "Lyney with Klee support. Klee C2 needed... I will say nothing more.",
        "rotation": "",
        "archetype": "MonoPyro",
        "viability": "Troll",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Klee",
            "build": "Support"
        },
        "character_4": {
            "name": ["Zhongli", "Kaedehara Kazuha", "Sucrose", "Venti", "Lynette"],
            "build": ["Standard", "Standard", "Standard", "Standard", "Standard"]
        }
    },

        "84": {
        "name": "Lyney MonoPyro",
        "description": "If you love Xinyan, she can be use in monopyro with Lyney. C2 is not obbligatory but almost required.",
        "rotation": "",
        "archetype": "MonoPyro",
        "viability": "Viable",

        "character_1": {
            "name": "Lyney",
            "build": "Standard"
        },
        "character_2": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xinyan",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha", "Sucrose", "Venti", "Lynette"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },
                        
    "85": {
        "name": "Physical Freminet",
        "description": "You need an hydro unit in order to trigger shatter. In physical Freminet, an electro character is esencial to do Superconduct. ",
        "rotation": "Off field characters  > Freminet: Burst, [NA] Skill, 2NA, Skill",
        "archetype": "Hypercarry",
        "viability": "Viable",

        "character_1": {
            "name": "Freminet",
            "build": "Physical"
        },
        "character_2": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yelan", "Sangonomiya Kokomi", "Kuki Shinobu", "Yae Miko", "Beidou", "Shenhe", "Layla", "Rosaria", "Kaeya", "Mika", "Diona", "Bennett", "Zhongli", "Lisa"],
            "build": ["Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard", "Standard"]
        }
    },

    "86": {
        "name": "Physical Freminet",
        "description": "You need an hydro unit in order to trigger shatter. In physical Freminet, an electro character is esencial to do Superconduct. ",
        "rotation": "Off field characters  > Freminet: Burst, [NA] Skill, 2NA, Skill",
        "archetype": "Hypercarry",
        "viability": "Viable",

        "character_1": {
            "name": "Freminet",
            "build": "Physical"
        },
        "character_2": {
            "name": "Yelan",
            "build": "Standard"
        },
        "character_3": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Sangonomiya Kokomi", "Kuki Shinobu", "Yae Miko", "Beidou", "Shenhe", "Layla", "Rosaria", "Kaeya", "Mika", "Diona", "Bennett", "Zhongli", "Lisa"],
            "build": ["Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard", "Standard"]
        }
    },
    
    "87": {
        "name": "Physical Freminet",
        "description": "You need an hydro unit in order to trigger shatter. In physical Freminet, an electro character is esencial to do Superconduct. ",
        "rotation": "Off field characters  > Freminet: Burst, [NA] Skill, 2NA, Skill",
        "archetype": "Hypercarry",
        "viability": "Viable",

        "character_1": {
            "name": "Freminet",
            "build": "Physical"
        },
        "character_2": {
            "name": "Sangonomiya Kokomi",
            "build": "Standard"
        },
        "character_3": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kuki Shinobu", "Yae Miko", "Beidou", "Shenhe", "Layla", "Rosaria", "Kaeya", "Mika", "Diona", "Bennett", "Zhongli", "Lisa"],
            "build": ["Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard","Standard", "Standard"]
        }
    },
    
    "88": {
        "name": "Freminet HyperFridge",
        "description": "Freminet best archetype thanks to the sinergy between hyperbloom and his kit. Cryo helps to generate more seeds, and hyperbloom has electro and hydro, units that Freminet needs.",
        "rotation": "Off field characters  > Freminet: Burst, [NA] Skill, 2NA, Skill",
        "archetype": "HyperFridge",
        "viability": "Viable",

        "character_1": {
            "name": "Freminet",
            "build": "Physical"
        },
        "character_2": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Nahida", "Aether"],
            "build": ["Standard", "Dendro"]
        }
    },

    "89": {
        "name": "Freminet HyperFridge",
        "description": "Freminet best archetype thanks to the sinergy between hyperbloom and his kit. Cryo helps to generate more seeds, and hyperbloom has electro and hydro, units that Freminet needs.",
        "rotation": "Off field characters  > Freminet: Burst, [NA] Skill, 2NA, Skill",
        "archetype": "HyperFridge",
        "viability": "Viable",

        "character_1": {
            "name": "Freminet",
            "build": "Physical"
        },
        "character_2": {
            "name": "Sangonomiya Kokomi",
            "build": "Standard"
        },
        "character_3": {
            "name": "Raiden Shogun",
            "build": "EM"
        },
        "character_4": {
            "name": ["Nahida", "Aether"],
            "build": ["Standard", "Dendro"]
        }
    },
    
    "90": {
        "name": "Freminet Freeze",
        "description": "",
        "rotation": "Off field characters  > Freminet: E, BURST, Spam skill (NA when Skill on CD(1s))",
        "archetype": "Freeze",
        "viability": "Viable",

        "character_1": {
            "name": "Freminet",
            "build": "Freeze"
        },
        "character_2": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Layla", "Shenhe", "Chongyun", "Rosaria", "Ganyu", "Diona", "Kaeya"],
            "build": ["Standard","Standard","Standard","Standard","Ultimate","Standard","Standard"]
        }
    },
    
    "91": {
        "name": "Freminet Melt",
        "description": "Not recommended, since Freminet E share ICD",
        "rotation": "Off field characters  > Freminet: E, BURST, Spam skill (NA when Skill on CD(1s))",
        "archetype": "Melt",
        "viability": "Troll",

        "character_1": {
            "name": "Freminet",
            "build": "Freeze"
        },
        "character_2": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_3": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha", "Rosaria", "Chongyun", "Kaeya", "Shenhe"],
            "build": ["Standard","Standard","Standard","Standard","Standard"]
        }
    },

        "91": {
        "name": "Neuvillette Hyperbloom",
        "description": "Neuvillette is very strong in this archetype. With Raiden, you can do kite and trigger seeds.",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_3": {
            "name": "Raiden Shogun",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yae Miko", "Fischl", "Beidou", "Venti"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },
    
    "92": {
        "name": "Neuvillette Hyperbloom",
        "description": "Neuvillette is very strong in this archetype. With Raiden, you can do kite and trigger seeds. ",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_3": {
            "name": "Raiden Shogun",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Zhongli", "Albedo", "Kaedehara Kazuha", "Sucrose"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },

    "93": {
        "name": "Neuvillette Hyperbloom",
        "description": "Neuvillette is very strong in this archetype. With Raiden, you can do kite and trigger seeds.",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Aether",
            "build": "Dendro"
        },
        "character_3": {
            "name": "Raiden Shogun",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yae Miko", "Fischl", "Beidou", "Venti"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },
    
    "94": {
        "name": "Neuvillette Hyperbloom",
        "description": "Neuvillette is very strong in this archetype. With Raiden, you can do kite and trigger seeds. ",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Aether",
            "build": "Dendro"
        },
        "character_3": {
            "name": "Raiden Shogun",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Zhongli", "Albedo", "Kaedehara Kazuha", "Sucrose", "Yaoyao", "Collei", "Baizhu", "Kirara"],
            "build": ["Standard", "Standard", "Standard", "Standard", "Standard", "Standard", "Standard", "Standard"]
        }
    },


    
    
    "95": {
        "name": "Neuvillette HyperFridge",
        "description": "Neuvillette is VERY strong in this archetype. With Raiden, you can do kite and trigger seeds. You can have the three stacks of Neuvillette passive.",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_3": {
            "name": "Raiden Shogun",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Rosaria", "Ganyu", "Layla", "Diona"],
            "build": ["Standard", "Ultimate", "Standard", "Standard"]
        }
    },
    
    "96": {
        "name": "Neuvillette HyperFridge",
        "description": "Neuvillette is VERY strong in this archetype. With Raiden, you can do kite and trigger seeds. You can have the three stacks of Neuvillette passive.",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Aether",
            "build": "Dendro"
        },
        "character_3": {
            "name": "Raiden Shogun",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Rosaria", "Ganyu", "Layla", "Diona"],
            "build": ["Standard", "Ultimate", "Standard", "Standard"]
        }
    },
    
    "97": {
        "name": "Neuvillette Hyperbloom",
        "description": "Neuvillette is very strong in this archetype.  Be carefull to stay in a range that Shinobu can trigger the seeds.",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yae Miko", "Fischl", "Beidou", "Venti"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },
    
    "98": {
        "name": "Neuvillette Hyperbloom",
        "description": "Neuvillette is very strong in this archetype. Be carefull to stay in a range that Shinobu can trigger the seeds. ",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Viable",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Zhongli", "Albedo", "Kaedehara Kazuha", "Sucrose"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },

    "99": {
        "name": "Neuvillette Hyperbloom",
        "description": "Neuvillette is very strong in this archetype. Be carefull to stay in a range that Shinobu can trigger the seeds.",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Aether",
            "build": "Dendro"
        },
        "character_3": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yae Miko", "Fischl", "Beidou", "Venti"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },
    
    "100": {
        "name": "Neuvillette Hyperbloom",
        "description": "Neuvillette is very strong in this archetype. Be carefull to stay in a range that Shinobu can trigger the seeds. ",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Viable",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Aether",
            "build": "Dendro"
        },
        "character_3": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Zhongli", "Albedo", "Kaedehara Kazuha", "Sucrose", "Yaoyao", "Collei", "Baizhu", "Kirara"],
            "build": ["Standard", "Standard", "Standard", "Standard", "Standard", "Standard", "Standard", "Standard"]
        }
    },

    "101": {
        "name": "Neuvillette HyperFridge",
        "description": "Neuvillette is VERY strong in this archetype. Be carefull to stay in a range that Shinobu can trigger the seeds. You can have the three stacks of Neuvillette passive.",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Rosaria", "Ganyu", "Layla", "Diona"],
            "build": ["Standard", "Ultimate", "Standard", "Standard"]
        }
    },
    
    "102": {
        "name": "Neuvillette HyperFridge",
        "description": "Neuvillette is VERY strong in this archetype. Be carefull to stay in a range that Shinobu can trigger the seeds. You can have the three stacks of Neuvillette passive.",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Aether",
            "build": "Dendro"
        },
        "character_3": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Rosaria", "Ganyu", "Layla", "Diona"],
            "build": ["Standard", "Ultimate", "Standard", "Standard"]
        }
    },

    "103": {
        "name": "Neuvillette Taser",
        "description": "Neuvillete is a strong onfield option in taser,",
        "rotation": "",
        "archetype": "Taser",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_3": {
            "name": "Beidou",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha", "Venti"],
            "build": ["Standard", "Standard"]
        }
    },

    "104": {
        "name": "Neuvillette Taser",
        "description": "Neuvillete is a strong onfield option in taser,",
        "rotation": "",
        "archetype": "Taser",
        "viability": "Viable",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_3": {
            "name": "Beidou",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Sucrose", "Lynette"],
            "build": ["Standard", "Standard"]
        }
    },

    "105": {
        "name": "Neuvillette Taser",
        "description": "Neuvillete is a strong onfield option in taser,",
        "rotation": "",
        "archetype": "Taser",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_3": {
            "name": "Yae Miko",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha", "Venti"],
            "build": ["Standard", "Standard"]
        }
    },

    "106": {
        "name": "Neuvillette Taser",
        "description": "Neuvillete is a strong onfield option in taser,",
        "rotation": "",
        "archetype": "Taser",
        "viability": "Viable",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_3": {
            "name": "Yae Miko",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Sucrose", "Lynette"],
            "build": ["Standard", "Standard"]
        }
    },
    
    "107": {
        "name": "Neuvillette Oven",
        "description": "",
        "rotation": "",
        "archetype": "Oven",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Rosaria", "Ganyu", "Diona", "Layla"],
            "build": ["Standard", "Ultimate", "Standard", "Standard"]
        }
    },

    "108": {
        "name": "Neuvillette Oven",
        "description": "",
        "rotation": "",
        "archetype": "Oven",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Aether",
            "build": "Dendro"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Rosaria", "Ganyu", "Diona", "Layla"],
            "build": ["Standard", "Ultimate", "Standard", "Standard"]
        }
    },
    
    "109": {
        "name": "Neuvillette Curry",
        "description": "",
        "rotation": "",
        "archetype": "Curry",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Fischl", "Beidou"],
            "build": ["Standard", "SoloElectro"]
        }
    },

    "110": {
        "name": "Neuvillette Curry",
        "description": "",
        "rotation": "",
        "archetype": "Curry",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Aether",
            "build": "Dendro"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Fischl", "Beidou"],
            "build": ["Standard", "SoloElectro"]
        }
    },
    
    "111": {
        "name": "Neuvillette Sauté",
        "description": "",
        "rotation": "",
        "archetype": "Sauté",
        "viability": "Viable",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Bennett"],
            "build": ["Standard"]
        }
    },
    
    "112": {
        "name": "Neuvillette Sauté",
        "description": "",
        "rotation": "",
        "archetype": "Sauté",
        "viability": "Viable",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Aether",
            "build": "Dendro"
        },
        "character_3": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Bennett"],
            "build": ["Standard"]
        }
    },
    
    "113": {
        "name": "Neuvillette National",
        "description": "Not enough Hydro Application. Can be played anyways because National is good, but one of the worst Neuvillete teams.",
        "rotation": "",
        "archetype": "National",
        "viability": "Viable",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_3": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha", "Sucrose"],
            "build": ["Standard", "Standard"]
        }
    },
    
    "114": {
        "name": "Neuvillette Freeze",
        "description": "",
        "rotation": "",
        "archetype": "Freeze",
        "viability": "Viable",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Rosaria",
            "build": "Standard"
        },
        "character_3": {
            "name": "Ganyu",
            "build": "Ultimate"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha", "Venti", "Lynette", "Sucrose", "Jean"],
            "build": ["Standard", "Standard", "Standard", "Standard", "Standard"]
        }
    },

    "115": {
        "name": "Neuvillette Taser/Hypercarry",
        "description": "An electro-charged focus team. Most output damage for Neuvillette, so it can be called Hypercarry",
        "rotation": "",
        "archetype": "Taser",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Zhongli"],
            "build": ["Standard"]
        }
    },

    "116": {
        "name": "Neuvillette OverVape",
        "description": "A National team but with Fischl, helps maintaining the hydro aura on enemies, so it's better than normal National",
        "rotation": "",
        "archetype": "Overvape",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Bennett"],
            "build": ["Standard"]
        }
    },

    "117": {
        "name": "Neuvillette Curry",
        "description": "",
        "rotation": "",
        "archetype": "Curry",
        "viability": "Viable",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_3": {
            "name": "Dehya",
            "build": "EM"
        },
        "character_4": {
            "name": ["Fischl", "Beidou"],
            "build": ["Standard", "SoloElectro"]
        }
    },

    "118": {
        "name": "Neuvillette Curry",
        "description": "",
        "rotation": "",
        "archetype": "Curry",
        "viability": "Viable",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Aether",
            "build": "Dendro"
        },
        "character_3": {
            "name": "Dehya",
            "build": "EM"
        },
        "character_4": {
            "name": ["Fischl", "Beidou"],
            "build": ["Standard", "SoloElectro"]
        }
    },

    "119": {
        "name": "Neuvillette Freeze",
        "description": "",
        "rotation": "",
        "archetype": "Freeze",
        "viability": "Viable",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Mona",
            "build": "Standard"
        },
        "character_3": {
            "name": "Ganyu",
            "build": "Ultimate"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha", "Venti", "Lynette", "Sucrose", "Jean"],
            "build": ["Standard", "Standard", "Standard", "Standard", "Standard"]
        }
    },

    "120": {
        "name": "Neuvillette Freeze",
        "description": "",
        "rotation": "",
        "archetype": "Freeze",
        "viability": "Viable",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Mona",
            "build": "Standard"
        },
        "character_3": {
            "name": "Rosaria",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha", "Venti", "Lynette", "Sucrose", "Jean"],
            "build": ["Standard", "Standard", "Standard", "Standard", "Standard"]
        }
    },

    "121": {
        "name": "Vape Neuvillette",
        "description": "Thanks to the low hydro applicattion that Neuvillete has, he can be one one of the only hydro character to do forward vaporize. Very difficult, you have to rotate around enemies. You can build som EM in this team (ej: Weapon, Sands, but crit is always better)",
        "rotation": "E Neuvi > E kazuha > E Zhongli (try to not get the pilar) > E Xiangling (wait 1s) > Q Neu + CA > E kazuha > Q Xiangling > Neu CA + E + CA",
        "archetype": "Vaporize",
        "viability": "Unique",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "SoloPyro"
        },
        "character_4": {
            "name": ["Zhongli"],
            "build": ["Standard"]
        }
    },

    "122": {
        "name": "Neuvillette Dehya Hyperbloom",
        "description": "Dehya is surprisily good with Neuvillette Hyperbloom. Low Pyro application to not still hyperblooms, enough pyro to trigger burning so Neuvillette can Vape and active 3 stacks of his passive. On top of that, resistance interruption for the first Neuvillete CA so he can start to kite. As always, Raiden > Shinobu but both are good. ",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Dehya",
            "build": "EM"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Raiden Shogun", "Kuki Shinobu"],
            "build": ["Standard", "Standard"]
        }
    },

    "123": {
        "name": "Neuvillette Dehya Hyperbloom",
        "description": "Dehya is surprisily good with Neuvillette Hyperbloom. Low Pyro application to not still hyperblooms, enough pyro to trigger burning so Neuvillette can Vape and active 3 stacks of his passive. On top of that, resistance interruption for the first Neuvillete CA so he can start to kite. As always, Raiden > Shinobu but both are good. With Dendro MC usually an Anemo character is better.  ",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Viable",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Dehya",
            "build": "EM"
        },
        "character_3": {
            "name": "Aether",
            "build": "Dendro"
        },
        "character_4": {
            "name": ["Raiden Shogun", "Kuki Shinobu"],
            "build": ["Standard", "Standard"]
        }
    },

    "124": {
        "name": "Childe Xiangling Oven",
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. Add a cryo to have more seeds and Frozen.",
        "rotation": "",
        "archetype": "Oven",
        "viability": "Viable",

        "character_1": {
            "name": "Tartaglia",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xiangling",
            "build": "EM"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaeya", "Rosaria", "Diona", "Layla", "Ganyu"],
            "build": ["Standard", "Standard", "Standard", "Standard", "Ultimate"]
        }
    },

    "125": {
        "name": "Wriothesley Melt",
        "description": "Wriothesley can be played on Melt. It's a bit complicated due to the NA ICD (melting the 1-4 hits with a normal rotation, which is not optimal), but it's okay. You don't have to swirl cryo since Wriothesley don't have offield application, so just swirl pyro with kazuha and good for grouping.",
        "rotation": "",
        "archetype": "Melt",
        "viability": "Viable",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_3": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha"],
            "build": ["Standard"]
        }
    },
    
    "126": {
        "name": "Wriothesley Melt",
        "description": "Wriothesley can be played on Melt. It's a bit complicated due to the NA ICD (melting the 1-4 hits with a normal rotation, which is not optimal), but it's okay.",
        "rotation": "",
        "archetype": "Melt",
        "viability": "Viable",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_3": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Shenhe", "Rosaria", "Kaeya", "Layla"],
            "build": ["Standard", "Melt", "Melt", "Standard"]
        }
    },
    
    "127": {
        "name": "Wriothesley Freeze",
        "description": "Okay",
        "rotation": "",
        "archetype": "Freeze",
        "viability": "Viable",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Yelan",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kaedehara Kazuha", "Jean"],
            "build": ["Standard", "Standard"]
        }
    },
    
    "128": {
        "name": "Wriothesley Freeze",
        "description": "With Furina, Wriothesley value grows up. You need Mika/Charlotte to heal all the teammates in a big heal, which have sinergy with Furina and Wriothesley. ",
        "rotation": "",
        "archetype": "Freeze",
        "viability": "Meta",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Mika", "Charlotte"],
            "build": ["Standard", "Standard"]
        }
    },
    
    "129": {
        "name": "Wriothesley Freeze",
        "description": "With Furina, Wriothesley value grows up. You can use Jean as Anemo healer since she has good sinergy with Furina and Wriothesley, but you don't have grouping. ",
        "rotation": "",
        "archetype": "Freeze",
        "viability": "Viable",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "Jean",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Rosaria", "Kaeya", "Layla", "Shenhe", "Ganyu"],
            "build": ["Standard", "Standard", "Standard", "Standard", "Ultimate"]
        }
    },
    
    "130": {
        "name": "Wriothesley Freeze",
        "description": "With Furina, Wriothesley value grows up. You can use Kokomi as healer but she don't heal all the teammates so don't have special sinergy with Furina and Wriothesley (Is not optimal to spend time onfield healing with kokomi's Q)",
        "rotation": "",
        "archetype": "Freeze",
        "viability": "Viable",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Sangonomiya Kokomi"],
            "build": ["Standard"]
        }
    },
    
    "131": {
        "name": "Wriothesley MonoCryo",
        "description": "",
        "rotation": "",
        "archetype": "MonoCryo",
        "viability": "Viable",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Shenhe",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Mika", "Charlotte"],
            "build": ["Standard", "Standard"]
        }
    },
    
    "132": {
        "name": "Wriothesley HyperFridge",
        "description": "Just OP. You can't play with the raiden EM version, as Wriothesley need a bit of healing himself.",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Meta",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Nahida", "Aether"],
            "build": ["Standard", "Dendro"]
        }
    },
    
    "133": {
        "name": "Wriothesley HyperFridge",
        "description": "Just OP. You can't play with the raiden EM version, as Wriothesley need a bit of healing himself.",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Meta",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Nahida", "Aether"],
            "build": ["Standard", "Dendro"]
        }
    },
    
    "134": {
        "name": "Wriothesley Bain-Marie",
        "description": "New OP archetype thanks to Wriothesley and Furina. Vaps + Melts + Burgeon in the same team. ",
        "rotation": "",
        "archetype": "Bain-Marie",
        "viability": "Meta",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xiangling",
            "build": "SoloPyro"
        },
        "character_4": {
            "name": ["Baizhu", "Yaoyao"],
            "build": ["Standard", "Standard"]
        }
    },
        
    "135": {
        "name": "Wriothesley Melt",
        "description": "",
        "rotation": "",
        "archetype": "Melt",
        "viability": "Viable",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_3": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yun Jin", "Zhongli"],
            "build": ["Standard", "Standard"]
        }
    },
    
    "136": {
        "name": "Wriothesley Melt",
        "description": "",
        "rotation": "",
        "archetype": "Melt",
        "viability": "Viable",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xiangling",
            "build": "Standard"
        },
        "character_3": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Nahida"],
            "build": ["Standard"]
        }
    },
    
    "137": {
        "name": "Wriothesley Sunfire",
        "description": "Jean Sunfire mechanic plus Wriothesley",
        "rotation": "Bennett E/Q > Jean E/Q",
        "archetype": "Melt",
        "viability": "Viable",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Jean",
            "build": "EM"
        },
        "character_3": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Shenhe", "Xiangling"],
            "build": ["Standard", "Standard"]
        }
    },
    
    "138": {
        "name": "Wriothesley Freeze",
        "description": "",
        "rotation": "",
        "archetype": "Freeze",
        "viability": "Viable",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Jean",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Shenhe", "Kaeya"],
            "build": ["Standard", "Standard"]
        }
    },
    
    "139": {
        "name": "Wriothesley Freeze",
        "description": "",
        "rotation": "",
        "archetype": "Freeze",
        "viability": "Viable",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Jean",
            "build": "Standard"
        },
        "character_3": {
            "name": "Yelan",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Shenhe", "Kaeya"],
            "build": ["Standard", "Kaeya"]
        }
    },
    
    "140": {
        "name": "Wriothesley Freeze",
        "description": "",
        "rotation": "",
        "archetype": "Freeze",
        "viability": "Viable",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_3": {
            "name": "Yelan",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Shenhe", "Kaeya", "Diona", "Charlotte", "Layla", "Mika"],
            "build": ["Standard", "Standard", "Standard", "Standard", "Standard", "Standard"]
        }
    },
    
    "141": {
        "name": "Wriothesley Freeze",
        "description": "",
        "rotation": "",
        "archetype": "Freeze",
        "viability": "Viable",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Shenhe", "Kaeya", "Diona", "Charlotte", "Layla", "Mika"],
            "build": ["Standard", "Standard", "Standard", "Standard", "Standard", "Standard"]
    },
        
    "142": {
        "name": "Wriothesley HyperFridge",
        "description": "Xingqiu provides the resistence and extra healing he might need.",
        "rotation": "Since you don't have healer, you have to spam CA with wriothesley every 5NA (a NA string) even at C0. At >=50% HP, spam CA. ",
        "archetype": "HyperFridge",
        "viability": "Meta",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Raiden Shogun",
            "build": "EM"
        },
        "character_3": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Nahida", "Aether"],
            "build": ["Standard", "Dendro"]
        }
    },
    
    "143": {
        "name": "Wriothesley HyperFridge",
        "description": "",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Viable",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Raiden Shogun",
            "build": "EM"
        },
        "character_3": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yaoyao", "Baizhu"],
            "build": ["Standard", "Standard"]
        }
    },
    
    "144": {
        "name": "Wriothesley HyperFridge",
        "description": "",
        "rotation": "",
        "archetype": "HyperFridge",
        "viability": "Viable",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Raiden Shogun",
            "build": "EM"
        },
        "character_3": {
            "name": "Yelan",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yaoyao", "Baizhu"],
            "build": ["Standard", "Standard"]
        }
    },
    
    "145": {
        "name": "Wriothesley Melt",
        "description": "",
        "rotation": "",
        "archetype": "Melt",
        "viability": "Meta",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_3": {
            "name": "Bennett",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Thoma"],
            "build": ["Standard"]
        }
    },
    

    "146": {
        "name": "Wriothesley Oven",
        "description": "",
        "rotation": "",
        "archetype": "Oven",
        "viability": "Meta",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "Standard"
        },
        "character_3": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Nahida", "Aether", "Baizhu", "Yaoyao"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },

    "147": {
        "name": "Wriothesley Oven",
        "description": "",
        "rotation": "",
        "archetype": "Oven",
        "viability": "Meta",

        "character_1": {
            "name": "Wriothesley",
            "build": "Standard"
        },
        "character_2": {
            "name": "Thoma",
            "build": "Standard"
        },
        "character_3": {
            "name": "Yelan",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Nahida", "Aether", "Baizhu", "Yaoyao"],
            "build": ["Standard", "Standard", "Standard", "Standard"]
        }
    },

    "148": {
        "name": "Neuvillette Furina Carry",
        "description": "",
        "rotation": "",
        "archetype": "Hypercarry",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Jean", "Sayu"],
            "build": ["Standard", "Standard"]
        }
    },

    "149": {
        "name": "Neuvillette Furina Carry",
        "description": "",
        "rotation": "",
        "archetype": "Hypercarry",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "Zhongli",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Jean", "Sayu"],
            "build": ["Standard", "Standard"]
        }
    },

    "150": {
        "name": "Neuvillette Furina Carry",
        "description": "In this team is recommended playing Neuvillette with Prototype Amber to have enough healing with Furina Passive and Shinobu/Dori/Diona",
        "rotation": "",
        "archetype": "Hypercarry",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kuki Shinobu", "Dori", "Diona"],
            "build": ["Standard", "Standard", "Standard"]
        }
    },

    "151": {
        "name": "Neuvillette Furina Carry",
        "description": "",
        "rotation": "",
        "archetype": "Hypercarry",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kaedehara Kazuha",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Charlotte", "Mika"],
            "build": ["Standard", "Standard"]
        }
    },

    "152": {
        "name": "Neuvillette Furina Hyperbloom",
        "description": "In this team is recommended playing Neuvillette with Prototype Amber to have enough healing with Furina Passive and Shinobu/Dori/Diona",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Aether", "Nahida"],
            "build": ["Dendro", "Standard"]
        }
    },

    "153": {
        "name": "Neuvillette Furina Hyperbloom",
        "description": "",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yaoyao", "Baizhu"],
            "build": ["Standard", "Standard"]
        }
    },

    "154": {
        "name": "Neuvillette Furina Hyperbloom",
        "description": "",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Neuvillette",
            "build": "Standard"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "Shogun Raiden",
            "build": "EM"
        },
        "character_4": {
            "name": ["Yaoyao", "Baizhu"],
            "build": ["Standard", "Standard"]
        }
    },

    "155": {
        "name": "Furina Raiden Hyperbloom",
        "description": "",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Shogun Raiden",
            "build": "EM"
        },
        "character_4": {
            "name": ["Yaoyao", "Baizhu"],
            "build": ["Standard", "Standard"]
        }
    },

    "156": {
        "name": "Furina Raiden Hyperbloom",
        "description": "",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_2": {
            "name": "Yelan",
            "build": "Standard"
        },
        "character_3": {
            "name": "Shogun Raiden",
            "build": "EM"
        },
        "character_4": {
            "name": ["Yaoyao", "Baizhu"],
            "build": ["Standard", "Standard"]
        }
    },

    "157": {
        "name": "Furina Shinobu Hyperbloom",
        "description": "",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yaoyao", "Baizhu"],
            "build": ["Standard", "Standard"]
        }
    },

    "158": {
        "name": "Furina Shinobu Hyperbloom",
        "description": "",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_2": {
            "name": "Yelan",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yaoyao", "Baizhu"],
            "build": ["Standard", "Standard"]
        }
    },

    "159": {
        "name": "Furina Dori Hyperbloom",
        "description": "Dori can be used in hyperbloom but she has a lot of downtime",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Troll",

        "character_1": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_2": {
            "name": "Xingqiu",
            "build": "Standard"
        },
        "character_3": {
            "name": "Dori",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yaoyao", "Baizhu"],
            "build": ["Standard", "Standard"]
        }
    },

    "160": {
        "name": "Furina Dori Hyperbloom",
        "description": "Dori can be used in hyperbloom but she has a lot of downtime",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Troll",

        "character_1": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_2": {
            "name": "Yelan",
            "build": "Standard"
        },
        "character_3": {
            "name": "Dori",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yaoyao", "Baizhu"],
            "build": ["Standard", "Standard"]
        }
    },

    "161": {
        "name": "Furina Hyperbloom",
        "description": "",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_2": {
            "name": "Sangonomiya Kokomi",
            "build": "Standard"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Kuki Shinobu", "Shogun Raiden"],
            "build": ["Standard", "EM"]
        }
    },

    "162": {
        "name": "Furina Hyperbloom",
        "description": "",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_2": {
            "name": "Sangonomiya Kokomi",
            "build": "Standard"
        },
        "character_3": {
            "name": "Aether",
            "build": "Dendro"
        },
        "character_4": {
            "name": ["Kuki Shinobu", "Shogun Raiden"],
            "build": ["Standard", "EM"]
        }
    },

    "163": {
        "name": "Cyno Furina Hyperbloom",
        "description": "",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Cyno",
            "build": "SoloElectro"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "YaoYao",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Xingqiu", "Yelan"],
            "build": ["Standard", "Standard"]
        }
    },

    "164": {
        "name": "Cyno Furina Hyperbloom",
        "description": "",
        "rotation": "",
        "archetype": "Hyperbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Cyno",
            "build": "SoloElectro"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "Baizhu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Xingqiu", "Yelan"],
            "build": ["Standard", "Standard"]
        }
    },

    "165": {
        "name": "Cyno Furina Quickbloom",
        "description": "",
        "rotation": "",
        "archetype": "Quickbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Cyno",
            "build": "Standard"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "Fischl",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yaoyao", "Baizhu"],
            "build": ["Standard", "Standard"]
        }
    },

    "166": {
        "name": "Cyno Furina Quickbloom",
        "description": "",
        "rotation": "",
        "archetype": "Quickbloom",
        "viability": "Viable",

        "character_1": {
            "name": "Cyno",
            "build": "Standard"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "Kuki Shinobu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Yaoyao", "Baizhu"],
            "build": ["Standard", "Standard"]
        }
    },

    "167": {
        "name": "Cyno Furina Quickbloom",
        "description": "",
        "rotation": "",
        "archetype": "Quickbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Cyno",
            "build": "SoloElectro"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "YaoYao",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Nahida", "Aether"],
            "build": ["Standard", "Dendro"]
        }
    },

    "168": {
        "name": "Cyno Furina Quickbloom",
        "description": "",
        "rotation": "",
        "archetype": "Quickbloom",
        "viability": "Meta",

        "character_1": {
            "name": "Cyno",
            "build": "SoloElectro"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "Baizhu",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Nahida", "Aether"],
            "build": ["Standard", "Dendro"]
        }
    },

    "169": {
        "name": "Cyno Furina Quickbloom",
        "description": "Cyno Furina hyperbloom but with a Flex Healer slot. ",
        "rotation": "",
        "archetype": "Quickbloom",
        "viability": "Viable",

        "character_1": {
            "name": "Cyno",
            "build": "SoloElectro"
        },
        "character_2": {
            "name": "Furina",
            "build": "Standard"
        },
        "character_3": {
            "name": "Nahida",
            "build": "Standard"
        },
        "character_4": {
            "name": ["Mika", "Charlotte", "Jean", "Sayu", "Barbara"],
            "build": ["Standard", "Standard", "Standard", "Standard", "Standard"]
        }
    },
    
}

//"34": {
//    "name": "",
//    "description": "",
//    "rotation": "",
//    "archetype": "",
//    "viability": "",
//
//    "character_1": {
//        "name": "",
//        "build": "Standard"
//    },
//    "character_2": {
//        "name": "",
//        "build": "Standard"
//    },
//    "character_3": {
//        "name": "",
//        "build": "Standard"
//    },
//    "character_4": {
//        "name": ["char"],
//        "build": ["Standard"]
//    }
//},
