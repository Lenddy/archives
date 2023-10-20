import { useRef, useEffect, useState } from "react";
import CircularMenu from "./2_Circular_menu/CircularMenu";
import Welcome from "../2_welcome/Welcome";
import Tools from "../4_Tools/Tools";
import Projects from "../5_projects/Projects";
import What_I_Do from "../3_what_I_Do/What_I_Do";
import Profile from "../6_profile/Profile";

const NavBar = ({
	changeMode,
	setChangeMode,
	AnimationsRepetitionMode,
	setAnimationsRepetitionMode,
}) => {
	// const { ref: welcomeRef, InView: welcome } = useInView();
	// const { ref: what_I_DoRef, InView: what_I_Do } = useInView();
	// const { ref: toolsRef, InView: tools } = useInView();
	// const { ref: projectsRef, InView: projects } = useInView();
	// const { ref: profileRef, InView: profile } = useInView();

	// const [welcome, setWelcome] = useState();
	// const [what_I_Do, setWhat_I_Do] = useState();
	// const [tools, setTools] = useState();
	// const [projects, setProjects] = useState();
	// const [profile, setProfile] = useState();

	const welcomeRef = useRef(null);
	const what_I_DoRef = useRef(null);
	const toolsRef = useRef(null);
	const projectsRef = useRef(null);
	const profileRef = useRef(null);
	// console.log("this is welcome ref", welcomeRef.current.classList);
	// console.log("this is welcome ref", welcomeRef.current.className);
	// console.log("this is myRefs", myRefs);
	// myRefs.forEach((el) => console.log("this is myRefs", el));
	// useEffect(() => {
	// 	// const observer = new IntersectionObserver((entries) => {
	// 	// 	console.log("entries", entries);

	// 	// 	entries.forEach((entry) => {
	// 	// 		console.log(entry);
	// 	// 		if (entry.isIntersecting) entry.target.classList.add("show");
	// 	// 		else entry.target.classList.remove("show");
	// 	// 	});
	// 	// });

	// 	// const hiddenElements = document.querySelectorAll(".hidden");
	// 	// hiddenElements.forEach((el) => observer.observe(el));
	// 	// myRefs.forEach(el => {
	// 	// 	console.log("this is el", el);
	// 	// 	observer.observe(el);
	// 	// });

	// 	const observer = new IntersectionObserver((entries) => {
	// 		console.log("entries", entries);
	// 		// const entry = entries[0];
	// 		setIntersecting(entries.isIntersecting);
	// 	});
	// 	observer.observe(
	// 		welcomeRef.current,
	// 		what_I_DoRef.current,
	// 		toolsRef.current,
	// 		projectsRef.current,
	// 		profileRef.current
	// 	);

	// 	// console.log(" welcomeRef", welcomeRef.current);
	// 	// 	const observer = new IntersectionObserver((...entries) => {
	// 	// 		console.log("entries", entries);
	// 	// 	});
	// 	// 	observer.observe(
	// 	// 		welcomeRef.current,
	// 	// 		what_I_DoRef.current,
	// 	// 		toolsRef.current,
	// 	// 		projectsRef.current,
	// 	// 		profileRef.current
	// 	// 	);
	// 	// }, []);
	// }, []);
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
	//? use this to toggle the animation on and off
	const [intersecting_welcome, setIntersecting_welcome] = useState();
	const [Intersecting_what_i_do, setIntersecting_what_i_do] = useState();
	const [Intersecting_tools, setIntersecting_tools] = useState();
	const [Intersecting_projects, setIntersecting_projects] = useState();
	const [Intersecting_profile, setIntersecting_profile] = useState();

	useEffect(() => {
		const observer_welcome = new IntersectionObserver((entries) => {
			const entry = entries[0];
			console.log(entry);
			if (entry.isIntersecting) {
				setIntersecting_welcome(entry.isIntersecting);
				entry.target.classList.add("welcome_animation");
			} else {
				entry.target.classList.remove("welcome_animation");
			}
		});
		const observer_what_i_do = new IntersectionObserver((entries) => {
			const entry = entries[0];
			console.log(entry);
			if (entry.isIntersecting) {
				setIntersecting_what_i_do(entry.isIntersecting);
				entry.target.classList.add("what_i_do_animation");
			} else {
				entry.target.classList.remove("what_i_do_animation");
			}
		});
		const observer_tools = new IntersectionObserver((entries) => {
			const entry = entries[0];
			console.log(entry);
			if (entry.isIntersecting) {
				setIntersecting_tools(entry.isIntersecting);
				entry.target.classList.add("tools_animation");
			} else {
				entry.target.classList.remove("tools_animation");
			}
		});
		const observer_projects = new IntersectionObserver((entries) => {
			const entry = entries[0];
			console.log(entry);
			if (entry.isIntersecting) {
				setIntersecting_projects(entry.isIntersecting);
				entry.target.classList.add("projects_animation");
			} else {
				entry.target.classList.remove("projects_animation");
			}
		});
		const observer_profile = new IntersectionObserver((entries) => {
			const entry = entries[0];
			console.log(entry);
			if (entry.isIntersecting) {
				setIntersecting_profile(entry.isIntersecting);
				entry.target.classList.add("profile_animation");
			} else {
				entry.target.classList.remove("profile_animation");
			}
		});

		// observer_welcome.observe(welcomeRef.current);
		// observer_what_i_do.observe(what_I_DoRef.current);
		// observer_tools.observe(toolsRef.current);
		// observer_projects.observe(projectsRef.current);
		// observer_profile.observe(profileRef.current);
	}, []);
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
					<li>
						<CircularMenu
							changeMode={changeMode}
							setChangeMode={setChangeMode}
							AnimationsRepetitionMode={AnimationsRepetitionMode}
							setAnimationsRepetitionMode={
								setAnimationsRepetitionMode
							}
						/>
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
					{/* hidden */}
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
