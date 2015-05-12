'use strict';

angular.module('pguPlayApp')
  .factory('MixpanelService', function ($window) {

    return {
      track: function (key, data) {

        if (_.has($window, 'mixpanel')) {
          $window.mixpanel.track(key, data);
        }

      }
    };

  });

