//정해진 숫자만큼 출력하는 함수 만들기
//숫자 범위 정하기
//함수 선언
//for loop통해서 3번 연속으로 출력

function randomNum(min, max){
    

    
    var randNum = Math.floor(Math.random()*(max-min-1)+min);
    return randNum;
    
}
for(let i = 1; i<4; i++){
    console.log(randomNum(1,10));
}
