import * as yup from "yup";

export const Contact_Schema = yup.object().shape({
	name: yup.string().min(2).required(),
	email: yup.string().email().required(), //"Please enter a valid email"
	message: yup.string().min(5).max(2000).required(),
});
