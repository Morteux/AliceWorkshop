var sort_value = "";

document.addEventListener("DOMContentLoaded", (event) => {
    // Default sort mode
    sortTeamsMatchedBy('team_id');
});

function sortTeamsMatchedBy(value) {
    console.log("Sort by " + value);
    document.getElementById("result_container").style.display = "none";

    sort_value = value;

    resetResult();

    printTeams();

    document.getElementById("result_container").style.display = "";
}

function orderKeys(keys) {
    if(sort_value == "team_id") {
        keys.sort(function (x, y) {
            return parseInt((x.indexOf("-") == 1 ? x.substring(0, x.indexOf("-")) : x)) - parseInt((y.indexOf("-") == 1 ? y.substring(0, y.indexOf("-")) : y));
        });
    } else if(sort_value == "viability") {
        keys.sort(function (x, y) {
            return VIABILITIES.indexOf(teams_search_matches[x].viability) - VIABILITIES.indexOf(teams_search_matches[y].viability);
        });
    } else if(sort_value == "archetype") {
        keys.sort(function (x, y) {
            return ARCHETYPES.indexOf(teams_search_matches[x].archetype) - ARCHETYPES.indexOf(teams_search_matches[y].archetype);
        });
    }

    return keys;
}