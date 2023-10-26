import Logo from "../../assets/LM.png";
import { useRef, useEffect, useState } from "react";
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
	const [noAnimation, setNoAnimation] = useState(false);
	// const local_storage = JSON.parse(
	// 	window.localStorage.getItem("Portfolio_page_animation_toggle")
	// );

	useEffect(() => {
		const observer_welcome = new IntersectionObserver((entries) => {
			const entry = entries[0];
			// console.log(entry);
			setIntersecting_welcome(entry.isIntersecting);
		});
		observer_welcome.observe(welcomeRef.current);
		if (intersecting_welcome === false) {
			setNoAnimation(true);
		}

		// console.log()
	}, [intersecting_welcome]);

	// ! i brock my mind trying to do this  with ternary operator so i ask chat gpt to help me with it i know that there is a wayyyyyy better why of doing it but this is what i got

	return (
		<>
			{/* welcome_animation */}
			<div className="welcome " ref={welcomeRef}>
				{/* ref={welcomeRef} */}
				<div className="welcomeLeft ">
					{/* welcome_className */}
					<h1
						className={`welcomeMessage ${
							intersecting_welcome === true &&
							noAnimation === true
								? ""
								: intersecting_welcome === true
								? "welcomeMessage_animation"
								: ""
						} `}
					>
						{/* (make the words clickable and
						have an image on click) */}
						The Place To Turn Your Ideas Into Reality Welcome To
						Lenddy's Web Services
					</h1>

					<div className="subheader">
						{/* sub_className */}
						<p
							className={` subheader_message ${
								intersecting_welcome === true &&
								noAnimation === true
									? "subheader_no_animation"
									: intersecting_welcome
									? "subheader_animation"
									: "subheader_no_animation"
							}`}
						>
							Yo Yo the name is Lenddy I like making web sites and
							apps that will sut your needs using the best
							technologies , so what is your next big idea and
							when do you want to make it happen ?
						</p>
					</div>

					<div className="welcomeBtn">
						<button
							// btn_animation  btn_show
							// 							btn_className
							// btn_className
							// btn_className
							// btn_className
							className={`  ${
								intersecting_welcome === true &&
								noAnimation === true
									? "btn_welcome_no_animation"
									: intersecting_welcome
									? "btn_welcome"
									: ""
							} `}
						>
							View Resume
						</button>
						<button
							className={` ${
								intersecting_welcome === true &&
								noAnimation === true
									? "btn_welcome_no_animation"
									: intersecting_welcome
									? "btn_welcome"
									: ""
							}`}
						>
							View Github
						</button>
						<button
							className={` ${
								intersecting_welcome === true &&
								noAnimation === true
									? "btn_welcome_no_animation"
									: intersecting_welcome
									? "btn_welcome"
									: ""
							} `}
						>
							Projects
						</button>
						<button
							className={`  ${
								intersecting_welcome === true &&
								noAnimation === true
									? "btn_welcome_no_animation"
									: intersecting_welcome
									? "btn_welcome"
									: ""
							} `}
						>
							Contact Me
						</button>
					</div>
				</div>

				<div className="welcomeRight">
					{/* (intersecting_welcome ? "logo" : "", logo_className) */}

					<img
						src={Logo}
						alt="logo"
						className={` ${
							intersecting_welcome === true &&
							noAnimation === true
								? "logo_no_animation"
								: intersecting_welcome
								? "logo"
								: "logo_no_animation"
						} `}
					/>
					{/* subtext_className */}
					<p
						className={` ${
							intersecting_welcome === true &&
							noAnimation === true
								? "subtext_no_animation"
								: intersecting_welcome
								? "subtext"
								: "subtext_no_animation"
						} `}
					>
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

// const isLocalStorageTrue =
// 	local_storage === true || local_storage === "true";
// const isLocalStorageFalse =
// 	local_storage === false || local_storage === "false";
// const isLocalStorageNull =
// 	local_storage === null || local_storage === "null";
// const isIntersectingTrue =
// 	intersecting_welcome === true || intersecting_welcome === "true";
// const shouldRunAnimation = isLocalStorageTrue && isIntersectingTrue;

// const getClassNames = (value, animationClass, noAnimationClass) => {
// 	return {
// 		true: shouldRunAnimation ? animationClass : "",
// 		false: isLocalStorageFalse ? animationClass : "",
// 		null: isLocalStorageNull ? noAnimationClass : animationClass,
// 	}[value];
// };

// const welcome_className = getClassNames(
// 	local_storage,
// 	"welcomeMessage_animation",
// 	""
// );
// const sub_className = getClassNames(
// 	local_storage,
// 	"subheader_animation",
// 	"subheader_no_animation"
// );
// const btn_className = getClassNames(
// 	local_storage,
// 	"btn_welcome",
// 	"btn_welcome_no_animation"
// );
// const logo_className = getClassNames(
// 	local_storage,
// 	"logo",
// 	"logo_no_animation"
// );
// const subtext_className = getClassNames(
// 	local_storage,
// 	"subtext",
// 	"subtext_no_animation"
// );
