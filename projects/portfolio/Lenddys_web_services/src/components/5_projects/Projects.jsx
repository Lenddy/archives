import { useState, useEffect, useRef } from "react";
import placeholder from "../../assets/placeholder.png";
import gsap from "gsap";
import project1 from "../../assets/IRE.png";
import project2 from "../../assets/Escobar_Cleaning_service.png";
import project3 from "../../assets/flappy_cube.png";
import eye from "../../assets/circular_menu_items/eye.svg";
import gitHub from "../../assets/tech_logos/github-color.svg";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const Projects = () => {
	const titleRef = useRef(null);
	const contentRef = useRef(null);
	const option1 = useRef(null);
	const option2 = useRef(null);
	const option3 = useRef(null);
	const [isTitleVisible, setIsTitleVisible] = useState(false);
	const [isContentVisible, setIsContentVisible] = useState(false);
	// const[myCookies,setMyCookies] = useState()
	const cookieValue = Cookies.get("i18next");

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

		// const activate = () => {
		// 	// Calculate the scroll position to determine when to make the element visible
		// 	const scrollY = window.scrollY;
		// 	const scrollThreshold = 2750; // Adjust the threshold as needed

		// 	if (!isTitleVisible && scrollY >= scrollThreshold) {
		// 		// Trigger your GSAP animation here
		// 		gsap.to(title, { opacity: 1, y: 0, duration: 1 });
		// 		console.log("project show");

		// 		setIsTitleVisible(true); // Update the state to prevent repeated animations
		// 	}
		// };

		// handleOptionClick(3);

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
			// window.removeEventListener("load", handleOptionClick);
		};
	}, [isTitleVisible, isContentVisible, cookieValue]);
	const { t } = useTranslation();
	console.log(cookieValue);
	const [activeOption, setActiveOption] = useState(1);

	const handleOptionClick = (option = 1) => {
		setActiveOption(option);
	};

	useEffect(() => {
		const fetch_all = document.querySelectorAll(".option");
		const activate = "active";
		const timeout1 = setTimeout(() => {
			fetch_all[2].style.opacity = 1;
			fetch_all[2].style.transition = "1s";

			fetch_all.forEach((el) => {
				el.classList.remove(activate);
			});
			fetch_all[2].classList.add(activate);
		}, 2000);

		const timeout2 = setTimeout(() => {
			fetch_all[1].style.opacity = 1;
			fetch_all[1].style.transition = "1s";

			fetch_all.forEach((el) => {
				el.classList.remove(activate);
			});
			fetch_all[1].classList.add(activate);
		}, 4500);

		const timeout3 = setTimeout(() => {
			fetch_all[0].style.opacity = 1;
			fetch_all[0].style.transition = "1s";
			fetch_all.forEach((el) => {
				el.classList.remove(activate);
			});
			fetch_all[0].classList.add(activate);
		}, 7000);

		// Clear timeouts on component unmount
		return () => {
			clearTimeout(timeout1);
			clearTimeout(timeout2);
			clearTimeout(timeout3);
		};
	}, []);

	//! make the animation for the pictures  first start them on 0 opacity then show the last pic right pic   in full view that minimice it and repeat the same with the other pic
	return (
		<div className="project">
			<div ref={titleRef}>
				<h1 className="header">
					<span
						className={`project_tittle_hide   ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						{t("project_title.0")}
						{/* P */}
					</span>
					<span
						className={`project_tittle_hide   ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						{t("project_title.1")}
						{/* r */}
					</span>
					<span
						className={`project_tittle_hide   ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						{t("project_title.2")}
						{/* o */}
					</span>
					<span
						className={`project_tittle_hide   ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						{t("project_title.3")}
						{/* j */}
					</span>
					<span
						className={`project_tittle_hide   ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						{t("project_title.4")}
						{/* e */}
					</span>
					<span
						className={`project_tittle_hide   ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						{t("project_title.5")}
						{/* c */}
					</span>
					<span
						className={`project_tittle_hide   ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						{t("project_title.6")}
						{/* t */}
					</span>
					<span
						className={`project_tittle_hide   ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						{t("project_title.7")}
						{/* t */}
					</span>
					<span
						className={`project_tittle_hide ${
							isTitleVisible ? "project_tittle" : ""
						}`}
					>
						{/* {t("project_title.8") === undefined
					? null
					: t("project_title.8")} */}
						{/* t */}
						{/* {t("project_title.8")} */}
						{cookieValue === "es" ? "s" : null}
					</span>
				</h1>
			</div>
			<div className="project_container">
				<div className="options">
					<div
						className={`option ${
							activeOption === 1 ? "active" : ""
						}`}
						onClick={() => handleOptionClick(1)}
						style={{
							backgroundImage: `url(${project1})`,
							opacity: 0,
						}}
					>
						<div className="label">
							<div className="icon">
								<a
									href="https://github.com/Lenddy/app"
									target="_blank"
									rel="noreferrer"
								>
									<img src={gitHub} alt="" />
								</a>
							</div>
							<div className="info">
								<div className="main">
									<h1>IRE</h1>
								</div>
								<div className="sub">
									<p>{t("projects_left")}</p>
								</div>
							</div>
						</div>
					</div>
					<div
						className={`option ${
							activeOption === 2 ? "active" : ""
						}`}
						onClick={() => handleOptionClick(2)}
						// style="--optionBackground: url(https://raw.githubusercontent.com/Programith/Images/main/background_02.jpg);"
						style={{
							backgroundImage: `url(${project2})`,
							opacity: 0,
						}}
					>
						<div className="label">
							<div className="icon">
								<a
									href="https://github.com/Lenddy/Escobar_cleaning_services"
									target="_blank"
									rel="noreferrer"
								>
									<img src={gitHub} alt="" />
								</a>
							</div>
							<div className="info">
								<div className="main">
									<h1>Escobar cleaning services</h1>
								</div>
								<div className="sub">
									<p>{t("projects_middle")}</p>
								</div>
							</div>
						</div>
					</div>
					<div
						className={`option ${
							activeOption === 3 ? "active" : ""
						}   `}
						onClick={() => handleOptionClick(3)}
						style={{
							backgroundImage: `url(${project3})`,
							opacity: 0,
						}}
					>
						<div className="label">
							<div className="icon">
								<a
									href="https://github.com/Lenddy/flappy_cube"
									target="_blank"
									rel="noreferrer"
								>
									<img src={gitHub} alt="" />
								</a>
							</div>
							<div className="info">
								<div className="main">
									<h1>Flappy CUBE</h1>
								</div>
								<div className="sub">
									<p>{t("projects_right")}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;

// hidden

// 	<div className="projects_container">
// 		<a
// 			href="https://github.com/Lenddy/Escobar_cleaning_services"
// 			target="_blank"
// 			rel="noreferrer"
// 			className={`card_project ${
// 				isContentVisible ? "card_project_animate" : ""
// 			} `}
// 			// ${isContentVisible} card_projectTest
// 			// ref={projectItems}
// 		>
// 			<img
// 				src={project1}
// 				alt=""
// 				className={`${
// 					isContentVisible ? "project_image1" : ""
// 				} `}
// 			/>

// 			<h1>Escobar cleaning services</h1>
// 			{/* <hr /> */}
// 			<div
// 				className={`description ${
// 					isContentVisible ? "description1" : ""
// 				} `}
// 			>
// 				<p>
// 					{" "}
// 					{t("projects_left")}
// 					{/* website for a small cleaning company in Little Rock
// 					Arkansas using: react and MaterialUI, AWS, Amazon
// 					EC2 */}
// 				</p>
// 			</div>
// 		</a>
// 		<a
// 			href="https://github.com/Lenddy/app"
// 			target="_blank"
// 			rel="noreferrer"
// 			className={`card_project ${
// 				isContentVisible ? "card_project_animate" : ""
// 			} `}
// 		>
// 			<img
// 				src={project2}
// 				alt=""
// 				className={`${
// 					isContentVisible ? "project_image2" : ""
// 				} `}
// 			/>

// 			<h1>IRS</h1>
// 			{/* <hr /> */}
// 			<div
// 				className={`description ${
// 					isContentVisible ? "description2" : ""
// 				} `}
// 			>
// 				<p>{t("projects_middle")}</p>
// 			</div>
// 		</a>
// 		<a
// 			href="https://github.com/Lenddy/flappy_cube"
// 			target="_blank"
// 			rel="noreferrer"
// 			className={`card_project ${
// 				isContentVisible ? "card_project_animate" : ""
// 			} `}
// 		>
// 			<img
// 				src={project3}
// 				alt=""
// 				className={`${
// 					isContentVisible ? "project_image3" : ""
// 				} `}
// 			/>

// 			<h1>Flappy CUBE</h1>
// 			{/* <hr /> */}
// 			<div
// 				className={`description  ${
// 					isContentVisible ? "description3" : ""
// 				} `}
// 			>
// 				<p>
// 					{t("projects_right")}
// 					{/* A basic flappy bird clone , instead of a bird it is
// 					a cube made using unity and c#{" "} */}
// 				</p>
// 			</div>
// 		</a>
// 	</div>
// </div>
