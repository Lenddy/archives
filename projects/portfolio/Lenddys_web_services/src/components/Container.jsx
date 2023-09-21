import Main from "./Main_content/Main";
import NavBar from "./Navbar/NavBar";
import Change_language from "./language_btn/Change_language";

function Container() {
	return (
		<>
			<NavBar />
			<Change_language />
			<Main />
		</>
	);
}

export default Container;
