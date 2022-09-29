const { expect } = require("chai");
const { rgbToHexColor } = require("./rgbToHex");

describe("RGBtoHexColor", () => {
    it("black", () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });
    it("white", () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });
    it("blue", () => {
        expect(rgbToHexColor(35, 68, 101)).to.equal("#234465");
    });
    it("15", () => {
        expect(rgbToHexColor(15, 15, 15)).to.equal("#0F0F0F");
    });
    it("missing parameters", () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });
    it("correct lower parameters", () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });
    it("correct upper parameters", () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });
    it("correct integer parameters", () => {
        expect(rgbToHexColor(1.1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 1.1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 1.1)).to.be.undefined;
    });
    it("correct number parameters", () => {
        expect(rgbToHexColor('1', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, '1', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, '1')).to.be.undefined;
    });
})
