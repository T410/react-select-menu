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
				},
				{
					name: "Holberton",
				},
				{
					name: "Antonelli",
				},
				{
					name: "Bartik",
				},
				{
					name: "Teitelbaum",
				},
				{
					name: "Bartik",
				},
			]}
		/>
	</React.StrictMode>,
	document.getElementById("root")
);
