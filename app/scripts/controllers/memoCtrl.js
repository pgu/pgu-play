'use strict';

angular.module('pguPlayApp').controller('MemoCtrl', //
    [ '$scope', 'LanguagesSrv', //
        function ($scope, LanguagesSrv) { //

            var startTime = 0;

            $scope.underscore = _;
            $scope.nbRows = 4;
            $scope.nbCellsByRow = 2;
            $scope.namesOfLg = LanguagesSrv.getNamesOfLanguages();

            var resetGame = function() {
                $scope.selectedLg = null;
                $scope.cards = [];

                startTime = 0;
            };

            $scope.selectLanguageAndPlay = function(nameOfLg) {

                resetGame();

                var selectedLg = _.findWhere(LanguagesSrv.languages, {name: nameOfLg});

                $scope.selectedLg = selectedLg;

                startTime = Date.now();
                playGame();
            };

            var playGame = function () {
                $scope.memoCards = ['A', 'B', 'C', 'D', 'AA', 'BB', 'CC', 'DD'];
            };

        }]);