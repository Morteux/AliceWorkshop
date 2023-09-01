var filters = new Map();

var include_element = [];
var exclude_element = [];

var include_archetype = [];
var exclude_archetype = [];

var include_character = [];
var exclude_character = [];

function toggleFilter(filter_name, filter_function) {

    if(filters.has(filter_name)) {
        filters.delete(filter_name);
    } else {
        filters.set(filter_name, filter_function);
    }

}

function filter(id, team, character_4_int_index) {
    let pass = true;

    if(document.getElementById("favorites_switch").checked && isNotFavorite(id)) {
        pass = false;
    }

    return pass;
}

// Filters togglers



// Filters logic

function isNotFavorite(id) {
    return favorites[id] == null;
}

function isTeamUser() {
    
}

function toggleElement() {
    
}

function toggleArchetype() {
    
}

function toggleCharacter() {
    
}