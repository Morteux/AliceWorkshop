const DAYS_BACKGROUND_COLOR = "rgba(247,247,247,255)";

var character_banner_stats = {};

var menu_extra_current_banners = ["Twirling Lotus 3.png", "In the Name of the Rosula 2.png"];

var menu_extra_tabs = ["menu_extra_banners", "menu_extra_birthdays_calendar"];

var permanent_characters = ["Aether", "Lumine", "Jean", "Diluc", "Qiqi", "Mona", "Aloy", "Amber", "Kaeya", "Lisa"];

var permanent_characters_with_banner = ["Keqing", "Tighnari", "Dehya"];

var prerelease_characters = Object.keys(characters);

var actual_version = "1.0";
var actual_first_date = "";
var actual_last_date = "1/1/1960";

var character_4_waiting_days_min = 0;
var character_4_waiting_days_max = 0;
var character_4_waiting_days_mean = 0;

var character_5_waiting_days_min = 0;
var character_5_waiting_days_max = 0;
var character_5_waiting_days_mean = 0;

var character_4_reruns_min = 0;
var character_4_reruns_max = 0;
var character_4_reruns_mean = 0;

var character_5_reruns_min = 0;
var character_5_reruns_max = 0;
var character_5_reruns_mean = 0;

var calendar_date = new Date();
calendar_date.setDate(1);

const BANNER_DURATION = 20; // In days

const MIN_CALENDAR_DATE = new Date("2020-09");

document.addEventListener("DOMContentLoaded", (event) => {
    getActualDates();

    printCurrentBanners();

    printCharactersRerunsStats();

    // Team user configuration
    for (let menu_index in menu_extra_tabs) {
        // Set on click event listener for each tab button
        if (document.getElementById(menu_extra_tabs[menu_index] + "_button")) {
            document.getElementById(menu_extra_tabs[menu_index] + "_button").addEventListener('click', function (event) {
                setMenuExtraTabActive(document.getElementById(menu_extra_tabs[menu_index]), document.getElementById(menu_extra_tabs[menu_index] + "_button"));
            });
        }
    }

    // Set calendar month input default to today
    document.getElementById("calendar_month").value = new Date().getFullYear() + "-" + ((new Date().getMonth() + 1) < 10 ? "0" : "") + (new Date().getMonth() + 1);

    printCalendar();

    // Hide all tabs. Activate default tab
    setMenuExtraTabActive(document.getElementById("menu_extra_banners"), document.getElementById("menu_extra_banners_button"));
});

function reorderBannerJSON() {
    let ind = 0;
    let ab = {};
    for (banner in character_banners) {
        ab[ind++] = character_banners[banner];
    }
    console.log(ab);
}

function getActualDates() {
    actual_first_date = character_banners["1"].start_date;

    for (banner in character_banners) {

        if (actual_version < character_banners[banner].version) {
            actual_version = character_banners[banner].version;
        }

        if (new Date(actual_last_date) < new Date(character_banners[banner].end_date)) {
            actual_last_date = character_banners[banner].end_date;
        }
    }
}

function printCurrentBanners() {
    let menu_extra_current_banners_HTML = document.getElementById("menu_extra_current_banners");
    menu_extra_current_banners_HTML.innerHTML = "";

    for (banner_img of menu_extra_current_banners) {
        menu_extra_current_banners_HTML.innerHTML += `<img class="" src="images/banners/` + banner_img + `" alt="Banner ` + banner_img + `">`
    }
}

function setMenuExtraTabActive(menu_tab, menu_tab_button) {
    if (!menu_tab.classList.contains('active_tab_button')) {
        for (let tab_index in menu_extra_tabs) {
            if (document.getElementById(menu_extra_tabs[tab_index]) && document.getElementById(menu_extra_tabs[tab_index] + "_button")) {
                disableMenuTab(document.getElementById(menu_extra_tabs[tab_index]), document.getElementById(menu_extra_tabs[tab_index] + "_button"));
            }
        }

        activateMenuTab(menu_tab, menu_tab_button);
    }
}

