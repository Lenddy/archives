const { gql } = require("apollo-server-express");

// use this video to fix the dates https://www.youtube.com/watch?v=XkJVYrZaZ9c

const typeDefs = gql`
	#scalar Date

	#Object
	type List {
		id: ID!
		title: String!
		description: String!
		isDone: Boolean!
		createdAt: String!
		updatedAt: String!
	}

	#Queries
	type Query {
		hello: String
		getOneList(id: ID!): List!
		getAllLists: [List!]!
	}

	#input ListInput {}

	#mutations
	type Mutation {
		createOneList(
			title: String!
			description: String!
			isDone: Boolean!
		): List!

		updateOneList(
			id: ID
			title: String
			description: String
			isDone: Boolean
		): List!

		deleteOneList(id: ID): List!
	}
`;

module.exports = { typeDefs };
