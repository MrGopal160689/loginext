/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Rectangle = __webpack_require__(6);

var _Rectangle2 = _interopRequireDefault(_Rectangle);

var _Circle = __webpack_require__(4);

var _Circle2 = _interopRequireDefault(_Circle);

var _Line = __webpack_require__(5);

var _Line2 = _interopRequireDefault(_Line);

var _Text = __webpack_require__(7);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
    function Canvas(config) {
        _classCallCheck(this, Canvas);

        this.canvas = config.canvas;
        this.context = this.canvas.getContext('2d');
        this.width = this.canvas.width = config.width;
        this.height = this.canvas.height = config.height;
        this.objects = [];
        this.init();
    }

    _createClass(Canvas, [{
        key: 'init',
        value: function init() {}
    }, {
        key: 'createObject',
        value: function createObject(config) {
            var object = void 0;
            switch (config.type) {
                case 'rectangle':
                    object = new _Rectangle2.default(config);
                    break;
                case 'circle':
                    object = new _Circle2.default(config);
                    break;
                case 'line':
                    object = new _Line2.default(config);
                    break;
                case 'text':
                    object = new _Text2.default(config);
                    break;
                default:
                    break;
            }
            this.objects.push(object);
            return object;
        }
    }, {
        key: 'drawObject',
        value: function drawObject(object) {
            switch (object.type) {
                case 'rectangle':
                    this.drawRectangle(object);
                    break;
                case 'circle':
                    this.drawCircle(object);
                    break;
                case 'line':
                    this.drawLine(object);
                    break;
                case 'text':
                    this.drawText(object);
                    break;
                default:
                    break;
            }
        }
    }, {
        key: 'drawRectangle',
        value: function drawRectangle(rectObj) {
            this.context.save();
            this.context.fillStyle = rectObj.fill || null;
            this.context.strokeStyle = rectObj.stroke || null;
            rectObj.fill && this.context.fillRect(rectObj.x, rectObj.y, rectObj.width, rectObj.height);
            rectObj.stroke && this.context.strokeRect(rectObj.x, rectObj.y, rectObj.width, rectObj.height);
            this.context.restore();
        }
    }, {
        key: 'drawCircle',
        value: function drawCircle(circObj) {
            this.context.save();
            this.context.fillStyle = circObj.fill;
            this.context.strokeStyle = circObj.stroke;
            this.context.beginPath();
            this.context.arc(circObj.x, circObj.y, circObj.radius, 0, Math.PI * 2);
            circObj.fill && this.context.fill();
            circObj.stroke && this.context.stroke();
            this.context.restore();
        }
    }, {
        key: 'drawLine',
        value: function drawLine(lineObj) {
            this.context.save();
            this.context.strokeStyle = lineObj.stroke;
            this.context.beginPath();
            this.context.moveTo(lineObj.startX, lineObj.startY);
            this.context.lineTo(lineObj.endX, lineObj.endY);
            lineObj.stroke && this.context.stroke();
            this.context.restore();
        }
    }, {
        key: 'drawText',
        value: function drawText(textObj) {
            this.context.save();
            this.context.textBaseline = 'middle';
            this.context.fillStyle = textObj.fill;
            this.context.strokeStyle = textObj.stroke;
            textObj.fill && this.context.fillText(textObj.text, textObj.x, textObj.y);
            textObj.stroke && this.context.strokeText(textObj.text, textObj.x, textObj.y);
            this.context.restore();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            this.objects.forEach(function (object) {
                _this.drawObject(object);
            });
        }
    }]);

    return Canvas;
}();

