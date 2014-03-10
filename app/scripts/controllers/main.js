'use strict';

angular.module('pguPlayApp').controller('MainCtrl',
    [ '$scope', '$window', '$location',
        function ($scope, $window, $location) {

    $scope.isInFF = _.isObject($window.navigator.mozApps);
    if ($scope.isInFF) {

        var host = $location.$$host.indexOf('localhost') !== -1 ? 'http://localhost:9000' : 'http://pgu-play.appspot.com';
        var urlOfManifest = host + '/manifest.webapp';

        $window.navigator.mozApps.checkInstalled(urlOfManifest);
//        var installCheck = $window.navigator.mozApps.checkInstalled(urlOfManifest);
//        installCheck.onsuccess = function () {
//        };
//        installCheck.onerror = function () {
//        };

        $scope.installOnFirefoxOs = function () {

            $window.navigator.mozApps.install(urlOfManifest);
//            var installApp = $window.navigator.mozApps.install(urlOfManifest);
//            installApp.onsuccess = function () { // App is installed
//            };
//            installApp.onerror = function () { // App wasn't installed, info is in installapp.error.name
//            };
        };
    }

}]);
