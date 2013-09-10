'use strict';

angular.module('pguPlayApp').factory('DisplayField', function () {//

    return function(field, renderHtmlFn) {

        var render = renderHtmlFn || _.identity;

        return {
            getField: function() {
                return field;
            },
            renderHtml: function(item) {
                return render(item[field]);
            }
        };
    };

});