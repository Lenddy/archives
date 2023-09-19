import React from "react";

const HomePage = ({ name }) => {
	return (
		<div className="home-page">
			<h1 className="welcome-heading">Welcome, {name}!</h1>
			<p className="welcome-text">This is the home page.</p>
		</div>
	);
};

export default HomePage;
