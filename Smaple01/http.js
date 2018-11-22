
var http = require('http'); //서버용 모듈
var server = http.createServer();

var port = 3000; //해당 IP가 통신을 할 수 있는 통로 

server.listen(port, function() {
    console.log("Start Server");
});

/*오버로드(같은 클래스 내에서 인수를 달리함)와 오버라이드(부모-자식 관계 클래스)
1. 오버라이드를 왜 사용할까?
- 구버전 쿠키런 / 신버전 쿠키런
구버전에서 지원하지 않는 소셜로그인 기능을 신버전 쿠키런에서 구현하고 싶을 때
Class Login 기능을 '상속'받아 Class NewLogin에서 소셜로그인 기능을 '추가'한다

- 구버전 로그인 기능이 바뀔 일이 없고
- 구현이 간편해지며(상속)*/

server.on('connection', function(socket) {
    var addr = socket.address();
    console.log("누군가 접속함");
});

server.on('request', function(req, res) {
    console.log("누군가 요청함");

    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"}); 
    res.write("반갑습니다");
    res.end();
});


