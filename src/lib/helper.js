function mergeClasses(...args) {
	let res = [];
	args.forEach((arg) => {
		res.push(arg);
	});
	return res.join(" ");
}

function getKeyArray(array) {
	return [...new Set(array.map((x) => x.groupID))];
}

function filter(array, value) {
	return array.filter((x) => x.groupID === value);
}

function setIndexes(array) {
	return array.map((x, index) => {
		return { ...x, index };
	});
}

function divideByGroupID(array) {
	let _array = setIndexes(array.sort((a, b) => a.groupID - b.groupID));
	const keyArray = getKeyArray(_array);
	return keyArray.map((x) => {
		return filter(_array, x);
	});
}

export { mergeClasses, divideByGroupID };
