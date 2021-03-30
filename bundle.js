/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/animation.js":
/*!*****************************!*\
  !*** ./src/js/animation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_mouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js/mouse */ "./src/js/mouse.js");
/* harmony import */ var js_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js/lib */ "./src/js/lib.js");
/* harmony import */ var assets_svg_svg_low_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/svg/svg-low.svg */ "./assets/svg/svg-low.svg");
/* harmony import */ var assets_svg_svg_low_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_svg_svg_low_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_svg_read__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js/svg/read */ "./src/js/svg/read.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var canvas;
var ctx;
var time = {
  start: Date.now(),
  current: 0,
  loop: 8
};
var size = {
  w: 0,
  h: 0,
  cx: 0,
  cy: 0
};
var points;
var shapes;
var tweakshapes = [];
tweakshapes[0] = {
  width: 14,
  start: 0.0,
  duration: 4.0
};
tweakshapes[1] = {
  width: 18,
  start: 1.4,
  duration: 3.0,
  color: "rgba(255,0,0,1)"
};
tweakshapes[2] = {
  width: 9,
  start: 2.3,
  duration: 2.7
};
tweakshapes[3] = {
  width: 9,
  start: 2.0,
  duration: 3.0,
  color: "rgba(125,125,255,1)"
};
tweakshapes[4] = {
  width: 7,
  start: 1.6,
  duration: 1.4,
  color: "rgba(125,255,255,1)"
};
tweakshapes[5] = {
  width: 4,
  start: 3.6,
  duration: 0.8
};
tweakshapes[6] = {
  width: 10,
  start: 3.6,
  duration: 1.4,
  color: "rgba(0,125,0,1)"
};
tweakshapes[7] = {
  width: 6,
  start: 2.2,
  duration: 1
}; // smol

tweakshapes[8] = {
  width: 10,
  start: 2.0,
  duration: 2.0,
  color: "rgba(255,125,0,1)"
}; // mid

tweakshapes[9] = {
  width: 7,
  start: 2.5,
  duration: 1.6,
  color: "rgba(0,0,125,1)"
}; // brother of one on top

tweakshapes[10] = {
  width: 7,
  start: 2.2,
  duration: 1.6,
  color: "rgba(125,255,125,1)"
}; // brother of one on top

tweakshapes[11] = {
  width: 4,
  start: 2.8,
  duration: 1
}; //smol

tweakshapes[12] = {
  width: 7,
  start: 1.7,
  duration: 2,
  color: "rgba(255,255,125,1)"
}; // separate top

tweakshapes[13] = {
  width: 4,
  start: 2.1,
  duration: 0.8
};
tweakshapes[14] = {
  width: 5,
  start: 3.3,
  duration: 1.2
};
tweakshapes[15] = {
  width: 6,
  start: 3.2,
  duration: 1.8
}; // rightmost

tweakshapes[16] = {
  width: 4,
  start: 3.7,
  duration: 1.2
}; // right gorup / smol

tweakshapes[17] = {
  width: 5,
  start: 3.4,
  duration: 1.4,
  color: "rgba(255,125,125,1)"
};
tweakshapes[18] = {
  width: 6,
  start: 2.5,
  duration: 1
}; // smol

tweakshapes[19] = {
  width: 6,
  start: 2.8,
  duration: 1
};
tweakshapes[20] = {
  width: 4,
  start: 3.6,
  duration: 0.8
}; // smol

tweakshapes[21] = {
  width: 5,
  start: 3.4,
  duration: 0.8
};
tweakshapes[22] = {
  width: 4,
  start: 3.6,
  duration: 1.1
};
tweakshapes[23] = {
  width: 6,
  start: 1.8,
  duration: 2
}; //smol

tweakshapes[24] = {
  width: 6,
  start: 3.3,
  duration: 1,
  color: "rgba(0,0,255,1)"
}; //smol

tweakshapes[25] = {
  width: 8,
  start: 3.2,
  duration: 1,
  color: "rgba(0,125,255,1)"
};
tweakshapes = tweakshapes.map(function (el) {
  return _objectSpread(_objectSpread({}, el), {}, {
    start: el.start / 2,
    duration: el.duration / 2
  });
});

var Shape = /*#__PURE__*/function () {
  function Shape(points) {
    _classCallCheck(this, Shape);

    this.points = points;
    this.start = 0;
    this.duration = 5;
    this.width = 5;
    this.drawn = 0;
    this.color = "rgba(255,255,255,1)";
  }

  _createClass(Shape, [{
    key: "draw",
    value: function draw(t) {
      var i = Math.floor((0,js_lib__WEBPACK_IMPORTED_MODULE_1__.mapclamp)(t, this.start, this.start + this.duration, 0, this.points.length - 1));
      var w = this.calculateWidth(t);

      for (var j = this.drawn; j < i; ++j) {
        var color = this.color;
        color = "white";
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(size.cx + this.points[j].x, this.points[j].y, w, 0, Math.PI * 2, true);
        ctx.arc(size.cx - this.points[j].x, this.points[j].y, w, 0, Math.PI * 2, true);
        ctx.fill();
      }

      this.drawn = i;
    }
  }, {
    key: "calculateWidth",
    value: function calculateWidth(t) {
      var t1 = t - this.start;
      var w = -t1 * (t1 - this.duration);
      return (0,js_lib__WEBPACK_IMPORTED_MODULE_1__.mapclamp)(w, 0, this.duration * this.duration / 4, 1, this.width);
    }
  }]);

  return Shape;
}();

var handleShapes = function handleShapes() {
  shapes.forEach(function (el) {
    el.draw(time.current);
  });
};

var setCanvasSize = function setCanvasSize() {
  size.w = canvas.width = window.innerWidth;
  size.h = canvas.height = window.innerHeight;
  size.cx = size.w / 2;
  size.cy = size.h / 2;
};

var init = function init() {
  canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  canvas.id = "canvas";
  ctx = canvas.getContext("2d");
  setCanvasSize();
  window.addEventListener("resize", function () {
    setCanvasSize();
  });
  points = (0,js_svg_read__WEBPACK_IMPORTED_MODULE_3__.default)((assets_svg_svg_low_svg__WEBPACK_IMPORTED_MODULE_2___default()));
  createShapes();
  return this;
};

var createShapes = function createShapes() {
  shapes = points.map(function (el, index) {
    var overwrite = {};

    if (tweakshapes[index]) {
      overwrite = tweakshapes[index];
    }

    var shape = new Shape(el);
    Object.assign(shape, overwrite);
    return shape;
  });
};

var resetCanvas = function resetCanvas() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, size.w, size.h);
};

var handleTime = function handleTime(resetCallback) {
  time.current = (Date.now() - time.start) / 1000.0;

  if (time.current > time.loop) {
    resetCallback();
    time.start = Date.now();
    time.current = (Date.now() - time.start) / 1000.0;
  }
};

var animate = function animate() {
  handleTime(resetCanvas);
  handleShapes(); // this.calculateFps();

  window.requestAnimationFrame(animate);
};

window.onload = function () {
  init();
  animate();
};

/***/ }),

