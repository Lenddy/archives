import React, { useState, useEffect } from "react";
import NamePage from "./NamePage";
import HomePage from "./Homepage";

const Test = () => {
	const [name, setName] = useState("");
	const [isFadingOut, setIsFadingOut] = useState(false);
	const [isFadingIn, setIsFadingIn] = useState(true);
	const history = useHistory();

	useEffect(() => {
		// Check if name is already in localStorage
		const storedName = localStorage.getItem("name");
		if (storedName) {
			setName(storedName);
			setIsFadingOut(true);
			setTimeout(() => {
				history.push("/");
			}, 1000);
		}
	}, []);

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		localStorage.setItem("name", name);
		setIsFadingOut(true);
		setTimeout(() => {
			history.push("/");
		}, 1000);
	};

	return (
		<div className={`page ${isFadingOut ? "fade-out" : ""}`}>
			<h1 className={`fade-in ${isFadingIn ? "active" : ""}`}>
				Hello! What's your name?
			</h1>
			<form onSubmit={handleFormSubmit}>
				<input type="text" value={name} onChange={handleNameChange} />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Test;
