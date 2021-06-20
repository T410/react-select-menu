import React, { useEffect, useState, useRef } from "react";
import style from "./SelectMenu.module.css";
import { mergeClasses, sortByGroupID, findByValue, willGroupIDChange } from "../helper";

const activeStyles = mergeClasses(style.activeOuterItem, style.itemActive);
const passiveStyles = mergeClasses(style.passiveOuterItem);
function Divider() {
	return <div className={style.divider}></div>;
}

function SimpleOption({ option, className, onClick }) {
	return (
		<div className={mergeClasses(style.simpleItem, className)} onClick={() => onClick(option.value)}>
			<div className={style.itemInner}>
				<p>{option.name}</p>
			</div>
		</div>
	);
}

function DetailedOption({ option, className, onClick }) {
	return (
		<div className={mergeClasses(style.detailedItem, className)} onClick={() => onClick(option.value)}>
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

//! TODO change comment explanation
/*
React Select Menu
Creates a dropdown & select menu.
Parameters:
	options
		2D Array. When you group items in the inner array those will show up as grouped and will be divided from the others with a horizontal line. 
		If you want to grouping you can pass all of your items in a signle dimension array.

	defaultIndex
		Integer. This index decides which parameter to show "using the options array you pass".
		options will be sorted based on its groupID (see: groupID explanation) but this index will decide the default item before sorting.
		If you don't pass a defaultIndex value the firstmost element of the firstmost group will be the default item after sorting the options by groupID.

	onChange
		Function that will be called each time the user selects a new option.
		If the user selects the same item that's already been selected, this function will not be called.
		This function will not also be called when the initial render happens.
		You are free to not pass this param but why would you do that?
*/

const DEFAULT_OPTIONS = [
	{
		name: "No Option",
		value: "noOption",
		description: "No option passed to the component",
		groupID: 0,
	},
];
function SelectMenu({
	options = DEFAULT_OPTIONS,
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
		options && setSortedOptions(sortByGroupID(options));
	}, [options]);

	useEffect(() => {
		if (sortedOptions.length > 0) {
			if (defaultValue) {
				setSelectedOption(findByValue(sortedOptions, defaultValue));
			} else {
				setSelectedOption(sortedOptions[0]);
			}
		}
	}, [sortedOptions]);

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
		<div ref={selectMenuRef} className={darkMode ? style.darkMode : style.lightMode}>
			<div className={style.selectOuterContainer}>
				<div className={style.selectMiddleContainer} onClick={dropdownOpenHandler}>
					<p className={style.selectInnerContainer}>{selectedOption?.name || "Loading..."}</p>
				</div>
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
