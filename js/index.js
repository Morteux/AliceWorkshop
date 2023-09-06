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
const elements = ["Pyro", "Electro", "Hydro", "Cryo", "Anemo", "Geo", "Dendro"];

const archetypes = ["Monogeo", "Monohydro", "Monocryo", "Monopyro", "Monoelectro", "Monoanemo", "Hypercarry", "Freeze", "National", "Vape Carry", "Overvape", "Taser", "Soup", "Melt", "Melt Quickswap", "Aggravate", "Spread", "Bloom", "Burgeon", "Oven", "Curry", "Sauté", "Fridge", "Salad", "Airfryer", "Hyperbloom", "Quickbloom", "Hyperfridge"];

const star_svg = `<img class="rarity" src="images/rarity/star.svg">`;
const character_names = Object.keys(characters);