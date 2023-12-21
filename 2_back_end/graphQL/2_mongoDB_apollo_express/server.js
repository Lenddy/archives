// your might need to install graphql
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server-express");
const { typeDefs } = require("./graphQL/schemas/postType");
const { resolvers } = require("./graphQL/resolvers/postResolver");

const startServer = async () => {
	const app = express();
	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers,
	});

	await apolloServer.start();

	apolloServer.applyMiddleware({ app: app });

	app.use((req, res) => {
		res.send("hello from express apollo server");
	});

	//to connect to mongoDb(data base)
	mongoose.set("strictQuery", true); // this is so that only the field that you create are add to your schema(document)
	await mongoose
		.connect(
			`mongodb+srv://Lenddy10:${process.env.Password}@mern.hrxjj7q.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`
		)
		.then(() => console.log("Established a connection to the database"))
		.catch((err) =>
			console.log(
				"Something went wrong when connecting to the database ",
				err
			)
		);

	app.listen(8001, () =>
		console.log(`listening on port 8000\nhttp://localhost:8000/graphql`)
	);
};

startServer();
