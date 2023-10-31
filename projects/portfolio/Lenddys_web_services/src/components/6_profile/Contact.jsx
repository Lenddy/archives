import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();
	const buttonRef = useRef(null);
	const [isFlipped, setIsFlipped] = useState(false);

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
		setIsFlipped(!isFlipped);

		emailjs
			.sendForm(
				"service_yxdnctm",
				"template_alg7sf8",
				form.current,
				"UcLqMhHUZT4j20Td6"
			)
			.then(
				(result) => {
					console.log(result);
					console.log("message sent", result.text);
				},
				(error) => {
					console.log("error sending the message", error.text);
				}
			);
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
					<h2 className="front_title_c2">Contact Me</h2>
					<div className="card__front2">
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
							<input
								type="text"
								id=""
								placeholder="Your Name"
								className="profile_input"
								name="name"
							/>
							<input
								type="text"
								name="email"
								id=""
								placeholder="Your Email"
								className="profile_input"
							/>
							<textarea
								name="message"
								id=""
								cols="75"
								rows="30"
								placeholder="Insert Your Message Here"
							></textarea>

							{/* <div className="submit_Btn">
                    <button
                        className="form_btn"
                        onClick={
                            handleCardInteract2
                        }
                    >
                        {" "}
                        Send Message
                    </button>
                </div> */}
						</form>
						<div className="submit_Btn">
							<button
								ref={buttonRef}
								value="Send"
								className="form_btn"
								onClick={(e) => {
									sendEmail(e);
									// lift_oof();
								}}
							>
								{" "}
								Send Message
							</button>
						</div>
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
							🚀
						</div>
						<button onClick={() => setIsFlipped(false)}>
							send another message
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
