var arr = new Array(); //JS의 배열에는 여러 타입이 한꺼번에 들어가더라/ enumerable타입의 배열은 하나의 자료형만 사용 == 검색기능 강화
arr[0] = "dog";
arr[1] = 23;
arr[2] = "cat";
arr[100]

console.log(arr[2]);
//JS 상에서 length의 값은 arr의 마지막배열 번호의 +1 현재 상태에는 101
console.log(arr.length);

var arr2 = new Array("cat", "dog");
console.log(arr2.length);

//JS에서 함수의 역할
//1급객체 함수자체를 하나의 값으로서 전달 가능(?)
// arr.length arr가 갖고 있는 변수를 갖고왔다(프로퍼티)
// arr.length() arr가 갖고 있는 함수를 실행하였다 (JS에선 length()란 함수가 없다)
var arr3 = ["dog", "cat", "tiger"]
console.log(typeof(arr[0]));

for (var i = 0; i < arr3.length; i++)
{
    console.log("%s", arr3[i]); //문자열과 함께 적었을 때 이 항목에 %s 스트링타입의 변수 %d 정수형 변수 출력
}

for(var i =0, len=arr3.length; i<len; i++) //최초 length값을 len이라는 변수에 넣어준 후 돌려주기
{
    console.log("New result = %s", arr[i]);
}

for(var i =0, item; item = arr3[i]; i++)//JS특유의 문장: 배열이 갖고있는 인덱스번호를 넘어서면 알아서 for문 중단
{
    console.log("Result2 = %s", item);
}


//for in 문//
for(var i in arr3)
{
    console.log("Result3 = %s", arr3[i]);
}
