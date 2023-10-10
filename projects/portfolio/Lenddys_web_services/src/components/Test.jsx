import React from "react";
import Logo from "../assets/LM.png";

const Test = () => {
	return (
		<div
			className="container2"
			style={{ width: "100%", height: "500px", backgroundColor: "red" }}
		>
			<ul id="menu2">
				{/* <!-- open-menu id for click event --> */}
				<a
					className="menu-button2 icon-plus"
					id="open-menu"
					href="#menu"
					title="Show navigation"
				>
					{" "}
					<img className="navLogo" src={Logo} alt="logo" />{" "}
				</a>
				<a
					className="menu-button2 icon-minus"
					href="#0"
					title="Hide navigation"
				>
					<img className="navLogo" src={Logo} alt="logo" />
				</a>
				<div className="menu-item2">
					<span className="fa fa-github"></span>
				</div>
				<div className="menu-item2">
					<span className="fa fa-linkedin"></span>
				</div>
				<div className="menu-item2">
					<span className="fa fa-instagram"></span>
				</div>
				<div className="menu-item2">
					<span className="fa fa-twitter"></span>
				</div>
			</ul>
		</div>
	);
};

export default Test;
