// importing needed dependencys
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const app = express();
const port = 8000;

// importing types and resolvers
const { typeDefs } = require("./graphQL/schemas/typeDefs");
const { resolvers } = require("./graphQL/resolvers/resolvers");

// creating the apollo server
async function startApolloServer() {
	const server = new ApolloServer({
		typeDefs, //defines all your types and mutations
		resolvers, //runs customizable function that runs when the types are and mutations ar called
	});
	await server.start();
	//applying the apollo as a middleware to express
	server.applyMiddleware({ app });
}
startApolloServer();

//alerts your if the express server is running
app.listen(port, () =>
	console.log(
		`listening on port ${port}\ngo to http://localhost:8000/graphql`
	)
);
