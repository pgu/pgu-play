'use strict';

angular.module('pguPlayApp').controller('congratulationsPanelCtrl', //
    ['$scope', 'HelperSrv', //
        function($scope, HelperSrv) { //

            $scope.$watch('elapsedTimeOfGameInMs', function() {
                $scope.fmtTimeOfGame = $scope.elapsedTimeOfGameInMs > 0 ? HelperSrv.formatTime($scope.elapsedTimeOfGameInMs) : undefined;
            });

}]);

angular.module('pguPlayApp').directive('congratulationsPanel', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'scripts/directives/congratulationsPanel.html',
        scope: {
            elapsedTimeOfGameInMs: '=',
            onRepeatGame: '&'
        },
        controller: 'congratulationsPanelCtrl'
    };
});
