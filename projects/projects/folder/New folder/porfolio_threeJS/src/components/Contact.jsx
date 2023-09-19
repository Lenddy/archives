import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styled } from "styled-components";
import Map from "./Map";

//???
const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
`;
const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	gap: 50px;
`;

const Left = styled.div`
	/* flex: 1;
	display: flex; */
	align-items: center;
	justify-content: flex-end;
	@media only screen and (max-width: 768px) {
		justify-content: center;
	}
`;

const Center = styled.div`
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	text-align: center;
	@media only screen and (max-width: 768px) {
		justify-content: center;
	}
`;

const Title = styled.h1`
	font-weight: 200;
`;
const Form = styled.form`
	width: 500px;
	display: flex;
	flex-direction: column;
	gap: 25px;
	@media only screen and (max-width: 768px) {
		width: 300px;
	}
`;
const Input = styled.input`
	padding: 20px;
	background-color: #e8e6e6;
	border: none;
	border-radius: 10px;
`;
const TextArea = styled.textarea`
	padding: 20px;
	border: none;
	border-radius: 10px;
	background-color: #e8e6e6;
`;
const Button = styled.button`
	background-color: #da4ea2;
	color: white;
	border: none;
	font-weight: bold;
	cursor: pointer;
	border-radius: 10px;
	padding: 20px;
`;

const Right = styled.div`
	/* flex: 1; */
	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const Contact = () => {
	const ref = useRef();

	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_yxdnctm",
				"template_alg7sf8",
				ref.current,
				"UcLqMhHUZT4j20Td6"
			)
			.then(
				(result) => {
					console.log(result.text);
					setSuccess(true);
				},
				(error) => {
					console.log(error.text);
					setSuccess(false);
				}
			);
	};
	return (
		<Section>
			<Container>
				<Center>
					<Form onSubmit={handleSubmit} ref={ref}>
						<Title> Contact me </Title>
						<Input placeholder="Name" name="name" />
						<Input placeholder="Email" name="email" />
						<TextArea
							placeholder="write your message"
							rows={15}
							name="message"
						/>
						<Button type="submit">Sent</Button>
						{success && (
							<Title>
								your message was sent, I'll contact you as soon
								as posible{" "}
							</Title>
						)}
						{success == false && (
							<Title>
								your message was not sent please try again later
							</Title>
						)}
					</Form>
				</Center>
				{/* <Right>
					<Map></Map>
				</Right> */}
			</Container>
		</Section>
	);
};

export default Contact;
