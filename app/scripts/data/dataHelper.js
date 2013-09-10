'use strict';

angular.module('pguPlayApp').factory('DataHelper', //
    ['DisplayField', //
        function (DisplayField) {//

    var displayConfigBasic = {
        getKey: function() { return new DisplayField(0); },
        getValues: function() { return _.chain([]).push(new DisplayField(1)).value(); },
        getHeaders: function() { return []; },
        getOnClick: function() { return undefined; }
    };

    return {
        toFullRawDataBasic: function(rawData) {
            return {
                getData: function() { return rawData; },
                getConfig: function() { return displayConfigBasic; }
            };
        }

    };
}]);