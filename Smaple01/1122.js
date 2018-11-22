//컴퓨터 사양 확인하기//
var os = require('os');

console.log("Host: %s", os.hostname);
console.log("Memory: %d / %d", os.freemem(), os.totalmem());
console.log("CPU Info ---");
console.dir(os.cpus());
console.log("Network interface ---");
console.dir(os.networkInterfaces());

var d = new Date();
console.log("Date: %s", d);