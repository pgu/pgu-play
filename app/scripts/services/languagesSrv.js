'use strict';

angular.module('pguPlayApp').factory('LanguagesSrv', //
    ['Kanjis', 'Kanas', //
        function (Kanjis, Kanas) {

    var russianUpper, russianLower, //
        arabicShort, arabicLong, //
        hangul //
        ;

    function getRussianUpper() {

        if (!russianUpper) {
            russianUpper = Object.freeze([ //
                ['A',   'A'], ['Б',   'B'], ['В',    'V'], ['Г',   'G'], ['Д',   'D'], ['Е', 'YE'], //
                ['Ё',  'YO'], ['Ж', '/ʐ/'], ['З',    'Z'], ['И', '/I/'], ['Й', '/J/'], ['К',  'K'], //
                ['Л',   'L'], ['М',   'M'], ['Н',    'N'], ['О',   'O'], ['П',   'P'], ['Р',  'R'], //
                ['С',   'S'], ['T',   'T'], ['У',  '/U/'], ['Ф',   'F'], ['Х', '/X/'], ['Ц', 'TS'], //
                ['Ч', 'TCH'], ['Ш',  'SH'], ['Щ', 'SHCH'], ['Ъ',   '-'], ['Ы', '/I/'], ['Ь',  '-'], //
                ['Э', '/ɛ/'], ['Ю',   'U'], ['Я',   'YA'] //
            ]);
        }

        return russianUpper;
    }

    function getRussianLower() {

        if (!russianLower) {
            russianLower = Object.freeze([ //
                ['а',   'a'], ['б',   'b'], ['в',    'v'], ['г',   'g'], ['д',   'd'], ['е', 'ye'], //
                ['ё',  'yo'], ['ж', '/ʐ/'], ['з',    'z'], ['и', '/i/'], ['й', '/j/'], ['к',  'k'], //
                ['л',   'l'], ['м',   'm'], ['н',    'n'], ['о',   'o'], ['п',   'p'], ['р',  'r'], //
                ['с',   's'], ['т',   't'], ['у',  '/u/'], ['ф',   'f'], ['х', '/x/'], ['ц', 'ts'], //
                ['ч', 'tch'], ['ш',  'sh'], ['щ', 'shch'], ['ъ',   '-'], ['ы', '/i/'], ['ь',  '-'], //
                ['э', '/ɛ/'], ['ю',   'u'], ['я',   'ya'] //
            ]);
        }

        return russianLower;
    }

    function getArabicShort() {

        if (!arabicShort) {
            arabicShort = Object.freeze([ //
                ['ﺍ', 'a'], ['ﺏ',  'b'], ['ﺕ', 't'], ['ﺙ', 'th'], ['ﺝ', 'j'], ['ﺡ',  '/ħ/'], ['ﺥ', 'kh'], //
                ['ﺩ', 'd'], ['ﺫ', 'dh'], ['ﺭ', 'r'], ['ﺯ',  'z'], ['ﺱ', 's'], ['ﺵ', 'sh'], ['ﺹ',  '/sˤ/'], ['ﺽ', '/dˤ/'], //
                ['ﻁ', '/tˤ/'], ['ﻅ',  '/zˤ/'], ['ﻉ', '‘'], ['ﻍ', 'gh'], ['ﻑ', 'f'], ['ﻕ',  'q'], ['ﻙ',  'k'], ['ﻝ', 'l'], //
                ['ﻡ', 'm'], ['ﻥ',  'n'], ['ﻩ', 'h'], ['ﻭ',  'w'], ['ﻱ', 'y'], ['ﻻ', 'la'] //
            ]);
        }

        return arabicShort;
    }

    function getArabicLong() {

        if (!arabicLong) {
            arabicLong = Object.freeze([ //
                ['ﺍ',  'a'], ['ﺎ',  'a'], //
                ['ﺏ',  'b'], ['ﺑ',  'b'], ['ﺒ',  'b'], ['ﺐ',  'b'], //
                ['ﺕ',  't'], ['ﺗ',  't'], ['ﺘ',  't'], ['ﺖ',  't'], //
                ['ﺙ', 'th'], ['ﺛ', 'th'], ['ﺜ', 'th'], ['ﺚ', 'th'], //
                ['ﺝ',  'j'], ['ﺟ',  'j'], ['ﺠ',  'j'], ['ﺞ',  'j'], //
                ['ﺡ',  '/ħ/'], ['ﺣ',  '/ħ/'], ['ﺤ',  '/ħ/'], ['ﺢ',  '/ħ/'], //
                ['ﺥ', 'kh'], ['ﺧ', 'kh'], ['ﺨ', 'kh'], ['ﺦ', 'kh'], //
                ['ﺩ',  'd'], ['ﺪ',  'd'], //
                ['ﺫ', 'dh'], ['ﺬ', 'dh'], //
                ['ﺭ',  'r'], ['ﺮ',  'r'], //
                ['ﺯ',  'z'], ['ﺰ',  'z'], //
                ['ﺱ',  's'], ['ﺳ',  's'], ['ﺴ',  's'], ['ﺲ',  's'], //
                ['ﺵ', 'sh'], ['ﺷ', 'sh'], ['ﺸ', 'sh'], ['ﺶ', 'sh'], //
                ['ﺹ',  '/sˤ/'], ['ﺻ',  '/sˤ/'], ['ﺼ',  '/sˤ/'], ['ﺺ',  '/sˤ/'], //
                ['ﺽ',  '/dˤ/'], ['ﺿ',  '/dˤ/'], ['ﻀ',  '/dˤ/'], ['ﺾ',  '/dˤ/'], //
                ['ﻁ',  '/tˤ/'], ['ﻃ',  '/tˤ/'], ['ﻄ',  '/tˤ/'], ['ﻂ',  '/tˤ/'], //
                ['ﻅ',  '/zˤ/'], ['ﻇ',  '/zˤ/'], ['ﻈ',  '/zˤ/'], ['ﻆ',  '/zˤ/'], //
                ['ﻉ',  '‘'], ['ﻋ',  '‘'], ['ﻌ',  '‘'], ['ﻊ',  '‘'], //
                ['ﻍ', 'gh'], ['ﻏ', 'gh'], ['ﻐ', 'gh'], ['ﻎ', 'gh'], //
                ['ﻑ',  'f'], ['ﻓ',  'f'], ['ﻔ',  'f'], ['ﻒ',  'f'], //
                ['ﻕ',  'q'], ['ﻗ',  'q'], ['ﻘ',  'q'], ['ﻖ',  'q'], //
                ['ﻙ',  'k'], ['ﻛ',  'k'], ['ﻜ',  'k'], ['ﻚ',  'k'], //
                ['ﻝ',  'l'], ['ﻟ',  'l'], ['ﻠ',  'l'], ['ﻞ',  'l'], //
                ['ﻡ',  'm'], ['ﻣ',  'm'], ['ﻤ',  'm'], ['ﻢ',  'm'], //
                ['ﻥ',  'n'], ['ﻧ',  'n'], ['ﻨ',  'n'], ['ﻦ',  'n'], //
                ['ﻩ',  'h'], ['ﻫ',  'h'], ['ﻬ',  'h'], ['ﻪ',  'h'], //
                ['ﻭ',  'w'], ['ﻮ',  'w'], //
                ['ﻱ',  'y'], ['ﻳ', 'y'], ['ﻴ',  'y'], ['ﻲ',  'y'], //
                ['ﻻ', 'la'], ['ﻼ', 'la'] //
            ]);
        }

        return arabicLong;
    }

    function getHangul() {

        if (!hangul) {
            hangul = Object.freeze([ //
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
        }

        return hangul;
    }

    return {
        languages: [
            // roots
            {key: 'japanese', name: 'Japanese'},
            {key: 'russian', name: 'Russian'},
            {key: 'arabic', name: 'Arabic'},
            {key: 'korean', name: 'Korean'},
            // sub levels
            {key: 'japanese|kana', name: 'Kana'},
            {key: 'japanese|kanji', name: 'Kanji'},
            {key: 'russian|alphabet', name: 'Alphabet', info: 'Source from http://en.wikipedia.org/wiki/Russian_alphabet'},
            {key: 'arabic|alphabet', name: 'Alphabet', info: 'Source from http://en.wikipedia.org/wiki/Arabic_alphabet'},
            {key: 'korean|alphabet', name: 'Alphabet'},
//            {key: 'japanese|kanji|vocabular', name: 'Vocabular'}, TODO
            {key: 'japanese|kanji|jouyou', name: 'Jōyō'},
            {key: 'japanese|kanji|jouyou|kyouiku', name: 'Kyōiku', info: 'Sources: kanjidic2.xml from http://www.csse.monash.edu.au/~jwb/kanjidic2/ and wikipedia, http://en.wikipedia.org/wiki/J%C5%8Dy%C5%8D_kanji'},
            //
            // leafs
            //
            // kana
            {key: 'japanese|kana|hiragana', name: 'Hiragana', getData: Kanas.getHiragana},
            {key: 'japanese|kana|katakana', name: 'Katakana', getData: Kanas.getKatakana},
            // kanji
            {key: 'japanese|kanji|radicals', name: 'Radicals', getData: Kanjis.getGameRadicals, getRawData: Kanjis.getRawRadicals, info: 'The 214 Kanji radicals. Source: http://en.wikipedia.org/wiki/Table_of_Japanese_Kanji_radicals'},
            //
            {key: 'japanese|kanji|jouyou|all', name: 'All (2136)', getData: Kanjis.getGameJouyous, getRawData: Kanjis.getRawJouyous, info: 'All the 2136 Jōyō'},
            {key: 'japanese|kanji|jouyou|others', name: 'Others (1130)', getData: Kanjis.getGameJouyouOthers, getRawData: Kanjis.getRawJouyouOthers, info: 'The 1130 Jōyō learned in junior high school'},
            //
            {key: 'japanese|kanji|jouyou|kyouiku|all', name: 'All (1006)', getData: Kanjis.getGameKyouikus, getRawData: Kanjis.getRawKyouikus, info: 'The 1006 Kyōiku taught in Japanese schools'},
            {key: 'japanese|kanji|jouyou|kyouiku|grade_1', name: 'Grade 1', getData: Kanjis.getGameKyouikus1, getRawData: Kanjis.getRawKyouikus1},
            {key: 'japanese|kanji|jouyou|kyouiku|grade_2', name: 'Grade 2', getData: Kanjis.getGameKyouikus2, getRawData: Kanjis.getRawKyouikus2},
            {key: 'japanese|kanji|jouyou|kyouiku|grade_3', name: 'Grade 3', getData: Kanjis.getGameKyouikus3, getRawData: Kanjis.getRawKyouikus3},
            {key: 'japanese|kanji|jouyou|kyouiku|grade_4', name: 'Grade 4', getData: Kanjis.getGameKyouikus4, getRawData: Kanjis.getRawKyouikus4},
            {key: 'japanese|kanji|jouyou|kyouiku|grade_5', name: 'Grade 5', getData: Kanjis.getGameKyouikus5, getRawData: Kanjis.getRawKyouikus5},
            {key: 'japanese|kanji|jouyou|kyouiku|grade_6', name: 'Grade 6', getData: Kanjis.getGameKyouikus6, getRawData: Kanjis.getRawKyouikus6},
            // japanese vocabular
//            {key: 'japanese|kanji|vocabular|mangaland', name: 'Mangaland', getData: Kanji.getMangaland, info: '160 Kanji from the first book of Japanese in Mangaland'},
            // russian
            {key: 'russian|alphabet|lowercase', name: 'lowercase', getData: getRussianLower},
            {key: 'russian|alphabet|uppercase', name: 'Uppercase', getData: getRussianUpper},
            // arabic
            {key: 'arabic|alphabet|isolated', name: 'Isolated', getData: getArabicShort},
            {key: 'arabic|alphabet|all_forms', name: 'All forms', getData: getArabicLong},
            // korean
            {key: 'korean|alphabet|hangul', name: 'Hangul', getData: getHangul}
        ]
    };
}]);