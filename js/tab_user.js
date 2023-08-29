var character_names = Object.keys(characters);
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













function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}