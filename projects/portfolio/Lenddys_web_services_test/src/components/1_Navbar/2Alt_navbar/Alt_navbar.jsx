import { useState, useEffect } from "react";

function Alt_navbar() {
	const [active_right, setActive_right] = useState(false);
	const [active_left, setActive_left] = useState(false);
	const [active_goTO, setActive_goTO] = useState(false);

	// !  make the other btns bring another circular menus on top of the base one
	// ! you will be able ro click the btn on the middle to go back to the base circle

	// ! make the middle btn be a back btn when one of the base options is click

	//! make a function that sets the activation of the secondary menu to false when a secondary function is click   but do not close the base circle only the secondary

	const [activeMenuCount, setActiveMenuCount] = useState(1); // Track the number of active menus

	const toggleMenu = (menuIndex) => {
		console.log({ menuIndex, activeMenuCount });
		if (menuIndex === 1) {
			// Toggle the first circular menu
			setActive_left(!active_left);

			// Close all other circular menus (if open)
			setActive_goTO(false);
			console.log("if hit ");
		} else if (menuIndex === activeMenuCount) {
			// Clicking the same menu should close it
			setActive_goTO(!active_goTO);
			console.log("else if hit ");
		} else {
			// For newly created circular menus
			setActive_goTO(true);
			setActive_left(false);
			setActiveMenuCount(menuIndex);
			console.log("else hit ");
		}
	};
	return (
		<div className="alt-navBar">
			<div
				id="circularMenu"
				className={`circular-menu ${active_right ? "active" : ""}`}
			>
				<a
					className="floating-btn"
					onClick={() => setActive_right(!active_right)}
				>
					<i className="fa fa-plus"></i>
				</a>

				<menu className="items-wrapper">
					<a href="#" className="menu-item ">
						link in
					</a>
					<a href="#" className="menu-item ">
						instagram
					</a>
					<a href="#" className="menu-item ">
						git hub
					</a>
					<a href="#" className="menu-item "></a>
				</menu>
			</div>

			{active_left ? (
				<div
					id="circularMenu1"
					className={`circular-menu circular-menu-left ${
						active_left ? "active" : ""
					}`}
				>
					<a
						className="floating-btn"
						onClick={() => setActive_left(!active_left)}
					>
						<i className="fa fa-bars"></i>
					</a>

					<menu className="items-wrapper">
						<a
							href="#"
							className="menu-item "
							onClick={() => {
								setActive_goTO(!active_goTO);
								setActive_left(false);
							}}
						>
							first
						</a>
						<a href="#" className="menu-item ">
							first
						</a>
						<a href="#" className="menu-item ">
							first
						</a>
						<a href="#" className="menu-item ">
							first
						</a>
					</menu>
				</div>
			) : (
				<div
					id="circularMenu1"
					className={`circular-menu circular-menu-left ${
						active_left ? "active" : ""
					}`}
				>
					<a
						className="floating-btn"
						onClick={() => setActive_left(!active_left)}
					>
						<i className="fa fa-bars"></i>
					</a>

					<menu className="items-wrapper">
						<a
							href="#"
							className="menu-item "
							onClick={() => setActive_goTO(!active_goTO)}
						>
							seconde
						</a>
						<a href="#" className="menu-item ">
							seconde
						</a>
						<a href="#" className="menu-item ">
							seconde
						</a>
						<a href="#" className="menu-item ">
							seconde
						</a>
					</menu>
				</div>
			)}
		</div>
	);
}

export default Alt_navbar;

// css for the this component
/* hsl(299 ,100% ,50% )
hsl(180, 100% ,50%) */

// .circular-menu {
// 	position: fixed;
// 	top: 1em;
// 	right: 1em;
// 	z-index: 3;
// 	border: 3px black solid;
// 	border-radius: 50%;
//   }

