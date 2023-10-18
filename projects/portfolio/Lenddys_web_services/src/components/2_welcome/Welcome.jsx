import Logo from "../../assets/LM.png";
import React, { useRef, useEffect } from "react";

const Welcome = () => {
	//? use th blink animation from anima.net to show your logo and the blink to the new logo
	// ? give the component of the logo a horizontal scroll bar  on scroll you can change the logo  and a line below that show in with logo you are one
	// const welcomeRef = useRef();

	// ? make use of framer motion to make the logo pop out when hover
	// ? and try to make a pop out info content show on hover and make it have a profile picture some info of the person that create it and on click redirect to their socials

	// ? also put 1 btns that takes you to the person social

	//! make use of this video https://www.youtube.com/watch?v=q9tpBtvTTz8&list=PLFsfg2xP7cbL-kmqydheUCbhkHeNq-zZ_&index=11
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			// console.log("entries", entries);
			// const entry = entries[0];
			// setWhat_I_Do(entry.isIntersecting);
			// entries.forEach((entry) => {
			// 	console.log(entry);
			// 	if (entry.isIntersecting) entry.target.classList.add("show");
			// 	else entry.target.classList.remove("show");
			// });
		});
		// const hiddenElements = document.querySelectorAll(".hidden");
		// hiddenElements.forEach((el) => observer.observe(el));
	}, []);

	return (
		<>
			<div className="welcome hidden">
				{/* ref={welcomeRef} */}
				<div className="welcomeLeft">
					<h1 className="welcomeMessage">
						{/* (make the words clickable and
						have an image on click) */}
						The Place To Turn Your Ideas Into Reality Welcome To
						Lenddy's Web Services
					</h1>

					<div className="subheader">
						<p>
							Yo Yo the name is Lenddy I like making web sites and
							apps that will sut your needs using the best
							technologies , so what is your next big idea and
							when do you want to make it happen ?
						</p>
					</div>

					<div className="welcomeBtn">
						<button className="btn">View Resume</button>
						<button className="btn">View Github</button>
						<button className="btn">Projects</button>
						<button className="btn">Contact Me</button>
					</div>
				</div>

				<div className="welcomeRight">
					<img className="logo" src={Logo} alt="logo" />
					<p>
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
