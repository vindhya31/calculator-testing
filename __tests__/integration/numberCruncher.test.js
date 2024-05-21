import numberCruncher from "../../src/modules/calculation/numberCruncher";

describe("numberCruncher integration tests", function () {
  // Functional test
  it("should return 33.3 given 3 and 9", function () {
    const calcObject = { numOne: 3, numTwo: 9, operator: "percentage" };
    const result = numberCruncher(calcObject);
    expect(result).toBe(33);
  });
});
