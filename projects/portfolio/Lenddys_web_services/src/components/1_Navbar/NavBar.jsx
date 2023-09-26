import Logo from "../../assets/LM.png";

function NavBar() {
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