/***/ "./src/js/lib.js":
/*!***********************!*\
  !*** ./src/js/lib.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapclamp": () => (/* binding */ mapclamp),
/* harmony export */   "hexToRgb": () => (/* binding */ hexToRgb),
/* harmony export */   "dist": () => (/* binding */ dist)
/* harmony export */ });


function mapclamp(x, in_start, in_end, out_start, out_end) {
  x = x === undefined ? in_end : x;
  x = x > in_end ? in_end : x;
  x = x < in_start ? in_start : x;
  var out = out_start + (out_end - out_start) / (in_end - in_start) * (x - in_start);
  return out;
}
function hexToRgb(hex) {
  var bigint = parseInt(hex, 16);
  var r = bigint >> 16 & 255;
  var g = bigint >> 8 & 255;
  var b = bigint & 255;
  return r + "," + g + "," + b;
}
function dist(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

/***/ }),

/***/ "./src/js/mouse.js":
/*!*************************!*\
  !*** ./src/js/mouse.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var mouse = {
  x: null,
  y: null
};
window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y; // console.log(`mouse: ${mouse.x}, ${mouse.y}`);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mouse);

/***/ }),

/***/ "./src/js/svg/read.js":
/*!****************************!*\
  !*** ./src/js/svg/read.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var js_svg_smooth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js/svg/smooth */ "./src/js/svg/smooth.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var RegEx = {
  seg: /[A-Za-z][^A-Za-z]+/g
};

var loadSvg = function loadSvg(data) {
  var element = document.createElement("div");
  element.innerHTML = data;
  var svg = element.firstChild;
  var shapes = collectData(svg);
  shapes = filterData(shapes);
  return (0,js_svg_smooth__WEBPACK_IMPORTED_MODULE_0__.default)(shapes);
};

var analyzeChunk = function analyzeChunk(found, arr) {
  var operation = found[0];
  var d = found.slice(1);

  switch (operation) {
    case "M":
      return analyzeM(d, arr);

    case "c":
      return analyzeC(d, arr);

    case "s":
      return analyzeS(d, arr);

    case "S":
      return analyzeBigS(d, arr);

    case "C":
      return analyzeBigC(d, arr);
  }
};

var analyzeM = function analyzeM(found, arr) {
  var _found$split = found.split(","),
      _found$split2 = _slicedToArray(_found$split, 2),
      x = _found$split2[0],
      y = _found$split2[1];

  console.assert(arr.length === 0);
  return {
    x: +x,
    y: +y
  };
};

function globalPreProcess(str) {
  str = str.replace(/\-/g, ",-");
  str = str.replace(/\s/g, "");
  return str;
}

function preprocess(found) {
  if (found[0] === ",") {
    found = found.slice(1);
  }

  return found;
}

var analyzeC = function analyzeC(found, arr) {
  found = preprocess(found);
  var arr1 = found.split(",");
  var x = 0;
  var y = 0;
  x = +arr1[4];
  y = +arr1[5];
  var last = arr[arr.length - 1];
  x += last.x;
  y += last.y;
  return {
    x: x,
    y: y
  };
};

var analyzeS = function analyzeS(found, arr) {
  found = preprocess(found);
  var arr1 = found.split(",");
  var x = 0;
  var y = 0;
  x = +arr1[2];
  y = +arr1[3];
  var last = arr[arr.length - 1];
  x += last.x;
  y += last.y;
  return {
    x: x,
    y: y
  };
};

var analyzeBigS = function analyzeBigS(found, arr) {
  found = preprocess(found);
  var arr1 = found.split(",");
  var x = +arr1[2];
  var y = +arr1[3];
  return {
    x: x,
    y: y
  };
};

var analyzeBigC = function analyzeBigC(found, arr) {
  found = preprocess(found);
  var arr1 = found.split(",");
  var x = +arr1[4];
  var y = +arr1[5];
  return {
    x: x,
    y: y
  };
};

function collectData(svg) {
  var result = [];
  var children = [].slice.call(svg.children);
  children.forEach(function (el) {
    if (el.nodeName === "g") {
      var children1 = [].slice.call(el.children);
      children1.forEach(function (el1) {
        var arr = [];
        var d = el1.getAttribute("d");
        d = globalPreProcess(d);
        var found;
        var i = 0;
        var array1;

        while ((array1 = RegEx.seg.exec(d)) !== null) {
          found = array1[0];
          var res = analyzeChunk(found, arr);

          if (res) {
            arr.push(res);
          } else {
            debugger;
          }

          i++;

          if (i > 100000) {
            break;
          }
        }

        result.push(arr);
      });
    }
  });
  return result.filter(function (el) {
    return el.length > 2;
  });
}

