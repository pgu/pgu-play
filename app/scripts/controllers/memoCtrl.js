'use strict';

angular.module('pguPlayApp').controller('MemoCtrl', //
    [ '$scope', 'HelperSrv', '$timeout', //
        function ($scope, HelperSrv, $timeout) { //

            var HIDDEN_DISPLAY = '&nbsp;';

            var STATE_CLEAN = 'clean';
            var STATE_SUCCESS = 'success';
            var STATE_SELECTED = 'selected';
            var STATE_ERROR = 'error';

            var solutions = {};
            var startTime = 0;
            var firstCard = null;

            $scope.underscore = _;
            $scope.nbRows = 1; //6
            $scope.nbCellsByRow = 2;

            $scope.selectedLanguage = null;

            $scope.showRules = null;
            $scope.isGameDisplayed = true; // by default, show the symbols

            var resetGame = function() {
                $scope.memoCards = [];

                $scope.showCongratulations = false;
                $scope.timeElapsedOfGame = '';

                solutions = {};
                startTime = 0;
                firstCard = null;
            };
            resetGame();

            $scope.$watch('selectedLanguage', function () {

                if (_.isNull($scope.selectedLanguage)) {
                    return;
                }

                launchGame();
            });

            $scope.repeatGame = function() {
                launchGame();
            };

            var launchGame = function() {
                resetGame();

                var itemsOfGameSource = _.clone($scope.selectedLanguage.data);
                var itemsOfGame = [];

                _.times($scope.nbRows, function() {

                    var idxToPush = HelperSrv.getRandomInt(0, itemsOfGameSource.length);
                    itemsOfGame.push(itemsOfGameSource[idxToPush]);

                    itemsOfGameSource.splice(idxToPush, 1);
                });

                playGame(itemsOfGame);
            };

            var addSolution = function(cache, k, v) {
                if (!_.has(cache, k)) {
                    cache[k] = [];
                }

                if (!_.contains(cache[k], v)) {
                    cache[k].push(v);
                }
            };

            var playGame = function (itemsOfGame) {

                solutions = _.reduce(itemsOfGame, function(solutions, item) {

                    addSolution(solutions, item[0], item[1]);
                    addSolution(solutions, item[1], item[0]);

                    return solutions;
                }, {});

                 var cards = _.chain(itemsOfGame)
                                    .flatten()
                                    .map(function(itemValue) {
                                        var card = {
                                            value: itemValue,
                                            state: STATE_CLEAN,
                                            displayedValue: undefined
                                        };

                                        $scope.updateDisplayedItem(card);
                                        return card;
                                    })
                                    .value();

                 var randomCards = [];
                 _.times(_.clone(cards.length), function() {

                     var idxToPush = HelperSrv.getRandomInt(0, cards.length);
                     randomCards.push(cards[idxToPush]);

                     cards.splice(idxToPush, 1);
                 });

                 if ($scope.showRules === null) {
                     $scope.showRules = true;
                 }

                 startTime = Date.now();
                 $scope.memoCards = randomCards;
            };

            $scope.selectCard = function(memoCard) {

                if ($scope.showRules) {
                    $scope.showRules = false;
                }

                if (!$scope.isGameDisplayed) {
                    memoCard.displayedValue = memoCard.value;
                }

                // first selection
                if (_.isNull(firstCard)) {
                    firstCard = memoCard;
                    memoCard.state = STATE_SELECTED;
                    // hidden mode: let the item displayed
                    return;
                }

                // second selection
                var corrects = solutions[memoCard.value];

                var hasFoundThePair = _.contains(corrects, firstCard.value);
                if (hasFoundThePair) { // success

                    firstCard.state = STATE_SUCCESS;
                    memoCard.state = STATE_SUCCESS;

                    firstCard = null; // reset for next move
                    // hidden mode: let the item displayed

                    // game over?
                    var gameIsOver = _.every($scope.memoCards, function(memoCard) {
                        return memoCard.state === STATE_SUCCESS;
                    });

                    if (gameIsOver) {
                        var timeMs = Date.now() - startTime;

                        resetGame();

                        $scope.timeElapsedOfGame = HelperSrv.formatTime(timeMs);
                        $scope.showCongratulations = true;
                        return;
                    }

                } else { // error: wrong pair

                    firstCard.state = STATE_ERROR;
                    memoCard.state = STATE_ERROR;

                    var tmp1 = firstCard;
                    var tmp2 = memoCard;

                    $timeout(function () {
                        tmp1.state = STATE_CLEAN;
                        tmp2.state = STATE_CLEAN;

                        if (!$scope.isGameDisplayed) {
                            tmp1.displayedValue = HIDDEN_DISPLAY;
                            tmp2.displayedValue = HIDDEN_DISPLAY;
                        }

                    }, 300);

                    firstCard = null; // reset
                    return;
                }

            };

            $scope.onGoHome = function() {
                resetGame();
                $scope.selectedLanguage = null;
            };

            $scope.updateDisplayedItem = function(memoCard) {
                if (memoCard.state === STATE_CLEAN) {
                    memoCard.displayedValue = $scope.isGameDisplayed ? memoCard.value : HIDDEN_DISPLAY;
                }
                // else in other states, let's the item displayed
            };

            $scope.toggleVisibilityMode = function() {
                $scope.isGameDisplayed = !$scope.isGameDisplayed;

                _.each($scope.memoCards, function(memoCard) {
                    $scope.updateDisplayedItem(memoCard);
                });
            };

        }]);