var myColor = ["red", "green", "black"];

console.log(myColor.toString()); //문자열 형태로 출력(글자의 나열형태)

//concat() 배열을 유지하면서 마지막 인덱스에 요소 추가 
var newColor = myColor.concat("white", "black");
console.log(newColor); //배열을 출력 ==> 배열형식으로 출력됨
console.log(myColor);

//pop() 마지막 항목을 제거한 후 리턴 (black이 배열에서 사라지고 black출력됨)
console.log(newColor.pop());
console.log(newColor.toString());

//push() 마지막 인덱스에 하나 이상의 요소 추가
console.log(newColor.push("orange"));
console.log(newColor);
console.log(newColor.push("blue"));
console.log(newColor);

//reverse() 현 배치의 역순 오름차순 <-> 내림차순
newColor.reverse();
console.log(newColor);

//shift(), unshift() 배열의 시작부분에 항목 추가/삭제
newColor.shift();
console.log(newColor.shift());
newColor.unshift("brown");
console.log(newColor.unshift());

//splice()
newColor.splice(0, 2, "test");
console.log(newColor.toString());

//정렬
newColor.sort();
console.log(newColor);
