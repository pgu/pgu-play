'use strict';

angular.module('pguPlayApp').controller('LanguagesCtrl', //
    [ '$scope', //
        function ($scope) { //

            $scope.selectedLanguage = null;

            var resetSelection = function() {
                $scope.items = [];
            };
            resetSelection();

            $scope.$watch('selectedLanguage', function() {

                if (_.isNull($scope.selectedLanguage)) {
                    resetSelection();
                    return;
                }

                $scope.items = _.map($scope.selectedLanguage.data, function(item) {
                    return {
                        symbol: _.first(item),
                        values: _.rest(item).join(', ')
                    };
                });
            });

            $scope.onGoHome = function() {
                resetSelection();
                $scope.selectedLanguage = null;
            };
        }]);
