'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Value = exports.Circle = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  list-style: none;\n'], ['\n  list-style: none;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 11px;\n  width: 11px;\n  background-color: ', ';\n  border-radius: 50%;\n  display: inline-block;\n'], ['\n  height: 11px;\n  width: 11px;\n  background-color: ', ';\n  border-radius: 50%;\n  display: inline-block;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin: 0 3px 0 3px;\n'], ['\n  margin: 0 3px 0 3px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = _styledComponents2.default.li(_templateObject);

var Circle = exports.Circle = _styledComponents2.default.span(_templateObject2, function (props) {
  return props.hexColor ? props.hexColor : 'white';
});

var Value = exports.Value = _styledComponents2.default.strong(_templateObject3);