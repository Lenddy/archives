import Profile from "./7_profile/Profile";
// import NavBar from "./1_Navbar/NavBar";
import NavBar from "./1_Navbar/NavBar";
import Change_language from "./2_language_btn/Change_language";
import Tools from "./5_Tools/Tools";
import Projects from "./6_projects/Projects";
import Welcome from "./3_welcome/Welcome";
import What_I_Do from "./4_what_I_Do/What_I_Do";
// import Test from "./Test";
import React, { useRef } from "react";

const Container = (props) => {
	// const { welcomeRef, what_I_DoRef, toolsRef, projectsRef, profileRef } =
	// 	props;
	// const welcomeRef = useRef();
	// const what_I_DoRef = useRef(null);
	// const toolsRef = useRef(null);
	// const projectsRef = useRef(null);
	// const profileRef = useRef(null);

	return (
		<>
			<NavBar />

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
