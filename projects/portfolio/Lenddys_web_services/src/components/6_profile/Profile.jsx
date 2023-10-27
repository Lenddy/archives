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
			const scrollThreshold = 350; // Adjust the threshold as needed

			if (!isTitleVisible && scrollY >= scrollThreshold) {
				// Trigger your GSAP animation here
				gsap.to(title, { opacity: 1, y: 0, duration: 1 });

				setIsTitleVisible(true); // Update the state to prevent repeated animations
			}
		};
		const onScroll2 = () => {
			// Calculate the scroll position to determine when to make the element visible
			const scrollY = window.scrollY;
			const scrollThreshold = 400; // Adjust the threshold as needed

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

	const handleCardInteract = () => {
		setIsFlipped(!isFlipped);
	};

	// !make use of this video https://www.youtube.com/watch?v=FeJEEE3zc4U

	//todo make the aniamtion come in like a page turning

	// todo and when the user click on send message   trn the component like the card and have the rock animation  make it say message aquarerd sending the rocket

	//todo Make the a tags  #ff00ff
	// todo make the p tas have different translateZ()
	return (
		<div className="profile ">
			<div className="profile_top">
				<h1>Hello There 👋🏼</h1>
			</div>
			<div className="profileContainer">
				<div className="content_container">
					<div className="profile_left">
						{/* <img src={Lenddy} alt=" profile picture" /> */}
						<div
							className="c_comp"
							onClick={handleCardInteract}
							onTouchStart={handleCardInteract}
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
										<h4 className="card__title">
											click me
										</h4>
									</div>

									<div className="card__back">
										<h1 className="card__back_title">
											i am Lenddy Morales
										</h1>
										{/* style={showMore? null: fullParagraphStyles} */}

										<div className="card__body">
											<p>
												I'm a 19-year-old Dominican boy
												who can barly dance bachata I
												reside in the United States and
												some day might move to Puerto
												rico. I embarked on my journey
												into higher education at the age
												of 17 with a major in computer
												engineering. However, I soon
												realized that the traditional
												college teaching approach didn't
												align with my learning style.
											</p>{" "}
											<p>
												{" "}
												I made the bold decision to drop
												out and seek alternative paths
												to gain knowledge. Just a month
												later, I joined a coding boot
												camp called{""}
												<a href="https://www.codingdojo.com/">
													Coding Dojo
												</a>
												{""}. This intensive four-month
												program pushed me to my limits
												as I strived to keep up with the
												fast-paced learning environment.
												Many nights were spent burning
												the midnight oil, often going to
												bed at 4 am and waking up at 11
												am. Through laughter, tears, and
												forming strong friendships, I
												persevered, and it has paid off.
												I am now proud to call myself a
												full-stack developer.
											</p>
											<p>
												<a href="https://www.codingdojo.com/">
													Coding Dojo
												</a>{" "}
												taught me invaluable skills,
												including thriving in
												high-pressure situations, both
												individually and as part of a
												cohort. I learned the importance
												of seeking help when needed and
												offering assistance to others.
												It ingrained in me the habit of
												learning from my mistakes and
												continually expanding my
												knowledge.
											</p>
											<p>
												My ultimate goal is to return to
												college one day and resume my
												computer engineering studies,
												with a possible focus on also
												becoming a game developer or
												even exploring carpentry.
											</p>
											<p>
												In my free time, I indulge in my
												passion for video Games,
												Basketball, Baseball, Anime,
												Manga , Rock ,Pop and Salsa . If
												any of this resonates with you
												or piques your interest, feel
												free to send me a message. Don't
												hesitate
											</p>
										</div>

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
					<div className="profile_right">
						<h1>Contact Me</h1>

						<textarea
							name=""
							id=""
							cols="65"
							rows="20"
							placeholder="Insert Your Message Here"
						></textarea>
						<button className="btn"> Send Message</button>
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
