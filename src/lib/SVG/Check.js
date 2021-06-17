import style from "./Check.module.css";
import check from "./check-light.svg";
function Check() {
	return (
		<div className={style.outerContainer}>
			<img src={check} />
		</div>
	);
}

export default Check;
