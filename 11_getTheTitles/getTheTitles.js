const getTheTitles = function (arr) {
  return arr.reduce((x, y) => {
    return [...x, y.title];
  }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
