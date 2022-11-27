var _excluded = ["className", "size", "style", "children", "loading", "onClick"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { classes } from "../utils";
import "./style/index.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var componentName = 'Icon';

var Icon = function Icon(props) {
  var className = props.className,
      size = props.size,
      style = props.style,
      children = props.children,
      loading = props.loading,
      onClick = props.onClick,
      rest = _objectWithoutProperties(props, _excluded);

  var handleClickIcon = function handleClickIcon(event) {
    if (onClick) {
      onClick(event);
    }
  };

  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("svg", {
      className: classes(componentName, loading ? 'loading' : '', [className]),
      onClick: handleClickIcon,
      "aria-hidden": "true",
      width: "16px",
      height: "16.00px",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      style: Object.assign({}, style, {
        width: size + 'px',
        height: size + 'px',
        marginRight: '6px'
      }),
      children: props.children
    })
  });
};

Icon.displayName = componentName;
Icon.defaultProps = {
  size: 16
};
export var MyIcon = function MyIcon(props) {
  return /*#__PURE__*/_jsx(Icon, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/_jsx("path", {
      fill: "#fff",
      d: "M512.355237 68.755595a202.943599 202.943599 0 1 1-143.492927 59.439213A201.602865 201.602865 0 0 1 512.355237 68.755595m0-68.755595C362.30761 0 240.667502 121.640107 240.667502 271.699194s121.640107 271.687735 271.687735 271.687735 271.699194-121.640107 271.699195-271.687735S662.368487 0 512.355237 0zM766.762399 647.769382a160.429722 160.429722 0 0 1 155.353268 120.425426l32.223456 125.100805a49.595703 49.595703 0 0 1-48.025784 61.948792H118.397135a49.572784 49.572784 0 0 1-48.014324-61.948792l32.211997-125.100805a160.429722 160.429722 0 0 1 155.364726-120.425426h508.791406m0-68.755595h-508.791406A229.185318 229.185318 0 0 0 36.016473 751.051746L3.804476 876.141092c-19.285944 74.897762 37.265533 147.82453 114.592659 147.82453H906.313339c77.338585 0 133.890063-72.961146 114.592659-147.82453l-32.200537-125.089346a229.185318 229.185318 0 0 0-221.943062-172.037959z"
    })
  }));
};
export var SettingIcon = function SettingIcon(props) {
  return /*#__PURE__*/_jsx(Icon, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/_jsx("path", {
      fill: "#fff",
      d: "M991.078 575.465l-101.71 0c-10.154 57.873-33.486 111.084-66.409 157.07l72.873 72.873c12.488 12.488 12.488 32.725 0 45.212l-45.212 45.212c-12.488 12.488-32.725 12.488-45.212 0l-73.186-73.186c-46.069 32.52-98.801 56.3-156.757 66.076l0 102.356c0 17.654-14.316 31.97-31.97 31.97l-63.941 0c-17.654 0-31.97-14.316-31.97-31.97L447.584 888.722c-58.02-9.789-111.346-32.853-157.377-65.456l-72.566 72.566c-12.488 12.488-32.725 12.488-45.212 0l-45.212-45.212c-12.488-12.488-12.488-32.725 0-45.212l72.361-72.361c-32.859-46.031-56.082-99.434-65.897-157.581L31.97 575.466c-17.654 0-31.97-14.316-31.97-31.97l0-63.94c0-17.654 14.316-31.97 31.97-31.97l101.71 0c10.154-57.873 33.486-111.084 66.409-157.07l-72.873-72.873c-12.488-12.488-12.488-32.725 0-45.212l45.212-45.212c12.488-12.488 32.725-12.488 45.212 0l73.186 73.186c46.069-32.52 98.801-56.3 156.757-66.076L447.583 31.97C447.584 14.316 461.9 0 479.554 0l63.941 0c17.654 0 31.97 14.316 31.97 31.97l0 102.356c58.02 9.789 111.346 32.853 157.377 65.456l72.566-72.566c12.488-12.488 32.725-12.488 45.212 0l45.212 45.212c12.488 12.488 12.488 32.725 0 45.212l-72.362 72.361c32.859 46.031 56.082 99.434 65.897 157.581l101.71 0c17.654 0 31.97 14.316 31.97 31.97l0 63.94C1023.048 561.148 1008.732 575.465 991.078 575.465zM511.524 255.762c-141.251 0-255.762 114.511-255.762 255.762s114.511 255.762 255.762 255.762 255.762-114.511 255.762-255.762S652.775 255.762 511.524 255.762z",
      "p-id": "3691"
    })
  }));
};
export var LoadingIcon = function LoadingIcon(props) {
  return /*#__PURE__*/_jsx(Icon, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/_jsx("path", {
      d: "M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z",
      "p-id": "2776",
      fill: "#ffffff"
    })
  }));
};
export var SearchIcon = function SearchIcon(props) {
  return /*#__PURE__*/_jsx(Icon, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/_jsx("path", {
      d: "M889.173333 829.781333l-16.469333 16.64a23.082667 23.082667 0 0 1-32.938667 0l-136.533333-138.154666a345.301333 345.301333 0 0 1-225.877333 84.138666C284.416 792.405333 128 634.112 128 438.869333S284.416 85.333333 477.354667 85.333333s349.354667 158.293333 349.354666 353.536c0 82.517333-28.16 158.293333-75.008 218.453334l137.472 139.093333a23.722667 23.722667 0 0 1 0 33.365333z m-411.818666-673.706666c-154.368 0-279.466667 126.592-279.466667 282.794666 0 156.16 125.098667 282.794667 279.466667 282.794667s279.466667-126.592 279.466666-282.794667-125.098667-282.837333-279.466666-282.837333z",
      "p-id": "3278",
      fill: "#e6e6e6"
    })
  }));
};
export var SearchSIcon = function SearchSIcon(props) {
  return /*#__PURE__*/_jsx(Icon, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/_jsx("path", {
      d: "M955.069071 864.311021 740.015134 649.258107c-3.752464-3.751441-8.841366-5.860475-14.149255-5.860475-5.306866 0-10.395768 2.108011-14.149255 5.860475l-16.692171 16.692171-38.34226-38.34226c53.03796-59.810201 85.298711-138.442072 85.298711-224.478588 0-186.774871-151.952784-338.727655-338.727655-338.727655S64.527642 216.35456 64.527642 403.12943c0 186.775894 151.952784 338.728678 338.727655 338.728678 86.36909 0 165.276231-32.510438 225.170343-85.913718l38.303374 38.303374-17.34504 17.34504c-7.812943 7.813966-7.812943 20.48352 0 28.297486l215.051891 215.052914c3.753487 3.751441 8.841366 5.860475 14.149255 5.860475 5.306866 0 10.395768-2.108011 14.149255-5.860475l62.334697-62.334697C962.883037 884.794541 962.883037 872.124987 955.069071 864.311021zM104.546078 403.12943c0-164.709319 133.9999-298.709219 298.709219-298.709219s298.709219 133.9999 298.709219 298.709219S567.964616 701.839673 403.255297 701.839673 104.546078 567.838749 104.546078 403.12943zM878.585119 912.496463 691.829691 725.741036l34.036187-34.036187 186.755428 186.755428L878.585119 912.496463z",
      "p-id": "5026",
      fill: "#e6e6e6"
    })
  }));
};
export var DoneIcon = function DoneIcon(props) {
  return /*#__PURE__*/_jsxs(Icon, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/_jsx("path", {
      d: "M486.4 630.4c-19.2 19.2-48 19.2-67.2 3.2l-137.6-131.2-32 35.2 137.6 131.2c38.4 35.2 96 35.2 134.4-3.2l281.6-297.6-35.2-32L486.4 630.4z",
      "p-id": "6863",
      fill: "#e6e6e6"
    }), /*#__PURE__*/_jsx("path", {
      d: "M512 51.2c-252.8 0-460.8 204.8-460.8 460.8s204.8 460.8 460.8 460.8 460.8-204.8 460.8-460.8S764.8 51.2 512 51.2zM512 924.8c-227.2 0-412.8-185.6-412.8-412.8s185.6-412.8 412.8-412.8 412.8 185.6 412.8 412.8S739.2 924.8 512 924.8z",
      "p-id": "6864",
      fill: "#e6e6e6"
    })]
  }));
};
export var UpArrowsIcon = function UpArrowsIcon(props) {
  return /*#__PURE__*/_jsx(Icon, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/_jsx("path", {
      d: "M96.196 671.807l415.804-415.632 415.803 415.632-63.616 63.445-352.209-352.017-352.102 352.017z",
      "p-id": "8043"
    })
  }));
};
export var ToggleIcon = function ToggleIcon(props) {
  return /*#__PURE__*/_jsx(Icon, _objectSpread(_objectSpread({}, props), {}, {
    children: props.loading ? /*#__PURE__*/_jsx("path", {
      d: "M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z",
      "p-id": "2776",
      fill: "#ffffff"
    }) : /*#__PURE__*/_jsx("path", {
      fill: "#fff",
      d: "M991.078 575.465l-101.71 0c-10.154 57.873-33.486 111.084-66.409 157.07l72.873 72.873c12.488 12.488 12.488 32.725 0 45.212l-45.212 45.212c-12.488 12.488-32.725 12.488-45.212 0l-73.186-73.186c-46.069 32.52-98.801 56.3-156.757 66.076l0 102.356c0 17.654-14.316 31.97-31.97 31.97l-63.941 0c-17.654 0-31.97-14.316-31.97-31.97L447.584 888.722c-58.02-9.789-111.346-32.853-157.377-65.456l-72.566 72.566c-12.488 12.488-32.725 12.488-45.212 0l-45.212-45.212c-12.488-12.488-12.488-32.725 0-45.212l72.361-72.361c-32.859-46.031-56.082-99.434-65.897-157.581L31.97 575.466c-17.654 0-31.97-14.316-31.97-31.97l0-63.94c0-17.654 14.316-31.97 31.97-31.97l101.71 0c10.154-57.873 33.486-111.084 66.409-157.07l-72.873-72.873c-12.488-12.488-12.488-32.725 0-45.212l45.212-45.212c12.488-12.488 32.725-12.488 45.212 0l73.186 73.186c46.069-32.52 98.801-56.3 156.757-66.076L447.583 31.97C447.584 14.316 461.9 0 479.554 0l63.941 0c17.654 0 31.97 14.316 31.97 31.97l0 102.356c58.02 9.789 111.346 32.853 157.377 65.456l72.566-72.566c12.488-12.488 32.725-12.488 45.212 0l45.212 45.212c12.488 12.488 12.488 32.725 0 45.212l-72.362 72.361c32.859 46.031 56.082 99.434 65.897 157.581l101.71 0c17.654 0 31.97 14.316 31.97 31.97l0 63.94C1023.048 561.148 1008.732 575.465 991.078 575.465zM511.524 255.762c-141.251 0-255.762 114.511-255.762 255.762s114.511 255.762 255.762 255.762 255.762-114.511 255.762-255.762S652.775 255.762 511.524 255.762z",
      "p-id": "3691"
    })
  }));
};