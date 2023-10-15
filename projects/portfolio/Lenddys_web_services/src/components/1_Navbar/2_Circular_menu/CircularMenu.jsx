import React, { useState } from "react";
// import Logo from "../../assets/LM.png";
import Logo from "../../../assets/LM.png";
import Change_language from "./Change_language";
import DarkMode from "./DarkMode";
// import Change_language from "../../2_language_btn/Change_language";

const CircularMenu = () => {
	const [fade, setFade] = useState(true);
	const [changeMode, setChangeMode] = useState(fade);
	const darkMode = (e) => {
		e.preventDefault();
		setChangeMode(!changeMode);
	};

	const showCircles = () => {
		setFade(false);
		console.log("show circle");
	};
	const hideCircles = () => {
		setFade(true);
		console.log("hide circle");
	};
	return (
		<div className="circleContainer">
			<ul id="menu">
				<a
					className="menu-button icon-plus"
					id="open-menu"
					href="#menu"
					title="Show navigation"
					onClick={() => showCircles()}
				>
					<img
						className="navLogo"
						src={Logo}
						alt="logo"
						// onClick={showMenu}
					/>
				</a>
				<a
					className="menu-button icon-minus"
					href="#0"
					title="Hide navigation"
					onClick={() => hideCircles()}
				>
					<img className="navLogo" src={Logo} alt="logo" />
				</a>

				<li
					className={`menu-item  ${fade ? "fade" : ""}`}
					// {show ? "menu-item" : ""}
				>
					<a href="#menu" onClick={(e) => darkMode(e)}>
						{/* <span className="fa fa-twitter"></span> */}
					</a>
				</li>
				<li className={`menu-item  ${fade ? "fade" : ""}`}>
					<a href="#menu" onClick={(e) => darkMode(e)}>
						{/* <span className="fa fa-twitter"></span> */}
						<DarkMode changeMode={changeMode} />
					</a>
				</li>
				<li className={`menu-item  ${fade ? "fade" : ""}`}>
					<a href="#menu" onClick={(e) => darkMode(e)}>
						<span className="fa fa-twitter"></span>
					</a>
				</li>
				<li className={`menu-item  ${fade ? "fade" : ""}`}>
					<a
						href="#menu"
						onClick={(e) => darkMode(e)}
						// className="lan_btn"
					>
						<Change_language
							className={`menu-item  ${fade ? "fade" : ""}`}
						/>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default CircularMenu;
