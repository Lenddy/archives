import React, { useState, useEffect, useRef } from "react";
import Lenddy from "../../assets/Lenddy.jpg";
import gsap from "gsap";
import ProfilePicture from "../ProfilePicture";
const Profile = () => {
	const titleRef = useRef(null);
	const contentRef = useRef(null);
	const [isTitleVisible, setIsTitleVisible] = useState(false);
	const [isContentVisible, setIsContentVisible] = useState(false);
	useEffect(() => {
		const title = titleRef.current;
		const content = contentRef.current;

		const onScroll = () => {
			// Calculate the scroll position to determine when to make the element visible
			const scrollY = window.scrollY;
			const scrollThreshold = 3500; // Adjust the threshold as needed

			if (!isTitleVisible && scrollY >= scrollThreshold) {
				// Trigger your GSAP animation here
				gsap.to(title, { opacity: 1, y: 0, duration: 1 });

				setIsTitleVisible(true); // Update the state to prevent repeated animations
			}
		};
		const onScroll2 = () => {
			// Calculate the scroll position to determine when to make the element visible
			const scrollY = window.scrollY;
			const scrollThreshold = 3500; // Adjust the threshold as needed

			if (!isContentVisible && scrollY >= scrollThreshold) {
				// Trigger your GSAP animation here
				gsap.to(content, { opacity: 1, y: 0, duration: 1 });

				setIsContentVisible(true); // Update the state to prevent repeated animations
			}
		};

		// Add a scroll event listener
		window.addEventListener("scroll", onScroll);
		window.addEventListener("scroll", onScroll2);

		// Call the onScroll function when the component mounts to check initial visibility
		onScroll();
		onScroll2();

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("scroll", onScroll2);
		};
	}, [isTitleVisible, isContentVisible]);

	// const [showMore, setShowMore] = useState(false);

	// const fullParagraphStyles = {
	// 	WebkitLineClamp: 12,
	// 	WebkitBoxOrient: "vertical",
	// 	overflow: "hidden",
	// 	display: "-webkit-box",
	// };

	const [isFlipped, setIsFlipped] = useState(false);
	const [isFlipped2, setIsFlipped2] = useState(false);

	const handleCardInteract = () => {
		setIsFlipped(!isFlipped);
	};

	const handleCardInteract2 = () => {
		setIsFlipped2(!isFlipped2);
	};

	// const [lift, setLift] = useState(false);

	// const lift_oof = () => {
	// 	setLift(true);
	// };

	// const cancel_lift_oof = () => {
	// 	setLift(false);
	// };

	// !make use of this video https://www.youtube.com/watch?v=FeJEEE3zc4U

	//todo make the aniamtion come in like a page turning

	// todo and when the user click on send message   trn the component like the card and have the rock animation  make it say message aquarerd sending the rocket

	//todo Make the a tags  #ff00ff
	// todo make the p tas have different translateZ()

	// make the title have fade in (0 opacity to 1)  make the title be flip meaning that i am seeing the back side of the title them flip it to make it  in the right way

	//todo initialy they will be in the middle but wen they are click the card
	// *todo  make them appear out side of the card(not fully in the card (half way))  and when the card is click us the transform and bring them to the middle  */

	const handleSubmit = (e) => {
		e.preventDefault;
	};
	return (
		<div
			// flip_position ${isTitleVisible ? "turn_page" : ""}
			className={`profile `}
		>
			<div
				className={`profile_top flip_position ${
					isTitleVisible ? "turn_title" : ""
				}`}
				ref={titleRef}
			>
				<h1>About Me</h1>
			</div>
			{/* ${isContentVisible ? "show_content" : ""} */}
			<div className={`profileContainer `}>
				<div
					className={`profile_content_container ${
						isContentVisible ? "turn_content" : ""
					}`}
				>
					<div className="profile_left">
						{/* <img src={Lenddy} alt=" profile picture" /> */}
						<div
							className="c_comp"
							onClick={handleCardInteract}
							// onTouchStart={handleCardInteract}
						>
							<div className="card">
								<div
									className={`card__content ${
										isFlipped ? "flip_card" : ""
									}`}
								>
									<div className="card__front">
										<img
											className="profile_pic"
											src={Lenddy}
											alt=" profile picture"
										/>
										{/* <p className="card__subtitle">
											Time for some fun
										</p> */}
										<h2
											className={`card__title1 ${
												isFlipped
													? "change_opacity"
													: ""
											}`}
										>
											Hello
										</h2>
										<h4 className="card__title2">There</h4>
										<h4
											className={`card__title3 ${
												isFlipped
													? "change_opacity"
													: ""
											}`}
										>
											👋🏼
										</h4>
										<h4 className="card__title4">
											click me
										</h4>
									</div>

									<div className="card__back">
										{/* initialy they will be in the middle but wen they are click the acrd  */}
										{/*todo  make them appear out side of the card(not fully in the card (half way))  and when the card is click us the transform and bring them to the middle  */}
										<h1 className="card__back_title">
											i am Lenddy Morales
										</h1>
										{/* style={showMore? null: fullParagraphStyles} */}
										{/* <div className="card__body"> */}
										<p className="card__body_part1">
											I'm a 19-year-old Dominican boy who
											can barly dance bachata I reside in
											the United States and some day might
											move to Puerto rico. I embarked on
											my journey into higher education at
											the age of 17 with a major in
											computer engineering. However, I
											soon realized that the traditional
											college teaching approach didn't
											align with my learning style.
										</p>{" "}
										<p className="card__body_part2">
											{" "}
											I made the bold decision to drop out
											and seek alternative paths to gain
											knowledge. Just a month later, I
											joined a coding bootcamp called{" "}
											<a href="https://www.codingdojo.com/">
												Coding Dojo
											</a>
											{""}. This intensive four-month
											programming course pushed me to my
											limits as I strived to keep up with
											the fast-paced learning environment.
											Many nights were spent burning the
											midnight oil, often going to bed at
											4 am and waking up at 11 am. Through
											laughter, tears, and forming strong
											friendships, I persevered, and it
											has paid off. I am now proud to call
											myself a full-stack developer.
										</p>
										<p className="card__body_part3">
											<a href="https://www.codingdojo.com/">
												Coding Dojo
											</a>{" "}
											taught me invaluable skills,
											including thriving in high-pressure
											situations, both individually and as
											part of a cohort. I learned the
											importance of seeking help when
											needed and offering assistance to
											others. It ingrained in me the habit
											of learning from my mistakes and
											continually expanding my knowledge.
										</p>
										<p className="card__body_part4">
											My ultimate goal is to return to
											college one day and resume my
											computer engineering studies, with a
											possible focus on also becoming a
											game developer or even exploring
											carpentry.
										</p>
										<p className="card__body_part5">
											In my free time, I indulge in my
											passion for video Games, Basketball,
											Baseball, Anime, Manga listening to
											Rock ,Pop and Salsa . If any of this
											resonates with you or piques your
											interest, feel free to send me a
											message. Don't hesitate
										</p>
										{/* </div> */}
										{/* <button
											className="profile_btn"
											onClick={() =>
												setShowMore(!showMore)
											}
										>
											{showMore
												? "Show Less"
												: "Show More"}
										</button> */}
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*make use of the resize attribute in css to be able to make the picture smaller or bigger*/}
					{/* finith the flip and fin a way to send messages to the email */}

					{/* and make the site all device friendly */}
					<div className="profile_right">
						<div
							className="c_comp2"

							// onTouchStart={handleCardInteract}
						>
							<div className="card2">
								<div
									className={`card__content2 ${
										isFlipped2 ? "flip_card2" : ""
									}`}
								>
									<div className="card__front2">
										<h1 className="front_title_c2">
											Contact Me
										</h1>
										<h2 className="front_title2_c2">
											Cel:(347)964-3348
										</h2>
										<form
											onSubmit={handleSubmit}
											// action="#"
											// method="post"
											className="information_form"
										>
											<input
												type="text"
												name=""
												id=""
												placeholder="Name"
												className="profile_input"
											/>
											<textarea
												name=""
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
												className="form_btn"
												onClick={() => {
													handleCardInteract2();
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
												isFlipped2 ? " " : ""
											}`}
										>
											☁️
										</h1>
										<h1
											className={` back_item_size cloud2 ${
												isFlipped2
													? "cloud_animation2"
													: ""
											}`}
										>
											☁️
										</h1>
										<h1
											className={` back_item_size cloud3 ${
												isFlipped2
													? "cloud_animation3"
													: ""
											}`}
										>
											☁️
										</h1>
										<h1
											className={` back_item_size cloud4 ${
												isFlipped2
													? "cloud_animation4"
													: ""
											}`}
										>
											☁️
										</h1>
										<h1
											className={` back_item_size cloud5 ${
												isFlipped2
													? "cloud_animation5"
													: ""
											}`}
										>
											☁️
										</h1>
										<h1
											className={` back_item_size cloud6 ${
												isFlipped2
													? "cloud_animation6"
													: ""
											}`}
										>
											☁️
										</h1>
										<h1
											className={` back_item_size cloud7 ${
												isFlipped2
													? "cloud_animation7"
													: ""
											}`}
										>
											☁️
										</h1>

										<div
											className={`back_item_size rocket ${
												isFlipped2 ? "lunch" : ""
											}`}
										>
											🚀
										</div>
										<button
											onClick={() => setIsFlipped2(false)}
										>
											send another message
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
// const Profile = React.forwardRef(Profile_container);

export default Profile;

{
	/*  */
}
