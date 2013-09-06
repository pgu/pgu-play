'use strict';

angular.module('pguPlayApp').factory('Kanas',
    [ 'DataHelper', //
        function (DataHelper) { //

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

    var hiraganaDiacritics = Object.freeze([
        ['が', 'ga'], ['ぎ', 'gi'], ['ぐ', 'gu'], ['げ', 'ge'], ['ご', 'go'],
        ['ざ', 'za'], ['じ', 'ji'], ['ず', 'zu'], ['ぜ', 'ze'], ['ぞ', 'zo'],
        ['だ', 'da'], ['ぢ', 'ji'], ['づ', 'zu'], ['で', 'de'], ['ど', 'do'],
        ['ば', 'ba'], ['び', 'bi'], ['ぶ', 'bu'], ['べ', 'be'], ['ぼ', 'bo'],
        ['ぱ', 'pa'], ['ぴ', 'pi'], ['ぷ', 'pu'], ['ぺ', 'pe'], ['ぽ', 'po'],
        //
        ['ガ', 'ga'], ['ギ', 'gi'], ['グ', 'gu'], ['ゲ', 'ge'], ['ゴ', 'go'],
        ['ザ', 'za'], ['ジ', 'ji'], ['ズ', 'zu'], ['ゼ', 'ze'], ['ゾ', 'zo'],
        ['ダ', 'da'], ['ヂ', 'ji'], ['ヅ', 'zu'], ['デ', 'de'], ['ド', 'do'],
        ['バ', 'ba'], ['ビ', 'bi'], ['ブ', 'bu'], ['ベ', 'be'], ['ボ', 'bo'],
        ['パ', 'pa'], ['ピ', 'pi'], ['プ', 'pu'], ['ペ', 'pe'], ['ポ', 'po']
    ]);

    // TODO katakanaDiacritics

    var youons = Object.freeze([

    ]);

    return {
        getRawHiraganas: function() {
            return DataHelper.toFullRawDataBasic(hiragana);
        },
        getRawKatakanas: function() {
            return DataHelper.toFullRawDataBasic(katakana);
        },
        getGameHiragana: function() {
            return hiragana;
        },
        getGameKatakana: function() {
            return katakana;
        }
    };

}]);