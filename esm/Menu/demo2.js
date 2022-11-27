import React from 'react';
import { Menu, MenuItem, SubMenu } from '.';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var demo = function demo() {
  return /*#__PURE__*/_jsxs(Menu, {
    mode: "vertical",
    defaultIndex: '0',
    onSelect: function onSelect() {
      return console.log(111);
    },
    defaultOpenSubMenu: ['3'],
    children: [/*#__PURE__*/_jsx(MenuItem, {
      children: "\u9996\u9875"
    }), /*#__PURE__*/_jsx(MenuItem, {
      children: "\u4F5C\u54C1\u96C6"
    }), /*#__PURE__*/_jsx(MenuItem, {
      disabled: true,
      children: "\u5173\u4E8E\u6211\u4EEC"
    }), /*#__PURE__*/_jsxs(SubMenu, {
      title: "dropdown",
      children: [/*#__PURE__*/_jsx(MenuItem, {
        children: "dropdown 1"
      }), /*#__PURE__*/_jsx(MenuItem, {
        children: "dropdown 2"
      })]
    }), /*#__PURE__*/_jsx(MenuItem, {
      children: "\u5E38\u89C1\u95EE\u9898"
    })]
  });
};

export default demo;