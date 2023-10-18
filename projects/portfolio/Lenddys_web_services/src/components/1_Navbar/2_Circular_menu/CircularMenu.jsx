import { useState } from "react";
// import Logo from "../../assets/LM.png";
import Logo from "../../../assets/LM.png";
import Change_language from "./Change_language";
import DarkMode from "./DarkMode";
// import Change_language from "../../2_language_btn/Change_language";

//? make the btn say the words in Spanish if the site is in english and english is the page is on Spanish

//? make the page language render base on the persons device

//? one of the btns will be prevent animations this btns will have 3 stages repeat animations , show animations once , not animations

// ! make a queue(circular) that gets in what btn press the animation toggle is on
const queuePosition = () => {
	// make a queue that has 3 elements
	// 1 recurrent animations //this tells the app to run the aminations every time the observer function sees an object it will show the animation of the object
	// 2 true  stops the animation completely
	// 2 fase  //show the animation one time
	// you should pop the queue first index and add it to the back
	// every time the animation btn is click
};

//* use the 3 new sgvs in the assets folder

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
