(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/landing/Landing.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/landing/Landing.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue */ "./resources/src/landing/Navbar.vue");
/* harmony import */ var _Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue */ "./resources/src/landing/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: [],
  components: {
    Navbar: _Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  filters: {
    parseDate: function parseDate(value) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'MM/DD/YYYY';
      return moment(value).format(format);
    }
  },
  data: function data() {
    return {
      isLoading: false,
      location: '',
      forecast: ''
    };
  },
  created: function created() {
    this.getForecast();
  },
  methods: {
    getForecast: function getForecast() {
      var _this = this;

      this.isLoading = true;
      axios.get('/api/forecast').then(function (response) {
        _this.isLoading = false;

        if (response.data.status == "OK") {
          _this.location = response.data.location;
          _this.forecast = response.data.forecast;
        }
      })["catch"](function () {
        _this.isLoading = false;

        _this.$alert('', 'Something went wrong!', 'error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/landing/Landing.vue?vue&type=style&index=0&id=5bc2814c&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/landing/Landing.vue?vue&type=style&index=0&id=5bc2814c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.step-card[data-v-5bc2814c]{\r\n    -webkit-line-clamp: 12;\r\n    display: -webkit-box;\r\n    overflow: hidden;\r\n    -webkit-box-orient: vertical;\r\n    white-space: normal;\r\n    color: #fff;\r\n    font-weight: 600;\n}\n#landing-page .landing-card[data-v-5bc2814c] {\r\n    min-height: 300px;\n}\n#landing-page .landing-card .card-icon img[data-v-5bc2814c]{\r\n    width: 50px;\n}\n.temperature-text[data-v-5bc2814c]{\r\n    font-weight: bold;\r\n    font-size: 4rem !important;\r\n    line-height: 1 !important;\n}\n#landing-page .landing-card[data-v-5bc2814c]{\r\n    border: 2px solid rgba(0, 0, 0, 0.1);\n}\n.container-fluid[data-v-5bc2814c]{\r\n    min-height: 50vh;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/landing/Landing.vue?vue&type=style&index=0&id=5bc2814c&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/landing/Landing.vue?vue&type=style&index=0&id=5bc2814c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Landing.vue?vue&type=style&index=0&id=5bc2814c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/landing/Landing.vue?vue&type=style&index=0&id=5bc2814c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/landing/Landing.vue?vue&type=template&id=5bc2814c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/landing/Landing.vue?vue&type=template&id=5bc2814c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "landing-page" } },
    [
      _c("div", { staticClass: "app-landing bg-white" }, [_c("Navbar")], 1),
      _vm._v(" "),
      _c("div", { staticClass: "bg-primary mb-4 text-white" }, [
        _c("div", { staticClass: "landing-steps" }, [
          _vm.isLoading
            ? _c(
                "div",
                { staticClass: "container-fluid" },
                [_c("data-loader", { staticClass: "text-white" })],
                1
              )
            : _c("div", { staticClass: "container-fluid" }, [
                _c("div", { staticClass: "px-3" }, [
                  _c("h1", { staticClass: "hero-title text-white" }, [
                    _vm._v(_vm._s(_vm.location.Country.EnglishName)),
                  ]),
                  _vm._v(" "),
                  _c(
                    "h3",
                    { staticClass: "text-muted text-white font-weight-normal" },
                    [
                      _vm._v(
                        "\r\n                        " +
                          _vm._s(_vm.forecast.Headline.Text) +
                          "\r\n                    "
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row justify-content-center mt-4" },
                  _vm._l(
                    _vm.forecast.DailyForecasts.slice(0, 3),
                    function (f, i) {
                      return _c("div", { staticClass: "col-lg-4 col-md-6" }, [
                        _c("div", { staticClass: "landing-card" }, [
                          _c("div", { staticClass: "card-icon" }, [
                            _c("div", [
                              _c("span", [
                                _c("img", {
                                  staticClass: "h-5 w-5",
                                  attrs: {
                                    src:
                                      "https://www.accuweather.com/images/weathericons/" +
                                      f.Day.Icon +
                                      ".svg",
                                  },
                                }),
                              ]),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "text-xs uppercase text-white" },
                                [_vm._v(_vm._s(f.Day.IconPhrase))]
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-label" }, [
                            _c(
                              "h3",
                              { staticClass: "font-weight-bold text-white" },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("parseDate")(
                                      f.Date,
                                      "dddd MMM DD, yyyy"
                                    )
                                  )
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "h1",
                              { staticClass: "text-white temperature-text" },
                              [
                                _vm._v(
                                  _vm._s(f.Temperature.Maximum.Value) + "°F"
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "h5",
                              {
                                staticClass:
                                  "text-muted text-white font-weight-normal step-card",
                              },
                              [
                                _c("a", { attrs: { href: f.Link } }, [
                                  _vm._v("Learn More"),
                                ]),
                              ]
                            ),
                          ]),
                        ]),
                      ])
                    }
                  ),
                  0
                ),
              ]),
        ]),
      ]),
      _vm._v(" "),
      _c("Footer"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/landing/Landing.vue":
/*!*******************************************!*\
  !*** ./resources/src/landing/Landing.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Landing_vue_vue_type_template_id_5bc2814c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Landing.vue?vue&type=template&id=5bc2814c&scoped=true& */ "./resources/src/landing/Landing.vue?vue&type=template&id=5bc2814c&scoped=true&");
/* harmony import */ var _Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing.vue?vue&type=script&lang=js& */ "./resources/src/landing/Landing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Landing_vue_vue_type_style_index_0_id_5bc2814c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Landing.vue?vue&type=style&index=0&id=5bc2814c&scoped=true&lang=css& */ "./resources/src/landing/Landing.vue?vue&type=style&index=0&id=5bc2814c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Landing_vue_vue_type_template_id_5bc2814c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Landing_vue_vue_type_template_id_5bc2814c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5bc2814c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/landing/Landing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/landing/Landing.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/src/landing/Landing.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Landing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/landing/Landing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/landing/Landing.vue?vue&type=style&index=0&id=5bc2814c&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/src/landing/Landing.vue?vue&type=style&index=0&id=5bc2814c&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_5bc2814c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Landing.vue?vue&type=style&index=0&id=5bc2814c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/landing/Landing.vue?vue&type=style&index=0&id=5bc2814c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_5bc2814c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_5bc2814c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_5bc2814c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_style_index_0_id_5bc2814c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/src/landing/Landing.vue?vue&type=template&id=5bc2814c&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/src/landing/Landing.vue?vue&type=template&id=5bc2814c&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_5bc2814c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Landing.vue?vue&type=template&id=5bc2814c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/landing/Landing.vue?vue&type=template&id=5bc2814c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_5bc2814c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Landing_vue_vue_type_template_id_5bc2814c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);