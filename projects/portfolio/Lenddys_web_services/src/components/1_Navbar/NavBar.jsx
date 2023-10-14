import { useRef, useEffect, useState } from "react";
import CircularMenu from "./CircularMenu";
import Welcome from "../3_welcome/Welcome";
import Change_language from "../2_language_btn/Change_language";
import Tools from "../5_Tools/Tools";
import Projects from "../6_projects/Projects";
import What_I_Do from "../4_what_I_Do/What_I_Do";
import Profile from "../7_profile/Profile";

const NavBar = () => {
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

	// the logo is going to make appear  3 btns   change language  scroll to the top and change theme   there was a 4th one but i dont remember what it was at the moment   jump to a section maybe ????

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
			// Remove the event listener using the same function reference
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

	return (
		<>
			<div
				className={`navbar ${hideNavBar}`}
				onMouseOver={() => onHover()}
				onMouseLeave={() => onMouseLeave()}
			>
				<ul className="">
					<li onClick={() => setOpenGoTo((prev) => !prev)}>
						Go To
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
										<p>Welcome</p>
									</li>
									<li
										onClick={() =>
											scrollToSection(what_I_DoRef)
										}
									>
										<p>What I Do</p>
									</li>
									<li
										onClick={() =>
											scrollToSection(toolsRef)
										}
									>
										<p>Tools</p>
									</li>
									<li
										onClick={() =>
											scrollToSection(projectsRef)
										}
									>
										<p>Projects</p>
									</li>
									<li
										onClick={() =>
											scrollToSection(profileRef)
										}
									>
										<p>Profile</p>
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
							Resume
						</a>
					</li>
					<li>
						<CircularMenu />
					</li>

					<li>Message</li>
					<li>Socials</li>
				</ul>
			</div>

			<div className="components_container ">
				<div>
					<Change_language />
				</div>

				<div ref={welcomeRef}>
					<Welcome />
				</div>

				<div ref={what_I_DoRef}>
					<What_I_Do />
				</div>

				<div ref={toolsRef}>
					<Tools />
				</div>

				<div ref={projectsRef}>
					<Projects />
				</div>

				<div ref={profileRef}>
					<Profile />
				</div>
			</div>
		</>
	);
};

export default NavBar;
