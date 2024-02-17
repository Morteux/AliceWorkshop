document.addEventListener("DOMContentLoaded", (event) => {
    printAllCharacters();
});

function getMenuCharacterHTML(character_data) {
    if (character_data == null) {
        console.log(character_data);
    }

    return `
    <div id="character_check_` + character_data.name + `" class="character_container" onclick="console.log('` + character_data.name + `')">
        <img class="character_icon ` + (character_data.rarity == "5" ? "character_5_stars" : "character_4_stars") + `" src="https://api.ambr.top/assets/UI/` + character_data.images.nameicon + `.png" alt="Character icon for ` + character_data.name + `">
        ` + (character_data.element != "None" ? `<img class="element_icon" src="images/elements/glow_` + character_data.element.toLowerCase() + `.png">` : "") + `
        <div class="rarity_container">` + STAR_SVG + STAR_SVG + STAR_SVG + STAR_SVG + (character_data.rarity == "5" ? STAR_SVG : "") + `</div>
        <div class="character_name ` + (character_data.name.length < SHORT_NAME_LENGTH ? "character_name_short" : (character_data.name.length < MEDIUM_NAME_LENGTH ? "character_name_medium" : "character_name_long")) + `">` + character_data.name + `</div>
    </div>
    `;
}

function printAllCharacters() {
    let menu_characters = "";

    for (let index = Object.keys(characters_order_priority).length - 1; index >= 0; --index) {
        menu_characters += getMenuCharacterHTML(characters[characters_order_priority[index]]);
    }

    document.getElementById("menu_characters").innerHTML = menu_characters;
}