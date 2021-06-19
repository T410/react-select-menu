import { useState, useEffect } from "react";
import { sliceArray } from "../helper";
function Items({ options }) {
	// const [slicedOptions, setSlicedOptions] = useState([]);
	// useEffect(() => {
	// 	setSlicedOptions(sliceArray(options, "groupID"));
	// }, [options]);
	// return slicedOptions.map((options) => {
	// 	return options.items.map((option, index) => {
	// 		return (
	// 			<div className={index === activeOptionIndex ? activeStyles : passiveStyles} key={index}>
	// 				<div className={style.item} onClick={() => itemClickHandler({ index, option })}>
	// 					<Check />
	// 					<p>{option.name}</p>
	// 				</div>
	// 			</div>
	// 		);
	// 	});
	// });
}

export default Items;
