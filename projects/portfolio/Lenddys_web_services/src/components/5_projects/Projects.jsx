import { useState, useEffect, useRef } from "react";
import placeholder from "../../assets/placeholder.png";
import gsap from "gsap";
import project1 from "../../assets/Escobar_Cleaning_service.png";

const Projects = () => {
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
			const scrollThreshold = 2750; // Adjust the threshold as needed

			if (!isTitleVisible && scrollY >= scrollThreshold) {
				// Trigger your GSAP animation here
				gsap.to(title, { opacity: 1, y: 0, duration: 1 });
				console.log("project show");

				setIsTitleVisible(true); // Update the state to prevent repeated animations
			}
		};
		const onScroll2 = () => {
			// Calculate the scroll position to determine when to make the element visible
			const scrollY = window.scrollY;
			const scrollThreshold = 2800; // Adjust the threshold as needed

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
	return (
		// hidden
		<div className="project">
			<div ref={titleRef}>
				<h1 className="header">
					<span
						className={`project_tittle_hide   ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						P
					</span>
					<span
						className={`project_tittle_hide   ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						r
					</span>
					<span
						className={`project_tittle_hide   ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						o
					</span>
					<span
						className={`project_tittle_hide   ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						j
					</span>
					<span
						className={`project_tittle_hide   ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						e
					</span>
					<span
						className={`project_tittle_hide   ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						c
					</span>
					<span
						className={`project_tittle_hide   ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						t
					</span>
					<span
						className={`project_tittle_hide   ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						s
					</span>
				</h1>
			</div>

			<div className="projects_container">
				{/* put an image that will be at the center and a box at the bottom
				offset to the left (or right) depending if the item came from
				the left or the right th e item will have an animation will
				bring the picture from one ende and the description from another
				end and the whole item will have an animation that will move the
				items(the image and description ) depending on where the courser
				is and add a box shadow you can see something similar in this
				site
				<a href="https://elvito.netlify.app/">
					https://elvito.netlify.app/
				</a>
				add a btn that will link to the live site and another one that
				will link to the code on github */}

				{/* 
						you might want to put the name of the project first and then the picture and then the description
				make a card container  like Raphael did in his portfolio 
					add an image to the top the name of the project and a short description  on click will links to a video  and add a hover effect that when hover over it will play a short clip of a video
				*/}

				{/* also make 2 btns one that will take you to the code and one that will take you to YouTube  showing of the page  */}
				<div
					className={`card_project ${
						isContentVisible ? "card_project_animate" : ""
					} `}
					// ${isContentVisible} card_projectTest
					// ref={projectItems}
				>
					<img
						src={project1}
						alt=""
						className={`${
							isContentVisible ? "project_image1" : ""
						} `}
					/>

					<h1>Escobar cleaning services</h1>
					<hr />
					<div
						className={`description ${
							isContentVisible ? "description1" : ""
						} `}
					>
						<p>
							{" "}
							website for a small cleaning company in Little Rock
							Arkansas using: react and MaterialUI, AWS, Amazon
							EC2
						</p>
					</div>
				</div>
				<div
					className={`card_project ${
						isContentVisible ? "card_project_animate" : ""
					} `}
				>
					<img
						src={project1}
						alt=""
						className={`${
							isContentVisible ? "project_image2" : ""
						} `}
					/>

					<h1>IRS</h1>
					<hr />
					<div
						className={`description ${
							isContentVisible ? "description2" : ""
						} `}
					>
						<p>
							A loans management system using: React, MongoDB,
							MaterialUI, NodeJs, and Socket.io.
						</p>
					</div>
				</div>
				<div
					className={`card_project ${
						isContentVisible ? "card_project_animate" : ""
					} `}
				>
					<img
						src={project1}
						alt=""
						className={`${
							isContentVisible ? "project_image3" : ""
						} `}
					/>

					<h1>Flappy CUBE</h1>
					<hr />
					<div
						className={`description  ${
							isContentVisible ? "description3" : ""
						} `}
					>
						<p>
							A basic flappy bird clone , instead of a bird it is
							a cube made using unity and c#{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
