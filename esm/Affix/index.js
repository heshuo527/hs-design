var _excluded = ["distance", "className", "style", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect } from 'react';
import classes from "../utils/classes";
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";

var Affix = function Affix(props) {
  var cn = 'affix';

  var distance = props.distance,
      className = props.className,
      style = props.style,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  var top = 0;
  var wrapperRef;
  var affixRef;

  var handleScroll = function handleScroll() {
    if (window.scrollY > top - distance) {
      var _wrapperRef$getBoundi = wrapperRef.getBoundingClientRect(),
          _top = _wrapperRef$getBoundi.top,
          bottom = _wrapperRef$getBoundi.bottom,
          left = _wrapperRef$getBoundi.left,
          right = _wrapperRef$getBoundi.right;

      wrapperRef.style.width = right - left + 'px';
      wrapperRef.style.height = bottom - _top + 'px';
      wrapperRef.style.left = left + 'px';
      wrapperRef.style.top = distance + 'px';
      wrapperRef.style.position = 'fixed';
    } else {
      wrapperRef.style.position = 'static';
    }
  };

  useEffect(function () {
    window.addEventListener('scroll', handleScroll);
    setTop();
  });
  useEffect(function () {
    window.removeEventListener('scroll', handleScroll);
  });

  var setTop = function setTop() {
    if (window.scrollY === 0) {
      top = affixRef.getBoundingClientRect().top; // 挂载时若窗口滚动不为 0，先滚动至 0
    } else {
      var _window = window,
          scrollX = _window.scrollX,
          scrollY = _window.scrollY;
      window.scrollTo(scrollX, 0);
      top = affixRef.getBoundingClientRect().top;
      window.scrollTo(scrollX, scrollY);
    }
  };

  var saveAffixRef = function saveAffixRef(node) {
    affixRef = node;
  };

  var saveWrapperRef = function saveWrapperRef(node) {
    wrapperRef = node;
  };

  return /*#__PURE__*/_jsx("div", {
    className: classes(cn, ''),
    ref: saveAffixRef,
    children: /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
      className: classes(cn, 'wrapper', [className]),
      ref: saveWrapperRef,
      style: style
    }, rest), {}, {
      children: children
    }))
  });
};

export default Affix;