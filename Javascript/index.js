function s(name, number) {
  let arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // 25// 24 + 3 = 27 x >25
  name = name.toLowerCase().split("");
  let solution = name.map(function (e) {
    // return arr.includes(e)?arr[arr.indexOf(e)+number]:' ';
    if (arr.includes(e)) {
      if (arr.indexOf(e) + number > 25) {
        return arr[arr.indexOf(e) + number - 26];
      } else if (number < 0 && arr.indexOf(e) + number < 0) {
        return arr[arr.indexOf(e) + number + 26];
      } else {
        return arr[arr.indexOf(e) + number];
      }
    } else {
      return e;
    }
  });
  console.log(solution);
  return solution.join("").toUpperCase();
}
console.log(s("", -3));
// "OLSSV,OV,HYL,V"
//khoor_krz_duh_brx
