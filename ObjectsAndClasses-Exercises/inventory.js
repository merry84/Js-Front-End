function heroInventory(input) {

    const heroes = [];
    for (const element of input) {
        const [heroName, heroLevel, items] = element.split(' / ');
        const hero = {
            name: heroName,
            level: Number(heroLevel),
            // Ако има предмети, ги разделяме по запетая и интервал
            //Така този израз гарантира, че items винаги ще бъде масив, дори и ако няма стойност за него, като по този начин избягваме грешки и улесняваме работата с данните.
            items: items ? items.split(', ') : []
        };
        heroes.push(hero);
    }
    //sortLevel
    heroes.sort((a, b) => a.level - b.level);
    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);

    }
}
heroInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);