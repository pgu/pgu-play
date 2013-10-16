'use strict';

angular.module('pguPlayApp').factory('Leaf', ['Node', function (Node) {//

    return function(key, label, fnGetData, fnGetCfg, info) {
        Node.call(this, key, label, info);
        this.getData = function() { return fnGetData(); };
        this.getCfg = function() { return fnGetCfg(); };
    };

}]);