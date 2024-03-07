var team_count = Object.keys(teams).length;

var menu_tabs = ["menu_configuration", "menu_characters_check", "menu_teams_creator", "menu_json_validator"];
var menu_tabs_buttons = ["menu_configuration_button", "menu_characters_check_button", "menu_teams_creator_button", "menu_json_validator_button"];

var team_creator_meta;
var team_creator_viable;
var team_creator_offmeta;
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
    printConfiguration();

    // Characters
    printCharactersCheck();

    // Team creator
    printTeamCreator();

    // Team user configuration

    for (let menu_index in menu_tabs) {
        // Set on click event listener for each tab button
        document.getElementById(menu_tabs[menu_index] + "_button").addEventListener('click', function (event) {
            setMenuTabActive(document.getElementById(menu_tabs[menu_index]), document.getElementById(menu_tabs[menu_index] + "_button"));
        });
    }

    // Hide all tabs. Activate default tab
    setMenuTabActive(document.getElementById("menu_teams_creator"), document.getElementById("menu_teams_creator_button"));
});

function printConfiguration() {

}

function getViability() {
    let viability = "Meta";

    if (team_creator_viable.checked) {
        viability = team_creator_viable.value;
    } else if (team_creator_offmeta.checked) {
        viability = team_creator_offmeta.value;
    } else if (team_creator_unique.checked) {
        viability = team_creator_unique.value;
    }

    return viability;
}

