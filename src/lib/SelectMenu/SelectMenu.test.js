import SelectMenu from "./SelectMenu";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

const options = [
	{
		name: "Hopper",
		value: "hopper",
		description: "Grace Hopper was an American computer scientist and US Navy rear admiral.",
		groupID: 2,
	},
	{
		name: "Holberton",
		value: "holberton",
		description: "Frances Elizabeth Holberton was one of the programmers of the first computer.",
		groupID: 2,
	},
	{
		name: "Teitelbaum",
		value: "teitelbaum",
		description: "Ruth Teitelbaum was one of the first computer programmers in the world",
		groupID: 1,
	},
	{
		name: "Tayyib",
		value: "tayyib",
		description: "Hey, it's me!",
	},
	{
		name: "No Description",
		value: "noDesc",
		groupID: 3,
	},
];

describe("test for app", () => {
	it("renders the closed SelectMenu with no data provided", () => {
		const { getByText } = render(<SelectMenu />);
		expect(getByText("No Option"));
	});

	it("renders the opened simple SelectMenu with no data provided", () => {
		const { getByText, getAllByText } = render(<SelectMenu />);
		fireEvent.click(getByText("No Option"));
		expect(getAllByText("No Option").length).toEqual(2);
	});

	it("renders the opened detailed SelectMenu with no data provided", () => {
		const { getByText } = render(<SelectMenu isSimple={false} />);
		fireEvent.click(getByText("No Option"));
		expect(getByText("No option passed to the component"));
	});

	it("renders the default item as selected when simple SelectMenu is opened with no data provided", () => {
		const { getByText, getByTestId } = render(<SelectMenu isSimple={true} />);
		fireEvent.click(getByText("No Option"));
		expect(getByTestId("simple-option")).toHaveClass("itemActive");
	});

	it("renders the default item as selected when detailed SelectMenu is opened with no data provided", () => {
		const { getByText, getByTestId } = render(<SelectMenu isSimple={false} />);
		fireEvent.click(getByText("No Option"));
		expect(getByTestId("detailed-option")).toHaveClass("itemActive");
	});

	it("renders detailed SelectMenu with options with actions", () => {
		const { getByText, getByTestId } = render(<SelectMenu isSimple={false} options={options} />);
		const firstElement = options.sort((a, b) => a.groupID - b.groupID)[0];
		const initial = getByText(firstElement.name);
		fireEvent.click(initial);
		expect(getByText(firstElement.description));

		const target = options.find((x) => !x.groupID);
		fireEvent.click(getByText(target.name));

		expect(getByTestId("selected-option")).toHaveTextContent(target.name);
	});
});
