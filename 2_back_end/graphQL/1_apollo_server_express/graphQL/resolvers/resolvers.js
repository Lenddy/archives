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

		deletePerson(parent, args) {
			for (let i = 0; i < people.length; i++) {
				if (people[i].name === args.name) {
					people.splice(i, 1);
					return true; // Assuming you want to stop after deleting the first occurrence of "bryan"
				}
			}

			return false; // Return false if "bryan" is not found in the array
		},

		updatePerson(parent, args) {
			for (let i = 0; i < people.length; i++) {
				if (people[i].name === args.name) {
					people[i].name = args.newName;
					people[i].age = args.age;
					people[i].married = args.married;
					return people[i]; // Assuming you want to stop after deleting the first occurrence of "bryan"
				}
			}

			return false; // Return false if "bryan" is not found in the array
		},
	},
};

module.exports = { resolvers };
