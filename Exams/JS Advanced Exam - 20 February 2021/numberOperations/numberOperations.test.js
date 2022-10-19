const { numberOperations } = require("./03. Number Operations_Resources");
const expect = require("chai").expect;

describe("ALL TESTS", () => {
    describe("powNumber", () => {
        it("returns the power of the given number", () => {
            expect(numberOperations.powNumber(0)).to.equal(0);
            expect(numberOperations.powNumber(5)).to.equal(25);
        });
    });
    describe("numberChecker", () => {
        it("If the input is not a number the function throws an error", () => {
            expect(() => numberOperations.numberChecker("asd")).to.throw(
                Error,
                "The input is not a number!",
            );
            expect(() => numberOperations.numberChecker({})).to.throw(
                Error,
                "The input is not a number!",
            );
            expect(() => numberOperations.numberChecker(undefined)).to.throw(
                Error,
                "The input is not a number!",
            );
        });
        it("If the input is a number < 100 return msg.", () => {
            expect(numberOperations.numberChecker(0)).to.equal(
                "The number is lower than 100!",
            );
            expect(numberOperations.numberChecker(99)).to.equal(
                "The number is lower than 100!",
            );
            expect(numberOperations.numberChecker(13)).to.equal(
                "The number is lower than 100!",
            );
            expect(numberOperations.numberChecker(-1)).to.equal(
                "The number is lower than 100!",
            );
        });

        it("If the input is a number > 100 return msg.", () => {
            expect(numberOperations.numberChecker(100)).to.equal(
                "The number is greater or equal to 100!",
            );
            expect(numberOperations.numberChecker(101)).to.equal(
                "The number is greater or equal to 100!",
            );
            expect(numberOperations.numberChecker(420)).to.equal(
                "The number is greater or equal to 100!",
            );
            expect(numberOperations.numberChecker(1010)).to.equal(
                "The number is greater or equal to 100!",
            );
            expect(numberOperations.numberChecker(101010)).to.be.equal(
                "The number is greater or equal to 100!",
            );
        });
    });
    describe("sumArrays", () => {
        it("returns new array, which represents the sum of the two arrays by indexes", () => {
            expect(
                numberOperations.sumArrays([10, 20, 30], [10, 30, 50, 60]),
            ).to.eql([20, 50, 80, 60]);
        });
    });
});
