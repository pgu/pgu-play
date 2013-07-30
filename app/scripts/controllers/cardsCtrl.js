'use strict';

angular.module('pguPlayApp').controller('CardsCtrl', //
    [ '$scope', 'LanguagesSrv', //
        function ($scope, LanguagesSrv) { //


            $scope.namesOfLg = [];
            $scope.selectedLg = undefined;
            $scope.selectedItem = undefined;
            $scope.itemToGuess = undefined;

            var getNamesOfLanguages = function() {
                return _.map(LanguagesSrv.languages, function (v, k, list) {
                    return v.name;
                });
            }

            $scope.namesOfLg = getNamesOfLanguages();

            var getRandomInt = function (min, max) { // max: exclusion; min: inclusion
                return Math.floor(Math.random() * (max - min) + min);
            };

            $scope.selectLanguage = function (nameOfLg) {

                var selectedLg = _.findWhere(LanguagesSrv.languages, {name: nameOfLg});

                var itemsOfGame = _.clone(selectedLg.data);

                // select to symbol to guess
                var selectedIdx = getRandomInt(0, itemsOfGame.length);
                var itemToGuess = itemsOfGame[selectedIdx];

                // select wrong answers
                var itemsForWrongAnswers = _.clone(itemsOfGame);
                itemsForWrongAnswers.splice(selectedIdx, 1);

                var wrongItem1Idx = getRandomInt(0, itemsForWrongAnswers.length);
                var wrongItem1 = itemsForWrongAnswers[wrongItem1Idx];

                itemsForWrongAnswers.splice(wrongItem1Idx, 1);
                var wrongItem2 = itemsForWrongAnswers[getRandomInt(0, itemsForWrongAnswers.length)];

                var sortedItems = [itemToGuess, wrongItem1, wrongItem2];
                var sortedAnswers = _.map(sortedItems, function(item) {
                    return item[1];
                });
                var randomAnswers = [];

                for (var i = 0; i < sortedItems.length; i++) {
                    var idxToPush = getRandomInt(0, sortedAnswers.length);

                    var answerUI = {
                        value: sortedAnswers[idxToPush],
                        state: 'clean'
                    };
                    randomAnswers.push(answerUI);

                    sortedAnswers.splice(idxToPush, 1);
                }

                $scope.selectedLg = selectedLg;
                $scope.answers = randomAnswers;
                $scope.itemToGuess = {
                    display: itemToGuess[0],
                    value: itemToGuess[1]
                };
            };

            $scope.selectAnswer = function(answer) {
                answer.state = answer.value === $scope.itemToGuess.value ? 'success' : 'error';



            }

        }]);