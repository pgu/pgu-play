'use strict';

angular.module('pguPlayApp').factory('Leaf', ['Node', function (Node) {//

    return function(key, label, fnGetData, fnGetCfg, opt_params) {

        Node.call(this, key, label, opt_params);
        this.getData = function() { return fnGetData(); };
        this.getCfg = function() { return fnGetCfg(); };
    };

}]);