import { useState } from "react";
import Navbar from "./components/Navbar";
import RequestForm from "./components/requester/requestForm";
import "./App.css";

function App() {
	return (
		<>
			<Navbar>
				<RequestForm />
			</Navbar>
		</>
	);
}

export default App;
