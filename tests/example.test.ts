import {assert, expect } from "chai";
import "mocha";

export const hello = () => "Hello world!";

describe("Hello function", () => {
    before(() => {
        // before all tests
    });

    after(() => {
        // after all tests
    });

    it("should return hello world", () => {
        const result = hello();
        expect(result).to.equal("Hello world!");
        assert.isDefined(process.env);
    });
});

describe("Hello failure", () => {
    it("should fail", () => {
        expect(true).to.equal(false);
        assert.isFalse(true);
    })
})