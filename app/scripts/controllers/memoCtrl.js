'use strict';

angular.module('pguPlayApp').controller('MemoCtrl', //
    [ '$scope', 'hlp', '$timeout', 'Kanas', //
        function ($scope, hlp, $timeout, Kanas) { //

            var HIDDEN_DISPLAY = '&nbsp;';

            var STATE_CLEAN = 'clean';
            var STATE_SUCCESS = 'success';
            var STATE_SELECTED = 'selected';
            var STATE_ERROR = 'error';

            var dicoOfSolutions = {};
            var startTime = 0;
            var firstCard = null;

            $scope.underscore = _;
            $scope.nbRows = 2; //6
            $scope.nbCellsByRow = 2;

            $scope.selectedLanguage = null;

            $scope.elapsedTimeInMs = 0;

            $scope.showRules = null;
            $scope.isGameDisplayed = true; // by default, show the symbols
            $scope.isKanaHepburned = false;

            var resetGame = function() {
                $scope.isGameOn = false;
                $scope.memoCards = [];

                dicoOfSolutions = {};
                startTime = 0;
                firstCard = null;
            };
            resetGame();

            $scope.$watch('selectedLanguage', function () {
                $scope.launchGame();
            });

            $scope.launchGame = function() {
                $scope.elapsedTimeInMs = 0;
                resetGame();

                if (_.isNull($scope.selectedLanguage)) {
                    return;
                }

                var poolOfAllItems = $scope.selectedLanguage.getData();
                var wrap = hlp.newItemWrapper($scope.selectedLanguage.getCfg());

                var itemsOfGame = [];

                _.times($scope.nbRows, function() {

                    var item = hlp.pickRandom(poolOfAllItems);
                    itemsOfGame.push(item);

                    poolOfAllItems = _.without(poolOfAllItems, item);
                });

                $scope.isGameOn = true;
                playGame(itemsOfGame, wrap);
            };

            var addSolution = function(cache, k, v) {
                if (!_.has(cache, k)) {
                    cache[k] = [];
                }

                if (!_.contains(cache[k], v)) {
                    cache[k].push(v);
                }
            };

            var playGame = function (itemsOfGame, wrap) {

                dicoOfSolutions = _.reduce(itemsOfGame, function(dicoOfSolutions, item) {

                    var key = wrap.getKey(item);
                    var answers = wrap.getValues(item);

                    _.each(answers, function(answer) {
                        addSolution(dicoOfSolutions, key, answer);
                        addSolution(dicoOfSolutions, answer, key);
                    });

                    return dicoOfSolutions;
                }, {});

                var cards = _.reduce(itemsOfGame, function(all, item) {
                    var key = wrap.getKey(item);
                    var answers = wrap.getValues(item);

                    var anAnswer = hlp.pickRandom(answers);

                    var keyCard = {
                        isKey: true,
                        value: key,
                        html: key,
                        displayed: undefined,
                        state: STATE_CLEAN
                    };

                    var answerCard = {
                        isKey: false,
                        value: anAnswer,
                        html: $scope.isKanaHepburned ? Kanas.hepburnOn(Kanas.hepburnKun(anAnswer)) : anAnswer,
                        displayed: undefined,
                        state: STATE_CLEAN
                    };

                    $scope.updateDisplayedItem(keyCard);
                    $scope.updateDisplayedItem(answerCard);

                    all.push(keyCard);
                    all.push(answerCard);
                    return all;

                }, []);

                var randomCards = [];
                _(cards.length).times(function() {

                    var aCard = hlp.pickRandom(cards);
                    randomCards.push(aCard);

                    cards = _.without(cards, aCard);
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
                    memoCard.displayed = memoCard.html;
                }

                // first selection
                if (_.isNull(firstCard)) {
                    firstCard = memoCard;
                    memoCard.state = STATE_SELECTED;
                    // hidden mode: let the item displayed
                    return;
                }

                // second selection
                var corrects = dicoOfSolutions[memoCard.value];

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
                        $scope.elapsedTimeInMs = Date.now() - startTime;

                        resetGame();
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
                            tmp1.displayed = HIDDEN_DISPLAY;
                            tmp2.displayed = HIDDEN_DISPLAY;
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
                    memoCard.displayed = $scope.isGameDisplayed ? memoCard.html : HIDDEN_DISPLAY;
                }
                // else in other states, let's the item displayed
            };

            $scope.toggleVisibilityMode = function() {
                $scope.isGameDisplayed = !$scope.isGameDisplayed;

                _.each($scope.memoCards, function(memoCard) {
                    $scope.updateDisplayedItem(memoCard);
                });
            };

            // TODO review...
            $scope.onHepburnKana = function() {
                $scope.isKanaHepburned = !$scope.isKanaHepburned;

                _.each($scope.memoCards, function(card) {

                   if (!card.isKey) {
                       if ($scope.isKanaHepburned) {
                           var v = card.value;
                           var tmp = Kanas.hepburnKun(v);
                           card.html = Kanas.hepburnOn(tmp);

                       } else {
                           card.html = card.value;
                       }

                       if ($scope.isGameDisplayed) {
                            card.displayed = card.html;
                       }
                   }
                });
            };

}]);