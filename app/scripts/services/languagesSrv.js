'use strict';

angular.module('pguPlayApp').factory('LanguagesSrv', //
    ['Node', 'Leaf', 'dataHelper', 'Jouyous', 'KanjiRadicals', 'kanjiHelper', 'Kanas', 'Russian', 'Arabic', 'Korean', //
        function (Node, Leaf, dataHelper, Jouyous, KanjiRadicals, kanjiHelper, Kanas, Russian, Arabic, Korean) {

    var link = function(label, url) {
        return '<a href="' + url + '" class="alert-link">' + label + '</a>';
    };

    var wiki = function(tag) {
        return 'Source from ' + link('Wikipedia', 'http://en.wikipedia.org/wiki/' + tag);
    };

    var infoKanji = wiki('Kanji') + ' and ' + link('kanjidic2.xml', 'http://www.csse.monash.edu.au/~jwb/kanjidic2/');
    infoKanji = infoKanji.replace('Source', 'Sources');

    return {
        getLanguages: function() {
                return [
                    // roots
                    new Node('japanese', 'Japanese'),
                    new Node('russian', 'Russian'),
                    new Node('arabic', 'Arabic'),
                    new Node('korean', 'Korean'),
                    // sub levels
                    new Node('japanese|kana', 'Kana'),
                    new Node('japanese|kanji', 'Kanji', { info: infoKanji }),
                    new Node('russian|alphabet', 'Alphabet', { info: wiki('Russian_alphabet') }),
                    new Node('arabic|alphabet', 'Alphabet', { info: wiki('Arabic_alphabet') }),
                    new Node('korean|alphabet', 'Alphabet'),
                    // leafs
                    //
                    // kana
                    new Leaf('japanese|kana|hiragana', 'Hiragana', Kanas.getHiraganas, dataHelper.getCfgKV),
                    new Leaf('japanese|kana|katakana', 'Katakana', Kanas.getKatakanas, dataHelper.getCfgKV),
                    new Leaf('japanese|kana|diacritics', 'Diacritics', Kanas.getDiacritics, dataHelper.getCfgKV),
                    new Leaf('japanese|kana|youons', 'Yōon', Kanas.getYouons, dataHelper.getCfgKV, { is_one_character: false }),
                    // kanji
                    new Leaf('japanese|kanji|radicals', 'Radicals (214)', KanjiRadicals.get, kanjiHelper.getCfg),
                    new Node('japanese|kanji|jouyou', 'Jōyō'),
                    //
                    new Node('japanese|kanji|jouyou|kyouiku', 'Kyōiku'),
                    new Leaf('japanese|kanji|jouyou|others', 'Others (1130)', Jouyous.getOthers, kanjiHelper.getCfg, { info: 'The Jōyō learned in junior high school' }),
                    new Leaf('japanese|kanji|jouyou|all', 'All (2136)', Jouyous.getAll, kanjiHelper.getCfg),
                    //
                    new Leaf('japanese|kanji|jouyou|kyouiku|grade_1', 'Grade 1', Jouyous.buildGetKyouikusByGrade(1), kanjiHelper.getCfg),
                    new Leaf('japanese|kanji|jouyou|kyouiku|grade_2', 'Grade 2', Jouyous.buildGetKyouikusByGrade(2), kanjiHelper.getCfg),
                    new Leaf('japanese|kanji|jouyou|kyouiku|grade_3', 'Grade 3', Jouyous.buildGetKyouikusByGrade(3), kanjiHelper.getCfg),
                    new Leaf('japanese|kanji|jouyou|kyouiku|grade_4', 'Grade 4', Jouyous.buildGetKyouikusByGrade(4), kanjiHelper.getCfg),
                    new Leaf('japanese|kanji|jouyou|kyouiku|grade_5', 'Grade 5', Jouyous.buildGetKyouikusByGrade(5), kanjiHelper.getCfg),
                    new Leaf('japanese|kanji|jouyou|kyouiku|grade_6', 'Grade 6', Jouyous.buildGetKyouikusByGrade(6), kanjiHelper.getCfg),
                    new Leaf('japanese|kanji|jouyou|kyouiku|all', 'All (1006)', Jouyous.buildGetKyouikusByGrade(), kanjiHelper.getCfg, { info: 'The Kyōiku taught in Japanese schools' }),
                    // russian
                    new Leaf('russian|alphabet|lowercase', 'lowercase', Russian.getAlphabetLower, dataHelper.getCfgKV),
                    new Leaf('russian|alphabet|uppercase', 'Uppercase', Russian.getAlphabetUpper, dataHelper.getCfgKV),
                    // arabic
                    new Leaf('arabic|alphabet|isolated', 'Isolated', Arabic.getAlphabetShort, dataHelper.getCfgKV),
                    new Leaf('arabic|alphabet|all_forms', 'All forms', Arabic.getAlphabetLong, dataHelper.getCfgKV),
                    // korean
                    new Leaf('korean|alphabet|hangul', 'Hangul', Korean.getHangul, dataHelper.getCfgKV)
                ];
            }
    };
}]);