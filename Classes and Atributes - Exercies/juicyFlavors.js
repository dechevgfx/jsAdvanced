function juiceFlavors(juiceConsistencyArray) {
    const origin = new Map();
    const output = new Map();

    juiceConsistencyArray.forEach((juice) => {
        const [fruit, quantity] = juice.split(" => ");

        if (!origin.has(fruit)) {
            origin.set(fruit, 0);
        }

        origin.set(fruit, origin.get(fruit) + Number(quantity));

        while (origin.get(fruit) >= 1000) {
            origin.set(fruit, origin.get(fruit) - 1000);
            output.set(fruit, (output.get(fruit) || 0) + 1);
        }
    });

    for (const [key, value] of output) {
        console.log(`${key} => ${value}`);
    }
}
