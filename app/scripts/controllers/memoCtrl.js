'use strict';

angular.module('pguPlayApp').controller('MemoCtrl',
    [ '$scope', 'LanguagesSrv',
        function ($scope, LanguagesSrv) {

    $scope.name = 'memo';
    $scope.tmp = LanguagesSrv.languages;

}]);