'use strict';

angular.module('pguPlayApp').factory('hlp', function () {
    return {
        formatTime: function (timeMs) {

            if (timeMs > 10 * 60 * 1000) {
                return 'more than 10 minutes!';

            } else {

                var totalSeconds = timeMs / 1000;
                var minutes = Math.floor(totalSeconds / 60);
                var seconds = Math.floor(totalSeconds - (minutes * 60));

                if (minutes === 0) {
                    return seconds + ' seconds';
                }

                if (seconds < 10) {
                    seconds = '0' + seconds;
                }
                return minutes + ' min : ' + seconds + ' sec';
            }
        },
        pickRandom: function(array) {
            var idx = _.random(0, array.length - 1); // min: inclusive, max: exclusive;
            return array[idx];
        },
        newItemWrapper: function(cfg) {
            return {
                getKey: function(item) {
                    return item[cfg.getKey().getField()];
                },
                getValues: function (item) {
                    return _.chain(cfg.getValues())
                        .map(function(v) {
                            return item[v.getField()];
                        })
                        .flatten()
                        .value();
                }
            };
        },
        scrollToTop: function() {
            $('html, body').animate({scrollTop:0}, 'slow');
        },
        scrollToBottom: function() {
            $('html, body').animate({scrollTop:99999}, 'slow');
        }
    };

});