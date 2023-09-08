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
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. Add a cryo to have more seeds.",
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
        "description": "Tartaglia is good in Burgeon and similars due to AoE Hydro application. Add a cryo to have more seeds.",
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
