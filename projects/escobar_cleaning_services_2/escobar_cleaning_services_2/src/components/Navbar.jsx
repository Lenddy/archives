import React from "react";
import burgerMenu from "../assets/burgerMenu.svg";

const Navbar = () => {
	return (
		<div>
			<img src={burgerMenu} alt="" />

			<ul className="navbar">
				<li>welcome</li>
				<li>services</li>
				<li>contact</li>
				<li>about</li>
			</ul>
		</div>
	);
};

export default Navbar;
