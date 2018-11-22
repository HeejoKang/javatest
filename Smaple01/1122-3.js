//Path == 디렉토리 URL 파일의 위치 //
/*외장모듈과 내장모듈
- npm으로 다운받아야 하는 모듈 == 외장모듈
- 레고같이 조립하여 하나의 커다란 프로그램화 시키는 컨셉 */

/*데이터를 보존하는 3가지 방식
(1) 파일형태로 메모리에서 사라지기 전에 남기기
(2) 데이터베이스에 넣기
(3) 서버에 전송하여 보관하기

>> 데이터를 넘기는 과정에서 path를 지정해주어야 한다.(directory): '어디에' 저장할지
>> 이 과정에서 컴퓨터는 directory 주소를 하나의 긴 스트링 뭉텅이로 생각함
>> 이를 개발자가 임의로 인간의 생각처럼 상-하위 폴더로 나눠서 표현할 수 있도록 지정해줄 수 있다.*/

var path = require('path');

var dir = ['users', 'jun', 'test'];
var projDir = dir.join(path.sep); //path.sep : 디렉토리를 구분하는 구분자 /를 넣어줌
console.log(projDir);

var exePath = path.join(projDir, 'text.ext');
console.log(exePath);


// 문자열 출력 시 단위로 끊어서 표현하기 //
var dirName = path.dirname(exePath);
var baseName = path.basename(exePath);
var extName = path.extname(exePath);

console.log("Directory = %s", dirName);
console.log("Base Name = %s", baseName);
console.log("Ext Name = %s", extName);