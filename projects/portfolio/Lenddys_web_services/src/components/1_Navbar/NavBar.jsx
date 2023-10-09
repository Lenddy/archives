import Logo from "../../assets/LM.png";
import { useRef, useEffect, useState } from "react";

function NavBar() {
	// ?????
	// ?????
	// ?????
	// ?????
	// ?????
	// ?????

	// the navbar will disappear of fade out  on scroll  and will appear on scroll up and on hover at the top of the page

	// the logo is going to make appear  3 btns   change language  scroll to the top and change theme   there was a 4th one but i dont remember what it was at the moment   jump to a section maybe ????

	// ? have the 2 logos be on the nav bar and keep switching between the 2

	const navBarRef = useRef();
	const [hideNavBar, setHideNavBar] = useState("");
	const [notHover, setNotHover] = useState(false);
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
		clearTimeout(hoverTimeout); // Clear the previous timeout if it exists
	};

	const onMouseLeave = () => {
		// Set a timeout to apply the hideNavBar class after a delay
		hoverTimeout = setTimeout(() => {
			setHideNavBar("hideNavBar");
		}, 1000); // Adjust the delay (in milliseconds) as needed
	};

	return (
		<>
			<div
				className={`navbar ${hideNavBar}`}
				onMouseOver={() => onHover()}
				onMouseLeave={() => onMouseLeave()}
			>
				<ul>
					<li>What I DO</li>
					<li>Resume</li>
					<img className="navLogo" src={Logo} alt="logo" />
					<li>Projects</li>
					<li>Socials</li>
				</ul>
			</div>
		</>
	);
}

export default NavBar;

// <div id="circularMenu1" class="circular-menu circular-menu-left active">

// <a class="floating-btn" onclick="document.getElementById('circularMenu1').classList.toggle('active');">
//   <i class="fa fa-bars"></i>
// </a>

// <menu class="items-wrapper">
//   <a href="#" class="menu-item fa fa-home"></a>
//   <a href="#" class="menu-item fa fa-user"></a>
//   <a href="#" class="menu-item fa fa-pie-chart"></a>
//   <a href="#" class="menu-item fa fa-cog"></a>
// </menu>

// </div>
