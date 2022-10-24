const { expect } = require("Chai");
const { chooseYourCar } = require("./chooseYourCar");

describe("ALL", function () {
    describe("choosingType", () => {
        it("should throw 'invalid year'", () => {
            expect(chooseYourCar.choosingType("coupe", "green", 1899)).to.throw(
                Error,
                "Invalid year!",
            );
            expect(chooseYourCar.choosingType("coupe", "green", 2023)).to.throw(
                Error,
                "Invalid year!",
            );
        });
        it("should car error msg", () => {
            expect(chooseYourCar.choosingType("combi", "green", 2010)).to.throw(
                Error,
                "This type of car is not what you are looking for.",
            );
            expect(chooseYourCar.choosingType("coupe", "green", 2021)).to.throw(
                Error,
                "This type of car is not what you are looking for.",
            );
        });

        it("should return msg", () => {
            expect(
                chooseYourCar.choosingType("Sedan", "yellow", 2015),
            ).to.equal(
                `This yellow Sedan meets the requirements, that you have.`,
            );
            expect(
                chooseYourCar.choosingType("Sedan", "yellow", 2010),
            ).to.equal(
                `This yellow Sedan meets the requirements, that you have.`,
            );
            expect(
                chooseYourCar.choosingType("Sedan", "yellow", 2009),
            ).to.equal(
                `This Sedan is too old for you, especially with that yellow color.`,
            );
            expect(
                chooseYourCar.choosingType("Sedan", "yellow", 2005),
            ).to.equal(
                `This Sedan is too old for you, especially with that yellow color.`,
            );
        });
    });
    describe("brandName", () => {
        it("should throw error", () => {
            expect(chooseYourCar.brandName(["a", "s", "d"], 3)).to.throw(
                Error,
                "Invalid Information!",
            );
            expect(chooseYourCar.brandName(["a", "s", "d"], -1)).to.throw(
                Error,
                "Invalid Information!",
            );
            expect(chooseYourCar.brandName([1, 2, 3], "asd")).to.throw(
                Error,
                "Invalid Information!",
            );
            expect(chooseYourCar.brandName("", 3)).to.throw(
                Error,
                "Invalid Information!",
            );
            expect(chooseYourCar.brandName(undefined, 3)).to.throw(
                Error,
                "Invalid Information!",
            );
            expect(chooseYourCar.brandName({}, 3)).to.throw(
                Error,
                "Invalid Information!",
            );
        });
        it("should return new string", () => {
            expect(chooseYourCar.brandName(["a", "s", "d"], 2)).to.equal(
                "a, s",
            );
            expect(
                chooseYourCar.brandName(["a", "s", "d", "v", "g"], 2),
            ).to.equal("a, s, v, g");
        });
    });
    describe("carFuelConsumption", () => {
        it("should throw error", () => {
            expect(chooseYourCar.carFuelConsumption({}, 3)).to.throw(
                Error,
                "Invalid Information!",
            );
            expect(chooseYourCar.carFuelConsumption("asd", 3)).to.throw(
                Error,
                "Invalid Information!",
            );
            expect(chooseYourCar.carFuelConsumption(3, undefined)).to.throw(
                Error,
                "Invalid Information!",
            );
            expect(chooseYourCar.carFuelConsumption(3, {})).to.throw(
                Error,
                "Invalid Information!",
            );
            expect(chooseYourCar.carFuelConsumption(3, "asd")).to.throw(
                Error,
                "Invalid Information!",
            );
            expect(chooseYourCar.carFuelConsumption(undefined, 3)).to.throw(
                Error,
                "Invalid Information!",
            );
            expect(chooseYourCar.carFuelConsumption(-1, 3)).to.throw(
                Error,
                "Invalid Information!",
            );
            expect(chooseYourCar.carFuelConsumption(-1, -3)).to.throw(
                Error,
                "Invalid Information!",
            );
            expect(chooseYourCar.carFuelConsumption(1, -3)).to.throw(
                Error,
                "Invalid Information!",
            );
        });
        it("return consumption", () => {
            expect(chooseYourCar.carFuelConsumption(100, 6)).to.equal(
                `The car is efficient enough, it burns 6.00 liters/100 km.`,
            );
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal(
                `The car is efficient enough, it burns 7.00 liters/100 km.`,
            );
            expect(chooseYourCar.carFuelConsumption(100, 8)).to.equal(
                `The car burns too much fuel - 8.00 liters!`,
            );
        });
    });
});
