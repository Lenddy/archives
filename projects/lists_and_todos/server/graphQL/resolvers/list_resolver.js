const List = require("../../models/list_todos.model");

const resolvers = {
	Query: {
		hello: async () => {
			return "hello world";
		},
		getAllLists: async () => {
			return await List.find()
				.then((lists) => {
					console.log(
						"all the list",
						lists,
						"\n____________________"
					);
					return lists;
				})
				.catch((err) => {
					console.log(
						"there was an error fetching all the lists",
						err,
						"\n____________________"
					);
					throw err;
				}); //gets all the list(items) in the data base
		},
		getOneList: async (_, { id }) => {
			return await List.findById(id)
				.then((list) => {
					console.log("all the list", list, "\n____________________");
					return list;
				})
				.catch((err) => {
					console.log(
						"there was an error fetching all the lists",
						err,
						"\n____________________"
					);
					throw err;
				}); //gets all the list(items) in the data base
		},
	},
	Mutation: {
		createOneList: async (_, args) => {
			const { title, description, isDone } = args;
			const createdAt = new Date().toISOString();
			const updatedAt = new Date().toISOString();
			//Date;
			return await List.create({
				title,
				description,
				isDone,
				createdAt,
				updatedAt,
			})
				.then((newList) => {
					console.log(
						"new list created",
						newList,
						"\n____________________"
					);
					return newList;
				})
				.catch((err) => {
					console.log(
						"there was an error creating a new list",
						err,
						"\n____________________"
					);
					throw err;
				});
		},

		updateOneList: async (parent, args, context, info) => {
			const { id, title, description, isDone } = args;
			const update = { updatedAt: new Date().toISOString() };
			// title,description

			if (title !== undefined) {
				update.title = title;
			}
			if (description !== undefined) {
				update.description = description;
			}
			if (isDone !== undefined) {
				update.isDone = isDone;
			}

			return await List.findByIdAndUpdate(id, update, {
				new: true,
			})
				.then((updatedList) => {
					console.log(
						"list updated",
						updatedList,
						"\n____________________"
					);
					return updatedList;
				})
				.catch((err) => {
					console.log(
						"there was an error updating a list",
						err,
						"\n____________________"
					);
					throw err;
				});
		},

		deleteOneList: async (_, { id }) => {
			return await List.findByIdAndDelete(id)
				.then((deletedList) => {
					console.log(
						" a list was deleted",
						deletedList,
						"\n____________________"
					);
					return deletedList;
				})
				.catch((err) => {
					console.log(
						"there was an error deleting a list a list",
						err,
						"\n____________________"
					);
					throw err;
				});
		},
	},
};

module.exports = { resolvers };
