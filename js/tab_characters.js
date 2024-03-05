document.addEventListener("DOMContentLoaded", (event) => {
    printAllCharacters();
});

function getMenuCharacterHTML(character_data) {
    if (character_data == null) {
        console.log(character_data);
    }

    return `
    <div id="character_` + character_data.name + `" class="character_container" onclick="printCharacterInfoHTML('` + character_data.name + `')">
        <img class="character_icon ` + (character_data.rarity == "5" ? "character_5_stars" : "character_4_stars") + `" src="https://api.ambr.top/assets/UI/` + character_data.images.filename_icon + `.png" alt="Character icon for ` + character_data.name + `">
        ` + (character_data.elementText != "None" ? `<img class="element_icon" src="images/elements/glow_` + character_data.elementText.toLowerCase() + `.png">` : "") + `
        <div class="rarity_container">` + STAR_SVG + STAR_SVG + STAR_SVG + STAR_SVG + (character_data.rarity == "5" ? STAR_SVG : "") + `</div>
        <div class="character_name ` + (character_data.name.length < SHORT_NAME_LENGTH ? "character_name_short" : (character_data.name.length < MEDIUM_NAME_LENGTH ? "character_name_medium" : "character_name_long")) + `">` + character_data.name + `</div>
    </div>
    `;
}

function printAllCharacters() {
    let menu_characters = "";

    for (let index = Object.keys(characters_order_priority).length - 1; index >= 0; --index) {
        menu_characters += getMenuCharacterHTML(getCharacter(characters_order_priority[index]));
    }

    document.getElementById("menu_characters").innerHTML = menu_characters;
}

function printCharacterInfoHTML(character_name) {
    let character_data = getCharacter(character_name);
    console.log(character_name);
    document.getElementById("menu_characters").style.display = "none";
    
    document.getElementById("menu_characters_info").innerHTML = `
    <img class="" src="https://api.ambr.top/assets/UI/` + character_data.images.filename_gachaSplash + `.png">
    <img class="" src="https://api.ambr.top/assets/UI/` + character_data.images.filename_icon + `.png">
    <img class="" src="https://api.ambr.top/assets/UI/` + character_data.images.filename_sideIcon + `.png">
    `;
}

function resetMenuCharacters() {
    document.getElementById("menu_characters").style.display = "";
    document.getElementById("menu_characters_info").innerHTML = "";
}