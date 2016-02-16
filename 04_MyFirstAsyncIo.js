var fs = require('fs');

fs.readFile(process.argv[2], function(err, fileContents) {
    'use strict';
    if (err) {
        return console.error(error);
    }
    var numberOfLines = fileContents.toString().split('\n').length - 1;
    console.log(numberOfLines);
});

