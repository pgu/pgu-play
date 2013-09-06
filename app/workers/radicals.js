'use strict';

importScripts('/components/underscore/underscore-min.js');
importScripts('/workers/helper.js');

onmessage = function(event) {
    postMessage(createArrayForGame(event.data.radicals));
};