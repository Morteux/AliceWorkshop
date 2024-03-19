const talents = {
    "Arlecchino": {
        "id": 0,
        "name": "Arlecchino",
        "combat1": {
            "name": "Normal Attack: Bidden Beheading",
            "descriptionRaw": "<color=#FFD780FF>Normal Attack</color>\nPerforms a maximum of 6 consecutive strikes.\n\n<color=#FFD780FF>Charged Attack</color>\nConsumes a fixed amount of Stamina, dashing toward a nearby opponent and cleaving once.\n\n<color=#FFD780FF>Plunging Attack</color>\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.\n\n<color=#FFD780FF>In Praise of Shadows and the Masque of the Red Death</color>\nWhen Arlecchino has a Bond of Life equal to or greater than 30% of her Max HP, she receives a 40% Pyro DMG Bonus and her Normal, Charged, and Plunging Attacks will be converted to deal Pyro DMG. This cannot be overridden. \n When in the In Praise of Shadows state, Arlecchino's Normal Attacks will be converted to Masque of the Red Death: When she hits an opponent, this attack will deal extra DMG that is scaled off her ATK multiplied by her current Bond of Life percentage. This will consume 5.5% of said current Bond of Life. A Bond of Life can be consumed this way every 0.05s.",
            "description": "Normal Attack\nPerforms up to 4 consecutive shots with a bow.\n\nCharged Attack\nPerforms a more precise Aimed Shot with increased DMG.\nWhile aiming, flowing water will accumulate on the arrowhead. A fully charged torrential arrow will deal Hydro DMG.\n\nBreakthrough\nYelan will enter a \"Breakthrough\" state after spending 5s out of combat, which will cause her next Charged Aimed Shot to have 80% decreased charge time, and once charged, she can fire a \"Breakthrough Barb\" that will deal AoE Hydro DMG based on Yelan's Max HP.\n\nPlunging Attack\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
            "attributes": {
                "labels": [
                    "1-Hit DMG|{param1:F1P}",
                    "2-Hit DMG|{param2:F1P}",
                    "3-Hit DMG|{param3:F1P}",
                    "4-Hit DMG|{param4:F1P}+{param4:F1P}",
                    "Aimed Shot|{param5:F1P}",
                    "Fully-Charged Aimed Shot|{param6:P}",
                    "Breakthrough Barb DMG|{param7:F2P} Max HP",
                    "Plunge DMG|{param8:F1P}",
                    "Low/High Plunge DMG|{param9:P}/{param10:P}"
                ],
                "parameters": {
                    "param1": [
                        0.4067800045013428,
                        0.4398899972438812,
                        0.4729999899864197,
                        0.5202999711036682,
                        0.553409993648529,
                        0.5912500023841858,
                        0.643280029296875,
                        0.6953099966049194,
                        0.7473400235176086,
                        0.804099977016449,
                        0.8608599901199341,
                        0.9176200032234192,
                        0.9743800163269043,
                        1.0311399698257446,
                        1.0879000425338745
                    ],
                    "param2": [
                        0.3904399871826172,
                        0.42221999168395996,
                        0.45399999618530273,
                        0.49939998984336853,
                        0.5311800241470337,
                        0.5674999952316284,
                        0.6174399852752686,
                        0.6673799753189087,
                        0.7173200249671936,
                        0.7717999815940857,
                        0.8262799978256226,
                        0.8807600140571594,
                        0.9352399706840515,
                        0.9897199869155884,
                        1.0441999435424805
                    ],
                    "param3": [
                        0.515999972820282,
                        0.5580000281333923,
                        0.6000000238418579,
                        0.6600000262260437,
                        0.7020000219345093,
                        0.75,
                        0.8159999847412109,
                        0.8820000290870667,
                        0.9480000138282776,
                        1.0199999809265137,
                        1.0920000076293945,
                        1.1640000343322754,
                        1.2359999418258667,
                        1.3079999685287476,
                        1.3799999952316284
                    ],
                    "param4": [
                        0.325080007314682,
                        0.3515399992465973,
                        0.3779999911785126,
                        0.415800005197525,
                        0.4422599971294403,
                        0.4724999964237213,
                        0.5140799880027771,
                        0.5556600093841553,
                        0.5972399711608887,
                        0.6425999999046326,
                        0.6879600286483765,
                        0.7333199977874756,
                        0.7786800265312195,
                        0.8240399956703186,
                        0.8694000244140625
                    ],
                    "param5": [
                        0.43860000371932983,
                        0.47429999709129333,
                        0.5099999904632568,
                        0.5609999895095825,
                        0.5967000126838684,
                        0.637499988079071,
                        0.6935999989509583,
                        0.7497000098228455,
                        0.8058000206947327,
                        0.8669999837875366,
                        0.9282000064849854,
                        0.9894000291824341,
                        1.0506000518798828,
                        1.111799955368042,
                        1.1729999780654907
                    ],
                    "param6": [
                        1.2400000095367432,
                        1.3329999446868896,
                        1.4259999990463257,
                        1.5499999523162842,
                        1.6430000066757202,
                        1.7359999418258667,
                        1.8600000143051147,
                        1.9839999675750732,
                        2.1080000400543213,
                        2.2320001125335693,
                        2.3559999465942383,
                        2.4800000190734863,
                        2.634999990463257,
                        2.7899999618530273,
                        2.944999933242798
                    ],
                    "param7": [
                        0.11575999855995178,
                        0.12444200366735458,
                        0.1331239938735962,
                        0.14470000565052032,
                        0.15338200330734253,
                        0.16206400096416473,
                        0.17363999783992767,
                        0.1852159947156906,
                        0.19679200649261475,
                        0.20836800336837769,
                        0.21994400024414062,
                        0.23151999711990356,
                        0.24598999321460724,
                        0.2604599893093109,
                        0.2749300003051758
                    ],
                    "param8": [
                        0.5682880282402039,
                        0.6145439743995667,
                        0.6607999801635742,
                        0.7268800139427185,
                        0.7731360197067261,
                        0.8259999752044678,
                        0.898688018321991,
                        0.9713760018348694,
                        1.0440640449523926,
                        1.12336003780365,
                        1.2026560306549072,
                        1.2819520235061646,
                        1.3612480163574219,
                        1.4405440092086792,
                        1.5198400020599365
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
            "descriptionRaw": "Fires off a Lifeline that allows her to move rapidly, entangling and marking opponents along its path.\nWhen this rapid movement ends, the Lifeline will explode, dealing <color=#80C0FFFF>Hydro DMG</color> to the marked opponents based on Yelan's Max HP.\n\n<color=#FFD780FF>Tap</color>\nMoves a certain distance forward swiftly.\n\n<color=#FFD780FF>Hold</color>\nEngages in continuous, swift movement, during which Yelan's resistance to interruption is increased.\nDuring this time, Yelan can control this rapid movement and end it by using this Skill again.\n\nAdditionally, each opponent marked by the Lifeline when it explodes grants Yelan a 34% chance to reset her Breakthrough state.\n\n<i>Not until she begins to tug on the strings do evildoers, crooks, and scheming villains alike know that there is no escape.</i>",
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
            "name": "Depth-Clarion Dice",
            "descriptionRaw": "Deals <color=#80C0FFFF>AoE Hydro DMG</color> and creates an \"Exquisite Throw,\" which aids her in battle.\n\n<color=#FFD780FF>Exquisite Throw</color>\nFollows the character around and will initiate a coordinated attack under the following circumstances, dealing <color=#80C0FFFF>Hydro DMG</color> based on Yelan's Max HP:\n·Can occur once every second when your active character uses a Normal Attack.\n·Will occur each time Yelan's Lifeline explodes and hits opponents.\n\n<i>\"A gambling addiction is going to do you no good. I mean, let me just do the math for you as the dealer. What do you think your odds of beating me are, when I have seven dice and you, only one?\"</i>",
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
            "name": "Turn Control",
            "descriptionRaw": "When the party has 1/2/3/4 Elemental Types, Yelan's Max HP is increased by 6%/12%/18%/30%.",
            "description": "When the party has 1/2/3/4 Elemental Types, Yelan's Max HP is increased by 6%/12%/18%/30%."
        },
        "passive2": {
            "name": "Adapt With Ease",
            "descriptionRaw": "So long as an <color=#FFD780FF>Exquisite Throw</color> is in play, your own active character deals 1% more DMG. This increases by a further 3.5% DMG every second. The maximum increase to DMG dealt is 50%.\nThe pre-existing effect will be dispelled if Depth-Clarion Dice is recast during its duration.",
            "description": "So long as an Exquisite Throw is in play, your own active character deals 1% more DMG. This increases by a further 3.5% DMG every second. The maximum increase to DMG dealt is 50%.\nThe pre-existing effect will be dispelled if Depth-Clarion Dice is recast during its duration."
        },
        "passive3": {
            "name": "Necessary Calculation",
            "descriptionRaw": "Gains 25% more rewards when dispatched on a Liyue Expedition for 20 hours.",
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
