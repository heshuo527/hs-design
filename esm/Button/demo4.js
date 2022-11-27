import React from 'react';
import Button from '.';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function demo4() {
  var demoOnClick = function demoOnClick() {
    console.log('我不会执行');
  };

  var actOnClick = function actOnClick() {
    console.log('我执行了');
  };

  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Button, {
      onClick: actOnClick,
      children: "disabled off"
    }), /*#__PURE__*/_jsx(Button, {
      disabled: true,
      onClick: function onClick() {
        return console.log('我不会执行');
      },
      type: "primary",
      children: "disabled"
    }), /*#__PURE__*/_jsx(Button, {
      disabled: true,
      size: "large",
      onClick: demoOnClick,
      type: "danger",
      children: "disabled"
    }), /*#__PURE__*/_jsx(Button, {
      disabled: true,
      ghost: true,
      type: "primary",
      children: "disabled ghost"
    })]
  });
}

export default demo4;