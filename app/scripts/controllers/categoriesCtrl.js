'use strict';

angular.module('pguPlayApp').controller('CategoriesCtrl', //
    [ '$scope', 'LanguagesSrv', //
        function ($scope, LanguagesSrv) { //

            $scope.underscore = _;
            $scope.selectedNameOfLg = null; // info from the directive of categories

            $scope.namesOfLg = LanguagesSrv.getNamesOfLanguages();

            var resetSelection = function() {
                $scope.nbRows = 0;
                $scope.nbCellsByRow = 4;
                $scope.symbols = [];
            };
            resetSelection();

            $scope.expandLanguage = function() {

                var selectedLg = _.findWhere(LanguagesSrv.languages, {name: $scope.selectedNameOfLg});
                var items = _.flatten(selectedLg.data);

                var nbRows = items.length / $scope.nbCellsByRow;
                if (items.length % $scope.nbCellsByRow > 0) {
                    nbRows++;
                }
                $scope.nbRows = nbRows;

                $scope.symbols = items;
            };

            $scope.onGoHome = function() {
                resetSelection();
                $scope.selectedNameOfLg = null; // reset the directive of categories
            };
        }]);
