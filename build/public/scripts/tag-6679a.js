webpackJsonp([1],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _thumb = __webpack_require__(0);

var _thumb2 = _interopRequireDefault(_thumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cc = new _thumb2.default();
var t = "";
xtag.register('x-praise', {
  content: "<div id='thumb' class='hand'>" + "<div class='finger'></div>" + "<div class='finger'></div>" + "<div class='finger'></div>" + "<div class='finger'></div>" + "<div class='finger thumb'></div>" + "<div class='arm'></div>" + "</div>" + "<span id='animation' class='hide'>+1</span>",
  methods: {
    praise: function praise() {
      var _this = this;
      cc.thumbClickAction();
      var animation = _this.querySelector("#animation");
      animation.className = "hide num";
      setTimeout(function () {
        animation.className = "hide";
      }, 800);
    }
  },
  events: {
    click: function click(e) {
      var _this = this;
      if (e.target.id == "thumb") {
        if (t) {
          clearTimeout(t);
        }
        t = setTimeout(function () {
          _this.praise();
        }, 500);
      }
    },
    focus: function focus() {}
  }
});

/***/ })

},[4]);