function getCharacterBannerHTML(character_data, character_banner_stats) {
    if (character_data) {

        let class_reruns = "";
        let class_waiting_days = "";

        if (character_data.rarity == 4) {

            // Reruns
            let diff_count_1 = Math.abs(character_banner_stats.count - character_4_reruns_min);
            let diff_count_2 = Math.abs(character_banner_stats.count - character_4_reruns_mean);
            let diff_count_3 = Math.abs(character_banner_stats.count - character_4_reruns_max);

            // Find min distance
            let diff_min_count = Math.min(diff_count_1, diff_count_2, diff_count_3);

            // Get nearest int
            if (diff_min_count === diff_count_1) {
                class_reruns = "low_mean";
            } else if (diff_min_count === diff_count_2) {
                class_reruns = "medium_mean";
            } else {
                class_reruns = "high_mean";
            }

            // Waiting days
            let diff_waiting_days_1 = Math.abs(character_banner_stats.waiting_days - character_4_waiting_days_min);
            let diff_waiting_days_2 = Math.abs(character_banner_stats.waiting_days - character_4_waiting_days_mean);
            let diff_waiting_days_3 = Math.abs(character_banner_stats.waiting_days - character_4_waiting_days_max);

            // Find min distance
            let diff_min_waiting_days = Math.min(diff_waiting_days_1, diff_waiting_days_2, diff_waiting_days_3);

            // Get nearest int
            if (diff_min_waiting_days === diff_waiting_days_1) {
                class_waiting_days = "high_mean";
            } else if (diff_min_waiting_days === diff_waiting_days_2) {
                class_waiting_days = "medium_mean";
            } else {
                class_waiting_days = "low_mean";
            }

        } else {

            // Reruns
            let diff_count_1 = Math.abs(character_banner_stats.count - character_5_reruns_min);
            let diff_count_2 = Math.abs(character_banner_stats.count - character_5_reruns_mean);
            let diff_count_3 = Math.abs(character_banner_stats.count - character_5_reruns_max);

            // Find min distance
            let diff_min_count = Math.min(diff_count_1, diff_count_2, diff_count_3);

            // Get nearest int
            if (diff_min_count === diff_count_1) {
                class_reruns = "low_mean";
            } else if (diff_min_count === diff_count_2) {
                class_reruns = "medium_mean";
            } else {
                class_reruns = "high_mean";
            }

            // Waiting days
            let diff_waiting_days_1 = Math.abs(character_banner_stats.waiting_days - character_5_waiting_days_min);
            let diff_waiting_days_2 = Math.abs(character_banner_stats.waiting_days - character_5_waiting_days_mean);
            let diff_waiting_days_3 = Math.abs(character_banner_stats.waiting_days - character_5_waiting_days_max);

            // Find min distance
            let diff_min_waiting_days = Math.min(diff_waiting_days_1, diff_waiting_days_2, diff_waiting_days_3);

            // Get nearest int
            if (diff_min_waiting_days === diff_waiting_days_1) {
                class_waiting_days = "high_mean";
            } else if (diff_min_waiting_days === diff_waiting_days_2) {
                class_waiting_days = "medium_mean";
            } else {
                class_waiting_days = "low_mean";
            }
        }

        return `
        <div id="character_extra_banner_` + character_data.name + `" class="character_extra_banner">
            <div class="character_container">
                <img class="character_icon character_` + character_data.rarity + `_stars" src="images/characters/` + character_data.images.filename_icon + `.png" alt="Character icon for ` + character_data.name + `" onerror="useBackupResource(this, 'https://api.ambr.top/assets/UI/` + character_data.images.filename_icon + `.png', 'images/icons/user.png', '` + character_data.name + `')" style="background-image: url('images/regions/Emblem_` + character_data.region + `_` + (character_data.rarity == "5" ? `White` : `Night`) + `_Opacity_05.png');">
                ` + (character_data.elementText != "None" ? `<img class="element_icon" src="images/elements/glow_` + character_data.elementText.toLowerCase() + `.png">` : "") + `   
                <div class="rarity_container">` + STAR_SVG + STAR_SVG + STAR_SVG + STAR_SVG + (character_data.rarity == "5" ? STAR_SVG : "") + `</div>
                <div class="character_name ` + (character_data.name.length < SHORT_NAME_LENGTH ? "character_name_short" : (character_data.name.length < MEDIUM_NAME_LENGTH ? "character_name_medium" : "character_name_long")) + `">` + character_data.name + `</div>
            </div>

            <div class="character_banner_stats">
        
                <div class="character_banner_date">
                    <div class="">
                        ` + (!isCharacterPreRelease(character_data.name) ? `Last banner` : `May release`) + `
                    </div>
                    <div class="">
                        ` + formatDate(new Date(character_banner_stats.last_date)) + `
                    </div>
                </div>

                <div class="` + class_reruns + `">
                    ` + character_banner_stats.count + ` reruns
                </div>

                <div class="waiting_days ` + class_waiting_days + `">
                    ` + character_banner_stats.waiting_days + ` days
                </div>

            </div>
        </div>
        `;
    } else {
        return ``;
    }
}

