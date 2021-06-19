import React, { useEffect, useState } from "react";
import style from "./SelectMenu.module.css";
import { mergeClasses, divideByGroupID } from "../helper";

const activeStyles = mergeClasses(style.item, style.activeOuterItem, style.itemActive);
const passiveStyles = mergeClasses(style.item, style.passiveOuterItem);
function Divider() {
	return <div className={style.divider}></div>;
}

function Item({ option, index, className, onClick }) {
	return (
		<div className={className} onClick={() => onClick({ index, option })}>
			<p>{option.name}</p>
		</div>
	);
}

function GroupedItems({ options, onClick, activeIndex }) {
	return options.map((option) => {
		return (
			<Item
				option={option}
				index={option.index}
				isSelected={option.index === activeIndex}
				className={option.index === activeIndex ? activeStyles : passiveStyles}
				onClick={onClick}
				key={option.index}
			/>
		);
	});
}

function SelectMenu({ options = [], onChange = () => {} }) {
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [activeOptionIndex, setActiveOptionIndex] = useState(0);
	const [dividedOptions, setDividedOptions] = useState([]);
	const defaultOption = options.length ? options[activeOptionIndex].name : "No option";

	useEffect(() => {
		setDividedOptions(divideByGroupID(options));
	}, [options]);

	const dropdownOpenHandler = () => {
		setDropdownVisible(!dropdownVisible);
	};

	const itemClickHandler = ({ index, option }) => {
		setActiveOptionIndex(index);
		onChange({ index, option });
	};

	return (
		<>
			<div className={style.selectOuterContainer}>
				<div className={style.selectMiddleContainer} onClick={dropdownOpenHandler}>
					<p className={style.selectInnerContainer}>{defaultOption}</p>
				</div>
			</div>
			{dropdownVisible ? (
				<div className={style.dropdown}>
					{dividedOptions.map((divisions, index) => {
						return (
							<React.Fragment key={index}>
								<GroupedItems options={divisions} onClick={itemClickHandler} activeIndex={activeOptionIndex} />
								{dividedOptions[index + 1] && <Divider />}
							</React.Fragment>
						);
					})}
				</div>
			) : null}
		</>
	);
}

export default SelectMenu;
