'use strict';

angular.module('pguPlayApp').controller('MemoCtrl',
    [ '$scope', 'LanguagesSrv',
        function ($scope, LanguagesSrv) {

            $scope.selectedLg = null;

            $scope.namesOfLg = LanguagesSrv.getNamesOfLanguages();

            $scope.selectLanguageAndPlay = function(nameOfLg) {

            };


        }]);