function updateCharacterBannerStats(character_name, banner) {

    if (character_banner_stats[character_name]) {

        // If is exclusive character event wish banner and it is a 5 star character and it is not already set (force set only first banner name found to prevent sufix numbers)
        if (banner.characters["5"].length == 1 && banner.characters["5"].includes(character_name) && character_banner_stats[character_name].event_wish_banner_name == "") {
            character_banner_stats[character_name].event_wish_banner_name = banner.name;
        }

        if (character_banner_stats[character_name].last_version_checked != banner.version) {
            character_banner_stats[character_name].count += 1;
            character_banner_stats[character_name].last_version_checked = banner.version;
        }

        // Released in a previous version
        if (character_banner_stats[character_name].first_version > banner.version) {
            character_banner_stats[character_name].first_version = banner.version;
        }

        // Exists a previous banner
        if (new Date(character_banner_stats[character_name].first_date) > new Date(banner.start_date)) {
            character_banner_stats[character_name].first_date = banner.start_date;
        }

        // Exists a posterior banner
        if (new Date(character_banner_stats[character_name].last_date) < new Date(banner.start_date)) {
            character_banner_stats[character_name].last_date = banner.start_date;
        }
    } else {
        console.log("Character with name '" + character_name + "' not found");
    }
}

function calculateCharactersRerunsStats() {
    for (character in CHARACTER_NAMES) {
        // FILTER HERE
        if (!permanent_characters.includes(CHARACTER_NAMES[character])) {
            // Initialize character_banner_stats entry for each filtered character
            character_banner_stats[CHARACTER_NAMES[character]] = { "event_wish_banner_name": "", "first_version": actual_version, "first_date": actual_last_date, "last_date": actual_first_date, "count": 0, "waiting_days": 0, "last_version_checked": "" };
        }
    }

    for (banner in character_banners) {
        // Update all 5 star characters
        for (character_5 in character_banners[banner].characters["5"]) {
            updateCharacterBannerStats(character_banners[banner].characters["5"][character_5], character_banners[banner]);
        }

        // Update all 4 star characters
        for (character_4 in character_banners[banner].characters["4"]) {
            updateCharacterBannerStats(character_banners[banner].characters["4"][character_4], character_banners[banner]);
        }
    }

    for (character in character_banner_stats) {
        // Prerelease character has 0 count
        if (character_banner_stats[character].count > 0) {
            // First banner does not count as rerun
            character_banner_stats[character].count--;
        }

        character_banner_stats[character].waiting_days = character_banner_stats[character].last_date ? dateDiffInDays(new Date(character_banner_stats[character].last_date), new Date()) : 0;
    }
}

function calculateWaitingDays() {
    character_4_waiting_days_min = 9007199254740991;
    character_4_waiting_days_max = 0;
    character_4_waiting_days_mean = [];

    character_5_waiting_days_min = 9007199254740991;
    character_5_waiting_days_max = 0;
    character_5_waiting_days_mean = [];

    for (character in character_banner_stats) {
        if (!permanent_characters.includes(character) && !permanent_characters_with_banner.includes(character) && !prerelease_characters.includes(character)) {
            let character_data = getCharacter(character);

            if (character_data) {
                if (character_data.rarity == 4) {

                    if (character_4_waiting_days_min > character_banner_stats[character].waiting_days) {
                        character_4_waiting_days_min = character_banner_stats[character].waiting_days;
                    }

                    if (character_4_waiting_days_max < character_banner_stats[character].waiting_days) {
                        character_4_waiting_days_max = character_banner_stats[character].waiting_days;
                    }

                    character_4_waiting_days_mean.push(character_banner_stats[character].waiting_days);

                } else {

                    if (character_5_waiting_days_min > character_banner_stats[character].waiting_days) {
                        character_5_waiting_days_min = character_banner_stats[character].waiting_days;
                    }

                    if (character_5_waiting_days_max < character_banner_stats[character].waiting_days) {
                        character_5_waiting_days_max = character_banner_stats[character].waiting_days;
                    }

                    character_5_waiting_days_mean.push(character_banner_stats[character].waiting_days);

                }
            }
        }
    }

    let sum_4 = character_4_waiting_days_mean.reduce((a, b) => a + b, 0);
    character_4_waiting_days_mean = (sum_4 / character_4_waiting_days_mean.length) || 0;

    let sum_5 = character_5_waiting_days_mean.reduce((a, b) => a + b, 0);
    character_5_waiting_days_mean = (sum_5 / character_5_waiting_days_mean.length) || 0;
}

