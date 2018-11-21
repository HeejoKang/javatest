//클래스 선언에서 객체를 만드는 형태와 비슷한 형식?
/* 함수자체가 클래스의 역할을 할 수 있다...?
클래스처럼 공개범위나 상속은 불가

단점: 
(1) 함수의 용도는 값을 저장하는 게 아니라 같은 기능을 재사용하는 것
(2) 따라서 함수를 담은 변수를 계속해서 '생성'하는 일은 좋지 않다 (동일한 기능의 함수가 여러 개 있을 필요 없다)

*/
function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = function() {
        return this.first + ' '+ this.last;
    }
    this.fullNameReversed = function() {
        return this.last + ' , '+ this.first;
    }
}
var person = new Person('홍', '길동'); //선언되어 있는 함수를 통해 '함수'의 객체를 만들 수 있다. 마치 클래스처럼!
console.log(person.fullName());


////'함수'의 객체가 반복되어 '생성'되는 것을 방지하는 코드////
function Person2(first, last) {
    this.first = first;
    this.last = last;
}
//해당 객체의 '형'을 담는 속성 prototype
Person2.prototype.fullName = function() {
    return this.first + ' ' + this.last;
}

Person2.prototype.fullNameReversed = function() {
    return this.last + ' ' + this.first;
}

var Person2 = new Person2("김", "철수");
console.log(Person2.fullName());



////기존에 있는 함수를 클래스로 만드는 법////
class Person3 {
    constructor(first, last) { //constructor == 생성자
        this.first = first;
        this.last = last;
    }

    fullName() {
        return this.first + ' ' + this.last;
    }
}

var person3 = new Person3("최", "병서");
console.log(person3.fullName());