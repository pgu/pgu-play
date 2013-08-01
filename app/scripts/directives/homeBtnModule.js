'use strict';

angular.module('homeBtnModule', []);

angular.module('homeBtnModule').directive('homeBtn', function() {
    return {
        restrict: 'E',
        template: '<p><a type="button" class="btn btn-large btn-primary glyphicon glyphicon-home" href="/"></a></p>',
        replace: true
    };
});
