import { useEffect, useState } from "react";
// import Logo from "../../assets/LM.png";
import Logo from "../../../assets/LM.png";
import Change_language from "./Change_language";
import DarkMode from "./DarkMode";
import Animation_Mode_icons from "./Animation_Mode_icons";
// import Change_language from "../../2_language_btn/Change_language";

//* use the 3 new sgvs in the assets folder

const CircularMenu = ({
	changeMode,
	setChangeMode,
	AnimationsRepetitionMode,
	setAnimationsRepetitionMode,
}) => {
	const local_storage = window.localStorage.getItem(
		"Portfolio_page_animation_toggle"
	);

	//? make the btn say the words in Spanish if the site is in english and english is the page is on Spanish

	//? make the page language render base on the persons device

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

	useEffect(() => {
		window.localStorage.setItem(
			"Portfolio_page_animation_toggle",
			animation
		);
	}, [animation]);
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
			animation === false ||
			animation === "false" ||
			animation === "/*false*/"
		) {
			window.localStorage.setItem(
				"Portfolio_page_animation_toggle",
				JSON.stringify(animation)
			);
			setAnimation(null);
			return;
		} else {
			window.localStorage.setItem(
				"Portfolio_page_animation_toggle",
				JSON.stringify(animation)
			);
			setAnimation(true);
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