function filterData(shapes) {
  return shapes.map(function (el1, index) {
    var lastpoint = null;
    return el1.filter(function (el2) {
      if (!lastpoint) {
        lastpoint = el2;
        return;
      }

      var dist = Math.sqrt(Math.pow(el2.x - lastpoint.x, 2) + Math.pow(el2.y - lastpoint.y, 2));

      if (dist < 2) {
        return false;
      }

      lastpoint = el2;
      return true;
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSvg);

/***/ }),

/***/ "./src/js/svg/smooth.js":
/*!******************************!*\
  !*** ./src/js/svg/smooth.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cubic_spline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cubic-spline */ "./node_modules/cubic-spline/index.js");
/* harmony import */ var cubic_spline__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cubic_spline__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/js/lib.js");



var PATH_RESOLUTION = 300;

var smoothShapes = function smoothShapes(shapes) {
  return shapes.map(function (shape) {
    return smoothShape(shape);
  });
};

var smoothShape = function smoothShape(shape) {
  var length = shape.length;
  var xs = shape.map(function (el) {
    return el.x;
  });
  var ys = shape.map(function (el) {
    return el.y;
  });
  var current = 0;
  var ts = shape.reduce(function (acc, cur, index, arr) {
    if (index > 0) {
      current += (0,js_lib__WEBPACK_IMPORTED_MODULE_1__.dist)(cur, arr[index - 1]);
    }

    acc.push(current);
    return acc;
  }, []);
  var maxlen = ts[ts.length - 1];

  (function (el, index) {
    return PATH_RESOLUTION / length * index;
  });

  var splineX = new (cubic_spline__WEBPACK_IMPORTED_MODULE_0___default())(ts, xs);
  var splineY = new (cubic_spline__WEBPACK_IMPORTED_MODULE_0___default())(ts, ys);
  var arr = Array(PATH_RESOLUTION).fill(null);
  return arr.map(function (el, index) {
    var t = (0,js_lib__WEBPACK_IMPORTED_MODULE_1__.mapclamp)(index, 0, PATH_RESOLUTION, 0, maxlen);
    return {
      x: splineX.at(t),
      y: splineY.at(t)
    };
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothShapes);

/***/ }),

/***/ "./node_modules/cubic-spline/index.js":
/*!********************************************!*\
  !*** ./node_modules/cubic-spline/index.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = class Spline {
  constructor(xs, ys) {
    this.xs = xs;
    this.ys = ys;
    this.ks = this.getNaturalKs(new Float64Array(this.xs.length));
  }

  getNaturalKs(ks) {
    const n = this.xs.length - 1;
    const A = zerosMat(n + 1, n + 2);

    for (
      let i = 1;
      i < n;
      i++ // rows
    ) {
      A[i][i - 1] = 1 / (this.xs[i] - this.xs[i - 1]);
      A[i][i] =
        2 *
        (1 / (this.xs[i] - this.xs[i - 1]) + 1 / (this.xs[i + 1] - this.xs[i]));
      A[i][i + 1] = 1 / (this.xs[i + 1] - this.xs[i]);
      A[i][n + 1] =
        3 *
        ((this.ys[i] - this.ys[i - 1]) /
          ((this.xs[i] - this.xs[i - 1]) * (this.xs[i] - this.xs[i - 1])) +
          (this.ys[i + 1] - this.ys[i]) /
            ((this.xs[i + 1] - this.xs[i]) * (this.xs[i + 1] - this.xs[i])));
    }

    A[0][0] = 2 / (this.xs[1] - this.xs[0]);
    A[0][1] = 1 / (this.xs[1] - this.xs[0]);
    A[0][n + 1] =
      (3 * (this.ys[1] - this.ys[0])) /
      ((this.xs[1] - this.xs[0]) * (this.xs[1] - this.xs[0]));

    A[n][n - 1] = 1 / (this.xs[n] - this.xs[n - 1]);
    A[n][n] = 2 / (this.xs[n] - this.xs[n - 1]);
    A[n][n + 1] =
      (3 * (this.ys[n] - this.ys[n - 1])) /
      ((this.xs[n] - this.xs[n - 1]) * (this.xs[n] - this.xs[n - 1]));

    return solve(A, ks);
  }

  /**
   * inspired by https://stackoverflow.com/a/40850313/4417327
   */
  getIndexBefore(target) {
    let low = 0;
    let high = this.xs.length;
    let mid = 0;
    while (low < high) {
      mid = Math.floor((low + high) / 2);
      if (this.xs[mid] < target && mid !== low) {
        low = mid;
      } else if (this.xs[mid] >= target && mid !== high) {
        high = mid;
      } else {
        high = low;
      }
    }
    return low + 1;
  }

  at(x) {
    let i = this.getIndexBefore(x);
    const t = (x - this.xs[i - 1]) / (this.xs[i] - this.xs[i - 1]);
    const a =
      this.ks[i - 1] * (this.xs[i] - this.xs[i - 1]) -
      (this.ys[i] - this.ys[i - 1]);
    const b =
      -this.ks[i] * (this.xs[i] - this.xs[i - 1]) +
      (this.ys[i] - this.ys[i - 1]);
    const q =
      (1 - t) * this.ys[i - 1] +
      t * this.ys[i] +
      t * (1 - t) * (a * (1 - t) + b * t);
    return q;
  }
};

function solve(A, ks) {
  const m = A.length;
  let h = 0;
  let k = 0;
  while (h < m && k <= m) {
    let i_max = 0;
    let max = -Infinity;
    for (let i = h; i < m; i++) {
      const v = Math.abs(A[i][k]);
      if (v > max) {
        i_max = i;
        max = v;
      }
    }

    if (A[i_max][k] === 0) {
      k++;
    } else {
      swapRows(A, h, i_max);
      for (let i = h + 1; i < m; i++) {
        const f = A[i][k] / A[h][k];
        A[i][k] = 0;
        for (let j = k + 1; j <= m; j++) A[i][j] -= A[h][j] * f;
      }
      h++;
      k++;
    }
  }

  for (
    let i = m - 1;
    i >= 0;
    i-- // rows = columns
  ) {
    var v = 0;
    if (A[i][i]) {
      v = A[i][m] / A[i][i];
    }
    ks[i] = v;
    for (
      let j = i - 1;
      j >= 0;
      j-- // rows
    ) {
      A[j][m] -= A[j][i] * v;
      A[j][i] = 0;
    }
  }
  return ks;
}

function zerosMat(r, c) {
  const A = [];
  for (let i = 0; i < r; i++) A.push(new Float64Array(c));
  return A;
}

function swapRows(m, k, l) {
  let p = m[k];
  m[k] = m[l];
  m[l] = p;
}


