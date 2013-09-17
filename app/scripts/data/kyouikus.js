'use strict';

angular.module('pguPlayApp').factory('Kyouikus',
    ['Jouyous', function (Jouyous) {

    var jouyous = Jouyous.get();

    var jouyousByGrades = _.groupBy(jouyous, function (j) {
        return j.grade;
    });

    var kyouikus = _.reduce(_.range(1, 7), function(memo, grade) {
            return memo.concat(angular.copy(jouyousByGrades[grade]));
        }, []);

    return {
        buildGet: function(grade) {
            return function() {

                if (grade) {
                    if (grade < 1 || 6 < grade) { throw 'Invalid grade: It must be between 1 and 6 inclusives'; }

                    return angular.copy(jouyousByGrades[grade]);
                }
                return angular.copy(kyouikus);
            };
        }
    };

}]);