/*객체를 만드는 방식
객체지향에서...
(1) 객체란 무엇인가?

자바스크립트에서의 오브젝트 = 해시테이블/해시맵/딕셔너리 등과 비슷한 자료구조를 지님?
자바스크립트 == 객체형 프로그래밍 != 객체지향프로그래밍*/

var obj = {
};
/*변수 == 객체가 있는 주소(?)
자료형(이 메모리 크기만큼 자리를 만들었어) 변수명(이 주소에) = new 객체가 있어*/

//변수의 선언방식과 사용방식//
obj.name = "Junil";

console.log(obj.name);

var obj2 = new Object();
obj2["name"] = "홍길동","rrr";
console.log(obj2);

//javascript에서 객체의 형태 키:값/집단 대응형태
var person = 
{
    name : "홍길동",
    age : 33,
    address : {zipcode: 14500, city: "서울"}
}
