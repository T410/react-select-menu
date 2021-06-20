"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeClasses = mergeClasses;
exports.validateAndConvertArray = validateAndConvertArray;
exports.sortByGroupID = sortByGroupID;
exports.findByValue = findByValue;
exports.willGroupIDChange = willGroupIDChange;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function groupItems(array) {
  return array.map(function (innerArray, groupIndex) {
    var itemCount = 0;
    return {
      groupIndex: groupIndex,
      items: innerArray.map(function (item) {
        itemCount++;
        return item;
      }),
      itemCount: itemCount
    };
  });
}

function validateAndConvertArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("Error: options should be Array");
  }

  if (!array.length) {
    throw new Error("Error: options should have at least 1 printable (String or Number) item");
  }

  return groupItems(array);
}

function sortByGroupID(array) {
  return _toConsumableArray(array).sort(function (a, b) {
    return a.groupID - b.groupID;
  });
}

function findByValue(array, value) {
  return array.find(function (item) {
    return item.value === value;
  });
}

function willGroupIDChange(array, index) {
  var _array;

  return array[index].groupID !== ((_array = array[index + 1]) === null || _array === void 0 ? void 0 : _array.groupID);
}