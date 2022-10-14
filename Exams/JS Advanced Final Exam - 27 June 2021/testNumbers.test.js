const { expect } = require("chai");
const { testNumbers } = require("./testNumbers");

describe("TEST NUMBERS", function () {
    describe("SUM NUMBER", function () {
        it("Should return undefined if input is not a number", () => {
            expect(testNumbers.sumNumbers(2, "Georgi")).equal(undefined);
        });
        it("Should return undefined if input is not a number", () => {
            expect(testNumbers.sumNumbers({}, [])).equal(undefined);
        });
        it("Should return undefined if input is not a number", () => {
            expect(testNumbers.sumNumbers("Georgi", 4)).equal(undefined);
        });
        it("Should return undefined if input is not a number", () => {
            expect(testNumbers.sumNumbers("Georgi", "Dechev")).equal(undefined);
        });
        it("Should return sum if inputs are valid", () => {
            expect(testNumbers.sumNumbers(-1, 4)).equal("3.00");
        });
        it("Should return sum if inputs are valid", () => {
            expect(testNumbers.sumNumbers(3, 4)).equal("7.00");
        });
        it("Should return sum if inputs are valid", () => {
            expect(testNumbers.sumNumbers(3, -4)).equal("-1.00");
        });
        it("Should return sum if inputs are valid", () => {
            expect(testNumbers.sumNumbers(-3, -4)).equal("-7.00");
        });
    });
    describe("NUMBER CHECKER", function () {
        it("Should return sum if input is valid odd number", () => {
            expect(testNumbers.numberChecker(7)).equal("The number is odd!");
        });
        it("Should return sum if input is valid odd number", () => {
            expect(testNumbers.numberChecker(17)).equal("The number is odd!");
        });
        it("Should return sum if input is valid odd number", () => {
            expect(testNumbers.numberChecker(18)).equal("The number is even!");
        });
        it("Should return sum if input is valid odd number", () => {
            expect(testNumbers.numberChecker(8)).equal("The number is even!");
        });
        it("Should throw ERROR if input is invalid", () => {
            expect(() => testNumbers.numberChecker("Georgi")).to.Throw(
                "The input is not a number!",
            );
            expect(() => testNumbers.numberChecker(undefined)).to.Throw(
                "The input is not a number!",
            );
        });
    });
    describe("AVERAGE SUM ARRAY", function () {
        it("Should return average sum", () => {
            expect(testNumbers.averageSumArray([8, 4])).equal(6);
        });
        it("Should return average sum", () => {
            expect(testNumbers.averageSumArray([8])).equal(8);
        });
        it("Should return average sum", () => {
            expect(testNumbers.averageSumArray([8, 4, 15])).equal(9);
        });
    });
});
