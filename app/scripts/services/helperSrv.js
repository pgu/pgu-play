'use strict';

angular.module('pguPlayApp').factory('HelperSrv', function () {
    return {
        formatTime: function (timeMs) {

            if (timeMs > 10 * 60 * 1000) {
                return 'more than 10 minutes!';

            } else {

                var totalSeconds = timeMs / 1000;
                var minutes = Math.floor(totalSeconds / 60);
                var seconds = Math.floor(totalSeconds - (minutes * 60));

                if (minutes < 10) {
                    minutes = '0' + minutes;
                }
                if (seconds < 10) {
                    seconds = '0' + seconds;
                }
                return minutes + ' min : ' + seconds + ' sec';
            }
        },
        random: function (min, max) { // max: exclusion; min: inclusion
            return _.random(min, max - 1);
        }
    };
});