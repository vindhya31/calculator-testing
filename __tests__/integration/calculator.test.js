import request from "supertest";
import server from "../../src/server";

describe("calculator server tests POST", function () {
  it("should return 7 adding 6 and 1 in POST", function (done) {
    const calculation = { numOne: "6", numTwo: "1", operator: "add" };
    request(server)
      .post("/calculator")
      .send(calculation)
      .expect(200, "7", done);
  });

  it("should return 50 as percentage of 3 and 6 in POST", function (done) {
    const calculation = { numOne: "3", numTwo: "6", operator: "percentage" };
    request(server)
      .post("/calculator")
      .send(calculation)
      .expect(200, "50", done);
  });
});

describe("calculator server tests GET", function () {
  it("should return 7 adding 6 and 1 in GET", function (done) {
    request(server).get("/calculator/6/add/1").expect(200, { result: 7 }, done);
  });

  it("should return 50 as percentage of 3 and 6 in GET", function (done) {
    request(server)
      .get("/calculator/3/percentage/6")
      .expect(200, { result: 50 }, done);
  });
});
