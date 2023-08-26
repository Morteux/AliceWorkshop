var teams_search_matches = [];
var teams_characters_search_matches = new Set();

function searchQuery() {
    // Reset collection for a new search
    teams_search_matches = [];
    teams_characters_search_matches = new Set();

    getTeamsByTextInput();

    printTeams();
}

function getTeamsByTextInput() {
    let search_form_text_input = document.getElementById("search_form_text_input").value;

    console.log("Searching for: " + search_form_text_input);

    for (let team_index in teams) {
        if (search_form_text_input.length != 0 && teams[team_index].name.toUpperCase().includes(search_form_text_input.toUpperCase())) {
            console.log("Coincidence for: " + teams[team_index].name);
            teams_search_matches.push(teams[team_index]);

            teams_characters_search_matches.add(teams[team_index].character_1.name);
            teams_characters_search_matches.add(teams[team_index].character_2.name);
            teams_characters_search_matches.add(teams[team_index].character_3.name);
            teams_characters_search_matches.add(teams[team_index].character_4.name);
        }
    }
}

function printTeams() {
    if (teams_search_matches.length > 0) {
        document.getElementById("result_container").style.display = "";
    }

    let team_output = "";
    document.getElementById("result_container").innerHTML = "";

    for (let team_index in teams_search_matches) {

        team_output = `
        <div id="team_container" class="team_container">
        <div id="team_name_container" class="team_name_container">
            ` + teams_search_matches[team_index].name + `
        </div>
        
        <div class="team_desc_container">
            ` + teams_search_matches[team_index].description + `
        </div>

            <div id="characters_container" class="characters_container">
            ` +
                getCharacterHTML("character_1", teams_search_matches[team_index].character_1, characters[teams_search_matches[team_index].character_1.name]) + 
                getCharacterHTML("character_2", teams_search_matches[team_index].character_2, characters[teams_search_matches[team_index].character_2.name]) + 
                getCharacterHTML("character_3", teams_search_matches[team_index].character_3, characters[teams_search_matches[team_index].character_3.name]) + 
                getCharacterHTML("character_4", teams_search_matches[team_index].character_4, characters[teams_search_matches[team_index].character_4.name]) + 
            `
            </div>
        </div>
        `;

        document.getElementById("result_container").innerHTML += team_output;
    }
}

function getCharacterHTML(id, character_team, character_data) {
    return `
    <div id="` + id + `" class="character_container ` + character_data.name.replaceAll(" ", "_") + `">
        <img class="character_icon" src="` + character_data.images.icon + `" alt="Character icon for ` + character_data.name + `">
        <div class="rarity_container">` + star_svg + star_svg + star_svg + star_svg + (character_data.rarity == "5" ? star_svg : "") + `</div>
        <div class="character_name">` + character_data.name + `</div>
    </div>`;
}