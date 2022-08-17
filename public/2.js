(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/SchedulePreview.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/SchedulePreview.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['laboratory', 'service'],
  data: function data() {
    return {
      range: [],
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      current_date: moment(),
      isLoading: true
    };
  },
  mounted: function mounted() {
    this.getRange();
    this.getAvailablity();
  },
  methods: {
    nextMonth: function nextMonth() {
      this.isLoading = true;
      this.current_date = moment(this.current_date).add(1, 'month').startOf('month');
      this.getRange();
      this.getAvailablity();
    },
    prevMonth: function prevMonth() {
      this.isLoading = true;
      this.current_date = moment(this.current_date).subtract(1, 'month').startOf('month');
      this.getRange();
      this.getAvailablity();
    },
    nextWeek: function nextWeek() {
      this.isLoading = true;
      this.current_date = moment(this.range[this.range.length - 1]).add(1, 'day').startOf('week');
      this.getRange();
      this.getAvailablity();
    },
    prevWeek: function prevWeek() {
      this.isLoading = true;
      this.current_date = moment(this.range[0]).subtract(1, 'day').startOf('week');
      this.getRange();
      this.getAvailablity();
    },
    getRange: function getRange() {
      var startWeek = this.current_date.startOf('week');
      this.range = [];
      this.range.push(startWeek.format('YYYY-MM-DD'));

      for (var i = 0; i < 6; i++) {
        this.range.push(startWeek.add(1, 'days').format('YYYY-MM-DD'));
      }
    },
    hasTimeslot: function hasTimeslot(slot, index) {
      return slot.day.includes(index.toString());
    },
    checkBookings: function checkBookings(slot, date, time) {
      if (!slot.bookings) {
        return true;
      }

      var bookings = slot.bookings.filter(function (i) {
        return i.schedule_date == date && i.time == time;
      });
      return bookings.length < slot.max;
    },
    getAvailablity: _.debounce(function () {
      var _this = this;

      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.laboratory.id;
      this.isLoading = true;
      axios.get('/timeslots/availability/' + id, {
        params: {
          range: this.range,
          service_id: this.service.id
        }
      }).then(function (response) {
        _this.isLoading = false;

        if (response.data.status == "OK") {
          _this.laboratory.timeslots = response.data.data;
        }
      })["catch"](function () {
        _this.isLoading = false;

        _this.$alert("", "Something went wrong. Please refresh the page or try again later.");
      });
    }, 1000),
    checkDate: function checkDate(date) {
      return moment(date).diff(moment(), 'days');
    },
    checkTime: function checkTime(slot, date) {
      return moment(date + ' ' + slot.time).diff(moment(), 'time');
    },
    bookingSchedule: function bookingSchedule(slot, index) {
      var _this2 = this;

      this.$confirm('', 'Are you sure you want to book a schedule for ' + this.service.name + ' on ' + moment(this.range[index] + ' ' + slot.time).format("LLL (ddd)") + ' in ' + this.laboratory.name + '?', 'question').then(function () {
        window.location.href = "/book/" + _this2.service.code + "?date=" + _this2.range[index] + "&time=" + slot.time + '&laboratory_id=' + _this2.laboratory.id;
      });
    }
  },
  filters: {
    parseDate: function parseDate(date) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "LLL";
      return moment(date).format(format);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/ServiceCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/ServiceCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['service', 'index', 'showButton'],
  methods: {
    bookService: function bookService() {
      if (this.showButton) window.location.href = "/book/" + this.service.code;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/MyBookings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/user/MyBookings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Pagination_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination.vue */ "./resources/src/components/Pagination.vue");
/* harmony import */ var _BookCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookCard.vue */ "./resources/src/user/BookCard.vue");
/* harmony import */ var _ScheduleModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScheduleModal.vue */ "./resources/src/user/ScheduleModal.vue");
/* harmony import */ var _CancelBooking_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CancelBooking.vue */ "./resources/src/user/CancelBooking.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['_services', '_auth', '_laboratories'],
  components: {
    Pagination: _components_Pagination_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BookCard: _BookCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ScheduleModal: _ScheduleModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    CancelBooking: _CancelBooking_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      page: 1,
      bookings: '',
      filters: {
        keywords: '',
        sort: 'created_at',
        sort_type: 'DESC',
        with_schedule: 1,
        with_preferred_date: '',
        service_id: '',
        paginate: 25
      },
      isLoading: false,
      view_mode: 'card'
    };
  },
  created: function created() {},
  mounted: function mounted() {
    var urlQuery = new URL(window.location.href);
    if (urlQuery.searchParams.get("page")) this.page = urlQuery.searchParams.get("page");
    if (urlQuery.searchParams.get("keywords")) this.filters.keywords = urlQuery.searchParams.get("keywords");
    if (urlQuery.searchParams.get("sort")) this.filters.sort = urlQuery.searchParams.get("sort");
    if (urlQuery.searchParams.get("sort_type")) this.filters.sort_type = urlQuery.searchParams.get("sort_type");
    this.getBookings();
  },
  filters: {
    parseDate: function parseDate(value) {
      return moment(value).format('MM/DD/YYYY');
    }
  },
  methods: {
    setSorting: function setSorting(sort) {
      this.filters.sort_type = sort;
      this.getBookings();
    },
    cancel: function cancel(booking) {
      this.$refs.cancelModal.open(booking);
    },
    viewBooking: function viewBooking(code) {
      window.location.href = "/bookings/" + code;
    },
    schedule: function schedule() {
      var booking = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var rebook = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.$refs.schedModal.open(booking, rebook);
    },
    getBookings: function getBookings() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.page = page;
      this.bookings = '';
      this.isLoading = true;
      window.history.pushState(null, "", window.location.pathname + '?page=' + page + '&keywords=' + this.filters.keywords + '&sort=' + this.filters.sort + '&sort_type=' + this.filters.sort_type);
      this.filters.paginate = this.view_mode == 'list' ? 25 : 5;
      axios.get('/booking-list?page=' + page, {
        params: this.filters
      }).then(function (response) {
        _this.isLoading = false;

        if (response.data.status == "OK") {
          _this.bookings = response.data.data;
        }
      })["catch"](function () {
        _this.isLoading = false;

        _this.$alert('', 'Something went wrong', 'error');
      });
    },
    scheduleBooking: function scheduleBooking(data) {
      var _this2 = this;

      // if user 
      if (this._auth.role_id == 2) {
        this.$confirm('', 'Are you sure you want to rebook your ' + data.booking.service.name + ' on ' + moment(data.schedule.date).format('LL') + ' ' + data.schedule.time + ' ?', 'question').then(function () {
          _this2.$loader.show();

          axios.post('/schedule-rebooking', {
            booking_id: data.booking.id,
            schedule_date: data.schedule.date,
            schedule_time: data.schedule.time,
            driver_id: data.schedule.driver_id,
            laboratory_id: data.schedule.laboratory_id
          }).then(function (response) {
            _this2.$loader.hide();

            if (response.data.status == "OK") {
              _this2.$alert('', 'Rebooking was successfully filed on ' + moment(data.schedule.date).format('LL') + ' ' + data.schedule.time + ' for ' + data.booking.service.name, 'success');

              $("#bookingModal").modal('hide');

              _this2.getBookings();
            }
          })["catch"](function () {
            _this2.$loader.hide();

            _this2.$alert('', 'Something went wrong', 'error');
          });
        });
      } else {
        this.$confirm('', 'Are you sure you want to set ' + data.booking.full_name + ' schedule on ' + moment(data.schedule.date).format('LL') + ' ' + data.schedule.time + ' at ' + data.laboratory.name + ' for ' + data.booking.service.name + '?', 'question').then(function () {
          _this2.$loader.show();

          axios.post('/schedule-booking', {
            booking_id: data.booking.id,
            schedule_date: data.schedule.date,
            schedule_time: data.schedule.time,
            driver_id: data.schedule.driver_id,
            laboratory_id: data.schedule.laboratory_id
          }).then(function (response) {
            _this2.$loader.hide();

            if (response.data.status == "OK") {
              _this2.$alert('', 'Booking was successfully scheduled on ' + moment(data.schedule.date).format('LL') + ' ' + data.schedule.time + ' for ' + data.booking.service.name, 'success');

              $("#bookingModal").modal('hide');

              _this2.getBookings();
            }
          })["catch"](function () {
            _this2.$loader.hide();

            _this2.$alert('', 'Something went wrong', 'error');
          });
        });
      }
    },
    cancelBooking: function cancelBooking(data) {
      var _this3 = this;

      var message = this._auth.role_id == 2 ? 'Are you sure you want to cancel your booking for ' + data.booking.service.name + '?' : 'Are you sure you want to cancel ' + data.booking.full_name + ' booking for ' + data.booking.service.name + '?';
      this.$confirm('', message, 'question').then(function () {
        _this3.$loader.show();

        axios.post('/cancel-booking', {
          booking_id: data.booking.id
        }).then(function (response) {
          _this3.$loader.hide();

          if (response.data.status == "OK") {
            _this3.$alert('', 'Booking was cancelled', 'success');

            $("#cancelBooking").modal('hide');

            _this3.getBookings();
          }
        })["catch"](function () {
          _this3.$loader.hide();

          _this3.$alert('', 'Something went wrong', 'error');
        });
      });
    },
    scheduleAll: function scheduleAll(data) {
      var _this4 = this;

      this.$confirm('', 'Are you sure you want to set these people schedule on ' + moment(data.schedule.date).format('LL') + ' for ' + data.booking.service.name + '?', 'question').then(function () {
        _this4.$loader.show();

        axios.post('/schedule-all', {
          filters: _this4.filters,
          schedule_date: data.schedule.date
        }).then(function (response) {
          _this4.$loader.hide();

          if (response.data.status == "OK") {
            _this4.$alert('', 'Booking was successfully scheduled on ' + moment(data.schedule.date).format('LL') + '!', 'success');

            $("#bookingModal").modal('hide');
          }
        })["catch"](function () {
          _this4.$loader.hide();

          _this4.$alert('', 'Something went wrong', 'error');
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/SchedulePreview.vue?vue&type=style&index=0&id=1269a94a&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/SchedulePreview.vue?vue&type=style&index=0&id=1269a94a&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cal-box[data-v-1269a94a] {\n  width: 100%;\n  height: 50px;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\nth[data-v-1269a94a], td[data-v-1269a94a] {\n  height: 50px;\n  margin: 5px;\n  width: 14%;\n}\n@media (max-width: 886px) {\n.cal-box .btn[data-v-1269a94a], .cal-box-btn[data-v-1269a94a] {\n    width: 25px !important;\n    font-size: 0.6rem;\n}\n}\n@media (max-width: 800px) {\ntd button[data-v-1269a94a] {\n    width: 60px !important;\n}\n.col-2[data-v-1269a94a], .col-8[data-v-1269a94a] {\n    padding: 0;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/MyBookings.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/user/MyBookings.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media only screen and (max-width: 991px) {\n.search-sort{\r\n        padding: 4px;\n}\n}\n@media only screen and (max-width: 767px) {\n.search-sort{\r\n      padding: 20px 0px 5px 15px;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/SchedulePreview.vue?vue&type=style&index=0&id=1269a94a&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/SchedulePreview.vue?vue&type=style&index=0&id=1269a94a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./SchedulePreview.vue?vue&type=style&index=0&id=1269a94a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/SchedulePreview.vue?vue&type=style&index=0&id=1269a94a&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/MyBookings.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/user/MyBookings.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./MyBookings.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/MyBookings.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/SchedulePreview.vue?vue&type=template&id=1269a94a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/SchedulePreview.vue?vue&type=template&id=1269a94a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "row mb-3" }, [
      _c("div", { staticClass: "col-lg-4 col-3 text-right" }, [
        _c(
          "button",
          {
            staticClass: "btn cal-box-btn",
            on: {
              click: function ($event) {
                return _vm.prevMonth()
              },
            },
          },
          [_c("i", { staticClass: "fa fa-chevron-left" })]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4 col-6 text-center" }, [
        _c("h4", { staticClass: "text-muted font-weight-normal mb-0" }, [
          _vm._v("Month of"),
        ]),
        _vm._v(" "),
        _c("h2", [
          _vm._v(_vm._s(_vm._f("parseDate")(_vm.current_date, "MMMM YYYY"))),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4 col-3 text-left" }, [
        _c(
          "button",
          {
            staticClass: "btn cal-box-btn",
            on: {
              click: function ($event) {
                return _vm.nextMonth()
              },
            },
          },
          [_c("i", { staticClass: "fa fa-chevron-right" })]
        ),
      ]),
    ]),
    _vm._v(" "),
    _vm.laboratory.timeslots
      ? _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-2" },
            [
              _c("div", { staticClass: "cal-box" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn",
                    on: {
                      click: function ($event) {
                        return _vm.prevWeek()
                      },
                    },
                  },
                  [_c("i", { staticClass: "fa fa-chevron-left" })]
                ),
              ]),
              _vm._v(" "),
              _vm._l(_vm.laboratory.timeslots, function (slot) {
                return _c("div", { staticClass: "cal-box text-right" }, [
                  _vm._v(
                    "\n                " + _vm._s(slot.time) + "\n            "
                  ),
                ])
              }),
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-9" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-sm" }, [
                _c("thead", [
                  _c(
                    "tr",
                    _vm._l(_vm.range, function (r) {
                      return _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: { "border-top": "none" },
                        },
                        [
                          _c("h5", { staticClass: "mb-0" }, [
                            _vm._v(_vm._s(_vm._f("parseDate")(r, "dddd"))),
                          ]),
                          _vm._v(" "),
                          _c("h6", { staticClass: "mb-0" }, [
                            _vm._v(_vm._s(_vm._f("parseDate")(r, "DD"))),
                          ]),
                        ]
                      )
                    }),
                    0
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    !_vm.isLoading
                      ? _vm._l(_vm.laboratory.timeslots, function (slot) {
                          return _c(
                            "tr",
                            [
                              _vm._l(_vm.days, function (day, index) {
                                return [
                                  _c(
                                    "td",
                                    {
                                      staticClass: "border-bottom text-center",
                                    },
                                    [
                                      _vm.hasTimeslot(slot, index) &&
                                      _vm.checkBookings(
                                        slot,
                                        _vm.range[index],
                                        slot.time
                                      )
                                        ? _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-outline-primary btn-sm",
                                              class:
                                                _vm.checkDate(
                                                  _vm.range[index]
                                                ) < 0 &&
                                                _vm.checkTime(
                                                  slot,
                                                  _vm.range[index]
                                                ) < 0
                                                  ? "btn-light"
                                                  : "btn-outline-primary",
                                              staticStyle: { width: "100px" },
                                              attrs: {
                                                disabled:
                                                  _vm.checkDate(
                                                    _vm.range[index]
                                                  ) < 0 ||
                                                  _vm.checkTime(
                                                    slot,
                                                    _vm.range[index]
                                                  ) < 0,
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.bookingSchedule(
                                                    slot,
                                                    index
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            Book\n                                        "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      !_vm.checkBookings(
                                        slot,
                                        _vm.range[index],
                                        slot.time
                                      )
                                        ? _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-danger btn-sm btn-block",
                                              attrs: { disabled: "" },
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            Fully Booked\n                                        "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]
                                  ),
                                ]
                              }),
                            ],
                            2
                          )
                        })
                      : _vm._l(_vm.laboratory.timeslots, function (slot) {
                          return _c(
                            "tr",
                            _vm._l(_vm.days, function (day, index) {
                              return _c("td", { staticClass: "text-center" }, [
                                _c("button", {
                                  staticClass: "btn btn-sm btn-loader",
                                  staticStyle: { width: "100px" },
                                }),
                              ])
                            }),
                            0
                          )
                        }),
                  ],
                  2
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-1" }, [
            _c("div", { staticClass: "cal-box start" }, [
              _c(
                "button",
                {
                  staticClass: "btn",
                  on: {
                    click: function ($event) {
                      return _vm.nextWeek()
                    },
                  },
                },
                [_c("i", { staticClass: "fa fa-chevron-right" })]
              ),
            ]),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/ServiceCard.vue?vue&type=template&id=9b7606e2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/ServiceCard.vue?vue&type=template&id=9b7606e2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      staticClass: "service-card",
      on: {
        click: function ($event) {
          return _vm.bookService()
        },
      },
    },
    [
      _c("h2", { staticClass: "service-title" }, [
        _vm._v(_vm._s(_vm.service.name)),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "service-desc" }, [
        _vm._v(_vm._s(_vm.service.description)),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-center service-img" }, [
        _c("img", { attrs: { src: _vm.service.thumbnail, alt: "" } }),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/MyBookings.vue?vue&type=template&id=73994092&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/user/MyBookings.vue?vue&type=template&id=73994092& ***!
  \********************************************************************************************************************************************************************************************************/
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
    [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          {
            staticClass:
              "card-header row mx-0 align-items-center justify-content-between",
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-lg-7 col-md-8 col-sm-12 d-flex align-items-end row",
              },
              [
                _c(
                  "div",
                  { staticClass: "col-lg-5 col-md-12 d-flex search-sort" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.filters.keywords,
                          expression: "filters.keywords",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "search", placeholder: "Search" },
                      domProps: { value: _vm.filters.keywords },
                      on: {
                        search: function ($event) {
                          return _vm.getBookings()
                        },
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.filters, "keywords", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-sm px-4 ml-1",
                        on: {
                          click: function ($event) {
                            return _vm.getBookings()
                          },
                        },
                      },
                      [_c("i", { staticClass: "fa fa-search" })]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-7 col-md-12 d-flex search-sort" },
                  [
                    _c("div", { staticClass: "input-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "input-group-text",
                          attrs: { for: "inputGroupSelect03" },
                        },
                        [_vm._v("Sort by:")]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.filters.sort,
                              expression: "filters.sort",
                            },
                          ],
                          staticClass: "form-control form-select",
                          attrs: { id: "inputGroupSelect03" },
                          on: {
                            change: [
                              function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.filters,
                                  "sort",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function ($event) {
                                return _vm.getBookings()
                              },
                            ],
                          },
                        },
                        [
                          _c("option", { attrs: { value: "created_at" } }, [
                            _vm._v("Appointment"),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown d-flex" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-sm px-4 ml-1",
                            attrs: {
                              type: "button",
                              id: "dropdownMenu2",
                              "data-toggle": "dropdown",
                              "aria-expanded": "false",
                            },
                          },
                          [
                            _c("i", {
                              class:
                                "fa fa-chevron-" +
                                (_vm.filters.sort_type == "ASC"
                                  ? "down"
                                  : "up"),
                            }),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "dropdown-menu",
                            attrs: { "aria-labelledby": "dropdownMenu2" },
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "dropdown-item",
                                attrs: { type: "button" },
                                on: {
                                  click: function ($event) {
                                    return _vm.setSorting("ASC")
                                  },
                                },
                              },
                              [_vm._v("Ascending")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "dropdown-item",
                                attrs: { type: "button" },
                                on: {
                                  click: function ($event) {
                                    return _vm.setSorting("DESC")
                                  },
                                },
                              },
                              [_vm._v("Descending")]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body pt-0 px-5" },
          [
            _c("div", { staticClass: "row justify-content-start" }),
            _vm._v(" "),
            _vm.view_mode == "list"
              ? _c("div", { staticClass: "table-responsive mt-3" }, [
                  _c(
                    "table",
                    { staticClass: "table table-bordered table-sm" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      !_vm.isLoading &&
                      _vm.bookings &&
                      _vm.bookings.data.length > 0
                        ? _c(
                            "tbody",
                            _vm._l(_vm.bookings.data, function (booking, i) {
                              return _c("tr", [
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$table.getTableNo(i + 1, _vm.bookings)
                                    )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(booking.service.name) +
                                      "\r\n                                "
                                  ),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "badge badge-sm ml-1 mt-1",
                                      class: booking.status_badge,
                                    },
                                    [_vm._v(_vm._s(booking.status_label))]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(booking.full_name_alt)),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(booking.address))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("parseDate")(booking.created_at)
                                    )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  booking.preferred_date
                                    ? _c("span", [
                                        _vm._v(
                                          " \r\n                                    " +
                                            _vm._s(
                                              _vm._f("parseDate")(
                                                booking.preferred_date
                                              )
                                            ) +
                                            " \r\n                                    "
                                        ),
                                        booking.preferred_time
                                          ? _c("span", [
                                              _vm._v(
                                                _vm._s(booking.preferred_time)
                                              ),
                                            ])
                                          : _vm._e(),
                                      ])
                                    : _c("span", [_vm._v("No Preferred Date")]),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  booking.active_schedule
                                    ? _c("span", [
                                        _vm._v(
                                          " \r\n                                    " +
                                            _vm._s(
                                              _vm._f("parseDate")(
                                                booking.active_schedule
                                                  .schedule_date
                                              )
                                            ) +
                                            " \r\n                                    "
                                        ),
                                        booking.active_schedule.time
                                          ? _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  booking.active_schedule.time
                                                )
                                              ),
                                            ])
                                          : _vm._e(),
                                      ])
                                    : _c("span", [_vm._v("No Schedule Yet")]),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  booking.laboratory
                                    ? _c("span", [
                                        _vm._v(
                                          "\r\n                                    " +
                                            _vm._s(booking.laboratory.name) +
                                            "\r\n                                "
                                        ),
                                      ])
                                    : _c("span", [_vm._v("---")]),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  booking.active_schedule &&
                                  booking.active_schedule.statuses
                                    ? _c("h6", [
                                        booking.active_schedule.statuses[0]
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-primary badge-sm ml-1 mt-1",
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    booking.active_schedule
                                                      .statuses[0].status
                                                      .description
                                                  )
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                      ])
                                    : _vm._e(),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  booking.status != 1 && booking.status != 2
                                    ? _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-danger btn-sm",
                                          on: {
                                            click: function ($event) {
                                              return _vm.cancel(booking)
                                            },
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-times mr-1",
                                          }),
                                          _vm._v(
                                            "Cancel\r\n                                "
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-secondary btn-sm",
                                      on: {
                                        click: function ($event) {
                                          return _vm.viewBooking(booking.code)
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-eye mr-1",
                                      }),
                                      _vm._v(
                                        "View\r\n                                "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._auth.role_id == 2 &&
                                  (booking.status == 1 || booking.status == 2)
                                    ? _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary btn-sm",
                                          on: {
                                            click: function ($event) {
                                              return _vm.schedule(booking, true)
                                            },
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-calendar mr-1",
                                          }),
                                          _vm._v(
                                            "Rebook\r\n                                "
                                          ),
                                        ]
                                      )
                                    : _vm._auth.role_id != 2 &&
                                      booking.status != 1 &&
                                      booking.status != 2
                                    ? _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary btn-sm",
                                          on: {
                                            click: function ($event) {
                                              return _vm.schedule(booking)
                                            },
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-calendar mr-1",
                                          }),
                                          _vm._v(
                                            "Schedule\r\n                                "
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                ]),
                              ])
                            }),
                            0
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isLoading && !_vm.bookings
                        ? _c("tbody", [
                            _c("tr", [
                              _c(
                                "td",
                                {
                                  staticClass: "text-center",
                                  attrs: { colspan: "9" },
                                },
                                [_c("data-loader")],
                                1
                              ),
                            ]),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.isLoading &&
                      _vm.bookings &&
                      _vm.bookings.data.length == 0
                        ? _c("tbody", [_vm._m(2)])
                        : _vm._e(),
                    ]
                  ),
                ])
              : _c(
                  "div",
                  { staticClass: "row justify-content-center" },
                  [
                    !_vm.isLoading &&
                    _vm.bookings &&
                    _vm.bookings.data.length > 0
                      ? _vm._l(_vm.bookings.data, function (booking) {
                          return _c(
                            "div",
                            { staticClass: "col-12" },
                            [
                              _c("BookCard", {
                                attrs: { _booking: booking, _auth: _vm._auth },
                                on: {
                                  submit: function ($event) {
                                    _vm.schedule(
                                      booking,
                                      _vm._auth.role_id != 2 &&
                                        booking.status != 1 &&
                                        booking.status != 2
                                    )
                                  },
                                  cancel: function ($event) {
                                    return _vm.cancel(booking)
                                  },
                                },
                              }),
                            ],
                            1
                          )
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.isLoading &&
                    _vm.bookings &&
                    _vm.bookings.data.length == 0
                      ? [_vm._m(3), _vm._v(" "), _vm._m(4)]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isLoading && !_vm.bookings
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "col-lg-12 d-flex align-items-center justify-content-center",
                            },
                            [_c("data-loader")],
                            1
                          ),
                        ]
                      : _vm._e(),
                  ],
                  2
                ),
            _vm._v(" "),
            _vm.bookings && _vm.bookings.data.length > 0
              ? _c(
                  "Pagination",
                  _vm._b(
                    { on: { pageClicked: _vm.getBookings } },
                    "Pagination",
                    {
                      _lastPage: _vm.bookings.last_page,
                      _page: _vm.page,
                      _total: _vm.bookings.total,
                      _per_page: _vm.bookings.per_page,
                    },
                    false
                  )
                )
              : _vm._e(),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("CancelBooking", {
        ref: "cancelModal",
        attrs: { _auth: _vm._auth, _laboratories: _vm._laboratories },
        on: { cancelBooking: _vm.cancelBooking },
      }),
      _vm._v(" "),
      _c("ScheduleModal", {
        ref: "schedModal",
        attrs: { _auth: _vm._auth, _laboratories: _vm._laboratories },
        on: {
          scheduleBooking: _vm.scheduleBooking,
          scheduleAll: _vm.scheduleAll,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-5 col-md-4 col-sm-12 d-flex align-items-center" },
      [
        _c("img", {
          staticClass: "mr-3",
          attrs: { src: "/imgs/preview.png", width: "40" },
        }),
        _vm._v(" "),
        _c("h2", { staticClass: "mb-0" }, [_vm._v("My Schedules")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-primary text-white text-center" }, [
      _c("tr", [
        _c("th", [_vm._v("NO")]),
        _vm._v(" "),
        _c("th", [_vm._v("Service")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fullname")]),
        _vm._v(" "),
        _c("th", [_vm._v("Address")]),
        _vm._v(" "),
        _c("th", [_vm._v("Booked Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Preferred Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Schedule")]),
        _vm._v(" "),
        _c("th", [_vm._v("Laboratory")]),
        _vm._v(" "),
        _c("th", [_vm._v("Remarks")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticClass: "text-center", attrs: { colspan: "9" } }, [
        _c("h4", { staticClass: "mb-0" }, [_vm._v("No Data Available")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12 text-center" }, [
      _c("h4", { staticClass: "mb-0 text-muted" }, [
        _vm._v("You have no upcoming appointments"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6 my-3" }, [
      _c("button", { staticClass: "btn btn-primary btn-block" }, [
        _c(
          "a",
          { staticClass: "text-white", attrs: { href: "#labSchedules" } },
          [_vm._v("Book a Schedule")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/components/SchedulePreview.vue":
/*!******************************************************!*\
  !*** ./resources/src/components/SchedulePreview.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SchedulePreview_vue_vue_type_template_id_1269a94a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SchedulePreview.vue?vue&type=template&id=1269a94a&scoped=true& */ "./resources/src/components/SchedulePreview.vue?vue&type=template&id=1269a94a&scoped=true&");
/* harmony import */ var _SchedulePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchedulePreview.vue?vue&type=script&lang=js& */ "./resources/src/components/SchedulePreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SchedulePreview_vue_vue_type_style_index_0_id_1269a94a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SchedulePreview.vue?vue&type=style&index=0&id=1269a94a&lang=scss&scoped=true& */ "./resources/src/components/SchedulePreview.vue?vue&type=style&index=0&id=1269a94a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SchedulePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SchedulePreview_vue_vue_type_template_id_1269a94a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SchedulePreview_vue_vue_type_template_id_1269a94a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1269a94a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/SchedulePreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/SchedulePreview.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/src/components/SchedulePreview.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SchedulePreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/SchedulePreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/SchedulePreview.vue?vue&type=style&index=0&id=1269a94a&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/src/components/SchedulePreview.vue?vue&type=style&index=0&id=1269a94a&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulePreview_vue_vue_type_style_index_0_id_1269a94a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./SchedulePreview.vue?vue&type=style&index=0&id=1269a94a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/SchedulePreview.vue?vue&type=style&index=0&id=1269a94a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulePreview_vue_vue_type_style_index_0_id_1269a94a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulePreview_vue_vue_type_style_index_0_id_1269a94a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulePreview_vue_vue_type_style_index_0_id_1269a94a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulePreview_vue_vue_type_style_index_0_id_1269a94a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/src/components/SchedulePreview.vue?vue&type=template&id=1269a94a&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/src/components/SchedulePreview.vue?vue&type=template&id=1269a94a&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulePreview_vue_vue_type_template_id_1269a94a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SchedulePreview.vue?vue&type=template&id=1269a94a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/SchedulePreview.vue?vue&type=template&id=1269a94a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulePreview_vue_vue_type_template_id_1269a94a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulePreview_vue_vue_type_template_id_1269a94a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/ServiceCard.vue":
/*!**************************************************!*\
  !*** ./resources/src/components/ServiceCard.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServiceCard_vue_vue_type_template_id_9b7606e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceCard.vue?vue&type=template&id=9b7606e2&scoped=true& */ "./resources/src/components/ServiceCard.vue?vue&type=template&id=9b7606e2&scoped=true&");
/* harmony import */ var _ServiceCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceCard.vue?vue&type=script&lang=js& */ "./resources/src/components/ServiceCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ServiceCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ServiceCard_vue_vue_type_template_id_9b7606e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ServiceCard_vue_vue_type_template_id_9b7606e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9b7606e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/ServiceCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/ServiceCard.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/src/components/ServiceCard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ServiceCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/ServiceCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/ServiceCard.vue?vue&type=template&id=9b7606e2&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/src/components/ServiceCard.vue?vue&type=template&id=9b7606e2&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceCard_vue_vue_type_template_id_9b7606e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ServiceCard.vue?vue&type=template&id=9b7606e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/ServiceCard.vue?vue&type=template&id=9b7606e2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceCard_vue_vue_type_template_id_9b7606e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceCard_vue_vue_type_template_id_9b7606e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/user/MyBookings.vue":
/*!*******************************************!*\
  !*** ./resources/src/user/MyBookings.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyBookings_vue_vue_type_template_id_73994092___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyBookings.vue?vue&type=template&id=73994092& */ "./resources/src/user/MyBookings.vue?vue&type=template&id=73994092&");
/* harmony import */ var _MyBookings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyBookings.vue?vue&type=script&lang=js& */ "./resources/src/user/MyBookings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MyBookings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyBookings.vue?vue&type=style&index=0&lang=css& */ "./resources/src/user/MyBookings.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyBookings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyBookings_vue_vue_type_template_id_73994092___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyBookings_vue_vue_type_template_id_73994092___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/user/MyBookings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/user/MyBookings.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/src/user/MyBookings.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyBookings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MyBookings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/MyBookings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyBookings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/user/MyBookings.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./resources/src/user/MyBookings.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyBookings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./MyBookings.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/MyBookings.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyBookings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyBookings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyBookings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyBookings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/src/user/MyBookings.vue?vue&type=template&id=73994092&":
/*!**************************************************************************!*\
  !*** ./resources/src/user/MyBookings.vue?vue&type=template&id=73994092& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyBookings_vue_vue_type_template_id_73994092___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MyBookings.vue?vue&type=template&id=73994092& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/MyBookings.vue?vue&type=template&id=73994092&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyBookings_vue_vue_type_template_id_73994092___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyBookings_vue_vue_type_template_id_73994092___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);