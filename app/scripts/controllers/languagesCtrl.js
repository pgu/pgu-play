'use strict';

angular.module('pguPlayApp').controller('LanguagesCtrl', //
    [ '$scope', //
        function ($scope) { //

            $scope.selectedLanguage = null;
            $scope.languageInfo = null;

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

                    var htmlKey = cfg.key.renderHtml(item[cfg.key.field]);

                    var htmlValues = _.map(cfg.values, function(v) {
                        return v.renderHtml(item[v.field]);
                    });

                    return {
                        symbol: htmlKey,
                        definition: _.compact(htmlValues).join(' ')
                    };
                });

                // info
                var nbItems = '<strong>' + $scope.items.length + ' items</strong>';
                $scope.languageInfo = _.compact([nbItems, $scope.selectedLanguage.info, cfg.legend]).join('<br/>');
            });

            $scope.onGoHome = function() {
                resetSelection();
                $scope.selectedLanguage = null;
            };

        }]);