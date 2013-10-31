'use strict';

angular.module('pguPlayApp').factory('kanjiHelper', //
    ['Kanas', 'DisplayField', //
        function (Kanas, DisplayField) { //

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
        getKey: function() {
            return new DisplayField('literal');
        },
        getValues: function() {
            return [
                new DisplayField('ons', renderOns),
                new DisplayField('kuns', renderKuns),
                new DisplayField('meanings', renderMeanings)
            ];
        },
        getHeaders: function() {
            return ['', '<span class="text-danger"><strong>On\'Yomi</strong></span>', '<span class="text-success"><strong>Kun\'Yomi</strong></span>', ''];
        },
        onToggleRow: function(row) {
            row.isToggled = !row.isToggled;

            var onsToShow = [];
            var kunsToShow = [];

            if (row.isToggled) {

                onsToShow = _.map(row.getItem().ons, function(on) {
                    return on + ' (' + Kanas.hepburnOn(on) + ')';
                });

                kunsToShow = _.map(row.getItem().kuns, function(kun) {
                    return kun + ' (' + Kanas.hepburnKun(kun) + ')';
                });

            } else {
                onsToShow = row.getItem().ons;
                kunsToShow = row.getItem().kuns;
            }

            _.findWhere(row.getColumns(), { col: 'ons'}).html = renderOns(onsToShow);
            _.findWhere(row.getColumns(), { col: 'kuns'}).html = renderKuns(kunsToShow);
        }
    };

    return {
        getCfg: function() {
            return kanjiDisplayConfig;
        }
    };

}]);