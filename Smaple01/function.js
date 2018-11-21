/*JS의 꽃 함수!
1. 리턴타입(void / 자료형)을 명시하지 않아도 선언 가능
2. 변수 타입을 설정하지 않아도 전달 가능
3. 데이터(변수값) + 동작(함수)

자유로운 형식의 언어 장점
(1) 빠른 코드 구현이 가능하다
자유로운 형식의 언어 단점
(1) 코드를 작성하는 당시에 문제를 발견하기 힘들다
*/

///1. 함수의 이름으로 선언하는 형태///
// 함수 선언의 기본 형태 //
function add(x,y) 
{
    var total = x+y;
    return total;
}

var result = add(2,3);
console.log(result);

//매개변수의 선언 없이도 값을 반환하는 형태//
function add2()
{
    var sum = 0;
    for(var i =0, j = arguments.length; i < j; i++)
    {
        sum += arguments[i];
    }
    return sum;
}

console.log(add2(2,3,4,5));

////2.익명함수의 선언 ////
//함수를 변수에 할당하는 경우: 함수가 다른 함수의 매개변수로 사용될 수 있다 //
//!!!!!!함수를 '변수'처럼 사용할 수 있다!!!!!!//

/*익명함수의 필요성
1. 익명함수는 사용빈도가 적거나 한 번 정도만 실행되는 함수에 사용한다
2. 함수를 전달받는 함수(매개함수)*/
var avg = function()
{
    var sum = 0;
    for(var i =0, j = arguments.length; i<j; i++)
    {
        sum+=arguments[i];
    }
    return sum/arguments.length;
}
//변수의 사용 시 avg와 avg()를 구분할 수 있어야 한다
// var newVal = avg() 함수의 결과값을 넘겨받은 경우
// var newVal = avg 함수자체를 넘겨받은 경우
console.log(avg(3,4,5,6)); //변수를 통해서 함수를 사용할 수 있게 됨


//여러 반환(값/함수)을 갖는 함수의 선언//
function makePerson(first, last) {
return{
    first: first,
    last: last,
    fullName: function(){
        return this.first + ' ' + this.last;
        },
    fullNamereversed: function() {
        return this.last + ' , ' + this.first;
        }
    }
}

var person = makePerson("Heejo", "Kang");
console.log(person.fullName());
console.log(person.fullNamereversed());

// var func = person.fullName;
// console.log(func());
//makePerson()전체 함수를 가져오지 않았기 때문에 fullName()함수가 인수를 받지 못해 undefined가 뜨는 것