import { gql } from "@apollo/client";

// import(gql);

export const create_One_List = gql`
	mutation createOneList(
		$title: String!
		$description: String!
		$isDone: Boolean!
	) {
		createOneList(
			title: $title
			description: $description
			isDone: $isDone
		) {
			id
			title
			description
			isDone
		}
	}
`;
