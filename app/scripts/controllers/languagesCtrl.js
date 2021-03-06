'use strict';

angular.module('pguPlayApp').controller('LanguagesCtrl', //
    [ '$scope', 'hlp', 'lunrSrv', '$timeout', 'MixpanelService', //
        function ($scope, hlp, lunrSrv, $timeout, MixpanelService) { //

            MixpanelService.track('open languages');

            var NB_ITEMS_BY_PAGE = 20;

            var lgKey = null;
            $scope.lgInfo = null;

            var resetSelection = function() {

                lgKey = null;

                $scope.data = [];
                $scope.cfg = {};

                $scope.headers = [];
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

            function scrollToResultsTop(cfg) {

                var the_cfg = cfg || {time: 600, speed: 'slow'};

                $timeout(function() {
                    var el = $('#languages_lg_tb');
                    var h = el.height();
                    var t = el.offset().top;
                    $('html, body').animate({ scrollTop: h+t }, the_cfg.speed);
                }, the_cfg.time);
            }

            function updatePagination() {
                // pagination
                $scope.pages = Math.ceil($scope.data.length / NB_ITEMS_BY_PAGE);
                updatePage(0);

                // data
                $scope.rows = buildRows($scope.page);

                // scroll to results
                scrollToResultsTop();
            }

            function updateHeaders() {
                var cfgValues = $scope.cfg.getValues();

                if (_.size(cfgValues) > 1) {

                    $scope.headers.push(''); // key
                    $scope.headers.push(''); // first default value

                    _.each(_.rest(cfgValues), function(displayField, idx) {
                        var isEven = (idx & 1) === 0;
                        var style = isEven ? 'danger' : 'success';

                        var text = '<span class="text-' + style + '"><strong>' + displayField.getLabel() + '</strong></span>';
                        $scope.headers.push(text);
                    });
                }
            }

            $scope.selectLanguage = function(language) {
                resetSelection();

                if (!language) {
                    return;
                }

                lgKey = language.getKey();
                $scope.cfg = language.getCfg();
                $scope.data = language.getData();

                updateHeaders();
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

            $scope.goToPreviousFromBottom = function() {
                if (!$scope.isPreviousEnabled()) {
                    return;
                }

                $scope.goToPrevious();
                scrollToResultsTop({time: 150, speed: 'fast'});
            };

            $scope.goToPrevious = function() {
                if (!$scope.isPreviousEnabled()) {
                    return;
                }

                updatePage($scope.page - 1);
                $scope.rows = buildRows($scope.page);
            };

            $scope.goToNextFromBottom = function() {
                if (!$scope.isNextEnabled()) {
                    return;
                }

                $scope.goToNext();
                scrollToResultsTop({time: 150, speed: 'fast'});
            };

            $scope.goToNext = function() {
                if (!$scope.isNextEnabled()) {
                    return;
                }

                updatePage($scope.page + 1);
                $scope.rows = buildRows($scope.page);
            };

            $scope.$watch('inputPage', function() {
                var input = parseInt($scope.inputPage, 10);

                if (_.isNaN(input)) {
                    return;
                }

                if (input === $scope.page + 1) {
                    return;
                }

                if (input < 1) {
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

                var cfgValues = $scope.cfg.getValues();

                return _.map(_.range(start, $scope.numStop), function(idx) {
                            var item = $scope.data[idx];

                            var columns = [];
                            columns.push(new Column($scope.cfg.getKey(), item));

                            _.each(cfgValues, function(v) {
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

            $scope.isPreviousEnabled = function() {
                return $scope.page > 0;
            };

            $scope.isNextEnabled = function() {
                return $scope.page < $scope.pages - 1;
            };

            $scope.shouldShowPagination = function() {
                return $scope.pages > 1;
            };

        }]);
