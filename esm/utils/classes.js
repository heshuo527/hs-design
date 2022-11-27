function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var prefix = "hs";

function classes(componentName) {
  var className = new Array();

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  args.forEach(function (arg) {
    if (typeof arg === "string") {
      className.push("".concat(prefix, "-").concat(componentName.toLowerCase()).concat(arg && "-" + arg));
    } else if (arg instanceof Array) {
      arg.forEach(function (str) {
        return typeof str === "string" && className.push(str);
      });
    } else if (_typeof(arg) === "object" && !(arg instanceof Array)) {
      for (var key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          className.push(key);
        }
      }
    }
  });
  return className.filter(function (v) {
    return v;
  }).join(" ");
}

export default classes;