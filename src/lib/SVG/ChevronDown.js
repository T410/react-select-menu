import style from "./ChevronDown.module.css";
import chevron from "./chevron-down.svg";
function ChevronDown() {
	return (
		<div className={style.outerContainer}>
			<img src={chevron} />
		</div>
	);
}

export default ChevronDown;
