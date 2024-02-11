
document.addEventListener("DOMContentLoaded", (event) => {
    printArchetypes();
});

function getRandomTeamByArchetype() {

}

function printArchetypes() {
    // Reset Archetypes container
    document.getElementById("archetypes_container").innerHTML = ``;
    let archetypes_HTML = "";

    for(let archetype_index in archetypes) {

        archetypes_HTML += `
        <div id="archetype_container" class="archetype_container">
    
            <div id="teams_example" class="teams_example">
    
                <div id="" class="team_elements_container">
                
                    <div class="element_container">
                        <img class="archetype_element_icon" src="images/elements/` + "electro" + `.png" alt="Element icon for ` + "Electro" + `">
                    </div>
                    
                    <div class="double_element_container">
                        <img class="" src="images/elements/` + "electro" + `.png" alt="Element icon for ` + "Electro" + `">
                        
                        <svg class="svg_divisor_line">
                            <line class="divisor_line" x1='0' y1='100%' x2='100%' y2='0' />
                        </svg>
    
                        <img class="" src="images/elements/` + "hydro" + `.png" alt="Element icon for ` + "Hydro" + `">
                    </div>
                    
                    <div class="element_container">
                        <img class="archetype_element_icon" src="images/elements/` + "hydro" + `.png" alt="Element icon for ` + "Hydro" + `">
                    </div>
                    
                    <div class="element_container">
                        <img class="archetype_element_icon" src="images/elements/` + "anemo" + `.png" alt="Element icon for ` + "Anemo" + `">
                    </div>
    
                </div>
    
    
    
    
    
    
    
                <div id="team_container" class="team_container viability_viable">
    
                    <div id="toolbox_container" class="toolbox_container">
                        <div id="team_id" class="team_id" onclick="showCopiedPopup('copied_popup_404-1'); copyTextToClipboard('404-1');">
                            #404-1
                            <div class="popup">
                                <span class="popuptext" id="copied_popup_404-1">Copied!</span>
                            </div>
                        </div>
    
                        <button class="fav_button" onclick="toggleFavorite(this, 404-1)">
                            <img class="empty" src="images/icons/star_empty.png">
                        </button>
                    </div>
    
                    <div id="characters_container" class="characters_container">
                    
                        <div id="character_1" class="character_container Eula">
                            <img class="character_icon character_5_stars" src="https://api.ambr.top/assets/UI/UI_AvatarIcon_Eula.png" alt="Character icon for Eula">
                            <img class="element_icon" src="images/elements/glow_cryo.png">
                            
                            <div class="rarity_container"><img class="rarity" src="images/rarity/star.svg"><img class="rarity" src="images/rarity/star.svg"><img class="rarity" src="images/rarity/star.svg"><img class="rarity" src="images/rarity/star.svg"><img class="rarity" src="images/rarity/star.svg"></div>
                            <div class="character_name character_name_short">Eula</div>
                        </div>
                        
                        <div id="character_2" class="character_container Shenhe">
                            <img class="character_icon character_5_stars" src="https://api.ambr.top/assets/UI/UI_AvatarIcon_Shenhe.png" alt="Character icon for Shenhe">
                            <img class="element_icon" src="images/elements/glow_cryo.png">
                            
                            <div class="rarity_container"><img class="rarity" src="images/rarity/star.svg"><img class="rarity" src="images/rarity/star.svg"><img class="rarity" src="images/rarity/star.svg"><img class="rarity" src="images/rarity/star.svg"><img class="rarity" src="images/rarity/star.svg"></div>
                            <div class="character_name character_name_short">Shenhe</div>
                        </div>
                        
                        <div id="character_3" class="character_container Rosaria">
                            <img class="character_icon character_4_stars" src="https://api.ambr.top/assets/UI/UI_AvatarIcon_Rosaria.png" alt="Character icon for Rosaria">
                            <img class="element_icon" src="images/elements/glow_cryo.png">
                            
                            <div class="rarity_container"><img class="rarity" src="images/rarity/star.svg"><img class="rarity" src="images/rarity/star.svg"><img class="rarity" src="images/rarity/star.svg"><img class="rarity" src="images/rarity/star.svg"></div>
                            <div class="character_name character_name_short">Rosaria</div>
                        </div>
                        
                        <div id="character_4" class="character_container Zhongli">
                            <img class="character_icon character_5_stars" src="https://api.ambr.top/assets/UI/UI_AvatarIcon_Zhongli.png" alt="Character icon for Zhongli">
                            <img class="element_icon" src="images/elements/glow_geo.png">
                            
                            <div class="rarity_container"><img class="rarity" src="images/rarity/star.svg"><img class="rarity" src="images/rarity/star.svg"><img class="rarity" src="images/rarity/star.svg"><img class="rarity" src="images/rarity/star.svg"><img class="rarity" src="images/rarity/star.svg"></div>
                            <div class="character_name character_name_short">Zhongli</div>
                        </div>  
    
                    </div>
                    
                    <button class="collapsible" onclick="toggleCollapse(this)">
                        <img class="collapsible_image" src="images/icons/bottom_arrow.png">
                    </button>
                    <div class="collapsible_content viability_viable_illuminated">
                        <div id="team_name_container" class="team_name_container">
                            Eula MonoCryo
                        </div>
    
                        <div id="team_rotation_container" class="team_rotation_container">
                            
                        </div>
    
                        <div id="team_archetype_container" class="team_archetype_container">
                            MonoCryo
                        </div>
    
                        <div class="team_desc_container">
                            An exception to the clasical monoCryo team. Thanks to Shenhe and Rosaria C6, Eula has enough source for the Physical resistance shred. Also, 100% uptime on Cryo resonance and low ER requirements
                        </div>
                    </div>
                </div>
    
    
            </div>
            
            <div class="archetype_info">
                <div class="archetype_title">
                    ` + archetype_index + `
                </div>
    
                <div class="">
                    <div class="archetype_subtitle">
                        Description:
                    </div>
                    ` + archetypes[archetype_index]["description"] + `
                </div>
    
                <div class="">
                <div class="archetype_subtitle">
                    Pros/Cons:
                </div>
                    <div scrollable_div="">
                        ` + archetypes[archetype_index]["pros_cons"] + `
                    </div>
                </div>
    
                <div class="">
                    forced_characters:` + archetypes[archetype_index]["forced_characters"] + `
                </div>
            </div>
        </div>
        `;
    }
    
    document.getElementById("archetypes_container").innerHTML = archetypes_HTML;
}