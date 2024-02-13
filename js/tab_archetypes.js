// declare the function 
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

var teams_keys = shuffle(Object.keys(teams));

document.addEventListener("DOMContentLoaded", (event) => {
    printArchetypes();
});

function getNewRandomTeam(container, archetype) {
    teams_keys = shuffle(Object.keys(teams));
    document.getElementById(container).innerHTML = getRandomTeamByArchetype(archetype);
}

function getRandomTeamByArchetype(archetype) {
    let team_output = "";

    let team_index = -1;
    let index = 0;

    while (team_index == -1 && index < Object.keys(teams).length) {
        if (teams[teams_keys[index]]["archetype"] == archetype) {
            team_index = teams_keys[index];
        }

        ++index;
    }

    if (team_index > -1) {

        let team = teams[team_index];
        let character_4_int_index = Math.floor(Math.random() * Object.keys(team.character_4.name).length);
        let character_4_index = Object.keys(team.character_4.name)[character_4_int_index];

        let character_4 = {
            "name": team.character_4.name[character_4_index],
            "build": team.character_4.build[character_4_index]
        };

        team_output = `
        <div class="team_container ` + archetypes[team.archetype].color + `">

            <div id="toolbox_container" class="toolbox_container">
                <div id="team_id" class="team_id popup" onclick="showCopiedPopup('copied_popup_` + team_index + `'); copyTextToClipboard('` + team_index + (team.character_4.name.length > 1 ? `-` + (character_4_int_index + 1) : ``) + `');">
                    #` + team_index + (team.character_4.name.length > 1 ? `-` + (character_4_int_index + 1) : ``) + `
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
            <div class="collapsible_content ` + archetypes[team.archetype].color_illuminated + `">
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
    }
    else {
        team_output = '<div class="archetype_subtitle">No teams for archetype ' + archetype + ' found.</div>';
    }

    return team_output;
}

function printElement(element) {
    let element_HTML = "";

    if (!Array.isArray(element)) {
        if (ELEMENTS.includes(element)) {
            element_HTML = `
            <div class="element_container">
                <img class="archetype_element_icon" src="images/elements/` + element.toLowerCase() + `.png" alt="Element icon for ` + element + `">
            </div>
        `;
        } else if (CHARACTER_NAMES.includes(element)) {
            element_HTML = `
            <div class="element_character_container">
                <img class="archetype_character_icon" src="https://api.ambr.top/assets/UI/` + characters[element].images.nameicon + `.png" alt="Flex icon">
            </div>
        `;
        } else {
            element_HTML = `
            <div class="element_container">
                <img class="archetype_element_icon" src="images/icons/user.png" alt="Flex icon">
            </div>
        `;
        }

    } else if (element.length == 2) {
        element_HTML = `
            <div class="double_element_container">
                <img class="" src="images/elements/` + element[0].toLowerCase() + `.png" alt="Element icon for ` + element[0] + `">
                
                <svg class="svg_divisor_line">
                    <line class="divisor_line" x1='0' y1='100%' x2='100%' y2='0' />
                </svg>

                <img class="" src="images/elements/` + element[1].toLowerCase() + `.png" alt="Element icon for ` + element[1] + `">
            </div>
        `;
    } else {
        element_HTML = `
            <div class="element_container">
                <img class="archetype_element_icon" src="images/icons/user.png" alt="Flex icon">
            </div>
        `;
    }

    return element_HTML;
}

function printElementsOrForcedCharacter(archetype) {
    let elements_HTML = "";

    elements_HTML = `
        ` + printElement(archetype["elements"][0]) + `
        ` + printElement(archetype["elements"][1]) + `
        ` + printElement(archetype["elements"][2]) + `
        ` + printElement(archetype["elements"][3]) + `
    `;

    return elements_HTML;
}

function printRecommendedCharacters(recommended_characters) {
    let characters_HTML = "";

    for (let index in recommended_characters) {
        let character = characters[recommended_characters[index]];

        characters_HTML += `
            <div class="character_container ` + character.name.replaceAll(" ", "_") + `">
                <img class="character_icon ` + (character.rarity == "5" ? "character_5_stars" : "character_4_stars") + `" src="https://api.ambr.top/assets/UI/` + character.images.nameicon + `.png" alt="Character icon for ` + character.name + `">
                <img class="element_icon" src="images/elements/glow_` + (character.element != "None" ? character.element.toLowerCase() : builds[character_team.name][character_team.build].element.toLowerCase()) + `.png">
                <div class="rarity_container">` + STAR_SVG + STAR_SVG + STAR_SVG + STAR_SVG + (character.rarity == "5" ? STAR_SVG : "") + `</div>
                <div class="character_name ` + (character.name.length < SHORT_NAME_LENGTH ? "character_name_short" : (character.name.length < MEDIUM_NAME_LENGTH ? "character_name_medium" : "character_name_long")) + `">` + character.name + `</div>
            </div>
        `;
    }

    if (characters_HTML == "") {
        characters_HTML = "No recommended character for this archetype.";
    }

    return characters_HTML;
}

function printArchetypes() {
    // Reset Archetypes container
    document.getElementById("archetypes_container").innerHTML = ``;

    let archetypes_HTML = "";

    for (let archetype_index in archetypes) {

        archetypes_HTML += `
        <div id="archetype_container" class="archetype_container">

            <div class="teams_example">
                <div class="archetype_title">
                    ` + archetype_index + ` <button type="submit" class="search_random_button" onclick="getNewRandomTeam('random_` + archetype_index + `', '` + archetype_index + `')"></button>
                </div>
                <div class="team_elements_container">
                    ` + printElementsOrForcedCharacter(archetypes[archetype_index]) + `
                </div>

                <div id="random_` + archetype_index + `">
                    ` + getRandomTeamByArchetype(archetype_index) + `
                </div>
            </div>
            
            <div class="archetype_info">
    
                <div>
                    <div class="archetype_subtitle">
                        Description:
                    </div>
                    ` + archetypes[archetype_index]["description"] + `
                </div>
    
                <div>
                    <div class="archetype_subtitle">
                        Pros/Cons:
                    </div>
                    <div scrollable_div="">
                        ` + archetypes[archetype_index]["pros_cons"] + `
                    </div>
                </div>
    
                <div>
                    <div class="archetype_subtitle">
                        Recommended characters:
                    </div>
                    <div class="recommended_characters_container">
                        ` + printRecommendedCharacters(archetypes[archetype_index]["recommended_characters"]) + `
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    document.getElementById("archetypes_container").innerHTML = archetypes_HTML;
}