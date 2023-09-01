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
const star_svg = `<img class="rarity" src="images/rarity/star.svg">`;
const character_names = Object.keys(characters);

var favorites = {};
var user_teams = {};

window.addEventListener("beforeunload", function (e) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('user_teams', JSON.stringify(user_teams));
});

if (localStorage.getItem("favorites") !== null && localStorage.getItem("favorites") != "{}") {
    favorites = JSON.parse(localStorage.getItem("favorites"));
    // console.log(favorites);
}

if (localStorage.getItem("user_teams") !== null && localStorage.getItem("user_teams") != "{}") {
    user_teams = JSON.parse(localStorage.getItem("user_teams"));
    // console.log(user_teams);
}

function storeFavoriteTeam(id) {
    // console.log("Stored favorite " + id);
    // console.log(teams[id]);

    favorites[id] = teams[id];
}

function removeFavoriteTeam(id) {
    // console.log("Removed favorite " + id);
    // console.log(favorites[id]);

    delete favorites[id];
}