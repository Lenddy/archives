import React, { useState, useEffect, forwardRef } from "react";
// import DropDownItem from "./DropDownItem";
import { CSSTransition } from "react-transition-group";

function DropDown() {
	const [activeMenu, setActiveMenu] = useState("main");
	const [menuHeight, setMenuHeight] = useState(null);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const calcHeight = (el) => {
		const height = el.offSetHeight;
		setMenuHeight(height);
	};

	const handleWindowResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	// const calculate_top()

	const DropDownItem = (props) => {
		const scrollToSection = (top_section) => {
			window.scrollTo({
				top: top_section,
				behavior: "smooth",
			});
		};

		return (
			<>
				<div
					className="dropDown_item"
					onClick={() => {
						props.goToMenu && setActiveMenu(props.goToMenu),
							props.section
								? scrollToSection(props.section)
								: null;
					}}
				>
					<span className="icon-button">{props.leftIcon}</span>
					<p className="side-bar-p">{props.children}</p>
					<span className="icon-right">{props.rightIcon}</span>
				</div>
			</>
		);
	};

	return (
		<div className="side-bar-dropDown" style={{ height: menuHeight }}>
			<CSSTransition
				in={activeMenu === "main"}
				unmountOnExit
				timeout={500}
				classNames="menu-primary"
				onEnter={calcHeight}
				onExit={calcHeight}
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
				onExit={calcHeight}
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
						section={110}
						goToMenu="main"
					>
						Welcome
					</DropDownItem>

					<DropDownItem
						leftIcon={"👍"}
						rightIcon={"😂"}
						section={1420}
						// 1480
						goToMenu="main"
					>
						Expertise
					</DropDownItem>

					<DropDownItem
						leftIcon={"👍"}
						rightIcon={"😂"}
						section={2900}
						goToMenu="main"
					>
						Tools
					</DropDownItem>

					<DropDownItem
						leftIcon={"👍"}
						rightIcon={"😂"}
						section={3800}
						goToMenu="main"
					>
						Projects
					</DropDownItem>

					<DropDownItem
						leftIcon={"👍"}
						rightIcon={"😂"}
						section={windowWidth >= 1450 ? 5280 : 4700}
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
				onExit={calcHeight}
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
				onExit={calcHeight}
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
