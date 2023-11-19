import { useState, useEffect, useRef } from "react";
import placeholder from "../../assets/placeholder.png";
import gsap from "gsap";
import project1 from "../../assets/Escobar_Cleaning_service.png";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const Projects = () => {
	const titleRef = useRef(null);
	const contentRef = useRef(null);
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
	}, [isTitleVisible, isContentVisible, cookieValue]);
	const { t } = useTranslation();
	console.log(cookieValue);

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

			<div className="projects_container">
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
							{t("projects_left")}
							{/* website for a small cleaning company in Little Rock
							Arkansas using: react and MaterialUI, AWS, Amazon
							EC2 */}
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
						<p>{t("projects_middle")}</p>
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
							{t("projects_right")}
							{/* A basic flappy bird clone , instead of a bird it is
							a cube made using unity and c#{" "} */}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
