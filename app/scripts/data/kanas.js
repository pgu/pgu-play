'use strict';

angular.module('pguPlayApp').factory('Kanas', function () {//

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

    var kanaDisplayConfig = {
        key: {field: 0, renderHtml: _.identity},
        values: [{field: 1, renderHtml: _.identity}]
    };

    var toFullRawData = function(rawData) {
        return {
            data: rawData,
            displayConfig: kanaDisplayConfig
        };
    };

    var hiragana, katakana;

    return {
        getRawHiraganas: function() {
            return toFullRawData(hiragana);
        },
        getRawKatakanas: function() {
            return toFullRawData(katakana);
        },
        getGameHiragana: function() {
            return hiragana;
        },
        getGameKatakana: function() {
            return katakana;
        }
    };

});