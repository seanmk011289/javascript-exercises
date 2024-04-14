const fibonacci = function (numb) {
  let num = parseInt(numb);
  if (num < 0) {
    return "OOPS";
  }
  if (num == 0) {
    return 0;
  }
  let init = [1];
  if (num == 1) {
    return 1;
  }
  for (var i = 0; i < num; i++) {
    if (init.length == 1) {
      init.push(1);
      console.log(i, "first");
      i++;
    } else {
      let curr = init[i - 1];
      console.log(curr, i);
      let prev = init[i - 2];
      console.log(prev, i);
      init.push(prev + curr);
      console.log(init);
    }
  }
  return init[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
