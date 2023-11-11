import Logo from "../../assets/LM.png";
import { useRef, useEffect, useState } from "react";
// import pencilTip from "../../assets/pencilTip.svg";
import { useTranslation } from "react-i18next";

const Welcome = () => {
	//? use th blink animation from anima.net to show your logo and the blink to the new logo
	// ? give the component of the logo a horizontal scroll bar  on scroll you can change the logo  and a line below that show in with logo you are one
	// const welcomeRef = useRef();

	// ? make use of framer motion to make the logo pop out when hover
	// ? and try to make a pop out info content show on hover and make it have a profile picture some info of the person that create it and on click redirect to their socials

	// ? also put 1 btns that takes you to the person social

	//! make use of this video https://www.youtube.com/watch?v=q9tpBtvTTz8&list=PLFsfg2xP7cbL-kmqydheUCbhkHeNq-zZ_&index=11

	//* make use of the scroll function to determine how far has the user scroll to then show the other components

	const welcomeRef = useRef(null);
	const [intersecting_welcome, setIntersecting_welcome] = useState();
	const [noAnimation, setNoAnimation] = useState(false);
	// const local_storage = JSON.parse(
	// 	window.localStorage.getItem("Portfolio_page_animation_toggle")
	// );

	// useEffect(() => {
	// 	const observer_welcome = new IntersectionObserver((entries) => {
	// 		const entry = entries[0];
	// 		// console.log(entry);
	// 		setIntersecting_welcome(entry.isIntersecting);
	// 	});
	// 	observer_welcome.observe(welcomeRef.current);
	// 	if (intersecting_welcome === false) {
	// 		setNoAnimation(true);
	// 	}

	// 	// console.log()
	// }, [intersecting_welcome]);

	// ! i brock my mind trying to do this  with ternary operator so i ask chat gpt to help me with it i know that there is a wayyyyyy better why of doing it but this is what i got
	const scrollToSection = (top_section) => {
		window.scrollTo({
			top: top_section,
			behavior: "smooth",
		});
	};

	const { t } = useTranslation();

	return (
		<>
			<div className="welcome " ref={welcomeRef}>
				<div className="welcomeLeft ">
					<h1 className="welcomeMessage welcomeMessage_animation">
						{t("welcome_title")}
						{/* The Place To Turn Your Ideas Into Reality Welcome To
						Lenddy's Web Services */}
					</h1>

					<div className="subheader">
						{/* sub_className */}
						<p className=" subheader_message subheader_animation">
							{t("welcome_sub_title")}
							{/* Yo Yo the name is Lenddy I like making web sites and
							apps that will sut your needs using the best
							technologies , so what is your next big idea and
							when do you want to make it happen ? */}
						</p>
					</div>

					<div className="welcomeBtn">
						<a
							className="hidden_a_tag btn_welcome"
							href="https://docs.google.com/document/d/12vkzj7Zjqu1vzWEcVHD0i0UKJ1PYsvx41-QtacLm0os/edit?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							{t("welcome_btns.0")}
						</a>

						{/* View Resume */}

						<a
							className="hidden_a_tag btn_welcome"
							href="https://github.com/Lenddy"
							target="_blank"
							rel="noreferrer"
						>
							{/* className="btn_welcome" */}
							{t("welcome_btns.1")}
						</a>

						{/* View Github */}
						<button
							className="btn_welcome"
							onClick={() => scrollToSection(2900)}
						>
							{t("welcome_btns.2")}
							{/* Projects */}
						</button>
						<button
							className="btn_welcome"
							onClick={() => scrollToSection(3900)}
						>
							{t("welcome_btns.3")}
							{/* Contact Me */}
						</button>
					</div>
				</div>

				<div className="welcomeRight">
					<img src={Logo} alt="logo" className="logo" />
					<p className="subtext">
						{t("welcome_a_tag.0")} {/* Like the logo */}
						<span>
							<a
								href="https://instagram.com/merv_agency?igshid=OGQ5ZDc2ODk2ZA=="
								target="_blank"
								rel="noreferrer"
							>
								{t("welcome_a_tag.1")}
								{/* click here */}
							</a>
						</span>{" "}
						{t("welcome_a_tag.2")}
						{/* to see who made it */}
					</p>
				</div>
			</div>
		</>
	);
};

export default Welcome;
