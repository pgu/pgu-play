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
        ['タ', 'ta'], ['チ', 'chi'], ['ツ', 'tsu'], ['テ', 'te'], ['ト', 'to'], //
        ['ナ', 'na'], ['ニ',  'ni'], ['ヌ',  'nu'], ['ネ', 'ne'], ['ノ', 'no'], //
        ['ハ', 'ha'], ['ヒ',  'hi'], ['フ',  'fu'], ['ヘ', 'he'], ['ホ', 'ho'], //
        ['マ', 'ma'], ['ミ',  'mi'], ['ム',  'mu'], ['メ', 'me'], ['モ', 'mo'], //
        ['ヤ', 'ya'], ['ユ',  'yu'], ['ヨ',  'yo'], //
        ['ラ', 'ra'], ['リ',  'ri'], ['ル',  'ru'], ['レ', 're'], ['ロ', 'ro'], //
        ['ワ', 'wa'], ['ヲ',  'wo'], ['ン',   'n'] //
    ]);

    var diacriticsH = Object.freeze([
        ['が', 'ga'], ['ぎ', 'gi'], ['ぐ', 'gu'], ['げ', 'ge'], ['ご', 'go'],
        ['ざ', 'za'], ['じ', 'ji'], ['ず', 'zu'], ['ぜ', 'ze'], ['ぞ', 'zo'],
        ['だ', 'da'], ['ぢ', 'ji'], ['づ', 'zu'], ['で', 'de'], ['ど', 'do'],
        ['ば', 'ba'], ['び', 'bi'], ['ぶ', 'bu'], ['べ', 'be'], ['ぼ', 'bo'],
        ['ぱ', 'pa'], ['ぴ', 'pi'], ['ぷ', 'pu'], ['ぺ', 'pe'], ['ぽ', 'po']
    ]);

    var diacriticsK = Object.freeze([
        ['ガ', 'ga'], ['ギ', 'gi'], ['グ', 'gu'], ['ゲ', 'ge'], ['ゴ', 'go'],
        ['ザ', 'za'], ['ジ', 'ji'], ['ズ', 'zu'], ['ゼ', 'ze'], ['ゾ', 'zo'],
        ['ダ', 'da'], ['ヂ', 'ji'], ['ヅ', 'zu'], ['デ', 'de'], ['ド', 'do'],
        ['バ', 'ba'], ['ビ', 'bi'], ['ブ', 'bu'], ['ベ', 'be'], ['ボ', 'bo'],
        ['パ', 'pa'], ['ピ', 'pi'], ['プ', 'pu'], ['ペ', 'pe'], ['ポ', 'po']
    ]);

    var diacritics = Object.freeze([].concat(diacriticsH).concat(diacriticsK));

    var youonsH = Object.freeze([
        ['きゃ', 'kya'], ['きゅ', 'kyu'], ['きょ', 'kyo'],
        ['しゃ', 'sha'], ['しゅ', 'shu'], ['しょ', 'sho'],
        ['ちゃ', 'cha'], ['ちゅ', 'chu'], ['ちょ', 'cho'],
        ['にゃ', 'nya'], ['にゅ', 'nyu'], ['にょ', 'nyo'],
        ['ひゃ', 'hya'], ['ひゅ', 'hyu'], ['ひょ', 'hyo'],
        ['みゃ', 'mya'], ['みゅ', 'myu'], ['みょ', 'myo'],
        ['りゃ', 'rya'], ['りゅ', 'ryu'], ['りょ', 'ryo'],
        //
        ['ぎゃ', 'gya'], ['ぎゅ', 'gyu'], ['ぎょ', 'gyo'],
        ['じゃ',  'ja'], ['じゅ',  'ju'], ['じょ',  'jo'],
        ['ぢゃ',  'ja'], ['ぢゅ',  'ju'], ['ぢょ',  'jo'],
        ['びゃ', 'bya'], ['びゅ', 'byu'], ['びょ', 'byo'],
        ['ぴゃ', 'pya'], ['ぴゅ', 'pyu'], ['ぴょ', 'pyo']
    ]);

    var youonsK = Object.freeze([
        ['キャ', 'kya'], ['キュ', 'kyu'], ['キョ', 'kyo'],
        ['シャ', 'sha'], ['シュ', 'shu'], ['ショ', 'sho'],
        ['チャ', 'cha'], ['チュ', 'chu'], ['チョ', 'cho'],
        ['ニャ', 'nya'], ['ニュ', 'nyu'], ['ニョ', 'nyo'],
        ['ヒャ', 'hya'], ['ヒュ', 'hyu'], ['ヒョ', 'hyo'],
        ['ミャ', 'mya'], ['ミュ', 'myu'], ['ミョ', 'myo'],
        ['リャ', 'rya'], ['リュ', 'ryu'], ['リョ', 'ryo'],
        //
        ['ギャ', 'gya'], ['ギュ', 'gyu'], ['ギョ', 'gyo'],
        ['ジャ',  'ja'], ['ジュ',  'ju'], ['ジョ',  'jo'],
        ['ヂャ',  'ja'], ['ヂュ',  'ju'], ['ヂョ',  'jo'],
        ['ビャ', 'bya'], ['ビュ', 'byu'], ['ビョ', 'byo'],
        ['ピャ', 'pya'], ['ピュ', 'pyu'], ['ピョ', 'pyo']
    ]);

    var youons = Object.freeze([].concat(youonsH).concat(youonsK));

    var createHepburnFn = function(collections) {

        return function(kana) {
            _.each(collections, function(coll) {
                _.each(coll, function(entry) {
                    kana = kana.replace(new RegExp(entry[0], 'g'), entry[1]);
                });
            });
            return kana;
        };
    };

    return {
        hepburnOn: createHepburnFn([youonsK, diacriticsK, katakana]),
        hepburnKun: createHepburnFn([youonsH, diacriticsH, hiragana]),
        getRawHiraganas: function() {
            return DataHelper.toFullRawDataBasic(hiragana);
        },
        getRawKatakanas: function() {
            return DataHelper.toFullRawDataBasic(katakana);
        },
        getRawDiacritics: function() {
            return DataHelper.toFullRawDataBasic(diacritics);
        },
        getRawYouons: function() {
            return DataHelper.toFullRawDataBasic(youons);
        },
        getGameHiragana: function() {
            return hiragana;
        },
        getGameKatakana: function() {
            return katakana;
        },
        getGameDiacritics: function() {
            return diacritics;
        },
        getGameYouons: function() {
            return youons;
        }
    };

}]);