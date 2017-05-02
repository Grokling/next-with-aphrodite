
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _aphrodite = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/simeon/Projects/next.js/examples/with-aphrodite/pages/index.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof window !== 'undefined') {
        console.log('HYDRATING', window.__NEXT_DATA__.ids);
        _aphrodite.StyleSheet.rehydrate(window.__NEXT_DATA__.ids);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: (0, _aphrodite.css)(styles.root), __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('h1', { className: (0, _aphrodite.css)(styles.title), __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'My page'));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;


var styles = _aphrodite.StyleSheet.create({
  root: {
    width: 80,
    height: 60,
    background: 'white',
    ':hover': {
      background: 'black'
    }
  },

  title: {
    marginLeft: 5,
    color: 'black',
    fontSize: 22,
    ':hover': {
      color: 'white'
    }
  }
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/simeon/Projects/next.js/examples/with-aphrodite/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/simeon/Projects/next.js/examples/with-aphrodite/pages/index.js"); } } })();
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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(590);


/***/ })

},[591]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9iOGYxNTI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBQ2M7Ozs7Ozs7SUFFQTs7Ozs7Ozs7Ozs7d0NBRWpCO1VBQUksT0FBTyxXQUFXLGFBQ3BCO2dCQUFRLElBQUksYUFBYSxPQUFPLGNBQ2hDOzhCQUFXLFVBQVUsT0FBTyxjQUM3QjtBQUNGOzs7OzZCQUVDOzZCQUNFLHVCQUFLLFdBQVcsb0JBQUksT0FBTztvQkFBM0I7c0JBQ0U7QUFERjtPQUFBLGtCQUNFLHNCQUFJLFdBQVcsb0JBQUksT0FBTztvQkFBMUI7c0JBQUE7QUFBQTtTQUdMOzs7OztFQWJnQyxnQkFBTTs7a0JBQXBCOzs7QUFpQnJCLElBQU0sK0JBQW9COztXQUd0QjtZQUNBO2dCQUNBOztrQkFLRjtBQUpJO0FBSkY7OztnQkFVQTtXQUNBO2NBQ0E7O2FBQ1M7QUFBUDtBQUpGO0FBVkYsQ0FEYSxFIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBjc3MgfSBmcm9tICdhcGhyb2RpdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRJTkcnLCB3aW5kb3cuX19ORVhUX0RBVEFfXy5pZHMpXG4gICAgICBTdHlsZVNoZWV0LnJlaHlkcmF0ZSh3aW5kb3cuX19ORVhUX0RBVEFfXy5pZHMpXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NzcyhzdHlsZXMucm9vdCl9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtjc3Moc3R5bGVzLnRpdGxlKX0+TXkgcGFnZTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogODAsXG4gICAgaGVpZ2h0OiA2MCxcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICc6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snXG4gICAgfVxuICB9LFxuXG4gIHRpdGxlOiB7XG4gICAgbWFyZ2luTGVmdDogNSxcbiAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICBmb250U2l6ZTogMjIsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgfVxuICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        