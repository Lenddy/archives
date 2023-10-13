import Logo from "../../assets/LM.png";
import { useRef, useEffect, useState, forwardRef } from "react";
import CircularMenu from "./CircularMenu";
// import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
	// const navigate = useNavigate();
	const { welcome, what_I_Do, tools, projects, profile } = props;
	// ?????
	// ?????
	// ?????
	// ?????
	// ?????
	// ?????

	// the navbar will disappear of fade out  on scroll  and will appear on scroll up and on hover at the top of the page

	// the logo is going to make appear  3 btns   change language  scroll to the top and change theme   there was a 4th one but i dont remember what it was at the moment   jump to a section maybe ????

	// ? have the 2 logos be on the nav bar and keep switching between the 2

	// !!!!! maybe add the go to in side of the circular menu and maybe rename it jump to

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
		// hoverTimeout = setTimeout(() => {
		// 	navigate("/#0");
		// }, 1000);
	};

	const scrollToSection = (refElement) => {
		window.scrollTo({
			top: refElement.current.offsetTop,
			behavior: "smooth",
		});
		console(refElement, "was click");
	};

	// const welcome = useRef();
	// const what_I_Do = useRef();
	// const tools = useRef();
	// const projects = useRef();
	// const profile = useRef();
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
								{/* flex flex-col */}
								<ul className=" goTo_ul">
									{/* flex flex-col gap-4 */}
									<li
										onClick={() => scrollToSection(welcome)}
									>
										<p>Welcome</p>
									</li>
									<li
										onClick={() =>
											scrollToSection(what_I_Do)
										}
									>
										<p>What I Do</p>
									</li>
									<li onClick={() => scrollToSection(tools)}>
										<p>Tools</p>
									</li>
									<li
										onClick={() =>
											scrollToSection(projects)
										}
									>
										<p>Projects</p>
									</li>
									<li
										onClick={() => scrollToSection(profile)}
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

					{/* <img className="navLogo" src={Logo} alt="logo" /> */}
					<li>Message</li>
					<li>Socials</li>
				</ul>
			</div>
		</>
	);
};

export default NavBar;
