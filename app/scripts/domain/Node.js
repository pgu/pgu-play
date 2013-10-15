'use strict';

angular.module('pguPlayApp').factory('Node', function () {//

    return function(key, label, info) {
        this.getKey = function() { return key; };
        this.getLabel = function() { return label; };
        this.getInfo = function() { return info; };
    };

});