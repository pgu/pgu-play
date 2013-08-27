'use strict';

angular.module('pguPlayApp').directive('homeBtn', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<p class="text-right"><a type="button" class="btn btn-lg btn-primary glyphicon glyphicon-home" href="/" ng-click="onGoHome()"></a></p>',
        scope: {
            onGoHome: '&'
        }
    };
});
