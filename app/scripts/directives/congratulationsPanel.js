'use strict';

angular.module('pguPlayApp').controller('congratulationsPanelCtrl', //
    ['$scope', 'hlp', //
        function($scope, hlp) { //

            $scope.$watch('elapsedTimeOfGameInMs', function() {
                $scope.fmtTimeOfGame = $scope.elapsedTimeOfGameInMs > 0 ? hlp.formatTime($scope.elapsedTimeOfGameInMs) : undefined;
            });

}]);

angular.module('pguPlayApp').directive('congratulationsPanel', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/directives/congratulationsPanel.html',
        scope: {
            elapsedTimeOfGameInMs: '=',
            onRepeatGame: '&'
        },
        controller: 'congratulationsPanelCtrl'
    };
});
