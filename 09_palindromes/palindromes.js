const palindromes = function (x) {
  var p1 = x.replaceAll(" ", "");
  p1 = p1.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
  p1 = p1.split("").join("");
  var p2 = p1.split("").reverse().join("");
  if (p2 == p1) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
