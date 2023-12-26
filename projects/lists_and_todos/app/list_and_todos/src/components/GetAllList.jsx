// Import necessary modules from Apollo Client and custom GraphQL queries
import { useQuery } from "@apollo/client"; // Import useQuery hook to execute GraphQL queries

import { useState, useEffect } from "react";
import { get_all_list } from "../GraphQL/Queries";

function GetAllList() {
	// Fetch data using the useQuery hook by executing the getAllList query
	const { error, loading, data } = useQuery(get_all_list);

	// Set up state to manage the lists fetched from the query
	const [lists, setLists] = useState([]);

	// useEffect hook to handle changes in error, loading, and data states
	useEffect(() => {
		if (loading) {
			console.log("loading"); // Log a message when data is loading
		}
		if (data) {
			console.log(data); // Log the fetched data
			setLists(data.getAllLists); // Set the lists retrieved from the query to the state
		}
		if (error) {
			console.log("there was an error", error); // Log an error message if an error occurs
		}
	}, [error, loading, data]); // Dependencies for the useEffect hook

	// Render the retrieved lists
	return (
		<div>
			{lists.map((l, idx) => {
				return (
					<div key={idx}>
						<h1> Title: {l.title}</h1>
						<p> Description: {l.description}</p>
						<p>is Done: {l.isDone == true ? "yes" : "no"}</p>
					</div>
				);
			})}
		</div>
	);
}

export default GetAllList; // Export the GetAllList component
