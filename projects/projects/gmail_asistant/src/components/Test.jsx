import React, { useState } from "react";
import axios from "axios";

const Test = () => {
	// const userId = "leme2003@gmail.com";
	// const [myEmail, setMyEmail] = useState();

	// axios
	// 	.get(
	// 		`https://gmail.googleapis.com/gmail/v1/users/leme2003@gmail.com/profile`
	// 	)
	// 	.then((res) => {
	// 		console.log("this is the response", res.data);
	// 	})
	// 	.catch((err) => {
	// 		console.log("err", err);
	// 	});

	return (
		<div>
			<a href="https://www.glassdoor.com/index.htm">
				powered by{" "}
				<img
					src="https://www.glassdoor.com/static/img/api/glassdoor_logo_80.png"
					title="Job Search"
				/>
			</a>
		</div>
	);
};

export default Test;
