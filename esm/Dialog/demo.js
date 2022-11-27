import React from "react";
import Dialog from ".";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var Demo1 = function Demo1() {
  return /*#__PURE__*/_jsx(Dialog, {
    title: "\u6807\u9898",
    content: /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("p", {
        children: "1. \u5185\u5BB9\u662F"
      }), /*#__PURE__*/_jsx("p", {
        children: "2. \u5185\u5BB9\u662F"
      }), /*#__PURE__*/_jsx("p", {
        children: "3. \u5185\u5BB9\u662F"
      })]
    }),
    cancelText: "\u53D6\u6D88",
    onText: "\u786E\u8BA4",
    children: "Open Dialog"
  });
};

export default Demo1;