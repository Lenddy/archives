import React, { useState } from "react";
import Logo from "../../assets/LM.png";

const CircularMenu = () => {
	const [fade, setFade] = useState(true);
	const preventDefault = (e) => {
		e.preventDefault();
		console.log("onclick..");
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
				{/* <img
        className="navLogo"
        src={Logo}
        alt="logo"
        onClick={showMenu}
    /> */}

				{/* <!-- open-menu id for click event --> */}
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
					<img
						className="navLogo"
						src={Logo}
						alt="logo"
						// onClick={showMenu}
					/>
				</a>

				<li
					className={`menu-item  ${fade ? "fade" : ""}`}
					// {show ? "menu-item" : ""}
				>
					<a href="#menu" onClick={(e) => preventDefault(e)}>
						<span className="fa fa-twitter"></span>
					</a>
				</li>
				<li className={`menu-item  ${fade ? "fade" : ""}`}>
					<a href="#menu" onClick={(e) => preventDefault(e)}>
						<span className="fa fa-twitter"></span>
					</a>
				</li>
				<li className={`menu-item  ${fade ? "fade" : ""}`}>
					<a href="#menu" onClick={(e) => preventDefault(e)}>
						<span className="fa fa-twitter"></span>
					</a>
				</li>
				<li className={`menu-item  ${fade ? "fade" : ""}`}>
					<a href="#menu" onClick={(e) => preventDefault(e)}>
						<span className="fa fa-twitter"></span>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default CircularMenu;