exports.default = Canvas;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: "norm",
        value: function norm(value, min, max) {
            return (value - min) / (max - min);
        }
    }, {
        key: "lerp",
        value: function lerp(norm, min, max) {
            return norm * (max - min) + min;
        }
    }, {
        key: "map",
        value: function map(value, min1, max1, min2, max2) {
            return this.lerp(this.norm(value, min1, max1), min2, max2);
        }
    }, {
        key: "clamp",
        value: function clamp(val, min, max) {
            return Math.min(max, Math.max(val, min));
        }
    }, {
        key: "getColor",
        value: function getColor(rating) {
            var r = Math.round(this.map(rating, 1, 10, 0, 255)),
                g = Math.round(this.map(rating, 1, 10, 255, 0)),
                b = 0;

            return "rgb(" + r + "," + g + "," + b + ")";
        }
    }, {
        key: "inMap",
        value: function inMap(x, y, map) {
            return x >= map.x && x <= map.x + map.width && y >= map.y && y <= map.y + map.height;
        }
    }, {
        key: "collideCircle",
        value: function collideCircle(point, circle) {
            var dx = point.x - circle.x,
                dy = point.y - circle.y,
                length = Math.sqrt(dx * dx + dy * dy);
            return length <= circle.radius;
        }
    }, {
        key: "extractData",
        value: function extractData(pins) {
            var visual = {};
            pins.forEach(function (pin) {
                visual[pin.long] = visual[pin.long] || {};
                visual[pin.long][pin.rating] = visual[pin.long][pin.rating] || [];
                visual[pin.long][pin.rating].push({ lat: pin.lat, pin: pin.pin });
            });
            return visual;
        }
    }]);

    return Utils;
}();

exports.default = Utils;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pinList = [{
  "pin": 400037,
  "rating": 7
}, {
  "pin": 400037,
  "rating": 1
}, {
  "pin": 400003,
  "rating": 6
}, {
  "pin": 400012,
  "rating": 10
}, {
  "pin": 400037,
  "rating": 7
}, {
  "pin": 400012,
  "rating": 2
}, {
  "pin": 400009,
  "rating": 5
}, {
  "pin": 400033,
  "rating": 9
}, {
  "pin": 400014,
  "rating": 1
}, {
  "pin": 400014,
  "rating": 9
}, {
  "pin": 400010,
  "rating": 2
}, {
  "pin": 400012,
  "rating": 5
}, {
  "pin": 400033,
  "rating": 9
}, {
  "pin": 400031,
  "rating": 8
}, {
  "pin": 400033,
  "rating": 9
}, {
  "pin": 400012,
  "rating": 10
}, {
  "pin": 400003,
  "rating": 4
}, {
  "pin": 400003,
  "rating": 7
}, {
  "pin": 400010,
  "rating": 5
}, {
  "pin": 400010,
  "rating": 9
}, {
  "pin": 400010,
  "rating": 1
}, {
  "pin": 400014,
  "rating": 8
}, {
  "pin": 400009,
  "rating": 10
}, {
  "pin": 400003,
  "rating": 1
}, {
  "pin": 400012,
  "rating": 3
}, {
  "pin": 400012,
  "rating": 3
}, {
  "pin": 400012,
  "rating": 1
}, {
  "pin": 400009,
  "rating": 4
}, {
  "pin": 400033,
  "rating": 1
}, {
  "pin": 400015,
  "rating": 7
}, {
  "pin": 400033,
  "rating": 6
}, {
  "pin": 400027,
  "rating": 7
}, {
  "pin": 400010,
  "rating": 1
}, {
  "pin": 400031,
  "rating": 2
}, {
  "pin": 400031,
  "rating": 3
}, {
  "pin": 400037,
  "rating": 2
}, {
  "pin": 400029,
  "rating": 7
}, {
  "pin": 400099,
  "rating": 8
}, {
  "pin": 400069,
  "rating": 8
}, {
  "pin": 400053,
  "rating": 1
}, {
  "pin": 400058,
  "rating": 4
}, {
  "pin": 400051,
  "rating": 5
}, {
  "pin": 400053,
  "rating": 10
}, {
  "pin": 400051,
  "rating": 2
}, {
  "pin": 400050,
  "rating": 5
}, {
  "pin": 400051,
  "rating": 7
}, {
  "pin": 400093,
  "rating": 10
}, {
  "pin": 400052,
  "rating": 1
}, {
  "pin": 400051,
  "rating": 1
}, {
  "pin": 400058,
  "rating": 7
}];

