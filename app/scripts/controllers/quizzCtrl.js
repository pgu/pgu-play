'use strict';

angular.module('pguPlayApp').controller('QuizzCtrl', //
    [ '$scope', 'HelperSrv', '$timeout', //
        function ($scope, HelperSrv, $timeout) { //

            var itemToGuess = null;
            var itemsOfGame = [];
            var itemsOfGameSource = [];
            var startTime = 0;

            $scope.selectedLanguage = null;

            $scope.showRules = null;

            var resetGame = function() {

                $scope.selectedItem = null;
                $scope.itemToGuessDisplay = null;
                $scope.answers = [];

                $scope.showCongratulations = false;
                $scope.timeElapsedOfGame = '';

                itemToGuess = null;
                itemsOfGame = [];
                itemsOfGameSource = [];
                startTime = 0;
            };
            resetGame();

            $scope.$watch('selectedLanguage', function () {

                if (_.isNull($scope.selectedLanguage)) {
                    return;
                }

                resetGame();

//                itemsOfGameSource = _.clone([$scope.selectedLanguage.data[0],$scope.selectedLanguage.data[1],$scope.selectedLanguage.data[2]]); // TEST

                itemsOfGameSource = _.clone($scope.selectedLanguage.data);
                itemsOfGame = _.clone(itemsOfGameSource);

                startTime = Date.now();
                playGame();
            });

            $scope.selectAnswer = function (answer) {

                if ($scope.showRules) {
                    $scope.showRules = false;
                }

                answer.state = answer.value === itemToGuess[1] ? 'success' : 'error';

                if (answer.state === 'success') {
                    $timeout(function () {
                        playGame();
                    }, 300);
                }

            };

            var playGame = function () {

                if ($scope.showRules === null) {
                    $scope.showRules = true;
                }

                var gameIsOver = itemsOfGame.length === 0;
                if (gameIsOver) {
                    var timeMs = Date.now() - startTime;

                    resetGame();
                    $scope.selectedLanguage = null;

                    $scope.timeElapsedOfGame = HelperSrv.formatTime(timeMs);
                    $scope.showCongratulations = true;
                    return;
                }

                //
                // Play the game!
                //

                // select to symbol to guess
                var selectedIdx = HelperSrv.getRandomInt(0, itemsOfGame.length);
                var selectedItem = _.clone(itemsOfGame[selectedIdx]);

                itemsOfGame.splice(selectedIdx, 1); // clean the game for the next round

                // select wrong answers
                var itemsForWrongAnswers = _.filter(itemsOfGameSource, function (item) {
                                                return item[0] !== selectedItem[0] && item[1] !== selectedItem[1];
                                            });

                var wrongItem1Idx = HelperSrv.getRandomInt(0, itemsForWrongAnswers.length);
                var wrongItem1 = itemsForWrongAnswers[wrongItem1Idx];

                itemsForWrongAnswers.splice(wrongItem1Idx, 1);
                var wrongItem2 = itemsForWrongAnswers[HelperSrv.getRandomInt(0, itemsForWrongAnswers.length)];

                // build answers
                var sortedItems = [selectedItem, wrongItem1, wrongItem2];
                var sortedAnswers = _.pluck(sortedItems, 1);
                var randomAnswers = [];

                _.times(sortedItems.length, function() {
                    var idxToPush = HelperSrv.getRandomInt(0, sortedAnswers.length);

                    var answerForView = {
                        value: sortedAnswers[idxToPush],
                        state: 'clean'
                    };
                    randomAnswers.push(answerForView);

                    sortedAnswers.splice(idxToPush, 1);
                });

                //
                itemToGuess = selectedItem;

                $scope.answers = randomAnswers;
                $scope.itemToGuessDisplay = itemToGuess[0];

            };

            $scope.onGoHome = function() {
                resetGame();
                $scope.selectedLanguage = null;
            };

        }]);