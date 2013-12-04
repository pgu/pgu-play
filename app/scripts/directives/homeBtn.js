'use strict';

angular.module('pguPlayApp').directive('homeBtn', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<p class="text-right"><a type="button" class="btn btn-lg btn-primary" href="/" ng-click="onGoHome()"><span class="glyphicon glyphicon-home"></span></a></p>',
        scope: {
            onGoHome: '&'
        }
    };
});
