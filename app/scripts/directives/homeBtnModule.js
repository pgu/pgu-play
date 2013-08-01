'use strict';

angular.module('homeBtnModule', []);

angular.module('homeBtnModule').directive('homeBtn', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<p><a type="button" class="btn btn-large btn-primary glyphicon glyphicon-home" href="/" ng-click="onGoHome()"></a></p>',
        scope: {
            onGoHome: '&'
        }
    };
});
