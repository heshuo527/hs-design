import React from 'react';
import Dialog from '.';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function Demo2() {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Dialog, {
      onDialogSize: "small",
      type: "default",
      children: "small Dialog"
    }), /*#__PURE__*/_jsx(Dialog, {
      onDialogSize: "medium",
      type: "danger",
      children: "medium Dialog"
    }), /*#__PURE__*/_jsx(Dialog, {
      onDialogSize: "large",
      children: "large Dialog"
    })]
  });
}

export default Demo2;