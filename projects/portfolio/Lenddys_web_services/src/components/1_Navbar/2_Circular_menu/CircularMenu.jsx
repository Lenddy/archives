import { useState } from "react";
// import Logo from "../../assets/LM.png";
import Logo from "../../../assets/LM.png";
import Change_language from "./Change_language";
import DarkMode from "./DarkMode";
// import Change_language from "../../2_language_btn/Change_language";

//? make the btn say the words in Spanish if the site is in english and english is the page is on Spanish

//? make the page language render base on the persons device

//? one of the btns will be prevent animations this btns will have 3 stages repeat animations , show animations once , not animations

const CircularMenu = ({ changeMode, setChangeMode }) => {
	const [fade, setFade] = useState(true);
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
					<a
						href="#menu"
						// onClick={(e) => darkMode(e)}
					>
						{/* <span className="fa fa-twitter"></span> */}
					</a>
				</li>
				<li
					className={`menu-item  ${fade ? "fade" : ""}`}
					onClick={(e) => darkMode(e)}
				>
					<a href="#menu">
						{/* <span className="fa fa-twitter"></span> */}
						<DarkMode changeMode={changeMode} />
					</a>
				</li>
				<li className={`menu-item  ${fade ? "fade" : ""}`}>
					<a
						href="#menu" // onClick={(e) => darkMode(e)}
					>
						<span className="fa fa-twitter"></span>
					</a>
				</li>
				<li className={`menu-item  ${fade ? "fade" : ""}`}>
					<a
						href="#menu"
						// onClick={(e) => darkMode(e)}
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
