var _excluded = ["position", "icon", "loading", "size", "type", "htmlType", "ghost", "style", "className", "disabled", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import classes from "../utils/classes";
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";
var componentName = 'button';

var Button = function Button(props) {
  var cn = componentName;

  var position = props.position,
      icon = props.icon,
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

  var buttonClassName = classes(cn, '', [position, size, type, className], {
    ghost: ghost,
    disabled: disabled
  });
  /* const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (props.onClick) {
      props.onClick(event)
    }
  } */

  return /*#__PURE__*/_jsx("button", _objectSpread(_objectSpread({
    className: buttonClassName,
    style: style,
    type: htmlType,
    disabled: disabled
  }, rest), {}, {
    children: children
  }));
};

export default Button;
/* onClick={handleClick}
className={classnames({
  'my-button': true,
  'my-button-default': type === 'default',
  'my-button-primary': type === 'primary',
  'my-button-dashed': type === 'dashed',
  'my-button-danger': type === 'danger',
})} */