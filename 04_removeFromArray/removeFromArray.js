const removeFromArray = function (arr, args) {
  /* return arr.filter(x => x != val); */
  let finalArr = arr;
  let argList = [...arguments].slice(1, [...arguments].length);
  argList.forEach((x) => {
    finalArr = finalArr.filter((y) => y !== x);
  });
  return finalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
