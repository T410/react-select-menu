import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SelectMenu } from "./lib/index";

const darkMode = false;

ReactDOM.render(
	<React.StrictMode>
		<div style={{ height: 500, width: 500, padding: 5, backgroundColor: darkMode ? "#191B1D" : "white" }}>
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
						description: "Hey, it's me!",
						groupID: 2,
					},
					{
						name: "No Description",
						value: "noDesc",
						groupID: 3,
					},
				]}
				defaultValue={"tayyib"}
				isSimple={false}
				darkMode={darkMode}
				maxWidth={300}
				onChange={(e) => {
					console.log(e);
				}}
			/>
		</div>
	</React.StrictMode>,
	document.getElementById("root")
);
