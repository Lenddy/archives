const express = require("express"); //importing express
const { graphqlHTTP: expressGraphQL } = require("express-graphql"); //importing express-graphql
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLNonNull,
} = require("graphql"); //importing need attributes from graphql
const app = express(); // express to the variable app
const port = 5000;

// place holder for a data base
const authors = [
	{ id: 1, name: "J.K.Rowling" },
	{ id: 2, name: "J.R.R. Tolkie" },
	{ id: 3, name: "Brent Weeks" },
];

const books = [
	{ id: 1, name: "Harry Potter 1", authorId: 1 },
	{ id: 2, name: "Harry Potter 2", authorId: 1 },
	{ id: 3, name: "Harry Potter 3", authorId: 1 },
	{ id: 4, name: "Tolkie book 1", authorId: 2 },
	{ id: 5, name: "Tolkie book 2", authorId: 2 },
	{ id: 6, name: "Tolkie book 3", authorId: 2 },
	{ id: 7, name: "Brent Weeks book 1", authorId: 3 },
	{ id: 8, name: "Brent Weeks book 2", authorId: 3 },
];

const test = new GraphQLSchema({
	//creating a new schema
	query: new GraphQLObjectType({
		//making a new query to tell get the information that we need ( this essentially how get get the data)
		name: "HelloWorld", //this is the name of the object that we are getting from (dont use spaces)
		fields: () => ({
			//this are the fields that Hello World returns (gives(provides) to you)
			message: {
				// this is an object
				type: GraphQLString, //defining the type(data type) of the message
				resolve: () => "Hello World", //since this is a stati string we are using resolve and telling graphql where to get the message from
			},
		}),
	}),
});

// creating an object for the object for the books
const BookType = new GraphQLObjectType({
	name: "Book",
	description: "this represents a book written by an author",
	fields: () => ({
		id: { type: GraphQLNonNull(GraphQLInt) }, //this represent a none null id(int)
		name: { type: GraphQLNonNull(GraphQLString) }, //this represent a none null name(string)
		authorId: { type: GraphQLNonNull(GraphQLInt) }, //this represent a none null id(int)
		author: {
			type: AutorType,
			resolve: (book) => {
				return authors.find((author) => author.id === book.authorId);
			},
		},
	}),
});

const AutorType = new GraphQLObjectType({
	name: "Author",
	description: "this represents an author of a  book ",
	fields: () => ({
		id: { type: GraphQLNonNull(GraphQLInt) }, //this represent a none null id(int)
		name: { type: GraphQLNonNull(GraphQLString) }, //this represent a none null name(string)
		books: {
			type: new GraphQLList(BookType),
			resolve: (author) => {
				return books.find((book) => book.id === author.book);
			},
		},
	}),
});

const RootQueryType = new GraphQLObjectType({
	name: "query",
	description: "root query",
	fields: () => ({
		//({}) this means that it will return every thing that is on the inside of the seconde paréntesis
		books: {
			type: new GraphQLList(BookType), //the type is a list(of books in this case )
			description: "list of books",
			resolve: () => books,
		},
		Authors: {
			type: new GraphQLList(AutorType), //the type is a list(of books in this case )
			description: "list of authors",
			resolve: () => authors,
		},
	}),
});

const schema = new GraphQLSchema({
	query: RootQueryType,
});

app.use(
	"/graphql",
	expressGraphQL({
		schema: schema, // passing the schema so we can see it
		graphiql: true,
	})
);

app.listen(port, () => console.log("server running listening on port", port));