function calculateRerunsDays() {
    character_4_reruns_min = 9007199254740991;
    character_4_reruns_max = 0;
    character_4_reruns_mean = [];

    character_5_reruns_min = 9007199254740991;
    character_5_reruns_max = 0;
    character_5_reruns_mean = [];

    for (character in character_banner_stats) {
        if (!permanent_characters.includes(character) && !permanent_characters_with_banner.includes(character)) {

            let character_data = getCharacter(character);

            if (character_data) {

                if (getCharacter(character).rarity == 4) {

                    if (character_4_reruns_min > character_banner_stats[character].count) {
                        character_4_reruns_min = character_banner_stats[character].count;
                    }

                    if (character_4_reruns_max < character_banner_stats[character].count) {
                        character_4_reruns_max = character_banner_stats[character].count;
                    }

                    character_4_reruns_mean.push(character_banner_stats[character].count);

                } else {

                    if (character_5_reruns_min > character_banner_stats[character].count) {
                        character_5_reruns_min = character_banner_stats[character].count;
                    }

                    if (character_5_reruns_max < character_banner_stats[character].count) {
                        character_5_reruns_max = character_banner_stats[character].count;
                    }

                    character_5_reruns_mean.push(character_banner_stats[character].count);

                }
            }
        }
    }

    let sum_4 = character_4_reruns_mean.reduce((a, b) => a + b, 0);
    character_4_reruns_mean = (sum_4 / character_4_reruns_mean.length) || 0;

    let sum_5 = character_5_reruns_mean.reduce((a, b) => a + b, 0);
    character_5_reruns_mean = (sum_5 / character_5_reruns_mean.length) || 0;
}

function printCharactersRerunsStats() {
    document.getElementById("menu_extra_characters_banners").innerHTML = "";

    let characters_banners_HTML = ``;

    calculateCharactersRerunsStats();

    calculateWaitingDays();
    calculateRerunsDays();

    let character_banner_stats_aux = structuredClone(character_banner_stats);

    while (Object.keys(character_banner_stats_aux).length > 0) {
        let most_waiting_days = -1;
        let character_most_waiting_days = "";

        for (character in character_banner_stats_aux) {
            // SORT HERE
            if (most_waiting_days < character_banner_stats_aux[character].waiting_days) {
                most_waiting_days = character_banner_stats_aux[character].waiting_days;
                character_most_waiting_days = character;
            }
        }

        // Calculate release date for prerelease characters
        if (isCharacterPreRelease(character_most_waiting_days)) {

            character_banner_stats_aux[character_most_waiting_days].first_date = actual_last_date;

            let new_actual_last_date = new Date(actual_last_date);
            new_actual_last_date.setDate(new_actual_last_date.getDate() + BANNER_DURATION);

            // Extract month, day, and year components from the date
            var month = new_actual_last_date.getMonth() + 1; // Adding 1 because months are zero-based
            var day = new_actual_last_date.getDate();
            var year = new_actual_last_date.getFullYear();

            // Format the components into mm/dd/yyyy
            var formattedDate = month.toString().padStart(2, '0') + '/' + day.toString().padStart(2, '0') + '/' + year;

            // character_banner_stats_aux[character_most_waiting_days].last_date = formattedDate;
            character_banner_stats_aux[character_most_waiting_days].last_date = actual_last_date;
            character_banner_stats_aux[character_most_waiting_days].waiting_days = 0;
        }

        if (!permanent_characters_with_banner.includes(character_most_waiting_days)) {
            characters_banners_HTML += getCharacterBannerHTML(getCharacter(character_most_waiting_days), character_banner_stats_aux[character_most_waiting_days]);
        }

        delete character_banner_stats_aux[character_most_waiting_days];
    }

    document.getElementById("menu_extra_characters_banners").innerHTML += `
        <div>
            <fieldset class="character_banner_fieldset character_banner_fieldset_4">

                <div>Waiting Days Min: ` + character_4_waiting_days_min + `</div>
                <div>Waiting Days Max: ` + character_4_waiting_days_max + `</div>
                <div>Waiting Days Mean: ` + Math.round((character_4_waiting_days_mean + Number.EPSILON) * 100) / 100 + `</div>

                <div>Reruns Min: ` + character_4_reruns_min + `</div>
                <div>Reruns Max: ` + character_4_reruns_max + `</div>
                <div>Reruns Mean: ` + Math.round((character_4_reruns_mean + Number.EPSILON) * 100) / 100 + `</div>
            </fieldset>

            <fieldset class="character_banner_fieldset character_banner_fieldset_5">

                <div>Waiting Days Min: ` + character_5_waiting_days_min + `</div>
                <div>Waiting Days Max: ` + character_5_waiting_days_max + `</div>
                <div>Waiting Days Mean: ` + Math.round((character_5_waiting_days_mean + Number.EPSILON) * 100) / 100 + `</div>
                
                <div>Reruns Min: ` + character_5_reruns_min + `</div>
                <div>Reruns Max: ` + character_5_reruns_max + `</div>
                <div>Reruns Mean: ` + Math.round((character_5_reruns_mean + Number.EPSILON) * 100) / 100 + `</div>
            </fieldset>
        </div>
    `;
    document.getElementById("menu_extra_characters_banners").innerHTML += characters_banners_HTML;
}

