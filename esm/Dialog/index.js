function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { Fragment, useState } from 'react';
import Button from "../Button";
import { scopedClassMaker } from "../types/classes";
import "./index.less";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var scopedClass = scopedClassMaker('my-dialog');
var sc = scopedClass;

var Dialog = function Dialog(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var children = props.children,
      title = props.title,
      content = props.content,
      buttonName = props.buttonName;
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsxs(Button, {
      type: "primary",
      onClick: function onClick() {
        return setOpen(!open);
      },
      children: [" ", children, " "]
    }), open ? /*#__PURE__*/_jsxs(Fragment, {
      children: [/*#__PURE__*/_jsx("div", {
        className: sc('mask')
      }), /*#__PURE__*/_jsxs("div", {
        className: sc(''),
        children: [/*#__PURE__*/_jsx("header", {
          className: sc('tit'),
          children: title
        }), /*#__PURE__*/_jsx("nav", {
          className: sc('con'),
          children: content
        }), /*#__PURE__*/_jsxs("footer", {
          className: sc('foo'),
          children: [/*#__PURE__*/_jsx("button", {
            onClick: function onClick() {
              return setOpen(!open);
            },
            className: sc('off'),
            children: buttonName[0]
          }), /*#__PURE__*/_jsx("button", {
            onClick: function onClick() {
              return setOpen(!open);
            },
            className: sc('done'),
            children: buttonName[1]
          })]
        })]
      })]
    }) : null]
  });
};

export default Dialog;