'use strict';

angular.module('pguPlayApp').controller('MemoCtrl', //
    [ '$scope', 'LanguagesSrv', 'HelperSrv', '$timeout', //
        function ($scope, LanguagesSrv, HelperSrv, $timeout) { //

            var solutions = {};
            var startTime = 0;
            var firstCard = null;

            $scope.underscore = _;
            $scope.nbRows = 6; //6
            $scope.nbCellsByRow = 2;
            $scope.namesOfLg = LanguagesSrv.getNamesOfLanguages();
            $scope.showRules = null;

            var resetGame = function() {
                $scope.selectedLg = null;
                $scope.memoCards = [];

                $scope.showCongratulations = false;
                $scope.timeElapsedOfGame = '';

                solutions = {};
                startTime = 0;
                firstCard = null;
            };
            resetGame();

            var addSolution = function(cache, k, v) {
                if (!_.has(cache, k)) {
                    cache[k] = [];
                }

                if (!_.contains(cache[k], v)) {
                    cache[k].push(v);
                }
            };

            $scope.selectLanguageAndPlay = function(nameOfLg) {

                resetGame();

                var selectedLg = _.findWhere(LanguagesSrv.languages, {name: nameOfLg});

                var itemsOfGameSource = _.clone(selectedLg.data);
                var itemsOfGame = [];

                _.times($scope.nbRows, function() {

                    var idxToPush = HelperSrv.getRandomInt(0, itemsOfGameSource.length);
                    itemsOfGame.push(itemsOfGameSource[idxToPush]);

                    itemsOfGameSource.splice(idxToPush, 1);
                });

                $scope.selectedLg = selectedLg;

                playGame(itemsOfGame);
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
                                        return {
                                            value: itemValue,
                                            state: 'clean'
                                        };
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

            $scope.selectCard = function(idxOfMemoCard) {

                if ($scope.showRules) {
                    $scope.showRules = false;
                }

                var memoCard = $scope.memoCards[idxOfMemoCard];

                // first selection
                if (_.isNull(firstCard)) {
                    firstCard = memoCard;
                    memoCard.state = 'selected';
                    return;
                }

                // second selection
                var corrects = solutions[memoCard.value];

                var hasFoundThePair = _.contains(corrects, firstCard.value);
                if (hasFoundThePair) { // success

                    firstCard.state = 'success';
                    memoCard.state = 'success';

                    firstCard = null; // reset for next move

                    // game over?
                    var gameIsOver = _.every($scope.memoCards, function(memoCard) {
                        return memoCard.state === 'success';
                    });

                    if (gameIsOver) {
                        var timeMs = Date.now() - startTime;

                        resetGame();

                        $scope.timeElapsedOfGame = HelperSrv.formatTime(timeMs);
                        $scope.showCongratulations = true;
                        return;
                    }

                } else { // error: wrong pair

                    firstCard.state = 'error';
                    memoCard.state = 'error';

                    var tmp1 = firstCard;
                    var tmp2 = memoCard;

                    $timeout(function () {
                        tmp1.state = 'clean';
                        tmp2.state = 'clean';
                    }, 300);

                    firstCard = null; // reset
                    return;
                }


            };

            $scope.clickOnHome = function() {
                resetGame();
            };

        }]);