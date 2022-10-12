class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (
            model == "" ||
            horsepower < 0 ||
            price < 0 ||
            mileage < 0 ||
            typeof model !== "string" ||
            typeof price !== "number" ||
            typeof mileage !== "number" ||
            typeof horsepower !== "number"
        ) {
            throw new Error(`Invalid input!`);
        }
        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage,
        });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
            2,
        )} km - ${price.toFixed(2)}$`;
    }
    sellCar(model, desiredMileage) {
        let find = this.availableCars.findIndex((car) => car.model === model);
        if (find === -1) {
            throw new Error(`${model} was not found!`);
        }

        let horsepower = this.availableCars[find].horsepower;
        let soldPrice = 0;

        if (this.availableCars[find].mileage <= desiredMileage) {
            soldPrice = this.availableCars[find].price;
        } else if (this.availableCars[find].mileage - desiredMileage <= 40000) {
            soldPrice = this.availableCars[find].price * 0.95;
        } else {
            soldPrice = this.availableCars[find].price * 0.9;
        }

        this.soldCars.push({
            model,
            horsepower,
            soldPrice,
        });
        this.totalIncome += soldPrice;
        this.availableCars.splice(find, 1);
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }
    currentCar() {
        if (this.availableCars.length) {
            let allCars = this.availableCars
                .map((car) => {
                    return `---${car.model} - ${
                        car.horsepower
                    } HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(
                        2,
                    )}$`;
                })
                .join("\n");

            return `-Available cars:\n${allCars}`;
        } else {
            return `There are no available cars`;
        }
    }

    salesReport(criteria) {
        switch (criteria) {
            case "horsepower":
                this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
                break;
            case "model":
                this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
                break;
            default:
                throw new Error("Invalid criteria!");
        }

        let firstLine = `-${
            this.name
        } has a total income of ${this.totalIncome.toFixed(2)}$`;
        let secondLine = `-${this.soldCars.length} cars sold:`;
        let thirdLineArr = [];
        this.soldCars.forEach((car) => {
            thirdLineArr.push(
                `---${car.model} - ${
                    car.horsepower
                } HP - ${car.soldPrice.toFixed(2)}$`,
            );
        });

        return `${firstLine}\n${secondLine}\n${thirdLineArr.join("\n")}`;
    }
}
let dealership = new CarDealership("SoftAuto");

console.log(dealership.addCar("Toyota Corolla", 100, 3500, 190000));
console.log(dealership.addCar("Mercedes C63", 600, 29000, 187000));
console.log(dealership.addCar("Mercedes C43", 400, 20000, 197000));
console.log(dealership.addCar("Mercedes C65", 700, 59000, 18000));
console.log(dealership.addCar("Audi A3", 120, 4900, 240000));
console.log(dealership.currentCar());

console.log(dealership.sellCar("Toyota Corolla", 230000));
console.log(dealership.sellCar("Mercedes C65", 230000));
console.log(dealership.currentCar());
console.log(dealership.sellCar("Mercedes C43", 100000));
console.log(dealership.sellCar("Audi A3", 110000));
console.log(dealership.currentCar());

console.log(dealership.salesReport("horsepower"));
console.log(dealership.salesReport("model"));

console.log(dealership.salesReport("horsepower"));

console.log(dealership.addCar("", 100, 3500, 190000));
console.log(dealership.addCar("Toyota Avensis", 170, -1, 390000));
console.log(dealership.addCar("Toyota Aygo", -170, 10000, 390000));
console.log(dealership.addCar(200, 170, 10000, 390000));
console.log(dealership.sellCar("Toyota Avensis", 130000));
console.log(dealership.addCar("Subaru Impreza", 170, 10000, -390000));
console.log(dealership.sellCar("Mercedes C65", 230000));
console.log(dealership.salesReport("krava"));
