const genshindb = require('genshin-db');

var teams_search_matches = [];
var teams_characters_search_matches = [];
var teams_characters_json = [];

function search_query() {
    teams_search_matches = [];
    teams_characters_search_matches = [];
    teams_characters_json = [];

    let search_form_text_input = document.getElementById("search_form_text_input").value;

    console.log("Searching for: " + search_form_text_input);

    for (let team_index in teams) {
        if (search_form_text_input.length != 0 && teams[team_index].name.toUpperCase().includes(search_form_text_input.toUpperCase())) {
            console.log("Coincidence for: " + teams[team_index].name);
            teams_search_matches.push(teams[team_index]);
        }
    }

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
                <div id="character_1" class="character_container">
                    ` + teams_search_matches[team_index].character_1 + `
                </div>
                <div id="character_2" class="character_container">
                    ` + teams_search_matches[team_index].character_2 + `
                </div>
                <div id="character_3" class="character_container">
                    ` + teams_search_matches[team_index].character_3 + `
                </div>
                <div id="character_4" class="character_container">
                    ` + teams_search_matches[team_index].character_4 + `
                </div>
            </div>
        </div>
        `;

        document.getElementById("result_container").innerHTML += team_output;
    }

    // $.ajax({
    //     url: "https://genshin-db-api.vercel.app/api/characters?query=Yelan",
    //     type: 'GET',
    //     dataType: 'json', // added data type
    //     success: function(data) {
    //         console.log(data);
    //         alert(data);
    //     },
    //     error: function(data) {
    //         console.log(data);
    //         alert("Error");
    //     }
    // });

}