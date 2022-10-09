// const { assert } = require("chai");
// const { describe } = require("mocha");
// const { carService } = require("./carService");
// describe("carService", () => {
//     describe("isItExpensive", () => {
//         it("returns msg for expensive parts", () => {
//             assert(
//                 carService.isItExpensive("Engine") ===
//                     `The issue with the car is more severe and it will cost more money`,
//             );
//         });
//         it("returns msg for expensive parts", () => {
//             assert(
//                 carService.isItExpensive("Transmission") ===
//                     `The issue with the car is more severe and it will cost more money`,
//             );
//         });
//         it("returns msg for cheap parts", () => {
//             assert(
//                 carService.isItExpensive("Tyres") ===
//                     `The overall price will be a bit cheaper`,
//             );
//         });
//         it("returns msg for cheap parts", () => {
//             assert(
//                 carService.isItExpensive("Fuel pump") ===
//                     `The overall price will be a bit cheaper`,
//             );
//         });
//     });
//     describe("subtract 10", () => {
//         //Bad Input
//         it("returns 'no discount msg", () => {
//             assert(
//                 carService.discount(0, 20) === "You cannot apply a discount",
//             );
//         });
//         it("returns 'no discount msg", () => {
//             assert(
//                 carService.discount(1, 20) === "You cannot apply a discount",
//             );
//         });
//         it("returns 'no discount' msg", () => {
//             assert(
//                 carService.discount(2, 20) === "You cannot apply a discount",
//             );
//         });
//         it("returns '15% discount' price", () => {
//             assert(
//                 carService.discount(3, 20) === "Discount applied! You saved 3$",
//             );
//         });
//         it("returns '15% discount' price", () => {
//             assert(
//                 carService.discount(4, 20) === "Discount applied! You saved 3$",
//             );
//         });
//         it("returns '15% discount' price", () => {
//             assert(
//                 carService.discount(5, 20) === "Discount applied! You saved 3$",
//             );
//         });
//         it("returns '15% discount' price", () => {
//             assert(
//                 carService.discount(6, 20) === "Discount applied! You saved 3$",
//             );
//         });
//         it("returns '15% discount' price", () => {
//             assert(
//                 carService.discount(7, 20) === "Discount applied! You saved 3$",
//             );
//         });
//         it("returns '30% discount' price", () => {
//             assert(
//                 carService.discount(8, 20) === "Discount applied! You saved 6$",
//             );
//         });
//         it("returns '30% discount' price", () => {
//             assert(
//                 carService.discount(9, 20) === "Discount applied! You saved 6$",
//             );
//         });
//         it("returns 'invalid input' msg", () => {
//             assert(
//                 carService.discount("NaN", 20) === new Error("Invalid input"),
//             );
//         });
//         it("returns 'invalid input' msg", () => {
//             assert(
//                 carService.discount(9, "NaN") === new Error("Invalid input"),
//             );
//         });
//         it("returns 'invalid input' msg", () => {
//             assert(carService.discount([], 20) === new Error("Invalid input"));
//         });
//         it("returns 'invalid input' msg", () => {
//             assert(carService.discount(9, []) === new Error("Invalid input"));
//         });
//         it("returns 'invalid input' msg", () => {
//             assert(carService.discount({}, 20) === new Error("Invalid input"));
//         });
//         it("returns 'invalid input' msg", () => {
//             assert(carService.discount(9, {}) === new Error("Invalid input"));
//         });
//         it("returns 'invalid input' msg", () => {
//             assert(
//                 carService.discount(function name() {}, 20) ===
//                     new Error("Invalid input"),
//             );
//         });
//         it("returns 'invalid input' msg", () => {
//             assert(
//                 carService.discount(9, function name() {}) ===
//                     new Error("Invalid input"),
//                 );
//         });
//     });

// describe("partsToBuy", () => {

