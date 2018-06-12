'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Object with status name with hex color text
* @type {Object}
*/
var Color = exports.Color = _defineProperty({
  open: '#42c864',
  waitingInventory: '#febd20',
  inProcess: '#73d9e6',
  completed: '#0fabec',
  reverted: '#f50505'
}, 'reverted', '456582');

/**
 * Component class
 * @type {Object}
 */

var Base = function (_Component) {
  _inherits(Base, _Component);

  function Base() {
    _classCallCheck(this, Base);

    return _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).apply(this, arguments));
  }

  _createClass(Base, [{
    key: 'render',


    /**
    * Render error message.
    * @returns {XML}
    */
    value: function render() {
      return _react2.default.createElement(
        _style.Container,
        null,
        _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(_style.Circle, { hexColor: this.props.color }),
          _react2.default.createElement(
            _style.Value,
            null,
            this.props.value
          ),
          this.props.label.toLowerCase()
        )
      );
    }
  }]);

  return Base;
}(_react.Component);

/**
* Set propTypes
* @type {Object}
*/


Base.propTypes = {
  value: _propTypes2.default.number.isRequired,
  color: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired
};

exports.default = Base;