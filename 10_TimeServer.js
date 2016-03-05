// Desired time format: "YYYY-MM-DD hh:mm"
// Month, day, hour and minute must be zero-filled e.g. 01:03

var net = require('net');

var port = process.argv[2];

var server = net.createServer(function (socket) {
    'use strict';
    var date = new Date();

    var year = date.getFullYear().toString(),
        month = prependZeroIfOnlyOneDigit((date.getMonth() + 1).toString()),
        day = prependZeroIfOnlyOneDigit(date.getDate().toString()),
        hour = prependZeroIfOnlyOneDigit(date.getHours().toString()),
        minute = prependZeroIfOnlyOneDigit(date.getMinutes().toString());

    console.log(month);

    socket.end(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + '\n');
});

server.listen(port);

function prependZeroIfOnlyOneDigit(string) {
    'use strict';
    if (string.length === 1) {
        return "0" + string;
    }

    return string;
}
