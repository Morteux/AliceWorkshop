// Artifacts
// https://api.ambr.top/assets/UI/reliquary/UI_RelicIcon_15008_4.png

// Weapons
// https://api.ambr.top/assets/UI/UI_EquipIcon_Claymore_Maria.png


const ELEMENTS = ["Pyro", "Electro", "Hydro", "Cryo", "Anemo", "Geo", "Dendro"];

const ARCHETYPES_NAMES = Object.keys(archetypes);

const VIABILITIES = ["Recommended", "Viable", "For fun", "Unique"];

const STAR_SVG = `<img class="rarity" src="images/rarity/star.svg">`;
// const CHARACTER_NAMES = prerelease_content ? Object.values(characters_order_priority) : arrayDifference(Object.values(characters_order_priority), Object.keys(characters));
const CHARACTER_NAMES = Object.values(characters_order_priority);

const SHORT_NAME_LENGTH = 10;
const MEDIUM_NAME_LENGTH = 16;

const ENTER_KEY_CODE = 'Enter';
const TEAMS_PER_PAGE = 10;

// function getImages() {
//     let chars = {};

//     for (let char of CHARACTER_NAMES) {
//         chars[char] = GenshinDb.talent(char);
//         if(chars[char])
//             chars[char] = chars[char].costs;
//     }

//     chars["traveler anemo"] = GenshinDb.talent("traveler anemo").costs;
//     chars["traveler geo"] = GenshinDb.talent("traveler geo").costs;
//     chars["traveler electro"] = GenshinDb.talent("traveler electro").costs;
//     chars["traveler dendro"] = GenshinDb.talent("traveler dendro").costs;
//     chars["traveler hydro"] = GenshinDb.talent("traveler hydro").costs;

//     let urls = ``;

//     for (let char in chars) {
//         if (chars[char]) {
//             for (let asc in chars[char]) {
//                 let mats = chars[char][asc];
//                 // if(mats[asc])
//                 for (let mat of mats) {
//                     let mat2 = GenshinDb.material(mat.name);
//                     if(mat2)
//                     for (let image in mat2.images) {
//                         urls += `https://api.ambr.top/assets/UI/` + mat2.images[image] + `.png
// `;
//                     }
//                 }
//             }
//         }
//     }

//     console.log(urls);
// }

function teamsNamesToText() {
    let text = ``;

    for (let team in teams) {
        if (teams[team].name != "") {
            text += team + `: ` + teams[team].name + `
`;
        }
    }

    console.log(text);
}

function teamsDescriptionToText() {
    let text = ``;

    for (let team in teams) {
        if (teams[team].description != "") {
            text += team + `: ` + teams[team].description + `
`;
        }
    }

    console.log(text);
}


function replaceTeamsDescriptionsWithNew() {
    for (let desc in teamsdesc) {
        teams[desc].description = teamsdesc[desc];
    }

    console.log(teams);
}

function toFixedIfNecessary(value, dp) {
    return +parseFloat(value).toFixed(dp);
}

function closeWindow(id) {
    document.getElementById(id).style.display = "none";
}

function isMobileDevice() {
    // let hasTouchScreen = false;

    // if ("maxTouchPoints" in navigator) {
    //     hasTouchScreen = navigator.maxTouchPoints > 0;
    // } else if ("msMaxTouchPoints" in navigator) {
    //     hasTouchScreen = navigator.msMaxTouchPoints > 0;
    // } else {
    //     let mQ = window.matchMedia && matchMedia("(pointer:coarse)");
    //     if (mQ && mQ.media === "(pointer:coarse)") {
    //         hasTouchScreen = !!mQ.matches;
    //     } else if ('orientation' in window) {
    //         hasTouchScreen = true; // deprecated, but good fallback
    //     } else {
    //         // Only as a last resort, fall back to user agent sniffing
    //         let UA = navigator.userAgent;
    //         hasTouchScreen = (
    //             /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
    //             /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
    //         );
    //     }
    // }

    // return hasTouchScreen;

    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// resource_url: backup URL in Ambr
// default_url: backup when not exits even in Ambr
// local_filename: possible backup if default_url is undefined too
function useBackupResource(element, resource_url, default_url, local_filename) {
    // console.log("onerror - useBackupResource(" + element + ", " + resource_url + ", " + default_url + ", " + local_filename + ")");

    if (!element.hasAttribute('retried')) {
        element.src = resource_url;
        element.setAttribute('retried', "true");
    } else if (!local_filename) {
        element.src = default_url;
    } else {
        element.src = "images/backup/" + local_filename + ".png";
    }
}

function arrayDifference(array1, array2) {
    return array1.filter(x => !array2.includes(x));
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

function dateDiffInDays(date1, date2) {
    // Convert both dates to timestamps
    var timestamp1 = date1.getTime();
    var timestamp2 = date2.getTime();

    // Calculate the difference in milliseconds
    var timeDiff = Math.abs(timestamp2 - timestamp1);

    // Convert the difference in milliseconds to days
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

    return diffDays;
}

function formatDate(date) {
    // Get day, month, and year
    var day = date.getDate();
    var month = date.getMonth() + 1; // Months are zero indexed
    var year = date.getFullYear();
  
    // Pad day and month with leading zeros if necessary
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
  
    // Return formatted date
    return day + '/' + month + '/' + year;
  }

function getCharacter(name) {
    let character = GenshinDb.character(name);

    if (character == undefined && prerelease_content) {
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

function getTalent(name) {
    let talent = GenshinDb.talent(name);

    if (talent == undefined && prerelease_content) {
        talent = talents[name];
    }

    return talent;
}

function getConstellation(name) {
    let constellation = GenshinDb.constellation(name);

    if (constellation == undefined && prerelease_content) {
        constellation = constellations[name];
    }

    return constellation;
}