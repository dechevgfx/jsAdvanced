function heroInventory(array) {
    let allHeroes = [];
    for (const heroData of array) {
        let [heroName, heroLevel, heroItems] = heroData.split(" / ");
        let singleHero = {
            name: heroName ? heroName : String,
            level: heroLevel ? Number(heroLevel) : Number,
            items: heroItems ? heroItems.split(", ") : [],
        };
        allHeroes.push(singleHero);
    }
    console.log(JSON.stringify(allHeroes));
}
heroInventory([
    "Isacc / 25 / Apple, GravityGun",

    "Derek / 12 / BarrelVest, DestructionSword",

    "Hes / 1 / Desolator, Sentinel, Antara",
]);
