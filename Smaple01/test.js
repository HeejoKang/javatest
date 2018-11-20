/*
객체지향 프로그래밍? 무엇이 객체지향 프로그래밍인가? OOP의 개념이란?2
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
    
    switch문에서 case는 모두 변수 or 상수값을 나타냄 (bool타입이 아님)
    case조건값에 외부에서 접근이 가능한건가?
    상황마다 다른 상수값을 리턴하는 함수식에 사용한다? 흠...???  
    
(2) if문은 상황마다 내용이 바뀌고 switch는 아니다?*/ 
let action = "eat";
switch (action) {
    case 'draw': console.log('draw'); break;
    case 'eat': console.log('eat'); break;
    default: console.log('nothing');
}

/* git bash를 사용하는 경우
(1) git에서 지원하지 않는 기능을 사용할 때
(2) 마우스 사용을 최소화 하기 위해*/