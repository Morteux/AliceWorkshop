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

function sortObject(o) {
    var sorted = {},
    key, a = [];

    for (key in o) {
        if (o.hasOwnProperty(key)) {
            a.push(key);
        }
    }

    a.sort();

    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = o[a[key]];
    }
    return sorted;
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function sortTeamsJSON() {
    let total = Object.keys(teams).length;

    let sorted_teams = {};
    let sorted_index = total;

    let unsorted_teams = structuredClone(teams);

    while (total > 0) {
        let max_priority = -1;
        let max_unsorted_index = -1;
        let max_team = -1;

        let unsorted_keys = Object.keys(unsorted_teams);
        let unsorted_index = 0;

        let team = unsorted_teams[unsorted_keys[unsorted_index]];

        while (unsorted_index < unsorted_keys.length) {
            let priority = -1;

            team = unsorted_teams[unsorted_keys[unsorted_index]];

            let priority_1 = parseInt(getKeyByValue(characters_order_priority, team["character_1"]["name"]));
            if (priority_1 > priority) {
                priority = priority_1;
            }

            let priority_2 = parseInt(getKeyByValue(characters_order_priority, team["character_2"]["name"]));
            if (priority_2 > priority) {
                priority = priority_2;
            }

            let priority_3 = parseInt(getKeyByValue(characters_order_priority, team["character_3"]["name"]));
            if (priority_3 > priority) {
                priority = priority_3;
            }

            for (let index_4 in team["character_4"]["name"]) {
                let priority_4 = parseInt(getKeyByValue(characters_order_priority, team["character_4"]["name"][index_4]));
                if (priority_4 > priority) {
                    priority = priority_4;
                }
            }

            if (priority > max_priority) {
                max_priority = priority;
                max_unsorted_index = unsorted_keys[unsorted_index];
                max_team = team;
            }

            ++unsorted_index;
        }

        // console.log(max_unsorted_index + ": new " + sorted_index + ": " + max_priority);

        delete unsorted_teams[max_unsorted_index];
        sorted_teams[sorted_index--] = max_team;

        --total;
    }

    return sortObject(sorted_teams);
}
