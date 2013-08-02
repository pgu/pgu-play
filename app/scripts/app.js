'use strict';

angular.module('pguPlayApp', []).config([ '$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'

    }).when('/quizz', {
            templateUrl: 'views/quizz.html',
            controller: 'QuizzCtrl'

    }).when('/memo', {
        templateUrl: 'views/memo.html',
        controller: 'MemoCtrl'

    }).when('/languages', {
        templateUrl: 'views/languages.html',
        controller: 'LanguagesCtrl'

    }).otherwise({
        redirectTo: '/'
    });
}]);
