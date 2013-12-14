'use strict';

angular.module('pguPlayApp').controller('DrawCtrl', //
    [ '$scope', 'hlp', '$window', //
        function ($scope, hlp, $window) { //

            var lgKey = null;
            var allItems = [];
            var poolOfItems = [];
            var wrap = null;
            var displayField = null;

            $scope.cfg = null;
            $scope.cfgValues = [];

            var document = $window.document;

            var text_canvas = document.getElementById('text_area');
            var text_ctx = text_canvas.getContext('2d');
            text_ctx.fillStyle = 'blue';
            text_ctx.font = '144pt Helvetica bold, sans-serif';
            text_ctx.textAlign = 'center';
            text_ctx.textBaseline = 'middle';

            var draw_canvas = document.getElementById('draw_area');
            var draw_ctx = draw_canvas.getContext('2d');

            function resetDraw() {
                $scope.valuesText = '';
                text_ctx.clearRect(0, 0, text_canvas.width, text_canvas.height);
                draw_ctx.clearRect(0, 0, draw_canvas.width, draw_canvas.height);
            }

            function resetGame() {
                $scope.isGameOn = false;

                draw_canvas.removeEventListener('mousedown', ev_canvas, false);
                draw_canvas.removeEventListener('mousemove', ev_canvas, false);
                draw_canvas.removeEventListener('touchstart', ev_canvas, false);
                draw_canvas.removeEventListener('touchmove', ev_canvas, true);
                draw_canvas.removeEventListener('touchend', ev_canvas, false);

                document.body.removeEventListener('mouseup', ev_canvas, false);
                document.body.removeEventListener('touchcancel', ev_canvas, false);

                resetDraw();
            }

            resetGame();

            $scope.selectLanguage = function (language) {

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
//                console.log(text_ctx.measureText(key));
                text_ctx.fillText(key, text_canvas.width / 2, text_canvas.height / 2);

                $scope.valuesText = wrap.getValues(item, displayField).join(', ');

                hlp.scrollToTop();

                if (_.isEmpty(poolOfItems)) {
                    poolOfItems = _.shuffle(allItems);
                }
            }

            $scope.goToNextDraw = function () {
                drawOneSymbol();
            };

            $scope.onGoHome = function () {
                resetGame();
            };

            var tool = null;

            function init() {
                tool = new Tool_pencil();

                draw_canvas.addEventListener('mousedown', ev_canvas, false);
                draw_canvas.addEventListener('mousemove', ev_canvas, false);
                draw_canvas.addEventListener('touchstart', ev_canvas, false);
                draw_canvas.addEventListener('touchmove', ev_canvas, true);
                draw_canvas.addEventListener('touchend', ev_canvas, false);

                document.body.addEventListener('mouseup', ev_canvas, false);
                document.body.addEventListener('touchcancel', ev_canvas, false);
            }

            function Tool_pencil() {
                var tool = this;
                this.started = false;

                function clearRect(ev) {
                    draw_ctx.clearRect(ev._x -10, ev._y -10, 20, 20);
                }

                this.mousedown = function (ev) {
                    clearRect(ev);
                    tool.started = true;
                };

                this.mousemove = function (ev) {
                    if (tool.started) {
                        clearRect(ev);
                    }
                };

                this.mouseup = function (ev) {
                    if (tool.started) {
                        tool.mousemove(ev);
                        tool.started = false;
                    }
                };

                this.touchstart = function(ev) {
                    tool.mousedown(ev);
                };

                this.touchend = function(ev) {
                    tool.mouseup(ev);
                };

                this.touchcancel = function(ev) {
                    tool.mouseup(ev);
                };

                this.touchmove = function(ev) {
                    ev.preventDefault(); // prevent elastic scrolling
                    tool.mousemove(ev);
                };

            }

            var rect = draw_canvas.getBoundingClientRect();

            function ev_canvas(ev) {

//                if (ev.layerX || ev.layerX === 0) { // Firefox
//                    ev._x = ev.layerX;
//                    ev._y = ev.layerY;
//
//                } else if (ev.offsetX || ev.offsetX === 0) { // Opera
//                    ev._x = ev.offsetX;
//                    ev._y = ev.offsetY;
//                }

                if (ev.type.indexOf('touch') !== -1) {
                    ev._x = ev.targetTouches[0].pageX - rect.left;
                    ev._y = ev.targetTouches[0].pageY - rect.top;

                } else {
                    ev._x = ev.clientX - rect.left;
                    ev._y = ev.clientY - rect.top;
                }

                var func = tool[ev.type];
                if (func) {
                    func(ev);
                }
            }

        }]);