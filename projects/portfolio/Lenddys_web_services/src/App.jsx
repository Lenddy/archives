import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container";

// ?when you fell like you are done watch this video https://www.youtube.com/watch?v=ikVtaK9JmUw
//! make a scrollbar that looks like YouTube

// to prevent the animation from happening sent a variable from here to all of the components that is a bool if the variable is true the animation will continue and if it is false they stop completely and make another variable to only render te animations once
function App() {
	// const { changeMode } = props;
	const [changeMode, setChangeMode] = useState(false);
	const [AnimationsOof, setAnimationsOof] = useState(false);
	// const [isIntersecting, setIsIntersecting] = useState(false);
	useEffect(() => {
		if (AnimationsOof == false) {
		}
		// document.querySelectorAll(".hidden");
		if (AnimationsOof == true) {
		}
		if (AnimationsOof == "recurrent_animations") {
		}
	}, []);

	useEffect(() => {
		console.log("change mode is now ", changeMode);
	}, [changeMode]);

	useEffect(() => {
		console.log("change from the app component", changeMode);
	}, [changeMode]);

	return (
		<div className={changeMode ? "lightMode" : "darkMode"}>
			<Container
				changeMode={changeMode}
				setChangeMode={setChangeMode}
			></Container>
		</div>
	);
}

export default App;
