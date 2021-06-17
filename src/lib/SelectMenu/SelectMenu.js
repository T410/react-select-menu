import { useState } from "react";
import style from "./SelectMenu.module.css";
import ChevronDown from "../SVG/ChevronDown";
import Check from "../SVG/Check";
function SelectMenu({ options = [] }) {
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [defaultOption, setDefaultOption] = useState(options.length ? options[0].name : "No option");
	const dropdownOpenHandler = () => {
		setDropdownVisible(!dropdownVisible);
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
					{options.map((option, index) => {
						return (
							<div className={style.items}>
								<Check />
								<p key={index}>{option.name}</p>
							</div>
						);
					})}
				</div>
			) : null}
		</>
	);
}

export default SelectMenu;
