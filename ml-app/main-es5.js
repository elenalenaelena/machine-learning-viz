function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bar-chart/bar-chart.component */
    "./src/app/bar-chart/bar-chart.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppComponent = function AppComponent(http) {
      _classCallCheck(this, AppComponent);

      this.http = http;
      this.data = this.http.get('assets/events.json');
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 3,
      consts: [["role", "banner", 1, "toolbar"], ["role", "main", 1, "content"], [1, "w50-responsive", 3, "data"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-bar-chart", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.data));
        }
      },
      directives: [_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_2__["BarChartComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  body[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    padding-top: 60px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    -webkit-box-flex: 1;\n            flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwSkFBMEo7SUFDMUosZUFBZTtJQUNmLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLGtDQUFrQztFQUNwQzs7RUFFQTs7Ozs7O0lBTUUsYUFBYTtFQUNmOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHlCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBTztZQUFQLE9BQU87RUFDVDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTs7O0lBR0UsY0FBYztJQUNkLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIH1cblxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG5cbiAgYm9keSwgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnNwYWNlciB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC50b29sYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIFxuICBhLFxuICBhOnZpc2l0ZWQsXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTI1Njk5O1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./bar-chart/bar-chart.component */
    "./src/app/bar-chart/bar-chart.component.ts");
    /* harmony import */


    var _pointlist_pointlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pointlist/pointlist.component */
    "./src/app/pointlist/pointlist.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["BarChartComponent"], _pointlist_pointlist_component__WEBPACK_IMPORTED_MODULE_5__["PointlistComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["BarChartComponent"], _pointlist_pointlist_component__WEBPACK_IMPORTED_MODULE_5__["PointlistComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/bar-chart/bar-chart.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/bar-chart/bar-chart.component.ts ***!
    \**************************************************/

  /*! exports provided: BarChartComponent */

  /***/
  function srcAppBarChartBarChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarChartComponent", function () {
      return BarChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var _c0 = ["chart"];

    var BarChartComponent =
    /*#__PURE__*/
    function () {
      function BarChartComponent() {
        _classCallCheck(this, BarChartComponent);

        this.margin = {
          top: 20,
          right: 20,
          bottom: 30,
          left: 40
        };
      }

      _createClass(BarChartComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (!this.data) {
            return;
          }

          this.createChart();
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.createChart();
        }
      }, {
        key: "createChart",
        value: function createChart() {
          d3__WEBPACK_IMPORTED_MODULE_1__["select"]('svg').remove();
          var element = this.chartContainer.nativeElement;
          var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](element).append('svg').attr('width', element.offsetWidth).attr('height', element.offsetHeight);
          var contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
          var contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;
          var dataset = this.data;
          var nest = d3__WEBPACK_IMPORTED_MODULE_1__["nest"]().key(function (d) {
            return d.language;
          }).sortKeys(d3__WEBPACK_IMPORTED_MODULE_1__["ascending"]).rollup(function (v) {
            return v.length;
          }).entries(dataset);
          console.log(JSON.stringify(nest));
          var xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"]().domain(nest.map(function (d) {
            return d.key;
          }));
          var yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([0, nest.map(function (d) {
            return d.length;
          })]);
          var g = svg.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
          g.append('g').attr('class', 'axis axis--x').attr('transform', 'translate(0,' + contentHeight + ')').call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](xScale)).append('text').attr('x', 6).attr('dx', '0.71em').attr('text-anchor', 'end').text('language');
          g.append('g').attr('class', 'axis axis--y').call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](yScale).ticks(10)).append('text').attr('transform', 'rotate(-90)').attr('y', 6).attr('dy', '0.71em').attr('text-anchor', 'end').text('No. of Events');
          g.selectAll('.bar').data(nest).enter().append('rect').attr('class', 'bar').attr('x', function (d) {
            return xScale(nest.language);
          }).attr('y', function (d) {
            return yScale(nest.language.count);
          }).attr('width', contentWidth).attr('height', function (d) {
            return contentHeight - yScale(nest.language);
          }).style('fill', "blue");
        }
      }]);

      return BarChartComponent;
    }();

    BarChartComponent.ɵfac = function BarChartComponent_Factory(t) {
      return new (t || BarChartComponent)();
    };

    BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BarChartComponent,
      selectors: [["app-bar-chart"]],
      viewQuery: function BarChartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chartContainer = _t.first);
        }
      },
      inputs: {
        data: "data"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()],
      decls: 4,
      vars: 0,
      consts: [["id", "chart", 3, "resize"], ["chart", ""]],
      template: function BarChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "bar-chart showing events by language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function BarChartComponent_Template_div_resize_2_listener($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n[_nghost-kwy-c12] {\n    background-color: aquamarine;\n}\n\n.bar {\n   fill: steelblue;\n}\n\n.bar:hover {\n    fill: brown;\n}\n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtHQUNHLGVBQWU7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbltfbmdob3N0LWt3eS1jMTJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xufVxuXG4uYmFyIHtcbiAgIGZpbGw6IHN0ZWVsYmx1ZTtcbn1cbiAgICAgICAgXG4uYmFyOmhvdmVyIHtcbiAgICBmaWxsOiBicm93bjtcbn1cbiAgXG4iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bar-chart',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          templateUrl: './bar-chart.component.html',
          styleUrls: ['./bar-chart.component.css']
        }]
      }], function () {
        return [];
      }, {
        chartContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['chart']
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pointlist/pointlist.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pointlist/pointlist.component.ts ***!
    \**************************************************/

  /*! exports provided: PointlistComponent */

  /***/
  function srcAppPointlistPointlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PointlistComponent", function () {
      return PointlistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @tensorflow/tfjs */
    "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["pointlist"];

    function PointlistComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r2.id, ", ", item_r2.language, " ");
      }
    }

    var PointlistComponent =
    /*#__PURE__*/
    function () {
      function PointlistComponent() {
        _classCallCheck(this, PointlistComponent);

        this.margin = {
          top: 20,
          right: 20,
          bottom: 30,
          left: 40
        };
      }

      _createClass(PointlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //called One after OnChanges(), that's where the heavy initialization logic belongs. 
          this.train();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (!this.data) {
            return;
          }

          this.createPointlist();
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.createPointlist();
        }
      }, {
        key: "createPointlist",
        value: function createPointlist() {
          d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg').remove();
          var element = this.listContainer.nativeElement;
          var data = this.data;
          var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](element).append('svg').attr('width', element.offsetWidth).attr('height', element.offsetHeight);
          var contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
          var contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;
          var x = d3__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]().rangeRound([0, contentWidth]).padding(0.1).domain(data.map(function (d) {
            return d.id;
          }));
          var y = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().rangeRound([contentHeight, 0]).domain([0, d3__WEBPACK_IMPORTED_MODULE_2__["max"](data, function (d) {
            return d.legs;
          })]);
          var myColor = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain([0, d3__WEBPACK_IMPORTED_MODULE_2__["max"](data, function (d) {
            return d.legs;
          })]).range(["red", "blue"]);
          var g = svg.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
          g.append('g').attr('class', 'axis axis--x').attr('transform', 'translate(0,' + contentHeight + ')').call(d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"](x)).append('text').attr('x', 6).attr('dx', '0.71em').attr('text-anchor', 'end').text('Animal Class');
          g.append('g').attr('class', 'axis axis--y').call(d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"](y).ticks(5)).append('text').attr('transform', 'rotate(-90)').attr('y', 6).attr('dy', '0.71em').attr('text-anchor', 'end').text('Legs');
          g.selectAll('.circle').data(data).enter().append('circle').attr('class', 'circle').attr('cx', function (d) {
            var xval = x(d.class_type);
            xval += 15;
            return xval;
          }).attr('cy', function (d) {
            return y(d.legs);
          }).attr('r', 5).attr("fill", function (d) {
            return myColor(d.legs);
          }).on("mouseover", function (d) {
            return function () {
              d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).attr("fill", "red");
              console.log(d.animal_name);
            };
          }).on("mouseout", function (d) {
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).attr("fill", function () {
              return "" + myColor(d.legs) + "";
            });
          });
        }
      }, {
        key: "train",
        value: function train() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var xs, ys;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Define a model for linear regression.
                    this.linearModel = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["sequential"]();
                    this.linearModel.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["layers"].dense({
                      units: 1,
                      inputShape: [1]
                    })); // Prepare the model for training: Specify the loss and the optimizer.

                    this.linearModel.compile({
                      loss: 'meanSquaredError',
                      optimizer: 'sgd'
                    }); // Training data, completely random stuff

                    xs = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["tensor1d"]([3.2, 4.4, 5.5]);
                    ys = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["tensor1d"]([1.6, 2.7, 3.5]); // Train

                    _context.next = 7;
                    return this.linearModel.fit(xs, ys);

                  case 7:
                    console.log('model trained!');

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "predict",
        value: function predict(val) {
          var output = this.linearModel.predict(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["tensor2d"]([val], [1, 1]));
          this.prediction = Array.from(output.dataSync())[0];
        }
      }]);

      return PointlistComponent;
    }();

    PointlistComponent.ɵfac = function PointlistComponent_Factory(t) {
      return new (t || PointlistComponent)();
    };

    PointlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PointlistComponent,
      selectors: [["app-pointlist"]],
      viewQuery: function PointlistComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.listContainer = _t.first);
        }
      },
      inputs: {
        data: "data"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
      decls: 4,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"]],
      template: function PointlistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "pointlist works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PointlistComponent_li_3_Template, 2, 2, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvaW50bGlzdC9wb2ludGxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PointlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-pointlist',
          templateUrl: './pointlist.component.html',
          styleUrls: ['./pointlist.component.css']
        }]
      }], function () {
        return [];
      }, {
        listContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['pointlist']
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/lena/Desktop/machine-learning-viz/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!****************************!*\
    !*** node-fetch (ignored) ***!
    \****************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  4:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  5:
  /*!********************************!*\
    !*** string_decoder (ignored) ***!
    \********************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  6:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map