var team_count = Object.keys(teams).length;

var menu_tabs = ["menu_characters_check", "menu_teams_creator"];
var menu_tabs_buttons = ["menu_characters_check_button", "menu_teams_creator_button"];

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("id_input").value = team_count + 1;

    autocomplete(document.getElementById("character_1_select"), character_names);
    autocomplete(document.getElementById("character_2_select"), character_names);
    autocomplete(document.getElementById("character_3_select"), character_names);
    autocomplete(document.getElementById("character_4_select"), character_names);

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
        "viability": "` + document.getElementById("viability_select").value + `",

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

    // Get the text field
    let copyText = document.getElementById("json_result");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}