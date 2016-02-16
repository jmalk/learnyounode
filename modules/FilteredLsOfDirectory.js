var fs = require('fs'),
    path = require('path');

module.exports = function(directory, filetype, callback) {
    'use strict';

    fs.readdir(directory, function(err, files) {
        if (err) {
            callback(error);
        }

        var filteredList = [];

        files.forEach(function(element) {
            if (path.extname(element) === '.' + filetype) {
                filteredList.push(element);
            }
        });

        callback(null, filteredList);
    });
};
