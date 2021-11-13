function maxPrint(arry) {
  let max = -1;
  let min = 1000;
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] > max) {
      max = arry[i];
    }
    if (arry[i] < min) {
      min = arry[i];
    }
  }
  // console.log("Min = " + min + ", Max = " + max)
  return [max, min];
}

const max = [1, 2, 5, 1, 6, 7, 9];
// maxPrint(arry)
// console.log(maxPrint(arry))
// console.log(maxPrint(arry));
// const arry2 = [1231, 12566, 745735, 124];
// console.log(maxPrint(arry2));
const myMaxNum = maxPrint(max);
console.log(myMaxNum);
