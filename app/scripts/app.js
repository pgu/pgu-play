'use strict';

angular.module('pguPlayApp', []).config([ '$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'

    }).when('/cards', {
            templateUrl: 'views/cards.html',
            controller: 'CardsCtrl'

    }).when('/memo', {
        templateUrl: 'views/memo.html',
        controller: 'MemoCtrl'

    }).otherwise({
        redirectTo: '/'
    });
}]);
