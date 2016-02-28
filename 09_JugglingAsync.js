var http = require('http'),
    bl = require('bl');

var urlArray = [process.argv[2], process.argv[3], process.argv[4]];

var responseQueue = [];

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

http.get(urlArray[0], function(response) {
    'use strict';
    response.setEncoding('utf8');
    response.pipe(bl(function (error, data) {
        if (error) {
            return console.error(error);
        }
        var responseString = data.toString();
        responseQueue[0] = responseString;
        if (responseQueueFilled()) {
            logResponseQueue();
        }
    }));
});

http.get(urlArray[1], function(response) {
    'use strict';
    response.setEncoding('utf8');
    response.pipe(bl(function (error, data) {
        if (error) {
            return console.error(error);
        }
        var responseString = data.toString();
        responseQueue[1] = responseString;
        if (responseQueueFilled()) {
            logResponseQueue();
        }
    }));
});

http.get(urlArray[2], function(response) {
    'use strict';
    response.setEncoding('utf8');
    response.pipe(bl(function (error, data) {
        if (error) {
            return console.error(error);
        }
        var responseString = data.toString();
        responseQueue[2] = responseString;
        if (responseQueueFilled()) {
            logResponseQueue();
        }
    }));
});
