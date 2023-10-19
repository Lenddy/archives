import { useState, useEffect } from "react";
import placeholder from "../../assets/placeholder.png";

const Projects = () => {
	// const welcomeRef = useRef(null);
	// const what_I_DoRef = useRef(null);
	// const toolsRef = useRef(null)
	// const projectsRef = useRef(null);
	// const profileRef = useRef(null);

	// console.log("projectItemsIsVisible", projectItemsIsVisible);
	// console.log("this is welcome ref", welcomeRef.current.classList);
	// console.log("this is welcome ref", welcomeRef.current.className);
	// console.log("this is myRefs", myRefs);
	// myRefs.forEach((el) => console.log("this is myRefs", el));
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
		// hidden
		<div className="project">
			<h1 className="header">Projects</h1>
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
					className={`card_project show_card_project 
						
					}`}
					// ref={projectItems}
				>
					<img src={placeholder} alt="" />
					<hr />
					<h1>project name</h1>
					<hr />
					<p>description</p>
				</div>
				<div className="card_project">
					<img src={placeholder} alt="" />
					<hr />
					<h1>project name</h1>
					<hr />
					<p>description</p>
				</div>
				<div className="card_project">
					<img src={placeholder} alt="" />
					<hr />
					<h1>project name</h1>
					<hr />
					<p>description</p>
				</div>
			</div>
		</div>
	);
};

export default Projects;
