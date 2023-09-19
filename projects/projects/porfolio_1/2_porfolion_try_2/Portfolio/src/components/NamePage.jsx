import React, { useState } from "react";

const NamePage = ({ onNameSubmit }) => {
	const [name, setName] = useState("");

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleNameSubmit = (event) => {
		event.preventDefault();
		onNameSubmit(name);
	};

	return (
		<div className="name-page">
			<h1 className="name-heading">Hello! What's your name?</h1>
			<form className="name-form" onSubmit={handleNameSubmit}>
				<input
					className="name-input"
					type="text"
					value={name}
					onChange={handleNameChange}
					placeholder="Enter your name"
				/>
				<button className="name-submit" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default NamePage;
