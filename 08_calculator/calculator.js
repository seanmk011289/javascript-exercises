const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((x, y) => {
    return x + y;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((x, y) => {
    return x * y;
  }, 1);
};

const power = function (x, y) {
  let arr = [];
  for (var i = 0; i < y; i++) {
    arr = [...arr, x];
  }
  return arr.reduce((a, b) => {
    return a * b;
  }, 1);
};

const factorial = function (x) {
  let arr = [];
  for (var i = x; i > 0; i--) {
    arr = [...arr, x];
    x = x - 1;
  }
  console.log(arr);
  return arr.reduce((a, b) => {
    return a * b;
  }, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
