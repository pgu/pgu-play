'use strict';

angular.module('pguPlayApp').controller('LanguagesCtrl', //
    [ '$scope', //
        function ($scope) { //

            var NB_ITEMS_BY_PAGE = 50;

            $scope.selectedLanguage = null;

            var resetSelection = function() {
                $scope.rows = [];
                $scope.headers = [];
                $scope.onClickRow = undefined;

                $scope.searchText = '';

                $scope.numStart = 0;
                $scope.numStop = 0;
                $scope.totalItems = 0;
                $scope.pages = 0;
                $scope.page = -1;
            };
            resetSelection();

            var Column = function(displayField, item) {
                return {
                    col: displayField.getField(),
                    html: displayField.renderHtml(item)
                };
            };

            var Row = function(item, columns) {
                return {
                    getItem: function() {
                        return angular.copy(item);
                    },
                    columns: columns,
                    isSelected: false
                };
            };

            $scope.$watch('selectedLanguage', function() {
                resetSelection();

                if (_.isNull($scope.selectedLanguage)) {
                    return;
                }

                var lgVisu = $scope.selectedLanguage.getLanguageVisu();

                var data = lgVisu.getData();
                var cfg = lgVisu.getConfig();

                $scope.totalItems = data.length;
                $scope.headers = cfg.getHeaders();
                $scope.onClickRow = cfg.getOnClick();

                // pagination
                $scope.pages = Math.ceil(data.length / NB_ITEMS_BY_PAGE);
                $scope.page = 0;

                // data
                $scope.rows = buildRows($scope.page);
            });

            $scope.onGoHome = function() {
                $scope.selectedLanguage = null;
                resetSelection();
            };

            $scope.goToPrevious = function() {
                $scope.page--;
                $scope.rows = buildRows($scope.page);
            };

            $scope.goToNext = function() {
                $scope.page++;
                $scope.rows = buildRows($scope.page);
            };

            var buildRows = function(page) {

                if (page === -1) {
                    return [];
                }

                var lgVisu = $scope.selectedLanguage.getLanguageVisu();

                var data = lgVisu.getData();
                var cfg = lgVisu.getConfig();

                var key = cfg.getKey();
                var values = cfg.getValues();

                var start = NB_ITEMS_BY_PAGE * page;
                var end = _.min([start + NB_ITEMS_BY_PAGE, $scope.totalItems]);

                $scope.numStart = start + 1;
                $scope.numStop = end;

                return _.chain(_.range(start, end))
                    .map(function(idx) {
                        var item = data[idx];

                        var columns = [];
                        columns.push(new Column(key, item));

                        _.each(values, function(v) {
                            columns.push(new Column(v, item));
                        });

                        return new Row(item, columns);
                    })
                    .value();
            };

        }]);