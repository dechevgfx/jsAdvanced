function order(object) {
    let finalOrder = {
        model: object.model,
        engine: Object,
        carriage: Object,
        wheels: [],
    };

    const engineType = {
        small: { power: 90, volume: 1800 },

        normal: { power: 120, volume: 2400 },

        monster: { power: 200, volume: 3500 },
    };

    const carriageType = {
        hatchback: { type: "hatchback", color: object.color },

        coupe: { type: "coupe", color: object.color },
    };

    if (object.power < 120) {
        finalOrder.engine = engineType.small;
    } else if (object.power < 200) {
        finalOrder.engine = engineType.normal;
    } else {
        finalOrder.engine = engineType.monster;
    }

    if (object.carriage == "hatchback") {
        finalOrder.carriage = carriageType.hatchback;
    } else if (object.carriage == "coupe") {
        finalOrder.carriage = carriageType.coupe;
    }

    if (object.wheelsize % 2 === 0) {
        object.wheelsize -= 1;
        for (let index = 0; index < 4; index++) {
            finalOrder.wheels.push(object.wheelsize);
        }
    } else {
        for (let index = 0; index < 4; index++) {
            finalOrder.wheels.push(object.wheelsize);
        }
    }
    return finalOrder;
}
order({
    model: "VW Golf II",

    power: 90,

    color: "blue",

    carriage: "hatchback",

    wheelsize: 14,
});
