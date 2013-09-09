'use strict';

angular.module('pguPlayApp').controller('LanguagesCtrl', //
    [ '$scope', //
        function ($scope) { //

            var resetSelection = function() {
                $scope.selectedLanguage = null;
                $scope.rows = [];
                $scope.headers = [];
                $scope.onClickRow = undefined;
            };
            resetSelection();

            $scope.$watch('selectedLanguage', function() {

                if (_.isNull($scope.selectedLanguage)) {
                    resetSelection();
                    return;
                }

                var rawData = $scope.selectedLanguage.getRawData();
                var cfg = rawData.displayConfig;

                $scope.headers = cfg.headers;
                $scope.onClickRow = cfg.onClick;

                $scope.rows = _.map(rawData.data, function(item) {

                    var columns = [];

                    columns.push({
                        col: cfg.key.field,
                        html: cfg.key.renderHtml(item[cfg.key.field])
                    });

                    _.each(cfg.values, function(v) {
                        columns.push({
                            col: v.field,
                            html: v.renderHtml(item[v.field])
                        });
                    });

                    return {
                        item: item,
                        columns: columns,
                        isSelected: false
                    };
                });
            });

            $scope.onGoHome = function() {
                resetSelection();
            };

        }]);