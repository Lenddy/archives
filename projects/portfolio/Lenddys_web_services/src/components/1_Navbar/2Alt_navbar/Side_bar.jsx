import React from "react";

function Side_bar(props) {
	return (
		<nav className="side-bar">
			<ul className="side-bar-ul">{props.children}</ul>
		</nav>
	);
}

export default Side_bar;
