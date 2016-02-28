var bl = require('bl'),
    http = require('http');

var targetUrl = process.argv[2];

http.get(targetUrl, function(response) {
    'use strict';
    response.setEncoding('utf8');
    response.pipe(bl(function (error, data) {
        if (error) {
            return console.log("Error:", error);
        }
        var responseString = data.toString();
        console.log(responseString.length);
        console.log(responseString);
    }));
});
