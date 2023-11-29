import React, { useRef, useEffect, useState } from "react";
import CircularMenu from "./2_Circular_menu/CircularMenu";
import Welcome from "../2_welcome/Welcome";
import Tools from "../4_Tools/Tools";
import Projects from "../5_projects/Projects";
import What_I_Do from "../3_what_I_Do/What_I_Do";
import Profile from "../6_profile/Profile";
import Logo from "../../assets/LM.png";
import { CSSTransition } from "react-transition-group";

// import language from "../../assets/circular_menu_items/language-outline.svg";
// import Test from "../ProfilePicture";
import GsapShow from "../animations/GsapShow";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import Github from "./social_dropdown/Github";
import LinkedIn from "./social_dropdown/LinkedIn";
import Instagram from "./social_dropdown/Instagram";
import Language from "./social_dropdown/Language";
import Alt_navbar from "./2Alt_navbar/Alt_navbar";
import Side_bar from "./2Alt_navbar/Side_bar";
import NavItem from "./2Alt_navbar/NavItem";
// import DropDown from "./2Alt_navbar/DropDown";

import reload from "../../assets/circular_menu_items/reload-outline.svg";
import Test from "../5_projects/Test";

const NavBar = ({
	changeMode,
	setChangeMode,
	AnimationsRepetitionMode,
	setAnimationsRepetitionMode,
}) => {
	const welcomeRef = useRef(null);
	const what_I_DoRef = useRef(null);
	const toolsRef = useRef(null);
	const projectsRef = useRef(null);
	const profileRef = useRef(null);
	const allRefs = [
		welcomeRef,
		what_I_DoRef,
		toolsRef,
		projectsRef,
		profileRef,
	];

	const scrollToSection = (elementRef) => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
		console.log(elementRef);
	};

	// ? have the 2 logos be on the nav bar and keep switching between the 2

	const [hideNavBar, setHideNavBar] = useState("");
	let hoverTimeout;

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setHideNavBar("hideNavBar");
			} else {
				setHideNavBar("");
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const onHover = () => {
		setHideNavBar("");
		clearTimeout(hoverTimeout);
	};

	const onMouseLeave = () => {
		if (window.scrollY > 150) {
			hoverTimeout = setTimeout(() => {
				setHideNavBar("hideNavBar");
			}, 1000);
		} else {
			setHideNavBar("");
		}
	};

	const [openGoto, setOpenGoTo] = useState(false);
	const [openLanguage, setOpenLanguage] = useState(false);
	const [socials, setSocials] = useState(false);
	//? use this to toggle the animation on and off
	const [intersecting_welcome, setIntersecting_welcome] = useState();
	const [Intersecting_what_i_do, setIntersecting_what_i_do] = useState();
	const [Intersecting_tools, setIntersecting_tools] = useState();
	const [Intersecting_projects, setIntersecting_projects] = useState();
	const [Intersecting_profile, setIntersecting_profile] = useState();

	useEffect(() => {}, []);
	// welcomeRef, what_I_DoRef, toolsRef, projectsRef, profileRef

	//? the logo is going to make appear  3 btns  change language  change dark mode , change animation reload/stop animations
	const { t } = useTranslation();

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleWindowResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	// red
	function DropDown() {
		const [activeMenu, setActiveMenu] = useState("main");
		const [menuHeight, setMenuHeight] = useState(null);
		// const [windowWidth, setWindowWidth] = useState(window.innerWidth);

		const calcHeight = (el) => {
			const height = el.offSetHeight;
			setMenuHeight(height);
		};

		// const calculate_top()
		// red
		const DropDownItem = (props) => {
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
							// rightIcon={"👌"}
							goToMenu="go_to_dropdown"
						>
							{t("navBar_go_to")}
						</DropDownItem>

						<DropDownItem
							// leftIcon={"👋🏼"}
							// rightIcon={"👌"}
							goToMenu="Language_dropdown"
						>
							language
						</DropDownItem>

						<DropDownItem
							// leftIcon={"👋🏼"}
							// rightIcon={"👌"}
							goToMenu="socials_dropdown"
						>
							{t("navBar_socials")}
						</DropDownItem>

						<DropDownItem
						// leftIcon={"👋🏼"}
						// rightIcon={"👌"}
						// goToMenu="settings"
						>
							<a
								href="https://docs.google.com/document/d/12vkzj7Zjqu1vzWEcVHD0i0UKJ1PYsvx41-QtacLm0os/edit?usp=sharing"
								target="_blank"
								rel="noreferrer"
								className="drop_down_a"
							>
								{t("navBar_resume")}
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
							// leftIcon={"👍"}
							// rightIcon={"😂"}
							goToMenu="main"
						>
							{t("navBar_go_back")}
						</DropDownItem>

						<div onClick={() => scrollToSection(welcomeRef)}>
							<DropDownItem
								// leftIcon={"👍"}
								// rightIcon={"😂"}
								goToMenu="main"
							>
								{t("navBar_welcome")}
							</DropDownItem>
						</div>

						<div onClick={() => scrollToSection(what_I_DoRef)}>
							<DropDownItem
								// leftIcon={"👍"}
								// rightIcon={"😂"}
								goToMenu="main"
							>
								{t("navBar_My_Experience")}
							</DropDownItem>
						</div>

						<div onClick={() => scrollToSection(toolsRef)}>
							<DropDownItem
								// leftIcon={"👍"}
								// rightIcon={"😂"}
								goToMenu="main"
							>
								{t("navBar_Tools")}
							</DropDownItem>
						</div>

						<div onClick={() => scrollToSection(projectsRef)}>
							<DropDownItem
								// leftIcon={"👍"}
								// rightIcon={"😂"}
								goToMenu="main"
							>
								{t("navBar_projects")}
							</DropDownItem>
						</div>

						<div onClick={() => scrollToSection(profileRef)}>
							<DropDownItem
								// leftIcon={"👍"}
								// rightIcon={"😂"}
								goToMenu="main"
								onClick={() => scrollToSection(profileRef)}
							>
								{t("navBar_about_me")}
							</DropDownItem>
						</div>
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
							{t("navBar_go_back")}
						</DropDownItem>

						<div
							onClick={() => i18next.changeLanguage("es")}
							className={
								i18next.language === "es" ? "disabled" : ""
							}
						>
							<DropDownItem
								// leftIcon={"👍"}
								// rightIcon={"😂"}
								goToMenu="main"
								// onClick={() => console.log("hello")}
							>
								Español
							</DropDownItem>
						</div>

						<div
							onClick={() => i18next.changeLanguage("en")}
							className={
								i18next.language === "en" ? "disabled" : ""
							}
						>
							<DropDownItem
								// leftIcon={"👍"}
								// rightIcon={"😂"}
								goToMenu="main"
							>
								English
							</DropDownItem>
						</div>
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
							{t("navBar_go_back")}
						</DropDownItem>
						<a
							href="https://github.com/Lenddy"
							target="_blank"
							rel="noreferrer"
						>
							<DropDownItem
								// leftIcon={"👍"}
								// rightIcon={"😂"}
								goToMenu="main"
								// onClick={() => console.log("hello")}
							>
								github
							</DropDownItem>
						</a>

						<a
							href="https://www.linkedin.com/in/lenddy/"
							target="_blank"
							rel="noreferrer"
						>
							<DropDownItem
								// leftIcon={"👍"}
								// rightIcon={"😂"}
								goToMenu="main"
							>
								link in
							</DropDownItem>
						</a>

						<a
							href="https://www.instagram.com/lenddys_web_services/"
							target="_blank"
							rel="noreferrer"
						>
							<DropDownItem
								// leftIcon={"👍"}
								// rightIcon={"😂"}
								goToMenu="main"
							>
								instagram
							</DropDownItem>
						</a>
					</div>
				</CSSTransition>
			</div>
		);
	}
	// green
	return (
		<>
			{windowWidth >= 1504 ? (
				<div
					className={`navbar ${hideNavBar}`}
					onMouseOver={() => onHover()}
					onMouseLeave={() => onMouseLeave()}
				>
					<ul className="">
						<li onClick={() => setOpenGoTo((prev) => !prev)}>
							{t("navBar_go_to")}
							{openGoto && (
								<div className=" dropDownGoTo ">
									<ul
										className={`goTo_ul ${
											openGoto ? "Go_to_animation" : ""
										}`}
									>
										<li
											onClick={() =>
												scrollToSection(welcomeRef)
											}
										>
											<p>{t("navBar_welcome")}</p>
										</li>
										<li
											onClick={() =>
												scrollToSection(what_I_DoRef)
											}
										>
											<p>{t("navBar_My_Experience")}</p>
										</li>
										<li
											onClick={() =>
												scrollToSection(toolsRef)
											}
										>
											<p>{t("navBar_Tools")}</p>
										</li>
										<li
											onClick={() =>
												scrollToSection(projectsRef)
											}
										>
											<p>{t("navBar_projects")}</p>
										</li>
										<li
											onClick={() =>
												scrollToSection(profileRef)
											}
										>
											<p>{t("navBar_about_me")}</p>
										</li>
									</ul>
								</div>
							)}
						</li>
						<li>
							<a
								href="https://docs.google.com/document/d/12vkzj7Zjqu1vzWEcVHD0i0UKJ1PYsvx41-QtacLm0os/edit?usp=sharing"
								target="_blank"
								rel="noreferrer"
								className="resume_a"
							>
								{t("navBar_resume")}
							</a>
						</li>
						<li className="li_logo">
							<img
								className="navLogo"
								src={Logo}
								alt="logo"
								// onClick={showMenu}
							/>
							{/* <CircularMenu
							changeMode={changeMode}
							setChangeMode={setChangeMode}
							AnimationsRepetitionMode={AnimationsRepetitionMode}
							setAnimationsRepetitionMode={
								setAnimationsRepetitionMode
							}
						/> */}
						</li>

						<li onClick={() => setOpenLanguage((prev) => !prev)}>
							<div className="language_div">
								<Language />
							</div>
							{openLanguage && (
								<div className="dropDownLanguage">
									<ul
										className={`goTo_ul ${
											openLanguage
												? "Go_to_animation"
												: ""
										}`}
									>
										<li
											onClick={() =>
												i18next.changeLanguage("es")
											}
											className={
												i18next.language === "es"
													? "disabled"
													: ""
											}
										>
											<p>Español</p>
										</li>
										<li
											onClick={() =>
												i18next.changeLanguage("en")
											}
											className={
												i18next.language === "en"
													? "disabled"
													: ""
											}
										>
											<p>English</p>
										</li>
									</ul>
								</div>
							)}
						</li>

						<li onClick={() => setSocials((prev) => !prev)}>
							{t("navBar_socials")}
							{socials && (
								<div className="dropDownSocials">
									<ul
										className={`goTo_ul ${
											socials ? "Go_to_animation" : ""
										}`}
									>
										<li>
											<a
												href="https://github.com/Lenddy"
												target="_blank"
												rel="noreferrer"
											>
												<Github />
											</a>
										</li>
										<li>
											<a
												href="https://www.linkedin.com/in/lenddy/"
												target="_blank"
												rel="noreferrer"
											>
												<LinkedIn />
											</a>
										</li>
										<li>
											<a
												href="https://www.instagram.com/lenddys_web_services/"
												target="_blank"
												rel="noreferrer"
											>
												<Instagram />
											</a>
										</li>
									</ul>
								</div>
							)}
						</li>
					</ul>
				</div>
			) : (
				// <Alt_navbar />
				<Side_bar>
					<NavItem icon="">
						{/* dropdown goes here  */}
						<DropDown></DropDown>
					</NavItem>
				</Side_bar>
			)}

			<div className="components_container ">
				<div
					ref={welcomeRef}
					className={` all_component `}
					id="welcome"
				>
					<Welcome ref={allRefs} />
				</div>

				<div
					ref={what_I_DoRef}
					className={` all_component `}
					id="What_I_Do"
				>
					<What_I_Do />
				</div>
				<div ref={toolsRef} className={` all_component `} id="Tools">
					<Tools />
				</div>

				<div ref={projectsRef} className={` all_component `}>
					<Projects />
					{/* <Test /> */}
				</div>

				<div
					ref={profileRef}
					className={` all_component `}
					id="Profile"
				>
					<Profile />
				</div>
			</div>
		</>
	);
};

export default NavBar;
