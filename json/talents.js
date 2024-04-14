const talents = {
    "Arlecchino": {
        "id": 0,
        "name": "Arlecchino",
        "combat1": {
            "name": "Normal Attack: Bidden Beheading",
            "descriptionRaw": "<color=#FFD780FF>Normal Attack</color>\nPerforms up to 6 consecutive spear strikes.\n\n<color=#FFD780FF>Charged Attack</color>\nConsumes a fixed amount of Stamina, dashing toward a nearby opponent and cleaving once. Continuously holding this button will cause Arlecchino to consume Stamina and engage in up to 5s of high-speed movement.\n\n<color=#FFD780FF>Plunging Attack</color>\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.\n\n<color=#FFD780FF>In Praise of Shadows and the Masque of the Red Death</color>\nWhen Arlecchino has a Bond of Life equal to or greater than 30% of her Max HP, she will enter the 'Masque of the Red Death' state, where her Normal, Charged, and Plunging Attacks will be converted to deal <color=#FF9999FF>Pyro DMG</color>. This cannot be overridden. When in the 'Masque of the Red Death' state, Arlecchino's Normal Attacks will deal extra DMG to opponents on hit that scales off her ATK multiplied by a certain ratio of her current Bond of Life percentage. This will consume 7.5% of said current Bond of Life. Her Bond of Life can be consumed this way every 0.03s. When her Bond of Life is consumed in this manner, All Is Ash's CD will decrease by 0.8s.",
            "description": "Normal Attack\nPerforms up to 4 consecutive shots with a bow.\n\nCharged Attack\nPerforms a more precise Aimed Shot with increased DMG.\nWhile aiming, flowing water will accumulate on the arrowhead. A fully charged torrential arrow will deal Hydro DMG.\n\nBreakthrough\nYelan will enter a \"Breakthrough\" state after spending 5s out of combat, which will cause her next Charged Aimed Shot to have 80% decreased charge time, and once charged, she can fire a \"Breakthrough Barb\" that will deal AoE Hydro DMG based on Yelan's Max HP.\n\nPlunging Attack\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
            "attributes": {
                "labels": [
                    "Masque of the Red Death Scaling Ratio|{param1:F1P}",
                    "1-Hit DMG|{param2:F1P}",
                    "2-Hit DMG|{param3:F1P}",
                    "3-Hit DMG|{param4:F1P}",
                    "4-Hit DMG|{param5:F1P}+{param5:F1P}",
                    "5-Hit DMG|{param6:F1P}",
                    "6-Hit DMG|{param7:F1P}",
                    "Charged Attack DMG|{param8:F1P}",
                    "Charged Attack Stamina Cost|{param9:F1P}",
                    "Plunge DMG|{param10:F1P}",
                    "Low/High Plunge DMG|{param11:P}/{param12:P}"
                ],
                "parameters": {
                    "param1": [
                        1.204,
                        1.302,
                        1.40,
                        1.54,
                        1.638,
                        1.75,
                        1.904,
                        2.058,
                        2.212,
                        2.38,
                        2.548,
                        2.716,
                        2.884,
                        3.052,
                        3.22
                    ],
                    "param2": [
                        0.475,
                        0.5137,
                        0.5523,
                        0.6076,
                        0.6462,
                        0.6904,
                        0.7512,
                        0.8119,
                        0.8727,
                        0.939,
                        1.0052,
                        1.0715,
                        1.1378,
                        1.2041,
                        1.2704
                    ],
                    "param3": [
                        0.5211,
                        0.5635,
                        0.6059,
                        0.6665,
                        0.7089,
                        0.7574,
                        0.824,
                        0.8906,
                        0.9573,
                        1.03,
                        1.1027,
                        1.1754,
                        1.2481,
                        1.3208,
                        1.3935
                    ],
                    "param4": [
                        0.6539,
                        0.7071,
                        0.7603,
                        0.8363,
                        0.8896,
                        0.9504,
                        1.034,
                        1.1176,
                        1.2013,
                        1.2925,
                        1.3837,
                        1.475,
                        1.5662,
                        1.6575,
                        1.7487
                    ],
                    "param5": [
                        0.3715,
                        0.4017,
                        0.4319,
                        0.4751,
                        0.5053,
                        0.5399,
                        0.5874,
                        0.6349,
                        0.6824,
                        0.7343,
                        0.7861,
                        0.8379,
                        0.8898,
                        0.9416,
                        0.9934
                    ],
                    "param6": [
                        0.6998,
                        0.7568,
                        0.8137,
                        0.8951,
                        0.9521,
                        1.0172,
                        1.1067,
                        1.1962,
                        1.2857,
                        1.3834,
                        1.481,
                        1.5787,
                        1.6763,
                        1.774,
                        1.8716
                    ],
                    "param7": [
                        0.8538,
                        0.9233,
                        0.9928,
                        1.092,
                        1.1615,
                        1.241,
                        1.3502,
                        1.4594,
                        1.5686,
                        1.6877,
                        1.8068,
                        1.926,
                        2.0451,
                        2.1642,
                        2.2834
                    ],
                    "param8": [
                        0.9082,
                        0.9821,
                        1.056,
                        1.1616,
                        1.2355,
                        1.32,
                        1.4362,
                        1.5523,
                        1.6685,
                        1.7952,
                        1.9219,
                        2.0486,
                        2.1754,
                        2.3021,
                        2.4288
                    ],
                    "param9": [
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25
                    ],
                    "param10": [
                        0.6393,
                        0.6914,
                        0.7434,
                        0.8177,
                        0.8698,
                        0.9293,
                        1.011,
                        1.0928,
                        1.1746,
                        1.2638,
                        1.353,
                        1.4422,
                        1.5314,
                        1.6206,
                        1.7098
                    ],
                    "param11": [
                        1.2784,
                        1.3824,
                        1.4865,
                        1.6351,
                        1.7392,
                        1.8581,
                        2.0216,
                        2.1851,
                        2.3486,
                        2.527,
                        2.7054,
                        2.8838,
                        3.0622,
                        3.2405,
                        3.4189
                    ],
                    "param12": [
                        1.5968,
                        1.7267,
                        1.8567,
                        2.0424,
                        2.1723,
                        2.3209,
                        2.5251,
                        2.7293,
                        2.9336,
                        3.1564,
                        3.3792,
                        3.602,
                        3.8248,
                        4.0476,
                        4.2704
                    ]
                }
            }
        },
        "combat2": {
            "name": "All is Ash",
            "descriptionRaw": "Summons forth Balemoon Bloodfire, dealing <color=#FF9999FF>Pyro DMG</color> to multiple nearby opponents and performing a dash-cleave against one of them, dealing <color=#FF9999FF>AoE Pyro DMG</color>. Opponents hit by the aforementioned attack will have a <color=#FFD780FF>Blood-Debt Directive</color> applied to them.\n \n  <color=#FFD780FF>Blood-Debt Directive</color>  \n· Lasts 30s. Every 5s, it will deal 1 instance of <color=#FF9999FF>Pyro DMG</color> to the opponent. Max 2 instances. This DMG will be considered Elemental Skill DMG. \n· When Arlecchino uses a Charged Attack or her Elemental Burst, Balemoon Rising, she will absorb and clear nearby Blood-Debt Directives that she applied. Each Directive absorbed grants her a Bond of Life worth 65% of her Max HP.\n· The maximum value of the Bond of Life she can be granted through this method within 35s after using her Elemental Skill is 145% of her Max HP. Using the Elemental Skill again during this duration will restart the count on duration and the limit on the value of Bond of Life she may gain from Blood-Debt Directives.\n\n<i>As she sees it, not every grain of wheat that falls upon the earth will grow into an ear, while those who obstruct her, once burned to ashes, can certainly be used to nourish flowers.</i>",
            "description": "Fires off a Lifeline that allows her to move rapidly, entangling and marking opponents along its path.\nWhen this rapid movement ends, the Lifeline will explode, dealing Hydro DMG to the marked opponents based on Yelan's Max HP.\n\nTap\nMoves a certain distance forward swiftly.\n\nHold\nEngages in continuous, swift movement, during which Yelan's resistance to interruption is increased.\nDuring this time, Yelan can control this rapid movement and end it by using this Skill again.\n\nAdditionally, each opponent marked by the Lifeline when it explodes grants Yelan a 34% chance to reset her Breakthrough state.",
            "flavorText": "Not until she begins to tug on the strings do evildoers, crooks, and scheming villains alike know that there is no escape.",
            "attributes": {
                "labels": [
                    "Spike DMG|{param1:F1P}",
                    "Cleave DMG|{param2:F1}",
                    "Blod-Debt Directive DMG|{param3:F1}",
                    "CD|{param4:F1}s"
                ],
                "parameters": {
                    "param1": [
                        0.1484,
                        0.1595,
                        0.1707,
                        0.1855,
                        0.1966,
                        0.2078,
                        0.2226,
                        0.2374,
                        0.2523,
                        0.2671,
                        0.282,
                        0.2968,
                        0.3153,
                        0.3339,
                        0.3525
                    ],
                    "param2": [
                        1.3356,
                        1.4358,
                        1.5359,
                        1.6695,
                        1.7697,
                        1.8698,
                        2.0034,
                        2.137,
                        2.2705,
                        2.4041,
                        2.5376,
                        2.6712,
                        2.8382,
                        3.0051,
                        3.172
                    ],
                    "param3": [
                        0.318,
                        0.3419,
                        0.3657,
                        0.3975,
                        0.4214,
                        0.4452,
                        0.477,
                        0.5088,
                        0.5406,
                        0.5724,
                        0.6042,
                        0.636,
                        0.6758,
                        0.7155,
                        0.7552
                    ],
                    "param4": [
                        30,
                        30,
                        30,
                        30,
                        30,
                        30,
                        30,
                        30,
                        30,
                        30,
                        30,
                        30,
                        30,
                        30,
                        30
                    ]
                }
            }
        },
        "combat3": {
            "name": "Balemoon Rising",
            "descriptionRaw": "Arlecchino's great wings of Balemoon Bloodfire beat, absorbing and clearing Blood-Debt Directives around her, and dealing <color=#FF9999FF>AoE Pyro DMG</color> before clearing the CD of All is Ash and healing her. The healing is based on her Bond of Life value and ATK. \n\n<i>\"It is commonly believed throughout Teyvat that moon phases other than the full moon are mere metaphors of ill-omen, used only by those who practice alchemy and astrology. \n She saw this crimson moon in her dreams many times. Were those portents of disaster? Indeed they were, but the destined catastrophes belonged to those who enraged her.\"</i>",
            "description": "Deals AoE Hydro DMG and creates an \"Exquisite Throw,\" which aids her in battle.\n\nExquisite Throw\nFollows the character around and will initiate a coordinated attack under the following circumstances, dealing Hydro DMG based on Yelan's Max HP:\n·Can occur once every second when your active character uses a Normal Attack.\n·Will occur each time Yelan's Lifeline explodes and hits opponents.",
            "flavorText": "\"A gambling addiction is going to do you no good. I mean, let me just do the math for you as the dealer. What do you think your odds of beating me are, when I have seven dice and you, only one?\"",
            "attributes": {
                "labels": [
                    "Skill DMG|{param1:F2P}",
                    "CD|{param2:F1}s",
                    "Energy Cost|{param3:I}"
                ],
                "parameters": {
                    "param1": [
                        3.704,
                        3.9818,
                        4.2596,
                        4.63,
                        4.9078,
                        5.1856,
                        5.556,
                        5.9264,
                        6.2968,
                        6.6672,
                        7.0376,
                        7.408,
                        7.871,
                        8.334,
                        8.797
                    ],
                    "param2": [
                        15,
                        15,
                        15,
                        15,
                        15,
                        15,
                        15,
                        15,
                        15,
                        15,
                        15,
                        15,
                        15,
                        15,
                        15
                    ],
                    "param3": [
                        60,
                        60,
                        60,
                        60,
                        60,
                        60,
                        60,
                        60,
                        60,
                        60,
                        60,
                        60,
                        60,
                        60,
                        60
                    ]
                }
            }
        },
        "passive1": {
            "name": "Agony Alone May Be Repaid",
            "descriptionRaw": "<color=#FFD780FF>Blood-Debt Directive</color> have the following characteristics: \n·  Defeating a foe with Blood-Debt Directive will immediately grant Arlecchino a Bond of Life worth 130% of her Max HP.\n\n·  5s after a Directive is applied, it will be upgraded to a Blood-Debt Due. When absorbed, it will instead grant Arlecchino a Bond of Life worth 130%.A Bond of Life created in the aforementioned ways cannot exceed the original limit on the value of Bonds of Life obtained through <color=#FFD780FF>All is Ash.</color>",
            "description": "When the party has 1/2/3/4 Elemental Types, Yelan's Max HP is increased by 6%/12%/18%/30%."
        },
        "passive2": {
            "name": "Strength Alone Can Defende",
            "descriptionRaw": "Arlecchino gains 1% All Elemental and Physical RES for every 100 ATK she has in excess of 1,000. The maximum RES increase she can gain this way for each is 20%.",
            "description": "So long as an Exquisite Throw is in play, your own active character deals 1% more DMG. This increases by a further 3.5% DMG every second. The maximum increase to DMG dealt is 50%.\nThe pre-existing effect will be dispelled if Depth-Clarion Dice is recast during its duration."
        },
        "passive3": {
            "name": "The Balemoon Alone May Know",
            "descriptionRaw": "She receives a <color=#FF9999FF>40% Pyro DMG Bonus</color>. While in combat, Arlecchino can only receive the healing effect from <color=#FFD780FF>Balemoon Rising</color>.",
            "description": "Gains 25% more rewards when dispatched on a Liyue Expedition for 20 hours."
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
                    "name": "Teachings of Order",
                    "count": 3
                },
                {
                    "id": 0,
                    "name": "Recruit's Insignia",
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
                    "name": "Guide to Order",
                    "count": 2
                },
                {
                    "id": 0,
                    "name": "Sergeant's Insignia",
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
                    "name": "Guide to Order",
                    "count": 4
                },
                {
                    "id": 0,
                    "name": "Sergeant's Insignia",
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
                    "name": "Guide to Order",
                    "count": 6
                },
                {
                    "id": 0,
                    "name": "Sergeant's Insignia",
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
                    "name": "Guide to Order",
                    "count": 9
                },
                {
                    "id": 0,
                    "name": "Sergeant's Insignia",
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
                    "name": "Philosophies of Order",
                    "count": 4
                },
                {
                    "id": 0,
                    "name": "Lieutenant's Insignia",
                    "count": 4
                },
                {
                    "id": 0,
                    "name": "???",
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
                    "name": "Philosophies of Order",
                    "count": 6
                },
                {
                    "id": 0,
                    "name": "Lieutenant's Insignia",
                    "count": 6
                },
                {
                    "id": 0,
                    "name": "???",
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
                    "name": "Philosophies of Order",
                    "count": 12
                },
                {
                    "id": 0,
                    "name": "Lieutenant's Insignia",
                    "count": 9
                },
                {
                    "id": 0,
                    "name": "???",
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
                    "name": "Philosophies of Order",
                    "count": 16
                },
                {
                    "id": 0,
                    "name": "Lieutenant's Insignia",
                    "count": 12
                },
                {
                    "id": 0,
                    "name": "???",
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
