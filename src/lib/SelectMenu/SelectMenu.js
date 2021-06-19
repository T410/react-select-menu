import { useEffect, useState } from "react";
import style from "./SelectMenu.module.css";
import ChevronDown from "../SVG/ChevronDown";
import Check from "../SVG/Check";
// import Items from "./Items";
import { mergeClasses, divideByGroupID } from "../helper";

const activeStyles = mergeClasses(style.item, style.activeOuterItem, style.itemActive);
const passiveStyles = mergeClasses(style.item, style.passiveOuterItem);
function Divider() {
	return <div className={style.divider}></div>;
}

function Item({ option, index, className, onClick, isSelected = false }) {
	return (
		<div className={className} onClick={() => onClick({ index, option })}>
			<Check />
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
		console.log(index);
		setActiveOptionIndex(index);
		onChange({ index, option });
	};

	return (
		<>
			<div className={style.outerContainer}>
				<div className={style.select} onClick={dropdownOpenHandler}>
					<p className={style.visibleOption}>{defaultOption}</p>
					<ChevronDown />
				</div>
			</div>
			{dropdownVisible ? (
				<div className={style.dropdown}>
					{dividedOptions.map((divisions, index) => {
						return (
							<>
								<GroupedItems
									options={divisions}
									onClick={itemClickHandler}
									activeIndex={activeOptionIndex}
									key={index}
								/>
								<Divider />
							</>
						);
					})}
				</div>
			) : null}
		</>
	);
}

export default SelectMenu;
