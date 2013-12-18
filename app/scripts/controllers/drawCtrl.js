'use strict';

angular.module('pguPlayApp').controller('DrawCtrl', //
    [ '$scope', 'hlp', '$window', //
        function ($scope, hlp, $window) { //

            var lgKey = null;
            var allItems = [];
            var poolOfItems = [];
            var wrap = null;
            var displayField = null;
            var uncover_level = 0;

            $scope.cfg = null;
            $scope.cfgValues = [];
            $scope.isRandom = false;

            var document = $window.document;

            var text_color = [ 60, 118,  61];
            var draw_color = [217, 237, 247];

            var text_canvas = document.getElementById('text_area');
            var font_size = Math.floor(text_canvas.height / 1.7);
            var clear_width = Math.floor(text_canvas.height / 15);

            var text_ctx = text_canvas.getContext('2d');
            text_ctx.fillStyle = 'rgb(' + text_color.join(',') + ')';
            text_ctx.font = font_size + 'px Helvetica, sans-serif';
            text_ctx.textAlign = 'center';
            text_ctx.textBaseline = 'middle';

            text_ctx.shadowOffsetX = 2;
            text_ctx.shadowOffsetY = 2;
            text_ctx.shadowBlur = 4;
            text_ctx.shadowColor = '#999';

            var draw_canvas = document.getElementById('draw_area');
            var draw_ctx = draw_canvas.getContext('2d');
            draw_ctx.fillStyle = 'rgb(' + draw_color.join(',') + ')';
            draw_ctx.font = text_ctx.font;
            draw_ctx.textAlign = text_ctx.textAlign;
            draw_ctx.textBaseline = text_ctx.textBaseline;

            function resetDrawOneSymbol() {
                $scope.valuesText = '';
                text_ctx.clearRect(0, 0, text_canvas.width, text_canvas.height);

                uncover_level = 0;
                clearDrawCtx();
            }

            function clearDrawCtx() {
                draw_ctx.clearRect(0, 0, draw_canvas.width, draw_canvas.height);
            }

            $scope.clearDraw = function () {
                clearDrawCtx();
            };

            function fillDrawCtx() {
                draw_ctx.fillRect(0, 0, draw_canvas.width, draw_canvas.height);
            }

            $scope.replayDraw = function () {
                uncover_level = 0;
                clearDrawCtx();

                fillDrawCtx();
            };

            function getUncoverConfig(uncover_level) {
                if (uncover_level === 1) {
                    return {mode: 'borders', coeff: 0};

                } else if (2 <= uncover_level && uncover_level <= 4) {
                    return {mode: 'dots', coeff: 1200 / uncover_level };

                }
                return null;
            }

            function isDrawAlmostComplete() {

                var draw_r = draw_color[0];
                var draw_pixels = draw_ctx.getImageData(0, 0, draw_canvas.width, draw_canvas.height);
                var pixel_idxs = getPixelIdxsFromText();

                var total_pixels = _(pixel_idxs).size();
                var hidden_pixels = _(pixel_idxs).size();

                return _(pixel_idxs).some(function (pixel_idx) {

                    if (draw_pixels.data[pixel_idx] !== draw_r) {
                        hidden_pixels--;
                    }

                    return hidden_pixels / total_pixels <= 0.03;
                });
            }

            function getPixelIdxsFromText() {
                var text_pixels = text_ctx.getImageData(0, 0, text_canvas.width, text_canvas.height);

                var text_r = text_color[0];
                var text_g = text_color[1];
                var text_b = text_color[2];

                var pixels_idxs = [];
                for (var i = 0, t = text_pixels.data.length; i < t; i += 4) {
                    if (text_pixels.data[i] === text_r //
                        && text_pixels.data[i + 1] === text_g //
                        && text_pixels.data[i + 2] === text_b) {
                        pixels_idxs.push(i);
                    }
                }
                return pixels_idxs;
            }

            $scope.uncoverDraw = function () {
                uncover_level++;

                var cfg = getUncoverConfig(uncover_level);

                if (!cfg) {
                    $scope.clearDraw();
                    return;
                }

                var pixel_idxs = getPixelIdxsFromText();

                var draw_pixels = draw_ctx.getImageData(0, 0, draw_canvas.width, draw_canvas.height);

                var draw_r = draw_color[0];
                var draw_g = draw_color[1];
                var draw_b = draw_color[2];

                var n = draw_pixels.data.length;

                var delta = 50;
                var border_firsts = delta;
                var border_lasts = _(pixel_idxs).size() - delta;

                _(pixel_idxs).each(function (pixel_idx, item_idx) {

                    if (pixel_idx < n) {
                        if (item_idx === 1 //
                            || (cfg.mode === 'borders' && (item_idx < border_firsts || border_lasts < item_idx)) //
                            || (cfg.mode === 'dots' && pixel_idx % cfg.coeff === 0) //
                            ) {

                            if (draw_pixels.data[pixel_idx] === draw_r //
                                && draw_pixels.data[pixel_idx + 1] === draw_g //
                                && draw_pixels.data[pixel_idx + 2] === draw_b) {

                                draw_pixels.data[pixel_idx] = 47;
                                draw_pixels.data[pixel_idx + 1] = 111;
                                draw_pixels.data[pixel_idx + 2] = 159;
                            }
                        }
                    }

                });

                draw_ctx.putImageData(draw_pixels, 0, 0);
            };

            function resetGame() {
                $scope.isGameOn = false;
                $scope.isGameOver = false;

                draw_canvas.removeEventListener('mousedown', ev_canvas, false);
                draw_canvas.removeEventListener('mousemove', ev_canvas, false);
                draw_canvas.removeEventListener('touchstart', ev_canvas, false);
                draw_canvas.removeEventListener('touchmove', ev_canvas, true);
                draw_canvas.removeEventListener('touchend', ev_canvas, false);

                document.body.removeEventListener('mouseup', ev_canvas, false);
                document.body.removeEventListener('touchcancel', ev_canvas, false);

                resetDrawOneSymbol();
            }

            resetGame();

            $scope.launchGame = function() {
                // reset
                resetGame();

                if (!lgKey) {
                    return;
                }

                // play
                poolOfItems = _.clone(allItems);
//                poolOfItems = _.first(allItems, 3); TEST
                $scope.isGameOn = true;

                init();
                drawOneSymbol();

                hlp.scrollToTop();
            };

            $scope.selectLanguage = function (language) {

                // init
                lgKey = language ? language.getKey() : null;
                allItems = language ? language.getData() : [];

                $scope.cfg = language ? language.getCfg() : null;
                wrap = language ? hlp.newItemWrapper($scope.cfg) : null;
                displayField = $scope.cfg ? [ _.first($scope.cfg.getValues()) ] : [];

                $scope.launchGame();
            };

            $scope.toggleRandom = function() {
                $scope.isRandom = !$scope.isRandom;
            };

            function drawOneSymbol() {

                resetDrawOneSymbol();

                if (_(poolOfItems).isEmpty()) {
                    $scope.isGameOn = false;
                    $scope.isGameOver = true;
                    return;
                }

                fillDrawCtx();

                var item = $scope.isRandom ? hlp.pickRandom(poolOfItems) : _(poolOfItems).first();
                poolOfItems = _.without(poolOfItems, item);

                var font_width = text_canvas.width / 2;
                var font_height = text_canvas.height / 2;

                var key = wrap.getKey(item);
                text_ctx.fillText(key, font_width, font_height);

                $scope.valuesText = wrap.getValues(item, displayField).join(', ');
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
                var offset = clear_width / 2;

                function clearRect(ev) {
                    if (ev._x !== null && ev._y !== null) {
                        draw_ctx.clearRect(ev._x - offset, ev._y - offset, clear_width, clear_width);
                    }
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

                        if (isDrawAlmostComplete()) {
                            $scope.clearDraw();
                        }
                    }
                };

                this.touchstart = function (ev) {
                    tool.mousedown(ev);
                };

                this.touchend = function (ev) {
                    tool.mouseup(ev);
                };

                this.touchcancel = function (ev) {
                    tool.mouseup(ev);
                };

                this.touchmove = function (ev) {
                    ev.preventDefault(); // prevent elastic scrolling
                    tool.mousemove(ev);
                };

            }

            function ev_canvas(ev) {

                var rect = draw_canvas.getBoundingClientRect();
                var is_touch = ev.type.indexOf('touch') !== -1;

                if (is_touch) {

                    if (ev.targetTouches.length === 0) {
                        ev._x = ev._y = null;

                    } else {
                        ev._x = ev.targetTouches[0].pageX - rect.left;
                        ev._y = ev.targetTouches[0].pageY - rect.top;
                    }

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