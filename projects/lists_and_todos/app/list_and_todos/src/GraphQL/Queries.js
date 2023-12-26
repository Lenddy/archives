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
