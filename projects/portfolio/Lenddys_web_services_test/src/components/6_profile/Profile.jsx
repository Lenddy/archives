import React, { useState, useEffect, useRef } from "react";
import Lenddy from "../../assets/Lenddy.jpg";
import gsap from "gsap";
import ProfilePicture from "../ProfilePicture";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const Profile = () => {
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
			const scrollThreshold = 3500; // Adjust the threshold as needed

			if (!isTitleVisible && scrollY >= scrollThreshold) {
				// Trigger your GSAP animation here
				gsap.to(title, { opacity: 1, y: 0, duration: 1 });

				setIsTitleVisible(true); // Update the state to prevent repeated animations
			}
		};
		const onScroll2 = () => {
			// Calculate the scroll position to determine when to make the element visible
			const scrollY = window.scrollY;
			const scrollThreshold = 3500; // Adjust the threshold as needed

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

	const [isFlipped, setIsFlipped] = useState(false);

	const handleCardInteract = () => {
		setIsFlipped(!isFlipped);
	};

	const handleSubmit = (e) => {
		e.preventDefault;
	};
	const { t } = useTranslation();

	return (
		<div
			// flip_position ${isTitleVisible ? "turn_page" : ""}
			className={`profile `}
		>
			<div
				className={`profile_top flip_position ${
					isTitleVisible ? "turn_title" : ""
				}`}
				ref={titleRef}
			>
				<h1>
					{/* {t("profile_title")} */}
					{cookieValue === "es" ? "Sobre Mi" : "About Me"}
				</h1>
			</div>
			{/* ${isContentVisible ? "show_content" : ""} */}
			<div className={`profileContainer `}>
				<div
					className={`profile_content_container ${
						isContentVisible ? "turn_content" : ""
					}`}
				>
					<div className="profile_left">
						{/* <img src={Lenddy} alt=" profile picture" /> */}
						<div
							className="c_comp"
							onClick={handleCardInteract}
							// onTouchStart={handleCardInteract}
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
										<h2
											className={`card__title1 ${
												isFlipped
													? "change_opacity"
													: ""
											}`}
										>
											{/* {t("profile_hello")} */}
											{cookieValue === "es"
												? "HOLA"
												: "Hello"}
											{/* Hello */}
										</h2>
										<h4 className="card__title2">
											{/* {t("profile_there")} */}
											{cookieValue === "es"
												? "QUE HAY"
												: "There"}
											{/* There */}
										</h4>
										<h4
											className={`card__title3 ${
												isFlipped
													? "change_opacity"
													: ""
											}`}
										>
											👋🏼
										</h4>
										<h4 className="card__title4">
											{/* {t("profile_click")} */}
											{cookieValue === "es"
												? "HAS ME CLICK"
												: "Click Me"}
											{/* click me */}
										</h4>
									</div>

									<div className="card__back">
										<h1 className="card__back_title">
											{/* {t("card__body_title")} */}
											{cookieValue === "es"
												? "SOY LENDDY MORALES"
												: "I AM LENDDY MORALES"}
										</h1>
										<p className="card__body_part1">
											{/* {t("card__body_part1")} */}
											{cookieValue === "es"
												? "Soy un chico Dominicano de 20 años que apenas sabe bailar bachata. Resido en los Estados Unidos y algún día podría mudarme a Puerto Rico. Embarqué en mi viaje hacia la educación superior a la edad de 17 años con especialización en ingeniería informática. Sin embargo, pronto me di cuenta de que el enfoque tradicional de enseñanza universitaria no se alineaba con mi estilo de aprendizaje."
												: "I'm a 20-year-old Dominican boy who can barly dance bachata I reside in the United States and some day might move to Puerto rico. I embarked on my journey into higher education at the age of 17 with a major in computer engineering. However, I soon realized that the traditional college teaching approach didn't align with my learning style."}
										</p>{" "}
										<p className="card__body_part2">
											{/* {t("card__body_part2")} */}
											{cookieValue === "es"
												? "Tomé la audaz decisión de abandonar la carrera y buscar caminos alternativos para adquirir conocimientos. Sólo un mes después, me uní a un campamento de programación llamado"
												: "I made the bold decision to drop out and seek alternative paths to gain knowledge. Just a month later, I joined a coding bootcamp called"}
											<a href="https://www.codingdojo.com/">
												Coding Dojo
												{/* {t("card_a_tag")} */}
											</a>{" "}
											{/* {t("card__body_part2_2")} */}
											{cookieValue === "es"
												? ". Este curso intensivo de programación de cuatro meses me llevó al límite mientras me esforzaba por mantenerme al día con el entorno de aprendizaje acelerado. Pase muchas noches sin dormir, a menudo acostándome a las 4 am y despertándome a las 11 am. A través de risas, lágrimas y forjando fuertes amistades, perseveré y valió la pena. Ahora estoy orgulloso de llamarme desarrollador full-stack."
												: ". This intensive four-month programming course pushed me to my limits as I strived to keep up with the fast-paced learning environment. Many nights were spent burning the midnight oil, often going to bed at 4 am and waking up at 11 am. Through laughter, tears, and forming strong friendships, I persevered, and it has paid off. I am now proud to call myself a full-stack developer."}
										</p>
										<p className="card__body_part3">
											<a href="https://www.codingdojo.com/">
												Coding Dojo
												{/* {t("card_a_tag")} */}
											</a>{" "}
											{/* {t("card__body_part3")} */}
											{cookieValue === "es"
												? "Me enseñó habilidades invaluables, incluido prosperar en situaciones de alto estrés, tanto individualmente como parte de un grupo. Aprendí la importancia de buscar ayuda cuando la necesito y ofrecer asistencia a los demás. Me inculcó el hábito de aprender de mis errores y ampliar continuamente mis conocimientos."
												: "taught me invaluable skills, including thriving in high-pressure situations, both individually and as part of a cohort. I learned the importance of seeking help when needed and offering assistance to others. It ingrained in me the habit of learning from my mistakes and continually expanding my knowledge."}
										</p>
										<p className="card__body_part4">
											{/* {t("card__body_part4")} */}
											{cookieValue === "es"
												? "Mi objetivo final es regresar a la universidad algún día y reanudar mis estudios de ingeniería informática, con un posible enfoque en convertirme también en desarrollador de juegos o incluso explorar la carpintería."
												: "My ultimate goal is to return to college one day and resume my computer engineering studies, with a possible focus on also becoming a game developer or even exploring carpentry."}
										</p>
										<p className="card__body_part5">
											{/* {t("card__body_part5")} */}
											{cookieValue === "es"
												? " En mi tiempo libre, me entrego a mi pasión por los videojuegos, el baloncesto, el béisbol, el anime, el manga escuchando Rock, Pop y Salsa. Si algo de esto le resuena o despierta su interés, no dude en enviarme un mensaje."
												: "In my free time, I indulge in my passion for video Games, Basketball, Baseball, Anime, Manga listening to Rock ,Pop and Salsa . If any of this resonates with you or piques your interest, feel free to send me a message. Don't hesitate"}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="profile_right">
						<Contact />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
