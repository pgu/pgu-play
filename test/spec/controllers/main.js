'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('pguPlayApp'));

    var $controller, $rootScope, $window, $location;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$controller_, _$rootScope_, _$window_, _$location_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $window = _$window_;
        $location = _$location_;
    }));

    describe("to be or not to be in FF", function () {

        it('should know that we are on FF', function () {
            // given
            $window.navigator = {
                mozApps: {
                    checkInstalled: jasmine.createSpy('checkInstalled').andReturn({})
                }
            };

            var $scope = $rootScope.$new();

            // when
            $controller('MainCtrl', {
                $scope: $scope
            });

            // then
            expect($scope.isInFF).toBe(true);
        });

        it('should know that we are NOT on FF', function () {
            // given
            delete $window.navigator.mozApps;
            var $scope = $rootScope.$new();

            // when
            $controller('MainCtrl', {
                $scope: $scope
            });

            // then
            expect($scope.isInFF).toBe(false);
        });

    });

    describe('in FF, check install', function () {

        it('should know that we are on localhost', function () {
            // given
            $window.navigator = {
                mozApps: {
                    checkInstalled: jasmine.createSpy('checkInstalled').andReturn({})
                }
            };
            $location.$$host = 'localhost';

            // when
            $controller('MainCtrl', {
                $scope: $rootScope.$new()
            });

            // then
            expect(navigator.mozApps.checkInstalled).toHaveBeenCalledWith('http://localhost:9000/manifest.webapp');
        });

        it('should know that we are on production', function () {
            // given
            $window.navigator = {
                mozApps: {
                    checkInstalled: jasmine.createSpy('checkInstalled').andReturn({})
                }
            };
            $location.$$host = 'pgu-play.appspot.com';

            // when
            $controller('MainCtrl', {
                $scope: $rootScope.$new()
            });

            // then
            expect(navigator.mozApps.checkInstalled).toHaveBeenCalledWith('http://pgu-play.appspot.com/manifest.webapp');
        });

    });

    describe('install FF', function () {

        it('should install on localhost', function () {
            // given
            var scope = $rootScope.$new();

            $window.navigator = {
                mozApps: {
                    checkInstalled: jasmine.createSpy('checkInstalled').andReturn({}),
                    install: jasmine.createSpy('install')
                }
            };
            $location.$$host = 'localhost';
            $controller('MainCtrl', {
                $scope: scope
            });

            // when
            scope.installOnFirefoxOs();

            // then
            expect($window.navigator.mozApps.install).toHaveBeenCalledWith('http://localhost:9000/manifest.webapp');
        });

        it('should install on production', function () {
            // given
            var scope = $rootScope.$new();

            $window.navigator = {
                mozApps: {
                    checkInstalled: jasmine.createSpy('checkInstalled').andReturn({}),
                    install: jasmine.createSpy('install')
                }
            };
            $location.$$host = 'pgu-play.appspot.com';
            $controller('MainCtrl', {
                $scope: scope
            });

            // when
            scope.installOnFirefoxOs();

            // then
            expect($window.navigator.mozApps.install).toHaveBeenCalledWith('http://pgu-play.appspot.com/manifest.webapp');
        });

    });


});
