import Profile from "./6_profile/Profile";
// import NavBar from "./1_Navbar/NavBar";
import NavBar from "./1_Navbar/NavBar";
import Change_language from "./1_Navbar/2_Circular_menu/Change_language";
import Tools from "./4_Tools/Tools";
import Projects from "./5_projects/Projects";
import Welcome from "./2_welcome/Welcome";
import What_I_Do from "./3_what_I_Do/What_I_Do";
// import Test from "./Test";
import React, { useRef } from "react";

const Container = ({ changeMode, setChangeMode }) => {
	// const { welcomeRef, what_I_DoRef, toolsRef, projectsRef, profileRef } =
	// 	props;
	// const welcomeRef = useRef();
	// const what_I_DoRef = useRef(null);
	// const toolsRef = useRef(null);
	// const projectsRef = useRef(null);
	// const profileRef = useRef(null);

	return (
		<>
			<NavBar changeMode={changeMode} setChangeMode={setChangeMode} />

			{/* <div className="components_container">
				<Change_language />
			</div>
			<div className="components_container" ref={welcomeRef}>
				<Welcome />
			</div>
			<div className="components_container" ref={what_I_DoRef}>
				<What_I_Do />
			</div>
			<div className="components_container" ref={toolsRef}>
				<Tools />
			</div>
			<div className="components_container" ref={projectsRef}>
				<Projects />
			</div>
			<div className="components_container" ref={profileRef}>
				<Profile />
			</div> */}
			{/* <div>
				<Test></Test>
			</div> */}
		</>
	);
};

export default Container;
