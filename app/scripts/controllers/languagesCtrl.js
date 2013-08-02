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

                var nbRows = items.length / $scope.nbCellsByRow;
                if (items.length % $scope.nbCellsByRow > 0) {
                    nbRows++;
                }
                $scope.nbRows = nbRows;
                $scope.symbols = items;
            });

            $scope.onGoHome = function() {
                resetSelection();
                $scope.selectedLanguage = null;
            };
        }]);
