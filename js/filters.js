var filters_element = [];
var filters_archetype = [];
var filters_viability = [];
var filters_character = [];

var filter_favorite = false;
var filter_characters_owned = false;

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("extra_filters_container").style.display = "none";

    printExtraFilters();
});

function printExtraFilters() {
    filters_element = ELEMENTS.slice(); // Copy by value, not by reference
    filters_archetype = ARCHETYPES.slice(); // Copy by value, not by reference
    filters_viability = VIABILITIES.slice(); // Copy by value, not by reference
    filters_character = [];

    extra_filters_container = document.getElementById("extra_filters_container");

    let filters = "";

    filters += `<div class="filters_elements">
    
        <button id="toggle_all_elements_button" class="primary_button" onclick="toggleAllElements()">+</button>
    `;

    for (let element_index in ELEMENTS) {
        let element = ELEMENTS[element_index];

        filters += `
        <div class="checkbox_filter">
            <input type="checkbox" onclick="toggleFilterElement('` + element + `'); resetResult(); searchQuery()" name="filter_element_` + element.toLowerCase() + `" id="filter_element_` + element.toLowerCase() + `" ` + (filters_element.includes(element) ? `checked` : ``) + `>
            <label for="filter_element_` + element.toLowerCase() + `">` + element + `</label></input>
        </div>`
    }
    filters += `</div>`;



    filters += `<div class="filters_archetypes">
    
    <button id="toggle_all_archetypes_button" class="primary_button" onclick="toggleAllArchetypes()">+</button>
    `;
    for (let archetype_index in ARCHETYPES) {
        let archetype = ARCHETYPES[archetype_index];

        filters += `
        <div class="checkbox_filter">
            <input type="checkbox" onclick="toggleFilterArchetype('` + archetype + `'); resetResult(); searchQuery()" name="filter_archetype_` + archetype.toLowerCase() + `" id="filter_archetype_` + archetype.toLowerCase() + `" ` + (filters_archetype.includes(archetype) ? `checked` : ``) + `>
            <label for="filter_archetype_` + archetype.toLowerCase() + `">` + archetype + `</label></input>
        </div>`
    }
    filters += `</div>`;



    filters += `<div class="filters_viabilities">
    
    <button id="toggle_all_viabilities_button" class="primary_button" onclick="toggleAllViabilities()">+</button>
    `;
    for (let viability_index in VIABILITIES) {
        let viability = VIABILITIES[viability_index];

        filters += `
        <div class="checkbox_filter">
            <input type="checkbox" onclick="toggleFilterViability('` + viability + `'); resetResult(); searchQuery()" name="filter_viability_` + viability.toLowerCase() + `" id="filter_viability_` + viability.toLowerCase() + `" ` + (filters_viability.includes(viability) ? `checked` : ``) + `>
            <label for="filter_viability_` + viability.toLowerCase() + `">` + viability + `</label></input>
        </div>`
    }
    filters += `</div>`;








    extra_filters_container.innerHTML = filters;
}

function toggleExtraFiltersContainer() {
    if (document.getElementById("extra_filters_container").style.display == "none") {
        document.getElementById("extra_filters_container").style.display = "";
    } else {
        document.getElementById("extra_filters_container").style.display = "none";
    }
}

