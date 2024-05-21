const percentage = function (x, y) {
  if (x < 0 || y < 0) {
    return 0;
  } else {
    return (x / y) * 100;
  }
};

export default percentage;
