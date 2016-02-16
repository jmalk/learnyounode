var fs = require('fs');

var fileAsBuffer = fs.readFileSync(process.argv[2]);

var fileAsString = fileAsBuffer.toString();

var fileAsArray = fileAsString.split('\n');

console.log(fileAsArray.length - 1);
