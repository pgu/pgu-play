'use strict';

angular.module('pguPlayApp').factory('Arabic',
    function () { //

    return {
        getAlphabetShort: function() {
            return [ //
                ['ﺍ', 'a'], ['ﺏ',  'b'], ['ﺕ', 't'], ['ﺙ', 'th'], ['ﺝ', 'j'], ['ﺡ',  '/ħ/'], ['ﺥ', 'kh'], //
                ['ﺩ', 'd'], ['ﺫ', 'dh'], ['ﺭ', 'r'], ['ﺯ',  'z'], ['ﺱ', 's'], ['ﺵ', 'sh'], ['ﺹ',  '/sˤ/'], ['ﺽ', '/dˤ/'], //
                ['ﻁ', '/tˤ/'], ['ﻅ',  '/zˤ/'], ['ﻉ', '‘'], ['ﻍ', 'gh'], ['ﻑ', 'f'], ['ﻕ',  'q'], ['ﻙ',  'k'], ['ﻝ', 'l'], //
                ['ﻡ', 'm'], ['ﻥ',  'n'], ['ﻩ', 'h'], ['ﻭ',  'w'], ['ﻱ', 'y'], ['ﻻ', 'la'] //
            ];
        },
        getAlphabetLong: function() {
            return [ //
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
            ];
        }
    };

});