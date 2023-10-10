import Profile from "./7_profile/Profile";
import NavBar from "./1_Navbar/NavBar";
import Change_language from "./2_language_btn/Change_language";
import Tools from "./5_Tools/Tools";
import Projects from "./6_projects/Projects";
import Welcome from "./3_welcome/Welcome";
import What_I_Do from "./4_what_I_Do/What_I_Do";
import Test from "./Test";

function Container() {
	return (
		<>
			<div className="components_container">
				<NavBar />
			</div>
			<div className="components_container">
				<Change_language />
			</div>
			<div className="components_container">
				<Welcome />
			</div>
			<div className="components_container">
				<What_I_Do />
			</div>
			<div className="components_container">
				<Tools />
			</div>
			<div className="components_container">
				<Projects />
			</div>
			<div className="components_container">
				<Profile />
			</div>
			{/* <div>
				<Test></Test>
			</div> */}
		</>
	);
}

export default Container;
