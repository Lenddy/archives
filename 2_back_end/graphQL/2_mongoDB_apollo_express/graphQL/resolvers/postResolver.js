const Post = require("../../models/post.model"); //importing the mongoose schema

const resolvers = {
	Query: {
		hello: () => {
			return "hello world";
		},

		getAllPosts: async () => {
			const posts = await Post.find(); //getting all the post from the DB
			return posts; // returning all the post in the DB
		},
		getPost: async (_, { id }, context, info) => {
			return await Post.findById(id);
		},
	},
	Mutation: {
		createPost: async (parent, args, context, info) => {
			const { title, description } = args.post;
			const post = new Post({
				title,
				description,
				createdAt: new Date().toISOString(), // Set updatedAt timestamp
				updatedAt: new Date().toISOString(),
			});
			await post.save();
			return post;
		},

		deletePost: async (parent, { id }) => {
			await Post.findByIdAndDelete(id);
			return true;
		},

		updatePost: async (parent, args, context, info) => {
			const { id } = args;
			const { title, description } = args.post;
			const update = { updatedAt: new Date().toISOString() };
			if (title !== undefined) {
				update.title = title;
			}
			if (description !== undefined) {
				update.description = description;
			}
			const post = await Post.findByIdAndUpdate(id, update, {
				new: true,
			});
			return post;
		},
	},
};

module.exports = { resolvers };
