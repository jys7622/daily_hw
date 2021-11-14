//분기별 매출
const sales = {
  January: 500,
  February: 150,
  March: 190,
  April: 120,
  May: 140,
  June: 200,
  July: 150,
  August: 250,
  September: 400,
  October: 225,
  November: 310,
  December: 300,
};

//분기별 매출 평균

let firstQuarter = Math.floor(
  (sales.January + sales.February + sales.March) / 3
);
let secondQuarter = Math.floor((sales.April + sales.May + sales.June) / 3);
let thirdQuarter = Math.floor(
  (sales.July + sales.August + sales.September) / 3
);
let forthQuarter = Math.floor(
  (sales.October + sales.November + sales.December) / 3
);

console.log(`1분기 매출 평균 : ${firstQuarter}만원`);
console.log(`2분기 매출 평균 : ${secondQuarter}만원`);
console.log(`3분기 매출 평균 : ${thirdQuarter}만원`);
console.log(`4분기 매출 평균 : ${forthQuarter}만원`);
//분기별 매출 평균중 가장 높은 값

function maxSales(arry) {
  let max = -1;
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] > max) {
      max = arry[i];
    }
  }
  return max;
}

const max = [firstQuarter, secondQuarter, thirdQuarter, forthQuarter];
const mymaxSales = maxSales(max);
console.log(`최고매출은  ${mymaxSales}만원 입니다`);

//
