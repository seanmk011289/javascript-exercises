const convertToCelsius = function (num) {
  let conversion = ((num - 32) * 5) / 9;
  return parseFloat(conversion.toFixed(1));
};

const convertToFahrenheit = function (num) {
  let conversion = (num * 9) / 5 + 32;
  return parseFloat(conversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
