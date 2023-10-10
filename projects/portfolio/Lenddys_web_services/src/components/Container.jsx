import Profile from "./7_profile/Profile";
import NavBar from "./1_Navbar/NavBar";
import Change_language from "./2_language_btn/Change_language";
import Tools from "./5_Tools/Tools";
import Projects from "./6_projects/Projects";
import Welcome from "./3_welcome/Welcome";
import What_I_Do from "./4_what_I_Do/What_I_Do";
import Test from "./Test";
import { useRef, forwardRef } from "react";

function Container() {
	const welcome = useRef();
	const what_I_Do = useRef();
	const tools = useRef();
	const projects = useRef();
	const profile = useRef();

	const myRefs = {
		welcome,
		what_I_Do,
		tools,
		projects,
		profile,
	};

	return (
		<>
			<div className="components_container">
				<NavBar prop={myRefs} />
			</div>
			<div className="components_container">
				<Change_language />
			</div>
			<div className="components_container">
				<Welcome ref={welcome} />
			</div>
			<div className="components_container">
				<What_I_Do ref={what_I_Do} />
			</div>
			<div className="components_container">
				<Tools ref={tools} />
			</div>
			<div className="components_container">
				<Projects ref={projects} />
			</div>
			<div className="components_container">
				<Profile ref={profile} />
			</div>
			{/* <div>
				<Test></Test>
			</div> */}
		</>
	);
}

export default Container;
