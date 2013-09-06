'use strict';

angular.module('pguPlayApp').factory('LanguagesSrv', //
    ['Kanjis', 'Kanas', 'Russian', 'Arabic', 'Korean', //
        function (Kanjis, Kanas, Russian, Arabic, Korean) {

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
            {key: 'japanese|kana|hiragana', name: 'Hiragana', getData: Kanas.getGameHiragana, getRawData: Kanas.getRawHiraganas},
            {key: 'japanese|kana|katakana', name: 'Katakana', getData: Kanas.getGameKatakana, getRawData: Kanas.getRawKatakanas},
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
            {key: 'russian|alphabet|lowercase', name: 'lowercase', getData: Russian.getGameAlphabetLower, getRawData: Russian.getRawAlphabetLower},
            {key: 'russian|alphabet|uppercase', name: 'Uppercase', getData: Russian.getGameAlphabetUpper, getRawData: Russian.getRawAlphabetUpper},
            // arabic
            {key: 'arabic|alphabet|isolated', name: 'Isolated', getData: Arabic.getGameAlphabetShort, getRawData: Arabic.getRawAlphabetShort},
            {key: 'arabic|alphabet|all_forms', name: 'All forms', getData: Arabic.getGameAlphabetLong, getRawData: Arabic.getRawAlphabetLong},
            // korean
            {key: 'korean|alphabet|hangul', name: 'Hangul', getData: Korean.getGameHangul, getRawData: Korean.getRawHangul}
        ]
    };
}]);