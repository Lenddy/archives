import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container";

// ?when you fell like you are done watch this video https://www.youtube.com/watch?v=ikVtaK9JmUw
//! make a scrollbar that looks like YouTube

function App() {
	// const { changeMode } = props;
	const [changeMode, setChangeMode] = useState(false);
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
