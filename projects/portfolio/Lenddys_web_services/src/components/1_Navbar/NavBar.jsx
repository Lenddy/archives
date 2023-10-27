import { useRef, useEffect, useState } from "react";
import CircularMenu from "./2_Circular_menu/CircularMenu";
import Welcome from "../2_welcome/Welcome";
import Tools from "../4_Tools/Tools";
import Projects from "../5_projects/Projects";
import What_I_Do from "../3_what_I_Do/What_I_Do";
import Profile from "../6_profile/Profile";
import Logo from "../../assets/LM.png";
// import Test from "../ProfilePicture";
import GsapShow from "../animations/GsapShow";

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

	// const [what_I_DoPosition, setWhat_I_DoPosition] = useState(null);
	// const toolsRefPosition = useRef(null);
	// const projectsRefPosition = useRef(null);
	// const profileRefPosition = useRef(null);

	// ?? this is for the scroll animations with interception observer

	// 1 create ref for the elements
	// 2 acces the ref  and make use of useEffect to make a new intersectionObserver instance

	// 3 make a state to store the visibility of the items being observer

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
		// const startAnimation = (pixels = 0, state) => {
		// 	if (window.scrollY > parseInt(pixels)) {
		// 		state(true);
		// 	}
		// 	// } else {
		// 	// 	setHideNavBar("");
		// 	// }
		// };

		window.addEventListener("scroll", handleScroll);
		// window.addEventListener(
		// 	"scroll",
		// 	startAnimation(100, setWhat_I_DoPosition),
		// 	console.log(what_I_DoPosition)
		// );
		// window.addEventListener("scroll", startAnimation);
		// window.addEventListener("scroll", startAnimation);
		return () => {
			// Remove the event listener using the same function reference
			window.removeEventListener("scroll", handleScroll);
			// window.removeEventListener("scroll", startAnimation);
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
	//? use this to toggle the animation on and off
	const [intersecting_welcome, setIntersecting_welcome] = useState();
	const [Intersecting_what_i_do, setIntersecting_what_i_do] = useState();
	const [Intersecting_tools, setIntersecting_tools] = useState();
	const [Intersecting_projects, setIntersecting_projects] = useState();
	const [Intersecting_profile, setIntersecting_profile] = useState();

	useEffect(() => {}, []);
	// welcomeRef, what_I_DoRef, toolsRef, projectsRef, profileRef

	//? the logo is going to make appear  3 btns  change language  change dark mode , change animation reload/stop animations

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

					<li>Message</li>
					<li>Socials</li>
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
				<hr />

				<div
					ref={what_I_DoRef}
					className={` all_component `}
					id="What_I_Do"
				>
					<What_I_Do />
				</div>
				<hr />

				<div ref={toolsRef} className={` all_component `} id="Tools">
					<Tools />
				</div>
				<hr />

				<div ref={projectsRef} className={` all_component `}>
					{/* hidden */}
					<Projects />
				</div>
				<hr />

				<div
					ref={profileRef}
					className={` all_component `}
					id="Profile"
				>
					<Profile />
				</div>
				{/* <div>
					<GsapShow />
				</div> */}
				{/* <div>
					<Test />
				</div> */}
			</div>
		</>
	);
};

export default NavBar;
