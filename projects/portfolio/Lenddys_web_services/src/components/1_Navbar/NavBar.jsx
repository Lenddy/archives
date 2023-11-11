import { useRef, useEffect, useState } from "react";
import CircularMenu from "./2_Circular_menu/CircularMenu";
import Welcome from "../2_welcome/Welcome";
import Tools from "../4_Tools/Tools";
import Projects from "../5_projects/Projects";
import What_I_Do from "../3_what_I_Do/What_I_Do";
import Profile from "../6_profile/Profile";
import Logo from "../../assets/LM.png";
// import language from "../../assets/circular_menu_items/language-outline.svg";
// import Test from "../ProfilePicture";
import GsapShow from "../animations/GsapShow";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import Github from "./social_dropdown/Github";
import LinkedIn from "./social_dropdown/LinkedIn";
import Instagram from "./social_dropdown/Instagram";
import Language from "./social_dropdown/Language";

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

	return (
		<>
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
										openLanguage ? "Go_to_animation" : ""
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
			<div className="components_container ">
				<div
					ref={welcomeRef}
					className={` all_component `}
					id="welcome"
				>
					<Welcome />
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
