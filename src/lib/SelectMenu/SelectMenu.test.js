import "jest-enzyme";
import { configure, render, shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });
import React from "react";
import SelectMenu from "./SelectMenu";
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
describe("SelectMenu render and functionality", () => {
	it("mounts SelectMenu withoput any props", () => {
		const wrapper = mount(<SelectMenu />);
		expect(wrapper).toMatchSnapshot();
	});

	it("renders SelectMenu with props", () => {
		const wrapper = mount(
			<SelectMenu options={options} defaultValue={"tayyib"} isSimple={false} darkMode={true} maxWidth={300} />
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("shows detailed dropdown", () => {
		const wrapper = mount(
			<SelectMenu options={options} defaultValue={"tayyib"} isSimple={false} darkMode={true} maxWidth={300} />
		);
		wrapper.find("div").at(1).simulate("click");
		expect(wrapper).toMatchSnapshot();
	});

	it("calls onChange callback", () => {
		const expectedResult = {
			name: "Teitelbaum",
			value: "teitelbaum",
			description: "Ruth Teitelbaum was one of the first computer programmers in the world",
			groupID: 1,
		};
		let testingResult = {};
		const onChangeHandler = (e) => {
			testingResult = e;
		};
		const wrapper = mount(
			<SelectMenu
				options={options}
				defaultValue={"tayyib"}
				isSimple={false}
				darkMode={true}
				maxWidth={300}
				onChange={onChangeHandler}
			/>
		);
		wrapper.find("div").at(1).simulate("click");
		wrapper.find("DetailedOption").at(0).simulate("click");
		expect(testingResult).toEqual(expectedResult);
	});
});
