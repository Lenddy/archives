import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import axios from "axios";

// function App() {
// 	const [count, setCount] = useState(0);
// 	useEffect(() => {
// 		axios
// 			.get("http://localhost:8001") ///graphql
// 			.then((res) => {
// 				console.log("this is the response", res);
// 			})
// 			.catch((err) => {
// 				console.log("error", err);
// 			});
// 	}, []);

// 	return <></>;
// }

// export default App;
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
} from "@apollo/client";

const client = new ApolloClient({
	uri: "http://localhost:8001/graphql", // Your GraphQL server endpoint
	cache: new InMemoryCache(),
});

const GET_DATA = gql`
	query {
		posts {
			id
			title
			<content></content>
		}
	}
`;

function App() {
	const { loading, error, data } = useQuery(GET_DATA);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	// Process and display data here

	return <div>{/* Render fetched data */}</div>;
}

export default function ApolloApp() {
	return (
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	);
}
