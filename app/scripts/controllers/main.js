'use strict';

angular.module('pguPlayApp')
  .controller('MainCtrl', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.isAppInstalled = false;
    $scope.infos = ['init'];

    var host = location.hostname.indexOf('localhost') !== -1 ? "http://localhost:9000" : "http://pgu-play.appspot.com";
    var urlOfManifest = host + '/manifest.webapp';
    $scope.infos.push('url of manifest: ' + urlOfManifest);

    var installCheck = navigator.mozApps.checkInstalled(urlOfManifest);
    installCheck.onsuccess = function() {
        $scope.isAppInstalled = _.isObject(installCheck.result);
        $scope.infos.push('installCheck.onsuccess: ' + installCheck.result);

    };
    installCheck.onerror = function() {
        $scope.isAppInstalled = false;
        $scope.infos.push('Error calling checkInstalled: ' + this.error.name);
    };

    $scope.installOnFirefoxOs = function() {
        $scope.infos.push('installOnFF ');

        var installApp = navigator.mozApps.install(urlOfManifest);
        installApp.onsuccess = function() { // App is installed
            $scope.isAppInstalled = true;
            $scope.infos.push('installOnFF.onsuccess ');
            $scope.infos.push(this.result);
        };
        installApp.onerror = function() { // App wasn't installed, info is in installapp.error.name
            $scope.isAppInstalled = false;
            $scope.infos.push('installOnFF.onerror ');
            $scope.infos.push(this.error.name);
        };
    }

  });
