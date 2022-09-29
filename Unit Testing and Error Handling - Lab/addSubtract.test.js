const { expect } = require("chai");
const { createCalculator } = require("./addSubtract");

describe("Add Subtract", function () {
    let calculator;

    beforeEach(() => {
        calculator = createCalculator();
    });

    it("TEST N1 - Start from 0", () => {
        let value = calculator.get();
        expect(value).to.be.equal(0);
    });
    it("TEST N2 - Add", () => {
        calculator.add(2);
        calculator.add(3);
        let value = calculator.get();
        expect(value).to.be.equal(5);
    });
    it("TEST N3- Subtract", () => {
        calculator.subtract(3);
        calculator.subtract(2);
        let value = calculator.get();
        expect(value).to.be.equal(-5);
    });
    it("TEST N4 - Add&Subtract float numbers", () => {
        calculator.add(5.3);
        calculator.subtract(1.1);
        expect(calculator.get()).to.be.equal(5.3 - 1.1);
    });
    it("TEST N5 - Double subtract float numbers", () => {
        calculator.add(10);
        calculator.subtract(7);
        calculator.add("-2");
        calculator.subtract(-1);
        expect(calculator.get()).to.be.equal(2);
    });
    it("TEST N6 - Add / Subtract string input", () => {
        calculator.add("hello");
        expect(calculator.get()).to.be.NaN;
        calculator.subtract("hello");
        expect(calculator.get()).to.be.NaN;
    });
});
