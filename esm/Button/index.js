var _excluded = ["icon", "loading", "size", "type", "htmlType", "ghost", "style", "className", "disabled", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import classnames from 'classnames';
import "./index.less";
import { jsxs as _jsxs } from "react/jsx-runtime";

var Button = function Button(props) {
  var icon = props.icon,
      loading = props.loading,
      size = props.size,
      type = props.type,
      htmlType = props.htmlType,
      ghost = props.ghost,
      style = props.style,
      className = props.className,
      disabled = props.disabled,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  if (!type) {
    type = 'default';
  }

  var handleClick = function handleClick(event) {
    if (disabled) {
      return;
    }

    if (props.onClick) {
      props.onClick(event);
    }
  };

  return /*#__PURE__*/_jsxs("button", _objectSpread(_objectSpread({
    className: classnames({
      'hs-button': true,
      'hs-button-default': type === 'default',
      'hs-button-primary': type === 'primary',
      'hs-button-dashed': type === 'dashed',
      'hs-button-danger': type === 'danger',
      'hs-button-small': size === 'small',
      'hs-button-medium': size === 'medium',
      'hs-button-large': size === 'large',
      'hs-button-ghost': ghost,
      'hs-button-disabled': disabled
      /* 'my-button-position-left': position === 'left',
      'my-button-position-right': position === 'right', */

    }),
    style: style,
    type: htmlType,
    disabled: disabled,
    onClick: handleClick
  }, rest), {}, {
    children: [props.icon && props.icon, children]
  }));
};

export default Button;