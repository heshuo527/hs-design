function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, createContext } from 'react';
import classNames from 'classnames';
import "./index.less";
/* 横向还是纵向 */

import { jsx as _jsx } from "react/jsx-runtime";
export var MenuContext = /*#__PURE__*/createContext({
  index: '0'
});

var Menu = function Menu(props) {
  var className = props.className,
      defaultOpenSubMenu = props.defaultOpenSubMenu,
      mode = props.mode,
      style = props.style,
      children = props.children,
      defaultIndex = props.defaultIndex,
      onSelect = props.onSelect;

  var _useState = useState(defaultIndex),
      _useState2 = _slicedToArray(_useState, 2),
      currentActive = _useState2[0],
      setActive = _useState2[1];

  var classes = classNames('hs-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  });

  var handleClick = function handleClick(index) {
    setActive(index);

    if (onSelect) {
      onSelect(index);
    }
  };

  var passedContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode: mode,
    defaultOpenSubMenu: defaultOpenSubMenu
  };

  var renderChildren = function renderChildren() {
    return React.Children.map(children, function (child, index) {
      var childrenElement = child;
      var displayName = childrenElement.type.displayName;

      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return /*#__PURE__*/React.cloneElement(childrenElement, {
          index: index.toString()
        });
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem component');
      }
    });
  };

  return /*#__PURE__*/_jsx("ul", {
    className: classes,
    style: style,
    children: /*#__PURE__*/_jsx(MenuContext.Provider, {
      value: passedContext,
      children: renderChildren()
    })
  });
};

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenu: []
};
export default Menu;