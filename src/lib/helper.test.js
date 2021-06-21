import { mergeClasses, validateArray, sortByGroupID, findByValue, willGroupIDChange } from "./helper";
const unsortedArray = [
	{
		name: "Item1",
		value: "item1",
		description: "Lorem Ipsum dolor sit amet",
		groupID: 1,
	},
	{
		name: "Item2",
		value: "item2",
		description: "Lorem Ipsum dolor sit amet",
		groupID: 0,
	},
	{
		name: "Item3",
		value: "item3",
		description: "Lorem Ipsum dolor sit amet",
		groupID: 1,
	},
	{
		name: "Item4",
		value: "item4",
		description: "Lorem Ipsum dolor sit amet",
	},
	{
		name: "Item5",
		value: "item5",
		description: "Lorem Ipsum dolor sit amet",
		groupID: 2,
	},
	{
		name: "Item6",
		value: "item6",
		description: "Lorem Ipsum dolor sit amet",
		groupID: 2,
	},
	{
		name: "Item7",
		value: "item7",
		description: "Lorem Ipsum dolor sit amet",
		groupID: 0,
	},
];

test("should validate array input", () => {
	const expected = [
		{
			name: "Item1",
			value: "item1",
			description: "Lorem Ipsum dolor sit amet",
			groupID: 1,
		},
		{
			name: "Item2",
			value: "item2",
			description: "Lorem Ipsum dolor sit amet",
			groupID: 0,
		},
		{
			name: "Item3",
			value: "item3",
			description: "Lorem Ipsum dolor sit amet",
			groupID: 1,
		},
		{
			name: "Item4",
			value: "item4",
			description: "Lorem Ipsum dolor sit amet",
			groupID: Infinity,
		},
		{
			name: "Item5",
			value: "item5",
			description: "Lorem Ipsum dolor sit amet",
			groupID: 2,
		},
		{
			name: "Item6",
			value: "item6",
			description: "Lorem Ipsum dolor sit amet",
			groupID: 2,
		},
		{
			name: "Item7",
			value: "item7",
			description: "Lorem Ipsum dolor sit amet",
			groupID: 0,
		},
	];
	expect(validateArray(unsortedArray)).toEqual(expected);
});

test("should merge classNames", () => {
	const className1 = "class1",
		className2 = "class2",
		mergedFromString = mergeClasses(className1, className2);

	expect(mergedFromString).toBe("class1 class2");
});

test("should return item from array based on the property named 'value'", () => {
	const expected = {
		name: "Item6",
		value: "item6",
		description: "Lorem Ipsum dolor sit amet",
		groupID: 2,
	};

	expect(findByValue(unsortedArray, "item6")).toEqual(expected);
});

test("should not shallow mutate the original array", () => {
	const sortedArray = sortByGroupID(unsortedArray);
	expect(sortedArray.indexOf(findByValue(sortedArray, "item6"))).not.toEqual(
		unsortedArray.indexOf(findByValue(unsortedArray, "item6"))
	);
});

test("should sort array by groupID", () => {
	const sortedArray = sortByGroupID(validateArray(unsortedArray)),
		expectedArray = [
			{
				name: "Item2",
				value: "item2",
				description: "Lorem Ipsum dolor sit amet",
				groupID: 0,
			},
			{
				name: "Item7",
				value: "item7",
				description: "Lorem Ipsum dolor sit amet",
				groupID: 0,
			},
			{
				name: "Item1",
				value: "item1",
				description: "Lorem Ipsum dolor sit amet",
				groupID: 1,
			},
			{
				name: "Item3",
				value: "item3",
				description: "Lorem Ipsum dolor sit amet",
				groupID: 1,
			},
			{
				name: "Item5",
				value: "item5",
				description: "Lorem Ipsum dolor sit amet",
				groupID: 2,
			},
			{
				name: "Item6",
				value: "item6",
				description: "Lorem Ipsum dolor sit amet",
				groupID: 2,
			},
			{
				name: "Item4",
				value: "item4",
				description: "Lorem Ipsum dolor sit amet",
				groupID: Infinity,
			},
		];

	expect(sortedArray).toEqual(expectedArray);
});

test("should give error with poor inputs", () => {
	const noArray = {
		name: "Hopper",
		value: "hopper",
		description: "Grace Hopper was an American computer scientist and US Navy rear admiral.",
		groupID: 2,
	};
	expect(() => {
		validateArray(noArray);
	}).toThrow(TypeError);

	const noName = [
		{
			description: "Lorem Ipsum dolor sit amet",
			groupID: 0,
		},
	];

	expect(() => {
		validateArray(noName);
	}).toThrow(TypeError);

	const numberDescription = [
		{
			name: "Hopper",
			value: "hopper",
			description: 2,
			groupID: 2,
		},
	];

	expect(() => {
		validateArray(numberDescription);
	}).toThrow(TypeError);

	const stringGroupID = [
		{
			name: "Hopper",
			value: "hopper",
			description: "Grace Hopper was an American computer scientist and US Navy rear admiral.",
			groupID: "2",
		},
	];

	expect(() => {
		validateArray(stringGroupID);
	}).toThrow(TypeError);

	const duplicateValues = [
		{
			name: "Hopper",
			value: "hopper",
			description: "Grace Hopper was an American computer scientist and US Navy rear admiral.",
			groupID: 2,
		},
		{
			name: "Teitelbaum",
			value: "hopper",
			description: "Ruth Teitelbaum was one of the first computer programmers in the world",
			groupID: 1,
		},
	];

	expect(() => {
		findByValue(duplicateValues, "hopper");
	}).toThrow(Error);
});

test("should detect if the next item of the array will have different groupID than current item", () => {
	expect(willGroupIDChange(unsortedArray, 0)).toBe(true);
	expect(willGroupIDChange(unsortedArray, 1)).toBe(true);
	expect(willGroupIDChange(unsortedArray, 2)).toBe(true);
});
