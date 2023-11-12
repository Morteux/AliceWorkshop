// function validateJSON() {

//     let json_validator_result = "";

//     json_validator_result += testTeams();
//     json_validator_result += testBuilds();

//     // json_validator_result += testArtifacts();
//     // json_validator_result += testBestTeams();
//     // json_validator_result += testCharactersOrderPriority();
//     // json_validator_result += testCharacters();
//     // json_validator_result += testWeapons();

//     document.getElementById("json_validator_result").value += `
    
//     `;
// }


// function testArtifacts() {

// }

// function testBestTeams() {

// }

// function testBuilds() {
//     let json_validator_result = "";

//     // Test if Aether and Lumine has "element" field in each build

//     for(let index = Object.keys(builds["Aether"]).length - 1; index >= 0; --index) {
//         if( !builds["Aether"][index].hasOwnProperty("element") ) {
//             json_validator_result += "\ntestBuilds: Aether build " + builds["Aether"][index] + " has no element field ";
//         }
//     }

//     for(let index = Object.keys(builds["Lumine"]).length - 1; index >= 0; --index) {
//         if( !builds["Lumine"][index].hasOwnProperty("element") ) {
//             json_validator_result += "\ntestBuilds: Lumine build " + builds["Lumine"][index] + " has no element field ";
//         }
//     }
    
//     for(let index = Object.keys(builds).length - 1; index >= 0; --index) {

//         // Test if each character has at least one build

//         if( Object.keys(builds[index]).length < 1) {
//             json_validator_result += "\ntestBuilds: No build found for " + Object.keys(builds)[index] + " - Index: " + index;
//         }
//     }

//     return (json_validator_result == "" ? "OK - testBuilds" : json_validator_result + "\nKO - testBuilds");
// }

// function testCharactersOrderPriority() {

// }

// function testCharacters() {

// }

// function testTeams() {
//     teams
// }

// function testWeapons() {

// }
