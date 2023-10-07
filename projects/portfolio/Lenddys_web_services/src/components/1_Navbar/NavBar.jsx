import Logo from "../../assets/LM.png";

function NavBar() {
	// ?????
	// ?????
	// ?????
	// ?????
	// ?????
	// ?????

	// the navbar will disappear of fade out  on scroll  and will appear on scroll up and on hover at the top of the page

	// the logo is going to make appear  3 btns   change language  scroll to the top and change theme   there was a 4th one but i dont remember what it was at the moment   jump to a section maybe ????

	return (
		<>
			<div className="navbar">
				{/* have an animation that the navbar is full size on the screen and on scroll it becomes smaller  to what it is now  */}
				<ul>
					<li>What I DO</li>
					<li>Resume</li>
					<img className="navLogo" src={Logo} alt="logo" />
					{/* on click will scroll to the top */}
					<li>Projects</li>
					<li>Socials</li>
				</ul>
				{/* will only appear if the screen device is small */}
				{/* <button>burger menu</button> */}
			</div>
		</>
	);
}

export default NavBar;
