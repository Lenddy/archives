import { useEffect, useState } from "react";
// import Logo from "../../assets/LM.png";
import Logo from "../../../assets/LM.png";
import Change_language from "./Change_language";
import DarkMode from "./DarkMode";
import Animation_Mode_icons from "./Animation_Mode_icons";
import Lock_navbar_animations from "./Lock_navbar_animations";
// import Change_language from "../../2_language_btn/Change_language";

const CircularMenu = ({
	changeMode,
	setChangeMode,
	AnimationsRepetitionMode,
	setAnimationsRepetitionMode,
}) => {
	const local_storage = window.localStorage.getItem(
		"Portfolio_page_animation_toggle"
	);
	const local_storage_navBar = window.localStorage.getItem(
		"Portfolio_page_animation_toggle_for_lock_navBar"
	);

	//? make the btn say the words in Spanish if the site is in english and english is the page is on Spanish

	//? make the page language render base on the persons device

	// lock the animations of the navbar  the fading/(and diapering on scroll) and the dropdowns

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

	const [animation, setAnimation] = useState(local_storage);
	const [navbarLock, setNavbarLock] = useState(local_storage_navBar);

	useEffect(() => {
		window.localStorage.setItem(
			"Portfolio_page_animation_toggle",
			animation
		);

		window.localStorage.setItem(
			"Portfolio_page_animation_toggle_for_lock_navBar",
			navbarLock
		);
	}, [animation, navbarLock]);
	setAnimationsRepetitionMode(animation);

	const animationMode = (e) => {
		e.preventDefault();
		if (
			animation === true ||
			animation === "true" ||
			animation === "/*true*/"
		) {
			window.localStorage.setItem(
				"Portfolio_page_animation_toggle",
				JSON.stringify(animation)
			);
			setAnimation(false);

			return;
		} else if (
			navbarLock === false ||
			navbarLock === "false" ||
			navbarLock === "/*false*/"
		) {
			window.localStorage.setItem(
				"Portfolio_page_animation_toggle",
				JSON.stringify(navbarLock)
			);
			setAnimation(null);
			return;
		} else {
			window.localStorage.setItem(
				"Portfolio_page_animation_toggle",
				JSON.stringify(navbarLock)
			);
			setAnimation(true);
			return;
		}
	};

	const lockNavbar = (e) => {
		e.preventDefault();
		if (
			navbarLock === true ||
			navbarLock === "true" ||
			navbarLock === "/*true*/"
		) {
			window.localStorage.setItem(
				"Portfolio_page_animation_toggle_for_lock_navBar",
				JSON.stringify(navbarLock)
			);
			setNavbarLock(false);

			return;
		} else if (
			navbarLock === false ||
			navbarLock === "false" ||
			navbarLock === "/*false*/"
		) {
			window.localStorage.setItem(
				"Portfolio_page_animation_toggle_for_lock_navBar",
				JSON.stringify(animation)
			);
			setNavbarLock(true);
			return;
		} else {
			window.localStorage.setItem(
				"Portfolio_page_animation_toggle_for_lock_navBar",
				JSON.stringify(navbarLock)
			);
			setNavbarLock(false);
			return;
		}
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
					onClick={(e) => animationMode(e)}
					// {show ? "menu-item" : ""}
				>
					<a
						href="#menu"
						// onClick={(e) => darkMode(e)}
					>
						<Animation_Mode_icons
							AnimationsRepetitionMode={AnimationsRepetitionMode}
							setAnimationsRepetitionMode={
								setAnimationsRepetitionMode
							}
							animation={animation}
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
					onClick={(e) => lockNavbar(e)}
				>
					<a
						href="#menu" // onClick={(e) => darkMode(e)}
					>
						{/* for the lock animations  */}
						<Lock_navbar_animations navbarLock={navbarLock} />
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
