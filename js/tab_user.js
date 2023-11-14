var team_count = Object.keys(teams).length;

var menu_tabs = ["menu_configuration", "menu_characters_check", "menu_teams_creator", "menu_json_validator"];
var menu_tabs_buttons = ["menu_configuration_button", "menu_characters_check_button", "menu_teams_creator_button", "menu_json_validator_button"];

var team_creator_meta;
var team_creator_viable;
var team_creator_troll;
var team_creator_unique;

var favorites = {};
var user_characters = {};

window.addEventListener("beforeunload", function (e) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('user_characters', JSON.stringify(user_characters));
});

if (localStorage.getItem("favorites") !== null && localStorage.getItem("favorites") != "{}") {
    favorites = JSON.parse(localStorage.getItem("favorites"));
    // console.log(favorites);
}

if (localStorage.getItem("user_characters") !== null && localStorage.getItem("user_characters") != "{}") {
    user_characters = JSON.parse(localStorage.getItem("user_characters"));
    // console.log(user_characters);
}

document.addEventListener("DOMContentLoaded", (event) => {

    // Configuration


    // Characters

    printCharactersCheck();

    // Team creator

    printTeamCreator();



    // Team user configuration

    for (let menu_index in menu_tabs) {
        // Set on click event listener for each tab button
        document.getElementById(menu_tabs_buttons[menu_index]).addEventListener('click', function (event) {
            setMenuTabActive(document.getElementById(menu_tabs[menu_index]), document.getElementById(menu_tabs_buttons[menu_index]));
        });
    }

    // Hide all tabs. Activate default tab
    // setMenuTabActive(document.getElementById("menu_characters_check"), document.getElementById("menu_characters_check_button"));
    setMenuTabActive(document.getElementById("menu_teams_creator"), document.getElementById("menu_teams_creator_button"));
});

function getViability() {
    let viability = "Meta";

    if (team_creator_viable.checked) {
        viability = team_creator_viable.value;
    } else if (team_creator_troll.checked) {
        viability = team_creator_troll.value;
    } else if (team_creator_unique.checked) {
        viability = team_creator_unique.value;
    }

    return viability;
}

function setMenuTabActive(menu_tab, menu_tab_button) {
    if (!menu_tab.classList.contains('active_tab_button')) {
        for (let tab_index in menu_tabs) {
            disableMenuTab(document.getElementById(menu_tabs[tab_index]), document.getElementById(menu_tabs_buttons[tab_index]));
        }

        activateMenuTab(menu_tab, menu_tab_button);
    }
}

function activateMenuTab(tab, tab_button) {
    // Show this tab
    tab.style.display = "";

    // Change tab button border
    tab_button.classList.add('active_tab_button');
    tab_button.classList.remove('disabled_tab_button');
}

function disableMenuTab(tab, tab_button) {
    // Hide this tab
    tab.style.display = "none";

    // Change tab button border
    tab_button.classList.remove('active_tab_button');
    tab_button.classList.add('disabled_tab_button');
}

function printTeamCreator() {
    team_creator_meta = document.getElementById("team_creator_meta");
    team_creator_viable = document.getElementById("team_creator_viable");
    team_creator_troll = document.getElementById("team_creator_troll");
    team_creator_unique = document.getElementById("team_creator_unique");

    document.getElementById("id_input").value = team_count + 1;

    autocomplete(document.getElementById("character_1_select"), CHARACTER_NAMES);
    autocomplete(document.getElementById("character_2_select"), CHARACTER_NAMES);
    autocomplete(document.getElementById("character_3_select"), CHARACTER_NAMES);
    autocomplete(document.getElementById("character_4_select"), CHARACTER_NAMES);
}

function printTeamJSON() {
    if (document.getElementById("id_input").value != team_count - 1) {
        team_count = document.getElementById("id_input").value;
    }

    document.getElementById("id_input").value = team_count;

    document.getElementById("json_result").value += `
    "` + team_count++ + `": {
        "name": "` + document.getElementById("team_name_select").value + `",
        "description": "` + document.getElementById("description_select").value + `",
        "rotation": "` + document.getElementById("rotation_select").value + `",
        "archetype": "` + document.getElementById("archetype_select").value + `",
        "viability": "` + getViability() + `",

        "character_1": {
            "name": "` + document.getElementById("character_1_select").value + `",
            "build": "` + document.getElementById("build_1_select").value + `"
        },
        "character_2": {
            "name": "` + document.getElementById("character_2_select").value + `",
            "build": "` + document.getElementById("build_2_select").value + `"
        },
        "character_3": {
            "name": "` + document.getElementById("character_3_select").value + `",
            "build": "` + document.getElementById("build_3_select").value + `"
        },
        "character_4": {
            "name": ["` + document.getElementById("character_4_select").value + `"],
            "build": ["` + document.getElementById("build_4_select").value + `"]
        }
    },
    `;

    // copyToClipboardFromElementValue("json_result");
}

