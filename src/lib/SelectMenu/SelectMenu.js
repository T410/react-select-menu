import React, { useEffect, useState, useRef } from "react";
import style from "./SelectMenu.module.css";
import { mergeClasses, validateArray, sortByGroupID, findByValue, willGroupIDChange } from "../helper";

const activeStyles = mergeClasses(style.activeOuterItem, style.itemActive);
const passiveStyles = mergeClasses(style.passiveOuterItem);
function Divider() {
	return <div className={style.divider}></div>;
}

function SimpleOption({ option, className, onClick }) {
	return (
		<div
			className={mergeClasses(style.simpleItem, className)}
			onClick={() => onClick(option.value)}
			data-testid="simple-option"
		>
			<div className={style.itemInner}>
				<p>{option.name}</p>
			</div>
		</div>
	);
}

function DetailedOption({ option, className, onClick }) {
	return (
		<div
			className={mergeClasses(style.detailedItem, className)}
			onClick={() => onClick(option.value)}
			data-testid="detailed-option"
		>
			<div className={style.itemInner}>
				<div className={style.detailedItemInner}>
					<p>{option.name}</p>
					<p>{option.description}</p>
				</div>
			</div>
		</div>
	);
}

function Option({ option, isSimple, className, onClick }) {
	return isSimple ? (
		<SimpleOption option={option} className={className} onClick={onClick} />
	) : (
		<DetailedOption option={option} className={className} onClick={onClick} />
	);
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

const DEFAULT_OPTION = [
	{
		name: "No Option",
		value: "noOption",
		description: "No option passed to the component",
		groupID: 0,
	},
];
function SelectMenu({
	options = DEFAULT_OPTION,
	defaultValue,
	isSimple = true,
	darkMode = false,
	maxWidth = 300,
	onChange = () => {},
}) {
	const selectMenuRef = useRef(null);
	const [sortedOptions, setSortedOptions] = useState([]);
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [selectedOption, setSelectedOption] = useState({});

	const clickAwayHandler = (e) => {
		if (selectMenuRef.current) {
			if (selectMenuRef.current.contains(e.target)) {
				return;
			} else {
				setDropdownVisible(false);
			}
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", clickAwayHandler);

		return () => {
			document.removeEventListener("mousedown", clickAwayHandler);
		};
	}, []);

	useEffect(() => {
		options && setSortedOptions(sortByGroupID(validateArray(options)));
	}, [options]);

	useEffect(() => {
		if (sortedOptions.length > 0) {
			if (defaultValue) {
				setSelectedOption(findByValue(sortedOptions, defaultValue));
			} else {
				setSelectedOption(sortedOptions[0]);
			}
		}
	}, [sortedOptions, defaultValue]);

	const dropdownOpenHandler = () => {
		setDropdownVisible(!dropdownVisible);
	};

	const itemClickHandler = (value) => {
		if (selectedOption.value !== value) {
			const foundOption = findByValue(sortedOptions, value);
			setSelectedOption(foundOption);
			onChange(foundOption);
		}
	};

	return (
		<div
			ref={selectMenuRef}
			className={mergeClasses(darkMode ? style.darkMode : style.lightMode, style.selectOuterContainer)}
		>
			<div className={style.selectMiddleContainer} onClick={dropdownOpenHandler}>
				<p className={style.selectInnerContainer} data-testid="selected-option">
					{selectedOption?.name || "Loading..."}
				</p>
			</div>
			{dropdownVisible ? (
				<div className={style.dropdown} style={{ maxWidth: maxWidth }}>
					{sortedOptions?.map((option, index) => {
						return (
							<React.Fragment key={index}>
								<Option
									option={option}
									isSimple={isSimple}
									className={option.value === selectedOption.value ? activeStyles : passiveStyles}
									onClick={itemClickHandler}
								/>
								{willGroupIDChange(sortedOptions, index) && <Divider />}
							</React.Fragment>
						);
					})}
				</div>
			) : null}
		</div>
	);
}

export default SelectMenu;
