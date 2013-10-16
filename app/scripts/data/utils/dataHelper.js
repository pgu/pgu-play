'use strict';

angular.module('pguPlayApp').factory('DataHelper', //
    ['DisplayField', //
        function (DisplayField) {//

    var displayConfigKeyValue = {
        getKey: function() { return new DisplayField(0); }, // key
        getValues: function() { return _.chain([]).push(new DisplayField(1)).value(); }, // value
        getHeaders: function() { return []; }
    };

    return {
        toFullRawDataBasic: function(rawData) {
            return {
                getData: function() { return rawData; },
                getConfig: function() { return displayConfigKeyValue; }
            };
        }

    };
}]);