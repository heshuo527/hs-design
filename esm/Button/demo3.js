import React from 'react';
import Button from '.';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var demo3 = function demo3() {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Button, {
      ghost: true,
      children: "Default"
    }), /*#__PURE__*/_jsx(Button, {
      ghost: true,
      type: "primary",
      children: "Primary"
    }), /*#__PURE__*/_jsx(Button, {
      ghost: true,
      type: "dashed",
      children: "Dashed"
    }), /*#__PURE__*/_jsx(Button, {
      ghost: true,
      type: "danger",
      children: "Danger"
    })]
  });
};

export default demo3;