import React from "react";

function Navbar({ children }) {
	return (
		<div className="container-parent">
			<div className="container-navbar">this is the navbar</div>

			<div className="container-children">{children}</div>
		</div>
	);
}

export default Navbar;
