var fs = require('fs'),
    path = require('path');

var directory = process.argv[2] || './',
    filetype = process.argv[3] || '';

fs.readdir(directory, function(err, files) {
    'use strict';
    if (err) {
        return console.error(error);
    }

    files.forEach(function(element) {
        if (path.extname(element) === '.' + filetype) {
            console.log(element);
        }
    });
});
