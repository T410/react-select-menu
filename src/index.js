import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SelectMenu } from "./lib/index";

ReactDOM.render(
	<React.StrictMode>
		<SelectMenu
			options={[
				{
					name: "Tayyib",
					groupID: 2,
				},
				{
					name: "Hopper",
					groupID: 0,
				},
				{
					name: "Holberton",
					groupID: 0,
				},
				{
					name: "Antonelli",
					groupID: 1,
				},
				{
					name: "Bartik",
					groupID: 1,
				},
				{
					name: "Teitelbaum",
					groupID: 1,
				},
				{
					name: "Bartik",
					groupID: 1,
				},
			]}
			onChange={(index) => {
				console.log(index);
			}}
		/>
	</React.StrictMode>,
	document.getElementById("root")
);
