'use strict';

angular.module('pguPlayApp').factory('Korean',
    [ 'DataHelper', //
        function (DataHelper) { //

    var hangul = Object.freeze([ //
        ['ㄱ',  'g'], ['ㄴ',   'n'], ['ㄷ',   'd'], ['ㄹ',   'l'], ['ㅁ',  'm'], //
        ['ㅂ',  'b'], ['ㅅ',   's'], ['ㅇ',  'ng'], ['ㅈ',   'j'], ['ㅊ', 'ch'], //
        ['ㅋ',  'k'], ['ㅌ',   't'], ['ㅍ',   'p'], ['ㅎ',   'h'], //
        ['ㄲ', 'kk'], ['ㄸ',  'tt'], ['ㅃ',  'pp'], ['ㅆ',  'ss'], ['ㅉ', 'jj'], //
        ['ㅏ',  'a'], ['ㅑ',  'ya'], ['ㅓ',  'eo'], ['ㅕ', 'yeo'], //
        ['ㅗ',  'o'], ['ㅛ',  'yo'], ['ㅜ',   'u'], ['ㅠ',  'yu'], ['ㅡ', 'eu'], //
        ['ㅣ',  'i'], ['ㅐ',  'ae'], ['ㅒ', 'yae'], ['ㅔ',   'e'], ['ㅖ', 'ye'], //
        ['ㅘ', 'wa'], ['ㅙ', 'wae'], ['ㅚ',  'oe'], ['ㅝ',  'wo'], ['ㅞ', 'we'], //
        ['ㅟ', 'wi'], ['ㅢ',  'ui'] //
    ]);

    return {
        getRawHangul: function() {
            return DataHelper.toFullRawDataBasic(hangul);
        },
        getGameHangul: function() {
            return hangul;
        }
    };

}]);