import React, { useContext } from 'react';
import classNames from 'classNames';
import { MenuContext } from "./menu";
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";

var MenuItem = function MenuItem(props) {
  var index = props.index,
      disabled = props.disabled,
      className = props.className,
      style = props.style,
      children = props.children;
  var context = useContext(MenuContext);
  var classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  });

  var handleClick = function handleClick() {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
  };

  return /*#__PURE__*/_jsx("li", {
    className: classes,
    style: style,
    onClick: handleClick,
    children: children
  });
};

MenuItem.displayName = 'MenuItem';
export default MenuItem;