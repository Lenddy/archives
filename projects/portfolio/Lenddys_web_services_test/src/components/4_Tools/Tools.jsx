import html from "../../assets/tech_logos/html5-color.svg";
import css from "../../assets/tech_logos/Css3-color.svg";
import js from "../../assets/tech_logos/javascript-color.svg";
import py from "../../assets/tech_logos/python-color.svg";
import csharp from "../../assets/tech_logos/csharp-color.svg";
import react from "../../assets/tech_logos/react-color.svg";
import flask from "../../assets/tech_logos/flask-color.svg";
import dotnet from "../../assets/tech_logos/dotnet-color.svg";
import node from "../../assets/tech_logos/nodedotjs-color.svg";
import mysql from "../../assets/tech_logos/mysql-color.svg";
import mongodb from "../../assets/tech_logos/mongodb-color.svg";
import { useState, useEffect, useRef } from "react";
import GsapMagnetic from "../animations/GsapMagnetic";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const Tools = () => {
	const titleRef = useRef(null);
	const contentRef = useRef(null);
	const [isTitleVisible, setIsTitleVisible] = useState(false);
	const [isContentVisible, setIsContentVisible] = useState(false);
	const cookieValue = Cookies.get("i18next");

	useEffect(() => {
		const title = titleRef.current;
		const content = contentRef.current;

		const onScroll = () => {
			// Calculate the scroll position to determine when to make the element visible
			const scrollY = window.scrollY;
			const scrollThreshold = 1550; // Adjust the threshold as needed

			if (!isTitleVisible && scrollY >= scrollThreshold) {
				// Trigger your GSAP animation here
				gsap.to(title, { opacity: 1, y: 0, duration: 1 });

				setIsTitleVisible(true); // Update the state to prevent repeated animations
			}
		};
		const onScroll2 = () => {
			// Calculate the scroll position to determine when to make the element visible
			const scrollY = window.scrollY;
			const scrollThreshold = 1600; // Adjust the threshold as needed

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
	const { t } = useTranslation();

	//!!!!!! find a way to mak the animation work  while is being click and hold for mobile and whe you stop the hold it takes you to the link

	return (
		<div className="tool_container" ref={titleRef}>
			<GsapMagnetic>
				<div>
					<h1
						className={`title ${
							isTitleVisible ? "title_animation" : ""
						}`}
					>
						{/* {t("tools")} */}
						{cookieValue === "es"
							? "Herramientas Que Uso"
							: "Tools That I Use"}
					</h1>
				</div>
			</GsapMagnetic>

			<div className="tools" ref={contentRef}>
				{/* languages */}

				<div className="languages">
					<GsapMagnetic>
						<a
							href="https://www.w3schools.com/html/html_intro.asp"
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={`tech_logos ${
									isContentVisible ? "logo_animation_1" : ""
								}`}
							>
								<img src={html} alt="" />
								<p>HTML</p>
							</div>
						</a>
					</GsapMagnetic>

					<GsapMagnetic>
						<a
							href="https://www.w3schools.com/css/css_intro.asp"
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={`tech_logos ${
									isContentVisible ? "logo_animation_2" : ""
								}`}
							>
								<img src={css} alt="" />
								<p>CSS</p>
							</div>
						</a>
					</GsapMagnetic>

					<GsapMagnetic>
						<a
							href="https://www.w3schools.com/js/js_intro.asp"
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={`tech_logos ${
									isContentVisible ? "logo_animation_3" : ""
								}`}
							>
								<img src={js} alt="" />
								<p>JAVASCRIPT</p>
							</div>
						</a>
					</GsapMagnetic>

					<GsapMagnetic>
						<a
							href="https://www.w3schools.com/python/python_intro.asp"
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={`tech_logos ${
									isContentVisible ? "logo_animation_2" : ""
								}`}
							>
								<img src={py} alt="" />
								<p>PYTHON</p>
							</div>
						</a>
					</GsapMagnetic>

					<GsapMagnetic>
						<a
							href="https://www.w3schools.com/cs/cs_intro.php"
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={`tech_logos ${
									isContentVisible ? "logo_animation_1" : ""
								}`}
							>
								<img src={csharp} alt="" />
								<p>C SHARP</p>
							</div>
						</a>
					</GsapMagnetic>
				</div>

				{/* frame works and libraries*/}
				<div className="frameworks_libraries">
					<GsapMagnetic>
						<a
							href="https://www.w3schools.com/react/react_intro.asp"
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={`tech_logos ${
									isContentVisible ? "logo_animation_1" : ""
								}`}
							>
								<img src={react} alt="" />
								<p>REACT</p>
							</div>
						</a>
					</GsapMagnetic>
					<GsapMagnetic>
						<a
							href="https://pythonbasics.org/what-is-flask-python/"
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={`tech_logos ${
									isContentVisible ? "logo_animation_2" : ""
								}`}
							>
								<img src={flask} alt="" />
								<p>FLASK</p>
							</div>
						</a>
					</GsapMagnetic>
					<GsapMagnetic>
						<a
							href="https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet"
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={`tech_logos ${
									isContentVisible ? "logo_animation_2" : ""
								}`}
							>
								<img src={dotnet} alt="" />
								<p>DOT NET</p>
							</div>
						</a>
					</GsapMagnetic>
					<GsapMagnetic>
						<a
							href="https://www.w3schools.com/nodejs/nodejs_intro.asp"
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={`tech_logos ${
									isContentVisible ? "logo_animation_1" : ""
								}`}
							>
								<img src={node} alt="" />
								<p>NODEJS</p>
							</div>
						</a>
					</GsapMagnetic>
				</div>
				{/* dbs*/}
				<div className="databases">
					<GsapMagnetic>
						<a
							href="https://www.w3schools.com/mysql/mysql_intro.asp"
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={`tech_logos ${
									isContentVisible ? "logo_animation_1" : ""
								}`}
							>
								<img src={mysql} alt="" />
								<p>MySQL</p>
							</div>
						</a>
					</GsapMagnetic>

					<GsapMagnetic>
						<a
							href="https://www.w3schools.com/mongodb/mongodb_get_started.php"
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={`tech_logos ${
									isContentVisible ? "logo_animation_1" : ""
								}`}
							>
								<img src={mongodb} alt="" />
								<p>MONGODB</p>
							</div>
						</a>
					</GsapMagnetic>
				</div>
			</div>
		</div>
	);
};

export default Tools;
