const { expect } = require("chai");
const { lookupChar } = require("./lookupChar");

describe("lookupChar", () => {
    //other

    it('Should return "Incorrect index" if first input is empty', () => {
        expect(lookupChar("", 0)).to.be.equal("Incorrect index");
    });

    //first input tests

    it('Should return "undefined" if first input is integer', () => {
        expect(lookupChar(0, 0)).to.be.undefined;
    });
    it('Should return "undefined" if first input is float number', () => {
        expect(lookupChar(0.1, 0)).to.be.undefined;
    });
    it('Should return "undefined" if first input is array', () => {
        expect(lookupChar([], 0)).to.be.undefined;
    });
    it('Should return "undefined" if first input is object', () => {
        expect(lookupChar({}, 0)).to.be.undefined;
    });
    it('Should return "undefined" if first input is function', () => {
        expect(lookupChar(function gosho() {}, 0)).to.be.undefined;
    });

    //second input tests

    it('Should return "undefined" if second input is string', () => {
        expect(lookupChar("asdasd", "0")).to.be.undefined;
    });
    it('Should return "undefined" if second input is float number', () => {
        expect(lookupChar("asdasd", 1.2)).to.be.undefined;
    });
    it('Should return "undefined" if second input is array', () => {
        expect(lookupChar("asdasd", [])).to.be.undefined;
    });
    it('Should return "undefined" if second input is object', () => {
        expect(lookupChar("asdasd", {})).to.be.undefined;
    });
    it('Should return "undefined" if second input is function', () => {
        expect(lookupChar("asdasd", function gosho() {})).to.be.undefined;
    });

    //upper index tests

    it('Should return "Incorrect index" if upper limit is broken', () => {
        expect(lookupChar("asdasd", 6)).to.be.equal("Incorrect index");
    });
    it('Should return "Incorrect index" if upper limit is broken', () => {
        expect(lookupChar("asdasd", 10)).to.be.equal("Incorrect index");
    });

    //lower index tests

    it('Should return "Incorrect index" if lower limit is broken', () => {
        expect(lookupChar("asdasd", 6)).to.be.equal("Incorrect index");
    });
    it('Should return "Incorrect index" if lower limit is broken', () => {
        expect(lookupChar("asdasd", -1)).to.be.equal("Incorrect index");
    });

    //char tests

    it('Should return "a"', () => {
        expect(lookupChar("asdasd", 0)).to.be.not.equal(undefined);
        expect(lookupChar("asdasd", 0)).to.be.not.equal("Incorrect index");
        expect(lookupChar("asdasd", 0)).to.be.equal("a");
    });
    it('Should return "s"', () => {
        expect(lookupChar("asdasd", 1)).to.be.not.equal(undefined);
        expect(lookupChar("asdasd", 1)).to.be.not.equal("Incorrect index");
        expect(lookupChar("asdasd", 1)).to.be.equal("s");
    });
    it('Should return "d"', () => {
        expect(lookupChar("asdasd", 5)).to.be.not.equal(undefined);
        expect(lookupChar("asdasd", 5)).to.be.not.equal("Incorrect index");
        expect(lookupChar("asdasd", 5)).to.be.equal("d");
    });
});
