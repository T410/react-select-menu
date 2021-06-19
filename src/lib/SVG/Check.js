import style from "./Check.module.css";
import check from "./check-light.svg";
function Check({ isSelected }) {
	return (
		<div className={style.outerContainer}>
			<img src={check} className={isSelected ? style.visible : style.hidden} />
		</div>
	);
}

export default Check;
