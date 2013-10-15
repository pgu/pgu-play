'use strict';

angular.module('pguPlayApp').factory('Leaf', ['Node', function (Node) {//

    return function(key, label, getData, getCfg, info) {
        Node.call(this, key, label, info);
        this.getData = function() { return getData(); };
        this.getCfg = function() { return getCfg(); };
    };

}]);