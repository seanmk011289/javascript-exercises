const findTheOldest = function (arr) {
  let year = new Date().getFullYear();
  let filterWithYear = arr
    .filter((x) => x.yearOfDeath)
    .map((x) => {
      return { ...x, age: x.yearOfDeath - x.yearOfBirth };
    });
  let filterWithoutYear = arr
    .filter((x) => !x.yearOfDeath)
    .map((x) => {
      return { ...x, age: year - x.yearOfBirth };
    });
  let combined = [...filterWithYear, ...filterWithoutYear];
  console.log(combined);
  return combined.sort((x, y) => y.age - x.age)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
