var http = require('http'),
    bl = require('bl');

var urls = [process.argv[2], process.argv[3], process.argv[4]],
    responses = [];

urls.forEach(httpGet);

function httpGet (url, index) {
    'use strict';

    http.get(url, function(response) {
        response.setEncoding('utf8');

        response.pipe(bl(function (error, data) {
            if (error) {
                return console.error(error);
            }

            responses[index] = data.toString();

            if (allResponsesReceived()) {
                printAllResponses();
            }
        }));
    });
}

function allResponsesReceived() {
    'use strict';
    return responses[0] && responses[1] && responses[2];
}

function printAllResponses() {
    'use strict';
    console.log(responses[0]);
    console.log(responses[1]);
    console.log(responses[2]);
}
