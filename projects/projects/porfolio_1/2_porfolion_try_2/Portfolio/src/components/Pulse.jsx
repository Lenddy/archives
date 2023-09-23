import React, { useState, useEffect } from "react";

const Pulse = () => {
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		const overlay = document.getElementById("dark-overlay");
		const pulse = document.getElementById("pulse");

		const revealContent = () => {
			setShowContent(true);
			overlay.classList.add("reveal");
			pulse.classList.add("reveal");
		};

		window.addEventListener("load", revealContent);

		return () => {
			window.removeEventListener("load", revealContent);
		};
	}, []);

	return (
		<div className="App">
			<div id="dark-overlay">
				<div id="pulse"> </div>
			</div>
			<div id="content" className={showContent ? "reveal" : ""}>
				<h1>Welcome to my website</h1>
				<p>This is some example content</p>
			</div>
		</div>
	);
};

export default Pulse;
