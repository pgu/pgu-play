'use strict';

angular.module('pguPlayApp').factory('dataHelper', //
    ['DisplayField', //
        function (DisplayField) {//

    var displayConfigKeyValue = {
        getKey: function() { return new DisplayField(0); }, // key
        getValues: function() { return _.chain([]).push(new DisplayField(1)).value(); } // value
    };

    return {
        toFullRawDataBasic: function(rawData) {
            return {
                getData: function() { return rawData; },
                getConfig: function() { return displayConfigKeyValue; }
            };
        },
        getCfgKV: function() {
            return displayConfigKeyValue;
        }
    };
}]);