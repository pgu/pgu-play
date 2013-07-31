'use strict';

angular.module('pguPlayApp').controller('CardsCtrl', //
    [ '$scope', 'LanguagesSrv', '$timeout', //
        function ($scope, LanguagesSrv, $timeout) { //

            var itemToGuess = null;
            var itemsOfGame = [];
            var itemsOfGameSource = [];
            var startTime = 0;

            $scope.namesOfLg = LanguagesSrv.getNamesOfLanguages();

            function resetGame() {
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
            }

            $scope.selectLanguageAndPlay = function (nameOfLg) {

                resetGame();

                var selectedLg = _.findWhere(LanguagesSrv.languages, {name: nameOfLg});

                itemsOfGameSource = _.clone(selectedLg.data);
                itemsOfGame = _.clone(itemsOfGameSource);

                $scope.selectedLg = selectedLg;

                startTime = Date.now();
                playGame();
            };

            $scope.selectAnswer = function(answer) {
                answer.state = answer.value === itemToGuess[1] ? 'success' : 'error';

                if (answer.state === 'success') {
                    $timeout(function () {
                        playGame();
                    }, 300);
                }

            };

            var getRandomInt = function (min, max) { // max: exclusion; min: inclusion
                return Math.floor(Math.random() * (max - min) + min);
            };

            var formatTime = function(timeMs) {

                if (timeMs > 10*60*1000) {
                    return 'more than 10 minutes!';

                } else {

                    var totalSeconds = timeMs / 1000;
                    var minutes = Math.floor(totalSeconds / 60);
                    var seconds = Math.floor(totalSeconds - (minutes * 60));

                    if (minutes < 10) {minutes = '0' + minutes;}
                    if (seconds < 10) {seconds = '0' + seconds;}
                    return minutes + ' min : ' + seconds + ' sec';
                }
            };

            var playGame = function() {

                var gameIsOver = itemsOfGame.length === 0;
                if (gameIsOver) {
                    var timeMs = Date.now() - startTime;

                    resetGame();

                    $scope.timeElapsedOfGame = formatTime(timeMs);
                    $scope.showCongratulations = true;
                    return;
                }

                //
                // Play the game!
                //

                // select to symbol to guess
                var selectedIdx = getRandomInt(0, itemsOfGame.length);
                var selectedItem = _.clone(itemsOfGame[selectedIdx]);

                itemsOfGame.splice(selectedIdx, 1); // clean the game for the next round

                // select wrong answers
                var itemsForWrongAnswers = _.filter(itemsOfGameSource, function(item) {
                    return item[0] !== selectedItem[0] || item[1] !== selectedItem[1];
                });

                var wrongItem1Idx = getRandomInt(0, itemsForWrongAnswers.length);
                var wrongItem1 = itemsForWrongAnswers[wrongItem1Idx];

                itemsForWrongAnswers.splice(wrongItem1Idx, 1);
                var wrongItem2 = itemsForWrongAnswers[getRandomInt(0, itemsForWrongAnswers.length)];

                // build answers
                var sortedItems = [selectedItem, wrongItem1, wrongItem2];
                var sortedAnswers = _.pluck(sortedItems, 1);
                var randomAnswers = [];

                for (var i = 0; i < sortedItems.length; i++) {
                    var idxToPush = getRandomInt(0, sortedAnswers.length);

                    var answerForView = {
                        value: sortedAnswers[idxToPush],
                        state: 'clean'
                    };
                    randomAnswers.push(answerForView);

                    sortedAnswers.splice(idxToPush, 1);
                }

                //
                itemToGuess = selectedItem;

                $scope.answers = randomAnswers;
                $scope.itemToGuessDisplay = itemToGuess[0];

            };

        }]);