function storeFavoriteTeam(id) {
    // console.log("Stored favorite " + id);
    // console.log(teams[id]);

    favorites[id] = teams[id];
}

function removeFavoriteTeam(id) {
    // console.log("Removed favorite " + id);
    // console.log(favorites[id]);

    delete favorites[id];
}

function getCharacterCheckHTML(character_data) {
    if (character_data == null) {
        console.log(character_data);
    }

    return `
    <div id="character_check_` + character_data.name + `" class="character_container ` + (user_characters[character_data.name] == null ? "character_unchecked" : "") + `" onclick="toggleCharacterUser('` + character_data.name + `')">
        <img class="character_icon ` + (character_data.rarity == "5" ? "character_5_stars" : "character_4_stars") + `" src="https://api.ambr.top/assets/UI/` + character_data.images.nameicon + `.png" alt="Character icon for ` + character_data.name + `">
        ` + (character_data.element != "None" ? `<img class="element_icon" src="images/elements/glow_` + character_data.element.toLowerCase() + `.png">` : "") + `
        <div class="rarity_container">` + STAR_SVG + STAR_SVG + STAR_SVG + STAR_SVG + (character_data.rarity == "5" ? STAR_SVG : "") + `</div>
        <div class="character_name ` + (character_data.name.length < SHORT_NAME_LENGTH ? "character_name_short" : (character_data.name.length < MEDIUM_NAME_LENGTH ? "character_name_medium" : "character_name_long")) + `">` + character_data.name + `</div>
    </div>
    `;
}

function printCharactersCheck() {
    let menu_characters_check = "";

    for (let index = Object.keys(characters_order_priority).length - 1; index >= 0; --index) {
        menu_characters_check += getCharacterCheckHTML(characters[characters_order_priority[index]]);
    }

    document.getElementById("menu_characters_check").innerHTML = menu_characters_check;
}

function toggleCharacterUser(character_name) {
    if (user_characters[character_name] != null) {
        if (!document.getElementById("character_check_" + character_name).classList.contains("character_unchecked")) {
            document.getElementById("character_check_" + character_name).classList.add("character_unchecked");
        }
        delete user_characters[character_name];
    } else {
        document.getElementById("character_check_" + character_name).classList.remove("character_unchecked");
        user_characters[character_name] = characters[character_name];
    }
}




















































function isJSONObjectEmpty(obj) {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
    }

    return true;
}

function validateJSON() {

    let json_validator_result = ``;

    json_validator_result += testArtifacts();
    json_validator_result += testBestTeams();
    json_validator_result += testBuilds();
    json_validator_result += testCharactersOrderPriority();
    json_validator_result += testCharacters();
    json_validator_result += testTeams();
    json_validator_result += testWeapons();

    document.getElementById("json_validator_result").innerHTML = json_validator_result;
}


function testArtifacts() {
    let json_validator_result = "";
    return json_validator_result;
}

function testBestTeams() {
    let json_validator_result = "";
    return json_validator_result;
}

