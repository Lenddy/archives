import Profile from "./7_profile/Profile";
import NavBar from "./1_Navbar/NavBar";
import Change_language from "./2_language_btn/Change_language";
import Tools from "./5_Tools/Tools";
import Projects from "./6_projects/Projects";
import Welcome from "./3_welcome/Welcome";
import What_I_Do from "./4_what_I_Do/What_I_Do";

function Container() {
	return (
		<>
			<NavBar />
			<Change_language />

			<Welcome />
			<What_I_Do />
			<Tools />
			<Projects />
			<Profile />
		</>
	);
}

export default Container;
