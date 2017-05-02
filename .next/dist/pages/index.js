'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aphrodite = require('aphrodite');

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