function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useContext, useState } from 'react';
import classNames from 'classNames';
import { MenuContext } from "./menu";
import { UpArrowsIcon } from "../icon/Icon";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var SubMenu = function SubMenu(_ref) {
  var index = _ref.index,
      title = _ref.title,
      children = _ref.children,
      ClassName = _ref.ClassName,
      icon = _ref.icon;
  var context = useContext(MenuContext);
  var openedSubMenus = context.defaultOpenSubMenu; // /* includes () 方法用于判断字符串是否包含指定的子字符串---返回的是布尔值 */

  var isOpen = index && context.mode === 'vertical' ? openedSubMenus.includes(index) : false;

  var _useState = useState(isOpen),
      _useState2 = _slicedToArray(_useState, 2),
      menuOpen = _useState2[0],
      setOpen = _useState2[1];

  var classes = classNames('menu-item submenu-item', ClassName, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  });

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setOpen(!menuOpen);
  };

  var timer;

  var handleMouse = function handleMouse(e, toggle) {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(function () {
      setOpen(toggle);
    }, 300);
  };

  var clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {};
  var hoverEvent = context.mode !== 'vertical' ? {
    onMouseEnter: function onMouseEnter(e) {
      handleMouse(e, true);
    },
    onMouseLeave: function onMouseLeave(e) {
      handleMouse(e, false);
    }
  } : {};

  var renderChildren = function renderChildren() {
    var subMenuClasses = classNames('viking-submenu', {
      'menu-opened': menuOpen
    });
    var childrenComponent = React.Children.map(children, function (child, i) {
      var childrenElement = child;

      if (childrenElement.type.displayName === 'MenuItem') {
        return /*#__PURE__*/React.cloneElement(childrenElement, {
          index: "".concat(index, "-").concat(i)
        });
      } else {
        console.error('Warning: Submenu has a child which is not a MenuItem component');
      }
    });
    return /*#__PURE__*/_jsx("ul", {
      className: subMenuClasses,
      children: childrenComponent
    });
  };

  return /*#__PURE__*/_jsxs("li", _objectSpread(_objectSpread({
    className: classes
  }, hoverEvent), {}, {
    children: [/*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
      className: "submenu-title"
    }, clickEvents), {}, {
      children: [title, /*#__PURE__*/_jsx(UpArrowsIcon, {
        className: "arrow-icon"
      })]
    })), renderChildren()]
  }), index);
};

SubMenu.displayName = 'SubMenu';
export default SubMenu;