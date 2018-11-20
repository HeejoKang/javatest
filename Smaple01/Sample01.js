/*자바스크립트의 역사
1. 변수 선언
    (1) 자료형 범위 제약이 없는 변수 var
    (2) 자료형 범위 제약이 있는 변수 let
    (3) 메모리에 할당 후 변경할 수 없는 변수 const == 상수
    
2. 자료형
    (1) Boolean True/False 논리형 자료형
    (2) Number 정수형 자료형
    (3) String
    (4) undefined
    (5) null
    (6) Object 객체를 값으로 갖는 자료형
    [ctrl] + / 블럭된 전체 문장을 주석처리
    === 연산자: 객체와 객체 간 비교/자료형의 비교(자료형이 같다면 true, 다르다면 false)*/

// let name = "홍길동" 
// let age = 30;
// console.log(age);

let name = "HJ";
let len = name.length;
console.log(len);

let newName = name.replace('J', 'Sam'); //원래의 값을 유지하면서 새로운 값을 리턴하는 방식
console.log(newName);

let char = newName.charAt(2);
console.log(char);

console.log(newName.toUpperCase());
console.log(newName.toLowerCase());

var x = 0;
x += 5;
console.log(x);

//형변환(타입캐스팅)//
console.log('Hello' + 'World');
console.log('1'+2+3+4); //문자형+숫자형 조합 ---> 모두 문자형으로 형변환 후 출력
console.log(123 == '123'); 