'use strict';

angular.module('pguPlayApp').controller('LanguagesCtrl', //
    [ '$scope', 'hlp', 'lunrSrv', '$timeout', //
        function ($scope, hlp, lunrSrv, $timeout) { //

            var NB_ITEMS_BY_PAGE = 50;

            var lgKey = null;
            $scope.lgInfo = null;

            var resetSelection = function() {

                lgKey = null;

                $scope.data = [];
                $scope.cfg = {};

                $scope.rows = [];
                $scope.searchText = '';

                $scope.numStart = 0;
                $scope.numStop = 0;
                $scope.pages = 0;
                $scope.page = 0; // page is 0-index based
                $scope.inputPage = 1; // inputPage is 1-index based
            };
            resetSelection();

            $scope.shouldShowLanguage = function() {
                return lgKey;
            };

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
                    isToggled: false
                };
            };

            var updatePage = function(page) {
                $scope.page = page; // page is 0-index based
                $scope.inputPage = page + 1; // inputPage is 1-index based
            };

            function updatePagination() {
                // pagination
                $scope.pages = Math.ceil($scope.data.length / NB_ITEMS_BY_PAGE);
                updatePage(0);

                // data
                $scope.rows = buildRows($scope.page);

                // scroll to results
                $timeout(function() {
                    var el = $('#languages_lg_tb');
                    var h = el.height();
                    var t = el.offset().top;
                    $('html, body').animate({ scrollTop: h+t }, 'slow');
                }, 600);
            }

            $scope.selectLanguage = function(language) {
                resetSelection();

                if (!language) {
                    return;
                }

                lgKey = language.getKey();
                $scope.cfg = language.getCfg();
                $scope.data = language.getData();

                updatePagination();

                // init full-text search
                lunrSrv.addIndex($scope.data, $scope.cfg, lgKey);
            };

            $scope.$watch('searchText', function() {

                if (!$scope.shouldShowLanguage()) {
                    return;
                }

                var initialText = $scope.searchText;

                $timeout(function() {

                    if (initialText !== $scope.searchText) {
                        return;
                    }

                    $scope.data = lunrSrv.search(lgKey, initialText);
                    updatePagination();
                }, 300);
            });

            $scope.onGoHome = function() {
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

                $scope.numStop = _.min([start + NB_ITEMS_BY_PAGE, $scope.data.length]);
                $scope.numStart = _.min([start + 1, $scope.numStop]);

                return _.map(_.range(start, $scope.numStop), function(idx) {
                            var item = $scope.data[idx];

                            var columns = [];
                            columns.push(new Column($scope.cfg.getKey(), item));

                            _.each($scope.cfg.getValues(), function(v) {
                                columns.push(new Column(v, item));
                            });

                            return new Row(item, columns);
                        });
            };

            $scope.setInfo = function(info) {
                $scope.lgInfo = info;
            };

            $scope.isSearchAvailable = function() {
                if (!$scope.shouldShowLanguage()) {
                    return false;
                }

                return lunrSrv.isAvailable(lgKey);
            };

            $scope.shouldShowInfo = function() {
                return $scope.lgInfo || $scope.data.length;
            };

            $scope.clearSearchText = function() {
                $scope.searchText = '';
            };

        }]);