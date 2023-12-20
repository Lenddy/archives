const { gql } = require("apollo-server-express");

const typeDefs = gql`
	# object
	type Post {
		id: ID!
		title: String!
		description: String
		createdAt: String!
		updatedAt: String!
	}

	# Queries
	type Query {
		hello: String
		getAllPosts: [Post!]!
		getPost(id: ID!): Post!
	}

	input PostInput {
		title: String!
		description: String
	}

	# mutations
	type Mutation {
		createPost(post: PostInput!): Post!
		deletePost(id: ID!): Boolean!
		updatePost(id: ID!, post: PostInput!): Post!
	}
`;

module.exports = { typeDefs };
