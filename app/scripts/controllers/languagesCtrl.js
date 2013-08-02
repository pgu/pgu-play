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

                var items = _.chain($scope.selectedLanguage.data)
                             .reduce(function(results, item) { // merge identical keys
                                var key = item[0];
                                var value = item[1];

                                if (_.has(results, key)) {
                                    if (!_.contains(results[key], value)) {
                                        results[key].push(value);
                                    }
                                } else {
                                    results[key] = [value];
                                }

                                return results;
                             }, {})
                             .map(function(value, key) {
                                return _.chain([]).push(key).push(value.join(', ')).value();
                             })
                             .flatten()
                             .value();

                $scope.nbRows = items.length / $scope.nbCellsByRow;
                $scope.symbols = items;
            });

            $scope.onGoHome = function() {
                resetSelection();
                $scope.selectedLanguage = null;
            };
        }]);
