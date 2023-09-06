var filters_element = [];
var filters_archetype = [];
var filters_character = [];

var filter_favorite = false;

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("extra_filters_container").style.display = "none";

    printExtraFilters();
});

function printExtraFilters() {
    filters_element = elements.slice(); // Copy by value, not by reference
    filters_archetype = archetypes.slice(); // Copy by value, not by reference
    filters_character = [];

    extra_filters_container = document.getElementById("extra_filters_container");

    let filters = "";

    filters += `<div class="filters_elements">
    
        <button id="toggle_all_elements_button" class="primary_button" onclick="toggleAllElements()">+</button>
    `;

    for (let element_index in elements) {
        let element = elements[element_index];

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
    for (let archetype_index in archetypes) {
        let archetype = archetypes[archetype_index];

        filters += `
        <div class="checkbox_filter">
            <input type="checkbox" onclick="toggleFilterArchetype('` + archetype + `'); resetResult(); searchQuery()" name="filter_archetype_` + archetype.toLowerCase() + `" id="filter_archetype_` + archetype.toLowerCase() + `" ` + (filters_archetype.includes(archetype) ? `checked` : ``) + `>
            <label for="filter_archetype_` + archetype.toLowerCase() + `">` + archetype + `</label></input>
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

    if (filterByFavorite(id)) {
        pass = false;
    } else if (filterByArchetype(team)) {
        pass = false;
    } else if (filterByElement(team)) {
        pass = false;
    }

    return pass;
}

function filterByFavorite(id) {
    return filter_favorite && isNotFavorite(id);
}

function filterByArchetype(team) {
    return !filters_archetype.includes(team.archetype);
}

function filterByElement(team) {
    let hasExcludedElement = false;

    if (!filters_element.includes(characters[team.character_1.name].element) || !filters_element.includes(characters[team.character_2.name].element) || !filters_element.includes(characters[team.character_3.name].element)) {
        hasExcludedElement = true;
    } else {
        for (let character_index in team.character_4.name) {
            if (!filters_element.includes(characters[team.character_4.name[character_index]].element)) {
                hasExcludedElement = true;
            }
        }
    }

    return hasExcludedElement;
}

// Filters logic

function isNotFavorite(id) {
    return favorites[id] == null;
}

function isTeamUser() {

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

        for (let archetype_index in archetypes) {
            if (!filters_archetype.includes(archetypes[archetype_index])) {
                document.getElementById("filter_archetype_" + archetypes[archetype_index].toLowerCase()).checked = true;
                toggleFilterArchetype(archetypes[archetype_index]);
            }
        }
    }

    resetResult();
    searchQuery();
}

function toggleFilterArchetype(archetype) {

    if (filters_archetype.includes(archetype)) {
        console.log(archetype + " not filtered");

        const index = filters_archetype.indexOf(archetype);
        if (index > -1) {           // only splice array when item is found
            filters_archetype.splice(index, 1);   // 2nd parameter means remove one item only
        }

    } else {
        console.log(archetype + " filtered");
        filters_archetype.push(archetype);
    }

    console.log(filters_archetype);
}

function toggleAllElements() {

    if (filters_element.length > 0) {
        document.getElementById("toggle_all_elements_button").innerHTML = "-";

        while (filters_element[0] != null) {
            // document.getElementById("filter_element_" + filters_element[0].toLowerCase()).click();
            document.getElementById("filter_element_" + filters_element[0].toLowerCase()).checked = false;
            toggleFilterElement(filters_element[0]);
        }
    } else {
        document.getElementById("toggle_all_elements_button").innerHTML = "+";

        for (let element_index in elements) {
            if (!filters_element.includes(elements[element_index])) {
                // document.getElementById("filter_element_" + elements[element_index].toLowerCase()).click();
                document.getElementById("filter_element_" + elements[element_index].toLowerCase()).checked = true;
                toggleFilterElement(elements[element_index]);
            }
        }
    }

    resetResult();
    searchQuery();
}

function toggleFilterElement(element) {

    // if(document.getElementById("filter_element_" + element.toLowerCase()).checked) {
    if (filters_element.includes(element)) {
        console.log(element + " not filtered");

        const index = filters_element.indexOf(element);
        if (index > -1) {           // only splice array when item is found
            filters_element.splice(index, 1);   // 2nd parameter means remove one item only
        }

    } else {
        console.log(element + " filtered");
        filters_element.push(element);
    }

    console.log(filters_element);
}
