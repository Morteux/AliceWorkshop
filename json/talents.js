const talents = {
    "Arlecchino": {
        "id": 0,
        "name": "Arlecchino",
        "combat1": {
            "name": "Normal Attack: Bidden Beheading",
            "descriptionRaw": "<color=#FFD780FF>Normal Attack</color>\nPerforms a maximum of 6 consecutive strikes.\n\n<color=#FFD780FF>Charged Attack</color>\nConsumes a fixed amount of Stamina, dashing toward a nearby opponent and cleaving once. Hold to gain increased mobility for up to 15s at the cost of stamina.\n\n<color=#FFD780FF>Plunging Attack</color>\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.\n\n<color=#FFD780FF>In Praise of Shadows and the Masque of the Red Death</color>\nWhen Arlecchino has a Bond of Life equal to or greater than 30% of her Max HP, and her Normal, Charged, and Plunging Attacks will be converted to deal <color=#FF9999FF>Pyro DMG</color>. This cannot be overridden. \n When in the In Praise of Shadows state, Arlecchino's Normal Attacks will be converted to Masque of the Red Death: When she hits an opponent, this attack will deal extra DMG that is scaled off her ATK multiplied by her current Bond of Life percentage. This will consume 5.5% of said current Bond of Life. A Bond of Life can be consumed this way every 0.03s. \n\n\n DMG Value in progress (placeholder)... ",
            "description": "Normal Attack\nPerforms up to 4 consecutive shots with a bow.\n\nCharged Attack\nPerforms a more precise Aimed Shot with increased DMG.\nWhile aiming, flowing water will accumulate on the arrowhead. A fully charged torrential arrow will deal Hydro DMG.\n\nBreakthrough\nYelan will enter a \"Breakthrough\" state after spending 5s out of combat, which will cause her next Charged Aimed Shot to have 80% decreased charge time, and once charged, she can fire a \"Breakthrough Barb\" that will deal AoE Hydro DMG based on Yelan's Max HP.\n\nPlunging Attack\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
            "attributes": {
                "labels": [
                    "Masque of the Red Death Scaling Ratio|{param1:F1P}",
                    "1-Hit DMG|{param2:F1P}",
                    "2-Hit DMG|{param3:F1P}",
                    "3-Hit DMG|{param4:F1P}",
                    "4-Hit DMG|{param5:F1P}+{param5:F1P}",
                    "5-Hit DMG|{param6:F1P}",
                    "6-Hit DMG|{param7:F1P}+{param4:F1P}",
                    "Charged Attack DMG|{param8:F1P}",
                    "Charged Attack Stamina Cost|{param9:F1P}",
                    "Plunge DMG|{param10:F1P}",
                    "Low/High Plunge DMG|{param10:P}/{param10:P}"
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
                        0.4712,
                        0.5096,
                        0.548,
                        0.6027,
                        0.6411,
                        0.6849,
                        0.7452,
                        0.8055,
                        0.8658,
                        0.9315,
                        0.9973,
                        1.063,
                        1.1288,
                        1.1945,
                        1.2603
                    ],
                    "param3": [
                        0.5169,
                        0.559,
                        0.6011,
                        0.6612,
                        0.7033,
                        0.7514,
                        0.8175,
                        0.8836,
                        0.9497,
                        1.0219,
                        1.094,
                        1.1661,
                        1.2382,
                        1.3104,
                        1.3825
                    ],
                    "param4": [
                        0.6487,
                        0.7015,
                        0.7543,
                        0.8297,
                        0.8825,
                        0.9428,
                        1.0258,
                        1.1088,
                        1.1918,
                        1.2823,
                        1.3728,
                        1.4633,
                        1.5538,
                        1.6443,
                        1.7348
                    ],
                    "param5": [
                        0.3563,
                        0.3853,
                        0.4143,
                        0.4558,
                        0.4848,
                        0.5179,
                        0.5635,
                        0.6091,
                        0.6547,
                        0.7044,
                        0.7541,
                        0.8038,
                        0.8536,
                        0.9033,
                        0.953
                    ],
                    "param6": [
                        0.708	
                        0.7656,
                        0.8233,
                        0.9056,
                        0.9632,
                        1.0291,
                        1.1196,
                        1.2102,
                        1.3008,
                        1.3996,
                        1.4984,
                        1.5971,
                        1.6959,
                        1.7947,
                        1.8935
                    ],
                    "param7": [
                        0.8486,
                        0.9176,
                        0.9867,
                        1.0854,
                        1.1544,
                        1.2334,
                        1.3419,
                        1.4504,
                        1.559,
                        1.6774,
                        1.7958,
                        1.9142,
                        2.0326,
                        2.151,
                        2.2694
                    ],
                    "param8": [
                        1.2969,
                        1.4024,
                        1.508,
                        1.6588,
                        1.7644,
                        1.885,
                        2.0509,
                        2.2168,
                        2.3826,
                        2.5636,
                        2.7446,
                        2.9255,
                        3.1065,
                        3.2874,
                        3.4684
                    ],
                    "param9": [
                        1.136335015296936,
                        1.228827953338623,
                        1.3213200569152832,
                        1.4534519910812378,
                        1.5459439754486084,
                        1.6516499519348145,
                        1.7969950437545776,
                        1.9423400163650513,
                        2.087686061859131,
                        2.246243953704834,
                        2.404802083969116,
                        2.5633609294891357,
                        2.721919059753418,
                        2.8804779052734375,
                        3.0390360355377197
                    ],
                    "param10": [
                        1.4193439483642578,
                        1.534872055053711,
                        1.6504000425338745,
                        1.815440058708191,
                        1.9309680461883545,
                        2.062999963760376,
                        2.24454402923584,
                        2.4260880947113037,
                        2.6076319217681885,
                        2.8056800365448,
                        3.003727912902832,
                        3.2017760276794434,
                        3.3998239040374756,
                        3.597872018814087,
                        3.795919895172119
                    ]
                }
            }
        },
        "combat2": {
            "name": "All is Ash",
            "descriptionRaw": "Summons forth Balemoon Bloodfire, dealing <color=#FF9999FF>Pyro DMG</color> to multiple nearby opponents and performing a dash-cleave against one of them, dealing <color=#FF9999FF>AoE Pyro DMG</color>. Opponents hit by the aforementioned attack will have a <color=#FFD780FF>Blood-Debt Directive</color> applied to them. After the dash-cleave, Arlecchino's Bond of Life will be cleared, and Nourishing Cinders will trigger: Arlecchino recovers HP equivalent to 200% of the value of the Life Bond that was cleared. \n \n  <color=#FFD780FF>Blood-Debt Directive</color>  \n· Lasts 30s. Every 3s, it will deal 1 instance of <color=#FF9999FF>Pyro DMG</color> to the opponent. Max 3 instances.\n· When Arlecchino uses a Charged Attack, she will absorb and clear nearby Blood-Debt Directives that she applied. Each Directive absorbed grants her a Bond of Life worth 20% of her Max HP.\n· The maximum value of the Bond of Life she can be granted through this method within 20s after using her Elemental Skill is 80% of her Max HP.\n\n<i>As she sees it, not every grain of wheat that falls upon the earth will grow into an ear, while those who obstruct her, once burned to ashes, can certainly be used to nourish flowers.</i>",
            "description": "Fires off a Lifeline that allows her to move rapidly, entangling and marking opponents along its path.\nWhen this rapid movement ends, the Lifeline will explode, dealing Hydro DMG to the marked opponents based on Yelan's Max HP.\n\nTap\nMoves a certain distance forward swiftly.\n\nHold\nEngages in continuous, swift movement, during which Yelan's resistance to interruption is increased.\nDuring this time, Yelan can control this rapid movement and end it by using this Skill again.\n\nAdditionally, each opponent marked by the Lifeline when it explodes grants Yelan a 34% chance to reset her Breakthrough state.",
            "flavorText": "Not until she begins to tug on the strings do evildoers, crooks, and scheming villains alike know that there is no escape.",
            "attributes": {
                "labels": [
                    "Skill DMG|{param1:F1P} Max HP",
                    "Max Duration (Hold)|{param3:F1}s",
                    "CD|{param4:F1}s"
                ],
                "parameters": {
                    "param1": [
                        0.2261359989643097,
                        0.2430959939956665,
                        0.2600559890270233,
                        0.2826699912548065,
                        0.29962998628616333,
                        0.31659001111984253,
                        0.33920401334762573,
                        0.36181798577308655,
                        0.38443100452423096,
                        0.40704500675201416,
                        0.4296579957008362,
                        0.4522719979286194,
                        0.4805389940738678,
                        0.5088059902191162,
                        0.537073016166687
                    ],
                    "param2": [
                        0.3400000035762787,
                        0.3400000035762787,
                        0.3400000035762787,
                        0.3400000035762787,
                        0.3400000035762787,
                        0.3400000035762787,
                        0.3400000035762787,
                        0.3400000035762787,
                        0.3400000035762787,
                        0.3400000035762787,
                        0.3400000035762787,
                        0.3400000035762787,
                        0.3400000035762787,
                        0.3400000035762787,
                        0.3400000035762787
                    ],
                    "param3": [
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3
                    ],
                    "param4": [
                        10,
                        10,
                        10,
                        10,
                        10,
                        10,
                        10,
                        10,
                        10,
                        10,
                        10,
                        10,
                        10,
                        10,
                        10
                    ]
                }
            }
        },
        "combat3": {
            "name": "Balemoon Rising",
            "descriptionRaw": "Great wings of Balemoon Bloodfire beat, granting Arlecchino a Bond of Life worth 15% of her Max HP and dealing <color=#FF9999FF>AoE Pyro DMG</color>.<i>\"t is commonly believed throughout Teyvat that moon phases other than the full moon are mere metaphors of ill-omen, used only by those who practice alchemy and astrology. \n She saw this crimson moon in her dreams many times. Were those portents of disaster? Indeed they were, but the destined catastrophes belonged to those who enraged her.\"</i>",
            "description": "Deals AoE Hydro DMG and creates an \"Exquisite Throw,\" which aids her in battle.\n\nExquisite Throw\nFollows the character around and will initiate a coordinated attack under the following circumstances, dealing Hydro DMG based on Yelan's Max HP:\n·Can occur once every second when your active character uses a Normal Attack.\n·Will occur each time Yelan's Lifeline explodes and hits opponents.",
            "flavorText": "\"A gambling addiction is going to do you no good. I mean, let me just do the math for you as the dealer. What do you think your odds of beating me are, when I have seven dice and you, only one?\"",
            "attributes": {
                "labels": [
                    "Skill DMG|{param1:F2P} Max HP",
                    "Exquisite Throw DMG|{param2:F2P} Max HP ×3",
                    "Duration|{param3:F1}s",
                    "CD|{param4:F1}s",
                    "Energy Cost|{param5:I}"
                ],
                "parameters": {
                    "param1": [
                        0.07308000326156616,
                        0.07856100052595139,
                        0.08404199779033661,
                        0.0913499966263771,
                        0.09683100134134293,
                        0.10231199860572815,
                        0.10961999744176865,
                        0.11692799627780914,
                        0.12423600256443024,
                        0.13154399394989014,
                        0.13885200023651123,
                        0.14616000652313232,
                        0.1552949994802475,
                        0.16443000733852386,
                        0.17356500029563904
                    ],
                    "param2": [
                        0.04871999844908714,
                        0.05237400159239769,
                        0.05602800101041794,
                        0.0608999989926815,
                        0.06455399841070175,
                        0.0682080015540123,
                        0.07308000326156616,
                        0.07795199751853943,
                        0.08282399922609329,
                        0.08769600093364716,
                        0.09256800264120102,
                        0.09743999689817429,
                        0.10352999716997147,
                        0.10961999744176865,
                        0.11570999771356583
                    ],
                    "param3": [
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
                    "param4": [
                        18,
                        18,
                        18,
                        18,
                        18,
                        18,
                        18,
                        18,
                        18,
                        18,
                        18,
                        18,
                        18,
                        18,
                        18
                    ],
                    "param5": [
                        70,
                        70,
                        70,
                        70,
                        70,
                        70,
                        70,
                        70,
                        70,
                        70,
                        70,
                        70,
                        70,
                        70,
                        70
                    ]
                }
            }
        },
        "passive1": {
            "name": "Agony Alone May Be Repaid",
            "descriptionRaw": "There are different levels of <color=#FFD780FF>Blood-Debt Directive</color>. At different levels, absorbing a Directive will grant Arlecchino differing amounts of Bond of Life: \n· Directives start at Level 1, increasing every 3s until Level 3 is reached. \n· Arlecchino will gain a Bond of Life worth 20%/25%/70% of her Max HP when absorbing a Level 1/2/3 Directive. \nDefeating a foe with Blood-Debt Directive will immediately grant Arlecchino a Bond of Life worth 70% of her Max HP.\n\n When being granted a Bond of Life through the mechanic described above, the value of the Bond of Life cannot exceed the original limit of <color=#FFD780FF>All is Ash.</color>",
            "description": "When the party has 1/2/3/4 Elemental Types, Yelan's Max HP is increased by 6%/12%/18%/30%."
        },
        "passive2": {
            "name": "Strength Alone Can Defende",
            "descriptionRaw": "Arlecchino gains 1% All Elemental and Physical RES for every 100 ATK she has in excess of 1,000. The maximum RES increase she can gain this way for each is 20%.",
            "description": "So long as an Exquisite Throw is in play, your own active character deals 1% more DMG. This increases by a further 3.5% DMG every second. The maximum increase to DMG dealt is 50%.\nThe pre-existing effect will be dispelled if Depth-Clarion Dice is recast during its duration."
        },
        "passive3": {
            "name": "Cinders Alone Shall Nourish",
            "descriptionRaw": "She receives a <color=#FF9999FF>40% Pyro DMG Bonus</color>. While in combat, Arlecchino can only receive the healing effect from <color=#FFD780FF>All is Ash's Nourishing Cinders</color>.",
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
                    "id": 104310,
                    "name": "Teachings of Prosperity",
                    "count": 3
                },
                {
                    "id": 112032,
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
                    "id": 104311,
                    "name": "Guide to Prosperity",
                    "count": 2
                },
                {
                    "id": 112033,
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
                    "id": 104311,
                    "name": "Guide to Prosperity",
                    "count": 4
                },
                {
                    "id": 112033,
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
                    "id": 104311,
                    "name": "Guide to Prosperity",
                    "count": 6
                },
                {
                    "id": 112033,
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
                    "id": 104311,
                    "name": "Guide to Prosperity",
                    "count": 9
                },
                {
                    "id": 112033,
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
                    "id": 104312,
                    "name": "Philosophies of Prosperity",
                    "count": 4
                },
                {
                    "id": 112034,
                    "name": "Lieutenant's Insignia",
                    "count": 4
                },
                {
                    "id": 113019,
                    "name": "Gilded Scale",
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
                    "id": 104312,
                    "name": "Philosophies of Prosperity",
                    "count": 6
                },
                {
                    "id": 112034,
                    "name": "Lieutenant's Insignia",
                    "count": 6
                },
                {
                    "id": 113019,
                    "name": "Gilded Scale",
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
                    "id": 104312,
                    "name": "Philosophies of Prosperity",
                    "count": 12
                },
                {
                    "id": 112034,
                    "name": "Lieutenant's Insignia",
                    "count": 9
                },
                {
                    "id": 113019,
                    "name": "Gilded Scale",
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
                    "id": 104312,
                    "name": "Philosophies of Prosperity",
                    "count": 16
                },
                {
                    "id": 112034,
                    "name": "Lieutenant's Insignia",
                    "count": 12
                },
                {
                    "id": 113019,
                    "name": "Gilded Scale",
                    "count": 2
                },
                {
                    "id": 104319,
                    "name": "Crown of Insight",
                    "count": 1
                }
            ]
        },
        "images": {
            "filename_combat1": "Skill_A_02",
            "filename_combat2": "Skill_S_Yelan_01",
            "filename_combat3": "Skill_E_Yelan_01_HD",
            "filename_passive1": "UI_Talent_S_Yelan_05",
            "filename_passive2": "UI_Talent_S_Yelan_06",
            "filename_passive3": "UI_Talent_Expedition_Liyue"
        },
        "version": ""
    }
};
