function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { Fragment, useState } from 'react';
import Button from "../Button";
import { scopedClassMaker, buttonClassNames } from "../types/classes";
import classnames from 'classnames';
import "./index.less";
import "../style/base.less";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var scopedClass = scopedClassMaker('hs-dialog');
var sc = scopedClass;

var Dialog = function Dialog(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var children = props.children,
      style = props.style,
      onConfirm = props.onConfirm,
      onCancel = props.onCancel,
      onMask = props.onMask,
      onDialog = props.onDialog;
  var onText = props.onText,
      cancelText = props.cancelText,
      okType = props.okType,
      cancelType = props.cancelType,
      onSize = props.onSize,
      cancelSize = props.cancelSize,
      maskClosable = props.maskClosable,
      type = props.type,
      title = props.title,
      onDialogSize = props.onDialogSize,
      content = props.content;

  if (!onDialogSize) {
    onDialogSize = 'medium';
  }

  if (!cancelText) {
    cancelText = '取消';
  }

  if (!okType) {
    okType = 'primary';
  }

  if (!title) {
    title = '标题';
  }

  if (!content) {
    content = '内容';
  }

  if (!cancelType) {
    cancelType = 'default';
  }

  if (!onSize) {
    onSize = 'default';
  }

  if (!cancelSize) {
    cancelSize = 'default';
  }

  if (!maskClosable) {
    maskClosable = false;
  }

  if (!type) {
    type = 'primary';
  }

  var onTextClick = function onTextClick(event) {
    if (onConfirm) {
      onConfirm(event);
    }

    if (open) {
      setOpen(!open);
    }
  };

  var cancelTextOnClick = function cancelTextOnClick(event) {
    if (onCancel) {
      onCancel(event);
    }

    if (open) {
      setOpen(!open);
    }
  };

  var onMaskOnclick = function onMaskOnclick(event) {
    if (onMask) {
      onMask(event);
    }

    if (open) {
      setOpen(!open);
    }
  };

  var onMaskClosable = function onMaskClosable(event) {
    if (onMask) {
      onMask(event);
    }
  };

  var dialogClick = function dialogClick(event) {
    setOpen(!open);

    if (onDialog) {
      onDialog(event);
    }
  };

  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsxs(Button, {
      size: onDialogSize,
      type: type,
      onClick: dialogClick,
      children: [" ", children, " "]
    }), open ? /*#__PURE__*/_jsxs(Fragment, {
      children: [maskClosable ? /*#__PURE__*/_jsx("div", {
        className: sc('mask'),
        onClick: onMaskOnclick
      }) : /*#__PURE__*/_jsx("div", {
        className: sc('mask'),
        onClick: onMaskClosable
      }), /*#__PURE__*/_jsxs("div", {
        className: sc(''),
        style: style,
        children: [/*#__PURE__*/_jsx("header", {
          className: sc('tit'),
          children: title
        }), /*#__PURE__*/_jsx("nav", {
          className: sc('con'),
          children: content
        }), /*#__PURE__*/_jsxs("footer", {
          className: sc('foo'),
          children: [cancelText ? /*#__PURE__*/_jsx("button", {
            onClick: cancelTextOnClick,
            className: classnames(buttonClassNames(cancelType, cancelSize)),
            children: cancelText
          }) : null, " ", onText ? /*#__PURE__*/_jsx("button", {
            onClick: onTextClick,
            className: classnames(buttonClassNames(okType, onSize)),
            children: onText
          }) : null]
        })]
      })]
    }) : null]
  });
};

export default Dialog;