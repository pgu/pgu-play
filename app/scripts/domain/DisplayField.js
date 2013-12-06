'use strict';

angular.module('pguPlayApp').factory('DisplayField', function () {//

    return function(field, renderHtmlFn, label) {

        var render = renderHtmlFn || _.identity;
        var the_label = label || '';

        return {
            getField: function() {
                return field;
            },
            renderHtml: function(item) {
                return render(item[field]);
            },
            getLabel: function() {
                return the_label;
            }
        };
    };

});