function resetCalendarHTML() {
    document.getElementById("menu_extra_birthdays_calendar_month").innerHTML = `
    <div id="birthday_month_title" class="birthday_month_title"></div>
    <div id="birthday_days_columns" class="birthday_days_columns">
        <div id="birthday_column_1" class="birthday_column"><div class="birthday_column_title">MON</div></div>
        <div id="birthday_column_2" class="birthday_column"><div class="birthday_column_title">TUE</div></div>
        <div id="birthday_column_3" class="birthday_column"><div class="birthday_column_title">WED</div></div>
        <div id="birthday_column_4" class="birthday_column"><div class="birthday_column_title">THU</div></div>
        <div id="birthday_column_5" class="birthday_column"><div class="birthday_column_title">FRI</div></div>
        <div id="birthday_column_6" class="birthday_column"><div class="birthday_column_title">SAT</div></div>
        <div id="birthday_column_0" class="birthday_column"><div class="birthday_column_title">SUN</div></div>
    </div>`;
}

function getMonthlyCharacter() {
    let characters = [];

    for (let index = 0; index < Object.keys(characters_order_priority).length; index++) {
        let next_character = getCharacter(characters_order_priority[index]);

        if (new Date(next_character.birthdaymmdd + "/" + (calendar_date.getFullYear())).getMonth() == calendar_date.getMonth()) {

            // If character released after game release
            if (character_banner_stats[next_character.name]) {

                // If character released before calendar_date
                if (new Date(character_banner_stats[next_character.name].first_date).getTime() <= calendar_date.getTime()) {
                    characters.push(next_character);
                }
            }
            // If character released with game release
            else {
                characters.push(next_character);
            }
        }
    }

    let character;

    // If there are no characters in month, use selected traveler
    if (characters.length > 0) {
        character = characters[getRandomInt(characters.length)];
    } else {
        character = getCharacter(traveler);
    }

    return character;
}

function getBirthdaysDates() {
    let monthDate = calendar_date;
    let birthdaysInMonth = {};

    for (let character_name of CHARACTER_NAMES) {
        let character = getCharacter(character_name);
        let character_birthday = new Date(character.birthdaymmdd);

        if (character_birthday.getMonth() == monthDate.getMonth()) {

            // If character released after game release
            if (character_banner_stats[character_name]) {

                // If character released before calendar_date
                if (new Date(character_banner_stats[character_name].first_date).getTime() <= monthDate.getTime()) {

                    // Initialize array if needed
                    if (!birthdaysInMonth.hasOwnProperty(character_birthday.getDate())) {
                        birthdaysInMonth[character_birthday.getDate()] = [];
                    }

                    birthdaysInMonth[character_birthday.getDate()].push(character_name);
                }
            }
            // If character released with game release
            else {

                // Initialize array if needed
                if (!birthdaysInMonth.hasOwnProperty(character_birthday.getDate())) {
                    birthdaysInMonth[character_birthday.getDate()] = [];
                }

                birthdaysInMonth[character_birthday.getDate()].push(character_name);
            }
        }
    }

    return birthdaysInMonth;
}

