var teams_search_matches = [];
var teams_characters_search_matches = new Set();
var teams_characters_json = [];

function searchQuery() {
    // Reset collection for a new search
    teams_search_matches = [];
    teams_characters_search_matches = new Set();
    teams_characters_json = [];

    getTeamsByTextInput();

    console.log(teams_search_matches);
    console.log(teams_characters_search_matches);

    printTeams();

    printCharactersDataFromQuerys();
}

function getTeamsByTextInput() {
    let search_form_text_input = document.getElementById("search_form_text_input").value;

    console.log("Searching for: " + search_form_text_input);

    for (let team_index in teams) {
        if (search_form_text_input.length != 0 && teams[team_index].name.toUpperCase().includes(search_form_text_input.toUpperCase())) {
            console.log("Coincidence for: " + teams[team_index].name);
            teams_search_matches.push(teams[team_index]);

            teams_characters_search_matches.add(teams[team_index].character_1);
            teams_characters_search_matches.add(teams[team_index].character_2);
            teams_characters_search_matches.add(teams[team_index].character_3);
            teams_characters_search_matches.add(teams[team_index].character_4);
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

        console.log("team_index for: " + teams_search_matches[team_index].name);

        team_output = `
        <div id="team_container" class="team_container">
            <div id="team_name_container" class="team_name_container">
                ` + teams_search_matches[team_index].name + `
            </div>

            <div id="characters_container" class="characters_container">
                <div id="character_1" class="character_container ` + teams_search_matches[team_index].character_1.replaceAll(" ", "_") + `">
                    ` + teams_search_matches[team_index].character_1 + `
                </div>
                <div id="character_2" class="character_container ` + teams_search_matches[team_index].character_2.replaceAll(" ", "_") + `">
                    ` + teams_search_matches[team_index].character_2 + `
                </div>
                <div id="character_3" class="character_container ` + teams_search_matches[team_index].character_3.replaceAll(" ", "_") + `">
                    ` + teams_search_matches[team_index].character_3 + `
                </div>
                <div id="character_4" class="character_container ` + teams_search_matches[team_index].character_4.replaceAll(" ", "_") + `">
                    ` + teams_search_matches[team_index].character_4 + `
                </div>
            </div>
        </div>
        `;

        document.getElementById("result_container").innerHTML += team_output;
    }
}

function printCharactersDataFromQuerys() {
    teams_characters_search_matches.forEach((character) => {
        $.ajax({
            url: "https://genshin-db-api.vercel.app/api/characters?query=" + character,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                console.log("Character successfully retrieved: " + character);
                teams_characters_json.push(character);

                for (let item of document.getElementsByClassName(character.replaceAll(" ", "_"))) {
                    item.style.backgroundImage = "url('" + data.images.icon + "')";
                }
            },
            error: function (data) {
                console.log(data);
                console.log("Error retrieving the character: " + character);
            }
        });
    });

    console.log(teams_characters_json);
}