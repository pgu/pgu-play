'use strict';

angular.module('pguPlayApp')
  .controller('MainCtrl', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.isAppAlreadyInstalled = false;

    var urlOfManifest = location.hostname.indexOf('localhost') !== -1 ? "http://localhost:9000/manifest.webapp" : "http://pgu-play.appspot.com/manifest.webapp";

    var installCheck = navigator.mozApps.checkInstalled(urlOfManifest);
    installCheck.onsuccess = function() {
        $scope.isAppAlreadyInstalled = _.isObject(installCheck.result);
    };

    $scope.installOnFirefoxOs = function() {
        // install the app
        var installAppli = navigator.mozApps.install(urlOfManifest);
        installAppli.onsuccess = function(data) { // App is installed
            $scope.isAppAlreadyInstalled = true;
        };
        installAppli.onerror = function() { // App wasn't installed, info is in installapp.error.name
            console.log(installapp.error.name);
        };
    }

  });
