'use strict';

angular.module('pguPlayApp').controller('DrawCtrl', //
    [ '$scope', 'hlp', '$window', '$timeout', //
        function ($scope, hlp, $window, $timeout) { //

            var lgKey = null;
            var allItems = [];
            var poolOfItems = [];
            var wrap = null;
            var displayField = null;

            $scope.cfg = null;
            $scope.cfgValues = [];

            var text_canvas = $window.document.getElementById('text_area');
            var text_ctx = text_canvas.getContext('2d');
            text_ctx.fillStyle = 'blue';
            text_ctx.font = '96pt Helvetica bold, sans-serif';
            text_ctx.textAlign = 'center';
            text_ctx.textBaseline = 'middle';

            var draw_canvas = $window.document.getElementById('draw_area');
            var draw_ctx = draw_canvas.getContext('2d');

            function resetDraw() {
                $scope.valuesText = '';
                text_ctx.clearRect(0,0, text_canvas.width, text_canvas.height);
                draw_ctx.clearRect(0,0, draw_canvas.width, draw_canvas.height);
            }

            function resetGame() {
                $scope.isGameOn = false;
                resetDraw();
            }

            resetGame();

            $scope.selectLanguage = function(language) {

                // init
                lgKey = language ? language.getKey() : null;
                allItems = language ? language.getData() : [];

                $scope.cfg = language ? language.getCfg() : null;
                wrap = language ? hlp.newItemWrapper($scope.cfg) : null;
                displayField = $scope.cfg ? [ _.first($scope.cfg.getValues()) ] : [];

                // reset
                resetGame();

                if (!lgKey) {
                    return;
                }

                // play
                poolOfItems = _.shuffle(allItems);
                $scope.isGameOn = true;

                init();
                drawOneSymbol();
            };

            function drawOneSymbol() {

                resetDraw();

                draw_ctx.fillRect(0, 0, draw_canvas.width, draw_canvas.height);

                var item = hlp.pickRandom(poolOfItems);
                poolOfItems = _.without(poolOfItems, item);

                var key = wrap.getKey(item);
                console.log(text_ctx.measureText(key));
                text_ctx.fillText(key, text_canvas.width / 2, text_canvas.height / 2);

                $scope.valuesText = wrap.getValues(item, displayField).join(', ');

                hlp.scrollToTop();

                if (_.isEmpty(poolOfItems)) {
                    poolOfItems = _.shuffle(allItems);
                }
            }

            $scope.goToNextDraw = function() {
                drawOneSymbol();
            };

            $scope.onGoHome = function() {
                resetGame();
            };

            var tool = null;

            function init() {
                // Pencil tool instance.
                tool = new Tool_pencil();

                // Attach the mousedown, mousemove and mouseup event listeners.
                draw_canvas.addEventListener('mousedown', ev_canvas, false);
                draw_canvas.addEventListener('mousemove', ev_canvas, false);
                draw_canvas.addEventListener('mouseup',   ev_canvas, false);

                draw_canvas.addEventListener('touchstart', ev_canvas, false);
                draw_canvas.addEventListener('touchmove', ev_canvas, false);
                draw_canvas.addEventListener('touchend',   ev_canvas, false);

                // prevent elastic scrolling
                draw_canvas.addEventListener('touchmove', function (event) {
                    event.preventDefault();
                }, false);
            }

            function Tool_pencil () {
                var tool = this;
                this.started = false;

                this.mousedown = function (ev) {
                    draw_ctx.clearRect (ev._x, ev._y, 10, 10);
                    tool.started = true;
                };

                this.mousemove = function (ev) {
                    if (tool.started) {
                        draw_ctx.clearRect (ev._x, ev._y, 10, 10);
                    }
                };

                this.mouseup = function (ev) {
                    if (tool.started) {
                        tool.mousemove(ev);
                        tool.started = false;
                    }
                };

                this.touchstart = this.mousedown;
                this.touchmove = this.mousemove;
                this.touchend = this.mouseup;
            }

            function ev_canvas (ev) {
                if (ev.layerX || ev.layerX === 0) { // Firefox
                    ev._x = ev.layerX;
                    ev._y = ev.layerY;
                } else if (ev.offsetX || ev.offsetX === 0) { // Opera
                    ev._x = ev.offsetX;
                    ev._y = ev.offsetY;
                }

                var func = tool[ev.type];
                if (func) {
                    func(ev);
                }
            }

//            https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Canvas_tutorial

//            http://devfiles.myopera.com/articles/649/example2.js
//            http://dev.opera.com/articles/view/html5-canvas-painting/

//            http://www.codeproject.com/Articles/355230/HTML-5-Canvas-A-Simple-Paint-Program-Touch-and-Mou
//            http://therockncoder.blogspot.fr/2012/09/jquery-mobile-html5-canvas-touch-based.html
//            https://gist.github.com/rjrodger/1011032
//            https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/HTML-canvas-guide/AddingText/AddingText.html#//apple_ref/doc/uid/TP40010542-CH6-SW4

        }]);