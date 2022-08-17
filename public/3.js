(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/certifications/Certificate.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/certifications/Certificate.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var qrcode_vue_dist_qrcode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrcode.vue/dist/qrcode.vue */ "./node_modules/qrcode.vue/dist/qrcode.vue.js");
/* harmony import */ var qrcode_vue_dist_qrcode_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qrcode_vue_dist_qrcode_vue__WEBPACK_IMPORTED_MODULE_0__);
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
  props: ['_booking', '_qrcode', '_isFixed'],
  components: {
    QrcodeVue: qrcode_vue_dist_qrcode_vue__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  computed: {
    getCtrlNo: function getCtrlNo() {
      // return moment(this._booking.active_schedule.schedule_date).format("YYYY-MM-")+this._booking.control_no;
      return this._booking.specimen.control_no;
    },
    getIssued: function getIssued() {// return moment(this._booking.active_schedule.schedule_date).format("YYYY-MM-")+this._booking.control_no;
      // return moment(this._booking.specimen.result_datetime).format('YYYY-MM-DD hh:mm A').toUpperCase();
    },
    getDTNow: function getDTNow() {
      return moment().format("DD MMM YYYY hh:mm A").toUpperCase();
    },
    getMonthYear: function getMonthYear() {
      return moment().format("MMMYYYY");
    }
  },
  filters: {
    parseDate: function parseDate(value) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "MM/DD/YYYY";
      return moment(value).format(format).toUpperCase();
    },
    parseTime: function parseTime(value) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hh:mm A";
      return moment(moment().format('YYYY-MM-DD') + ' ' + value).format(format).toUpperCase();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/certifications/Certificate.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/certifications/Certificate.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.bottom-fix.fixed {\r\n    position: absolute;\r\n    bottom: 20px;\r\n    width: 90%;\n}\n.esig-container{\r\n    position:relative;\r\n    display:flex;\r\n    align-items: flex-start;\r\n    justify-content: center;\n}\n.esig {\r\n    position: absolute;\r\n    width: 100px;\r\n    top: -50px;\n}\nh5{\r\n    font-weight: normal;\n}\nh4{\r\n    margin-bottom: 20px;\n}\n.cert-body.fixed{\r\n    width: 820px;\r\n    height: 1344px;\n}\n.img-certs{\r\n    display: flex;\n}\n.cert-body{\r\n    background-image: url('/imgs/cert-bg.png');\r\n    background-size: 100% 100%;\n}\n@media (max-width:1000px) {\n.header-img{\r\n        width:300px !important;\n}\n.img-certs{\r\n        display: block !important;\n}\n.img-certs img {\r\n        margin-bottom: 2px !important;\n}\n.cert-body{\r\n        background-image: url('/imgs/cert-bg-half.png');\r\n        background-size: 100% 100%;\n}\n.cert-body.fixed{\r\n        width: 820px;\r\n        height: 1343px;\n}\n}\n@media (max-width:2000px) {\n.header-img{\r\n        width:450px !important;\n}\n}\n@media (min-width:2000px) {\n.header-img{\r\n        width:500px !important;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/certifications/Certificate.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/certifications/Certificate.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Certificate.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/certifications/Certificate.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/certifications/Certificate.vue?vue&type=template&id=60140e24&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/certifications/Certificate.vue?vue&type=template&id=60140e24& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "card-body px-5 cert-body",
      class: _vm._isFixed ? "fixed" : "",
      staticStyle: { position: "relative" },
    },
    [
      _c("div", { staticClass: "text-center" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "h1",
          {
            staticClass: "text-primary mb-0",
            class: _vm._isFixed ? "mt-5" : "mt-5",
            staticStyle: { "font-weight": "800", "font-family": "Helvetica" },
          },
          [_vm._v("\n            LABORATORY RESULT FORM\n        ")]
        ),
        _vm._v(" "),
        _c(
          "h1",
          {
            staticClass: "text-primary mb-4",
            staticStyle: { "font-weight": "800", "font-family": "Helvetica" },
          },
          [_vm._v("\n            AND CERTIFICATION\n        ")]
        ),
        _vm._v(" "),
        _c("h5", { staticClass: "text-muted" }, [
          _vm._v("This is to confirm status for"),
        ]),
        _vm._v(" "),
        _c(
          "h1",
          {
            staticClass: "mb-2 mt-3",
            staticStyle: { "font-weight": "800", "font-family": "Helvetica" },
          },
          [
            _vm._v(
              "\n            " + _vm._s(_vm._booking.full_name) + "\n        "
            ),
          ]
        ),
        _vm._v(" "),
        _c("h5", { staticClass: "mb-1 text-uppercase font-weight-bold" }, [
          _vm._v(
            _vm._s(_vm._booking.age) +
              " | " +
              _vm._s(
                _vm._booking.sex == "F"
                  ? "FEMALE"
                  : _vm._booking.sex == "M"
                  ? "MALE"
                  : ""
              )
          ),
        ]),
        _vm._v(" "),
        _c(
          "h5",
          {
            staticClass: "text-uppercase font-weight-bold",
            class: _vm._isFixed ? "mb-4" : "mb-5",
          },
          [_vm._v(_vm._s(_vm._booking.address))]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass: "col-lg-6 col-md-6 row mx-0",
            class: _vm._isFixed ? "col-6 px-1" : "col-sm-12",
          },
          [
            _c(
              "div",
              {
                staticClass: "col-lg-6 col-md-6",
                class: _vm._isFixed ? "col-6 px-1" : "col-sm-6 col-6",
              },
              [
                _c("h5", { staticClass: "text-muted" }, [_vm._v("Birthdate")]),
                _vm._v(" "),
                _c("h4", [
                  _vm._v(
                    _vm._s(
                      _vm._f("parseDate")(
                        _vm._booking.birth_date,
                        "DD MMM YYYY"
                      )
                    )
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-lg-6 col-md-6",
                class: _vm._isFixed ? "col-6 px-1" : "col-sm-6 col-6",
              },
              [
                _c("h5", { staticClass: "text-muted" }, [
                  _vm._v("Requesting Facility"),
                ]),
                _vm._v(" "),
                _c("h4", [_vm._v("PHO CAMSUR")]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-lg-6 col-md-6",
                class: _vm._isFixed ? "col-6 px-1" : "col-sm-6 col-6",
              },
              [
                _c("h5", { staticClass: "text-muted" }, [_vm._v("Remarks")]),
                _vm._v(" "),
                _c("h4", [_vm._v(_vm._s(_vm._booking.specimen.swab_no))]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-lg-6 col-md-6",
                class: _vm._isFixed ? "col-6 px-1" : "col-sm-6 col-6",
              },
              [
                _c("h5", { staticClass: "text-muted" }, [
                  _vm._v("Contact Number"),
                ]),
                _vm._v(" "),
                _c("h4", [_vm._v(_vm._s(_vm._booking.mobile_no))]),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-lg-6 col-md-6 row mx-0",
            class: _vm._isFixed ? "col-6 px-1" : "col-sm-12",
          },
          [
            _c(
              "div",
              {
                staticClass: "col-lg-6 col-md-6",
                class: _vm._isFixed ? "col-6 px-1" : "col-sm-6 col-6",
              },
              [
                _c("h5", { staticClass: "text-muted" }, [
                  _vm._v("Specimen No."),
                ]),
                _vm._v(" "),
                _vm._booking.specimen && _vm._booking.specimen.worklist_specimen
                  ? _c("h4", [
                      _vm._v(
                        _vm._s(
                          _vm._booking.specimen.worklist_specimen.specimen_no
                        )
                      ),
                    ])
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-lg-6 col-md-6",
                class: _vm._isFixed ? "col-6 px-1" : "col-sm-6 col-6",
              },
              [
                _c("h5", { staticClass: "text-muted" }, [
                  _vm._v("Date & Time Received"),
                ]),
                _vm._v(" "),
                _vm._booking.specimen && _vm._booking.specimen.worklist_specimen
                  ? _c("h4", [
                      _vm._v(
                        _vm._s(
                          _vm._f("parseDate")(
                            _vm._booking.specimen.worklist_specimen
                              .performed_date,
                            "DD MMM YYYY hh:mm a"
                          )
                        )
                      ),
                    ])
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-lg-6 col-md-6",
                class: _vm._isFixed ? "col-6 px-1" : "col-sm-6 col-6",
              },
              [
                _c("h5", { staticClass: "text-muted" }, [
                  _vm._v("Date & Time Collected"),
                ]),
                _vm._v(" "),
                _vm._booking.specimen
                  ? _c("h4", [
                      _vm._v(
                        _vm._s(
                          _vm._f("parseDate")(
                            _vm._booking.specimen.date_collected,
                            "DD MMM YYYY"
                          )
                        ) +
                          " " +
                          _vm._s(
                            _vm._f("parseTime")(
                              _vm._booking.specimen.time_collected,
                              "hh:mm a"
                            )
                          )
                      ),
                    ])
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-lg-6 col-md-6",
                class: _vm._isFixed ? "col-6 px-1" : "col-sm-6 col-6",
              },
              [
                _c("h5", { staticClass: "text-muted" }, [
                  _vm._v("Date & Time Released"),
                ]),
                _vm._v(" "),
                _vm._booking.specimen && _vm._booking.specimen.worklist_specimen
                  ? _c("h4", [
                      _vm._v(
                        _vm._s(
                          _vm._f("parseDate")(
                            _vm._booking.specimen.worklist_specimen
                              .approved_date,
                            "DD MMM YYYY hh:mm a"
                          )
                        )
                      ),
                    ])
                  : _vm._e(),
              ]
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row mt-2", class: _vm._isFixed ? "mx-0" : "mx-1" },
        [
          _c(
            "div",
            {
              staticClass: "col-lg-9 col-md-7",
              class: _vm._isFixed ? "col-9 px-1" : "col-sm-12",
            },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-lg-7 col-md-7",
                    class: _vm._isFixed ? "col-7 px-1" : "col-sm-12",
                  },
                  [
                    _c("h5", { staticClass: "text-muted" }, [
                      _vm._v("Laboratory Test Performed"),
                    ]),
                    _vm._v(" "),
                    _c("h4", [
                      _vm._v(
                        "SARS-CoV-2 RNA-PCR Test Qualitative Detection by Real-Time PCR"
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-lg-5 col-md-5",
                    class: _vm._isFixed ? "col-5 px-1" : "col-sm-12",
                  },
                  [
                    _c("h5", { staticClass: "text-muted" }, [
                      _vm._v("Specimen"),
                    ]),
                    _vm._v(" "),
                    _c("h4", [
                      _vm._v(
                        "\n                        OROPHARYNGEAL / NASOPHARYNGEAL SWAB\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-2" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-lg-12",
                    class: _vm._isFixed ? "px-1" : "",
                  },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._booking.specimen.worklist_specimen.status == 1
                      ? _c("h3", { staticClass: "text-danger" }, [
                          _vm._v(
                            "SARS-CoV-2 ( causative agent of Covid-19 ) viral RNA detected"
                          ),
                        ])
                      : _vm._booking.specimen.worklist_specimen.status == 2
                      ? _c("h3", { staticClass: "text-success" }, [
                          _vm._v(
                            "SARS-CoV-2 ( causative agent of Covid-19 ) viral RNA NOT detected"
                          ),
                        ])
                      : _c("h3", {}, [_vm._v("INVALID TEST")]),
                  ]
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "text-center col-lg-3 col-md-5",
              class: _vm._isFixed ? "col-3 px-1" : "col-sm-12",
            },
            [
              _c("h5", { staticClass: "text-muted" }, [
                _vm._v("Authenticity Verification"),
              ]),
              _vm._v(" "),
              _c(
                "h4",
                { staticClass: "mb-1" },
                [
                  _c("qrcode-vue", {
                    staticClass: "download-qr",
                    attrs: { value: _vm._qrcode, size: 125, level: "M" },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-lg-12",
                  class: _vm._isFixed ? "col-12" : "col-sm-12",
                },
                [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("h4", { staticClass: "mb-1" }, [
                    _c("strong", [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.getCtrlNo) +
                          "\n                    "
                      ),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-lg-12",
                  class: _vm._isFixed ? "col-12" : "col-sm-12",
                },
                [
                  _vm._m(4),
                  _vm._v(" "),
                  _c("h4", { staticClass: "mb-1" }, [
                    _vm._booking.specimen &&
                    _vm._booking.specimen.worklist_specimen
                      ? _c(
                          "strong",
                          { staticStyle: { "font-size": ".7rem" } },
                          [
                            _vm._v(
                              "\n                    " +
                                _vm._s(
                                  _vm._f("parseDate")(
                                    _vm._booking.specimen.worklist_specimen
                                      .approved_date,
                                    "DD MMM YYYY hh:mm a"
                                  )
                                ) +
                                "\n                    "
                            ),
                          ]
                        )
                      : _vm._e(),
                  ]),
                ]
              ),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c("hr", {
        staticClass: "mt-0 mb-2",
        class: _vm._isFixed ? "mx--2" : "mx-1",
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row", class: _vm._isFixed ? "mx--2" : "mx-1" },
        [
          _c(
            "div",
            {
              staticClass: "col-lg-12",
              class: _vm._isFixed ? "col-12 px-1" : "col-sm-12",
            },
            [
              _c("h5", { staticClass: "text-muted" }, [
                _vm._v(
                  "\n                INTERPRETATION OF RESULT :\n            "
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _vm._booking.specimen.worklist_specimen.status == 1
            ? [
                _c(
                  "div",
                  {
                    staticClass: "col-lg-12",
                    class: _vm._isFixed ? "col-12 px-1" : "col-12",
                  },
                  [
                    _c(
                      "h5",
                      {
                        staticClass: "text-danger font-weight-bold",
                        staticStyle: { "line-height": "1.20" },
                      },
                      [
                        _vm._v(
                          "\n                    POSITIVE for SARS-CoV-2 ( causative agent of Covid-19 )\n                "
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            : _vm._booking.specimen.worklist_specimen.status == 2
            ? [
                _c(
                  "div",
                  {
                    staticClass: "col-lg-12",
                    class: _vm._isFixed ? "col-12 px-1" : "col-12",
                  },
                  [
                    _c(
                      "h5",
                      {
                        staticClass: "text-success font-weight-bold",
                        staticStyle: { "line-height": "1.20" },
                      },
                      [
                        _vm._v(
                          "\n                    NEGATIVE for SARS-CoV-2 ( causative agent of Covid-19 )\n                "
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            : [
                _c(
                  "div",
                  {
                    staticClass: "col-lg-12",
                    class: _vm._isFixed ? "col-12 px-1" : "col-12",
                  },
                  [
                    _c("h5", { staticStyle: { "line-height": "1.20" } }, [
                      _vm._v(
                        "\n                    Negative for test internal control (most likely due to poor specimen quality)\n                "
                      ),
                    ]),
                  ]
                ),
              ],
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row mt-3", class: _vm._isFixed ? "mx--2" : "mx-1" },
        [
          _c(
            "div",
            {
              staticClass: "col-lg-6 col-md-6",
              class: _vm._isFixed ? "col-6 px-1" : "col-sm-12",
            },
            [_vm._m(5)]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-6 col-md-6",
              class: _vm._isFixed ? "col-6 px-1" : "col-sm-12",
            },
            [_vm._m(6)]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-12 col-md-12",
              class: _vm._isFixed ? "col-12 px-1" : "col-sm-12",
            },
            [_vm._m(7)]
          ),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-4 justify-content-between mx-4" }, [
        _vm._booking.specimen &&
        _vm._booking.specimen.worklist_specimen &&
        _vm._booking.specimen.worklist_specimen.performedby
          ? _c(
              "div",
              {
                staticClass: "col-md-4 d-flex flex-column align-items-center",
                class: _vm._isFixed ? "col-4" : "col-sm-12",
              },
              [
                _c(
                  "h5",
                  {
                    staticClass: "text-muted align-self-start",
                    class: !_vm._isFixed ? "ml-4" : "",
                  },
                  [_vm._v("Performed By :")]
                ),
                _vm._v(" "),
                _c("h4", { staticClass: "mt-3 mb-2" }, [
                  _c("strong", [
                    _vm._v(
                      _vm._s(
                        _vm._booking.specimen.worklist_specimen.performedby
                          .full_name
                      )
                    ),
                  ]),
                  _vm._v(" "),
                  _vm._booking.specimen.worklist_specimen.performedby.esig
                    ? _c("div", { staticClass: "esig-container" }, [
                        _c("img", {
                          staticClass: "esig",
                          attrs: {
                            src: _vm._booking.specimen.worklist_specimen
                              .performedby.esig,
                            alt: "",
                            height: "50",
                          },
                        }),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "text-muted mb-1" }, [
                  _c("strong", [
                    _vm._v(
                      _vm._s(
                        _vm._booking.specimen.worklist_specimen.performedby
                          .designation
                      )
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "text-muted" }, [
                  _vm._v("PRC ID : "),
                  _c("strong", [
                    _vm._v(
                      _vm._s(
                        _vm._booking.specimen.worklist_specimen.performedby
                          .prcid_no
                      )
                    ),
                  ]),
                ]),
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm._booking.specimen &&
        _vm._booking.specimen.worklist_specimen &&
        _vm._booking.specimen.worklist_specimen.validatedby
          ? _c(
              "div",
              {
                staticClass: "col-md-4 d-flex flex-column align-items-center",
                class: _vm._isFixed ? "col-4" : "col-sm-12",
              },
              [
                _c(
                  "h5",
                  {
                    staticClass: "text-muted align-self-start",
                    class: !_vm._isFixed ? "ml-4" : "",
                  },
                  [_vm._v("Verified By :")]
                ),
                _vm._v(" "),
                _c("h4", { staticClass: "mt-3 mb-2" }, [
                  _c("strong", [
                    _vm._v(
                      _vm._s(
                        _vm._booking.specimen.worklist_specimen.validatedby
                          .full_name
                      )
                    ),
                  ]),
                  _vm._v(" "),
                  _vm._booking.specimen.worklist_specimen.validatedby.esig
                    ? _c("div", { staticClass: "esig-container" }, [
                        _c("img", {
                          staticClass: "esig",
                          attrs: {
                            src: _vm._booking.specimen.worklist_specimen
                              .validatedby.esig,
                            alt: "",
                            height: "50",
                          },
                        }),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _vm._booking.specimen &&
                _vm._booking.specimen.worklist_specimen &&
                _vm._booking.specimen.worklist_specimen.validatedby
                  ? _c("h5", { staticClass: "text-muted mb-1" }, [
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm._booking.specimen.worklist_specimen.validatedby
                              .designation
                          )
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm._booking.specimen &&
                _vm._booking.specimen.worklist_specimen &&
                _vm._booking.specimen.worklist_specimen.validatedby
                  ? _c("h5", { staticClass: "text-muted" }, [
                      _vm._v("PRC ID : "),
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm._booking.specimen.worklist_specimen.validatedby
                              .prcid_no
                          )
                        ),
                      ]),
                    ])
                  : _vm._e(),
              ]
            )
          : _vm._e(),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-center mt-0" }, [
        _vm._booking.specimen &&
        _vm._booking.specimen.worklist_specimen &&
        _vm._booking.specimen.worklist_specimen.approvedby
          ? _c(
              "div",
              {
                staticClass:
                  "col-lg-4 col-md-4 d-flex flex-column align-items-center mt-3",
                class: _vm._isFixed ? "col-6" : "col-sm-12",
              },
              [
                _c(
                  "h5",
                  {
                    staticClass: "text-muted align-self-start",
                    class: !_vm._isFixed ? "ml-4" : "",
                  },
                  [_vm._v("Approved By :")]
                ),
                _vm._v(" "),
                _c("h4", { staticClass: "mt-4 mb-2" }, [
                  _c("strong", [
                    _vm._v(
                      _vm._s(
                        _vm._booking.specimen.worklist_specimen.approvedby
                          .full_name
                      )
                    ),
                  ]),
                  _vm._v(" "),
                  _vm._booking.specimen.worklist_specimen.approvedby.esig
                    ? _c("div", { staticClass: "esig-container" }, [
                        _c("img", {
                          staticClass: "esig",
                          staticStyle: { top: "-60px !important" },
                          attrs: {
                            src: _vm._booking.specimen.worklist_specimen
                              .approvedby.esig,
                            alt: "",
                            height: "50",
                          },
                        }),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _vm._booking.specimen &&
                _vm._booking.specimen.worklist_specimen &&
                _vm._booking.specimen.worklist_specimen.approvedby
                  ? _c("h5", { staticClass: "text-muted mb-1" }, [
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm._booking.specimen.worklist_specimen.approvedby
                              .designation
                          )
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm._booking.specimen &&
                _vm._booking.specimen.worklist_specimen &&
                _vm._booking.specimen.worklist_specimen.approvedby
                  ? _c("h5", { staticClass: "text-muted" }, [
                      _vm._v("PRC ID : "),
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm._booking.specimen.worklist_specimen.approvedby
                              .prcid_no
                          )
                        ),
                      ]),
                    ])
                  : _vm._e(),
              ]
            )
          : _vm._e(),
      ]),
      _vm._v(" "),
      _c("div", { class: _vm._isFixed ? "bottom-fix fixed" : "" }, [
        _c("hr", { staticClass: "my-2" }),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-lg-2 col-md-2 text-center",
              class: _vm._isFixed ? "col-2" : "col-sm-12",
            },
            [_vm._m(8)]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-4 col-md-4 text-center",
              class: _vm._isFixed ? "col-4" : "col-sm-12",
            },
            [_vm._m(9)]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-3 col-md-3 text-center",
              class: _vm._isFixed ? "col-3" : "col-sm-12",
            },
            [_vm._m(10)]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-3 col-md-3 text-center",
              class: _vm._isFixed ? "col-3" : "col-sm-12",
            },
            [
              _c("h6", { staticClass: "mb-1" }, [
                _c("strong", [
                  _c("i", {
                    staticClass: "text-primary fa fa-map-marker-alt mr-1",
                  }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm._booking.laboratory.address) +
                      ", Philippines\n                    "
                  ),
                ]),
              ]),
            ]
          ),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "justify-content-center img-certs" }, [
      _c("img", {
        staticClass: "mx-2 my-0 header-img",
        staticStyle: { "max-width": "70%" },
        attrs: { src: "/imgs/cert-header.png" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("strong", [
      _c("h5", { staticClass: "mt-0 text-uppercase font-weight-bold" }, [
        _vm._v("Operated By: Province of Camarines Sur"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticStyle: { "line-height": "1.20" } }, [
      _c("strong", [_vm._v("Final Result")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mb-1" }, [
      _c("strong", [
        _vm._v("\n                    Control No.\n                    "),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mb-1" }, [
      _c("strong", [
        _vm._v(
          "\n                    Certificate Issued\n                    "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h5",
      { staticStyle: { "line-height": "1.20", "text-align": "justify" } },
      [
        _c("strong", [_vm._v("Methodology")]),
        _vm._v(
          " : RNA extraction was performed and SARS-CoV-2 N, E and RdRp Gene PCR amplication and detection were done with Real-Time PCR analysis, with positive and negative controls included in each run to confirm validity and accuracy.\n            "
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h5",
      { staticStyle: { "line-height": "1.20", "text-align": "justify" } },
      [
        _c("strong", [_vm._v("Limitations")]),
        _vm._v(
          " : The detection of a mutation is dependent on the number of copies present in the specimen that can be detected, and may be affected by sample integrity, amount of isolated RNA, the presence of interfering substances or inhibitors and processing.\n            "
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h5",
      {
        staticClass: "mt-2",
        staticStyle: { "line-height": "1.20", "text-align": "justify" },
      },
      [
        _c("strong", [_vm._v("Note")]),
        _vm._v(
          " : This laboratory result should be interpreted together with available clinical and epidemiological information.\n            "
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mb-1" }, [
      _c("strong", [
        _c("i", { staticClass: "text-primary fa fa-phone mr-1" }),
        _vm._v("\n                    +63998-965-5949\n                    "),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mb-1" }, [
      _c("strong", [
        _c("i", { staticClass: "text-primary fa fa-envelope mr-1" }),
        _vm._v(
          "\n                    info@camsurdiagnosticlab.com\n                    "
        ),
        _c("br"),
        _vm._v(
          "\n                    camsurdiagnosticlaboratory@gmail.com\n                    "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mb-1" }, [
      _c("strong", [
        _c("i", { staticClass: "text-primary fa fa-globe mr-1" }),
        _vm._v(
          "\n                    camsurdiagnosticlab.com\n                    "
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/certifications/Certificate.vue":
/*!******************************************************!*\
  !*** ./resources/src/certifications/Certificate.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Certificate_vue_vue_type_template_id_60140e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Certificate.vue?vue&type=template&id=60140e24& */ "./resources/src/certifications/Certificate.vue?vue&type=template&id=60140e24&");
/* harmony import */ var _Certificate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Certificate.vue?vue&type=script&lang=js& */ "./resources/src/certifications/Certificate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Certificate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Certificate.vue?vue&type=style&index=0&lang=css& */ "./resources/src/certifications/Certificate.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Certificate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Certificate_vue_vue_type_template_id_60140e24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Certificate_vue_vue_type_template_id_60140e24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/certifications/Certificate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/certifications/Certificate.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/src/certifications/Certificate.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Certificate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Certificate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/certifications/Certificate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Certificate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/certifications/Certificate.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/src/certifications/Certificate.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Certificate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Certificate.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/certifications/Certificate.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Certificate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Certificate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Certificate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Certificate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/src/certifications/Certificate.vue?vue&type=template&id=60140e24&":
/*!*************************************************************************************!*\
  !*** ./resources/src/certifications/Certificate.vue?vue&type=template&id=60140e24& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Certificate_vue_vue_type_template_id_60140e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Certificate.vue?vue&type=template&id=60140e24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/certifications/Certificate.vue?vue&type=template&id=60140e24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Certificate_vue_vue_type_template_id_60140e24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Certificate_vue_vue_type_template_id_60140e24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);