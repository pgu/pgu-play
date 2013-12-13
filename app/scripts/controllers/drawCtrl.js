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
                text_ctx.clearRect(0, 0, text_canvas.width, text_canvas.height);
                draw_ctx.clearRect(0, 0, draw_canvas.width, draw_canvas.height);
            }

            function resetGame() {
                $scope.isGameOn = false;

                draw_canvas.removeEventListener('mousedown', ev_canvas, false);
                draw_canvas.removeEventListener('mousemove', ev_canvas, false);
                draw_canvas.removeEventListener('mouseup', ev_canvas, false);

                draw_canvas.removeEventListener('touchstart', ev_canvas, false);
                draw_canvas.removeEventListener('touchmove', ev_canvas, false);
                draw_canvas.removeEventListener('touchend', ev_canvas, false);

                draw_canvas.removeEventListener('touchmove', preventDefault, false);

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
                console.log(text_ctx.measureText(key));
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
                // Pencil tool instance.
                tool = new Tool_pencil();

                // Attach the mousedown, mousemove and mouseup event listeners.
                draw_canvas.addEventListener('mousedown', ev_canvas, false);
                draw_canvas.addEventListener('mousemove', ev_canvas, false);
                draw_canvas.addEventListener('mouseup', ev_canvas, false);

                draw_canvas.addEventListener('touchstart', ev_canvas, false);
                draw_canvas.addEventListener('touchmove', ev_canvas, false);
                draw_canvas.addEventListener('touchend', ev_canvas, false);

                draw_canvas.addEventListener('touchmove', preventDefault, false);
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

                this.touchstart = this.mousedown;
                this.touchmove = this.mousemove;
                this.touchend = this.mouseup;
            }

            function preventDefault(event) {
                event.preventDefault(); // prevent elastic scrolling
            }

            function ev_canvas(ev) {
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

        }]);