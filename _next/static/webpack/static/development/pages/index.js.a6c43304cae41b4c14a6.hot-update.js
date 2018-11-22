webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Subscribe.js":
/*!*********************************!*\
  !*** ./components/Subscribe.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style-utils */ "./styles/style-utils.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons */ "./components/Icons.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/nusretalabuga/Desktop/local/blackfriday/components/Subscribe.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    text-align: left;\n    & > div{\n        font-size: 25px;\n        font-weight: 700;\n        padding-bottom: 38px;\n        padding-left: 10px;\n        display:inline-block;\n        p{\n            /* text-align:left; */\n        }\n        div{\n            margin-top: 9px;\n            background: rgba(244,189,97,0.85);\n            width: calc(100% + 30px);\n            height: 6px;\n        }\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    padding-top: 18px;\n    font-size: 13px;\n    color: #676767;\n    text-align: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            grid-template-columns: 2fr 1fr;\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    padding: 20px 17px;\n    background: #fff;\n    box-shadow: 0 2px 4px rgba(0,0,0,.11);\n    border-radius: 8px;\n    width: 100%;\n    form{\n        display:grid;\n        grid-template-columns: 1fr 1fr;\n        grid-column-gap: 0;\n        ", "\n        input{\n            width: 100%;\n            height: 46px;\n            font-size: 17px;\n            font-weight: 500;\n            color: #676767;\n            border: 3px solid #E7E9EC;\n            border-right: 0;\n            border-top-left-radius: 8px;\n            border-bottom-left-radius: 8px;\n            padding: 0 10px;\n            outline: none;\n            &:focus{\n                border-color: #F4C57F;\n            }\n        }\n        button{\n            display: inline-block;\n            width: 100%;\n            padding: 10px 0 13px 0;\n            background: #000;\n            border-top-right-radius: 8px;\n            border-bottom-right-radius: 8px;\n            box-shadow: 0 2px 4px rgba(0,0,0,.11);\n            border:0;\n            text-align:center;\n            color: #fff;\n            text-decoration: none;\n            font-size: 17px;\n            letter-spacing: .5px;\n            font-weight: 800;\n            transition: 300ms all;\n            outline: none;\n            margin: 0;\n            cursor: pointer;\n            svg{\n                margin-right: 10px;\n                transition: 250ms transform;\n                vertical-align: middle;\n            }\n            &:hover{\n                box-shadow: 0px 5px 11px rgba(0,0,0,.18);\n            }\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        width: 830px;\n        padding: 55px;\n        margin: 0 auto;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    text-align:center;\n    width: 100%;\n    padding: 10px;\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), _styles_style_utils__WEBPACK_IMPORTED_MODULE_2__["media"].tablet(_templateObject2()));
var ShadowDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3(), _styles_style_utils__WEBPACK_IMPORTED_MODULE_2__["media"].tablet(_templateObject4()));
var Notice = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject5());
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6());

var Subscribe =
/*#__PURE__*/
function (_Component) {
  _inherits(Subscribe, _Component);

  function Subscribe(props) {
    var _this;

    _classCallCheck(this, Subscribe);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Subscribe).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleForm", function (e) {
      e.preventDefault();

      var dis = _assertThisInitialized(_assertThisInitialized(_this));

      return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("https://formcarry.com/s/GJgKchWJ6F_", _this.state, {
        headers: {
          "Accept": "application/json"
        }
      }).then(function (response) {
        if (response.data.code == 200) {
          dis.setState({
            buttonText: "DONE",
            email: ""
          });
          alert("Thank you, you will get an confirmation email, accept it and you are done.");
        } else {
          alert("Something terribly went wrong");
        }
      }).catch(function (error) {
        alert("Something terribly went wrong");
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFields", function (e) {
      return _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _this.state = {
      email: "",
      buttonText: "SUBSCRIBE"
    };
    _this.handleForm = _this.handleForm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Subscribe, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Seeking more deals?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShadowDiv, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleForm,
        method: "POST",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        placeholder: "myawesome@email.com",
        name: "email",
        value: this.state.email,
        onChange: this.handleFields,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "Submit",
        disabled: this.state.buttonText == "DONE" ? true : false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, this.state.buttonText == "DONE" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_4__["CheckIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_4__["EmailIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), " ", this.state.buttonText))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Notice, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "If I find more deals, will let you know. No spams or kinda shit, promises."));
    }
  }]);

  return Subscribe;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

/***/ })

})
//# sourceMappingURL=index.js.a6c43304cae41b4c14a6.hot-update.js.map