import Logo from "../../assets/LM.png";
import React, { useRef, useEffect, useState } from "react";
// import pencilTip from "../../assets/pencilTip.svg";

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
	const local_storage = JSON.parse(
		window.localStorage.getItem("Portfolio_page_animation_toggle")
	);

	useEffect(() => {
		const observer_welcome = new IntersectionObserver((entries) => {
			const entry = entries[0];
			console.log(entry);
			setIntersecting_welcome(entry.isIntersecting);
		});

		observer_welcome.observe(welcomeRef.current);

		console.log("storage in welcome", local_storage);
	}, [local_storage]);

	// local_storage === true || local_storage === "true"
	// 	? intersecting_welcome
	// 		? "subheader_animation"
	// 		: ""
	// 	: local_storage === false ||
	// 	  local_storage === "false"
	// 	? "subheader_animation"
	// 	: local_storage === null ||
	// 	  local_storage === "null"
	// 	? ""
	// 	: local_storage !== true ||
	// 	  local_storage !== "true" ||
	// 	  local_storage !== false ||
	// 	  local_storage !== "false" ||
	// 	  local_storage !== null ||
	// 	  local_storage !== "null"
	// 	? "subheader_animation"
	// 	: ""
	// ! i brock my mind trying to do this  with ternary operator so i ask chat gpt to help me with it i know that there is a wayyyyyy better why of doing it but this is what i got
	const isLocalStorageTrue =
		local_storage === true || local_storage === "true";
	const isLocalStorageFalse =
		local_storage === false || local_storage === "false";
	const isLocalStorageNull =
		local_storage === null || local_storage === "null";
	const isIntersectingTrue =
		intersecting_welcome === true || intersecting_welcome === "true";
	const shouldRunAnimation = isLocalStorageTrue && isIntersectingTrue;

	const welcome_message_className = {
		true: {
			welcome_className: shouldRunAnimation
				? "welcomeMessage_animation"
				: "",
		},
		false: {
			welcome_className: isLocalStorageFalse
				? "welcomeMessage_animation"
				: "",
		},
		null: {
			welcome_className: isLocalStorageNull
				? ""
				: "welcomeMessage_animation",
		},
	};

	const sub_header_className = {
		true: {
			sub_className: shouldRunAnimation ? "subheader_animation" : "",
		},
		false: {
			sub_className: isLocalStorageFalse ? "subheader_animation" : "",
		},
		null: {
			sub_className: isLocalStorageNull
				? "subheader_no_animation"
				: "subheader_animation",
		},
	};

	const btn_welcome_function = {
		true: {
			btn_className: shouldRunAnimation ? "btn_welcome" : "",
		},
		false: {
			btn_className: isLocalStorageFalse ? "btn_welcome" : "",
		},
		null: {
			btn_className: isLocalStorageNull
				? "btn_welcome_no_animation "
				: "btn_welcome",
		},
	};

	const { welcome_className } =
		welcome_message_className[local_storage] || {};
	const { sub_className } = sub_header_className[local_storage] || {};

	const { btn_className } = btn_welcome_function[local_storage] || {};

	return (
		<>
			{/* welcome_animation */}
			<div className="welcome " ref={welcomeRef}>
				{/* ref={welcomeRef} */}
				<div className="welcomeLeft ">
					<h1 className={`welcomeMessage ${welcome_className} `}>
						{/* (make the words clickable and
						have an image on click) */}
						The Place To Turn Your Ideas Into Reality Welcome To
						Lenddy's Web Services
					</h1>

					<div>
						<p className={`subheader  ${sub_className} `}>
							Yo Yo the name is Lenddy I like making web sites and
							apps that will sut your needs using the best
							technologies , so what is your next big idea and
							when do you want to make it happen ?
						</p>
					</div>

					<div className="welcomeBtn">
						<button
							// btn_animation  btn_show
							className={` ${
								intersecting_welcome ? "btn_welcome" : ""
							} `}
						>
							View Resume
						</button>
						<button
							className={` ${
								intersecting_welcome ? "btn_welcome" : ""
							} `}
						>
							View Github
						</button>
						<button
							className={` ${
								intersecting_welcome ? " btn_welcome" : ""
							} `}
						>
							Projects
						</button>
						<button
							className={`  ${
								intersecting_welcome ? "btn_welcome" : ""
							} `}
						>
							Contact Me
						</button>
					</div>
				</div>

				<div className="welcomeRight">
					<img
						src={Logo}
						alt="logo"
						className={` ${intersecting_welcome ? "logo" : ""} `}
					/>
					<p className={` ${intersecting_welcome ? "subtext" : ""} `}>
						Like the logo{" "}
						<span>
							<a
								href="https://instagram.com/merv_agency?igshid=OGQ5ZDc2ODk2ZA=="
								target="_blank"
								rel="noreferrer"
							>
								click here
							</a>
						</span>{" "}
						to see who made it
					</p>
					{/* <ol>
						<li>
							logo (make the it a circle and add box shadow or a
							blur effect(make it have the tree color in a loop
							that will change between the tree) )
						</li>
						<li>
							Like what you see (click here(this will be a btn
							that the use will be able to click one make an on
							hover event that changes the color of the btn )) to
							find out who made it
						</li>
					</ol> */}
				</div>
			</div>
		</>
	);
};

// const forwardWelcome = React.forwardRef(Welcome);

export default Welcome;
