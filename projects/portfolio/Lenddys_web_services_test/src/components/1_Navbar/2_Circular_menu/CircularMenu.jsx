import { useEffect, useState } from "react";
// import Logo from "../../assets/LM.png";
import Logo from "../../../assets/LM.png";
import Change_language from "./Change_language";
import DarkMode from "./DarkMode";
import Animation_Mode_icons from "./Animation_Mode_icons";
import Lock_navbar_animations from "./Lock_navbar_animations";
// import Change_language from "../../2_language_btn/Change_language";
//? make the page language render base on the persons device
const CircularMenu = ({ changeMode, setChangeMode }) => {
	const gls = (key) => window.localStorage.getItem(key); //!gets the key
	const sls = (key, value) => window.localStorage.setItem(key, value); //!sets the key
	// const [language, setLanguage] = useState(Boolean);
	// const [hideNabar, setHideNabar] = useState(Boolean);
	// const [darkMode, setDarkMode] = useState(Boolean);
	// const [navBarAnimations, setNavBarAnimations] = useState(Boolean);
	const [change_animations, setChange_animations] = useState(true);
	// window.localStorage.clear();

	//! finds out if there is a given key if not it creates one an sets it to be a value
	const Local_Storage = (getKey, setValue) => {
		if (gls(getKey) === null || gls(getKey) === undefined) {
			return sls(getKey, setValue);
		} else {
			return gls(getKey);
		}
	};

	useEffect(
		() => {
			//? checks for local storage
			// setLanguage(items_In_Local_Storage("DarkMode",true))
			// setHideNabar(Local_Storage("DarkMode", true));
			// setDarkMode(Local_Storage("Language", true));
			// setNavBarAnimations(Local_Storage("NavBar_Animations", true));
			// Local_Storage("Animations", true);
			// setAnimations(gls("Animations"));
			// console.log("animations is ", animations);
		},
		[
			// animations,
			// hideNabar, darkMode,  navBarAnimations
		]
	);

	// const animationMode = (key) => {
	// 	// Get the current value from local storage

	// 	const currentValue = gls(key) === "true";
	// 	// Toggle the value (if it's a string, convert it to a boolean first)

	// 	const newValue = currentValue === true ? false : true;

	// 	// Update local storage
	// 	sls(key, newValue);

	// 	// Set the state based on the new value
	// 	setAnimations(newValue === "true");
	// };

	const [fade, setFade] = useState(true);

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
					onClick={() => setChange_animations((prev) => !prev)}
					// {show ? "menu-item" : ""}
				>
					<a
						href="#menu"
						// onClick={(e) => darkMode(e)}
					>
						<Animation_Mode_icons
							// AnimationsRepetitionMode={AnimationsRepetitionMode}
							// setAnimationsRepetitionMode={
							// 	setAnimationsRepetitionMode
							// }
							change_animations={change_animations}
						/>
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
				<li
					className={`menu-item  ${fade ? "fade" : ""}`}
					// onClick={(e) => lockNavbar(e)}
				>
					<a
						href="#menu" // onClick={(e) => darkMode(e)}
					>
						{/* for the lock animations  */}
						<Lock_navbar_animations />
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
// const lockNavbar = (e) => {
// 	e.preventDefault();
// 	if (
// 		navbarLock === true ||
// 		navbarLock === "true" ||
// 		navbarLock === "/*true*/"
// 	) {
// 		window.localStorage.setItem(
// 			"Portfolio_page_animation_toggle_for_lock_navBar",
// 			navbarLock
// 		);
// 		setNavbarLock(false);

// 		return;
// 	} else if (
// 		navbarLock === false ||
// 		navbarLock === "false" ||
// 		navbarLock === "/*false*/"
// 	) {
// 		window.localStorage.setItem(
// 			"Portfolio_page_animation_toggle_for_lock_navBar",
// 			animation
// 		);
// 		setNavbarLock(true);
// 		return;
// 	} else {
// 		window.localStorage.setItem(
// 			"Portfolio_page_animation_toggle_for_lock_navBar",
// 			navbarLock
// 		);
// 		setNavbarLock(false);
// 		return;
// 	}
// };
