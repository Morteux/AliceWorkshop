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
    }
    else {
        team_output = "No teams for archetype " + archetype + " found.";
    }

    return team_output;
}

function printArchetypes() {
    // Reset Archetypes container
    document.getElementById("archetypes_container").innerHTML = ``;

    let archetypes_HTML = "";

    for (let archetype_index in archetypes) {

        archetypes_HTML += `
        <div id="archetype_container" class="archetype_container">
    
            <div id="teams_example" class="teams_example">
    
                <div id="" class="team_elements_container">
                
                    <div class="element_container">
                        <img class="archetype_element_icon" src="images/elements/` + "electro" + `.png" alt="Element icon for ` + "Electro" + `">
                    </div>
                    
                    <div class="double_element_container">
                        <img class="" src="images/elements/` + "electro" + `.png" alt="Element icon for ` + "Electro" + `">
                        
                        <svg class="svg_divisor_line">
                            <line class="divisor_line" x1='0' y1='100%' x2='100%' y2='0' />
                        </svg>
    
                        <img class="" src="images/elements/` + "hydro" + `.png" alt="Element icon for ` + "Hydro" + `">
                    </div>
                    
                    <div class="element_container">
                        <img class="archetype_element_icon" src="images/elements/` + "hydro" + `.png" alt="Element icon for ` + "Hydro" + `">
                    </div>
                    
                    <div class="element_container">
                        <img class="archetype_element_icon" src="images/elements/` + "anemo" + `.png" alt="Element icon for ` + "Anemo" + `">
                    </div>
    
                </div>
    
                ` + getRandomTeamByArchetype(archetype_index) + `
            </div>
            
            <div class="archetype_info">
                <div class="archetype_title">
                    ` + archetype_index + `
                </div>
    
                <div class="">
                    <div class="archetype_subtitle">
                        Description:
                    </div>
                    ` + archetypes[archetype_index]["description"] + `
                </div>
    
                <div class="">
                <div class="archetype_subtitle">
                    Pros/Cons:
                </div>
                    <div scrollable_div="">
                        ` + archetypes[archetype_index]["pros_cons"] + `
                    </div>
                </div>
    
                <div class="">
                    forced_characters:` + archetypes[archetype_index]["forced_characters"] + `
                </div>
            </div>
        </div>
        `;
    }

    document.getElementById("archetypes_container").innerHTML = archetypes_HTML;
}