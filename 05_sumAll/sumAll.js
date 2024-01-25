const sumAll = function (args) {
  let runningSum = 0;
  let nums = [...arguments].sort();
  if (nums.every((x) => x >= 0) && nums.every((x) => typeof x == "number")) {
    for (var i = nums[1]; i >= nums[0]; i--) {
      runningSum += i;
    }
  } else {
    return "ERROR";
  }
  return runningSum;
};

// Do not edit below this line
module.exports = sumAll;