//   .floating-btn {
// 	display: block;
// 	width: 3.5em;
// 	height: 3.5em;
// 	border-radius: 50%;
// 	background-color: hsl(299 ,100% ,60% ,100);
// 	box-shadow: 0 2px 5px 0 hsla(0, 0%, 0%, .26);
// 	color: hsl(0, 0%, 100%);
// 	text-align: center;
// 	line-height: 3.9;
// 	cursor: pointer;
// 	outline: 0;
//   }

//   .circular-menu.active .floating-btn {
// 	box-shadow: inset 0 0 3px hsla(0, 0%, 0%, .70);
//   }

//   .circular-menu .floating-btn:active {
// 	box-shadow: 0 4px 8px 0 hsla(0, 0%, 0%, .70);
//   }

//   .circular-menu .floating-btn i {
// 	font-size: 1.3em;
// 	transition: transform .2s;
//   }

//   .circular-menu.active .floating-btn i {
// 	transform: rotate(-45deg);
//   }

//   .circular-menu:after {
// 	display: block;
// 	content: ' ';
// 	width: 3.5em;
// 	height: 3.5em;
// 	border-radius: 50%;
// 	position: absolute;
// 	top: 0;
// 	right: 0;
// 	z-index: -2;
// 	background-color: hsl(299 ,100% ,30%,.60 );
// 	transition: all .3s ease;
//   }

//   .circular-menu.active:after {
// 	transform: scale3d(5.5, 5.5, 1);
// 	transition-timing-function: cubic-bezier(.68, 1.55, .265, 1);
//   }

//   .circular-menu .items-wrapper {
// 	padding: 0;
// 	margin: 0;
//   }

//   .menu-item {
// 	position: absolute;
// 	top: .2em;
// 	right: .2em;
// 	z-index: -1;
// 	display: block;
// 	text-decoration: none;
// 	font-size: 1em;
// 	width: 3em;
// 	height: 3em;
// 	border-radius: 50%;
// 	background-color: hsla(0,0%,0%,.70);
// 	transition: transform .3s ease, background .2s ease;
//   }

//   .menu-item:hover {
// 	background-color: hsla(0,0%,0%,.55);
//   }

//   .circular-menu.active .menu-item {
// 	transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   }

//   .circular-menu.active .menu-item:nth-child(1) {
// 	transform: translate3d(1em,7em,0);
//   }

//   .circular-menu.active .menu-item:nth-child(2) {
// 	transform: translate3d(-3.5em, 6.3em, 0);

//   }

//   .circular-menu.active .menu-item:nth-child(3) {
// 	transform: translate3d(-6.5em,3.2em,0);

//   }

//   .circular-menu.active .menu-item:nth-child(4) {
// 	transform: translate3d(-7em, -1em, 0);

//   }

//   .circular-menu.circular-menu-left {
// 	right: auto;
// 	left: 1em;
//   }

//   .circular-menu.circular-menu-left .floating-btn {
// 	background-color: hsl(180, 100% ,50%);
//   }

//   .circular-menu.circular-menu-left:after {
// 	background-color: hsl(180, 100% ,50%, .60);
//   }

//   .circular-menu.circular-menu-left.active .floating-btn i {
// 	transform: rotate(90deg);
//   }

//   .circular-menu.circular-menu-left.active .menu-item:nth-child(1) {
// 	transform: translate3d(-1em, 7em, 0);

//   }

//   .circular-menu.circular-menu-left.active .menu-item:nth-child(2) {
// 	transform: translate3d(3.5em,6.3em,0);
//   }

//   .circular-menu.circular-menu-left.active .menu-item:nth-child(3) {
// 	transform: translate3d(6.5em,3.2em,0);
//   }

//   .circular-menu.circular-menu-left.active .menu-item:nth-child(4) {
// 	transform: translate3d(7em,-1em,0);
//   }

//   /** for the secondary circle*/
//   .inner_circular_menu {
// 	position: fixed;
// 	bottom:100px;
// 	right: 1em;
// 	z-index: 3;
// 	border: 3px black solid;
// 	border-radius: 50%;
//   }
//   .circular-menu.circular-menu-left {
// 	 right: auto;
// 	left: 1em;
//   }

