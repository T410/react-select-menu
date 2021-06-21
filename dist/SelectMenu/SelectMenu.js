"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _SelectMenuModule = _interopRequireDefault(require("./SelectMenu.module.css"));

var _helper = require("../helper");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var activeStyles = (0, _helper.mergeClasses)(_SelectMenuModule.default.activeOuterItem, _SelectMenuModule.default.itemActive);
var passiveStyles = (0, _helper.mergeClasses)(_SelectMenuModule.default.passiveOuterItem);

function Divider() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _SelectMenuModule.default.divider
  });
}

function SimpleOption(_ref) {
  var option = _ref.option,
      className = _ref.className,
      _onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _helper.mergeClasses)(_SelectMenuModule.default.simpleItem, className),
    onClick: function onClick() {
      return _onClick(option.value);
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _SelectMenuModule.default.itemInner,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: option.name
      })
    })
  });
}

function DetailedOption(_ref2) {
  var option = _ref2.option,
      className = _ref2.className,
      _onClick2 = _ref2.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _helper.mergeClasses)(_SelectMenuModule.default.detailedItem, className),
    onClick: function onClick() {
      return _onClick2(option.value);
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _SelectMenuModule.default.itemInner,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: _SelectMenuModule.default.detailedItemInner,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: option.name
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: option.description
        })]
      })
    })
  });
}

function Option(_ref3) {
  var option = _ref3.option,
      isSimple = _ref3.isSimple,
      className = _ref3.className,
      onClick = _ref3.onClick;
  return isSimple ? /*#__PURE__*/(0, _jsxRuntime.jsx)(SimpleOption, {
    option: option,
    className: className,
    onClick: onClick
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(DetailedOption, {
    option: option,
    className: className,
    onClick: onClick
  });
}
/*
React Select Menu
Creates a dropdown & select menu.
Parameters:
	options: Array of Objects. Each object takes name, value, description, groupID
			name: String or Number
			value: String or Number
			description: String [optional]
			groupID: Number [optional]
						Options will be visibily divided into groups with a horizontal divider. 
						The options array will be sorted by the groupID. So if an option has groupID of 0 but has an another option with the groupID of 1, 
							the option which has the groupID of 0 will be on top of the other option.
			
		ie: 
		[
			{
				name: "Hopper",
				value: "hopper",
				description: "Grace Hopper was an American computer scientist and US Navy rear admiral.",
				groupID: 0,
			},
			{
				name: "Holberton",
				value: "holberton",
				description: "Frances Elizabeth Holberton was one of the programmers of the first computer.",
				groupID: 1,
			}
		]

	defaultValue: String of Number [optional]
					If no value provided then the first option after sorting the options by the groupID will be the default selected option.

	isSimple: Boolean [optional]
				If set true then the component will only show names of the options.
				If set false then the component will show both names and the descriptions of the options.
				Default is set to true

	maxWidth: Number [optional]
				Maximum width of the dropdown div
				Default is set to 300

	darkMode: Boolean [optional]
				If set true then the component will appear in dark mode.
				If set false then the component will appear in light mode.
				Default is set to true

	onChange: Function
				Returns the selected option object.
*/


var DEFAULT_OPTION = [{
  name: "No Option",
  value: "noOption",
  description: "No option passed to the component",
  groupID: 0
}];

function SelectMenu(_ref4) {
  var _ref4$options = _ref4.options,
      options = _ref4$options === void 0 ? DEFAULT_OPTION : _ref4$options,
      defaultValue = _ref4.defaultValue,
      _ref4$isSimple = _ref4.isSimple,
      isSimple = _ref4$isSimple === void 0 ? true : _ref4$isSimple,
      _ref4$darkMode = _ref4.darkMode,
      darkMode = _ref4$darkMode === void 0 ? false : _ref4$darkMode,
      _ref4$maxWidth = _ref4.maxWidth,
      maxWidth = _ref4$maxWidth === void 0 ? 300 : _ref4$maxWidth,
      _ref4$onChange = _ref4.onChange,
      onChange = _ref4$onChange === void 0 ? function () {} : _ref4$onChange;
  var selectMenuRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      sortedOptions = _useState2[0],
      setSortedOptions = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dropdownVisible = _useState4[0],
      setDropdownVisible = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedOption = _useState6[0],
      setSelectedOption = _useState6[1];

  var clickAwayHandler = function clickAwayHandler(e) {
    if (selectMenuRef.current) {
      if (selectMenuRef.current.contains(e.target)) {
        return;
      } else {
        setDropdownVisible(false);
      }
    }
  };

  (0, _react.useEffect)(function () {
    document.addEventListener("mousedown", clickAwayHandler);
    return function () {
      document.removeEventListener("mousedown", clickAwayHandler);
    };
  }, []);
  (0, _react.useEffect)(function () {
    options && setSortedOptions((0, _helper.sortByGroupID)((0, _helper.validateArray)(options)));
  }, [options]);
  (0, _react.useEffect)(function () {
    if (sortedOptions.length > 0) {
      if (defaultValue) {
        setSelectedOption((0, _helper.findByValue)(sortedOptions, defaultValue));
      } else {
        setSelectedOption(sortedOptions[0]);
      }
    }
  }, [sortedOptions, defaultValue]);

  var dropdownOpenHandler = function dropdownOpenHandler() {
    setDropdownVisible(!dropdownVisible);
  };

  var itemClickHandler = function itemClickHandler(value) {
    if (selectedOption.value !== value) {
      var foundOption = (0, _helper.findByValue)(sortedOptions, value);
      setSelectedOption(foundOption);
      onChange(foundOption);
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: selectMenuRef,
    className: (0, _helper.mergeClasses)(darkMode ? _SelectMenuModule.default.darkMode : _SelectMenuModule.default.lightMode, _SelectMenuModule.default.selectOuterContainer),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _SelectMenuModule.default.selectMiddleContainer,
      onClick: dropdownOpenHandler,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: _SelectMenuModule.default.selectInnerContainer,
        children: (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.name) || "Loading..."
      })
    }), dropdownVisible ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _SelectMenuModule.default.dropdown,
      style: {
        maxWidth: maxWidth
      },
      children: sortedOptions === null || sortedOptions === void 0 ? void 0 : sortedOptions.map(function (option, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.default.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Option, {
            option: option,
            isSimple: isSimple,
            className: option.value === selectedOption.value ? activeStyles : passiveStyles,
            onClick: itemClickHandler
          }), (0, _helper.willGroupIDChange)(sortedOptions, index) && /*#__PURE__*/(0, _jsxRuntime.jsx)(Divider, {})]
        }, index);
      })
    }) : null]
  });
}

var _default = SelectMenu;
exports.default = _default;