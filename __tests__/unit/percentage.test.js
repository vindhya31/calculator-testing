import percentage from "../../src/modules/calculation/util/percentage";

describe("percentage tests", function () {
  // Functional test
  it("should result in 50 when given 3 and 6", function () {
    expect(percentage(3, 6)).toBe(40);
  });

  // Regression tests
  it("should result in 0 when given -1 and 100", function () {
    expect(percentage(-1, 100)).toBe(0);
  });

  it("should result in Infinity when given 1 and 0", function () {
    expect(percentage(1, 0)).toBe(Infinity);
  });
});
