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
		if (menuIndex === 1) {
			// Toggle the first circular menu
			setActive_left(!active_left);

			// Close all other circular menus (if open)
			setActive_goTO(false);
		} else if (menuIndex === activeMenuCount) {
			// Clicking the same menu should close it
			setActive_goTO(!active_goTO);
		} else {
			// For newly created circular menus
			setActive_goTO(true);
			setActive_left(false);
			setActiveMenuCount(menuIndex);
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

			<div
				id={`circularMenu${activeMenuCount}`}
				className={`circular-menu circular-menu-left ${
					active_left ? "active" : ""
				}`}
			>
				<a className="floating-btn" onClick={() => toggleMenu(1)}>
					<i className="fa fa-bars"></i>
				</a>

				<menu className="items-wrapper">
					<a
						href="#"
						className="menu-item"
						onClick={() => toggleMenu(activeMenuCount + 1)}
					></a>
					<a href="#" className="menu-item">
						resume
					</a>
					<a href="#" className="menu-item">
						language
					</a>
					<a href="#" className="menu-item"></a>
				</menu>
			</div>

			{/* Render additional circular menus dynamically based on activeMenuCount state */}
			{[...Array(activeMenuCount - 1)].map((_, index) => (
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
						></a>
						<a href="#" className="menu-item">
							Option {index + 2}
						</a>
						<a href="#" className="menu-item">
							Option {index + 3}
						</a>
						<a href="#" className="menu-item"></a>
					</menu>
				</div>
			))}
		</div>
	);
}

export default Alt_navbar;

{
	/* <div
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
					></a>
					<a href="#" className="menu-item ">
						resume
					</a>
					<a href="#" className="menu-item ">
						language
					</a>
					<a href="#" className="menu-item "></a>
				</menu>
			</div> */
}
{
	/*for the gooooooo to menu */
}
{
	/* <div
	id="circularMenu1"
	className={`inner_circular_menu ${active_goTO ? "active" : ""}`}
>
	<a className="floating-btn" onClick={() => setActive_goTO(false)}>
		<i className="fa fa-bars"></i>
	</a>

	<menu className="items-wrapper">
		<a href="#" className="menu-item "></a>
		<a href="#" className="menu-item ">
			resume
		</a>
		<a href="#" className="menu-item ">
			language
		</a>
		<a href="#" className="menu-item "></a>
	</menu>
</div>; */
}
