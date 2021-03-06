webpackHotUpdate("static/development/pages/text-slider.js",{

/***/ "./components/SphereSlider/SphereSlider.js":
/*!*************************************************!*\
  !*** ./components/SphereSlider/SphereSlider.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SphereSlider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fragment_glsl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fragment.glsl */ "./components/SphereSlider/fragment.glsl");
/* harmony import */ var _vertex_glsl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vertex.glsl */ "./components/SphereSlider/vertex.glsl");
/* harmony import */ var _jsImageCover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./jsImageCover */ "./components/SphereSlider/jsImageCover.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");







var _jsxFileName = "/Users/msi/hello-next/components/SphereSlider/SphereSlider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var SphereSlider =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SphereSlider, _React$PureComponent);

  function SphereSlider() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SphereSlider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SphereSlider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleAnimateUp", function () {
      gsap__WEBPACK_IMPORTED_MODULE_11__["default"].fromTo(_this.config, {
        offset: 0 // blend: 0,

      }, {
        offset: 1,
        // blend: 1,
        duration: _this.config.duration,
        ease: "power2"
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleAnimateDown", function () {
      gsap__WEBPACK_IMPORTED_MODULE_11__["default"].fromTo(_this.config, {
        offset: 0 // blend: 0,

      }, {
        offset: -1,
        // blend: 1,
        duration: _this.config.duration,
        ease: "power2"
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleKeyDown", function (e) {
      if (e.key === 'ArrowUp') {
        _this.handleAnimateUp();

        console.log('ArrowUp');
      }

      if (e.key === 'ArrowDown') {
        _this.handleAnimateDown();

        console.log('ArrowDown');
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMouseMove", function (e) {
      // this.rect.containse(clientX, e.clientY);
      _this.mouse.x = e.clientX / window.innerWidth * 2 - 1;
      _this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "animate", function () {
      _this.sprite.x = _this.config.x;
      _this.sprite.y = _this.config.y;
      _this.custumSmoothScrollFilter.uniforms.blend = _this.config.blend;
      _this.custumSmoothScrollFilter.uniforms.offset = _this.config.offset;
      requestAnimationFrame(_this.animate);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SphereSlider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mouse = {
        x: 0,
        y: 0
      };
      this.PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.app = new this.PIXI.Application({
        width: this.width,
        height: this.height,
        transparent: true,
        autoResize: true,
        resizeTo: window,
        resolution: 1
      });
      this.config = {
        x: this.width / 2,
        y: this.height / 2,
        blend: 0,
        offset: 0,
        duration: 2.5
      };
      this.container = new this.PIXI.Container();
      this.sprite = new this.PIXI.Sprite(this.PIXI.Texture.from('/1.jpg'));
      this.sprite.anchor.set(0.5, 0.5);
      this.sprite.x = this.config.x;
      this.sprite.y = this.config.y;
      this.sprite.width = Object(_jsImageCover__WEBPACK_IMPORTED_MODULE_10__["jsImageCover"])(this.sprite, 400, 550).width;
      this.sprite.height = Object(_jsImageCover__WEBPACK_IMPORTED_MODULE_10__["jsImageCover"])(this.sprite, 400, 550).height; // this.rect = new this.PIXI.Rectangle(0, 0, this.width, this.height);

      this.graphics = new this.PIXI.Graphics(); // Rectangle

      this.graphics.alpha = 0;
      this.graphics.beginFill(0xDE3249);
      this.graphics.drawRect(0, 0, this.width, this.height);
      this.graphics.endFill();
      this.container.addChild(this.graphics);
      this.container.addChild(this.sprite);
      this.custumSmoothScrollFilter = new this.PIXI.Filter(null, _fragment_glsl__WEBPACK_IMPORTED_MODULE_8__["default"], {
        blend: this.config.blend
      });
      this.container.filters = [this.custumSmoothScrollFilter];
      this.canvas.appendChild(this.app.view);
      this.app.stage.addChild(this.container);
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('keydown', this.handleKeyDown);
      this.animate(); // GUI //

      this.dat = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");
      this.gui = new this.dat.GUI();
      this.gui.remember(this.config);
      this.gui.add(this.config, 'blend').min(-1).max(1).step(0.001);
      ;
      this.gui.add(this.config, 'offset').min(-1).max(1).step(0.001);
      ;
      this.gui.add(this.config, 'x').min(-this.width).max(this.width * 2).step(1);
      this.gui.add(this.config, 'y').min(-this.height).max(this.height * 2).step(1);
      this.gui.add(this.config, 'duration').min(0).max(10).step(0.5); // GUI //
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        ref: function ref(node) {
          _this2.canvas = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      });
    }
  }]);

  return SphereSlider;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=text-slider.js.103cf7cf2113d9e7ab45.hot-update.js.map