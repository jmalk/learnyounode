var http = require('http'),
    fs = require('fs');

var port = Number(process.argv[2]),
    file = process.argv[3];

var server = http.createServer(function (req, res) {
    'use strict';
    var fileStream = fs.createReadStream(file);
    fileStream.pipe(res);
});

server.listen(port);