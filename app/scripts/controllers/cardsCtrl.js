'use strict';

angular.module('pguPlayApp').controller('CardsCtrl', //
    [ '$scope', 'LanguagesSrv', //
        function ($scope, LanguagesSrv) { //

            $scope.namesOfLg = [];
            $scope.selectedLg = undefined;
            $scope.selectedItem = undefined;

            var getNamesOfLanguages = function() {
                return _.map(LanguagesSrv.languages, function (v, k, list) {
                    return v.name;
                });
            }

            var getRandomInt = function (min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            };

            $scope.selectLanguage = function (nameOfLg) {

                var selectedLg = _.findWhere(LanguagesSrv.languages, {name: nameOfLg});

                var itemsOfGame = _.clone(selectedLg.data);

                // select to symbol to guess
                var selectedIdx = getRandomInt(0, itemsOfGame.length);
                var itemToGuess = itemsOfGame[selectedIdx];

                var itemToGuessDisplayed = itemToGuess[0];

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
                    randomAnswers.push(sortedAnswers[idxToPush]);

                    sortedAnswers.splice(idxToPush, 1);
                }

                $scope.itemToGuessDisplayed = itemToGuessDisplayed;
                $scope.selectedLg = selectedLg;
                $scope.answers = randomAnswers;
            };

            $scope.namesOfLg = getNamesOfLanguages();

        }]);