/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/svg/svg-low.svg":
/*!********************************!*\
  !*** ./assets/svg/svg-low.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1920 1080\" style=\"enable-background:new 0 0 1920 1080;\" xml:space=\"preserve\"><style type=\"text/css\"> .st0{fill:none;stroke:#FF461C;stroke-miterlimit:10;} </style><g><path class=\"st0\" d=\"M91.3,552.2c-2.3,0.3-4.2,1.5-5.5,3.1c-1.4,1.6-2.3,3.7-2.6,5.9c-0.4,2.2-0.3,4.6,0.4,6.8 c0.6,2.2,1.8,4.2,3.5,5.8c1.7,1.5,3.9,2.7,6.4,3.5c2.5,0.8,5.3,1.2,8.1,1.2c2.8,0,5.7-0.5,8.4-1.4s5.2-2.3,7.3-4.1 c3.3-3,5.6-6.8,6.9-11c1.3-4.2,1.5-8.8,0.6-13.4c-0.9-4.6-2.9-9.1-6.1-13.1c-3.2-4-7.6-7.6-13.2-10.2c-4.8-2.2-10-3.7-15.2-4.3 c-5.2-0.6-10.6-0.5-15.8,0.4c-5.2,0.9-10.3,2.5-15,4.9s-9,5.4-12.7,9.2c-4,4.1-7.5,8.7-10.4,13.5c-2.9,4.9-5.1,10.1-6.8,15.4 c-1.7,5.4-2.7,10.9-3.1,16.5c-0.4,5.6-0.1,11.2,0.9,16.8c0.9,5.4,2.3,10.4,4,14.9c1.7,4.5,3.8,8.7,6.2,12.4c2.4,3.7,5,7,7.8,10 c2.8,2.9,5.9,5.5,9.1,7.7c4.6,3.2,9.2,5.7,14,7.7c4.7,2,9.6,3.4,14.6,4.4c5,0.9,10,1.3,15.2,1.2c5.2-0.1,10.5-0.7,16-1.7 c5.5-1,10.3-2.3,14.4-3.8c4.2-1.5,7.8-3.2,11.2-5c3.3-1.8,6.4-3.8,9.3-5.8s5.9-4.1,8.9-6.2c5.5-3.7,11-8.1,16.5-13s10.8-10.3,16-16 c5.2-5.7,10.2-11.6,15-17.6s9.2-12,13.2-17.8c3.8-5.4,7.7-10.8,11.9-15.9c4.1-5.2,8.5-10.1,13-14.9s9.4-9.2,14.4-13.4 s10.4-8,16.1-11.5c6.3-3.9,13.7-6.5,21.6-8.1c7.9-1.6,16.2-2.2,24.5-1.9s16.4,1.3,23.9,2.9c7.5,1.7,14.4,3.9,20,6.6 c6.9,3.3,13.6,7.6,19.5,12.6s11.2,10.9,15.6,17.5c4.3,6.5,7.7,13.7,9.8,21.3c2.1,7.6,2.9,15.8,2,24.2c-0.5,5.2-2,10.2-4.3,15.1 c-2.3,4.8-5.4,9.4-9.1,13.5c-3.7,4.1-8,7.9-12.8,11c-4.8,3.1-10,5.6-15.5,7.4c-1.7,0.5-3.5,1-5.2,1.4c-1.8,0.4-3.6,0.6-5.4,0.7 c-1.8,0.1-3.6,0.1-5.4,0c-1.8-0.1-3.6-0.4-5.4-0.8c-2.5-0.6-5-1.5-7.2-2.7s-4.3-2.7-6.1-4.4s-3.4-3.6-4.6-5.6 c-1.2-2-2.2-4.2-2.7-6.5c-0.6-2.3-0.7-4.6-0.5-6.9c0.2-2.3,0.7-4.6,1.6-6.8s2.1-4.3,3.5-6.2c1.5-1.9,3.3-3.6,5.3-5.1 c1.4-1,2.8-1.8,4.4-2.4s3.1-0.9,4.7-1.1c1.6-0.2,3.2-0.2,4.9,0.1c1.7,0.2,3.3,0.6,5,1.2c1.7,0.6,3.1,1.7,4.2,3.1s1.9,3.1,2.4,4.9 s0.6,3.6,0.4,5.2s-0.8,3-1.9,4\"></path><path class=\"st0\" d=\"M58.7,642.8c4.1,2.7,9.5,4.6,15.5,5.8c6,1.2,12.6,1.6,19.3,1.3c6.6-0.3,13.2-1.4,19.2-3.3s11.2-4.5,15.2-7.9 c6.9-5.8,12.1-11.5,16.1-17.2s6.9-11.3,9-16.9c2.1-5.6,3.5-11.3,4.5-17.1s1.8-11.7,2.7-17.9c0.9-6.3,1.3-12.5,1.2-18.5 s-0.7-11.9-1.8-17.7s-2.5-11.5-4.2-17.2s-3.9-11.3-6.2-16.9c-2.1-4.9-4.8-10.3-8-15.9s-7.1-11.5-11.5-17.5 c-4.4-5.9-9.2-11.9-14.6-17.8c-5.3-5.8-11.1-11.5-17.3-16.9c-7-6-14-12.4-20.7-19c-6.7-6.6-13.2-13.4-19-20.1s-10.9-13.4-15-19.9 c-4.1-6.4-7.2-12.6-8.8-18.4c-2-6.9-3.4-14-4.2-21.1c-0.8-7.1-0.9-14.3-0.3-21.5c0.6-7.1,1.8-14.2,3.8-21s4.6-13.5,8.1-19.8 c3.4-6.3,7.8-12.6,12.9-18.5c5.1-6,10.8-11.7,17-16.9c6.2-5.2,12.8-10,19.5-14.1s13.6-7.5,20.3-10.1c9-3.5,17.9-6,26.5-7.7 c8.6-1.7,16.9-2.5,25-2.4c8.1,0.1,15.9,1.1,23.5,3.1c7.6,1.9,14.8,4.8,21.8,8.6c4.2,2.3,8.5,5.3,12.7,8.8 c4.2,3.5,8.2,7.5,11.9,11.7s7.2,8.7,10.1,13.1c2.9,4.4,5.4,8.9,7.2,13c2.5,5.9,4.5,12.4,5.8,19.2s2.1,13.7,2.3,20.5 c0.2,6.8-0.2,13.5-1.1,19.7c-0.9,6.2-2.3,11.9-4.1,16.7c-1.9,5-4.6,10.1-7.8,15s-7,9.7-11.4,14.3c-4.4,4.5-9.3,8.7-14.7,12.5 c-5.4,3.7-11.3,7-17.6,9.6c-4.4,1.8-9.4,3-14.6,3.6c-5.2,0.6-10.8,0.5-16.4-0.1s-11.3-1.9-16.9-3.6c-5.6-1.8-11-4.1-16-7 c-4.4-2.5-8.5-5.8-12.2-9.6c-3.7-3.8-7-8.2-9.6-12.8c-2.7-4.6-4.8-9.6-6.2-14.5s-2-10-1.8-14.8c0.2-4.8,0.8-9,1.7-12.7 c0.9-3.7,2.2-7,3.9-9.9c1.7-2.9,3.8-5.5,6.4-7.8c2.6-2.3,5.6-4.3,9.1-6.3c2.1-1.1,4.5-2.1,7.2-2.8c2.7-0.7,5.5-1.1,8.4-1.2 c2.9-0.1,5.7,0.1,8.4,0.7c2.7,0.6,5.2,1.6,7.3,3c2.3,1.5,4,3.3,5.1,5.2c1.1,1.9,1.6,3.8,1.6,5.7c-0.1,1.9-0.7,3.7-1.8,5.4 c-1.2,1.6-2.8,3.1-5,4.2\"></path><path class=\"st0\" d=\"M54.7,235.7c4.6-5.2,9.3-10,14.2-14.3s9.9-8.1,15-11.6c5.1-3.5,10.2-6.5,15.2-9.2s10.1-5.1,15-7.2 c5.3-2.3,10.5-5.1,15.5-8.3c5-3.2,9.8-6.9,14.1-10.8c4.3-3.9,8.2-8.1,11.5-12.5c3.3-4.3,5.9-8.8,7.7-13.3c1.6-3.9,2.7-8.2,3.2-12.6 s0.7-9.1,0.3-13.6s-1.3-9-2.7-13.1c-1.4-4.1-3.3-7.8-5.7-10.9c-3.1-3.9-6.4-7.3-9.9-10.2c-3.6-2.9-7.4-5.3-11.5-7.4 c-4.1-2.1-8.5-3.7-13.1-5.1c-4.6-1.4-9.5-2.5-14.7-3.4c-5.3-0.9-10.4-1.1-15.3-0.8c-4.9,0.3-9.6,1.1-13.9,2.3 c-4.4,1.2-8.5,2.6-12.2,4.3c-3.7,1.6-7.1,3.5-10,5.2c-2.4,1.5-4.7,3.3-6.7,5.3s-3.8,4.3-5.5,6.8c-1.6,2.5-3,5.2-4.2,8.1 c-1.2,2.9-2.2,6-3,9.2c-0.5,2.2-0.8,4.7-0.7,7.3s0.4,5.3,1,7.9c0.6,2.7,1.5,5.3,2.6,7.9c1.1,2.5,2.5,4.9,4.2,7 c1.9,2.4,4,4.6,6.3,6.5s4.8,3.5,7.5,4.6s5.6,1.9,8.7,2.2c3.1,0.3,6.4,0.1,10-0.6c3.3-0.7,6.4-1.8,9.1-3.4c2.8-1.5,5.2-3.4,7.2-5.6 c2-2.2,3.7-4.7,4.8-7.4c1.2-2.7,1.8-5.7,1.9-8.7c0.1-2.9-0.6-5.7-1.9-8.1c-1.3-2.4-3.1-4.5-5.2-6.1c-2.1-1.6-4.6-2.7-7.2-3.1 c-2.6-0.5-5.2-0.3-7.7,0.7\"></path><path class=\"st0\" d=\"M75.2,657.8c6,1.2,12,1.8,18.1,2.1c6.1,0.2,12.1,0.1,18.2-0.5c6.1-0.6,12.1-1.5,18.1-2.8 c6-1.3,11.9-2.9,17.6-4.8s10.8-4,15.3-6.2c4.5-2.3,8.6-4.7,12.6-7.3c4-2.6,7.9-5.4,12.1-8.4c4.2-3,8.6-6.2,13.6-9.6 c3-2,6-4.1,9.1-6.2c3-2.1,6.1-4.1,9.2-5.9c3.1-1.9,6.3-3.6,9.6-5.1c3.3-1.5,6.7-2.8,10.2-3.8c3.5-1,7.2-1.6,10.9-1.7 c3.7-0.2,7.3,0.1,10.8,0.8c3.5,0.7,6.8,1.8,9.8,3.5c3,1.6,5.6,3.7,7.7,6.2c1.7,2,3.1,4.2,4.3,6.4s2.1,4.6,2.8,7s1.1,4.8,1.2,7.3 c0.1,2.5,0,5-0.5,7.5c-0.5,2.5-1.4,5-2.7,7.3c-1.3,2.3-3,4.4-5,6.2s-4.1,3.2-6.4,4.3c-2.3,1-4.7,1.6-7,1.5 c-3.2-0.1-6.3-0.4-9.1-1.1c-2.8-0.7-5.4-1.7-7.5-3c-2.2-1.3-4-2.9-5.4-4.7c-1.4-1.9-2.3-4-2.6-6.5c-0.3-2.1-0.2-4.2,0.2-6.2 c0.4-2,1.2-3.8,2.4-5.3c1.2-1.5,2.7-2.8,4.6-3.6c1.9-0.8,4.2-1.3,6.8-1.1c2,0.1,3.8,0.8,5.3,1.8c1.4,1,2.5,2.3,3.2,3.8 c0.7,1.4,0.9,3,0.6,4.4c-0.3,1.4-1.1,2.7-2.5,3.6\"></path><path class=\"st0\" d=\"M110.9,451.3c-4.8-4.3-9.1-8.1-13-11.5c-3.9-3.4-7.5-6.3-10.9-8.8s-6.9-4.6-10.4-6.2 c-3.6-1.7-7.3-2.9-11.5-3.7c-3.6-0.7-7.2-0.8-10.7-0.2c-3.4,0.5-6.7,1.6-9.7,3.2s-5.6,3.7-7.8,6.2s-4,5.4-5.1,8.6 c-0.8,2.3-1.4,4.7-1.7,7.2c-0.3,2.5-0.3,5,0,7.4c0.3,2.4,0.8,4.8,1.7,7s2,4.3,3.4,6.1c1.2,1.5,2.6,2.8,4.2,3.9 c1.6,1.1,3.4,2.1,5.4,2.9s4,1.3,6.1,1.6c2.1,0.3,4.3,0.3,6.4,0.1c1.7-0.2,3.3-0.6,4.7-1.2c1.5-0.6,2.8-1.3,4-2.1 c1.2-0.8,2.2-1.7,3.1-2.7s1.6-2,2.1-3c0.5-1,1-2.2,1.2-3.3c0.3-1.2,0.4-2.4,0.5-3.6s-0.1-2.4-0.4-3.6c-0.3-1.2-0.7-2.3-1.3-3.3 c-0.6-1-1.4-2-2.2-2.8s-1.9-1.4-2.9-1.9c-1.1-0.5-2.2-0.8-3.3-0.8c-1.1-0.1-2.2,0.1-3.3,0.5c-1.1,0.4-2,1.1-2.8,1.9 c-0.8,0.8-1.4,1.9-1.8,3s-0.6,2.3-0.6,3.5c0,1.2,0.3,2.3,0.9,3.4\"></path><path class=\"st0\" d=\"M244.3,316.5c-0.4,3.6-1.1,7.4-2.4,11.1s-2.9,7.5-5.1,10.9c-2.2,3.5-5,6.7-8.3,9.5c-3.3,2.8-7.3,5.1-11.9,6.8 c-1.2,0.4-2.7,0.8-4.3,1.1s-3.5,0.4-5.4,0.4c-1.9,0-3.9-0.1-5.8-0.3s-3.8-0.6-5.6-1.1c-1.7-0.5-3.3-1.2-4.9-2.1 c-1.6-0.9-3.1-2-4.4-3.2c-1.3-1.2-2.5-2.6-3.4-4.2c-0.9-1.5-1.6-3.2-1.9-5c-0.3-1.4-0.3-3.1,0-4.8s0.7-3.6,1.4-5.4 c0.7-1.8,1.6-3.5,2.7-5c1.1-1.5,2.4-2.7,3.9-3.5\"></path><path class=\"st0\" d=\"M371.8,506.6c5.1,2.3,10,5.5,14.6,9.1c4.6,3.6,9,7.6,12.9,11.8c3.9,4.1,7.5,8.4,10.4,12.3 c3,4,5.4,7.7,7.1,10.8c2.8,4.9,5.4,9.8,7.9,14.4c2.5,4.6,4.9,9,7.2,13.2c2.3,4.2,4.4,8.1,6.4,11.6c2,3.6,3.8,6.8,5.5,9.6 c2.7,4.7,5.9,9,9.6,12.8s7.8,7.2,12.4,10c4.6,2.8,9.7,5.1,15.4,6.8c5.7,1.7,11.8,2.7,18.6,3.1c7.2,0.4,14.1-0.2,20.5-1.6 c6.5-1.4,12.5-3.6,17.9-6.2s10.3-5.7,14.5-9c4.1-3.3,7.6-6.7,10.1-10c3.5-4.6,5.9-9.9,7.3-15.4c1.4-5.6,1.7-11.5,1.2-17.2 c-0.5-5.7-1.8-11.3-3.9-16.3s-4.8-9.4-8-12.7c-3.3-3.4-6.9-6.3-10.7-8.8c-3.8-2.5-7.8-4.5-11.8-6s-8.2-2.6-12.3-3.1 c-4.1-0.5-8.1-0.5-12,0.2c-3.5,0.6-7,1.4-10.3,2.6s-6.5,2.6-9.3,4.3s-5.5,3.7-7.7,5.9c-2.3,2.2-4.1,4.7-5.6,7.4 c-1.2,2.2-2.1,4.6-2.9,7.1c-0.7,2.5-1.2,5.2-1.4,8c-0.2,2.8-0.1,5.7,0.4,8.6c0.5,2.9,1.3,5.9,2.5,8.8c1.1,2.6,2.8,5.2,4.7,7.5 s4.3,4.3,6.8,5.9s5.1,2.7,7.6,3.2c2.6,0.5,5.1,0.4,7.3-0.6\"></path><path class=\"st0\" d=\"M61.8,388.9c-7.1-8.3-12-16.7-15.1-24.9c-3.2-8.1-4.6-16-4.7-23.2c-0.1-7.3,1.2-13.9,3.3-19.7 s5.3-10.6,8.9-14.1c3-2.9,6.4-5.3,9.9-7.1c3.5-1.8,7.2-3,10.9-3.6s7.3-0.6,10.6-0.1c3.4,0.5,6.5,1.7,9.1,3.4\"></path><path class=\"st0\" d=\"M180.8,561.4c4.5-7.3,9.1-15.4,13.7-24s9.1-17.6,13.6-26.6c4.5-9,8.9-18,13.1-26.6c4.3-8.6,8.4-16.7,12.3-23.9 s8-14.2,12.5-21c4.4-6.8,9.1-13.3,14.2-19.6c5.1-6.2,10.5-12.2,16.3-17.8c5.8-5.6,12.1-10.8,18.9-15.6c2.8-2,5.6-3.8,8.5-5.6 c2.9-1.8,5.8-3.4,8.9-5s6.1-3,9.2-4.4c3.1-1.4,6.2-2.7,9.4-3.9c5.6-2.1,11.3-4,17.1-5.5c5.8-1.5,11.7-2.8,17.6-3.6 c5.9-0.9,11.9-1.3,17.8-1.4c6,0,11.9,0.4,17.8,1.3c5.9,0.9,11.6,2.4,17.2,4.5s10.8,4.7,15.8,7.7c5,3.1,9.8,6.6,14.2,10.4 c4.5,3.9,8.6,8.1,12.4,12.6c3.4,4.1,6.3,8.4,8.8,12.9c2.5,4.5,4.5,9.1,6,13.7s2.6,9.3,3.1,13.9c0.6,4.6,0.6,9.1,0.2,13.4 c-0.4,3.6-1,6.9-1.8,10.1c-0.9,3.1-2,6-3.4,8.8c-1.4,2.7-3.1,5.3-5.2,7.7c-2.1,2.4-4.4,4.8-7.2,7c-2.5,2-5.4,3.9-8.5,5.4 c-3.1,1.5-6.5,2.7-9.9,3.5c-3.4,0.8-6.9,1.2-10.2,1.1c-3.3-0.1-6.6-0.7-9.5-1.9c-2.8-1.2-5.5-2.7-7.8-4.7c-2.3-1.9-4.3-4.1-6-6.6 c-1.7-2.5-2.9-5.2-3.8-8.1c-0.9-2.9-1.3-5.9-1.3-9.1c0-2.1,0.3-4.2,0.8-6.3c0.5-2.1,1.2-4.2,2.1-6.1c0.9-1.9,2-3.8,3.2-5.4 c1.2-1.6,2.5-3.1,3.9-4.3c1.6-1.4,3.5-2.4,5.4-3.2s4-1.3,6-1.5c2-0.2,4.1-0.2,6,0.1s3.8,0.8,5.5,1.5c1.9,0.8,3.5,1.7,4.9,2.8 s2.6,2.3,3.5,3.7s1.6,2.9,2,4.5c0.4,1.6,0.5,3.4,0.4,5.2c-0.2,1.8-0.9,3.6-2,5.2c-1.1,1.6-2.6,3-4.3,4.1s-3.6,1.9-5.5,2.3 c-1.9,0.4-3.9,0.3-5.7-0.3\"></path><path class=\"st0\" d=\"M208.8,538.3\"></path><path class=\"st0\" d=\"M179.7,563c3.5-4.9,7.2-10.9,10.7-17.6c3.5-6.7,6.8-14,9.7-21.5c2.9-7.4,5.4-15,7.2-22 c1.8-7.1,3-13.7,3.2-19.3c0.2-5.6-0.1-11-1-16.1c-0.9-5.1-2.4-9.8-4.6-14.1c-2.1-4.3-4.9-8.1-8.2-11.3c-3.4-3.2-7.3-5.9-11.9-7.8 c-1.1-0.5-2.6-0.9-4.2-1.2c-1.6-0.3-3.4-0.6-5.1-0.7c-1.8-0.2-3.5-0.2-5.2-0.2s-3.1,0.2-4.3,0.5c-1.2,0.3-2.3,0.8-3.3,1.4 c-1,0.6-1.9,1.4-2.8,2.4c-0.8,0.9-1.5,1.9-2.2,3c-0.6,1.1-1.1,2.2-1.6,3.4c-0.4,1.2-0.6,2.4-0.6,3.5s0.2,2.3,0.5,3.5 s0.8,2.3,1.4,3.4c0.6,1.1,1.3,2.1,2,3.1\"></path><path class=\"st0\" d=\"M196.5,534.9c2.5-5,4.9-9.9,7.4-14.7c2.5-4.8,5-9.5,7.6-14.3c2.6-4.7,5.3-9.5,8.1-14.4s5.8-9.9,8.9-15.1 c2-3.4,4.5-7,7.2-10.7c2.7-3.7,5.6-7.4,8.6-10.9c3-3.6,6-6.9,8.9-10c2.9-3,5.7-5.7,8.2-7.8c3.2-2.7,6.5-5.3,10-7.7 c3.4-2.4,7-4.5,10.8-6.4c3.7-1.9,7.7-3.5,11.8-4.8c4.1-1.3,8.4-2.3,13-3c4.4-0.6,8.6-1,12.5-1c4-0.1,7.7,0.1,11.2,0.6 c3.5,0.5,6.7,1.2,9.6,2.1c2.9,0.9,5.5,2.1,7.7,3.5c2.4,1.5,4.6,3.3,6.7,5.3s3.9,4.3,5.4,6.6c1.6,2.4,2.8,4.9,3.7,7.5 c0.9,2.6,1.5,5.2,1.6,7.8c0.1,1.8-0.1,3.7-0.7,5.7c-0.5,1.9-1.4,3.9-2.6,5.7c-1.2,1.8-2.9,3.5-4.9,4.9c-2,1.4-4.5,2.6-7.4,3.4\"></path><path class=\"st0\" d=\"M306.6,379.4c2.7-1.7,5.5-3.3,8.3-4.8c2.8-1.5,5.7-2.8,8.7-4.1c2.9-1.3,5.9-2.4,8.9-3.5c3-1.1,6.1-2.1,9.1-3 c2.7-0.8,5.4-1.6,8.1-2.2s5.5-1.2,8.2-1.7c2.8-0.5,5.5-0.8,8.3-1c2.8-0.2,5.6-0.2,8.4,0c2.8,0.2,5.6,0.6,8.4,1.2s5.5,1.4,8.1,2.5 c2.6,1.1,5.1,2.3,7.4,3.9c2.3,1.5,4.5,3.3,6.4,5.3s3.6,4.3,5,6.8c1.4,2.5,2.4,5.1,3.1,7.8c0.7,2.7,1,5.5,0.8,8.3s-0.7,5.5-1.7,8.1 c-1,2.6-2.6,5-4.5,7c-1.9,2.1-4.2,3.8-6.7,5s-5.2,2.1-7.9,2.4c-2.7,0.3-5.5,0-8.1-0.9\"></path><path class=\"st0\" d=\"M266,374c2.7-5.2,5.8-10,9-14.6c3.3-4.5,6.7-8.7,10.2-12.5c3.5-3.8,7.1-7.2,10.5-10.2c3.4-3,6.7-5.6,9.7-7.7 c2.8-2,5.7-3.7,8.7-5.3s6.1-3,9.1-4.3c3.1-1.3,6.2-2.5,9.2-3.5s6-2,8.9-2.8c2.8-0.8,6.9-1.6,11.8-2.5c5-0.8,10.8-1.7,17-2.6 c6.2-0.9,12.8-1.9,19.4-3c6.6-1.1,13.1-2.2,19.1-3.5c5.6-1.2,10.6-2.6,15.1-4.3c4.5-1.7,8.4-3.7,11.9-6s6.4-5.1,8.8-8.2 s4.5-6.7,6-10.8c1.3-3.5,2.1-7.3,2.2-11.2c0.1-3.9-0.4-7.9-1.5-11.7s-2.9-7.6-5.4-10.9s-5.5-6.4-9.3-8.8c-3.4-2.2-7.3-3.8-11.3-4.7 c-4-1-8.2-1.3-12.1-1c-3.9,0.3-7.7,1.1-10.8,2.5c-3.2,1.4-5.8,3.4-7.5,6\"></path><path class=\"st0\" d=\"M307.8,326.3c3.7-2.3,7.5-4.4,11.3-6.4c3.9-2,7.8-3.9,11.8-5.6s8-3.3,12.1-4.8c4.1-1.4,8.3-2.7,12.4-3.9 c2.6-0.7,5.3-1.4,8-2.2s5.3-1.6,7.8-2.7c2.5-1,4.9-2.2,7.1-3.7c2.2-1.5,4.2-3.3,5.8-5.4c1.5-1.9,2.6-4.1,3.4-6.5 c0.7-2.3,1.1-4.8,1.1-7.2c0-2.5-0.4-4.9-1.1-7.2c-0.8-2.3-1.9-4.5-3.4-6.5\"></path><path class=\"st0\" d=\"M443.8,367.5c4.2,3,8.3,6.7,12.3,10.8c3.9,4.1,7.7,8.7,11.1,13.5c3.5,4.8,6.6,9.9,9.3,15 c2.7,5.1,5,10.3,6.8,15.4c2.5,7.2,4.4,13.2,6.2,18.5c1.8,5.3,3.3,9.7,5.2,13.9c1.9,4.1,4,7.9,6.9,11.6c2.9,3.8,6.4,7.6,11.2,11.8 c1.6,1.4,3.7,2.9,6,4.2c2.4,1.4,5,2.6,7.8,3.7s5.7,2.1,8.6,2.8c2.9,0.7,5.8,1.2,8.4,1.3c3.7,0.2,7.2,0.1,10.4-0.3 c3.2-0.4,6.1-1.1,8.8-2c2.7-0.9,5.1-2.1,7.2-3.4c2.1-1.3,4-2.9,5.6-4.6c1.8-1.9,3.4-4.2,4.7-6.6c1.3-2.4,2.3-5,3.1-7.7 c0.7-2.7,1.2-5.4,1.3-8.2c0.1-2.8,0-5.5-0.5-8.2c-0.5-2.7-1.6-5.1-3-7.3c-1.5-2.2-3.4-4.1-5.6-5.6c-2.2-1.5-4.6-2.8-7.2-3.6 s-5.3-1.2-8-1.1c-2.7,0.1-5.3,0.9-7.7,2.1c-2.4,1.3-4.5,3-6.3,5.1c-1.7,2.1-3,4.5-3.8,7s-0.9,5.2-0.3,7.8\"></path><path class=\"st0\" d=\"M554.8,643.4c7,0.8,14,0.9,21,0.2c7-0.6,14-1.9,20.7-3.9c6.7-1.9,13.3-4.4,19.5-7.4s12-6.5,17.3-10.5 c6.4-4.7,12.8-8.7,19.3-12c6.5-3.3,12.9-5.8,19.3-7.7s12.6-3,18.7-3.6c6.1-0.5,11.9-0.4,17.5,0.3c5.9,0.8,11.3,1.8,16.4,3.2 s10,3.1,14.8,5.3c4.8,2.1,9.6,4.7,14.4,7.7c4.9,3,9.8,6.5,15.1,10.5c6,4.5,12.1,7.7,18.3,9.9c6.2,2.2,12.3,3.3,18.2,3.5 c5.9,0.2,11.5-0.4,16.6-1.8c5.1-1.3,9.7-3.4,13.5-5.9c1.9-1.2,3.8-2.8,5.7-4.5s3.7-3.8,5.3-6s3-4.5,4.1-7c1.1-2.5,1.8-5.1,2-7.7 c0.3-3.8-0.2-7.4-1.4-10.5c-1.2-3.2-3-5.9-5.2-8.1c-2.2-2.2-4.7-3.8-7.4-4.8c-2.6-0.9-5.4-1.2-7.9-0.6\"></path><path class=\"st0\" d=\"M663.9,597c5.2-2.4,11.6-4.1,18.4-5.4c6.8-1.2,14-2,20.8-2.3c6.8-0.3,13.3-0.3,18.7,0s9.6,0.8,12,1.5 c8.1,2.3,15.8,4.7,23.1,6.7c7.3,2,14.1,3.6,20.1,4.3s11.4,0.3,15.7-1.6s7.7-5.3,10-10.8\"></path><path class=\"st0\" d=\"M590.1,638.3c3.6-0.8,7.2-1.8,10.7-2.9c3.5-1.1,7-2.4,10.4-3.7c3.3-1.4,6.6-2.8,9.6-4.3s5.8-3.1,8.3-4.7 c2.9-1.9,5.5-3.9,7.9-6.1c2.4-2.2,4.6-4.4,6.5-6.6s3.7-4.4,5.2-6.5c1.5-2.1,2.8-4.1,3.8-5.8c1.8-3,3.5-6.3,4.8-9.9 s2.5-7.3,3.2-11.3s1.2-8,1.3-12.3c0.1-4.2-0.2-8.5-0.9-12.9c-0.7-4.3-1.8-8.2-3.4-11.7c-1.5-3.5-3.5-6.6-5.8-9.3 c-2.3-2.7-4.9-4.9-7.7-6.6s-6-3-9.3-3.7c-2.8-0.6-5.6-0.9-8.4-0.9s-5.5,0.4-8.1,1.2s-5,1.9-7.3,3.5c-2.2,1.6-4.2,3.6-5.8,6.1 c-1.2,1.9-2.1,4.1-2.5,6.5s-0.5,4.9-0.3,7.3c0.3,2.5,0.8,4.8,1.7,6.9c0.9,2.1,2.1,3.9,3.5,5.3c1.9,1.7,4.1,2.8,6.4,3.3 s4.6,0.5,6.8,0c2.2-0.5,4.2-1.4,5.8-2.7c1.6-1.3,2.8-2.8,3.4-4.6\"></path><path class=\"st0\" d=\"M28.8,268.6c3.9-8.1,7.7-15.1,11.4-21s7.4-11,11-15.3c3.6-4.3,7.1-7.9,10.6-11.1s6.9-5.9,10.4-8.4 c2.2-1.6,4.8-3.7,7.6-5.9c2.8-2.2,5.7-4.7,8.7-7.1c3-2.4,5.9-4.9,8.6-7.2c2.7-2.3,5.3-4.4,7.4-6.1c3.3-2.7,5.9-5.3,7.9-7.7 c1.9-2.4,3.2-4.8,3.9-7c0.7-2.3,0.8-4.4,0.5-6.5c-0.4-2.1-1.2-4.2-2.5-6.3\"></path><path class=\"st0\" d=\"M156.4,187.4c9.2-0.2,18,0.5,26.1,1.9c8.1,1.4,15.7,3.5,22.6,5.9c6.9,2.4,13.2,5.2,18.8,8 c5.6,2.8,10.6,5.7,14.8,8.2c4.7,2.9,9.1,6.1,13.2,9.2c4.1,3.2,8.1,6.3,12,9.1s7.9,5.3,12,7.1c4.1,1.8,8.5,3,13.2,3.2 c4.8,0.2,9-1,12.4-3.2c3.3-2.2,5.8-5.3,7.1-8.7c1.3-3.5,1.5-7.3,0.4-10.9s-3.7-7-7.9-9.7\"></path><path class=\"st0\" d=\"M152.5,82.8c-2.6-3.6-5.6-6.7-8.9-9.5c-3.3-2.7-6.9-5-10.9-7c-4-2-8.3-3.6-13-5c-4.7-1.4-9.8-2.6-15.4-3.6 c-3-0.6-5.9-1.2-8.7-1.8s-5.5-1.4-8-2.3c-2.5-0.9-4.8-1.9-6.9-3.1c-2.1-1.2-3.9-2.5-5.4-4c-1.5-1.5-2.6-3.3-3.3-5.2 c-0.8-1.9-1.2-3.9-1.4-6c-0.2-2,0-4,0.3-5.9c0.4-1.8,1-3.5,1.8-4.9c0.9-1.5,1.9-2.8,3.2-4c1.2-1.2,2.6-2.2,4.2-3 c1.5-0.8,3.2-1.4,4.9-1.7c1.7-0.3,3.5-0.4,5.4-0.2c2.1,0.2,4.2,1,6,2.1c1.8,1.1,3.3,2.6,4.4,4.3c1,1.7,1.6,3.5,1.5,5.5 s-0.9,3.9-2.6,5.8\"></path><path class=\"st0\" d=\"M473.2,618.8c2.6,0.8,5.3,1.6,8,2.4c2.7,0.7,5.5,1.3,8.2,1.8c2.8,0.4,5.5,0.7,8.2,0.8c2.7,0.1,5.4-0.1,8-0.5 c3-0.5,5.8-1.2,8.6-2.1c2.7-0.9,5.3-1.9,7.8-3.1c2.4-1.2,4.7-2.6,6.8-4.2c2.1-1.6,4-3.4,5.7-5.3c1.5-1.7,2.8-3.7,3.8-5.8 c1-2.1,1.9-4.3,2.4-6.5c0.6-2.2,0.9-4.5,0.9-6.6c0-2.2-0.2-4.3-0.8-6.3c-0.7-2.4-1.7-4.4-3.1-6.1c-1.3-1.7-3-3-4.9-3.9 c-1.9-1-3.9-1.5-6.1-1.8c-2.2-0.2-4.6-0.1-7,0.4\"></path><path class=\"st0\" d=\"M640.7,617.8c2.7-3.1,5.5-5.9,8.4-8.5c2.8-2.6,5.7-5,8.5-7.2c2.8-2.2,5.7-4.2,8.5-5.9s5.5-3.3,8.1-4.7 c1.7-0.9,3.6-1.9,5.7-2.8c2-1,4.2-2,6.5-2.9c2.3-1,4.6-1.9,7-2.7c2.4-0.8,4.9-1.6,7.5-2.2c3.5-0.8,7-1.5,10.5-2.2 c3.5-0.7,6.9-1.3,10.1-2c3.2-0.7,6.3-1.5,9-2.5c2.7-1,5.2-2.2,7.3-3.7c3.1-2.3,5.3-4.8,6.9-7.5c1.6-2.7,2.4-5.6,2.7-8.4 c0.3-2.8,0-5.6-0.6-8.1c-0.7-2.5-1.8-4.8-3.2-6.7\"></path><path class=\"st0\" d=\"M63.5,640.6c-3.5-2.7-6.4-5-8.7-7.1c-2.3-2.1-4.2-4.1-5.7-6s-2.6-3.8-3.6-5.9s-1.8-4.3-2.7-6.9 c-0.5-1.4-0.7-3.1-0.6-5c0-1.9,0.3-4,0.8-6s1.2-4.1,2.1-5.9c0.9-1.8,2-3.5,3.3-4.7c1.3-1.3,3-2.3,4.8-3c1.8-0.7,3.8-1.1,5.9-1.1 c2,0,4.1,0.3,6.1,0.9c2,0.7,3.9,1.7,5.5,3.1c1.8,1.5,3.1,3.3,4,5.2c0.9,1.9,1.3,4,1.3,6s-0.6,4-1.6,5.9c-1,1.8-2.5,3.5-4.5,4.9\"></path><path class=\"st0\" d=\"M102.3,557.4\"></path><path class=\"st0\" d=\"M285.5,517.1c3.8-1.5,8.2-2.7,12.9-3.7s9.7-1.6,14.8-1.9c5.1-0.3,10.3-0.3,15.3,0.1s10,1.1,14.6,2.2 c3.3,0.8,6.7,1.9,9.9,3.2c3.2,1.3,6.3,2.8,9.1,4.5c2.8,1.7,5.3,3.5,7.4,5.4c2.1,1.9,3.8,3.8,5,5.8c1.3,2.2,2.3,4.8,3,7.5 s1,5.6,0.9,8.3s-0.7,5.4-1.7,7.6s-2.7,4.2-4.8,5.5c-2.4,1.4-5.2,2.4-8,2.7c-2.8,0.3-5.6,0.1-8.1-0.9s-4.7-2.6-6.3-5 s-2.6-5.6-2.7-9.6\"></path><path class=\"st0\" d=\"M192.8,217.9c3.7,2,7.3,4.1,10.9,6.5s7,5,10.4,8s6.7,6.2,9.9,9.9c3.2,3.7,6.3,7.7,9.2,12.2 c1.2,1.8,2.4,4.2,3.4,6.9c1.1,2.8,2,5.9,2.6,9.2s1,6.7,0.8,10.1c-0.1,3.4-0.7,6.7-2,9.8c-0.8,2-1.9,4-3.2,5.7 c-1.3,1.7-2.8,3.2-4.5,4.4c-1.7,1.2-3.7,2.1-5.9,2.6c-2.2,0.5-4.6,0.6-7.2,0.2\"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>"

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__(/*! css/styles.scss */ "./src/css/styles.scss");

__webpack_require__(/*! js/animation */ "./src/js/animation.js");
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map