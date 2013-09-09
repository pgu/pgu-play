'use strict';

angular.module('pguPlayApp').factory('Kanjis', //
    ['Jouyous', 'KanjiRadicals', 'Kanas', //
        function (Jouyous, KanjiRadicals, Kanas) { //

    var gameRadicals = [];

    var rawJouyousByGrades = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 8: []};
    var rawKyouikus = [];
    var gameJouyousByGrade = {'jouyous':[], 'kyouikus':[], 1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 8:[]};

    var toFullRawData = function(rawData) {
        return {
            data: rawData,
            displayConfig: kanjiDisplayConfig
        };
    };

    //
    // RADICALS
    //
    var workerRadicals = new Worker('workers/radicals.js');
    workerRadicals.onmessage = function(event) {
        gameRadicals = event.data;
    };
    workerRadicals.postMessage({
        radicals: KanjiRadicals
    });

    //
    // JOUYOUS
    //
    var workerJoyou = new Worker('workers/jouyous.js');
    workerJoyou.onmessage = function(event) {

        rawJouyousByGrades = event.data.rawJouyousByGrades;
        rawKyouikus = event.data.rawKyouikus;
        gameJouyousByGrade = event.data.gameJouyousByGrade;
    };
    workerJoyou.postMessage({
        jouyous: Jouyous
    });

    var renderOns = function(ons) {
        if (_.isEmpty(ons)) {
            return '';
        }
        return '<span class="text-danger">' + ons.join(', ') + '</span>';
    };

    var renderKuns = function(kuns) {
        if (_.isEmpty(kuns)) {
            return '';
        }
        return '<span class="text-success">' + kuns.join(', ') + '</span>';
    };

    var renderMeanings = function(meanings) {
        if (_.isEmpty(meanings)) {
            return '';
        }
        return meanings.join(', ');
    };

    var kanjiDisplayConfig = {
        key: {field: 'literal', renderHtml: _.identity},
        values: [
            {field: 'ons', renderHtml: renderOns},
            {field: 'kuns', renderHtml: renderKuns},
            {field: 'meanings', renderHtml: renderMeanings}
        ],
        headers: ['', '<span class="text-danger"><strong>On\'Yomi</strong></span>', '<span class="text-success"><strong>Kun\'Yomi</strong></span>', ''],
        onClick: function(row) {
            row.isSelected = !row.isSelected;

            var onsToShow = [];
            var kunsToShow = [];

            if (row.isSelected) {

                onsToShow = _.map(row.item.ons, function(on) {
                    return on + ' (' + Kanas.hepburnOn(on) + ')';
                });

                kunsToShow = _.map(row.item.kuns, function(kun) {
                    return kun + ' (' + Kanas.hepburnKun(kun) + ')';
                });

            } else {
                onsToShow = row.item.ons;
                kunsToShow = row.item.kuns;
            }

            _.findWhere(row.columns, { col: 'ons'}).html = renderOns(onsToShow);
            _.findWhere(row.columns, { col: 'kuns'}).html = renderKuns(kunsToShow);
        }
    };

    return {
        //
        // RAW
        //
        getRawRadicals: function() {
            return toFullRawData(KanjiRadicals);
        },
        getRawJouyous: function() {
            return toFullRawData(Jouyous);
        },
        getRawJouyouOthers: function() {
            return toFullRawData(rawJouyousByGrades[8]);
        },
        getRawKyouikus: function() {
            return toFullRawData(rawKyouikus);
        },
        getRawKyouikus1: function() {
            return toFullRawData(rawJouyousByGrades[1]);
        },
        getRawKyouikus2: function() {
            return toFullRawData(rawJouyousByGrades[2]);
        },
        getRawKyouikus3: function() {
            return toFullRawData(rawJouyousByGrades[3]);
        },
        getRawKyouikus4: function() {
            return toFullRawData(rawJouyousByGrades[4]);
        },
        getRawKyouikus5: function() {
            return toFullRawData(rawJouyousByGrades[5]);
        },
        getRawKyouikus6: function() {
            return toFullRawData(rawJouyousByGrades[6]);
        },
        //
        // GAME
        //
        getGameRadicals: function() {
            return gameRadicals;
        },
        getGameJouyous: function() {
            return gameJouyousByGrade.jouyous;
        },
        getGameJouyouOthers: function() {
            return gameJouyousByGrade[8];
        },
        getGameKyouikus: function() {
            return gameJouyousByGrade.kyouikus;
        },
        getGameKyouikus1: function() {
            return gameJouyousByGrade[1];
        },
        getGameKyouikus2: function() {
            return gameJouyousByGrade[2];
        },
        getGameKyouikus3: function() {
            return gameJouyousByGrade[3];
        },
        getGameKyouikus4: function() {
            return gameJouyousByGrade[4];
        },
        getGameKyouikus5: function() {
            return gameJouyousByGrade[5];
        },
        getGameKyouikus6: function() {
            return gameJouyousByGrade[6];
        }
    };

}]);