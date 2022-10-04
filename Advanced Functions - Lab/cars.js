function cars(array) {
    let objectOfCars = {};

    const utilityObj = {
        create,
        createInherit,
        set,
        print,
    };

    array.forEach((line) => {
        const splitted = line.split(" ");
        const command = splitted[0];
        const name = splitted[1];

        switch (command) {
            case "create":
                let car;
                if (splitted[2]) {
                    const nameToInheritFrom = splitted[3];
                    utilityObj.createInherit(name, nameToInheritFrom);
                } else {
                    utilityObj.create(name);
                }

                break;
            case "set":
                const key = splitted[2];
                const value = splitted[3];
                utilityObj.set(name, key, value);
                break;
            case "print":
                utilityObj.print(name);
                break;
        }
    });

    function create(name) {
        objectOfCars[name] = {};
    }

    function createInherit(name, nameToInherit) {
        create(name);
        let carObj = objectOfCars[name];
        carObj = Object.setPrototypeOf(carObj, objectOfCars[nameToInherit]);
    }

    function set(name, key, val) {
        objectOfCars[name][key] = val;
    }

    function print(name) {
        let print = "";
        const carToPrint = objectOfCars[name];
        for (const car in carToPrint) {
            print += `${car}:${carToPrint[car]},`;
        }

        console.log(print.slice(0, -1));
    }
}
