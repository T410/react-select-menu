# React Select Menu

Yet another React Select Component

# Table Of Contents

- [Installation](#installation)
- [GIF](#gif)
- [Usage](#usage)
- [Props](#props)

# Installation

`npm i github:T410/react-select-menu`

# GIF

Dark Mode & Detailed View

![screenshot](darkMode.gif)

<br/>
<br/>

Light Mode & Simple View

![screenshot](lightMode.gif)

# Usage

```js
import { SelectMenu } from "react-select-menu";

function App() {
	return (
		<div>
			<SelectMenu
				options={[
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
				]}
				defaultValue={"teitelbaum"}
				isSimple={false}
				darkMode={true}
				maxWidth={300}
				onChange={(e) => {
					console.log(e);
				}}
			/>
		</div>
	);
}
```

<br/>

# Example

You can find the example index.js [here](src/index.js)
To run it on your machine, simply clone this repo <code>git clone https://github.com/T410/react-select-menu.git</code> cd into the directory as such <code>cd react-select-menu</code> and then run <code>npm i</code> to install the dependencies.

Then you can run <code>npm start</code> in the project directory to run the example project. You will see which port the project will run on.

# Props

| Name           | Type                                                                                      | Default                                                          | Returns         | Description                                                                                                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`      | `[{ name: String\|Number, value: String\|Number, description: String, groupID: Number }]` |                                                                  |                 | `name` and `value` are required. If you pass `groupID` then every object that has the same groupID will be visibly grouped together. Note that options will be sorted by the groupID. |
| `defaultValue` | `String\|Number`                                                                          | `value` of the first option after sorting the options by groupID |                 |                                                                                                                                                                                       |
| `isSimple`     | `Boolean`                                                                                 | `true`                                                           |                 |                                                                                                                                                                                       |
| `darkMode`     | `Boolean`                                                                                 | `false`                                                          |                 |                                                                                                                                                                                       |
| `maxWidth`     | `Number`                                                                                  | `300`                                                            |                 | This is the max-width style of the dropdown window.                                                                                                                                   |
| `onChange`     | `Function`                                                                                | `()=>{}`                                                         | `option` object | This callback will be called when the user selects "a new option".                                                                                                                    |
