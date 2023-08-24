// Portraits
// https://muakasan.github.io/genshin-portraits/index.html

// Artifacts
// https://api.ambr.top/assets/UI/reliquary/UI_RelicIcon_15008_4.png

// Weapons
// https://api.ambr.top/assets/UI/UI_EquipIcon_Claymore_Maria.png

// Splash arts
// https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Klee.png

// Elements
// https://api.ambr.top/assets/UI/UI_Buff_Element_Ice.png
// https://api.ambr.top/assets/UI/UI_Buff_Element_Grass.png


















// A single rarity's star in SVG format
const star_svg = `<div><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="rarity"><path d="M381.2 150.3l143.7 21.2c11.9 1.7 21.9 10.1 25.7 21.6 3.8 11.6.7 24.2-7.9 32.8L438.5 328.1l24.6 146.6c2 12-2.9 24.2-12.9 31.3-9.9 7.1-23 8-33.7 2.3l-128.4-68.5-128.3 68.5c-10.8 5.7-23.9 4.8-33.8-2.3-9.9-7.1-14.9-19.3-12.8-31.3l24.6-146.6L33.58 225.9c-8.61-8.6-11.67-21.2-7.89-32.8 3.77-11.5 13.74-19.9 25.73-21.6L195 150.3l64.4-132.33C264.7 6.954 275.9-.04 288.1-.04c12.3 0 23.5 6.994 28.8 18.01l64.3 132.33z"></path></svg></span></div>`;

var teams_search_matches = [];
var teams_characters_search_matches = new Set();
var teams_characters_json = new Map();

function searchQuery() {
    // Reset collection for a new search
    teams_search_matches = [];
    teams_characters_search_matches = new Set();

    // In order to optimize API calls, never clean older characters JSON results to recycle them between search querys.
    // teams_characters_json = new Map();

    getTeamsByTextInput();

    // console.log(teams_search_matches);
    // console.log(teams_characters_search_matches);

    printTeams();

    printCharactersDataFromQuerys();
}

function getTeamsByTextInput() {
    let search_form_text_input = document.getElementById("search_form_text_input").value;

    console.log("Searching for: " + search_form_text_input);

    for (let team_index in teams) {
        if (search_form_text_input.length != 0 && teams[team_index].name.toUpperCase().includes(search_form_text_input.toUpperCase())) {
            console.log("Coincidence for: " + teams[team_index].name);
            teams_search_matches.push(teams[team_index]);

            teams_characters_search_matches.add(teams[team_index].character_1);
            teams_characters_search_matches.add(teams[team_index].character_2);
            teams_characters_search_matches.add(teams[team_index].character_3);
            teams_characters_search_matches.add(teams[team_index].character_4);
        }
    }
}

function printTeams() {
    if (teams_search_matches.length > 0) {
        document.getElementById("result_container").style.display = "";
    }

    let team_output = "";
    document.getElementById("result_container").innerHTML = "";

    for (let team_index in teams_search_matches) {

        console.log("team_index for: " + teams_search_matches[team_index].name);

        team_output = `
        <div id="team_container" class="team_container">
        <div id="team_name_container" class="team_name_container">
            ` + teams_search_matches[team_index].name + `
        </div>
        
        <div class="team_desc_container">
            ` + teams_search_matches[team_index].description + `
        </div>

            <div id="characters_container" class="characters_container">

                <div id="character_1" class="character_container ` + teams_search_matches[team_index].character_1.replaceAll(" ", "_") + `">
                    <img class="character_icon" src="" alt="Character icon for ` + teams_search_matches[team_index].character_1 + `">
                    <div class="rarity_container"></div>
                    <div class="character_name">` + teams_search_matches[team_index].character_1 + `</div>
                </div>

                <div id="character_2" class="character_container ` + teams_search_matches[team_index].character_2.replaceAll(" ", "_") + `">
                    <img class="character_icon" src="" alt="Character icon for ` + teams_search_matches[team_index].character_2 + `">
                    <div class="rarity_container"></div>
                    <div class="character_name">` + teams_search_matches[team_index].character_2 + `</div>
                </div>

                <div id="character_3" class="character_container ` + teams_search_matches[team_index].character_3.replaceAll(" ", "_") + `">
                    <img class="character_icon" src="" alt="Character icon for ` + teams_search_matches[team_index].character_3 + `">
                    <div class="rarity_container"></div>
                    <div class="character_name">` + teams_search_matches[team_index].character_3 + `</div>
                </div>

                <div id="character_4" class="character_container ` + teams_search_matches[team_index].character_4.replaceAll(" ", "_") + `">
                    <img class="character_icon" src="" alt="Character icon for ` + teams_search_matches[team_index].character_4 + `">
                    <div class="rarity_container"></div>
                    <div class="character_name">` + teams_search_matches[team_index].character_4 + `</div>
                </div>

            </div>
        </div>
        `;

        document.getElementById("result_container").innerHTML += team_output;
    }
}

function printCharactersDataFromQuerys() {
    teams_characters_search_matches.forEach((character) => {

        if (teams_characters_json[character] == null) {

            $.ajax({
                url: "https://genshin-db-api.vercel.app/api/characters?query=" + character,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    teams_characters_json[character] = data;

                    for (let element of document.getElementsByClassName(character.replaceAll(" ", "_"))) {
                        element.getElementsByClassName("character_icon")[0].src = data.images.icon;
                        element.getElementsByClassName("rarity_container")[0].innerHTML = star_svg + star_svg + star_svg + star_svg + (data.rarity == "5" ? star_svg : "");
                    }
                },
                error: function (data) {
                    console.log(data);
                    console.log("Error retrieving the character: " + character);
                }
            });

        } else {
            console.log("Already retrieved character: " + character);
            
            let data = teams_characters_json[character];

            for (let element of document.getElementsByClassName(character.replaceAll(" ", "_"))) {
                element.getElementsByClassName("character_icon")[0].src = data.images.icon;
                element.getElementsByClassName("rarity_container")[0].innerHTML = star_svg + star_svg + star_svg + star_svg + (data.rarity == "5" ? star_svg : "");
            }
        }

    });

    console.log(teams_characters_json);
}