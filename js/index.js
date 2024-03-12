// Artifacts
// https://api.ambr.top/assets/UI/reliquary/UI_RelicIcon_15008_4.png

// Weapons
// https://api.ambr.top/assets/UI/UI_EquipIcon_Claymore_Maria.png


const ELEMENTS = ["Pyro", "Electro", "Hydro", "Cryo", "Anemo", "Geo", "Dendro"];

const ARCHETYPES_NAMES = Object.keys(archetypes);

const VIABILITIES = ["Meta", "Viable", "Offmeta", "Unique"];

const STAR_SVG = `<img class="rarity" src="images/rarity/star.svg">`;
const CHARACTER_NAMES = Object.values(characters_order_priority);

const SHORT_NAME_LENGTH = 10;
const MEDIUM_NAME_LENGTH = 16;

const ENTER_KEY_CODE = 'Enter';
const TEAMS_PER_PAGE = 10;

function toFixedIfNecessary(value, dp) {
    return +parseFloat(value).toFixed(dp);
}

function useBackupResource(element, resource_url) {
    element.src = resource_url;
}

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

    setTimeout(function () {
        popup.classList.toggle("hidden");
    }, 2000);
}

function isToday(monthDay) {
    // Parse the month and day from the input string
    const [month, day] = monthDay.split('/').map(Number);

    // Get the current date
    const currentDate = new Date();

    // Create a new date object for the specified month and day
    const inputDate = new Date(currentDate.getFullYear(), month - 1, day);

    // Compare the input date with the current date (ignoring the year)
    return inputDate.getMonth() === currentDate.getMonth() &&
        inputDate.getDate() === currentDate.getDate();
}

function getCharacter(name) {
    let character = GenshinDb.character(name);

    if (character == undefined) {
        character = characters[name];
    }

    return character;
}

function getWeapon(name) {
    let weapon = GenshinDb.weapon(name);

    if (weapon == undefined) {
        weapon = weapons[name];
    }

    return weapon;
}