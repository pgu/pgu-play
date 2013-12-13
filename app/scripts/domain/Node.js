'use strict';

angular.module('pguPlayApp').factory('Node', function () {//

    return function(key, label, opt_params) {

        var params = opt_params || {};

        this.getKey = function() { return key; };
        this.getLabel = function() { return label; };
        this.getInfo = function() { return params.info; };

        this.isOneCharacter = function() {
            if (_(params.is_one_character).isUndefined()) {
                return true;
            }

            return params.is_one_character;
        };
    };

});