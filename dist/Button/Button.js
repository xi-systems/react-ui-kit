"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_styledComponents=_interopRequireDefault(require("styled-components"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _templateObject(){var a=_taggedTemplateLiteral(["\n  padding: 12px;\n  border: 1px solid black;\n  border-radius: 12px;\n  background: red;\n"]);return _templateObject=function(){return a},a}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}var Root=_styledComponents["default"].div(_templateObject()),Button=function(a){var b=a.children;return/*#__PURE__*/_react["default"].createElement(Root,{as:"button"},b)},_default=Button;exports["default"]=_default;