function doFilter(id, team) {
    let pass = true;





    // Debug checks and info
    // if (teams[id] == null) console.log("Teams KO: " + id);

    // if (characters[team.character_1.name] == null) { console.log("character_1 KO: " + team.character_1.name + " in team #" + id); }
    // if (characters[team.character_2.name] == null) { console.log("character_2 KO: " + team.character_2.name + " in team #" + id); }
    // if (characters[team.character_3.name] == null) { console.log("character_3 KO: " + team.character_3.name + " in team #" + id); }
    // for (let character_index in team.character_4.name) {
    //     if (characters[team.character_4.name[character_index]] == null) { console.log("character_4 KO: " + team.character_4.name[character_index] + " in team #" + id); }
    // }

    // if (builds[team.character_1.name][team.character_1.build] == null) { console.log("character_1 build KO: " + team.character_1.build + " in team #" + id); }
    // if (builds[team.character_2.name][team.character_2.build] == null) { console.log("character_2 build KO: " + team.character_2.build + " in team #" + id); }
    // if (builds[team.character_3.name][team.character_3.build] == null) { console.log("character_3 build KO: " + team.character_3.build + " in team #" + id); }
    // for (let character_index in team.character_4.build) {
    //     if (builds[team.character_4.name[character_index]][team.character_4.build[character_index]] == null) { console.log("character_4 build KO: " + team.character_4.build[character_index] + " in team #" + id); }
    // }

    // if (ARCHETYPES.includes(team.archetype) == null) { console.log("archetype KO: " + team.archetype + " in team #" + id); }
    // if (VIABILITIES.includes(team.viability) == null) { console.log("viability KO: " + team.viability + " in team #" + id); }






    if (filterByFavorite(id)) {
        // console.log("filterByFavorite KO" + " in team #" + id);
        pass = false;
    } else if (filterByArchetype(team)) {
        // console.log("filterByArchetype KO" + " in team #" + id);
        pass = false;
    } else if (filterByElement(team)) {
        // console.log("filterByElement KO" + " in team #" + id);
        pass = false;
    } else if (filterByViability(team)) {
        // console.log("filterByViability KO" + " in team #" + id);
        pass = false;
    } else if (filterByUserCharacter(team)) {
        // console.log("filterByUserCharacter KO" + " in team #" + id);
        pass = false;
    }

    return pass;
}

// Filters logic

function filterByFavorite(id) {
    return filter_favorite && favorites[id] == null;
}

function filterByArchetype(team) {
    return !filters_archetype.includes(team.archetype);
}

function filterByElement(team) {
    let hasExcludedElement = false;

    if ((characters[team.character_1.name].element != "None" && !filters_element.includes(characters[team.character_1.name].element)) || (team.character_1.build.element != null && !filters_element.includes(team.character_1.build.element)) || 
        (characters[team.character_2.name].element != "None" && !filters_element.includes(characters[team.character_2.name].element)) || (team.character_2.build.element != null && !filters_element.includes(team.character_2.build.element)) || 
        (characters[team.character_3.name].element != "None" && !filters_element.includes(characters[team.character_3.name].element)) || (team.character_3.build.element != null && !filters_element.includes(team.character_3.build.element))) {

        hasExcludedElement = true;
    } else {
        for (let character_index in team.character_4.name) {

            // console.log("====================================================================");
            // console.log(team);
            // console.log(team.character_4.name);
            // console.log(team.character_4.name[character_index]);
            // console.log(characters[team.character_4.name[character_index]]);
            // console.log(characters[team.character_4.name[character_index]].element);

            if ((characters[team.character_4.name[character_index]].element != "None" && !filters_element.includes(characters[team.character_4.name[character_index]].element)) || (team.character_4.build[character_index].element != null && !filters_element.includes(team.character_4.build[character_index].element))) {
                hasExcludedElement = true;
            }
        }
    }

    return hasExcludedElement;
}

function filterByViability(team) {
    return !filters_viability.includes(team.viability);
}

function filterByUserCharacter(team) {
    let hasNotUserCharacter = false;

    if (filter_characters_owned) {

        hasNotUserCharacter = user_teams[team.character_1.name] == null || user_teams[team.character_2.name] == null || user_teams[team.character_3.name] == null;

        if (!hasNotUserCharacter) {
            for (let character_index in team.character_4.name) {
                if (user_teams[team.character_4.name[character_index]] == null) {
                    hasNotUserCharacter = true;
                }
            }
        }
    }

    return hasNotUserCharacter;
}

// Filters togglers

