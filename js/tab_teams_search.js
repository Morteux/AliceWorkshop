var teams_search_matches = [];
var start_index = 0;

var sort_team_id;
var sort_viability;
var sort_team_name;

var orderedKeys;

document.addEventListener("DOMContentLoaded", (event) => {
    sort_team_id = document.getElementById("sort_team_id");
    sort_viability = document.getElementById("sort_viability");
    sort_team_name = document.getElementById("sort_team_name");

    autocomplete(document.getElementById("search_form_text_input"), CHARACTER_NAMES);

    // Show all teams on page load
    searchQuery();

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    $(window).scroll(function () {
        if ($(window).scrollTop() == $(document).height() - $(window).height() && document.getElementById("tab_teams_search_button").classList.contains("active_tab_button")) {
            start_index += TEAMS_PER_PAGE;
            searchQuery();
        }
    });

    document.getElementById("search_form_text_input").addEventListener('keyup', function (e) {
        if (e.key === ENTER_KEY_CODE) {
            resetResult();
            searchQuery();
        }
    });
});

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll_top_button").style.display = "block";
    } else {
        document.getElementById("scroll_top_button").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function resetResult() {
    start_index = 0;
    document.getElementById("result_container").innerHTML = "";
}

function isTeamName(team, search_form_text_input) {
    return team.name.toUpperCase().includes(search_form_text_input.toUpperCase())
}

function containCharacter(team, character) {
    return character.length == 0 || team.character_1.name.toUpperCase() == character || team.character_2.name.toUpperCase() == character || team.character_3.name.toUpperCase() == character || team.character_4.name.map(function (x) { return x.toUpperCase(); }).includes(character);
}

function searchRandom() {
    document.getElementById("result_container").style.display = "none";

    if (/\d/.test(document.getElementById("search_form_text_input").value)) {
        document.getElementById("search_form_text_input").value = "";
    }

    getTeamsByTextInput();

    printRandomTeam();

    document.getElementById("result_container").style.display = "";
}

function searchQuery() {
    document.getElementById("result_container").style.display = "none";

    if (/\d/.test(document.getElementById("search_form_text_input").value)) {
        getTeamsById();
    } else {
        getTeamsByTextInput();
    }

    printTeams();

    document.getElementById("result_container").style.display = "";
}

function getTeamsById() {
    let search_form_text_input = document.getElementById("search_form_text_input").value;
    let showAllFlex = false;

    let team_index = 0;
    let character_4_index = 0;

    if (search_form_text_input.includes("-")) {
        team_index = parseInt(search_form_text_input.substring(0, search_form_text_input.indexOf("-")));
        character_4_index = parseInt(search_form_text_input.substring(search_form_text_input.indexOf("-") + 1)) - 1;
    } else {
        team_index = parseInt(search_form_text_input);

        showAllFlex = true;
    }

    // Reset collection for a new search
    teams_search_matches = [];

    let team = JSON.parse(JSON.stringify(teams[team_index]));
    team["id"] = team_index;

    if (showAllFlex) {

        for (character_4_index in teams[team_index].character_4.name) {
            if (teams[team_index].character_4.name.length > 1) {
                team["id"] = team_index + "-" + (parseInt(character_4_index) + 1);
            }

            team.character_4.name = [JSON.parse(JSON.stringify(teams[team_index].character_4.name[character_4_index]))];
            team.character_4.build = [JSON.parse(JSON.stringify(teams[team_index].character_4.build[character_4_index]))];

            teams_search_matches[team.id] = JSON.parse(JSON.stringify(team));
        }
    } else {

        if (teams[team_index].character_4.name.length > 1) {
            team["id"] = team_index + "-" + (character_4_index + 1);
        }

        team.character_4.name = [JSON.parse(JSON.stringify(teams[team_index].character_4.name[character_4_index]))];
        team.character_4.build = [JSON.parse(JSON.stringify(teams[team_index].character_4.build[character_4_index]))];

        teams_search_matches[team.id] = JSON.parse(JSON.stringify(team));
    }
}

function getTeamsByTextInput() {
    let search_form_text_input = document.getElementById("search_form_text_input").value;

    // Reset collection for a new search
    teams_search_matches = [];

    for (let team_index in teams) {
        let team = JSON.parse(JSON.stringify(teams[team_index]));
        team["id"] = team_index;

        for (let character_4_index in teams[team_index].character_4.name) {

            if (teams[team_index].character_4.name.length > 1) {
                team["id"] = team_index + "-" + (parseInt(character_4_index) + 1);
            }
            team.character_4.name = [JSON.parse(JSON.stringify(teams[team_index].character_4.name[character_4_index]))];
            team.character_4.build = [JSON.parse(JSON.stringify(teams[team_index].character_4.build[character_4_index]))];

            if (doFilter(team_index, team) && containCharacter(team, search_form_text_input.toUpperCase())) {
                // console.log("Coincidence for: " + teams[team_index].name);
                teams_search_matches[team.id] = JSON.parse(JSON.stringify(team));
            }
            // else {
            //     console.log("Not matched: " + team.id)
            // }
        }
    }
}

function printTeams() {
    if (teams_search_matches.length > 0) {
        document.getElementById("result_container").style.display = "";
    }

    let team_output = "";
    orderedKeys = orderKeys(Object.keys(teams_search_matches));
    // console.log(orderedKeys);

    let team_count = 0;
    let team_index = start_index;
    while (team_index < orderedKeys.length && team_count < TEAMS_PER_PAGE) {

        let team = teams_search_matches[orderedKeys[team_index]];
        let character_4_int_index = 1;
        for (let character_4_index in team.character_4.name) {

            let character_4 = {
                "name": team.character_4.name[character_4_index],
                "build": team.character_4.build[character_4_index]
            };

            team_output = `
                <div id="team_container" class="team_container viability_` + team.viability.toLowerCase() + `">

                    <div id="toolbox_container" class="toolbox_container">
                        <div id="team_id" class="team_id" onclick="showCopiedPopup('copied_popup_` + orderedKeys[team_index] + (team.character_4.name.length > 1 ? `-` + character_4_int_index++ : ``) + `'); copyTextToClipboard('` + orderedKeys[team_index] + (team.character_4.name.length > 1 ? `-` + character_4_int_index++ : ``) + `');">
                            #` + orderedKeys[team_index] + (team.character_4.name.length > 1 ? `-` + character_4_int_index++ : ``) + `
                            <div class="popup">
                                <span class="popuptext" id="copied_popup_` + orderedKeys[team_index] + (team.character_4.name.length > 1 ? `-` + character_4_int_index++ : ``) + `">Copied!</span>
                            </div>
                        </div>

                        <button class="fav_button" onclick="toggleFavorite(this, ` + orderedKeys[team_index] + `)">
                            <img class="` + (favorites[orderedKeys[team_index]] === null || favorites[orderedKeys[team_index]] === undefined ? `empty` : `filled`) + `" src="images/icons/star_` + (favorites[orderedKeys[team_index]] === null || favorites[orderedKeys[team_index]] === undefined ? `empty` : `filled`) + `.png">
                        </button>
                    </div>

                    <div id="characters_container" class="characters_container">
                    ` +
                getCharacterHTML("character_1", team.character_1, characters[team.character_1.name]) +
                getCharacterHTML("character_2", team.character_2, characters[team.character_2.name]) +
                getCharacterHTML("character_3", team.character_3, characters[team.character_3.name]) +
                getCharacterHTML("character_4", character_4, characters[character_4.name]) +
                `
                    </div>
                    
                    <button class="collapsible" onclick="toggleCollapse(this)">
                        <img class="collapsible_image" src="images/icons/bottom_arrow.png">
                    </button>
                    <div class="collapsible_content viability_` + team.viability.toLowerCase() + `_illuminated">
                        <div id="team_name_container" class="team_name_container">
                            ` + team.name + `
                        </div>

                        <div id="team_rotation_container" class="team_rotation_container">
                            ` + team.rotation + `
                        </div>

                        <div id="team_archetype_container" class="team_archetype_container">
                            ` + team.archetype + `
                        </div>

                        <div class="team_desc_container">
                            ` + team.description + `
                        </div>
                    </div>
                </div>
                `;

            document.getElementById("result_container").innerHTML += team_output;
        }

        ++team_count;
        ++team_index;
    }

    document.getElementById("result_counter").innerHTML = (start_index + TEAMS_PER_PAGE < Object.keys(teams_search_matches).length ? start_index + TEAMS_PER_PAGE : Object.keys(teams_search_matches).length);
    document.getElementById("result_max_counter").innerHTML = Object.keys(teams_search_matches).length;
    document.getElementById("result_counter_container").style.display = "";
}

function printRandomTeam() {
    if (teams_search_matches.length > 0) {
        document.getElementById("result_container").style.display = "";
    }

    let team_output = "";

    let team_index = Object.keys(teams_search_matches)[Math.floor(Math.random() * Object.keys(teams_search_matches).length)];

    let team = teams_search_matches[team_index];
    let character_4_int_index = 0;
    let character_4_index = Object.keys(team.character_4.name)[character_4_int_index];

    let character_4 = {
        "name": team.character_4.name[character_4_index],
        "build": team.character_4.build[character_4_index]
    };

    team_output = `
        <div id="team_container" class="team_container viability_` + team.viability.toLowerCase() + `">

            <div id="toolbox_container" class="toolbox_container">
                <div id="team_id" class="team_id popup" onclick="showCopiedPopup('copied_popup_` + team_index + `'); copyTextToClipboard('` + team_index + `');">
                    #` + team_index + `
                    <div class="popup">
                        <span class="popuptext" id="copied_popup_` + team_index + `">Copied!</span>
                    </div>
                </div>

                <button class="fav_button" onclick="toggleFavorite(this, ` + teams_search_matches[team_index] + `)">
                    <img class="` + (favorites[teams_search_matches[team_index]] === null || favorites[teams_search_matches[team_index]] === undefined ? `empty` : `filled`) + `" src="images/icons/star_` + (favorites[teams_search_matches[team_index]] === null || favorites[teams_search_matches[team_index]] === undefined ? `empty` : `filled`) + `.png">
                </button>
            </div>

            <div id="characters_container" class="characters_container">
            ` +
        getCharacterHTML("character_1", team.character_1, characters[team.character_1.name]) +
        getCharacterHTML("character_2", team.character_2, characters[team.character_2.name]) +
        getCharacterHTML("character_3", team.character_3, characters[team.character_3.name]) +
        getCharacterHTML("character_4", character_4, characters[character_4.name]) +
        `
            </div>
            
            <button class="collapsible" onclick="toggleCollapse(this)">
                <img class="collapsible_image" src="images/icons/bottom_arrow.png">
            </button>
            <div class="collapsible_content viability_` + team.viability.toLowerCase() + `_illuminated">
                <div id="team_name_container" class="team_name_container">
                    ` + team.name + `
                </div>

                <div id="team_rotation_container" class="team_rotation_container">
                    ` + team.rotation + `
                </div>

                <div id="team_archetype_container" class="team_archetype_container">
                    ` + team.archetype + `
                </div>

                <div class="team_desc_container">
                    ` + team.description + `
                </div>
            </div>
        </div>
        `;

    document.getElementById("result_container").innerHTML += team_output;

    document.getElementById("result_counter_container").style.display = "none";
}

function getCharacterHTML(id, character_team, character_data) {
    if (character_team == null || character_data == null) {
        console.log(id);
        console.log(character_team);
        console.log(character_data);
    }

    console.log(character_team.name);
    console.log(character_team.build);
    console.log(builds[character_team.name]);
    console.log(builds[character_team.name][character_team.build]);
    console.log(builds[character_team.name][character_team.build].constellation);

    return `
    <div id="` + id + `" class="character_container ` + character_data.name.replaceAll(" ", "_") + `">
        <img class="character_icon ` + (character_data.rarity == "5" ? "character_5_stars" : "character_4_stars") + `" src="https://api.ambr.top/assets/UI/` + character_data.images.nameicon + `.png" alt="Character icon for ` + character_data.name + `">
        <img class="element_icon" src="images/elements/glow_` + (character_data.element != "None" ? character_data.element.toLowerCase() : builds[character_team.name][character_team.build].element.toLowerCase()) + `.png">
        ` + (builds[character_team.name][character_team.build].constellation != "" ? `<div class="constellation">` + builds[character_team.name][character_team.build].constellation + `</div>` : ``) + `
        <div class="rarity_container">` + STAR_SVG + STAR_SVG + STAR_SVG + STAR_SVG + (character_data.rarity == "5" ? STAR_SVG : "") + `</div>
        <div class="character_name ` + (character_data.name.length < SHORT_NAME_LENGTH ? "character_name_short" : (character_data.name.length < MEDIUM_NAME_LENGTH ? "character_name_medium" : "character_name_long")) + `">` + character_data.name + `</div>
    </div>
    `;
}

function toggleFavorite(button, id) {
    let star_img = button.getElementsByTagName('img')[0];


    if (star_img.classList.contains("empty")) {

        storeFavoriteTeam(id);

        star_img.classList.remove("empty");
        star_img.classList.add("filled");
        star_img.src = "images/icons/star_filled.png";
    } else {

        removeFavoriteTeam(id);

        star_img.classList.add("empty");
        star_img.classList.remove("filled");
        star_img.src = "images/icons/star_empty.png";
    }
}