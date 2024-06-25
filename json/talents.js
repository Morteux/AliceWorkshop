const talents = {
    "Emilie": {
        "id": 0,
        "name": "Emilie",
        "combat1": {
            "name": "Normal Attack: Marechaussee Creed",
            "descriptionRaw": "Normal Attack\nPerforms up to 5 rapid strikes.\n\nCharged Attack\nConsumes a certain amount of Stamina to nimbly dash forward, slashing and using her pistolet to fire Suppressing Shots in a fan pattern.\n\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
            "description": "Normal Attack\nPerforms up to 5 rapid strikes.\n\nCharged Attack\nConsumes a certain amount of Stamina to nimbly dash forward, slashing and using her pistolet to fire Suppressing Shots in a fan pattern.\n\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
            "attributes": {
                "labels": [
                ],
                "parameters": {
                }
            }
        },
        "combat2": {
            "name": "E. Hunt the Dark",
            "descriptionRaw": "Preparing her pistolet, she enters the \"Night Watch\" state, using steel and shot together. In this state, Clorinde's Normal Attacks will be transformed into \"Wild Hunt\" pistolet attacks, and the DMG dealt is converted into Electro DMG that cannot be overridden by infusions. Her Elemental Skill will be transformed into \"Impale the Night\": Performs a lunging attack, dealing Electro DMG. The DMG done through the aforementioned method is considered Normal Attack DMG.\n\nWild Hunt\n· When her Bond of Life is equal to or greater than 100% of her max HP: Performs a standard pistolet shot.\n· When her Bond of Life is less than 100%, firing her pistolet will grant her Bond of Life, with the amount gained based on her max HP. The shots she fires can pierce opponents, and DMG dealt to opponents in their path is increased.",
            "description": "Preparing her pistolet, she enters the \"Night Watch\" state, using steel and shot together. In this state, Clorinde's Normal Attacks will be transformed into \"Wild Hunt\" pistolet attacks, and the DMG dealt is converted into Electro DMG that cannot be overridden by infusions. Her Elemental Skill will be transformed into \"Impale the Night\": Performs a lunging attack, dealing Electro DMG. The DMG done through the aforementioned method is considered Normal Attack DMG.\n\nWild Hunt\n· When her Bond of Life is equal to or greater than 100% of her max HP: Performs a standard pistolet shot.\n· When her Bond of Life is less than 100%, firing her pistolet will grant her Bond of Life, with the amount gained based on her max HP. The shots she fires can pierce opponents, and DMG dealt to opponents in their path is increased.",
            "attributes": {
                "labels": [
                ],
                "parameters": {
                }
            }
        },
        "combat3": {
            "name": "Q. Last Lightfall",
            "descriptionRaw": "Grants herself a Bond of Life based upon her own max HP before swiftly evading and striking with saber and sidearm as one, dealing AoE Electro DMG.",
            "description": "Grants herself a Bond of Life based upon her own max HP before swiftly evading and striking with saber and sidearm as one, dealing AoE Electro DMG.",
            "attributes": {
                "labels": [
                ],
                "parameters": {
                }
            }
        },
        "passive1": {
            "name": "Dark-Shattering Flame",
            "descriptionRaw": "After a nearby party member triggers a Electro-related reaction against an opponent, Electro DMG dealt by Normal Attacks and Last Lightfall will be increased by 17% of Clorinde's ATK for 15s. Max 3 buff stacks. Each stack is counted independently. The Maximum DMG increase achievable through such attacks is 1,530.",
            "description": "After a nearby party member triggers a Electro-related reaction against an opponent, Electro DMG dealt by Normal Attacks and Last Lightfall will be increased by 17% of Clorinde's ATK for 15s. Max 3 buff stacks. Each stack is counted independently. The Maximum DMG increase achievable through such attacks is 1,530."
        },
        "passive2": {
            "name": "Lawful Remuneration",
            "descriptionRaw": "If Clorinde's Bond of Life is equal to or greater than 100% of her Max HP, her CRIT Rate will increase by 10% for 15s whenever her Bond of Life value increases or decreases. Max 2 stacks. Each stack is counted independently.\nAdditionally, Hunt the Night's Night Watch state is buffed: While it is active, the percent of healing converted to Bond of Life increases to 100%.",
            "description": "If Clorinde's Bond of Life is equal to or greater than 100% of her Max HP, her CRIT Rate will increase by 10% for 15s whenever her Bond of Life value increases or decreases. Max 2 stacks. Each stack is counted independently.\nAdditionally, Hunt the Night's Night Watch state is buffed: While it is active, the percent of healing converted to Bond of Life increases to 100%."
        },
        "passive3": {
            "name": "Night Watch's Yield",
            "descriptionRaw": "Displays the location of nearby resources unique to Fontaine on the mini-map.",
            "description": "Displays the location of nearby resources unique to Fontaine on the mini-map."
        },
        "costs": {
            "lvl2": [
                {
                    "id": 202,
                    "name": "Mora",
                    "count": 12500
                },
                {
                    "id": 0,
                    "name": "Teachings of Justice",
                    "count": 3
                },
                {
                    "id": 0,
                    "name": "Transoceanic Pearl",
                    "count": 6
                }

            ],
            "lvl3": [
                {
                    "id": 202,
                    "name": "Mora",
                    "count": 17500
                },
                {
                    "id": 0,
                    "name": "Guide to Justice",
                    "count": 2
                },
                {
                    "id": 0,
                    "name": "Transoceanic Chunk",
                    "count": 3
                }
            ],
            "lvl4": [
                {
                    "id": 202,
                    "name": "Mora",
                    "count": 25000
                },
                {
                    "id": 0,
                    "name": "Guide to Justice",
                    "count": 4
                },
                {
                    "id": 0,
                    "name": "Transoceanic Chunk",
                    "count": 4
                }
            ],
            "lvl5": [
                {
                    "id": 202,
                    "name": "Mora",
                    "count": 30000
                },
                {
                    "id": 0,
                    "name": "Guide to Justice",
                    "count": 6
                },
                {
                    "id": 0,
                    "name": "Transoceanic Chunk",
                    "count": 6
                }
            ],
            "lvl6": [
                {
                    "id": 202,
                    "name": "Mora",
                    "count": 37500
                },
                {
                    "id": 0,
                    "name": "Guide to Justice",
                    "count": 9
                },
                {
                    "id": 0,
                    "name": "Transoceanic Chunk",
                    "count": 9
                }
            ],
            "lvl7": [
                {
                    "id": 202,
                    "name": "Mora",
                    "count": 120000
                },
                {
                    "id": 0,
                    "name": "Philosophies of Justice",
                    "count": 4
                },
                {
                    "id": 0,
                    "name": "Xenochromatic Crystal",
                    "count": 4
                },
                {
                    "id": 0,
                    "name": "Everamber",
                    "count": 1
                }
            ],
            "lvl8": [
                {
                    "id": 202,
                    "name": "Mora",
                    "count": 260000
                },
                {
                    "id": 0,
                    "name": "Philosophies of Justice",
                    "count": 6
                },
                {
                    "id": 0,
                    "name": "Xenochromatic Crystal",
                    "count": 6
                },
                {
                    "id": 0,
                    "name": "Everamber",
                    "count": 1
                }
            ],
            "lvl9": [
                {
                    "id": 202,
                    "name": "Mora",
                    "count": 450000
                },
                {
                    "id": 0,
                    "name": "Philosophies of Justice",
                    "count": 12
                },
                {
                    "id": 0,
                    "name": "Xenochromatic Crystal",
                    "count": 9
                },
                {
                    "id": 0,
                    "name": "Everamber",
                    "count": 2
                }
            ],
            "lvl10": [
                {
                    "id": 202,
                    "name": "Mora",
                    "count": 700000
                },
                {
                    "id": 0,
                    "name": "Philosophies of Justice",
                    "count": 16
                },
                {
                    "id": 0,
                    "name": "Xenochromatic Crystal",
                    "count": 12
                },
                {
                    "id": 0,
                    "name": "Everamber",
                    "count": 2
                },
                {
                    "id": 0,
                    "name": "Crown of Insight",
                    "count": 1
                }
            ]
        },
        "images": {
            "filename_combat1": "Skill_A_03",
            "filename_combat2": "Skill_S_Yelan_01",
            "filename_combat3": "Skill_E_Yelan_01_HD",
            "filename_passive1": "UI_Talent_S_Yelan_05",
            "filename_passive2": "UI_Talent_S_Yelan_06",
            "filename_passive3": "UI_Talent_Expedition_Liyue"
        },
        "version": ""
    }
};
