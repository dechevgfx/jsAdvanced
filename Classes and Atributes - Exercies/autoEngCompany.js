function autoEngineeringCompany(cars) {
    const output = new Map();

    cars.forEach((car) => {
        const [brand, model, count] = car.split(" | ");

        if (!output.has(brand)) {
            output.set(brand, {});
        }

        if (!output.get(brand)[model]) {
            output.get(brand)[model] = 0;
        }

        output.get(brand)[model] += Number(count);
    });

    for (const [key, value] of output) {
        let lastCar = "";

        if (lastCar !== key) {
            console.log(`${key}`);
            lastCar = key;
        }

        for (const key in value) {
            console.log(`###${key} -> ${value[key]}`);
        }
    }
}
