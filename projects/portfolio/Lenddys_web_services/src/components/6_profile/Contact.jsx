import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { Contact_Schema } from "./validations/Contact_Validation";
import Cookies from "js-cookie";

const Contact = () => {
	const form = useRef();
	const buttonRef = useRef(null);
	const [isFlipped, setIsFlipped] = useState(false);
	const [messageSent, setMessageSent] = useState(null);
	// const [formInfo, setFormInfo] = useState({});
	// const [success, setSuccess] = useState(null);
	const [validation, setValidation] = useState(false);
	const [validation_2, setValidation_2] = useState(false);
	const [validation_3, setValidation_3] = useState(false);
	// const [secondValidation, setSecondValidation] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const cookieValue = Cookies.get("i18next");

	const sendEmail = async (e) => {
		e.preventDefault();
		let formData = {
			name: e.target[0].value,
			email: e.target[1].value,
			message: e.target[2].value,
		};

		const isValid = await Contact_Schema.isValid(formData);
		console.log("waiting");

		if (isValid === false) {
			setValidation(true);
			setValidation_2(true);
			setValidation_3(true);
			console.log(formData);
			console.log(isValid);
			console.log("is valid is false and the if hit ");
		} else {
			console.log(" else hit");

			setIsFlipped(!isFlipped);
			const formSend = await emailjs
				.sendForm(
					"service_yxdnctm",
					"template_alg7sf8",
					form.current,
					"UcLqMhHUZT4j20Td6"
				)
				.then(
					(result) => {
						setMessageSent(true);
						console.log({
							status: result.status,
							text: result.text,
						});
						// console.log(result);
						// console.log("message sent", result.text);
					},
					(error) => {
						setMessageSent(false);
						console.log("error sending the message", {
							status: error.status,
							text: error.text,
						});
					}
				);
		}
	};

	const { t } = useTranslation();
	const handleSubmit = (e) => {
		e.preventDefault;
		setIsFlipped(true);
		setTimeout(() => setMessageSent(false), 3000);
	};

	return (
		<div
			className="c_comp2"
			// onTouchStart={handleCardInteract}
		>
			<div className="card2">
				<div
					className={`card__content2 ${
						isFlipped ? "flip_card2" : ""
					}`}
				>
					<div className="card__front2">
						<h2 className="front_title_c2">
							{/* {t("contact_title")} */}
							{cookieValue === "es" ? "Contáctame" : "Contact Me"}
						</h2>
						<div className="contact_info">
							<h3 className="front_title2_c2">(347)964-3348</h3>
							<h3 className="front_title2_c2">
								lenddyswebservices@gmail.com
							</h3>
						</div>
						<form
							ref={form}
							onSubmit={sendEmail}
							// action="#"
							// method="post"
							className="information_form"
						>
							<div className="span_div">
								<div className="span_left">
									<input
										type="text"
										id=""
										placeholder={
											// t("input_1")
											cookieValue === "es"
												? "Tu Nombre"
												: "Your Name"
										}
										className="profile_input"
										name="name"
										onChange={(e) => {
											setName(e.target.value);
											setValidation(false);
										}}
									/>
									{name.length > 0 && name.length < 2 ? (
										<p className="validations">
											{/* {t("name_validation")} */}
											{cookieValue === "es"
												? "Nombre debe de tener por lo menor 2 caracteres"
												: "Name must be at lest 2 characters"}
										</p>
									) : validation === true ? (
										<p className="validations">
											{/* {t("required")} */}
											{cookieValue === "es"
												? "Requerido"
												: "Required"}
										</p>
									) : null}
								</div>
								<div className="span_right">
									<input
										type="email"
										name="email"
										id=""
										placeholder={
											// t("input_2")
											cookieValue === "es"
												? "Tu Email"
												: "Your Email"
										}
										className="profile_input"
										onChange={(e) => {
											setEmail(e.target.value);
											setValidation_2(false);
										}}
									/>
									{
										// email.length > 0 && email.length < 2?
										// <p>name must be at lest 2 characters</p>:
										// null
										validation_2 === true ? (
											<p className="validations">
												{/* {t("required")} */}
												{cookieValue === "es"
													? "Requerido"
													: "Required"}
											</p>
										) : null
									}
								</div>
							</div>

							<textarea
								name="message"
								id=""
								cols="75"
								rows="20"
								placeholder={
									// t("text_area")
									cookieValue === "es"
										? "Inserta Tu Mensaje Aqui"
										: "Insert Your Message Here"
								}
								onChange={(e) => {
									setMessage(e.target.value);
									setValidation_3(false);
								}}
							></textarea>
							{message.length > 0 && message.length < 5 ? (
								<p className="validations">
									{/* {t("message_validation")} */}
									{cookieValue === "es"
										? "Mensaje debe de tener por lo menos 5 caracteres"
										: "Message must be at lest 5 characters"}
								</p>
							) : message.length > 2000 ? (
								<p className="validations">
									{/* {t("message_validation_2")} */}
									{cookieValue === "es"
										? "Mensaje no puede ser mas de 2000 caracteres"
										: "Message cant be longer than 2000 characters"}
								</p>
							) : validation_3 === true ? (
								<p className="validations">
									{/* {t("required")} */}
									{cookieValue === "es"
										? "Requerido"
										: "Required"}
								</p>
							) : null}

							<div className="submit_Btn">
								<button
									ref={buttonRef}
									value="Send"
									className="form_btn"
									// onClick={(e) => {
									// 	sendEmail(e);
									// }}
								>
									{/* {t("contact_send")} */}
									{cookieValue === "es"
										? "Enviar Mensaje"
										: "Send Message"}
								</button>
							</div>
						</form>

						{/* <div>
							<button
								className="form_btn"
								onClick={(e) => handleSubmit(e)}
							>
								{t("contact_test_send")}
							</button>
						</div> */}
					</div>

					<div className="card__back2 ">
						{/* put  the rock and put some clouds  at the top that move  */}
						<h1
							className={` back_item_size cloud1 ${
								isFlipped ? " " : ""
							}`}
						>
							☁️
						</h1>
						<h1
							className={` back_item_size cloud2 ${
								isFlipped ? "cloud_animation2" : ""
							}`}
						>
							☁️
						</h1>
						<h1
							className={` back_item_size cloud3 ${
								isFlipped ? "cloud_animation3" : ""
							}`}
						>
							☁️
						</h1>
						<div
							className={` back_item_size cloud4 ${
								isFlipped ? "cloud_animation4" : ""
							}`}
						>
							{/* dfdfdfdf     here */}
							<div
								className={`${
									messageSent ? "cloud_spread" : ""
								}`}
							>
								☁️
							</div>
						</div>
						<div
							className={` back_item_size cloud5 ${
								isFlipped ? "cloud_animation5" : ""
							}`}
						>
							{/* dfdfdfdf     here */}
							<div
								className={`${
									messageSent ? "cloud_spread" : ""
								}`}
							>
								☁️
							</div>
						</div>

						<div
							className={` back_item_size cloud6 ${
								isFlipped ? "cloud_animation6" : ""
							}`}
						>
							{/* dfdfdfdf     here */}
							<div
								className={`${
									messageSent ? "cloud_spread" : ""
								}`}
							>
								☁️
							</div>
						</div>
						<div
							className={` back_item_size cloud7 ${
								isFlipped ? "cloud_animation7" : ""
							}`}
						>
							{/* dfdfdfdf     here */}
							<div
								className={`${
									messageSent
										? "cloud_spread_2"
										: messageSent === false
										? "cloud_spread_2"
										: ""
								}`}
							>
								☁️
							</div>
						</div>

						<div
							className={`back_item_size rocket ${
								messageSent ? "lunch" : ""
							}`}
						>
							{/* 
							if flip is true    messagesent.status is === 200 and  if messagesent.text == ok   
							*/}
							<div
								className={`${
									isFlipped ? "animate bigger" : ""
								} `}
							>
								🚀
							</div>
						</div>

						<div
							className={`back_btn_section ${
								isFlipped === true ? "fade_in" : ""
							} `}
						>
							<h1>
								{messageSent
									? cookieValue === "es"
										? "Mensaje Enviado!!!"
										: "Message Sent!!!"
									: cookieValue === "es"
									? "hubo un error porfavor intente denuedo"
									: "there was an error please try again!!!"}
								{/* send another message */}
							</h1>
							<button
								className="back_btn"
								onClick={() => {
									setIsFlipped(false);
									setMessageSent(null);
								}}
							>
								{messageSent
									? cookieValue === "es"
										? "Enviar Otro Mensaje"
										: "Send Another Message"
									: cookieValue === "es"
									? "Intentar denuevo"
									: "Try again"}
								{/* send another message */}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
// ${messageSent.status === 200 && messageSent.text === "OK" ? "lunch" : ""}
