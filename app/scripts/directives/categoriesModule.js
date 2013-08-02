'use strict';

angular.module('categoriesModule', []);

angular.module('categoriesModule').controller('categoriesCtrl', ['$scope', function($scope) {

    $scope.underscore = _;
    $scope.nbRows = 0;

    $scope.nbCellsByRow = 2;

    $scope.$watch('names', function() {
        var nbRows = $scope.names.length / $scope.nbCellsByRow;
        if ($scope.names % $scope.nbCellsByRow > 0) {
            nbRows++;
        }

        $scope.nbRows = nbRows;
    });

    $scope.selectName = function(name) {
        $scope.selectedName = name;
    };

    $scope.$watch('selectedName', function() {
        if ($scope.selectedName === null) {
            return;
        }

        $scope.onSelectName();
    });

}]);

angular.module('categoriesModule').directive('categoriesWidget', function() {
    return {
        restrict: 'E',
        replace: true,
        template:
            '<div>' +
            '' +
            '<p></p>' +
            '<div class="alert alert-info text-center" ng-show="!selectedName" ng-animate="\'fade\'">' +
            '    Select a category' +
            '</div>' +
            '' +
            '<div ng-repeat="row in underscore.range(nbRows)">' +
            '  <p></p>' +
            '  <div class="btn-group btn-group-justified">' +
            '     <a ng-class="(selectedName === names[row * nbCellsByRow + cell]) ? \'btn btn-large btn-primary disabled\' : \'btn btn-large btn-default\'" ng-repeat="cell in underscore.range(nbCellsByRow)" ng-click="selectName(names[row * nbCellsByRow + cell])" ng-disabled="!names[row * nbCellsByRow + cell]">{{ names[row * nbCellsByRow + cell] }}</a>' +
            '  </div>' +
            '</div>' +
            '' +
            '<p></p>' +
            '</div>' ,
        scope: {
            names: '=',
            selectedName: '=',
            onSelectName: '&'
        },
        controller: 'categoriesCtrl'
    };
});
