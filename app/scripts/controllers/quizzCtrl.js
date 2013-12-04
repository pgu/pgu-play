'use strict';

angular.module('pguPlayApp').controller('QuizzCtrl', //
    [ '$scope', 'hlp', '$timeout', 'Kanas', //
        function ($scope, hlp, $timeout, Kanas) { //

            $scope.NB_OF_QUESTIONS = 10; // 20

            var STATE_CLEAN = 'clean';
            var STATE_ERROR = 'error';
            var STATE_SUCCESS = 'success';

            $scope.progressWidthInPct = (100 / $scope.NB_OF_QUESTIONS) + '%';

            var wrap = null;
            var itemToGuess = null;
            var itemsOfGame = [];
            var allItems = [];
            var startTime = 0;

            $scope.showRules = null;

            var lgKey = null;
            $scope.cfg = null;
            $scope.elapsedTimeInMs = 0;
            $scope.challenges = [];

            var resetGame = function() {

                $scope.isGameOn = false;
                $scope.itemToGuessDisplay = null;
                $scope.answers = [];

                $scope.isQuizzHelpToggled = false;

                itemToGuess = null;
                itemsOfGame = [];
                startTime = 0;
            };
            resetGame();

            $scope.selectLanguage = function(language) {

                lgKey = language ? language.getKey() : null;
                allItems = language ? language.getData() : [];
                $scope.cfg = language ? language.getCfg() : null;
                wrap = language ? hlp.newItemWrapper($scope.cfg) : null;

                $scope.launchGame();
            };

            $scope.launchGame = function() {

                $scope.elapsedTimeInMs = 0;
                $scope.challenges = [];
                resetGame();

                if (!lgKey) {
                    return;
                }

                itemsOfGame = [];

                var poolOfAllItems = _.clone(allItems);
                _($scope.NB_OF_QUESTIONS).times(function() {

                    var item = hlp.pickRandom(poolOfAllItems);
                    itemsOfGame.push(item);

                    poolOfAllItems = _.without(poolOfAllItems, item);
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
                        symbol: itemToGuess.symbol,
                        answer: itemToGuess.answer
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
                var selectedItem = hlp.pickRandom(itemsOfGame);

                itemsOfGame = _.without(itemsOfGame, selectedItem); // clean the game for the next round

                var rightAnswers = wrap.getValues(selectedItem);
                var rightAnswer = hlp.pickRandom(rightAnswers);

                itemToGuess = {
                    symbol: wrap.getKey(selectedItem),
                    answer: rightAnswer
                };

                // get other answers
                var otherAnswers = [];
                while (otherAnswers.length < 2) {
                    var otherItem = hlp.pickRandom(allItems);

                    if (otherItem === selectedItem) {
                        continue;
                    }

                    var answers = wrap.getValues(otherItem);
                    var availableAnswers = _.difference(answers, rightAnswers);

                    if (_.isEmpty(availableAnswers)) {
                        continue;
                    }

                    otherAnswers.push(hlp.pickRandom(availableAnswers));
                }

                // shuffle answers
                var sortedAnswers = [rightAnswer].concat(otherAnswers);
                var randomAnswers = [];

                _(sortedAnswers.length).times(function() {
                    var answer = hlp.pickRandom(sortedAnswers);

                    var answerForView = {
                        value: answer,
                        label: $scope.isQuizzHelpToggled ? Kanas.hepburnKun(Kanas.hepburnOn(answer)) : answer,
                        state: STATE_CLEAN
                    };
                    randomAnswers.push(answerForView);

                    sortedAnswers = _.without(sortedAnswers, answer);
                });

                //
                $scope.answers = randomAnswers;
                $scope.itemToGuessDisplay = itemToGuess.symbol;

                hlp.scrollToTop();
            };

            $scope.onGoHome = function() {
                resetGame();
                $scope.challenges = [];
            };

            $scope.onToggleQuizzHelp = function() {
                $scope.isQuizzHelpToggled = !$scope.isQuizzHelpToggled;
                $scope.cfg.onToggleQuizzHelp($scope.isQuizzHelpToggled, $scope.answers);
            };

        }]);