function testBuilds() {
    let json_validator_result = "";
    let test_separator = "";
    // Test if Aether and Lumine has "element" field in each build

    for (let build_index in builds["Aether"]) {
        if (!builds["Aether"][build_index].hasOwnProperty("element")) {
            json_validator_result += "<br>testBuilds: Aether build " + build_index + " has no \"element\" field ";
        }
    }

    for (let build_index in builds["Lumine"]) {
        if (!builds["Lumine"][build_index].hasOwnProperty("element")) {
            json_validator_result += "<br>testBuilds: Lumine build " + build_index + " has no \"element\" field ";
        }
    }

    for (let build_index in builds) {

        // Test if each character has at least one build
        if (isJSONObjectEmpty(builds[build_index])) {
            json_validator_result += "<br>testBuilds: No build found for " + build_index;
        }
    }

    // Check if builds in team exists
    for (let team_index in teams) {
        if (builds.hasOwnProperty(teams[team_index]["character_1"]["name"]) && !builds[teams[team_index]["character_1"]["name"]].hasOwnProperty(teams[team_index]["character_1"]["build"])) {
            json_validator_result += "<br>Team " + team_index + " - ERROR: " + teams[team_index]["character_1"]["name"] + " build 1 does not exist: " + teams[team_index]["character_1"]["build"];
        }

        if (builds.hasOwnProperty(teams[team_index]["character_2"]["name"]) && !builds[teams[team_index]["character_2"]["name"]].hasOwnProperty(teams[team_index]["character_2"]["build"])) {
            json_validator_result += "<br>Team " + team_index + " - ERROR: " + teams[team_index]["character_2"]["name"] + " build 2 does not exist: " + teams[team_index]["character_2"]["build"];
        }

        if (builds.hasOwnProperty(teams[team_index]["character_2"]["name"]) && !builds[teams[team_index]["character_3"]["name"]].hasOwnProperty(teams[team_index]["character_3"]["build"])) {
            json_validator_result += "<br>Team " + team_index + " - ERROR: " + teams[team_index]["character_3"]["name"] + " build 3 does not exist: " + teams[team_index]["character_3"]["build"];
        }

        for (let build_4_index in teams[team_index]["character_4"]["name"]) {
            if (builds.hasOwnProperty(teams[team_index]["character_4"]["name"][build_4_index]) && !builds[teams[team_index]["character_4"]["name"][build_4_index]].hasOwnProperty(teams[team_index]["character_4"]["build"][build_4_index])) {
                json_validator_result += "<br>Team " + team_index + " - ERROR: " + teams[team_index]["character_4"]["name"][build_4_index] + " build 4 with index " + build_4_index + " does not exist: " + teams[team_index]["character_4"]["build"][build_4_index];
            }
        }
    }

    test_separator = "<br>=================== " + (json_validator_result == "" ? "OK - testBuilds" : "KO - testBuilds") + " ===================<br><br>";

    return "<div class='" + (json_validator_result == "" ? "test_ok" : "test_ko") + "'>" + json_validator_result + test_separator + "</div>";
}

function testCharactersOrderPriority() {
    let json_validator_result = "";
    return json_validator_result;
}

function testCharacters() {
    let json_validator_result = "";
    return json_validator_result;
}

function testTeams() {
    let json_validator_result = "";


    // Check if characters in team exists
    for (let team_index in teams) {

        if(!ARCHETYPES.includes(teams[team_index]["archetype"])) {
            json_validator_result += "<br>Team " + team_index + " - ERROR: archetype does not exist: " + teams[team_index]["archetype"];
        }

        if(!VIABILITIES.includes(teams[team_index]["viability"])) {
            json_validator_result += "<br>Team " + team_index + " - ERROR: viability does not exist: " + teams[team_index]["viability"];
        }
        
        if (!CHARACTER_NAMES.includes(teams[team_index]["character_1"]["name"])) {
            json_validator_result += "<br>Team " + team_index + " - ERROR: character 1 does not exist: " + teams[team_index]["character_1"]["name"];
        }

        if (!CHARACTER_NAMES.includes(teams[team_index]["character_2"]["name"])) {
            json_validator_result += "<br>Team " + team_index + " - ERROR: character 2 does not exist: " + teams[team_index]["character_2"]["name"];
        }

        if (!CHARACTER_NAMES.includes(teams[team_index]["character_3"]["name"])) {
            json_validator_result += "<br>Team " + team_index + " - ERROR: character 3 does not exist: " + teams[team_index]["character_3"]["name"];
        }

        for (let character_4_index in teams[team_index]["character_4"]["name"]) {
            if (!CHARACTER_NAMES.includes(teams[team_index]["character_4"]["name"][character_4_index])) {
                json_validator_result += "<br>Team " + team_index + " - ERROR: character 4 with index " + character_4_index + " does not exist: " + teams[team_index]["character_4"]["name"][character_4_index];
            }
        }
    }

    test_separator = "<br><br>=================== " + (json_validator_result == "" ? "OK - testTeams" : "KO - testTeams") + " ===================<br><br>";

    return "<div class='" + (json_validator_result == "" ? "test_ok" : "test_ko") + "'>" + json_validator_result + test_separator + "</div>";
}

function testWeapons() {
    let json_validator_result = "";
    return json_validator_result;
}
