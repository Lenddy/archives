const { gql } = require("apollo-server-express");

// types represent a kind of object you can fetch from your service, and what fields it has.
const typeDefs = gql`
	# this is how your create a comment in the gql syntax

	#Object
	# this is an Object types represent a kind of object you can fetch from your service, and what fields it has.
	type Person { #type
		#fields
		name: String! # the ! means this is filed is required
		age: Int!
		married: Boolean!
	}

	#Queries
	#this is a query type it  allows you to retrieve specific data from the server
	type Query {
		getAllPeople: [Person!]! #returns a list of people that is not nullable
	}

	#Mutations
	#this is a mutation type it allows you to modify or manipulate data on the server-side (crud)
	type Mutation {
		createPerson(name: String!, age: Int!, married: Boolean!): Person! #mutation to create a person
		deletePerson(name: String!): Boolean! # mutation to delete a person
		updatePerson(
			name: String!
			newName: String
			age: Int
			married: Boolean
		): Person! # mutation to update a person
	}
`;

module.exports = { typeDefs };
