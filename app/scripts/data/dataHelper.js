'use strict';

angular.module('pguPlayApp').factory('DataHelper', function () {//

    var displayConfigBasic = {
        key: {field: 0, renderHtml: _.identity},
        values: [{field: 1, renderHtml: _.identity}]
    };

    return {
        toFullRawDataBasic: function(rawData) {
            return {
                data: rawData,
                displayConfig: displayConfigBasic
            };
        }

    };
});