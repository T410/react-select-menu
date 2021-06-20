import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SelectMenu } from "./lib/index";

ReactDOM.render(
	<React.StrictMode>
		<SelectMenu
			options={[
				{
					name: "Hopper",
					value: "hopper",
					description: "Grace Hopper was an American computer scientist and US Navy rear admiral.",
					groupID: 0,
				},
				{
					name: "Holberton",
					value: "holberton",
					description: "Frances Elizabeth Holberton was one of the programmers of the first computer.",
					groupID: 0,
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
					description: "Tayyib is the developer of this React select component",
					groupID: 2,
				},
			]}
			defaultValue={"tayyib"}
			onChange={(e) => {
				console.log(e);
			}}
		/>
	</React.StrictMode>,
	document.getElementById("root")
);
