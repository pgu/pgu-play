'use strict';

angular.module('pguPlayApp').controller('QuizzCtrl', //
    [ '$scope', 'HelperSrv', '$timeout', 'Kanas', //
        function ($scope, HelperSrv, $timeout, Kanas) { //

            var NB_OF_QUESTIONS = 20; // 20

            var STATE_CLEAN = 'clean';
            var STATE_ERROR = 'error';
            var STATE_SUCCESS = 'success';

            $scope.progressWidthInPct = (100 / NB_OF_QUESTIONS) + '%';

            var itemToGuess = null;
            var itemsOfGame = [];
            var itemsOfGameSource = [];
            var startTime = 0;

            $scope.showRules = null;

            $scope.selectedLanguage = null;
            $scope.elapsedTimeInMs = 0;
            $scope.challenges = [];

            var resetGame = function() {

                $scope.isGameOn = false;
                $scope.selectedItem = null;
                $scope.itemToGuessDisplay = null;
                $scope.answers = [];

                $scope.isKanaHepburned = false;

                itemToGuess = null;
                itemsOfGame = [];
                itemsOfGameSource = [];
                startTime = 0;
            };
            resetGame();

            $scope.$watch('selectedLanguage', function () {
                $scope.launchGame();
            });

            $scope.launchGame = function() {

                $scope.elapsedTimeInMs = 0;
                $scope.challenges = [];
                resetGame();

                if (_.isNull($scope.selectedLanguage)) {
                    return;
                }

                itemsOfGameSource = _.clone($scope.selectedLanguage.getData());

                var itemsOfGamePool = _.clone($scope.selectedLanguage.getData());
                itemsOfGame = [];

                _.times(NB_OF_QUESTIONS, function() {

                    var itemIdx = HelperSrv.random(0, itemsOfGamePool.length);
                    var item = itemsOfGamePool[itemIdx];

                    itemsOfGame.push(item);

                    itemsOfGamePool.splice(itemIdx, 1);
                });

                $scope.isGameOn = true;
                startTime = Date.now();
                playGame();
            };

            $scope.selectAnswer = function (answer) {

                if ($scope.showRules) {
                    $scope.showRules = false;
                }

                answer.state = answer.value === itemToGuess.answer ? STATE_SUCCESS : STATE_ERROR;

                if (answer.state === STATE_SUCCESS) {

                    var hasAtLeastOneWrongAnswer = _.some($scope.answers, function(answer) {
                        return answer.state === STATE_ERROR;
                    });

                    var challenge = {
                        isDoneWithoutWrongs: !hasAtLeastOneWrongAnswer,
                        symbol: _.clone(itemToGuess.symbol),
                        answer: _.clone(itemToGuess.answer)
                    };
                    $scope.challenges.push(challenge);

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
                    $scope.elapsedTimeInMs = Date.now() - startTime;

                    resetGame();
                    return;
                }

                //
                // Play the game!
                //

                // select the symbol to guess
                var selectedIdx = HelperSrv.random(0, itemsOfGame.length);
                var selectedItem = _.clone(itemsOfGame[selectedIdx]);

                itemsOfGame.splice(selectedIdx, 1); // clean the game for the next round

                // select wrong answers
                var rightAnswers = _.rest(selectedItem);
                var itemsForWrongAnswers = _.filter(itemsOfGameSource, function (item) {
                                                var doesNotContainSameAnswers = _.isEmpty(_.intersection(rightAnswers, _.rest(item)));
                                                return doesNotContainSameAnswers;
                                            });

                var wrongItem1Idx = HelperSrv.random(0, itemsForWrongAnswers.length);
                var wrongItem1 = itemsForWrongAnswers[wrongItem1Idx];

                itemsForWrongAnswers.splice(wrongItem1Idx, 1);
                var wrongItem2 = itemsForWrongAnswers[HelperSrv.random(0, itemsForWrongAnswers.length)];

                // build answers
                var sortedItems = [selectedItem, wrongItem1, wrongItem2];
                var randomAnswers = [];

                _.times(sortedItems.length, function() {
                    var idxToPush = HelperSrv.random(0, sortedItems.length);

                    var item = sortedItems[idxToPush];
                    var itemKey = _.first(item);
                    var itemAnswers = _.rest(item);

                    var anAnswer = itemAnswers[HelperSrv.random(0, itemAnswers.length)];

                    if (itemKey === selectedItem[0]) { // the right answer
                        itemToGuess = {
                            symbol: itemKey,
                            answer: anAnswer
                        };
                    }

                    var answerForView = {
                        value: anAnswer,
                        label: anAnswer,
                        state: STATE_CLEAN
                    };
                    randomAnswers.push(answerForView);

                    sortedItems.splice(idxToPush, 1);
                });

                //
                $scope.answers = randomAnswers;
                $scope.itemToGuessDisplay = itemToGuess.symbol;

            };

            $scope.onGoHome = function() {
                resetGame();
                $scope.selectedLanguage = null;
                $scope.challenges = [];
            };

            // TODO review...
            $scope.onHepburnKana = function() {
                $scope.isKanaHepburned = !$scope.isKanaHepburned;

                _.each($scope.answers, function(answer) {

                    if ($scope.isKanaHepburned) {
                        var v = answer.value;
                        var tmp = Kanas.hepburnKun(v);
                        answer.label = Kanas.hepburnOn(tmp);

                    } else {
                        answer.label = answer.value;
                    }

                });

            };

        }]);