'use strict';

angular.module('pguPlayApp').controller('MainCtrl',
    [ '$scope',
        function ($scope) {

    $scope.isInFF = _.isObject(navigator.mozApps);

    if ($scope.isInFF) {

        var host = location.hostname.indexOf('localhost') !== -1 ? 'http://localhost:9000' : 'http://pgu-play.appspot.com';
        var urlOfManifest = host + '/manifest.webapp';

        var installCheck = navigator.mozApps.checkInstalled(urlOfManifest);
        installCheck.onsuccess = function () {
        };
        installCheck.onerror = function () {
        };

        $scope.installOnFirefoxOs = function () {

            var installApp = navigator.mozApps.install(urlOfManifest);
            installApp.onsuccess = function () { // App is installed
            };
            installApp.onerror = function () { // App wasn't installed, info is in installapp.error.name
            };
        };
    }

}]);
