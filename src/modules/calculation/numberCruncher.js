import percentage from "./util/percentage.js";
import exp from "./util/exp.js";
import gcd from "./util/gcd.js";

const numberCruncher = (calc) => {
  const x = Number(calc.numOne);
  const y = Number(calc.numTwo);
  const operation = calc.operator;

  switch (operation) {
    case "add":
      return x + y;
    case "subtract":
      return x - y;
    case "multiply":
      return x * y;
    case "divide":
      return x / y;
    case "percentage":
      return Math.floor(percentage(x, y));
    case "exponent":
      return exp(x, y);
    case "gcd":
      return gcd(x, y);
    default:
      return null;
  }
};

export default numberCruncher;
