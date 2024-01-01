import "./App.css";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
	return (
		<>
			<Navbar></Navbar>

			<div className="sections">
				<Welcome></Welcome>
			</div>
			<div className="sections">
				<Services></Services>
			</div>
			<div className="sections">
				<Contact></Contact>
			</div>
			<div className="sections">
				<About></About>
			</div>
		</>
	);
}

export default App;
