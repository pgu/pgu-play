'use strict';

angular.module('pguPlayApp')
  .directive('homeBtn', [ 'MixpanelService', function (MixpanelService) {
    return {
      restrict: 'E',
      replace: true,
      template: '<p class="text-right"><a type="button" class="btn btn-lg btn-primary" href="/" ng-click="goHome()"><span class="glyphicon glyphicon-home"></span></a></p>',
      scope: {
        onGoHome: '&'
      },
      controller: function ($scope) {

        $scope.goHome = function () {
          MixpanelService.track('go home');
          $scope.onGoHome();
        };

      }
    };
  } ]);
