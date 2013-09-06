'use strict';

angular.module('pguPlayApp').controller('LanguagesCtrl', //
    [ '$scope', //
        function ($scope) { //

            $scope.selectedLanguage = null;
            $scope.globalInfo = null;

            var resetSelection = function() {
                $scope.items = [];
            };
            resetSelection();

            $scope.$watch('selectedLanguage', function() {

                if (_.isNull($scope.selectedLanguage)) {
                    resetSelection();
                    return;
                }

                var rawData = $scope.selectedLanguage.getRawData();
                var cfg = rawData.displayConfig;

                // items
                $scope.items = _.map(rawData.data, function(item) {

                    var htmlKey = cfg.key.html(item[cfg.key.field]);

                    var htmlValues = _.map(cfg.values, function(v) {
                        return v.html(item[v.field]);
                    });

                    return {
                        symbol: htmlKey,
                        definition: _.compact(htmlValues).join(' ')
                    };
                });

                // info
                var nbItems = '<strong>' + $scope.items.length + ' items</strong>';
                var globalInfo = _.compact([$scope.selectedLanguage.info, cfg.legend, nbItems]);
                $scope.globalInfo = _.isEmpty(globalInfo) ? null : globalInfo.join('<br/>');
            });

            $scope.onGoHome = function() {
                resetSelection();
                $scope.selectedLanguage = null;
            };

        }]);