//   .floating-btn {
// 	display: block;
// 	width: 3.5em;
// 	height: 3.5em;
// 	border-radius: 50%;
// 	background-color: hsl(299 ,100% ,60% ,100);
// 	box-shadow: 0 2px 5px 0 hsla(0, 0%, 0%, .26);
// 	color: hsl(0, 0%, 100%);
// 	text-align: center;
// 	line-height: 3.9;
// 	cursor: pointer;
// 	outline: 0;
//   }

//   .circular-menu.active .floating-btn {
// 	box-shadow: inset 0 0 3px hsla(0, 0%, 0%, .70);
//   }

//   .circular-menu .floating-btn:active {
// 	box-shadow: 0 4px 8px 0 hsla(0, 0%, 0%, .70);
//   }

//   .circular-menu .floating-btn i {
// 	font-size: 1.3em;
// 	transition: transform .2s;
//   }

//   .circular-menu.active .floating-btn i {
// 	transform: rotate(-45deg);
//   }

//   .circular-menu:after {
// 	display: block;
// 	content: ' ';
// 	width: 3.5em;
// 	height: 3.5em;
// 	border-radius: 50%;
// 	position: absolute;
// 	top: 0;
// 	right: 0;
// 	z-index: -2;
// 	background-color: hsl(299 ,100% ,30%,.60 );
// 	transition: all .3s ease;
//   }

//   .circular-menu.active:after {
// 	transform: scale3d(5.5, 5.5, 1);
// 	transition-timing-function: cubic-bezier(.68, 1.55, .265, 1);
//   }

//   .circular-menu .items-wrapper {
// 	padding: 0;
// 	margin: 0;
//   }

//   .menu-item {
// 	position: absolute;
// 	top: .2em;
// 	right: .2em;
// 	z-index: -1;
// 	display: block;
// 	text-decoration: none;
// 	font-size: 1em;
// 	width: 3em;
// 	height: 3em;
// 	border-radius: 50%;
// 	background-color: hsla(0,0%,0%,.70);
// 	transition: transform .3s ease, background .2s ease;
//   }

//   .menu-item:hover {
// 	background-color: hsla(0,0%,0%,.55);
//   }

//   .circular-menu.circular-menu-left .floating-btn {
// 	background-color: hsl(180, 100% ,50%);
//   }

//   .circular-menu.circular-menu-left:after {
// 	background-color: hsl(180, 100% ,50%, .60);
//   }

//   .circular-menu.circular-menu-left.active .floating-btn i {
// 	transform: rotate(90deg);
//   }

//   .circular-menu.circular-menu-left.active .menu-item:nth-child(1) {
// 	transform: translate3d(-1em, 7em, 0);

//   }

//   .circular-menu.circular-menu-left.active .menu-item:nth-child(2) {
// 	transform: translate3d(3.5em,6.3em,0);
//   }

//   .circular-menu.circular-menu-left.active .menu-item:nth-child(3) {
// 	transform: translate3d(6.5em,3.2em,0);
//   }

//   .circular-menu.circular-menu-left.active .menu-item:nth-child(4) {
// 	transform: translate3d(7em,-1em,0);
//   }

{
	/*for the gooooooo to menu */
}
{
}

{
	/* Render additional circular menus dynamically based on activeMenuCount state */
}
{
	/* {[...Array(activeMenuCount - 1)].map((_, index) => (
				<div
					key={`circularMenu${index + 2}`}
					className={`circular-menu circular-menu-left ${
						active_goTO ? "active" : ""
					}`}
				>
					<a
						className="floating-btn"
						onClick={() => toggleMenu(index + 2)}
					>
						<i className="fa fa-bars"></i>
					</a>

					<menu className="items-wrapper">
						<a
							href="#"
							className="menu-item"
							onClick={() => toggleMenu(index + 3)}
						>
							Option {index + 1}
						</a>
						<a href="#" className="menu-item">
							Option {index + 2}
						</a>
						<a href="#" className="menu-item">
							Option {index + 3}
						</a>
						<a href="#" className="menu-item"></a>
					</menu>
				</div>
			))} */
}
