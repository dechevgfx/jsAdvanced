const { expect } = require("chai");
const { addFive, subtractTen, sum } = require("./mathEnforcer");

//ADD FIVE TESTS
describe("Add Five Tests", () => {
    it('Should return "undefined" if input is string', () => {
        expect(addFive("10")).to.be.undefined;
    });
    it('Should return "15" if input is negative', () => {
        expect(addFive(-10)).to.be.equal(15);
    });
    it('Should return "6" if input is negative', () => {
        expect(addFive(-1)).to.be.equal(6);
    });
    it('Should return "undefined" if input is array', () => {
        expect(addFive([])).to.be.undefined;
    });
    it('Should return "undefined" if input is object', () => {
        expect(addFive({})).to.be.undefined;
    });
    it('Should return "undefined" if input is function', () => {
        expect(addFive(function gosho() {})).to.be.undefined;
    });
    it('Should return "6" if input is 1', () => {
        expect(addFive(1)).to.be.equal(6);
    });
    it('Should return "10" if input is 5', () => {
        expect(addFive(5)).to.be.equal(10);
    });
});

//SUBTRACT TEN TESTS

describe("Subtract Ten Tests", () => {
    it('Should return "undefined" if input is string', () => {
        expect(subtractTen("10")).to.be.undefined;
    });
    it('Should return "undefined" if input is array', () => {
        expect(subtractTen([])).to.be.undefined;
    });
    it('Should return "undefined" if input is object', () => {
        expect(subtractTen({})).to.be.undefined;
    });
    it('Should return "undefined" if input is function', () => {
        expect(subtractTen(function gosho() {})).to.be.undefined;
    });
    it('Should return "-9" if input is 1', () => {
        expect(subtractTen(1)).to.be.equal(-9);
    });
    it('Should return "-5" if input is 5', () => {
        expect(subtractTen(5)).to.be.equal(-5);
    });
    it('Should return "10" if input is 20', () => {
        expect(subtractTen(20)).to.be.equal(10);
    });
});

//SUM TESTS

describe("Sum Tests", () => {
    it('Should return "undefined" if both input is string', () => {
        expect(sum("10", "10")).to.be.undefined;
    });
    it('Should return "undefined" if first input is string', () => {
        expect(sum("10", 10)).to.be.undefined;
    });
    it('Should return "undefined" if second input is string', () => {
        expect(sum(10, "10")).to.be.undefined;
    });
    it('Should return "undefined" if first input is array', () => {
        expect(sum([], 10)).to.be.undefined;
    });
    it('Should return "undefined" if second input is array', () => {
        expect(sum(10, [])).to.be.undefined;
    });
    it('Should return "undefined" if first input is object', () => {
        expect(sum({}, 10)).to.be.undefined;
    });
    it('Should return "undefined" if second input is object', () => {
        expect(sum(10, {})).to.be.undefined;
    });
    it('Should return "undefined" if first input is function', () => {
        expect(sum(function gosho() {}, 10)).to.be.undefined;
    });
    it('Should return "undefined" if second input is function', () => {
        expect(sum(10, function gosho() {})).to.be.undefined;
    });
    it('Should return "3" if input is 1, 2', () => {
        expect(sum(1, 2)).to.be.equal(3);
    });
    it('Should return "5" if input is -5, 10', () => {
        expect(sum(-5, 10)).to.be.equal(5);
    });
    it('Should return "-5" if input is -15, 10', () => {
        expect(sum(-15, 10)).to.be.equal(-5);
    });
    it('Should return "15" if input is 5, 10', () => {
        expect(sum(5, 10)).to.be.equal(15);
    });
});
