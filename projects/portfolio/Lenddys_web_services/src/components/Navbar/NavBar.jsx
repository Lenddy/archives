import React from "react";

function NavBar() {
	return (
		<>
			<div className="navbar">
				<ul>
					<li>What I DO</li>
					<li>Resume</li>
					<li>Logo</li>
					{/* on click will scroll to the top */}
					<li>Projects</li>
					<li>Socials</li>
				</ul>
				{/* will only appear if the screen device is small */}
				{/* <button>burger menu</button> */}
			</div>
		</>
	);
}

export default NavBar;
