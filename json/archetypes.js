const archetypes = {
    "MonoGeo": {
        description: "Arquetipo basado en personajes del elemento Geo. Estos personajes suelen tener sinergia entre ellos. Se juegan con tres o cuatro personajes geo y un personaje flex. Destacan dps como Ningguang, Noelle o Itto. El uso de Gorou no es siempre obligatorio, pero si suele estar bastante presente en este arquetipo.",
        elements: ["Geo", "Geo", "Geo", "Flex"],
        pros_cons: "Fáciles de jugar, no se ve bloqueado por ningún tipo de escudo elemental, aunque no suelen ser muy efectivos contra estos",
        example_teams: [],
        color: "color_geo",
        color_illuminated: "color_geo_illuminated",
        recommended_characters: ["Gorou"]
    },
    "MonoHydro": {
        description: "Arquetipo basado en el uso de personajes del elemento Hydro. Está compuesto de tres personajes Hydro mas un personaje Anemo, que se encarga de bajar la resistencia Hydro gracias a VV. También se puede usar a Zhongli para bajar esta resistencia y tener utilidad defensiva.",
        elements: ["Hydro", "Hydro", "Hydro", "Flex"],
        pros_cons: "Gracias a Furina este arquetipo ha mejorado muchísimo, y ya no depende de Xingqiu y Yelan, existiendo muchas alternativas. Destaca al romper escudos de fuego, y suelen tener un daño single-target muy potente. En algunas situaciones, añadir un personaje electro puede resultar en un mejor equipo.",
        example_teams: [],
        color: "color_hydro",
        color_illuminated: "color_hydro_illuminated",
        recommended_characters: []
    },
    "MonoCryo": {
        description: "Arquetipo basado en el uso de personajes del elemento Cryo. Está compuesto de tres personajes Cryo mas un personaje Anemo, que se encarga de bajar la resistencia Hydro gracias a VV. Suele usarse un DPS Cryo como Ganyu, Ayaka, Wriothesley... junto a Shenhe.",
        elements: ["Cryo", "Cryo", "Cryo", "Anemo"],
        pros_cons: "Es objetivamente inferior al arquetipo Freeze... a no ser que el enemigo no se pueda congelar. En estos casos, lo supera y se convierte en una muy buena alternativa, por ejemplo, contra jefes.",
        example_teams: [],
        color: "color_cryo",
        color_illuminated: "color_cryo_illuminated",
        recommended_characters: ["Kaedehara Kazuha", "Shenhe"]
    },
    "MonoPyro": {
        description: "Arquetipo basado en el uso de personajes del elemento Pyro. Está compuesto de tres personajes Pyro mas un personaje Anemo, que se encarga de bajar la resistencia Hydro gracias a VV. El arquetipo básico (aunque no el único) suele ser un DPS Pyro como Lyney, Dehya, Diluc, Klee... junto a Xiangling, Bennett, y Kazuha.",
        elements: ["Pyro", "Pyro", "Pyro", "Anemo"],
        pros_cons: "Muy fuerte y menos situacional que la mayoría de equipos mono elementos. Gracias a que suelen usar personajes como Bennett, Xiangling o Kazuha, tienen muchísimo daño base en cualquier situación. Unica desventaja, cuidado con los escudos pyro.",
        example_teams: [],
        color: "color_pyro",
        color_illuminated: "color_pyro_illuminated",
        recommended_characters: ["Bennett", "Kaedehara Kazuha"]
    },
    "MonoElectro": {
        description: "Arquetipo basado en el uso de personajes del elemento Electro. Está arquetipo, suele aprovechar el buffo de Sara junto a dos personajes Electro mas un personaje Flex, que suele ser un anemo para bajar la resistencia via VV, u otros sources de buffos como Bennett o Zhongli.",
        elements: ["Electro", "Electro", "Electro", "Flex"],
        pros_cons: "Yae Miko y Raiden entre otros suelen aprovechar este arquetipo, aunque normalmente el uso de un equipo Hypercarry suele dar mejores resultados.",
        example_teams: [],
        color: "color_electro",
        color_illuminated: "color_electro_illuminated",
        recommended_characters: ["Kujou Sara"]
    },

    "Hypercarry": {
        description: "Equipos donde TODO el daño recae sobre un solo personaje. El resto de unidades son supports usados para potenciar a la unidad elegida como Hypercarry.",
        elements: ["Flex", "Flex", "Flex", "Flex"],
        pros_cons: "Todo el daño depende del investment del carry principal, para bien o para mal, y suelen necesitar vertical investment. La gran mayoría del tiempo onfield es del carry, por lo que si te gusta mucho el personaje es un buen arquetipo.",
        example_teams: [],
        color: "color_hypercarry",
        color_illuminated: "color_hypercarry_illuminated",
        recommended_characters: []
    },
    "Freeze": {
        description: "Se basan en mantener al enemigo congelado para poder aprovechar al máximo las distintas ventajas que esto aporta, como el CC, la consonancia Cryo, y el set de artefactos de congelados.",
        elements: ["Cryo", ["Cryo", "Hydro"], "Hydro", "Anemo"],
        pros_cons: "Es un arquetipo MUY potente cuando funciona. Y digo cuando funciona, porque hoyoverse está haciendo todo lo posible para que en muchos de los abismos no lo haga, como método de balance suelen poner enemigos inmunes al congelar. Al dejar a los enemigos congelados, permite en la mayoría de equipos llevar opciones mas ofensivas, centrandose menos en utilidad defensiva, ya que es mucho más fácil mantenerse con vida.",
        example_teams: [],
        color: "color_cryo",
        color_illuminated: "color_cryo_illuminated",
        recommended_characters: []
    },
    "National": {
        description: "Básicamente y sin explayarnos mucho, Xiangling haciendo vaporizados con cualquier cosa porque está balanceada junto a Bennett.",
        elements: ["Xiangling", "Bennett", "Hydro", "Flex"],
        pros_cons: "No tiene ninguna desventaja, suele funcionar donde sea cuando sea ya que tiene muchas variantes que se adaptan a distintas situaciones.",
        example_teams: [],
        color: "color_pyro",
        color_illuminated: "color_pyro_illuminated",
        recommended_characters: []
    },
    "Vaporize": {
        description: "Personajes que se basan si o si en la reacción de vaporizado, o al menos principalmente. Por ejemplo Hu Tao, Yoimiya... Están formados por un personaje pyro y otro hydro, pero el resto es muy polivalente, mientras sea un elemento que no cambie la reacción.",
        elements: ["Pyro", "Hydro", "Flex", "Flex"],
        pros_cons: "Es un arquetipo que se puede adaptar bien a distintas necesidades, al haber dos slots para personajes Flex, dependiendo de las necesidades del Carry o del abismo.",
        example_teams: [],
        color: "color_pyro",
        color_illuminated: "color_hydro_illuminated",
        recommended_characters: []
    },
    "Overvape": {
        description: "Se puede considerar un subarquetipo de Vaporize. Básicamente, al añadir un personaje Electro al arquetipo Vaporize, se forma este arquetipo. Con esto, ganaremos tanto la reacción electrocargado como sobrecargados, y seguiremos haciendo vaporizados de forma aún mas consistente gracias a la interacción entre estos elementos.",
        elements: ["Pyro", "Hydro", "Electro", "Flex"],
        pros_cons: "Muy buena combinación de elemento para realizar las tres reacciones mencionadas, ya que el personaje Pyro hará tanto vaporizados como sobrecargados al mismo tiempo. Eso si, hay que tener cuidado de que los enemigos no salgan disparados con los sobrecargados, asi que no siempre es óptimo.",
        example_teams: [],
        color: "color_pyro",
        color_illuminated: "color_hydro_illuminated",
        recommended_characters: []
    },

    "Overload": {
        description: "Arquetipo basado en la reacción Overload. Es la combinación de solo personajes Pyro y Electro, con al menos un personaje de cada elemento. En ocasiones, se puede combinar con algún elemento Flex como anemo/geo como supports, pero es menos frecuente.",
        elements: [ "Pyro", "Electro", ["Electro", "Pyro"], "Flex"],
        pros_cons: "Overload es una muy buena reacción complementaria en ciertos equipos y arquetipos, como Rational u Overvape, pero como reacción en sí para buildear equipos no siempre cumple. La explosión que deja atrás la reacción, puede resultar molesta contra enemigos que salgan disparados y personajes con poco rango que tengas que perseguirlos, asi que se suele usar con Élites o Jefes. Gracias a Chevreuse, esta reacción ha sufrido un gran buffo y es meta bajo ciertas cirscunstancias, pero su uso no es obligatorio.",
        example_teams: [],
        color: "color_pyro",
        color_illuminated: "color_electro_illuminated",
        recommended_characters: ["Chevreuse"]
    },
    
    "Taser": {
        description: "Cualquier combinación entre 1-2 personajes electro y 1-2 personajes hydro mas un personaje anemo. Su reacción principal es electrocargados y torbellinos, pero no son su fuente principal de daño, ya que no es un equipo basado daño de la reacción. ",
        elements: ["Electro", ["Electro", "Hydro"], "Hydro", "Anemo"],
        pros_cons: "Gracias al aura de electrocargados, el personaje anemo podrá aplicar VV a ambos elementos. En la mayoría de equipos no suelen llevar opciones defensivas, por lo que los hace dificiles de jugar.",
        example_teams: [],
        color: "color_electro",
        color_illuminated: "color_hydro_illuminated",
        recommended_characters: []
    },
    "Soup": {
        description: "Batiburrillo de reacciones, se suele llevar un anemo on-field con el que puedes aplicar VV a los tres elementos y mantener a los enemigos agrupados. Es famoso por el equipo Pokemon: Sacarosa, Kokomi, Xiangling, Fischl",
        elements: ["Anemo", "Hydro", "Pyro", "Electro"],
        pros_cons: "Empujas a los enemigos con overload, pero lo compensas con el agrupar de los personajes anemo.",
        example_teams: [],
        color: "color_flex",
        color_illuminated: "color_flex_illuminated",
        recommended_characters: []
    },
    "Melt": {
        description: "Arquetipo basado en la reacción de derretidos. Puedes hacer tanto derretidos con un personaje pyro, como derretidos inversos con un carry cryo.",
        elements: ["Cryo", "Pyro", "Flex", "Flex"],
        pros_cons: "",
        example_teams: [],
        color: "color_cryo",
        color_illuminated: "color_pyro_illuminated",
        recommended_characters: ["Bennett"]
    },
    "Aggravate": {
        description: "Arquetipo que tiene como protagonista el elemento electro. Juntando dos personajes electro (uno suele ser Fischl debido a su gran sinergia con este arquetipo pero no es obligatorio), nos ayudamos de un personaje Dendro para aplicar el aura y realizar Intensificados, y junto a un personaje Anemo para hacer VV, obtenemos un equipo de puro Electro.",
        elements: [],
        pros_cons: "Debido a como funciona el aura de Quicken, no se necesita mucha aplicación dendro, por lo que el slot de healer/shielder puede ser el dendro.",
        example_teams: [],
        color: "color_electro",
        color_illuminated: "color_electro_illuminated",
        recommended_characters: ["Fischl"]
    },
    "Spread": {
        description: "Aun aplicando el aura de Quicken, esta vez el protagonista de esta reacción es el elemento Dendro, y nos dedicaremos a hacer Spread. Se elegirán uno o dos personajes que puedan aplicar electro Off-Field, y debido a que el personaje On-Field es dendro, el uso de Fischl no es 'obligatorio'. ",
        elements: ["Dendro", "Dendro", "Electro", "Flex"],
        pros_cons: "Aunque también podemos usar personajes Anemos para agrupar, debido a que no se puede aplicar VV al elemento Dendro, el flex slot puede dedicarse a un segundo personaje Electro, o a otro tipo de utilidad omo Zhongli",
        example_teams: [],
        color: "color_dendro",
        color_illuminated: "color_dendro_illuminated",
        recommended_characters: ["Nahida"]
    },
    "Bloom": {
        description: "Arquetipo que debe su existencia a Nilou y su cambio a la reacción Bloom. Debido a como funciona la reacción, lo más óptimo es que un personaje hydro sea quien haga la reacción, el cual iré full EM.",
        elements: ["Nilou", "Hydro",["Dendro", "Hydro"], "Dendro"],
        pros_cons: "Las semillas creadas por la reacción dañan también al usuario, por lo que es obligatorio el uso de un personaje healer. Destaca en situaciones de AoE en las que no haga falta agrupar (Al no poder poner un personaje Anemo, no seremos capaces de agruparlos). Muy muy bueno cuando se cumple las condiciones.",
        example_teams: [],
        color: "color_dendro",
        color_illuminated: "color_hydro_illuminated",
        recommended_characters: []
    },
    "Burgeon": {
        description: "Basado en la reacción crepitar. Las semillas se activan con un personaje del elemento Pyro, el cual irá full EM para maximizar el daño de la reacción. Como último elemento, puedes poner otro personaje hydro/pyro/dendro que ayude en el equipo, o un elemento que no interfiera en la reacción como geo/anemo. De este arquetipo, nacen otros arquetipos como Oven, Curry y Sauté si añades otros elementos o modificas la forma de aplicar burgeon.",
        elements: ["Dendro", "Hydro", "Pyro", "Flex"],
        pros_cons: "Se necesita mucha aplicación hydro, o una aplicación de pyro muy lenta, para generar consistentes semillas. Destaca en AoE, y en ocasiones puedes agrupar con un personaje anemo. ",
        example_teams: [],
        color: "color_pyro",
        color_illuminated: "color_dendro_illuminated",
        recommended_characters: []
    },
    "Oven": {
        description: "Añadimos el elemento Cryo a nuestro equipo Burgeon.",
        elements: ["Dendro", "Hydro", "Pyro", "Cryo"],
        pros_cons: "Con esto, conseguiremos generar mas semillas debido a la interacción de Dendro+Cryo, además de congelar a los enemigos.",
        example_teams: [],
        color: "color_pyro",
        color_illuminated: "color_cryo_illuminated",
        recommended_characters: []
    },
    "Curry": {
        description: "Añadimos el elemento Electro a nuestro equipo Burgeon. Se suelen jugar con personajes electro que no activen semillas hyperbloom, como Fischl o Razor, pero también se puede jugar con personajes que si activen dicha reacción para crear una mezcla entre burgeon+hyperbloom. Popurry de reacciones que funciona sorprendentemente bien.",
        elements: ["Dendro", "Hydro", "Pyro", "Electro"],
        pros_cons: "Se generan mas semillas que en equipos Burgeon ya que el electro baja el aura de burning, y son equipos que suelen tener mas daño single target que el propio arquetipo burgeon, debido a la reacción de sobrecargado y personajes como Fischl. Al aplicar esta última reacción, el arquetipo Curry es bueno contra enemigos que no salen volando como Élites o Jefes.",
        example_teams: [],
        color: "color_pyro",
        color_illuminated: "color_electro_illuminated",
        recommended_characters: []
    },
    "Sauté": {
        description: "Aunque parecido a Burgeon, en este equipo NO usaremos un personaje Pyro para aplicar burgeon. Imbuiremos la habilidad de un personaje Anemo en el elemento Pyro para realizar la reacción.",
        elements: ["Dendro", "Hydro", "Pyro", "Anemo"],
        pros_cons: "A diferencia de la mayoría de personajes Pyro, los personajes Anemo se buildean a EM, por lo que podrán aplicar burgeon con un gran daño. Además, como suelen tener agrupación, este arquetipo es efectivo para cuando necesitas agrupar muchos enemigos y tener daño AoE. ",
        example_teams: [],
        color: "color_anemo",
        color_illuminated: "color_dendro_illuminated",
        recommended_characters: ["Kaedehara Kazuha", "Jean"]
    },
    "Fridge": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "color_dendro",
        color_illuminated: "color_cryo_illuminated",
        recommended_characters: []
    },
    "Salad": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "color_anemo",
        color_illuminated: "color_dendro_illuminated",
        recommended_characters: []
    },
    "Airfryer": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "color_anemo",
        color_illuminated: "color_pyro_illuminated",
        recommended_characters: []
    },
    "Hyperbloom": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "color_electro",
        color_illuminated: "color_dendro_illuminated",
        recommended_characters: []
    },
    "Quickbloom": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "color_dendro",
        color_illuminated: "color_electro_illuminated",
        recommended_characters: []
    },
    "HyperFridge": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "color_dendro",
        color_illuminated: "color_cryo_illuminated",
        recommended_characters: []
    },

    "Bain-Marie": {
        description: "",
        elements: [],
        pros_cons: "",
        example_teams: [],
        color: "color_cryo",
        color_illuminated: "color_dendro_illuminated",
        recommended_characters: []
    }
};
