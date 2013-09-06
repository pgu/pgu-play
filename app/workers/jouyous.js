'use strict';

importScripts('/components/underscore/underscore-min.js');
importScripts('/workers/helper.js');

onmessage = function(event) {

    var J = event.data.jouyous;

    var rawJouyousByGrades = _.groupBy(J, function (j) {
        return j.grade;
    });

    var rawKyouikus = [];
    for (var i = 1; i <= 6; i++) {
        rawKyouikus = rawKyouikus.concat(rawJouyousByGrades[i]);
    }

    postMessage({
        rawJouyousByGrades: rawJouyousByGrades,
        rawKyouikus: rawKyouikus,
        //
        gameJouyousByGrade: {
            'jouyous': createArrayForGame(J),
            'kyouikus': createArrayForGame(rawKyouikus),
            1: createArrayForGame(rawJouyousByGrades[1]),
            2: createArrayForGame(rawJouyousByGrades[2]),
            3: createArrayForGame(rawJouyousByGrades[3]),
            4: createArrayForGame(rawJouyousByGrades[4]),
            5: createArrayForGame(rawJouyousByGrades[5]),
            6: createArrayForGame(rawJouyousByGrades[6]),
            8: createArrayForGame(rawJouyousByGrades[8])
        }
    });
};