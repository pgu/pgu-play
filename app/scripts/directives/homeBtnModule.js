'use strict';

angular.module('homeBtnModule', []);

angular.module('homeBtnModule').directive('homeBtn', function() {
    return {
        restrict: 'E',
        template: '<a type="button" class="btn btn-large btn-primary glyphicon glyphicon-home" href="/"></a>',
        replace: true
    };
});