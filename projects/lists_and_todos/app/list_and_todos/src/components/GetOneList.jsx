// Import necessary modules from Apollo Client and custom GraphQL queries
import { useQuery } from "@apollo/client"; // Import useQuery hook to execute GraphQL queries
import { useNavigate, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { get_one_list } from "../GraphQL/Queries";

function GetOneList() {
	const { id } = useParams();

	// Fetch data using the useQuery hook by executing the getAllList query
	const { error, loading, data } = useQuery(get_one_list, {
		variables: { id },
	});

	// Set up state to manage the lists fetched from the query
	const [list, setLists] = useState();

	// useEffect hook to handle changes in error, loading, and data states
	useEffect(() => {
		if (loading) {
			console.log("loading"); // Log a message when data is loading
		}
		if (data) {
			console.log(data); // Log the fetched data
			setLists(data.getOneList); // Set the lists retrieved from the query to the state
		}
		if (error) {
			console.log("there was an error", error); // Log an error message if an error occurs
		}
	}, [error, loading, data]); // Dependencies for the useEffect hook

	// Render the retrieved lists
	return (
		<div>
			<Link to={"/dashboard"}>
				{" "}
				<button>dashboard</button>
			</Link>
			<div>
				<h1> Title: {list.title}</h1>
				<p> Description: {list.description}</p>
				<p>is Done: {list.isDone == true ? "yes" : "no"}</p>
			</div>
		</div>
	);
}

export default GetOneList; // Export the GetAllList component

// {list.map((l, idx) => {})}
