import numberCruncher from "../../src/modules/calculation/numberCruncher";

describe("numberCruncher tests", function () {
  // Functional test
  it("should return 9 when adding 2 and 7", function () {
    const calcObject = { numOne: 2, numTwo: 7, operator: "add" };
    const result = numberCruncher(calcObject);
    expect(result).toBe(9);
  });

  // Regression test
  it("should return 9 when adding 2 and 7", function () {
    const calcObject = { numOne: Infinity, numTwo: 1, operator: "add" };
    const result = numberCruncher(calcObject);
    expect(result).toBe(Infinity);
  });
});