function printMonthName() {
    let month_title = document.getElementById("birthday_month_title");
    month_title.innerHTML = capitalizeFirstLetter(calendar_date.toLocaleString('default', { month: 'long' }));
}

function printBackground(character_card) {
    let menu_calendar = document.getElementById("menu_extra_birthdays_calendar_month");
    menu_calendar.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(247, 247, 247, 0.9) 80%), url('images/characters/" + character_card + ".jpg')";
}

function printDays(birthdaysInMonth) {

    let monthDate = calendar_date;
    monthDate.setDate(1); // Set day to first day in month

    let firstDayInMonth = monthDate.getDay();

    // Set day to last day in month
    monthDate.setMonth(monthDate.getMonth() + 1);
    monthDate.setDate(0);

    let countDaysInMonth = monthDate.getDate();

    let actualDay = firstDayInMonth;

    // Set last days from previous month
    let lastMonthDate = monthDate;
    lastMonthDate.setDate(0);

    let lastDayInLastMonth = lastMonthDate.getDate();

    // Print previous month days

    for (let index = (actualDay != 0 ? actualDay : 7) - 1; index > 0; --index) {
        document.getElementById("birthday_column_" + index).innerHTML += "<div class='previous_month_days'>" + lastDayInLastMonth + "</div>";
        --lastDayInLastMonth;
    }

    // Print actual month days and character emojis
    for (let index = 1; index <= countDaysInMonth; index++) {
        if (birthdaysInMonth.hasOwnProperty(index)) {
            let character_index = getRandomInt(birthdaysInMonth[index].length);
            let character_name = birthdaysInMonth[index][character_index];

            if (characters_emojis[character_name]) {
                document.getElementById("birthday_column_" + actualDay).innerHTML += `<img class="calendar_img" src="images/emojis/` + characters_emojis[character_name] + `">`;
            } else {
                let character = getCharacter(character_name);
                document.getElementById("birthday_column_" + actualDay).innerHTML += `<img class="calendar_img" src="images/characters/` + character.images.filename_icon + `.png">`;
            }
        }
        else {
            document.getElementById("birthday_column_" + actualDay).innerHTML += "<div>" + index + "</div>";
        }
        actualDay = ++actualDay % 7;
    }
}

function setFontColor(character) {
    let element_color = character.elementText != "None" ? character.elementText.toLowerCase() : "flex"

    document.getElementById("birthday_month_title").style.color = `var(--` + element_color + `)`;
    document.getElementById("birthday_column_6").style.color = `var(--` + element_color + `)`;
    document.getElementById("birthday_column_0").style.color = `var(--` + element_color + `)`;

    document.getElementById("birthday_month_title").style.textShadow = `var(--dark_text) 2px 2px`;
    document.getElementById("birthday_column_6").style.textShadow = `var(--dark_text) 2px 2px`;
    document.getElementById("birthday_column_0").style.textShadow = `var(--dark_text) 2px 2px`;
}

function printCalendar() {

    resetCalendarHTML();

    let character = getMonthlyCharacter();

    let character_card = character.images.filename_iconCard;

    let birthdaysInMonth = getBirthdaysDates();

    printMonthName();

    printBackground(character_card);

    printDays(birthdaysInMonth);

    setFontColor(character);
}

function onCalendarMonthInputChange() {
    calendar_date = new Date(document.getElementById("calendar_month").value);
    calendar_date.setDate(1);

    printCalendar();
}

function changeCalendarMonth(offset) {
    let current_date = new Date(document.getElementById("calendar_month").value);
    current_date.setMonth(current_date.getMonth() + offset);

    let new_current_date = current_date.getFullYear() + "-" + ((current_date.getMonth() + 1) < 10 ? "0" : "") + (current_date.getMonth() + 1)

    if (new Date(new_current_date) >= MIN_CALENDAR_DATE) {
        document.getElementById("calendar_month").value = new_current_date;
    }
}