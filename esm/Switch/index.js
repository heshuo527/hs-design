import React from 'react';
import classnames from 'classNames';
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";

var Switch = function Switch(props) {
  var children = props.children,
      onChange = props.onChange;
  var size = props.size,
      disabled = props.disabled,
      checked = props.checked,
      derivedChecked = props.derivedChecked;

  if (!disabled) {
    disabled = false;
  }

  if (!size) {
    size = 'default';
  }

  var handleClick = function handleClick(e) {
    if (disabled) {
      return;
    }

    if (onChange) {
      onChange(!checked, e);
    }
  };

  return /*#__PURE__*/_jsx("span", {
    className: classnames({
      'hs-switch': true,
      'hs-switch-default': size === 'default',
      'hs-switch-small': size === 'small',
      'hs-switch-checked': checked || derivedChecked,
      'hs-switch-disabled': disabled
    }),
    onClick: handleClick,
    children: /*#__PURE__*/_jsx("span", {
      className: "hs-switch-core",
      children: children
    })
  });
};

export default Switch;