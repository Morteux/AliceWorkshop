var teams_search_matches = [];

document.addEventListener("DOMContentLoaded", (event) => {
    // Show all teams on page load
    searchQuery();
});

function searchQuery() {
    // Reset collection for a new search
    teams_search_matches = [];

    getTeamsByTextInput();

    printTeams();
}

function getTeamsByTextInput() {
    let search_form_text_input = document.getElementById("search_form_text_input").value;

    // console.log("Searching for: " + search_form_text_input);

    if (search_form_text_input.length != 0) {
        for (let team_index in teams) {
            if (search_form_text_input.length != 0 && teams[team_index].name.toUpperCase().includes(search_form_text_input.toUpperCase())) {
                // console.log("Coincidence for: " + teams[team_index].name);
                teams_search_matches[team_index] = teams[team_index];
            }
        }
    }
    else {
        teams_search_matches = teams;
    }
}

function printTeams() {
    if (teams_search_matches.length > 0) {
        document.getElementById("result_container").style.display = "";
    }

    let team_output = "";
    document.getElementById("result_container").innerHTML = "";

    for (let team_index in teams_search_matches) {
        // console.log(teams_search_matches[team_index]);

        for (let character_4_index in teams_search_matches[team_index].character_4.name) {

            let character_4 = {
                "name": teams_search_matches[team_index].character_4.name[character_4_index],
                "build": teams_search_matches[team_index].character_4.build[character_4_index]
            };

            team_output = `
            <div id="team_container" class="team_container viability_` + teams_search_matches[team_index].viability.toLowerCase() + `">

                <div id="toolbox_container" class="toolbox_container">
                    <div id="team_id" class="team_id">
                        #` + team_index + `
                    </div>

                    <button class="fav_button" onclick="toggleFavorite(this)">
                        <img class="empty" src="images/star_empty.png">
                    </button>
                </div>

                <div id="characters_container" class="characters_container">
                ` +
                getCharacterHTML("character_1", teams_search_matches[team_index].character_1, characters[teams_search_matches[team_index].character_1.name]) +
                getCharacterHTML("character_2", teams_search_matches[team_index].character_2, characters[teams_search_matches[team_index].character_2.name]) +
                getCharacterHTML("character_3", teams_search_matches[team_index].character_3, characters[teams_search_matches[team_index].character_3.name]) +
                getCharacterHTML("character_4", character_4, characters[character_4.name]) +
                `
                </div>
                
                <button class="collapsible" onclick="toggleCollapse(this)">
                    <img class="collapsible_image" src="images/bottom_arrow.png">
                </button>
                <div class="collapsible_content viability_` + teams_search_matches[team_index].viability.toLowerCase() + `_illuminated">
                    <div id="team_name_container" class="team_name_container">
                        ` + teams_search_matches[team_index].name + `
                    </div>

                    <div id="team_rotation_container" class="team_rotation_container">
                        ` + teams_search_matches[team_index].rotation + `
                    </div>

                    <div id="team_archetype_container" class="team_archetype_container">
                        ` + teams_search_matches[team_index].archetype + `
                    </div>

                    <div class="team_desc_container">
                        ` + teams_search_matches[team_index].description + `
                    </div>
                </div>
            </div>
            `;

            document.getElementById("result_container").innerHTML += team_output;
        }
    }
}

function getCharacterHTML(id, character_team, character_data) {
    // console.log(id);
    // console.log(character_team);
    // console.log(character_data);

    return `
    <div id="` + id + `" class="character_container ` + character_data.name.replaceAll(" ", "_") + `">
        <img class="character_icon ` + (character_data.rarity == "5" ? "character_5_stars" : "character_4_stars") + `" src="https://api.ambr.top/assets/UI/` + character_data.images.nameicon + `.png" alt="Character icon for ` + character_data.name + `">
        <img class="element_icon" src="images/elements/glow_` + (character_data.element != "None" ? character_data.element.toLowerCase() : builds[character_team.name][character_team.build].element.toLowerCase()) + `.png">
        ` + (builds[character_team.name][character_team.build].constellation != "" ? `<div class="constellation">` + builds[character_team.name][character_team.build].constellation + `</div>` : ``) + `
        <div class="rarity_container">` + star_svg + star_svg + star_svg + star_svg + (character_data.rarity == "5" ? star_svg : "") + `</div>
        <div class="character_name ` + (character_data.name.length < 10 ? "character_name_short" : (character_data.name.length < 17 ? "character_name_medium" : "character_name_long")) + `">` + character_data.name + `</div>
    </div>
    `;
}

function toggleFavorite(button) {
    let star_img = button.getElementsByTagName('img')[0];

    if (star_img.classList.contains("empty")) {
        star_img.classList.remove("empty");
        star_img.classList.add("filled");
        star_img.src = "images/star_filled.png";
    } else {
        star_img.classList.add("empty");
        star_img.classList.remove("filled");
        star_img.src = "images/star_empty.png";
    }
}