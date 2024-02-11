var tab_archetype_search = "";
var tab_teams_search = "";
var tab_user = "";

var tab_archetype_search_button = "";
var tab_teams_search_button = "";
var tab_user_button = "";

document.addEventListener("DOMContentLoaded", (event) => {
    // Get tabs divs
    tab_archetype_search = document.getElementById("tab_archetype_search");
    tab_teams_search = document.getElementById("tab_teams_search");
    tab_user = document.getElementById("tab_user");

    // Get tabs navigation buttons
    tab_archetype_search_button = document.getElementById("tab_archetype_search_button");
    tab_teams_search_button = document.getElementById("tab_teams_search_button");
    tab_user_button = document.getElementById("tab_user_button");

    // Set on click event listener for each tab button
    tab_archetype_search_button.addEventListener('click', function (event) {
        setTabActive([tab_archetype_search, tab_archetype_search_button], [[tab_teams_search, tab_teams_search_button], [tab_user, tab_user_button]]);
    });
    tab_teams_search_button.addEventListener('click', function (event) {
        setTabActive([tab_teams_search, tab_teams_search_button], [[tab_archetype_search, tab_archetype_search_button], [tab_user, tab_user_button]]);
    });
    tab_user_button.addEventListener('click', function (event) {
        setTabActive([tab_user, tab_user_button], [[tab_archetype_search, tab_archetype_search_button], [tab_teams_search, tab_teams_search_button]]);
    });

    // Hide all tabs. Activate default tab
    disableTab(tab_archetype_search, tab_archetype_search_button);
    activateTab(tab_teams_search, tab_teams_search_button); // Active by default
    disableTab(tab_user, tab_user_button);

    // activateTab(tab_archetype_search, tab_archetype_search_button);
    // disableTab(tab_teams_search, tab_teams_search_button); // Active by default
    // disableTab(tab_user, tab_user_button);
});

function setTabActive(active_tab, unactive_tabs) {
    if (!active_tab[1].classList.contains('active_tab_button')) {
        activateTab(active_tab[0], active_tab[1]);

        for (let tab_index in unactive_tabs) {
            disableTab(unactive_tabs[tab_index][0], unactive_tabs[tab_index][1]);
        }
    }
}

function activateTab(tab, tab_button) {
    // Show this tab
    tab.style.display = "";

    // Change tab button border
    tab_button.classList.add('active_tab_button');
    tab_button.classList.remove('disabled_tab_button');
}

function disableTab(tab, tab_button) {
    // Hide this tab
    tab.style.display = "none";

    // Change tab button border
    tab_button.classList.remove('active_tab_button');
    tab_button.classList.add('disabled_tab_button');
}