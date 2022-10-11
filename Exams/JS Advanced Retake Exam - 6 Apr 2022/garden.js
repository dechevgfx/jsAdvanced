class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        } else {
            this.plants.push({
                plantName,
                spaceRequired,
                ripe: false,
                quantity: 0,
            });
            this.spaceAvailable -= spaceRequired;
        }
        return `The ${plantName} has been successfully planted in the garden.`;
    }
    ripenPlant(plantName, quantity) {
        let find = this.plants.findIndex(
            (plant) => plant.plantName === plantName,
        );
        if (find === -1) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (this.plants[find].ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }
        this.plants[find].ripe = true;
        this.plants[find].quantity += quantity;

        if (this.plants[find].quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }
    harvestPlant(plantName) {
        let find = this.plants.findIndex(
            (plant) => plant.plantName === plantName,
        );
        if (find === -1) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (this.plants[find].ripe === false) {
            throw new Error(
                `The ${plantName} cannot be harvested before it is ripe.`,
            );
        }

        let quantity = this.plants[find].quantity;
        let freeSpace = this.plants[find].spaceRequired;
        this.spaceAvailable += freeSpace;
        this.storage.push({
            plantName,
            quantity,
        });
        this.plants.splice(find, 1);
        return `The ${plantName} has been successfully harvested.`;
    }
    generateReport() {
        let firstLine = `The garden has ${this.spaceAvailable} free space left.`;
        let arrOfPlants = [];
        this.plants.forEach((plant) => {
            arrOfPlants.push(plant.plantName);
        });
        arrOfPlants.sort((a, b) => {
            a - b;
        });

        let secondLine = `Plants in the garden: ${arrOfPlants.join(", ")}`;

        let thirdLine = "";
        let namesArr = [];
        let quantityArr = [];
        this.storage.forEach((el) => {
            namesArr.push(el.plantName);
            quantityArr.push(el.quantity);
        });
        let finalArr = [];
        for (let index = 0; index < namesArr.length; index++) {
            finalArr.push(`${namesArr[index]} (${quantityArr[index]})`);
        }
        if (!this.storage) {
            thirdLine = "Plants in storage: The storage is empty.";
        } else {
            thirdLine = `Plants in storage: ${finalArr.join(", ")}`;
        }

        return `${firstLine}\n${secondLine}\n${thirdLine}`;
    }
}

const myGarden = new Garden(250);

console.log(myGarden.addPlant("apple", 20));

console.log(myGarden.addPlant("orange", 200));

console.log(myGarden.addPlant("raspberry", 10));

console.log(myGarden.ripenPlant("apple", 10));

console.log(myGarden.ripenPlant("orange", 1));

console.log(myGarden.harvestPlant("orange"));

console.log(myGarden.generateReport());
