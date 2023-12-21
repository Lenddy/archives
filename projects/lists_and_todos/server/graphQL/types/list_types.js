const { gql } = require("apollo-server-express");

const typeDefs = gql`
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
		getAllLists: [List!]!
	}

	input ListInput {
		title: String!
		description: String!
		isDone: Boolean!
	}

	#mutations
	type Mutation {
		createOneList(list: ListInput!): List!
	}
`;

module.exports = { typeDefs };
