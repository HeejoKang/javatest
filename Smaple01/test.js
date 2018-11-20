/*
객체지향 프로그래밍? 무엇이 객체지향 프로그래밍인가? OOP의 개념이란?
절차지향 프로그래밍? C
함수형 프로그래밍?*/
var name = 'KHJ';

if (name == 'kHJ') 
{
 console.log("My name is kHJ");   
}
else if(name == 'KHJ')
{
    console.log("My name is KHJ");
}


for (var i = 0; i<5; i++)
{
    console.log("i = %d", i);
}

let time1 = 100;
/*for문과 while문의 차이
(1) for문 
    - 제한된 범위에서 반복문을 돌리고 싶을 때
    - 일정한 규칙에 따라 반복문을 돌리고 싶을 때(ex 1씩 증가하는 연산)
(2) while문
    - 외부의 특정 이벤트를 반복문 중에 실행시키고 싶을 때(out)
    - 무한히 반복하고 싶을 때 */

// while(time1 > 100)
// {
//     console.log("Result %d", time1);
//     time1--;
// }


// let time2 = 100;
// do {
//     console.log("Result: %d", time2);
//     time2--;
// } 
// while (time2> 100)
// {

// }

/*if문과 switch문의 결정적 차이
(1) switch문에서 break문의 의미
     */ 
let action = "eat";
switch (action) {
    case 'draw': console.log('draw'); break;
    case 'eat': console.log('eat'); break;
    default: console.log('nothing');
}
