'use strict';

angular.module('pguPlayApp').factory('LanguagesSrv', //
    ['Kanjis', 'Kanas', 'Russian', 'Arabic', 'Korean', //
        function (Kanjis, Kanas, Russian, Arabic, Korean) {

    var link = function(label, url) {
        return '<a href="' + url + '" class="alert-link">' + label + '</a>';
    };

    var wiki = function(tag) {
        return 'Source from ' + link('Wikipedia', 'http://en.wikipedia.org/wiki/' + tag);
    };

    var infoKanji = wiki('Kanji') + ' and ' + link('kanjidic2.xml', 'http://www.csse.monash.edu.au/~jwb/kanjidic2/');
    infoKanji = infoKanji.replace('Source', 'Sources');

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
//            {key: 'japanese|kanji|vocabular', name: 'Vocabular'}, TODO
            {key: 'japanese|kanji|jouyou', name: 'Jōyō'},
            {key: 'japanese|kanji|jouyou|kyouiku', name: 'Kyōiku'},
            //
            // leafs
            //
            // kana
            {key: 'japanese|kana|hiragana', name: 'Hiragana', getData: Kanas.getGameHiragana, getLanguageVisu: Kanas.getRawHiraganas},
            {key: 'japanese|kana|katakana', name: 'Katakana', getData: Kanas.getGameKatakana, getLanguageVisu: Kanas.getRawKatakanas},
            {key: 'japanese|kana|diacritics', name: 'Diacritics', getData: Kanas.getGameDiacritics, getLanguageVisu: Kanas.getRawDiacritics},
            {key: 'japanese|kana|youons', name: 'Yōon', getData: Kanas.getGameYouons, getLanguageVisu: Kanas.getRawYouons},
            // kanji
            {key: 'japanese|kanji|radicals', name: 'Radicals (214)', getData: Kanjis.getGameRadicals, getLanguageVisu: Kanjis.getRawRadicals},
            //
            {key: 'japanese|kanji|jouyou|all', name: 'All (2136)', getData: Kanjis.getGameJouyous, getLanguageVisu: Kanjis.getRawJouyous, info: infoKanji},
            {key: 'japanese|kanji|jouyou|others', name: 'Others (1130)', getData: Kanjis.getGameJouyouOthers, getLanguageVisu: Kanjis.getRawJouyouOthers, info: 'The Jōyō learned in junior high school'},
            //
            {key: 'japanese|kanji|jouyou|kyouiku|all', name: 'All (1006)', getData: Kanjis.getGameKyouikus, getLanguageVisu: Kanjis.getRawKyouikus, info: 'The Kyōiku taught in Japanese schools'},
            {key: 'japanese|kanji|jouyou|kyouiku|grade_1', name: 'Grade 1', getData: Kanjis.getGameKyouikus1, getLanguageVisu: Kanjis.getRawKyouikus1},
            {key: 'japanese|kanji|jouyou|kyouiku|grade_2', name: 'Grade 2', getData: Kanjis.getGameKyouikus2, getLanguageVisu: Kanjis.getRawKyouikus2},
            {key: 'japanese|kanji|jouyou|kyouiku|grade_3', name: 'Grade 3', getData: Kanjis.getGameKyouikus3, getLanguageVisu: Kanjis.getRawKyouikus3},
            {key: 'japanese|kanji|jouyou|kyouiku|grade_4', name: 'Grade 4', getData: Kanjis.getGameKyouikus4, getLanguageVisu: Kanjis.getRawKyouikus4},
            {key: 'japanese|kanji|jouyou|kyouiku|grade_5', name: 'Grade 5', getData: Kanjis.getGameKyouikus5, getLanguageVisu: Kanjis.getRawKyouikus5},
            {key: 'japanese|kanji|jouyou|kyouiku|grade_6', name: 'Grade 6', getData: Kanjis.getGameKyouikus6, getLanguageVisu: Kanjis.getRawKyouikus6},
            // japanese vocabular
//            {key: 'japanese|kanji|vocabular|mangaland', name: 'Mangaland', getData: Kanji.getMangaland, info: '160 Kanji from the first book of Japanese in Mangaland'},
            // russian
            {key: 'russian|alphabet|lowercase', name: 'lowercase', getData: Russian.getGameAlphabetLower, getLanguageVisu: Russian.getRawAlphabetLower, info: wiki('Russian_alphabet')},
            {key: 'russian|alphabet|uppercase', name: 'Uppercase', getData: Russian.getGameAlphabetUpper, getLanguageVisu: Russian.getRawAlphabetUpper, info: wiki('Russian_alphabet')},
            // arabic
            {key: 'arabic|alphabet|isolated', name: 'Isolated', getData: Arabic.getGameAlphabetShort, getLanguageVisu: Arabic.getRawAlphabetShort, info: wiki('Arabic_alphabet')},
            {key: 'arabic|alphabet|all_forms', name: 'All forms', getData: Arabic.getGameAlphabetLong, getLanguageVisu: Arabic.getRawAlphabetLong, info: wiki('Arabic_alphabet')},
            // korean
            {key: 'korean|alphabet|hangul', name: 'Hangul', getData: Korean.getGameHangul, getLanguageVisu: Korean.getRawHangul}
        ]
    };
}]);