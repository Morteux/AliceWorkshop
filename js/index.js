// Portraits
// https://muakasan.github.io/genshin-portraits/index.html

// Artifacts
// https://api.ambr.top/assets/UI/reliquary/UI_RelicIcon_15008_4.png

// Weapons
// https://api.ambr.top/assets/UI/UI_EquipIcon_Claymore_Maria.png

// Splash arts
// https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Klee.png

// Elements
// https://api.ambr.top/assets/UI/UI_Buff_Element_Ice.png
// https://api.ambr.top/assets/UI/UI_Buff_Element_Grass.png




// A single rarity's star in SVG format
const ELEMENTS = ["Pyro", "Electro", "Hydro", "Cryo", "Anemo", "Geo", "Dendro"];

const ARCHETYPES_NAMES = ["MonoGeo", "MonoHydro", "MonoCryo", "MonoPyro", "MonoElectro", "MonoAnemo", "Hypercarry", "Freeze", "National", "Vaporize", "Overvape", "Taser", "Soup", "Melt", "Aggravate", "Spread", "Bloom", "Burgeon", "Oven", "Curry", "Sauté", "Fridge", "Salad", "Airfryer", "Hyperbloom", "Quickbloom", "HyperFridge", "Overload", "Bain-Marie"];

const VIABILITIES = ["Meta", "Viable", "Troll", "Unique"];

const STAR_SVG = `<img class="rarity" src="images/rarity/star.svg">`;
const CHARACTER_NAMES = Object.keys(characters);

const SHORT_NAME_LENGTH = 10;
const MEDIUM_NAME_LENGTH = 16;

const ENTER_KEY_CODE = 'Enter';
const TEAMS_PER_PAGE = 10;

function copyToClipboardFromElementValue(id) {

    // Get the text field
    let copyText = document.getElementById(id);

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

function copyTextToClipboard(copyText) {
    // Copy the text from parameter
    navigator.clipboard.writeText(copyText);
}

// When the user clicks on <div>, open the popup
function showCopiedPopup(popup_id) {
    var popup = document.getElementById(popup_id);
    popup.classList.toggle("show");

    
    setTimeout(function(){
        popup.classList.toggle("hidden");
      }, 2000);
}

