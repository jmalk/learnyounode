var filteredLsOfDirectory = require('./modules/filteredLsOfDirectory');

var directory = process.argv[2],
    filetype = process.argv[3];

function printArray(error, array) {
    'use strict';

    if (error) {
        console.log(error);
        return;
    }

    array.forEach(function(element) {
        console.log(element);
    });
}

filteredLsOfDirectory(directory, filetype, printArray);
