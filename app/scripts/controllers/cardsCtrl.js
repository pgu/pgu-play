'use strict';

angular.module('pguPlayApp').controller('CardsCtrl', //
    [ '$scope', 'LanguagesSrv', //
        function ($scope, LanguagesSrv) { //

            $scope.selectedLg = undefined;

            $scope.namesOfLg = _.map(LanguagesSrv.languages, function (v, k, list) {
                return v.name;
            });

            $scope.selectLanguage = function (nameOfLg) {
                var selectedLg = _.findWhere(LanguagesSrv.languages, {name: nameOfLg});
                $scope.selectedLg = selectedLg;
            }
        }]);