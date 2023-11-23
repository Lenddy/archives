import React, { useState } from "react";
// import DropDownItem from "./DropDownItem";
import { CSSTransition } from "react-transition-group";

function DropDown() {
	const [activeMenu, setActiveMenu] = useState("main");
	const [menuHeight, setMenuHeight] = useState(null);
	const calcHeight = (el) => {
		const height = el.offSetHeight;
		setMenuHeight(height);
	};

	function DropDownItem(props) {
		return (
			<a
				href="#"
				className="dropDown_item"
				onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
			>
				<span className="icon-button">{props.leftIcon}</span>
				<p className="side-bar-p">{props.children}</p>
				<span className="icon-right">{props.rightIcon}</span>
			</a>
		);
	}

	return (
		<div className="side-bar-dropDown" style={{ height: menuHeight }}>
			<CSSTransition
				in={activeMenu === "main"}
				unmountOnExit
				timeout={500}
				classNames="menu-primary"
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropDownItem
						// leftIcon={"👋🏼"}
						rightIcon={"👌"}
						goToMenu="go_to_dropdown"
					>
						go to
					</DropDownItem>

					<DropDownItem
						// leftIcon={"👋🏼"}
						rightIcon={"👌"}
						goToMenu="Language_dropdown"
					>
						language
					</DropDownItem>

					<DropDownItem
						// leftIcon={"👋🏼"}
						rightIcon={"👌"}
						goToMenu="socials_dropdown"
					>
						social media
					</DropDownItem>

					<DropDownItem
						// leftIcon={"👋🏼"}
						rightIcon={"👌"}
						// goToMenu="settings"
					>
						<a href="" className="drop_down_a">
							resume
						</a>
					</DropDownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === "go_to_dropdown"}
				unmountOnExit
				timeout={500}
				classNames="menu-secondary"
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropDownItem
						leftIcon={"👍"}
						rightIcon={"😂"}
						goToMenu="main"
					>
						Go Back
					</DropDownItem>

					<DropDownItem
						leftIcon={"👍"}
						rightIcon={"😂"}
						goToMenu="main"
					>
						Welcome
					</DropDownItem>

					<DropDownItem
						leftIcon={"👍"}
						rightIcon={"😂"}
						goToMenu="main"
					>
						Expertise
					</DropDownItem>

					<DropDownItem
						leftIcon={"👍"}
						rightIcon={"😂"}
						goToMenu="main"
					>
						Tolls
					</DropDownItem>

					<DropDownItem
						leftIcon={"👍"}
						rightIcon={"😂"}
						goToMenu="main"
					>
						Projects
					</DropDownItem>

					<DropDownItem
						leftIcon={"👍"}
						rightIcon={"😂"}
						goToMenu="main"
					>
						profile
					</DropDownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === "Language_dropdown"}
				unmountOnExit
				timeout={500}
				classNames="menu-secondary"
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropDownItem
						leftIcon={"👍"}
						rightIcon={"😂"}
						goToMenu="main"
						// onClick={() => console.log("hello")}
					>
						English
					</DropDownItem>
					<DropDownItem
						leftIcon={"👍"}
						rightIcon={"😂"}
						goToMenu="main"
					>
						Español
					</DropDownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === "socials_dropdown"}
				unmountOnExit
				timeout={500}
				classNames="menu-secondary"
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropDownItem
						leftIcon={"👍"}
						rightIcon={"😂"}
						goToMenu="main"
						// onClick={() => console.log("hello")}
					>
						github
					</DropDownItem>

					<DropDownItem
						leftIcon={"👍"}
						rightIcon={"😂"}
						goToMenu="main"
					>
						link in
					</DropDownItem>

					<DropDownItem
						leftIcon={"👍"}
						rightIcon={"😂"}
						goToMenu="main"
					>
						instagram
					</DropDownItem>
				</div>
			</CSSTransition>
		</div>
	);
}

export default DropDown;
