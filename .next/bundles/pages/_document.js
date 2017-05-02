
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports =
webpackJsonp([1],{

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(66);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__(463);

var _document2 = _interopRequireDefault(_document);

var _aphrodite = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/simeon/Projects/next.js/examples/with-aphrodite/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  (0, _createClass3.default)(MyDocument, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
        var renderPage = _ref.renderPage;

        var _StyleSheetServer$ren, html, css;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _StyleSheetServer$ren = _aphrodite.StyleSheetServer.renderStatic(function () {
                  return renderPage();
                }), html = _StyleSheetServer$ren.html, css = _StyleSheetServer$ren.css;

                console.log(css.renderedClassNames);
                return _context.abrupt('return', (0, _extends3.default)({}, html, { css: css }));

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function MyDocument(props) {
    (0, _classCallCheck3.default)(this, MyDocument);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).call(this, props));

    console.log('CONSTRUCTOR PROPS', props);
    var __NEXT_DATA__ = props.__NEXT_DATA__,
        css = props.css;

    if (css && css.renderedClassNames) {
      __NEXT_DATA__.ids = css.renderedClassNames;
    }
    return _this;
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'My page'), _react2.default.createElement('style', { 'data-aphrodite': true, dangerouslySetInnerHTML: { __html: this.props.css.content }, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_document.Main, { cssClasses: this.props.css, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })));
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/simeon/Projects/next.js/examples/with-aphrodite/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/simeon/Projects/next.js/examples/with-aphrodite/pages/_document.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(240);


/***/ })

},[587]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/MjNhMzYxYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCOzs7O0FBQ3RCOzs7Ozs7O0lBRVk7Ozs7Ozs7WUFFYTs7Ozs7Ozs7b0VBQ1MsYUFBYTt5QkFBTTtBQUFwQyxvQkFBZCxtQ0FBTSw0QkFDZDs7d0JBQVEsSUFBSSxJQUFJOzRFQUNKLFFBQU0sSzs7Ozs7Ozs7Ozs7Ozs7O0FBR3BCOzs7c0JBQWEsT0FBTzt3Q0FBQTs7OElBRWxCOztZQUFRLElBQUkscUJBQXFCO1FBQ3pCLGdCQUF1QixNQUF2QjtRQUFlLE1BQVEsTUFDL0I7O1FBQUksT0FBTyxJQUFJLG9CQUNiO29CQUFjLE1BQU0sSUFDckI7QUFOaUI7V0FPbkI7Ozs7OzZCQUlDOzZCQUNFOztvQkFBQTtzQkFDRTtBQURGO0FBQUEseUJBQ0c7O29CQUFEO3NCQUNFO0FBREY7QUFBQSx5QkFDRTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQ0EscURBQU8sa0JBQVAsTUFBc0IseUJBQXlCLEVBQUUsUUFBUSxLQUFLLE1BQU0sSUFBSTtvQkFBeEU7c0JBRUY7QUFGRTsyQkFFRjs7b0JBQUE7c0JBQ0U7QUFERjtBQUFBLHlCQUNHLGdDQUFLLFlBQVksS0FBSyxNQUFNO29CQUE3QjtzQkFDQTtBQURBOzBCQUNDOztvQkFBRDtzQkFJUDtBQUpPO0FBQUE7Ozs7O0FBM0I4Qjs7a0JBQW5CLFciLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnXG5pbXBvcnQgeyBTdHlsZVNoZWV0U2VydmVyIH0gZnJvbSAnYXBocm9kaXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVuZGVyUGFnZSB9KSB7XG4gICAgY29uc3QgeyBodG1sLCBjc3MgfSA9IFN0eWxlU2hlZXRTZXJ2ZXIucmVuZGVyU3RhdGljKCgpID0+IHJlbmRlclBhZ2UoKSlcbiAgICBjb25zb2xlLmxvZyhjc3MucmVuZGVyZWRDbGFzc05hbWVzKVxuICAgIHJldHVybiB7IC4uLmh0bWwsIGNzcyB9XG4gIH1cblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zb2xlLmxvZygnQ09OU1RSVUNUT1IgUFJPUFMnLCBwcm9wcylcbiAgICBjb25zdCB7IF9fTkVYVF9EQVRBX18sIGNzcyB9ID0gcHJvcHNcbiAgICBpZiAoY3NzICYmIGNzcy5yZW5kZXJlZENsYXNzTmFtZXMpIHtcbiAgICAgIF9fTkVYVF9EQVRBX18uaWRzID0gY3NzLnJlbmRlcmVkQ2xhc3NOYW1lc1xuICAgIH1cbiAgfVxuXG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5NeSBwYWdlPC90aXRsZT5cbiAgICAgICAgICA8c3R5bGUgZGF0YS1hcGhyb2RpdGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmNzcy5jb250ZW50IH19IC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gY3NzQ2xhc3Nlcz17dGhpcy5wcm9wcy5jc3N9Lz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9fZG9jdW1lbnQuanM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        