exports.default = pinList;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _Canvas = __webpack_require__(0);

var _Canvas2 = _interopRequireDefault(_Canvas);

var _Map = __webpack_require__(8);

var _Map2 = _interopRequireDefault(_Map);

var _Visualizer = __webpack_require__(9);

var _Visualizer2 = _interopRequireDefault(_Visualizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {

    var canvas = new _Canvas2.default({
        canvas: document.querySelector('.canvas'),
        width: window.innerWidth,
        height: window.innerHeight
    }),
        visualizer = new _Visualizer2.default({ canvas: canvas });

    $('#map').css({
        'position': 'absolute',
        'width': visualizer.mapCanvas.width + 'px',
        'height': visualizer.mapCanvas.height + 'px',
        'left': visualizer.mapCanvas.x + 'px',
        'top': visualizer.mapCanvas.y + 'px'
    });

    var map = new _Map2.default({
        elem: document.querySelector('#map'),
        item: 10,
        change: function change(bbox, data) {
            visualizer.BBox = bbox, visualizer.pinData = data;
            visualizer.update();
        }
    });
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function Circle(config) {
    _classCallCheck(this, Circle);

    this.type = 'circle';
    this.x = config.x;
    this.y = config.y;
    this.radius = config.radius;
    this.fill = config.fill || null;
    this.stroke = config.stroke || null;
};

exports.default = Circle;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = function Line(config) {
    _classCallCheck(this, Line);

    this.type = 'line';
    this.startX = config.startX;
    this.startY = config.startY;
    this.endX = config.endX;
    this.endY = config.endY;
    this.fill = config.fill || null;
    this.stroke = config.stroke || null;
};

exports.default = Line;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function Rectangle(config) {
    _classCallCheck(this, Rectangle);

    this.type = 'rectangle';
    this.x = config.x;
    this.y = config.y;
    this.width = config.width;
    this.height = config.height;
    this.fill = config.fill || null;
    this.stroke = config.stroke || null;
};

exports.default = Rectangle;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Text = function Text(config) {
    _classCallCheck(this, Text);

    this.type = 'text';
    this.text = config.text;
    this.x = config.x;
    this.y = config.y;
    this.fill = config.fill || null;
    this.stroke = config.stroke || null;
};

exports.default = Text;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

var _data = __webpack_require__(2);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var googleMap = function () {
    function googleMap(config) {
        var _this = this;

        _classCallCheck(this, googleMap);

        var mapPromise = [],
            API_KEY = "AIzaSyA3xj5DjVKh6Uh00YEkmBrxk4irVarX5V4",
            index = Math.floor(Math.random() * _data2.default.length),
            start = index + config.item > _data2.default.length - 1 ? _data2.default.length - 1 - config.item : index,
            BBox = {};

        var _loop = function _loop(i, length) {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": 'https://maps.googleapis.com/maps/api/geocode/json?address=' + _data2.default[i].pin + '&key=' + API_KEY,
                "method": "GET"
            };

            mapPromise.push(new Promise(function (resolve, reject) {
                (function (index) {
                    $.ajax(settings).done(function (response) {
                        var data = {
                            pin: response.results[0].address_components[0].long_name,
                            lat: response.results[0].geometry.location.lat,
                            long: response.results[0].geometry.location.lng,
                            rating: _data2.default[index].rating
                        };
                        return resolve(data);
                    });
                })(i);
            }));
        };

        for (var i = index, length = index + config.item; i < length; i++) {
            _loop(i, length);
        }

        Promise.all(mapPromise).then(function (data) {
            var map = new google.maps.Map(config.elem, {
                zoom: 11,
                center: _this.getCenter(data)
            });

            google.maps.event.addListener(map, "bounds_changed", function () {
                BBox['xMin'] = map.getBounds().getSouthWest().lng(), BBox['yMin'] = map.getBounds().getNorthEast().lat(), BBox['xMax'] = map.getBounds().getNorthEast().lng(), BBox['yMax'] = map.getBounds().getSouthWest().lat();

                config.change && config.change(BBox, _Utils2.default.extractData(data));
            });
        });
    }

    _createClass(googleMap, [{
        key: 'getCenter',
        value: function getCenter(data) {
            var xMin = null,
                xMax = null,
                yMin = null,
                yMax = null,
                center = {};
            data.forEach(function (pin) {
                xMin = xMin == null ? pin.long : Math.min(xMin, pin.long), xMax = xMax == null ? pin.long : Math.max(xMax, pin.long), yMin = yMin == null ? pin.lat : Math.min(yMin, pin.lat), yMax = yMax == null ? pin.lat : Math.max(yMax, pin.lat);
            });

            return { lat: (yMax - yMin) / 2 + yMin, lng: (xMax - xMin) / 2 + xMin };
        }
    }]);

    return googleMap;
}();

exports.default = googleMap;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Visualizer = function () {
    function Visualizer(config) {
        _classCallCheck(this, Visualizer);

        this.BBox = null, this.pinData = null, this.canvas = config.canvas, this.graph = this.canvas.createObject({ type: 'rectangle', stroke: 'rgb(200,200,200)', x: this.canvas.width / 3, y: this.canvas.height / 10, width: this.canvas.width / 3, height: this.canvas.height / 10 + this.canvas.height / 10 }), this.mapCanvas = this.canvas.createObject({ type: 'rectangle', stroke: 'rgb(200,200,200)', x: this.canvas.width / 3, y: 4 * this.canvas.height / 10, width: this.canvas.width / 3, height: this.canvas.height / 10 + 4 * this.canvas.height / 10 }), this.slider = this.canvas.createObject({ type: 'circle', x: this.graph.x - 10, y: this.graph.y + this.graph.height, radius: 5, fill: 'black' });
        this.init();
    }

    _createClass(Visualizer, [{
        key: 'init',
        value: function init() {
            var _this = this;

            $(window).on('mousedown', function (event) {
                if (_Utils2.default.collideCircle({ x: event.offsetX, y: event.offsetY }, _this.slider)) {
                    $(window).on('mousemove', _this.dragSlider.bind(_this));
                    $(window).on('mouseup', _this.stopSlider.bind(_this));
                }
            });
        }
    }, {
        key: 'dragSlider',
        value: function dragSlider(event) {
            var _this2 = this;

            var y = _Utils2.default.clamp(event.offsetY, this.graph.y, this.graph.y + this.graph.height);
            this.slider.y = y;
            requestAnimationFrame(function () {
                _this2.update();
            });
        }
    }, {
        key: 'stopSlider',
        value: function stopSlider() {
            $(window).off('mousemove');
            $(window).off('mouseup');
        }
    }, {
        key: 'update',
        value: function update() {
            var _this3 = this;

            this.canvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            var sliderRate = Math.floor(_Utils2.default.map(this.slider.y, this.graph.y, this.graph.y + this.graph.height, 1, 10)),
                total = 0;

            this.canvas.drawText({ text: 'Rating : ' + sliderRate, x: this.slider.x - this.slider.radius - 50, y: this.slider.y, fill: 'black' });

            this.slider.fill = _Utils2.default.getColor(sliderRate);

            var _loop = function _loop(long) {
                var gx = _Utils2.default.map(long, _this3.BBox.xMin, _this3.BBox.xMax, _this3.graph.x, _this3.graph.x + _this3.graph.width),
                    mx = _Utils2.default.map(long, _this3.BBox.xMin, _this3.BBox.xMax, _this3.mapCanvas.x, _this3.mapCanvas.x + _this3.mapCanvas.width);

                var _loop2 = function _loop2(rate) {
                    var gy = _Utils2.default.map(rate, 1, 10, _this3.graph.y, _this3.graph.y + _this3.graph.height);

                    // plot graph
                    if (_Utils2.default.inMap(gx, gy, _this3.graph)) {
                        _this3.canvas.drawRectangle({ type: 'rectangle', x: gx - 5, y: gy, width: 10, height: _this3.graph.y + _this3.graph.height - gy, fill: 'rgba(0,0,0,0.2)' });
                    }
                    _this3.pinData[long][rate].forEach(function (lat) {
                        var my = _Utils2.default.map(lat.lat, _this3.BBox.yMin, _this3.BBox.yMax, _this3.mapCanvas.y, _this3.mapCanvas.y + _this3.mapCanvas.height),
                            radius = _Utils2.default.map(rate, 10, 1, 5, 20);

                        // plot pin on map
                        if (_Utils2.default.inMap(mx, my, _this3.mapCanvas)) {
                            _this3.canvas.drawCircle({ type: 'circle', x: mx, y: my, radius: radius, fill: 'rgba(0,0,0,0.2)' });
                        }

                        // show indicators
                        if (rate == sliderRate && _Utils2.default.inMap(mx, my, _this3.mapCanvas)) {
                            _this3.canvas.drawCircle({ type: 'circle', x: mx, y: my, radius: radius, fill: _Utils2.default.getColor(rate) });

                            _this3.canvas.drawLine({ type: 'line', startX: _this3.mapCanvas.x, startY: my, endX: _this3.mapCanvas.x + _this3.mapCanvas.width, endY: my, stroke: 'rgb(0,100,255)' });

                            _this3.canvas.drawText({ type: 'text', text: '@ lng : ' + parseFloat(long).toFixed(2) + ', lat : ' + parseFloat(lat.lat).toFixed(2) + ', PIN :' + lat.pin, x: _this3.mapCanvas.x + _this3.mapCanvas.width + 10, y: my, fill: 'black' });

                            total++;
                        }
                    });

                    // show indicators
                    if (rate == sliderRate && _Utils2.default.inMap(gx, gy, _this3.graph)) {
                        _this3.canvas.drawRectangle({ type: 'rectangle', x: gx - 5, y: gy, width: 10, height: _this3.graph.y + _this3.graph.height - gy, fill: _Utils2.default.getColor(rate) });

                        _this3.canvas.drawLine({ type: 'line', startX: gx, startY: _this3.graph.y, endX: gx, endY: _this3.graph.y + _this3.graph.height, stroke: 'rgb(0,100,255)' });
                        _this3.canvas.drawLine({ type: 'line', startX: gx, startY: _this3.mapCanvas.y, endX: gx, endY: _this3.mapCanvas.y + _this3.mapCanvas.height, stroke: 'rgb(0,100,255)' });
                    }
                };

                for (var rate in _this3.pinData[long]) {
                    _loop2(rate);
                }
            };

            for (var long in this.pinData) {
                _loop(long);
            }

            this.canvas.drawText({ type: 'text', text: 'Total ' + total + ' PIN' + (total > 1 ? 's' : ''), x: this.graph.x + this.graph.width + 10, y: this.slider.y, fill: 'black' });

            // conclusion text
            this.canvas.drawText({ type: 'text', text: 'We found ' + total + ' PIN' + (total > 1 ? 's' : '') + ' rated ' + sliderRate + ' in the given coordinates', x: this.graph.x, y: this.graph.y - 50, fill: 'black' });

            this.canvas.drawLine({ type: 'line', startX: this.graph.x, startY: this.slider.y, endX: this.graph.x + this.graph.width, endY: this.slider.y, stroke: 'rgb(0,100,255)' });

            this.canvas.render();
        }
    }]);

    return Visualizer;
}();

exports.default = Visualizer;

/***/ })
/******/ ]);