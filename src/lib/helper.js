function mergeClasses(...args) {
	let res = [];
	args.forEach((arg) => {
		res.push(arg);
	});
	return res.join(" ");
}

function validateArray(array) {
	return array.map((x) => {
		return x.groupID !== undefined
			? x
			: {
					...x,
					groupID: Infinity,
			  };
	});
}

function sortByGroupID(array) {
	return [...array].sort((a, b) => a.groupID - b.groupID);
}

function findByValue(array, value) {
	return array.find((item) => item.value === value);
}

function willGroupIDChange(array, index) {
	return array[index].groupID !== array[index + 1]?.groupID;
}
export { mergeClasses, validateArray, sortByGroupID, findByValue, willGroupIDChange };
