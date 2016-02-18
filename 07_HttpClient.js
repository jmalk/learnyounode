var http = require('http');

var targetUrl = process.argv[2];

http.get(targetUrl, function(response) {
    'use strict';
    response.setEncoding('utf8');
    response.on('data', function(data) {
        console.log(data);
    });
});
