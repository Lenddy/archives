import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Information from "./components/Information";
import DropdownMenu from "./components/DropdownMenu";

import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<Banner />
			<Information />
			<DropdownMenu />
		</>
	);
}

export default App;
