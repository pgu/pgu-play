'use strict';

angular.module('pguPlayApp').controller('LanguagesCtrl', //
    [ '$scope', //
        function ($scope) { //

            var NB_ITEMS_BY_PAGE = 50;

            var updatePage = function(page) {
                $scope.page = page; // page is 0-index based
                $scope.inputPage = page + 1; // inputPage is 1-index based
            };

            var resetSelection = function() {
                $scope.selectedLanguage = null;
                $scope.data = [];
                $scope.cfg = [];

                $scope.rows = [];

                $scope.searchText = '';

                $scope.numStart = 0;
                $scope.numStop = 0;
                $scope.pages = 0;
                $scope.page = 0; // page is 0-index based
                $scope.inputPage = 1; // inputPage is 1-index based
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
                    getItem: function() { return item; },
                    getColumns: function() { return columns; },
                    isSelected: false
                };
            };

            $scope.$watch('selectedLanguage', function() {
                resetSelection();

                if (_.isNull($scope.selectedLanguage)) {
                    return;
                }

                $scope.data = $scope.selectedLanguage.getData();
                $scope.cfg = $scope.selectedLanguage.getCfg();

                // pagination
                $scope.pages = Math.ceil($scope.data.length / NB_ITEMS_BY_PAGE);
                updatePage(0);

                // data
                $scope.rows = buildRows($scope.page);
            });

            $scope.onGoHome = function() {
                $scope.selectedLanguage = null;
                resetSelection();
            };

            $scope.goToPrevious = function() {
                updatePage($scope.page - 1);
                $scope.rows = buildRows($scope.page);
            };

            $scope.goToNext = function() {
                updatePage($scope.page + 1);
                $scope.rows = buildRows($scope.page);
            };

            $scope.$watch('inputPage', function() {
                var input = parseInt($scope.inputPage, 10);

                if (input === $scope.page + 1) {
                    return;
                }

                if (_.isNaN(input) || input < 1) {
                    $scope.inputPage = 1;

                } else if (input > $scope.pages ) {
                    $scope.inputPage = $scope.pages;

                } else {
                    $scope.page = $scope.inputPage - 1;
                    $scope.rows = buildRows($scope.page);
                }

            });

            var buildRows = function(page) {

                if (page === -1) {
                    return [];
                }

                var start = NB_ITEMS_BY_PAGE * page;
                var end = _.min([start + NB_ITEMS_BY_PAGE, $scope.data.length]);

                $scope.numStart = start + 1;
                $scope.numStop = end;

                return _.chain(_.range(start, end))
                    .map(function(idx) {
                        var item = $scope.data[idx];

                        var columns = [];
                        columns.push(new Column($scope.cfg.getKey(), item));

                        _.each($scope.cfg.getValues(), function(v) {
                            columns.push(new Column(v, item));
                        });

                        return new Row(item, columns);
                    })
                    .value();
            };

        }]);