//     it("returns 'undefined' if second input is string", () => {
//         assert(carService.partsToBuy(10, "5") === undefined);
//     });
//     it("returns 'undefined' if first input is string", () => {
//         assert(carService.partsToBuy("10", 5) === undefined);
//     });
//     it("returns 15 with input 10, 5", () => {
//         assert(carService.partsToBuy(10, 5) === 15);
//     });
//     it("returns 15 with input 10, 5", () => {
//         assert(carService.partsToBuy(10.5, 5.5) === 16);
//     });
//     it("returns 15 with input 10, -5.5", () => {
//         assert(carService.partsToBuy(10, -5.5) === 4.5);
//     });
//     it("returns 0 with input -10, 10", () => {
//         assert(carService.partsToBuy(-10, 10) === 0);
//     });
// });
// });

const { expect } = require("Chai");
const { carService } = require("./carService");

describe("carService UNIT TESTS", () => {
    describe("isItExpensive TESTS:", () => {
        it("returns msg for expensive parts", () => {
            expect(carService.isItExpensive("Engine")).equal(
                "The issue with the car is more severe and it will cost more money",
            );
        });
        it("returns msg for expensive parts", () => {
            expect(carService.isItExpensive("Transmission")).equal(
                "The issue with the car is more severe and it will cost more money",
            );
        });
        it("returns msg for cheap parts", () => {
            expect(carService.isItExpensive("Tyre")).equal(
                "The overall price will be a bit cheaper",
            );
        });
    });

    describe("discount TESTS", () => {
        it("returns 'no discount msg", () => {
            expect(carService.discount(2, 100)).equal(
                "You cannot apply a discount",
            );
        });
        it("returns 'no discount' msg", () => {
            expect(carService.discount(1, 100)).equal(
                "You cannot apply a discount",
            );
        });
        it("returns '15% discount' price", () => {
            expect(carService.discount(3, 100)).equal(
                "Discount applied! You saved 15$",
            );
        });
        it("returns '15% discount' price", () => {
            expect(carService.discount(7, 100)).equal(
                "Discount applied! You saved 15$",
            );
        });
        it("returns '30% discount' price", () => {
            expect(carService.discount(8, 100)).equal(
                "Discount applied! You saved 30$",
            );
        });
        it("returns 'Invalid input' ERROR", () => {
            expect(() => carService.discount("", 100)).throw("Invalid input");
        });
        it("returns 'Invalid input' ERROR", () => {
            expect(() => carService.discount("", "")).throw("Invalid input");
        });
        it("returns 'Invalid input' ERROR", () => {
            expect(() => carService.discount(2, "")).throw("Invalid input");
        });
    });

    describe("partsToBuy TESTS", () => {
        it("returns total price of neededParts", () => {
            expect(
                carService.partsToBuy(
                    [
                        { part: "blowoff valve", price: 145 },
                        { part: "coil springs", price: 230 },
                    ],
                    ["blowoff valve", "injectors"],
                ),
            ).equal(145);
        });
        it("returns total price of neededParts", () => {
            expect(
                carService.partsToBuy(
                    [
                        { part: "blowoff valve", price: 145 },
                        { part: "coil springs", price: 230 },
                    ],
                    ["blowoff valve", "injectors", "coil springs"],
                ),
            ).equal(375);
        });
        it("If partsCatalog is empty, return 0", () => {
            expect(
                carService.partsToBuy([], ["blowoff valve", "injectors"]),
            ).equal(0);
        });
        it("If neededParts is empty, return 0", () => {
            expect(
                carService.partsToBuy(
                    [{ part: "blowoff valve", price: 145 }],
                    [],
                ),
            ).equal(0);
        });
        it("returns 'Invalid input' ERROR", () => {
            expect(() =>
                carService.partsToBuy("catalog", [
                    "tyres",
                    "transmissions",
                    "body",
                ]),
            ).throw("Invalid input");
        });
        it("returns 'Invalid input' ERROR", () => {
            expect(() =>
                carService.partsToBuy(
                    ["tyres", "transmissions", "body"],
                    "parts",
                ),
            ).throw("Invalid input");
        });
        it("returns 'Invalid input' ERROR", () => {
            expect(() => carService.partsToBuy("catalog", "parts")).throw(
                "Invalid input",
            );
        });
    });
});
