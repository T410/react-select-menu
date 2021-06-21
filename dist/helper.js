"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeClasses = mergeClasses;
exports.validateArray = validateArray;
exports.sortByGroupID = sortByGroupID;
exports.findByValue = findByValue;
exports.willGroupIDChange = willGroupIDChange;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function mergeClasses() {
  var res = [];

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (arg) {
    res.push(arg);
  });
  return res.join(" ");
}

function validateArray(array) {
  if (!Array.isArray(array)) {
    var optionsType = _typeof(array);

    throw new TypeError("options must be \"Array\". Instead got \"".concat(optionsType, "\""));
  }

  array.forEach(function (item) {
    var keys = Object.keys(item);

    if (!keys.includes("name") || !keys.includes("value")) {
      throw new TypeError("options objects must have \"name\" and \"value\" ".concat(JSON.stringify(item)));
    }

    if (item.description && typeof item.description === "number") {
      throw new TypeError("typeof description must be String ".concat(JSON.stringify(item)));
    }

    if (item.groupID && typeof item.groupID !== "number") {
      throw new TypeError("typeof groupID must be number ".concat(JSON.stringify(item)));
    }
  });
  var fixedArray = [];
  fixedArray = array.map(function (x) {
    return x.groupID !== undefined ? x : _objectSpread(_objectSpread({}, x), {}, {
      groupID: Infinity
    });
  });
  return fixedArray;
}

function sortByGroupID(array) {
  return _toConsumableArray(array).sort(function (a, b) {
    return a.groupID - b.groupID;
  });
}

function findByValue(array, value) {
  var result = array.filter(function (item) {
    return item.value === value;
  });

  if (result.length !== 1) {
    throw new Error("options has ".concat(result.length, " objects that their value(s) are \"").concat(value, "\""));
  }

  return result[0];
}

function willGroupIDChange(array, index) {
  var _array;

  return array[index].groupID !== ((_array = array[index + 1]) === null || _array === void 0 ? void 0 : _array.groupID);
}