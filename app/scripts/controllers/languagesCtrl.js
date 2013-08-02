'use strict';

angular.module('pguPlayApp').controller('LanguagesCtrl', //
    [ '$scope', //
        function ($scope) { //

            $scope.underscore = _;
            $scope.selectedLanguage = null;

            var resetSelection = function() {
                $scope.nbRows = 0;
                $scope.nbCellsByRow = 4;
                $scope.symbols = [];
            };
            resetSelection();

            $scope.$watch('selectedLanguage', function() {

                if (_.isNull($scope.selectedLanguage)) {
                    resetSelection();
                    return;
                }

                var items = _.flatten($scope.selectedLanguage.data);

                $scope.nbRows = items.length / $scope.nbCellsByRow;
                $scope.symbols = items;
            });

            $scope.onGoHome = function() {
                resetSelection();
                $scope.selectedLanguage = null;
            };
        }]);
