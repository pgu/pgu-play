'use strict';

angular.module('pguPlayApp').controller('QuizzCtrl', //
    [ '$scope', 'LanguagesSrv', 'HelperSrv', '$timeout', //
        function ($scope, LanguagesSrv, HelperSrv, $timeout) { //

            var itemToGuess = null;
            var itemsOfGame = [];
            var itemsOfGameSource = [];
            var startTime = 0;

            $scope.namesOfLg = LanguagesSrv.getNamesOfLanguages();

            var resetGame = function() {
                $scope.selectedLg = null;
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

            $scope.selectLanguageAndPlay = function (nameOfLg) {

                resetGame();

                var selectedLg = _.findWhere(LanguagesSrv.languages, {name: nameOfLg});

//                itemsOfGameSource = _.clone([selectedLg.data[0],selectedLg.data[1],selectedLg.data[2]]);

                itemsOfGameSource = _.clone(selectedLg.data);
                itemsOfGame = _.clone(itemsOfGameSource);

                $scope.selectedLg = selectedLg;

                startTime = Date.now();
                playGame();
            };

            $scope.selectAnswer = function (answer) {
                answer.state = answer.value === itemToGuess[1] ? 'success' : 'error';

                if (answer.state === 'success') {
                    $timeout(function () {
                        playGame();
                    }, 300);
                }

            };

            var playGame = function () {

                var gameIsOver = itemsOfGame.length === 0;
                if (gameIsOver) {
                    var timeMs = Date.now() - startTime;

                    resetGame();

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
                    return item[0] !== selectedItem[0] || item[1] !== selectedItem[1];
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

            $scope.clickOnHome = function() {
                resetGame();
            };

        }]);