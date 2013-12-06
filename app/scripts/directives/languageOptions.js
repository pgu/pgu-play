'use strict';

angular.module('pguPlayApp').controller('languageOptionsCtrl', //
    ['$scope', //
        function($scope) { //

            $scope.$watch('allDisplayFields', function() {

                $scope.options = [];

                if (_.isEmpty($scope.allDisplayFields)) {
                    return;
                }
                var default_field = _.first($scope.allDisplayFields);
                $scope.options.push({ displayField: default_field, is_toggled: true});

                if (_.size($scope.allDisplayFields) > 1) {
                    _.each(_.rest($scope.allDisplayFields), function(displayField) {
                        $scope.options.push({ displayField: displayField, is_toggled: false});
                    });
                }

                updateDisplayFields(true);
            });

            $scope.selectOption = function(option) {
                var other_options = _.without($scope.options, option);
                var shouldAllowToggle = _.some(other_options, function(other_option) {
                    return other_option.is_toggled;
                });

                if (!shouldAllowToggle) {
                    return;
                }

                option.is_toggled = !option.is_toggled;
                updateDisplayFields(false);
            };

            function updateDisplayFields(isInit) {

                var activeDisplayFields = _.chain($scope.options) //
                    .filter(function(option) {
                        return option.is_toggled;
                    }) //
                    .map(function(option) {
                        return option.displayField;
                    }) //
                    .value();

                $scope.onUpdate({displayFields: activeDisplayFields, isInit: isInit});
            }

        }]);

angular.module('pguPlayApp').directive('languageOptions', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/directives/languageOptions.html',
        scope: {
            allDisplayFields: '=',
            onUpdate: '&'
        },
        controller: 'languageOptionsCtrl'
    };
});
