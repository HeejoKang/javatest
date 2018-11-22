
//// 파일 읽기 ////
var fs = require('fs'); //파일을 읽고 쓰기위한 모듈

//파일위치 및 대상, 인코딩형태, 저장 후 데이터 출력함수
var data = fs.readFileSync('../README.md', 'utf-8', function(err,data) {
    console.log("DATA = " + data);
});


//// 파일 쓰기 ////
fs.writeFile('./output.txt', 'Hello World', function(err) {
    if (err) {
        console.log('Error: ' + err);
    }
    console.log("쓰기 완료");
});

// 에러발생/이벤트발생 등 '간단한' '로그'를 남기는 코드 형태