function toggleFilterFavorite() {
    filter_favorite = !filter_favorite;
}

function toggleAllArchetypes() {

    if (filters_archetype.length > 0) {
        document.getElementById("toggle_all_archetypes_button").innerHTML = "-";

        while (filters_archetype[0] != null) {
            document.getElementById("filter_archetype_" + filters_archetype[0].toLowerCase()).checked = false;
            toggleFilterArchetype(filters_archetype[0]);
        }
    } else {
        document.getElementById("toggle_all_archetypes_button").innerHTML = "+";

        for (let archetype_index in ARCHETYPES) {
            if (!filters_archetype.includes(ARCHETYPES[archetype_index])) {
                document.getElementById("filter_archetype_" + ARCHETYPES[archetype_index].toLowerCase()).checked = true;
                toggleFilterArchetype(ARCHETYPES[archetype_index]);
            }
        }
    }

    resetResult();
    searchQuery();
}

function toggleFilterArchetype(archetype) {

    if (filters_archetype.includes(archetype)) {
        // console.log(archetype + " not filtered");

        const index = filters_archetype.indexOf(archetype);
        if (index > -1) {           // only splice array when item is found
            filters_archetype.splice(index, 1);   // 2nd parameter means remove one item only
        }

    } else {
        // console.log(archetype + " filtered");
        filters_archetype.push(archetype);
    }

    // console.log(filters_archetype);
}

function toggleAllElements() {

    if (filters_element.length > 0) {
        document.getElementById("toggle_all_elements_button").innerHTML = "-";

        while (filters_element[0] != null) {
            document.getElementById("filter_element_" + filters_element[0].toLowerCase()).checked = false;
            toggleFilterElement(filters_element[0]);
        }
    } else {
        document.getElementById("toggle_all_elements_button").innerHTML = "+";

        for (let element_index in ELEMENTS) {
            if (!filters_element.includes(ELEMENTS[element_index])) {
                document.getElementById("filter_element_" + ELEMENTS[element_index].toLowerCase()).checked = true;
                toggleFilterElement(ELEMENTS[element_index]);
            }
        }
    }

    resetResult();
    searchQuery();
}

function toggleFilterElement(element) {

    if (filters_element.includes(element)) {
        // console.log(element + " not filtered");

        const index = filters_element.indexOf(element);
        if (index > -1) {           // only splice array when item is found
            filters_element.splice(index, 1);   // 2nd parameter means remove one item only
        }

    } else {
        // console.log(element + " filtered");
        filters_element.push(element);
    }

    // console.log(filters_element);
}

function toggleAllViabilities() {

    if (filters_viability.length > 0) {
        document.getElementById("toggle_all_viabilities_button").innerHTML = "-";

        while (filters_viability[0] != null) {
            document.getElementById("filter_viability_" + filters_viability[0].toLowerCase()).checked = false;
            toggleFilterViability(filters_viability[0]);
        }
    } else {
        document.getElementById("toggle_all_viabilities_button").innerHTML = "+";

        for (let viability_index in VIABILITIES) {
            if (!filters_viability.includes(VIABILITIES[viability_index])) {
                document.getElementById("filter_viability_" + VIABILITIES[viability_index].toLowerCase()).checked = true;
                toggleFilterViability(VIABILITIES[viability_index]);
            }
        }
    }

    resetResult();
    searchQuery();
}

function toggleFilterViability(viability) {

    if (filters_viability.includes(viability)) {
        // console.log(viability + " not filtered");

        const index = filters_viability.indexOf(viability);
        if (index > -1) {           // only splice array when item is found
            filters_viability.splice(index, 1);   // 2nd parameter means remove one item only
        }

    } else {
        // console.log(viability + " filtered");
        filters_viability.push(viability);
    }

    // console.log(filters_viability);
}

function toggleFilterCharactersOwned() {
    filter_characters_owned = !filter_characters_owned;
}