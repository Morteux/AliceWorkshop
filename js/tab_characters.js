const regex_color_start_tag = /<color=\#........>/g;
const regex_color_end_tag = /<\/color>/g;

var character_ascension;
var character_talents;
// var character_constellations;
var character_weapon;
var character_teams;
var character_builds;
var character_charts;

document.addEventListener("DOMContentLoaded", (event) => {
    resetMenuCharacters();
    printAllCharacters();

    // let weap = [];
    // for(let ind in weapons) {
    //     weap.push(getWeapon(ind));
    // }
    // console.log(weap);
});

function activateMenuContent(element, content_id) {
    let siblings_buttons = document.querySelector('.right_menu_buttons').children;

    for (let sibling of siblings_buttons) {
        if (sibling.classList.contains("active_menu_character_button")) {
            sibling.classList.remove("active_menu_character_button");
        }

        if (!sibling.classList.contains("disabled_menu_character_button")) {
            sibling.classList.add("disabled_menu_character_button");
        }
    }

    if (!element.classList.contains("active_menu_character_button")) {
        element.classList.add("active_menu_character_button");
    }

    if (element.classList.contains("disabled_menu_character_button")) {
        element.classList.remove("disabled_menu_character_button");
    }


    let siblings_content = document.querySelector('.right_menu_content').children;

    for (let content of siblings_content) {
        if (!content.classList.contains("hide_menu_character_container")) {
            content.classList.add("hide_menu_character_container");
        }
    }

    document.getElementById(content_id).classList.remove("hide_menu_character_container");
}

