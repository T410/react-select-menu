function mergeClasses(...args) {
	let res = [];
	args.forEach((arg) => {
		res.push(arg);
	});
	return res.join(" ");
}

function validateArray(array) {
	if (!Array.isArray(array)) {
		let optionsType = typeof array;
		throw new TypeError(`options must be "Array". Instead got "${optionsType}"`);
	}

	array.forEach((item) => {
		const keys = Object.keys(item);
		if (!keys.includes("name") || !keys.includes("value")) {
			throw new TypeError(`options objects must have "name" and "value" ${JSON.stringify(item)}`);
		}

		if (item.description && typeof item.description === "number") {
			throw new TypeError(`typeof description must be String ${JSON.stringify(item)}`);
		}

		if (item.groupID && typeof item.groupID !== "number") {
			throw new TypeError(`typeof groupID must be number ${JSON.stringify(item)}`);
		}
	});

	let fixedArray = [];
	fixedArray = array.map((x) => {
		return x.groupID !== undefined
			? x
			: {
					...x,
					groupID: Infinity,
			  };
	});

	return fixedArray;
}

function sortByGroupID(array) {
	return [...array].sort((a, b) => a.groupID - b.groupID);
}

function findByValue(array, value) {
	const result = array.filter((item) => item.value === value);
	if (result.length !== 1) {
		throw new Error(`options has ${result.length} objects that their value(s) are "${value}"`);
	}
	return result[0];
}

function willGroupIDChange(array, index) {
	return array[index].groupID !== array[index + 1]?.groupID;
}
export { mergeClasses, validateArray, sortByGroupID, findByValue, willGroupIDChange };
