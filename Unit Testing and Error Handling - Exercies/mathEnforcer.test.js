const { expect } = require("chai");
const { mathEnforcer } = require("./mathEnforcer");
describe("mathEnforcer", () => {
    describe("mathEnforcer.addFive(num)", () => {
        it("should be close to 6 within 6.99", () => {
            expect(mathEnforcer.addFive(10.001)).equal(10.001 + 5);
        });
        it("mathEnforcer.addFive(4) should return 9", () => {
            expect(mathEnforcer.addFive(4)).to.equal(9);
        });
        it("mathEnforcer.addFive(-4) should return 1", () => {
            expect(mathEnforcer.addFive(-4)).to.equal(1);
        });
        it("mathEnforcer.addFive('gosho') should return undefined", () => {
            expect(mathEnforcer.addFive("gosho")).to.be.undefined;
        });
        it("mathEnforcer.addFive('5') should return undefined", () => {
            expect(mathEnforcer.addFive("5")).to.be.undefined;
        });
        it("mathEnforcer.addFive([5]) should return undefined", () => {
            expect(mathEnforcer.addFive([5])).to.be.undefined;
        });
        it("mathEnforcer.addFive(0) should return 5", () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });
        it("mathEnforcer.addFive() should return undefined", () => {
            expect(mathEnforcer.addFive()).to.be.undefined;
        });
        it("mathEnforcer.addFive({gosho:5}) should return undefined", () => {
            expect(mathEnforcer.addFive({ gosho: 5 })).to.be.undefined;
        });
    });

    describe("mathEnforcer.subtractTen(num)", () => {
        it("mathEnforcer.subtractTen(4) should return -6", () => {
            expect(mathEnforcer.subtractTen(4)).to.equal(-6);
        });
        it("mathEnforcer.subtractTen(-4) should return -14", () => {
            expect(mathEnforcer.subtractTen(-4)).to.equal(-14);
        });
        it("mathEnforcer.subtractTen('gosho') should return undefined", () => {
            expect(mathEnforcer.subtractTen("gosho")).to.be.undefined;
        });
        it("mathEnforcer.subtractTen(0) should return -10", () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        });
        it("mathEnforcer.subtractTen(10) should return 0", () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });
        it("mathEnforcer.subtractTen(5) should return -5", () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });
        it("mathEnforcer.subtractTen(10.001) should be close to 0.001", () => {
            expect(mathEnforcer.subtractTen(10.001)).equal(10.001 - 10);
        });
        it("mathEnforcer.subtractTen('5') should return undefined", () => {
            expect(mathEnforcer.subtractTen("5")).to.be.undefined;
        });
        it("mathEnforcer.subtractTen([5]) should return undefined", () => {
            expect(mathEnforcer.subtractTen([5])).to.be.undefined;
        });
        it("mathEnforcer.subtractTen() should return undefined", () => {
            expect(mathEnforcer.subtractTen()).to.be.undefined;
        });
        it("mathEnforcer.subtractTen({gosho:5}) should return undefined", () => {
            expect(mathEnforcer.subtractTen({ gosho: 5 })).to.be.undefined;
        });
    });

    describe("mathEnforcer.sum(num1,num2)", () => {
        it("mathEnforcer.sum(2,-8) should return -6", () => {
            expect(mathEnforcer.sum(2, -8)).to.equal(-6);
        });
        it("mathEnforcer.sum(2,3) should return 5", () => {
            expect(mathEnforcer.sum(2, 3)).to.equal(5);
        });
        it("mathEnforcer.sum('gosho',3) should return undefined", () => {
            expect(mathEnforcer.sum("gosho", 3)).to.be.undefined;
        });
        it("mathEnforcer.sum('gosho','gosho') should return undefined", () => {
            expect(mathEnforcer.sum("gosho", "gosho")).to.be.undefined;
        });
        it("mathEnforcer.sum(3,'gosho') should return undefined", () => {
            expect(mathEnforcer.sum(3, "gosho")).to.be.undefined;
        });

        it("mathEnforcer.sum(-5,-5) should return -10", () => {
            expect(mathEnforcer.sum(-5, -5)).to.equal(-10);
        });
        it("mathEnforcer.sum([-5],[-5]) should return undefined", () => {
            expect(mathEnforcer.sum([-5], [-5])).to.be.undefined;
        });
        it("mathEnforcer.sum('-5','-5') should return undefined", () => {
            expect(mathEnforcer.sum("-5", "-5")).to.be.undefined;
        });
        it("mathEnforcer.sum([-5,-5]) should return undefined", () => {
            expect(mathEnforcer.sum([-5, -5])).to.be.undefined;
        });
        it("mathEnforcer.sum(10.0001,1.009) should be close to 10.0019", () => {
            expect(mathEnforcer.sum(10.0001, 0.001)).equal(10.0001 + 0.001);
        });
        it("mathEnforcer.sum() should return undefined", () => {
            expect(mathEnforcer.sum()).to.be.undefined;
        });
        it("mathEnforcer.sum(0,0) should return undefined", () => {
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
        });
    });
});
