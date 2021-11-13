//최대값 최소값
// function maxPrint(arry) {
//   let max = -1;
//   let min = 1000;
//   for (let i = 0; i < arry.length; i++) {
//     if (arry[i] > max) {
//       max = arry[i];
//     }
//     if (arry[i] < min) {
//       min = arry[i];
//     }
//   }
//   // console.log("Min = " + min + ", Max = " + max)
//   return [max, min];
// }

//
// const max = [1, 2, 5, 1, 6, 7, 9];
// // maxPrint(arry)
// // console.log(maxPrint(arry))
// // console.log(maxPrint(arry));
// // const arry2 = [1231, 12566, 745735, 124];
// // console.log(maxPrint(arry2));
// const myMaxNum = maxPrint(max);
// console.log(myMaxNum);
// ----------------------------------------------------------------
//정해진 범위안에서 숫자 뽑기

// function randomNumber(start, end) {
//   const arr = [];
//   for (let i = 0; i < 10; i++) {
//     let rand = Math.floor(Math.random() * (end - start + 1)) + start;
//     arr.push(rand);
//   }
//   return arr;
// }

// console.log(randomNumber(1, 100));
// console.log(randomNumber(7, 15));
// console.log(randomNumber(12, 23));
// --------------------------------------------------------------

// //중복없는 무작위 숫자 뽑기
// for(let i = 0; i < 10; i++){

//   const rand = [];
//   while (true) {
//     let randomNumber2 = Math.floor(Math.random() * 45) + 1;
//     const index = rand.indexOf(randomNumber2);
//     if (index >= 0) {
//       continue;
//     }
//     let newLength = rand.push(randomNumber2);
//     if (newLength === 6) {
//       break;
//     }
//   }

//   console.log(rand);

// }
