const { expect } = require("chai");
const { isOddOrEven } = require("./isOddOrEven");

describe("isOddOrEven", () => {
    it('Should return "undefined" if input is integer', () => {
        expect(isOddOrEven(10)).to.be.undefined;
    });
    it('Should return "undefined" if input is float number', () => {
        expect(isOddOrEven(10.3)).to.be.undefined;
    });
    it('Should return "undefined" if input is array', () => {
        expect(isOddOrEven([])).to.be.undefined;
    });
    it('Should return "undefined" if input is object', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });
    it('Should return "undefined" if input is function', () => {
        expect(isOddOrEven(function gosho() {})).to.be.equal(undefined);
    });
    it('Should return "even" if input is length is even number', () => {
        expect(isOddOrEven("12345678")).to.be.equal("even");
    });
    it('Should return "odd" if input is number', () => {
        expect(isOddOrEven("1234567")).to.be.equal("odd");
    });
    it('Should return "even" if input is length is even number', () => {
        expect(isOddOrEven("1234")).to.be.equal("even");
    });
    it('Should return "odd" if input is number', () => {
        expect(isOddOrEven("123")).to.be.equal("odd");
    });
});
