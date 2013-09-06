'use strict';

angular.module('pguPlayApp').factory('Russian',
    [ 'DataHelper', //
        function (DataHelper) { //

    var alphabetUpper = Object.freeze([ //
        ['A',   'A'], ['Б',   'B'], ['В',    'V'], ['Г',   'G'], ['Д',   'D'], ['Е', 'YE'], //
        ['Ё',  'YO'], ['Ж', '/ʐ/'], ['З',    'Z'], ['И', '/I/'], ['Й', '/J/'], ['К',  'K'], //
        ['Л',   'L'], ['М',   'M'], ['Н',    'N'], ['О',   'O'], ['П',   'P'], ['Р',  'R'], //
        ['С',   'S'], ['T',   'T'], ['У',  '/U/'], ['Ф',   'F'], ['Х', '/X/'], ['Ц', 'TS'], //
        ['Ч', 'TCH'], ['Ш',  'SH'], ['Щ', 'SHCH'], ['Ъ',   '-'], ['Ы', '/I/'], ['Ь',  '-'], //
        ['Э', '/ɛ/'], ['Ю',   'U'], ['Я',   'YA'] //
    ]);

    var alphabetLower = Object.freeze([ //
        ['а',   'a'], ['б',   'b'], ['в',    'v'], ['г',   'g'], ['д',   'd'], ['е', 'ye'], //
        ['ё',  'yo'], ['ж', '/ʐ/'], ['з',    'z'], ['и', '/i/'], ['й', '/j/'], ['к',  'k'], //
        ['л',   'l'], ['м',   'm'], ['н',    'n'], ['о',   'o'], ['п',   'p'], ['р',  'r'], //
        ['с',   's'], ['т',   't'], ['у',  '/u/'], ['ф',   'f'], ['х', '/x/'], ['ц', 'ts'], //
        ['ч', 'tch'], ['ш',  'sh'], ['щ', 'shch'], ['ъ',   '-'], ['ы', '/i/'], ['ь',  '-'], //
        ['э', '/ɛ/'], ['ю',   'u'], ['я',   'ya'] //
    ]);

    return {
        getRawAlphabetLower: function() {
            return DataHelper.toFullRawDataBasic(alphabetLower);
        },
        getRawAlphabetUpper: function() {
            return DataHelper.toFullRawDataBasic(alphabetUpper);
        },
        getGameAlphabetLower: function() {
            return alphabetLower;
        },
        getGameAlphabetUpper: function() {
            return alphabetUpper;
        }
    };

}]);