function getMenuCharacterHTML(character_data) {
    if (character_data == null) {
        console.log(character_data);
    }

    return `
    <div id="character_` + character_data.name + `" class="character_container" onclick="printCharacterInfoHTML('` + character_data.name + `')">
        <img class="character_icon character_` + character_data.rarity + `_stars" src="images/characters/` + character_data.images.filename_icon + `.png" alt="Character icon for ` + character_data.name + `">
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

function resetMenuCharacters() {
    document.getElementById("menu_characters").style.display = "";
    document.getElementById("menu_characters_info").innerHTML = `<button class="primary_button reset_menu_characters_button" onclick="resetMenuCharacters()">Go to characters</button>`;
    document.getElementById("menu_characters_info").style.display = "none";
}

function getMaterialHTML(material_cost) {
    let material = GenshinDb.material(material_cost.name);
    let materialHTML = ``;

    let rarity_class = material.rarity ? `material_` + material.rarity + `_stars` : `material_1_stars`;

    materialHTML = `
        <div class="material_container tooltip">
            <img class="material_icon ` + rarity_class + `" src="https://api.ambr.top/assets/UI/` + material.images.filename_icon + `.png" alt="Material icon for ` + material.name + `">

            <div class="material_count">
            ` + material_cost.count + `
            </div>
            
            <span class="tooltiptext">` + material.name + `</span>
        </div>
    `;

    return materialHTML;
}

function getMaterialSmallHTML(material_cost) {
    let material = GenshinDb.material(material_cost.name);
    let materialHTML = ``;

    let rarity_class = material.rarity ? `material_` + material.rarity + `_stars` : `material_1_stars`;

    materialHTML = `
        <div class="material_container tooltip">
            <img class="material_icon_small ` + rarity_class + `" src="https://api.ambr.top/assets/UI/` + material.images.filename_icon + `.png" alt="Material icon for ` + material.name + `">

            <div class="material_count_small">
            ` + material_cost.count + `
            </div>
            
            <span class="tooltiptext">` + material.name + `</span>
        </div>
    `;

    return materialHTML;
}

function updateAscension() {
    let slider_ascend = [
        "",
        "",
        "",
        "ascend1",
        "ascend2",
        "ascend3",
        "ascend4",
        "ascend5",
        "ascend6",
    ];

    let slider_value = document.getElementById("menu_slider_ascension").value;
    let output = ``;

    document.getElementById("menu_slider_ascension_output").innerHTML = slider_value * 10;

    if (Array.isArray(character_ascension[slider_ascend[parseInt(slider_value) - 1]])) {
        for (let material of character_ascension[slider_ascend[parseInt(slider_value) - 1]]) {
            output += getMaterialHTML(material);
        }
    } else {
        output = `<div class="menu_panel">No items needed to upgrade!</div>`;
    }

    document.getElementById("materials_output").innerHTML = output;
}

function getMenuContentAscension(character_name) {
    let content = ``;
    let character_data = getCharacter(character_name);

    character_ascension = character_data.costs;

    content += `
        <div class="menu_panel">` + character_data.description + `</div>
        <div class="slider_container">
            <div>
                Lvl. <span id="menu_slider_ascension_output" class="menu_slider_output">20</span>
            </div>

            <input type="range" min="2" max="9" step="1" value="9" class="menu_slider" id="menu_slider_ascension" oninput="updateAscension()">
        </div>

        <div id="materials_output" class="slider_output">
        </div>
    `;

    return content;
}

function updateTalents() {
    let talents = ["combat1", "combat2", "combat3", "combatsp", "passive1", "passive2", "passive3", "passive4"];

    for (let talent of talents) {
        updateTalent(talent);
    }
}

function updateTalent(talent_id) {
    if (document.getElementById("menu_slider_" + talent_id)) {
        let slider_value = document.getElementById("menu_slider_" + talent_id).value;
        let output = ``;

        document.getElementById("menu_slider_" + talent_id + "_output").innerHTML = slider_value;

        output += `<div class="talent_table">`;

        const param_regex = /\{param\d*:.*\}/g;

        let isDark = true;
        for (let label of character_talents[talent_id].attributes.labels) {
            let label_text = label.split("|")[0];

            let label_number = label.split("|")[1].replaceAll(param_regex, (match, capturedGroup) => {
                const param_match = match.match(/param\d*/g);

                let param_value;
                if (capturedGroup < param_match.length) {
                    param_value = character_talents[talent_id].attributes.parameters[param_match[capturedGroup]][slider_value - 1];
                }
                else {
                    param_value = character_talents[talent_id].attributes.parameters[param_match[0]][slider_value - 1];
                }

                // let param_tag = Number.isInteger(param_value) ? "" : "%";
                param_value = Number.isInteger(param_value) ? param_value : param_value * 100;
                param_value = Math.round(param_value * 100) / 100;

                // return param_value + param_tag;
                return param_value;
            });

            output += `
            <div class="talent_row ` + (isDark ? `menu_character_row_dark` : `menu_character_row_light`) + `">
                <div class="talent_data talent_data_left">
                ` + label_text + `
                </div>
                <div class="talent_data talent_data_right">
                ` + label_number + `
                </div>
            </div>
            `;

            isDark = !isDark;
        }

        output += `</div>`;

        output += `<div class="material_row">`;

        if (Array.isArray(character_talents.costs["lvl" + slider_value])) {
            for (let material of character_talents.costs["lvl" + slider_value]) {
                output += getMaterialSmallHTML(material);
            }
        } else {
            output += `No items needed to upgrade!`;
        }

        output += `</div>`;

        document.getElementById("talent_" + talent_id + "_output").innerHTML = output;
    }
}

function getMenuContentTalents(character_name) {
    let content = ``;
    character_talents = GenshinDb.talent(character_name);

    let talents = ["combat1", "combat2", "combat3", "combatsp", "passive1", "passive2", "passive3", "passive4"];

    for (let talent of talents) {

        if (character_talents && character_talents[talent]) {

            let talent_postprocessed = character_talents[talent].descriptionRaw.replaceAll(regex_color_start_tag, (match, capturedGroup) => {
                const color = match.match(/\#......../g);
                return '<span class="talent_subtitle" style="color: ' + color + '">';
            }).replaceAll(regex_color_end_tag, "</span>").replaceAll("\n", "<br>").replaceAll("{LAYOUT_MOBILE#Tap}{LAYOUT_PC#Press}{LAYOUT_PS#Press}", "Press");

            content += `
                <div class="menu_panel_column">
                    <div class="talent_name_container">
                        <img class="talent_img" src="images/UI/` + character_talents.images["filename_" + talent] + `.png">
                    
                        <div class="talent_name">
                            ` + character_talents[talent].name + `
                        </div>
                    </div>
                    <div class="talent_info_container">
                        <div class="talent_info">
                            ` + talent_postprocessed + `
                        </div>
                    </div>

                    ` + (["combat1", "combat2", "combat3"].includes(talent) ? `<div class="slider_container">
                        <div>
                            Lvl. <span id="menu_slider_` + talent + `_output" class="menu_slider_output">1</span>
                        </div>
            
                        <input type="range" min="1" max="15" step="1" value="10" class="menu_slider menu_slider_2" id="menu_slider_` + talent + `" oninput="updateTalent('` + talent + `')">
                    </div>

                    <div id="talent_` + talent + `_output" class="slider_output">
                    </div>` : ``) + `
                </div>
            `;
        }
    }

    return content;
}

function getMenuContentConstellations(character_name) {
    let content = ``;
    let character_constellations = GenshinDb.constellation(character_name);

    if (character_constellations) {

        for (let index = 1; index < 7; ++index) {

            let cons_postprocessed = character_constellations["c" + index].descriptionRaw.replaceAll(regex_color_start_tag, (match, capturedGroup) => {
                const color = match.match(/\#......../g);
                return '<span class="talent_subtitle" style="color: ' + color + '">';
            }).replaceAll(regex_color_end_tag, "</span>").replaceAll("\n", "<br>").replaceAll("{LAYOUT_MOBILE#Tap}{LAYOUT_PC#Press}{LAYOUT_PS#Press}", "Press");

            content += `
            <div class="menu_panel_column">
                <div class="talent_name_container">
                    <img class="talent_img" src="images/UI/` + character_constellations.images["filename_c" + index] + `.png">
                
                    <div class="talent_name">
                        ` + character_constellations["c" + index].name + `
                    </div>
                </div>
                <div class="talent_info_container">
                    <div class="talent_info">
                        ` + cons_postprocessed + `
                    </div>
                </div>
            </div>
            `;
        }
    }

    return content;
}

function getWeaponHTML(weapon_name) {
    let weapon = getWeapon(weapon_name);
    let weaponHTML = ``;

    let rarity_class = weapon.rarity ? `material_` + weapon.rarity + `_stars` : `material_1_stars`;

    weaponHTML = `
        <div class="weapon_container tooltip">
            <img class="material_icon_small ` + rarity_class + `" src="images/UI/` + weapon.images.filename_awakenIcon + `.png" alt="Material icon for ` + weapon.name + `">
            
            <span class="tooltiptext">` + weapon.name + `</span>
        </div>
    `;

    return weaponHTML;
}

function updateWeaponRefinement() {
    let slider_value = document.getElementById("menu_slider_weapon_refinement").value;
    document.getElementById("menu_slider_weapon_refinement_output").innerHTML = slider_value;

    let values = character_weapon["r" + slider_value].values;

    let effect_postprocessed = character_weapon.effectTemplateRaw;

    for (let index = 0; index < values.length; ++index) {
        effect_postprocessed = effect_postprocessed.replace("{" + index + "}", values[index]);
    }

    effect_postprocessed = effect_postprocessed.replaceAll(regex_color_start_tag, (match, capturedGroup) => {
        const color = match.match(/\#......../g);
        return '<span class="talent_subtitle" style="color: ' + color + '">';
    }).replaceAll(regex_color_end_tag, "</span>").replaceAll("\n", "<br>").replaceAll("{LAYOUT_MOBILE#Tap}{LAYOUT_PC#Press}{LAYOUT_PS#Press}", "Press");

    document.getElementById("weapon_refinement_output").innerHTML = effect_postprocessed;
}

function updateWeaponMaterial() {
    let slider_ascend = [
        "",
        "",
        "",
        "ascend1",
        "ascend2",
        "ascend3",
        "ascend4",
        "ascend5",
        "ascend6",
    ];

    let output = ``;

    let slider_value = document.getElementById("menu_slider_weapon_material").value;
    document.getElementById("menu_slider_weapon_material_output").innerHTML = slider_value * 10;

    if (Array.isArray(character_weapon.costs[slider_ascend[parseInt(slider_value) - 1]])) {
        for (let material of character_weapon.costs[slider_ascend[parseInt(slider_value) - 1]]) {
            output += getMaterialSmallHTML(material);
        }
    } else {
        output = `<div class="menu_panel">No items needed to upgrade!</div>`;
    }

    if (slider_value > 5) {
        document.getElementById("signature_weapon_icon").src = `images/UI/` + character_weapon.images.filename_awakenIcon + `.png`;
    } else {
        document.getElementById("signature_weapon_icon").src = `images/UI/` + character_weapon.images.filename_icon + `.png`;
    }

    document.getElementById("weapon_material_output").innerHTML = output;
}

function getMenuContentWeapon(character_name) {
    let content = ``;
    character_weapon = getWeapon(characters_signature_weapons[character_name]);

    if (character_weapon) {

        let weapon_postprocessed = character_weapon.descriptionRaw.replaceAll(regex_color_start_tag, (match, capturedGroup) => {
            const color = match.match(/\#......../g);
            return '<span class="talent_subtitle" style="color: ' + color + '">';
        }).replaceAll(regex_color_end_tag, "</span>").replaceAll("\n", "<br>").replaceAll("{LAYOUT_MOBILE#Tap}{LAYOUT_PC#Press}{LAYOUT_PS#Press}", "Press");

        content += `
                <div class="menu_panel_column">
                    <div class="talent_name_container">
                        <img id="signature_weapon_icon" class="talent_img" src="images/UI/` + character_weapon.images.filename_icon + `.png">
                    
                        <div class="talent_name">
                            ` + character_weapon.name + `
                        </div>
                    </div>
                    <div class="talent_info_container">
                        <div class="talent_info">
                            ` + weapon_postprocessed + `
                        </div>
                    </div>

                    <div class="weapons_stats_container">
                        <div class="weapon_stat">
                            ATK: ` + Math.round(character_weapon.baseAtkValue) + `
                        </div>

                        <div class="vertical_separator"></div>

                        <div class="weapon_substat">
                        ` + character_weapon.mainStatText + `: ` + character_weapon.baseStatText + `
                        </div>
                    </div>

                    <div class="slider_container">
                        <div>
                            R <span id="menu_slider_weapon_refinement_output" class="menu_slider_output">1</span>
                        </div>
            
                        <input type="range" min="1" max="5" step="1" value="1" class="menu_slider menu_slider_2" id="menu_slider_weapon_refinement" oninput="updateWeaponRefinement()">
                    </div>

                    <div class="talent_name_container" style="color: #FFD780FF">
                        <div class="talent_info">
                        ` + character_weapon.effectName + `
                        </div>
                    </div>

                    <div id="weapon_refinement_output" class="slider_output_text">
                    </div>

                    <div class="slider_container">
                        <div>
                            Lvl. <span id="menu_slider_weapon_material_output" class="menu_slider_output">1</span>
                        </div>
            
                        <input type="range" min="2" max="9" step="1" value="9" class="menu_slider menu_slider_2" id="menu_slider_weapon_material" oninput="updateWeaponMaterial()">
                    </div>

                    <div id="weapon_material_output" class="slider_output">
                    </div>
                </div>
            `;

        content += `
            <div class="menu_panel_column">
                ` + character_weapon.story.replaceAll('\n', '<br>') + `
            </div>
        `;
    } else {
        content = `<div class="menu_panel">No signature weapon found...</div>`;
    }

    return content;
}

function getMenuContentTeams(character_name) {
    let content = ``;

    return content;
}

function getArtifactHTML(artifact_name, artifact_piece) {
    let artifact = GenshinDb.artifact(artifact_name);
    let artifactHTML = ``;

    if (artifact) {
        artifactHTML = `
            <div class="weapon_container tooltip">
                <img class="material_icon_small material_5_stars" src="` + artifact.images[artifact_piece] + `" alt="Artifact ` + artifact_piece + ` icon for ` + artifact.name + `">
                
                <span class="tooltiptext">` + artifact.name + `</span>
            </div>
        `;
    }

    return artifactHTML;
}

function getMenuContentBuilds(character_name) {
    let content = ``;

    for (let build_name in builds[character_name]) {
        let build = builds[character_name][build_name];

        let weapons_build = ``;
        if (build.weapon.length > 0) {
            for (let weapon of build.weapon) {

                let weapon_data = getWeapon(weapon);

                if (weapon_data) {
                    weapons_build += `
                    <div class="build_weapon_info">
                        ` + getWeaponHTML(weapon_data.name) + `
                    </div>`;
                }
            }
        } else {
            weapons_build = `<div class="build_no_info">No weapon recommended</div>`;
        }

        let talents_priority = [];

        if (build.talent_priority.length > 0) {
            for (let talent of build.talent_priority) {

                let talent_data = GenshinDb.talent(character_name);

                if (talent_data) {
                    talents_priority.push(`
                    <div class="build_talent_info">
                        <img class="talent_img_small" src="images/UI/` + talent_data.images["filename_combat" + talent] + `.png">
                    </div>
                    `);
                }
            }

            let separator = `<div class="build_talent_separator">></div>`;

            talents_priority = talents_priority.join(separator);
        } else {
            talents_priority = `<div class="build_no_info">No talent priority</div>`;
        }

        let artifacts_build = ``;
        if (build.set.length > 0) {
            for (let artifact of build.set) {

                let artifact_data = GenshinDb.artifact(artifact);

                if (artifact_data) {
                    artifacts_build += `
                    <div class="build_artifact_info">
                    ` + getArtifactHTML(artifact_data.name, "flower") + `
                    ` + getArtifactHTML(artifact_data.name, "plume") + `
                    ` + getArtifactHTML(artifact_data.name, "sands") + `
                    ` + getArtifactHTML(artifact_data.name, "goblet") + `
                    ` + getArtifactHTML(artifact_data.name, "circlet") + `
                    </div>`;
                }
            }
        } else {
            artifacts_build = `<div class="build_no_info">No artifacts recommended</div>`;
        }

        content += `
                <div class="menu_panel_column">
                    <div class="build_title">
                        ` + build_name + `
                    </div>
                    <div class="build_description">
                        ` + build.description + `
                    </div>
                    ` + (build.element ? `
                    <div class="build_subtitle">
                        Element
                    </div>
                    <div class="talent_info_container">
                        <div class="talent_info">
                            ` + build.element + `
                        </div>
                    </div>` : ``) + `
                    <div class="build_subtitle">
                        Recommended weapon
                    </div>
                    <div class="build_weapon_container">
                        ` + weapons_build + `
                    </div>
                    <div class="build_subtitle">
                        Artifacts ` + (build.set.length > 0 ? (build.set.length == 1 ? `(4 piece)` : `(2 piece | 2 piece)`) : ``) + `
                    </div>
                    <div class="build_artifacts_container">
                        ` + artifacts_build + `
                    </div>
                    <div class="build_subtitle">
                        Main Stats
                    </div>
                    <div class="build_set_container">
                        <div class="build_set_info">
                            <img class="talent_img_small" src="images/artifacts/Icon_Flower_of_Life.webp">
                            <div class="">
                                HP
                            </div>
                        </div>
                        <div class="build_set_info">
                            <img class="talent_img_small" src="images/artifacts/Icon_Plume_of_Death.webp">
                            <div class="">
                                ATK
                            </div>
                        </div>
                        <div class="build_set_info">
                            <img class="talent_img_small" src="images/artifacts/Icon_Sands_of_Eon.webp">
                            <div class="">
                                ` + build.main_stat.sands + `
                            </div>
                        </div>
                        <div class="build_set_info">
                            <img class="talent_img_small" src="images/artifacts/Icon_Goblet_of_Eonothem.webp">
                            <div class="">
                                ` + build.main_stat.goblet + `
                            </div>
                        </div>
                        <div class="build_set_info">
                            <img class="talent_img_small" src="images/artifacts/Icon_Circlet_of_Logos.webp">
                            <div class="">
                                ` + build.main_stat.circlet + `
                            </div>
                        </div>
                    </div>
                    
                    <div class="build_row">
                        <div>
                            <div class="build_subtitle">
                                ER requirement
                            </div>
                            <div class="build_substats">
                                ` + (build.er_requirement != "" ? build.er_requirement : `<div class="build_no_info">No minimum ER required</div>`) + `
                            </div>
                        </div>
                        
                        <div>
                            <div class="build_subtitle">
                                Talent priority
                            </div>
                            <div class="build_talent_info">
                                ` + talents_priority + `
                            </div>
                        </div>
                    </div>
                    
                    <div class="build_row">
                        <div>
                            <div class="build_subtitle">
                                Substats priority
                            </div>
                            <div class="build_substats">
                                ` + (build.subs_stat.length > 0 ? build.subs_stat.join(" > ") : `<div class="build_no_info">No substats recommended</div>`) + `
                            </div>
                        </div>
                        
                        <div>
                            <div class="build_subtitle">
                                Constellation
                            </div>
                            <div class="build_constellation_info">
                                ` + (build.constellation != "" ? `Constellation required: ` + build.constellation : `<div class="build_no_info">No minimun constellation required</div>`) + `
                            </div>
                        </div>
                    </div>
                </div>
            `;
    }

    return content;
}

function getMenuContentCharts(character_name) {
    let content = ``;

    return content;
}


function printCharacterInfoHTML(character_name) {
    let character_data = getCharacter(character_name);
    let menu_characters_info = ``;

    document.getElementById("menu_characters").style.display = "none";
    document.getElementById("menu_characters_info").style.display = "";

    document.getElementById("menu_characters_info").innerHTML = `<button class="primary_button reset_menu_characters_button" onclick="resetMenuCharacters()">Go to characters</button>`;

    menu_characters_info = `
        <div id="menu_characters_image" class="menu_characters_image"></div>

        <div class="left_menu_info sticky">

            <div class="menu_character_name_container">
                <div class="menu_character_name ` + (character_data.name.length < SHORT_NAME_LENGTH ? "menu_character_name_short" : (character_data.name.length < MEDIUM_NAME_LENGTH ? "menu_character_name_medium" : "menu_character_name_long")) + `">
                    ` + character_data.name + `
                </div>
                <div class="menu_character_title">
                    ` + character_data.title + `
                </div>
            </div>

            <img class="menu_character_icon menu_character_` + character_data.rarity + `_stars" src="images/characters/` + character_data.images.filename_icon + `.png" alt="Character icon for ` + character_data.name + `">

            <div class="menu_character_row_info menu_character_row_dark">
                Rarity:
                <div class="menu_value_container">
                    <img class="rarity" src="images/rarity/star.svg">
                    <img class="rarity" src="images/rarity/star.svg">
                    <img class="rarity" src="images/rarity/star.svg">
                    <img class="rarity" src="images/rarity/star.svg">
                    ` + (character_data.rarity == "5" ? `<img class="rarity" src="images/rarity/star.svg">` : ``) + `
                </div>
            </div>
            <div class="menu_character_row_info menu_character_row_light">
                Substat:
                <div class="menu_value_container">
                    ` + character_data.substatText + `
                </div>
            </div>
            <div class="menu_character_row_info menu_character_row_dark">
                Weapon:
                <div class="menu_value_container">
                ` + character_data.weaponText + `<img class="menu_row_img_small" src="images/weapon_types/Weapon-class-` + character_data.weaponText.toLowerCase() + `-icon.webp">
                </div>
            </div>
            <div class="menu_character_row_info menu_character_row_light">
                Element:
                <div class="menu_value_container">
                ` + character_data.elementText + `<img class="menu_row_img_small" src="images/elements/` + character_data.elementText.toLowerCase() + `.png">
                </div>
            </div>
            <div class="menu_character_row_info menu_character_row_dark">
                Region:
                <div class="menu_value_container">
                ` + character_data.region + `
                </div>
            </div>
            <div class="menu_character_row_info menu_character_row_light">
                Affiliation:
                <div class="menu_value_container">
                ` + character_data.affiliation + `
                </div>
            </div>
            <div class="menu_character_row_info menu_character_row_dark">
                Constellation:
                <div class="menu_value_container">
                ` + character_data.constellation + `
                </div>
            </div>
            <div class="menu_character_row_info menu_character_row_light">
                Birthday:
                <div class="menu_value_container">
                ` + character_data.birthday + `
                </div>
            </div>
            <div class="menu_character_column_info menu_character_row_dark">
                Character voice:
                <div class="menu_cv_container">
                    English: ` + character_data.cv.english + `
                </div>
                <div class="menu_cv_container">
                    Chinese: ` + character_data.cv.chinese + `
                </div>
                <div class="menu_cv_container">
                    Japanese: ` + character_data.cv.japanese + `
                </div>
                <div class="menu_cv_container">
                    Korean: ` + character_data.cv.korean + `
                </div>
            </div>

        </div>

        <div class="right_menu_info">

            <div class="right_menu_buttons">
                <div class="active_menu_character_button" onclick="activateMenuContent(this, 'menu_content_ascension')">Ascension</div>
                <div class="disabled_menu_character_button" onclick="activateMenuContent(this, 'menu_content_talents')">Talents</div>
                <div class="disabled_menu_character_button" onclick="activateMenuContent(this, 'menu_content_constellations')">Constellations</div>
                <div class="disabled_menu_character_button" onclick="activateMenuContent(this, 'menu_content_weapon')">Weapon</div>
                <div class="disabled_menu_character_button" onclick="activateMenuContent(this, 'menu_content_teams')">Teams</div>
                <div class="disabled_menu_character_button" onclick="activateMenuContent(this, 'menu_content_builds')">Builds</div>
                <div class="disabled_menu_character_button" onclick="activateMenuContent(this, 'menu_content_charts')">Charts</div>
            </div>

            <div id="right_menu_content" class="right_menu_content">
                <div id="menu_content_ascension" class="menu_container">
                ` + getMenuContentAscension(character_name) + `
                </div>
                <div id="menu_content_talents" class="menu_container hide_menu_character_container">
                ` + getMenuContentTalents(character_name) + `
                </div>
                <div id="menu_content_constellations" class="menu_container hide_menu_character_container">
                ` + getMenuContentConstellations(character_name) + `
                </div>
                <div id="menu_content_weapon" class="menu_container hide_menu_character_container">
                ` + getMenuContentWeapon(character_name) + `
                </div>
                <div id="menu_content_teams" class="menu_container hide_menu_character_container">
                ` + getMenuContentTeams(character_name) + `
                </div>
                <div id="menu_content_builds" class="menu_container hide_menu_character_container">
                ` + getMenuContentBuilds(character_name) + `
                </div>
                <div id="menu_content_charts" class="menu_container hide_menu_character_container">
                ` + getMenuContentCharts(character_name) + `
                </div>
            </div>
        </div>
    `;

    document.getElementById("menu_characters_info").innerHTML += menu_characters_info;

    document.getElementById("menu_characters_image").style.backgroundImage = "url('images/characters/" + character_data.images.filename_gachaSplash + ".png')";

    // Initialize tabs
    updateAscension();
    updateTalents();
    if (characters_signature_weapons[character_name]) {
        updateWeaponRefinement();
        updateWeaponMaterial();
    }
}