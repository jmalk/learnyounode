var http = require('http'),
    bl = require('bl');

var urlArray = [process.argv[2], process.argv[3], process.argv[4]];

var responseQueue = [];

urlArray.forEach(httpGet);

function httpGet (url, index) {
    'use strict';
    http.get(url, function(response) {
        response.setEncoding('utf8');
        response.pipe(bl(function (error, data) {
            if (error) {
                return console.error(error);
            }
            var responseString = data.toString();
            responseQueue[index] = responseString;
            if (responseQueueFilled()) {
                logResponseQueue();
            }
        }));
    });
}

function responseQueueFilled() {
    'use strict';
    return responseQueue[0] && responseQueue[1] && responseQueue[2];
}

function logResponseQueue() {
    'use strict';
    console.log(responseQueue[0]);
    console.log(responseQueue[1]);
    console.log(responseQueue[2]);
}
