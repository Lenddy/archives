import { gql } from "@apollo/client";

export const get_all_list = gql`
	query {
		getAllLists {
			id
			title
			description
			isDone
			createdAt
			updatedAt
		}
	}
`;
export const get_one_list = gql`
	query getOneList($id: ID!) {
		getOneList(id: $id) {
			id
			title
			description
			isDone
			createdAt
			updatedAt
		}
	}
`;
