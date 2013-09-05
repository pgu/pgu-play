'use strict';

// first shot at the code. TODO review the code

angular.module('pguPlayApp').factory('Kanji', //
    ['Jouyou', function (Jouyou) {

    var JOUYOUS_REF = Jouyou;

    var RADICAL_KEYS = ['一', '丨', '丶', '丿', '乙', '亅', '二', '亠', '人', '儿', '入', '八', '冂', '冖', '冫', '几', '凵', '刀', '力', '勹', '匕', '匚', '亡', '十', '卜', '卩', '厂', '厶', '又', '口', '囗', '土', '士', '夂', '夊', '夕', '大', '女', '子', '宀', '寸', '小', '尢', '尸', '屮', '山', '巛', '工', '已', '巾', '干', '幺', '广', '廴', '廾', '弋', '弓', '彐', '彡', '彳', '心', '戈', '戸', '手', '支', '攵', '文', '斗', '斤', '方', '无', '日', '曰', '月', '木', '欠', '止', '歹', '殳', '毋', '比', '毛', '氏', '气', '水', '火', '爪', '父', '爻', '爿', '片', '牙', '牛', '犬', '玄', '王', '瓜', '瓦', '甘', '生', '用', '田', '疋', '疒', '癶', '白', '皮', '皿', '目', '矛', '矢', '石', '示', '禸', '禾', '穴', '立', '竹', '米', '糸', '缶', '罒', '羊', '羽', '耂', '而', '耒', '耳', '聿', '肉', '臣', '自', '至', '臼', '舌', '舛', '舟', '艮', '色', '艹', '虍', '虫', '血', '行', '衣', '西', '見', '角', '言', '谷', '豆', '豕', '豸', '貝', '赤', '走', '足', '身', '車', '辛', '辰', '辶', '阝', '酉', '釆', '里', '金', '長', '門', '阝', '隶', '隹', '雨', '青', '非', '面', '革', '韋', '韭', '音', '頁', '風', '飛', '食', '首', '香', '馬', '骨', '高', '髟', '鬥', '鬯', '鬲', '鬼', '魚', '鳥', '鹵', '鹿', '麦', '麻', '黄', '黍', '黒', '黹', '黽', '鼎', '鼓', '鼠', '鼻', '齊', '歯', '竜', '亀', '龠'];

    function createArrayForGame(fullKanjis) {
        return Object.freeze(_.map(fullKanjis, function (fullKanji) {
            var entry = [];
            entry.push(fullKanji.literal);
            entry.push(fullKanji.ons);
            entry.push(fullKanji.kuns);
            entry.push(fullKanji.meanings);
            return _.flatten(entry);
        }));
    }

    var radicals, jouyous, jouyouOthers, //
        kyouikus, kyouikus1, kyouikus2, kyouikus3, kyouikus4, kyouikus5, kyouikus6 //
        ;

    return {
        getRadicals: function() {
            if (!radicals) {
                var fullKanjis = _.filter(JOUYOUS_REF, function (jouyou) {
                    return _.contains(RADICAL_KEYS, jouyou.literal);
                });
                radicals = createArrayForGame(fullKanjis);
            }
            return radicals;
        },
        getJouyou: function() {
            if (!jouyous) {
                jouyous = createArrayForGame(JOUYOUS_REF);
            }
            return jouyous;
        },
        getJouyouOthers: function() {
            if (!jouyouOthers) {
                var fullKanjis = _.filter(JOUYOUS_REF, function (jouyou) {
                    return jouyou.grade === 8;
                });
                jouyouOthers = createArrayForGame(fullKanjis);
            }
            return jouyouOthers;
        },
        getKyouiku: function() {
            if (!kyouikus) {
                var fullKanjis = _.filter(JOUYOUS_REF, function (jouyou) {
                    return jouyou.grade < 8;
                });
                kyouikus = createArrayForGame(fullKanjis);
            }
            return kyouikus;
        },
        getKyouiku1: function() {
            if (!kyouikus1) {
                var fullKanjis = _.filter(JOUYOUS_REF, function (jouyou) {
                    return jouyou.grade === 1;
                });
                kyouikus1 = createArrayForGame(fullKanjis);
            }
            return kyouikus1;
        },
        getKyouiku2: function() {
            if (!kyouikus2) {
                var fullKanjis = _.filter(JOUYOUS_REF, function (jouyou) {
                    return jouyou.grade === 2;
                });
                kyouikus2 = createArrayForGame(fullKanjis);
            }
            return kyouikus2;
        },
        getKyouiku3: function() {
            if (!kyouikus3) {
                var fullKanjis = _.filter(JOUYOUS_REF, function (jouyou) {
                    return jouyou.grade === 3;
                });
                kyouikus3 = createArrayForGame(fullKanjis);
            }
            return kyouikus3;
        },
        getKyouiku4: function() {
            if (!kyouikus4) {
                var fullKanjis = _.filter(JOUYOUS_REF, function (jouyou) {
                    return jouyou.grade === 4;
                });
                kyouikus4 = createArrayForGame(fullKanjis);
            }
            return kyouikus4;
        },
        getKyouiku5: function() {
            if (!kyouikus5) {
                var fullKanjis = _.filter(JOUYOUS_REF, function (jouyou) {
                    return jouyou.grade === 5;
                });
                kyouikus5 = createArrayForGame(fullKanjis);
            }
            return kyouikus5;
        },
        getKyouiku6: function() {
            if (!kyouikus6) {
                var fullKanjis = _.filter(JOUYOUS_REF, function (jouyou) {
                    return jouyou.grade === 6;
                });
                kyouikus6 = createArrayForGame(fullKanjis);
            }
            return kyouikus6;
        }
    };

}]);