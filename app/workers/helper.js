'use strict';

function createArrayForGame(fullKanjis) {

    var result = [];

    for (var i = 0, ii = fullKanjis.length; i < ii; i++) {
        var k = fullKanjis[i];
        result.push([].concat(k.literal) //
                .concat(k.ons)
                .concat(k.kuns)
                .concat(k.meanings)
        );
    }
    return Object.freeze(result);
}
