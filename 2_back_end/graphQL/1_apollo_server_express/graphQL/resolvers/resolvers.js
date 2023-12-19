const { people } = require("../../fakeData");

// resolvers are functions or methods that run when a query is call, they are the one that resolve how the queries work
const resolvers = {
	Query: {
		// getting  all the people on the array
		getAllPeople() {
			return people;
		},
	},

	Mutation: {
		// creating a new person
		createPerson(parent, args) {
			//args represents the args(arguments) send form the typeDef
			const newPerson = args;
			people.push(newPerson);
			return newPerson;
		},
	},
};

module.exports = { resolvers };
