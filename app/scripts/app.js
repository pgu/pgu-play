'use strict';

angular.module('pguPlayApp', ['homeBtnModule', 'categoriesModule']).config([ '$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'

    }).when('/quizz', {
            templateUrl: 'views/quizz.html',
            controller: 'QuizzCtrl'

    }).when('/memo', {
        templateUrl: 'views/memo.html',
        controller: 'MemoCtrl'

    }).when('/categories', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl'

    }).otherwise({
        redirectTo: '/'
    });
}]);
