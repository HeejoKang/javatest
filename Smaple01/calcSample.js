// 소스파일 단위로 기능을 끊어서 사용//
//기능의 단위: 서버기준으로
/*
(1) 로그인 요청 소스파일
(2) 회원가입 신청 소스파일
(3) 회원가입 저장 소스파일
(4) 랭킹 시스템 업데이트 소스파일 등등*/

//프로그램의 기본 기능은 항상 반복됨! 내 모듈자료를 점차 다양화하고 증가시켜 어떤 때이든 다시 사용할 수 있도록 DB화 할 것

/*절대위치와 상대위치
<절대위치>
C:ProgramFile: ----- 블라블라
※ 모바일의 위치설정은 조금 다름
특히 아이폰의 경우 개발자가 임의로 어플의 설치경로를 지정할 수 없음. 아이폰의 OS가 설정함 
<상대위치 설정하기>
내부에서 소스파일을 어떤 디렉토리에 설치할지 --> 상대위치로 찾기
./Mod/calc3
현재위치의/Mod라는 폴더에/calc3라는 파일을
../Module/Mod/calc3
상위폴더에서/Module폴더를찾아/그 안의 Mod라는 폴더에서/calc3를 찾으세요*/

var calc = require('./calc'); // ./현재위치에 calc를 불러와라(확장자 생략)
// ../calc

console.log('Result: %d', calc.add(3,3));
console.log('Result: %d', calc.subtract(3,3));
console.log('Result: %d', calc.multiply(3,3));
console.log('Result: %d', calc.divide(3,3));
