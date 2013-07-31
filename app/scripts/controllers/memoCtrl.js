'use strict';

angular.module('pguPlayApp').controller('MemoCtrl', //
    [ '$scope', 'LanguagesSrv', 'HelperSrv', '$timeout', //
        function ($scope, LanguagesSrv, HelperSrv, $timeout) { //

            var startTime = 0;

            $scope.underscore = _;
            $scope.nbRows = 4;
            $scope.nbCellsByRow = 2;
            $scope.namesOfLg = LanguagesSrv.getNamesOfLanguages();

            var resetGame = function() {
                $scope.selectedLg = null;
                $scope.cards = [];

                $scope.showCongratulations = false;
                $scope.timeElapsedOfGame = '';

                startTime = 0;
            };
            resetGame();

            $scope.selectLanguageAndPlay = function(nameOfLg) {

                resetGame();

                var selectedLg = _.findWhere(LanguagesSrv.languages, {name: nameOfLg});

                $scope.selectedLg = selectedLg;

                startTime = Date.now();
                playGame();
            };

            var items = [['A', 'AA'], ['B', 'BB'], ['C', 'CC'], ['A', 'aa']];

            var addSolution = function(cache, k, v) {
                if (!_.has(cache, k)) {
                    cache[k] = [];
                }

                if (!_.contains(cache[k], v)) {
                    cache[k].push(v);
                }
            };

            var solutions = _.reduce(items, function(solutions, item) {

                    addSolution(solutions, item[0], item[1]);
                    addSolution(solutions, item[1], item[0]);

                    return solutions;
                }, {});

            console.log(solutions);

            var playGame = function () {
                var cards = _.flatten(items);
                $scope.memoCards = _.map(cards, function(card) {
                    return {
                        value: card,
                        state: 'clean'
                    };
                });
            };

            var firstCard = null;

            $scope.selectCard = function(idxOfMemoCard) {

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

                    firstCard = null; // reset

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

        }]);