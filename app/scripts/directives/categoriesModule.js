'use strict';

angular.module('categoriesModule', []);

angular.module('categoriesModule').controller('categoriesCtrl', ['$scope', function($scope) {

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
            '<p></p>' +
            '<div class="btn-group btn-group-justified">' +
            '   <a ng-class="(selectedName === name) ? \'btn btn-large btn-primary disabled\' : \'btn btn-large btn-default\'" ng-repeat="name in names" ng-click="selectName(name)">{{ name }}</a>' +
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
