'use strict';

angular.module('pguPlayApp').factory('LanguagesSrv', //
    ['Kanji', //
        function (Kanji) {

    var hiragana = Object.freeze([ //
     ['あ',  'a'], ['い',   'i'], ['う',   'u'], ['え',  'e'], ['お',  'o'], //
     ['か', 'ka'], ['き',  'ki'], ['く',  'ku'], ['け', 'ke'], ['こ', 'ko'], //
     ['さ', 'sa'], ['し', 'shi'], ['す',  'su'], ['せ', 'se'], ['そ', 'so'], //
     ['た', 'ta'], ['ち', 'chi'], ['つ', 'tsu'], ['て', 'te'], ['と', 'to'], //
     ['な', 'na'], ['に',  'ni'], ['ぬ',  'nu'], ['ね', 'ne'], ['の', 'no'], //
     ['は', 'ha'], ['ひ',  'hi'], ['ふ',  'fu'], ['へ', 'he'], ['ほ', 'ho'], //
     ['ま', 'ma'], ['み',  'mi'], ['む',  'mu'], ['め', 'me'], ['も', 'mo'], //
     ['や', 'ya'], ['ゆ',  'yu'], ['よ',  'yo'], //
     ['ら', 'ra'], ['り',  'ri'], ['る',  'ru'], ['れ', 're'], ['ろ', 'ro'], //
     ['わ', 'wa'], ['を',  'wo'], ['ん',   'n'] //
    ]);

    var katakana = Object.freeze([ //
        ['ア',  'a'], ['イ',   'i'], ['ウ',   'u'], ['エ',  'e'], ['オ',  'o'], //
        ['カ', 'ka'], ['キ',  'ki'], ['ク',  'ku'], ['ケ', 'ke'], ['コ', 'ko'], //
        ['サ', 'sa'], ['シ', 'shi'], ['ス',  'su'], ['セ', 'se'], ['ソ', 'so'], //
        ['タ', 'ta'], ['チ', 'chi'], ['ッ', 'tsu'], ['テ', 'te'], ['ト', 'to'], //
        ['ナ', 'na'], ['ニ',  'ni'], ['ヌ',  'nu'], ['ネ', 'ne'], ['ノ', 'no'], //
        ['ハ', 'ha'], ['ヒ',  'hi'], ['フ',  'fu'], ['ヘ', 'he'], ['ホ', 'ho'], //
        ['マ', 'ma'], ['ミ',  'mi'], ['ム',  'mu'], ['メ', 'me'], ['モ', 'mo'], //
        ['ヤ', 'ya'], ['ユ',  'yu'], ['ヨ',  'yo'], //
        ['ラ', 'ra'], ['リ',  'ri'], ['ル',  'ru'], ['レ', 're'], ['ロ', 'ro'], //
        ['ワ', 'wa'], ['ヲ',  'wo'], ['ン',   'n'] //
    ]);

    var russianUpper = Object.freeze([ //
        ['A',   'A'], ['Б',   'B'], ['В',    'V'], ['Г',   'G'], ['Д',   'D'], ['Е', 'YE'], //
        ['Ё',  'YO'], ['Ж', '/ʐ/'], ['З',    'Z'], ['И', '/I/'], ['Й', '/J/'], ['К',  'K'], //
        ['Л',   'L'], ['М',   'M'], ['Н',    'N'], ['О',   'O'], ['П',   'P'], ['Р',  'R'], //
        ['С',   'S'], ['T',   'T'], ['У',  '/U/'], ['Ф',   'F'], ['Х', '/X/'], ['Ц', 'TS'], //
        ['Ч', 'TCH'], ['Ш',  'SH'], ['Щ', 'SHCH'], ['Ъ',   '-'], ['Ы', '/I/'], ['Ь',  '-'], //
        ['Э', '/ɛ/'], ['Ю',   'U'], ['Я',   'YA'] //
    ]);

    var russianLower = Object.freeze([ //
        ['а',   'a'], ['б',   'b'], ['в',    'v'], ['г',   'g'], ['д',   'd'], ['е', 'ye'], //
        ['ё',  'yo'], ['ж', '/ʐ/'], ['з',    'z'], ['и', '/i/'], ['й', '/j/'], ['к',  'k'], //
        ['л',   'l'], ['м',   'm'], ['н',    'n'], ['о',   'o'], ['п',   'p'], ['р',  'r'], //
        ['с',   's'], ['т',   't'], ['у',  '/u/'], ['ф',   'f'], ['х', '/x/'], ['ц', 'ts'], //
        ['ч', 'tch'], ['ш',  'sh'], ['щ', 'shch'], ['ъ',   '-'], ['ы', '/i/'], ['ь',  '-'], //
        ['э', '/ɛ/'], ['ю',   'u'], ['я',   'ya'] //
    ]);

    var arabicShort = Object.freeze([ //
      ['ﺍ', 'a'], ['ﺏ',  'b'], ['ﺕ', 't'], ['ﺙ', 'th'], ['ﺝ', 'j'], ['ﺡ',  '/ħ/'], ['ﺥ', 'kh'], //
      ['ﺩ', 'd'], ['ﺫ', 'dh'], ['ﺭ', 'r'], ['ﺯ',  'z'], ['ﺱ', 's'], ['ﺵ', 'sh'], ['ﺹ',  '/sˤ/'], ['ﺽ', '/dˤ/'], //
      ['ﻁ', '/tˤ/'], ['ﻅ',  '/zˤ/'], ['ﻉ', '‘'], ['ﻍ', 'gh'], ['ﻑ', 'f'], ['ﻕ',  'q'], ['ﻙ',  'k'], ['ﻝ', 'l'], //
      ['ﻡ', 'm'], ['ﻥ',  'n'], ['ﻩ', 'h'], ['ﻭ',  'w'], ['ﻱ', 'y'], ['ﻻ', 'la'] //
    ]);

    var arabicLong = Object.freeze([ //
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
        languages: [
            // roots
            {key: 'japanese', name: 'Japanese'},
            {key: 'russian', name: 'Russian'},
            {key: 'arabic', name: 'Arabic'},
            {key: 'korean', name: 'Korean'},
            // sub levels
            {key: 'japanese|kana', name: 'Kana'},
            {key: 'japanese|kanji', name: 'Kanji'},
            {key: 'russian|alphabet', name: 'Alphabet'},
            {key: 'arabic|alphabet', name: 'Alphabet'},
            {key: 'korean|alphabet', name: 'Alphabet'},
            //
            // leafs
            //
            {key: 'japanese|kana|hiragana', name: 'Hiragana', data: hiragana},
            {key: 'japanese|kana|katakana', name: 'Katakana', data: katakana},
            {key: 'japanese|kanji|mangaland', name: 'Mangaland', data: Kanji.mangaland(), info: '160 Kanji from the first book of Japanese in Mangaland'},
            {key: 'japanese|kanji|radicals', name: 'Radicals', data: Kanji.radicals(), info: '214 Kanji radicals'},
            //
            {key: 'russian|alphabet|lowercase', name: 'lowercase', data: russianLower, info: 'Source from http://en.wikipedia.org/wiki/Russian_alphabet'},
            {key: 'russian|alphabet|uppercase', name: 'Uppercase', data: russianUpper, info: 'Source from http://en.wikipedia.org/wiki/Russian_alphabet'},
            //
            {key: 'arabic|alphabet|isolated', name: 'Isolated', data: arabicShort, info: 'Source from http://en.wikipedia.org/wiki/Arabic_alphabet'},
            {key: 'arabic|alphabet|all_forms', name: 'All forms', data: arabicLong, info: 'Source from http://en.wikipedia.org/wiki/Arabic_alphabet'},
            //
            {key: 'korean|alphabet|hangul', name: 'Hangul', data: hangul}
        ]
    };
}]);