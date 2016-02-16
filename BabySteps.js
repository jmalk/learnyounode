(function sumArguments() {
    'use strict';

    var total = 0;

    for (var i=2; i<process.argv.length; i++) {
        // TODO: Could really do with checking the type here
        total += +process.argv[i];
    }

    console.log(total);
})();
