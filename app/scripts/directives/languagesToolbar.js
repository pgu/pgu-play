'use strict';

angular.module('pguPlayApp').controller('languagesToolbarCtrl', //
    ['$scope', 'LanguagesSrv', //
        function($scope, LanguagesSrv) { //

    $scope.underscore = _;
    $scope.nbRows = 0;
    $scope.nbCellsByRow = 2;

    $scope.languages = LanguagesSrv.languages;

    //
    // build the 'grid'
    $scope.nbRows = $scope.languages.length / $scope.nbCellsByRow;

    //
    //
    $scope.selectLanguage = function(idxOfLanguage) {
        $scope.selectedLanguage = $scope.languages[idxOfLanguage];
    };

    $scope.markup = function(name) {
        if (_.isUndefined(name)) {
            return '';
        }

        if (name.indexOf('[+]') !== -1) {
            return name.replace('[+]', '') + '<i class="glyphicon glyphicon-arrow-up"></i>';
        }

        if (name.indexOf('[-]') !== -1) {
            return name.replace('[-]', '') + '<i class="glyphicon glyphicon-arrow-down"></i>';
        }

        return name;
    };

}]);

angular.module('pguPlayApp').directive('languagesToolbar', function() {
    return {
        restrict: 'E',
        replace: true,
        template:
            '<div>' +
            '' +
            '<p></p>' +
            '<div class="alert alert-info text-center" ng-show="!selectedLanguage" ng-animate="\'fade\'">' +
            '    Select a category' +
            '</div>' +
            '' +
            '<div ng-repeat="row in underscore.range(nbRows)">' +
            '  <p></p>' +
            '  <div class="btn-group btn-group-justified">' +
            '     <a ng-class="(selectedLanguage.key === languages[row * nbCellsByRow + cell].key) ? \'btn btn-large btn-primary disabled\' : \'btn btn-large btn-default\'" ng-repeat="cell in underscore.range(nbCellsByRow)" ng-click="selectLanguage(row * nbCellsByRow + cell)" ng-disabled="!languages[row * nbCellsByRow + cell]" ng-bind-html-unsafe="markup(languages[row * nbCellsByRow + cell].name)"></a>' +
            '  </div>' +
            '</div>' +
            '' +
            '<p></p>' +
            '</div>' ,
        scope: {
            selectedLanguage: '='
        },
        controller: 'languagesToolbarCtrl'
    };
});
