'use strict';

angular.module('pguPlayApp').factory('LanguagesSrv', function () {

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
      ['ﺍ', 'a'], ['ﺏ',  'b'], ['ﺕ', 't'], ['ﺙ', 'th'], ['ﺝ', 'j'], ['ﺡ',  'ḥ'], ['ﺥ', 'kh'], //
      ['ﺩ', 'd'], ['ﺫ', 'dh'], ['ﺭ', 'r'], ['ﺯ',  'z'], ['ﺱ', 's'], ['ﺵ', 'sh'], ['ﺹ',  'ṣ'], ['ﺽ', 'ḍ'], //
      ['ﻁ', 'ṭ'], ['ﻅ',  'ẓ'], ['ﻉ', '‘'], ['ﻍ', 'gh'], ['ﻑ', 'f'], ['ﻕ',  'q'], ['ﻙ',  'k'], ['ﻝ', 'l'], //
      ['ﻡ', 'm'], ['ﻥ',  'n'], ['ﻩ', 'h'], ['ﻭ',  'w'], ['ﻱ', 'y'], ['ﻻ', 'la'] //
    ]);

    return {
        languages: [
            {
                key: 'hiragana',
                name: 'Hiragana',
                data: hiragana
            },
            {
                key: 'katakana',
                name: 'Katakana',
                data: katakana
            },
            {
                key: 'russianUpper',
                name: 'Russian [+]',
                data: russianUpper
            },
            {
                key: 'russianLower',
                name: 'Russian [-]',
                data: russianLower
            },
            {
                key: 'arabicShort',
                name: 'Arabic [-]',
                data: arabicShort
            }
        ],
        getNamesOfLanguages : function() {
            return _.pluck(this.languages, 'name');
        }
    };
});