function setMenuTabActive(menu_tab, menu_tab_button) {
    if (!menu_tab.classList.contains('active_tab_button')) {
        for (let tab_index in menu_tabs) {
            disableMenuTab(document.getElementById(menu_tabs[tab_index]), document.getElementById(menu_tabs[tab_index] + "_button"));
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
    team_creator_offmeta = document.getElementById("team_creator_offmeta");
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
    return `
    <div id="character_check_` + character_data.name + `" class="character_container ` + (user_characters[character_data.name] == null ? "character_unchecked" : "") + `" onclick="toggleCharacterUser('` + character_data.name + `')">
        <img class="character_icon character_` + character_data.rarity + `_stars" src="images/characters/` + character_data.images.filename_icon + `.png" alt="Character icon for ` + character_data.name + `">
        ` + (character_data.elementText != "None" ? `<img class="element_icon" src="images/elements/glow_` + character_data.elementText.toLowerCase() + `.png">` : "") + `
        <div class="rarity_container">` + STAR_SVG + STAR_SVG + STAR_SVG + STAR_SVG + (character_data.rarity == "5" ? STAR_SVG : "") + `</div>
        <div class="character_name ` + (character_data.name.length < SHORT_NAME_LENGTH ? "character_name_short" : (character_data.name.length < MEDIUM_NAME_LENGTH ? "character_name_medium" : "character_name_long")) + `">` + character_data.name + `</div>
    </div>
    `;
}

function printCharactersCheck() {
    let menu_characters_check = "";

    for (let index = Object.keys(characters_order_priority).length - 1; index >= 0; --index) {
        menu_characters_check += getCharacterCheckHTML(getCharacter(characters_order_priority[index]));
    }

    document.getElementById("menu_characters_check").innerHTML = menu_characters_check;
}

function toggleCharacterUser(character_name) {
    if (user_characters[character_name] != null) {
        delete user_characters[character_name];
    } else {
        user_characters[character_name] = {};
    }

    document.getElementById("character_check_" + character_name).classList.toggle("character_unchecked");
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
    json_validator_result += testJSONSyntax();

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

    try {
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
    } catch (error) {
        json_validator_result += "Execution error while checking: Test if Aether and Lumine has 'element' field in each build. " + error;
    }

    try {
        for (let character in builds) {

            // Test if each character has at least one build
            if (isJSONObjectEmpty(builds[character])) {
                json_validator_result += "<br>testBuilds: No build found for " + character;
            }
        }
    } catch (error) {
        json_validator_result += "Execution error while checking: Test if each character has at least one build. " + error;
    }

    try {
        for (let character in builds) {

            // Test if each weapon in build exits
            for (let build_index in builds[character]) {
                for (let weapon of builds[character][build_index].weapon) {
                    if (!GenshinDb.weapon(weapon)) {
                        json_validator_result += "<br>testBuilds: No weapon " + weapon + " found for " + character;
                    }
                }
            }
        }
    } catch (error) {
        json_validator_result += "Execution error while checking: Test if each weapon in build exists. " + error;
    }

    try {
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
    } catch (error) {
        json_validator_result += "Execution error while checking: Check if builds in team exists. " + error;
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

    try {
        // Check if characters in team exists
        for (let team_index in teams) {

            for (let archetype_index in teams[team_index]["archetype"]) {
                if (!ARCHETYPES_NAMES.includes(teams[team_index]["archetype"][archetype_index])) {
                    json_validator_result += "<br>Team " + team_index + " - ERROR: archetype does not exist: " + teams[team_index]["archetype"];
                }
            }

            if (!VIABILITIES.includes(teams[team_index]["viability"])) {
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
    } catch (error) {
        json_validator_result += "Execution error while checking: Check if characters in team exists. " + error;
    }


    try {
        // Check for repeated teams
        for (let actual_index in teams) {
            let teams_indexes = Object.keys(teams);
            for (let index = parseInt(actual_index) + 1; index < Object.keys(teams).length; ++index) {
                for (let character_4_index in teams[actual_index]["character_4"]["name"]) {
                    for (let actual_character_4_index in teams[teams_indexes[index]]["character_4"]["name"]) {
                        let temp_actual_team = [teams[actual_index]["character_1"]["name"], teams[actual_index]["character_2"]["name"], teams[actual_index]["character_3"]["name"], teams[actual_index]["character_4"]["name"][character_4_index]].sort();
                        let temp_team = [teams[teams_indexes[index]]["character_1"]["name"], teams[teams_indexes[index]]["character_2"]["name"], teams[teams_indexes[index]]["character_3"]["name"], teams[teams_indexes[index]]["character_4"]["name"][actual_character_4_index]].sort();
                        let areEquals = true;

                        for (let i = 0; i < temp_actual_team.length; i++) {
                            if (temp_actual_team[i] !== temp_team[i]) {
                                areEquals = false;
                            }
                        }

                        if (areEquals && actual_index != teams_indexes[index]) {
                            json_validator_result += "<br>Team " + actual_index + (teams[actual_index]["character_4"]["name"].length > 1 ? "-" + (parseInt(actual_character_4_index) + 1) : "") + " is equal to " + teams_indexes[index] + (teams[teams_indexes[index]]["character_4"]["name"].length > 1 ? "-" + (parseInt(character_4_index) + 1) : "");
                        }
                    }
                }
            }
        }
    } catch (error) {
        json_validator_result += "Execution error while checking: Check for repeated teams. " + error;
    }

    try {
        // Check if teams keys has skipped a number
        for (let index = 0; index < Object.keys(teams).length; ++index) {
            if (teams[index + 1] == undefined) {
                json_validator_result += "<br>Team index #" + (index + 1) + " has been not found - There are " + Object.keys(teams).length + " team indexes, but last one is " + Object.keys(teams)[Object.keys(teams).length - 1];
            }
        }
    } catch (error) {
        json_validator_result += "Execution error while checking: Check if teams keys has skipped a number. " + error;
    }

    test_separator = "<br><br>=================== " + (json_validator_result == "" ? "OK - testTeams" : "KO - testTeams") + " ===================<br><br>";

    return "<div class='" + (json_validator_result == "" ? "test_ok" : "test_ko") + "'>" + json_validator_result + test_separator + "</div>";
}

function testWeapons() {
    let json_validator_result = "";
    return json_validator_result;
}

function testJSONSyntax() {
    let json_validator_result = "";

    let teams_string = JSON.stringify(teams);
    let duplicate_index = check_json_for_dupes(teams_string);

    // console.log(duplicate_index);

    if (duplicate_index != -1) {
        json_validator_result = "<br>Duplicate keys exists: <br>" + teams_string.substring(duplicate_index, duplicate_index + 30) + "<br>";
    }

    test_separator = "<br><br>=================== " + (json_validator_result == "" ? "OK - testJSONSyntax" : "KO - testJSONSyntax") + " ===================<br><br>";

    return "<div class='" + (json_validator_result == "" ? "test_ok" : "test_ko") + "'>" + json_validator_result + test_separator + "</div>";
}

// This function will return -1 if 's' is a valid JSON string with no duplicate keys. It will return an index into 's' of the problem if there are duplicate keys. And it will throw an exception if 's' is not valid JSON.
function check_json_for_dupes(s) {
    let ob = JSON.parse(s);
    let s2 = JSON.stringify(ob);
    let a = 0;
    let b = 0;
    while (a < s.length && b < s2.length) {
        if (s[a] === s2[b]) {
            a++;
            b++;
        } else if (s[a] === ' ' ||
            s[a] === '\n' ||
            s[a] === '\r' ||
            s[a] === '\t' ||
            s[a] === '\v') {
            a++;
        } else if (s2[b] === ' ' ||
            s2[b] === '\n' ||
            s2[b] === '\r' ||
            s2[b] === '\t' ||
            s2[b] === '\v') {
            b++;
        } else {
            return a;
        }
    }
    return -1;
}