const { expect } = require("chai");
const { sum } = require("./sumNumbers");

describe("sumNumbers Checker", () => {
    it("return NaN if there is invalid element", () => {
        expect(isNaN(sum([1, 2, "gosho"]))).to.be.equal(true);
    });
    it("return sum of one element", () => {
        expect(sum([20])).to.equal(20);
    });
    it("return the sum of all elements", () => {
        expect(sum([4, 6])).to.equal(10);
    });
});
