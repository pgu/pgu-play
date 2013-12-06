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
            var key_field = cfg.getKey().getField();
            var all_display_fields = cfg.getValues();

            return {
                getKey: function(item) {
                    return item[key_field];
                },
                getValues: function (item, subset_display_fields) {
                    var display_fields = subset_display_fields || all_display_fields;

                    return _.chain(display_fields)
                        .map(function(display_field) {
                            return item[display_field.getField()];
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