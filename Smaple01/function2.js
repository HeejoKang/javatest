//함수의 재귀호출//
function testFunc(val)
{
    if(val > 0)
    {
        console.log("val = %d", val);
        testFunc(--val);
    }
}

testFunc(10);


//익명함수의 재귀호출 or 재호출//
var method = function(val) {
    if(val>0)
    {
        console.log("val = %d", val);
        arguments.callee(--val); //함수 자신을 가리키는 명령어 callee
    }
}
method(10);


//내장함수 선언: 함수 안에 함수를 선언//
//JS에서 함수의 시그니처는 오로지 '함수명'이다. 
//함수2를 선언할 시 주의하지 않으면 오버라이딩 현상 때문에 기존 '함수명'을 갖고 있던 함수1이 하이딩된다.
//여기서는 2로 이름을 바꿔주었다
function testFunc2() {
    var a = 1;
    function innerMethod() {
        return a+1;
    }

    return innerMethod(); ////내장함수를 실행한 '값'을 리턴한 내장함수////
}

var a = testFunc2();
console.log(a);


//함수를 리턴하는 내장함수//
function makeAdder(a) {
    return function(b) {
        return a + b;
    }
}

x = makeAdder(5);
y = makeAdder(20);

console.log(x(6));
console.log(y(7));

/*델리게이트(대리자)의 용법
1. 이미 만들어진 a객체
2. a객체 이후에 만들어진 b객체
3. 이후에 만들어진 b객체는 컴퓨터의 절차지향성 때문에 a에게 접근할 방법이 없다(나를 만든 객체/이후에 만들어진 나와 무관한 객체 등)
4. 이 때 델리게이트(대리자)를 통하여 대신 b가 a에게 전달할 수 있다
5. 디자인패턴 mvc 
(Model: 설계 클래스(출력 뒷쪽에서 자료구조나 기초설정등을 포함하는 데이터 저장 클래스) / View: 사용자의 스크린에 나타나는 모든 클래스 / 
Control: Model과 View 사이를 연결시켜주는 클래스(검색기능, ))
    (1) 클래스에 무얼 담고 / 담지 말아야 할 것은 무엇인가 === 에 대한 가이드: 디자인패턴
    Button -- view 클래스
//델리게이트처럼 객체 a와 b를 하나의 함수에서 한 번에 접근 가능하게 됨! 어려운 코드**
콜백함수? 클로저함수?
    */

