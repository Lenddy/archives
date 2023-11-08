import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {
	const form = useRef();
	const buttonRef = useRef(null);
	const [isFlipped, setIsFlipped] = useState(false);
	const [messageSent, SetMessageSent] = useState({});
	const [formInfo, setFormInfo] = useState({});
	const [validation, setValidation] = useState(false);
	const [secondValidation, setSecondValidation] = useState(false);
	const [nameValidation, setNameValidation] = useState(false);
	const [emailValidation, setEmailValidation] = useState(false);
	const [messageValidation, setMessageValidation] = useState(false);

	// const allInfo = (e) => {
	// 	setFormInfo({
	// 		...formInfo,
	// 		[e.target.name]: e.target.value,
	// 		// [e.target.name]:e.target.value,
	// 		// [e.target.name]:e.target.value,
	// 	});
	// };
	// const [name, setName] = useState()

	// useEffect(() => {
	// 	const keyDownHandler = (e) => {
	// 		if (e.key === "Enter") {
	// 			buttonRef.current.click();
	// 		}
	// 	};
	// 	window.addEventListener("keyDown", keyDownHandler);
	// 	return () => {
	// 		window.removeEventListener("keyDown", keyDownHandler);
	// 	};
	// }, []);

	const sendEmail = (e) => {
		e.preventDefault();
		// console.log("1 if");
		// if (formInfo?.name?.length < 2 || formInfo?.name == undefined) {
		// 	console.log("check 1");
		// 	setNameValidation(true);
		// }
		// console.log("if 2");
		// if (formInfo?.email?.length < 5 || formInfo?.email === undefined) {
		// 	console.log("check 2");
		// 	setEmailValidation(true);
		// }
		// console.log("if 3 ");
		// if (formInfo?.message?.length < 5 || formInfo?.message === undefined) {
		// 	console.log("check 1");
		// 	setMessageValidation(true);
		// }
		// if (
		// 	nameValidation === true ||
		// 	emailValidation === true ||9
		// 	messageValidation === true
		// ) {
		// 	return console.log("at lest one og them is true");
		// }
		setIsFlipped(!isFlipped);
		// ["field can not be empty","field must be at lest"
		emailjs
			.sendForm(
				"service_yxdnctm",
				"template_alg7sf8",
				form.current,
				"UcLqMhHUZT4j20Td6"
			)
			.then(
				(result) => {
					// ! log text and status to see if that  helps
					// ! and make it into an object put the names of status and text in the object and slso do the same for the error handle
					SetMessageSent({
						status: result.status,
						text: result.text,
					});
					console.log(messageSent);
					// console.log(result);
					// console.log("message sent", result.text);
				},
				(error) => {
					SetMessageSent({
						status: error.status,
						text: error.text,
					});
					console.log("error sending the message", error.text);
				}
			);
	};

	// {formInfo?.name?.length > 0 &&
	// 	formInfo?.name?.length < 2 ? (
	// 		<p
	// 			style={{
	// 				color: "#ff00ff",
	// 				margin: "0px",
	// 			}}
	// 		>
	// 			name must be at lest 2 characters
	// 			long
	// 		</p>
	// 	) : nameValidation ? (
	// 		<p
	// 			style={{
	// 				color: "#ff00ff",
	// 				margin: "0px",
	// 			}}
	// 		>
	// 			name must be at lest 2 characters
	// 			long{" "}
	// 		</p>
	// 	) : null}

	// {  formInfo?.email?.length > 0 &&
	// 	formInfo?.email?.length < 2 ? (
	// 		<p
	// 			style={{
	// 				color: "#ff00ff",
	// 				margin: "0px",
	// 			}}
	// 		>
	// 			name must be at lest 2 characters
	// 			long{" "}
	// 		</p>
	// 	) : emailValidation ? (
	// 		<p
	// 			style={{
	// 				color: "#ff00ff",
	// 				margin: "0px",
	// 			}}
	// 		>
	// 			email must be at lest 5 characters
	// 			long{" "}
	// 		</p>
	// 	) : null}

	// {formInfo?.message?.length > 0 &&
	// 	formInfo?.message?.length < 5 ? (
	// 		<p style={{ color: "#ff00ff", margin: "0px" }}>
	// 			message must be at lest 5 characters long{" "}
	// 		</p>
	// 	) : messageValidation ? (
	// 		<p style={{ color: "#ff00ff", margin: "0px" }}>
	// 			message must not be empty{" "}
	// 		</p>
	// 	) : null}
	const { t } = useTranslation();

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
						<h2 className="front_title_c2">{t("contact_title")}</h2>
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
										placeholder={t("input_1")}
										className="profile_input"
										name="name"
										// onChange={(e) => {
										// 	allInfo(e);
										// 	setNameValidation(false);
										// }}
									/>
								</div>
								<div className="span_right">
									<input
										type="email"
										name="email"
										id=""
										placeholder={t("input_2")}
										className="profile_input"
										// onChange={(e) => {
										// 	allInfo(e);
										// 	setEmailValidation(false);
										// }}
									/>
								</div>
							</div>

							<textarea
								name="message"
								id=""
								cols="75"
								rows="20"
								placeholder={t("text_area")}
								// onChange={(e) => {
								// 	allInfo(e);
								// 	setMessageValidation(false);
								// }}
							></textarea>

							<div className="submit_Btn">
								<button
									ref={buttonRef}
									value="Send"
									className="form_btn"
									onClick={(e) => {
										sendEmail(e);
									}}
								>
									{" "}
									{t("contact_send")}
									{/* Send Message */}
								</button>
							</div>
						</form>

						{/* <div>
            <button className="form_btn">
                test lunch
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
						<h1
							className={` back_item_size cloud4 ${
								isFlipped ? "cloud_animation4" : ""
							}`}
						>
							☁️
						</h1>
						<h1
							className={` back_item_size cloud5 ${
								isFlipped ? "cloud_animation5" : ""
							}`}
						>
							☁️
						</h1>
						<h1
							className={` back_item_size cloud6 ${
								isFlipped ? "cloud_animation6" : ""
							}`}
						>
							☁️
						</h1>
						<h1
							className={` back_item_size cloud7 ${
								isFlipped ? "cloud_animation7" : ""
							}`}
						>
							☁️
						</h1>

						<div
							className={`back_item_size rocket ${
								isFlipped ? "lunch" : ""
							}`}
						>
							{/* 
							if flip is true    messagesent.status is === 200 and  if messagesent.text == ok   
							*/}
							🚀
						</div>

						<div
							className={`back_btn_section ${
								isFlipped ? "fade_in" : ""
							} `}
						>
							<h1>{t("contact_message_sent")}</h1>
							<button
								className="back_btn"
								onClick={() => {
									setIsFlipped(false);
									SetMessageSent({});
								}}
							>
								{t("contact_send_back")}
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
