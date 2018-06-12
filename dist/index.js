'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Object with status name with hex color text
* @type {Object}
*/
var Color = exports.Color = {
  open: '#42c864',
  waitingInventory: '#febd20',
  inProcess: '#73d9e6',
  completed: '#0fabec',
  cancelled: '#f50505',
  reverted: '#456582'
};

/**
* Component class
* @type {Object}
*/
var BulletStatus = function BulletStatus(props) {
  return _react2.default.createElement(
    _style.Container,
    null,
    _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(_style.Circle, { hexColor: props.color }),
      _react2.default.createElement(
        _style.Value,
        null,
        props.value
      ),
      props.label.toLowerCase()
    )
  );
};

/**
* Set propTypes
* @type {Object}
*/
BulletStatus.propTypes = {
  value: _propTypes2.default.number.isRequired,
  color: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired
};

exports.default = BulletStatus;