function mergeClasses(...args) {
	let res = [];
	args.forEach((arg) => {
		res.push(arg);
	});
	return res.join(" ");
}

function groupItems(array) {
	return array.map((innerArray, groupIndex) => {
		let itemCount = 0;
		return {
			groupIndex,
			items: innerArray.map((item) => {
				itemCount++;
				return item;
			}),
			itemCount,
		};
	});
}

function validateAndConvertArray(array) {
	if (!Array.isArray(array)) {
		throw new Error("Error: options should be Array");
	}

	if (!array.length) {
		throw new Error("Error: options should have at least 1 printable (String or Number) item");
	}

	return groupItems(array);
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
export { mergeClasses, validateAndConvertArray, sortByGroupID, findByValue, willGroupIDChange };
