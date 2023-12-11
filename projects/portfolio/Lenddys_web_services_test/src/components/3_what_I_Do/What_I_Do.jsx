import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const What_I_Do = () => {
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
			const scrollThreshold = 350; // Adjust the threshold as needed

			if (!isTitleVisible && scrollY >= scrollThreshold) {
				// Trigger your GSAP animation here
				gsap.to(title, { opacity: 1, y: 0, duration: 1 });

				setIsTitleVisible(true); // Update the state to prevent repeated animations
			}
		};
		const onScroll2 = () => {
			// Calculate the scroll position to determine when to make the element visible
			const scrollY = window.scrollY;
			const scrollThreshold = 400; // Adjust the threshold as needed

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
	return (
		<>
			<div
				className="whatIDo "
				//  ref={what_i_doRef}
			>
				<div
					className={`whatIDo_top ${
						isTitleVisible ? "whatIDo_top_animation" : ""
					} `}
					ref={titleRef}
				>
					<h1
						className={`whatIDo_top_text ${
							isTitleVisible ? "whatIDo_top_tex_animation" : ""
						} `}
					>
						{/* {t("whatIDo_title")} */}
						{cookieValue === "es"
							? "Mis Especialidades"
							: "My Experience"}
					</h1>
				</div>

				<div className="whatIDo_middle" ref={contentRef}>
					<div
						className={`whatIDo_left ${
							isContentVisible ? "whatIDo_left_animation" : ""
						} `}
					>
						<h1 className="blink">
							{/* {t("whatIDo_left_title")} */}
							{cookieValue === "es"
								? "Desarrolladora Full-stack"
								: "Full-stack Developer"}
						</h1>

						<p className="blink ">
							{/* {t("whatIDo_left")} */}
							{cookieValue === "es"
								? "Como desarrollador full-stack, mi función es crear sitios web que se adapten a sus preferencias, comenzando desde la interfaz visual de front-end, avanzando a través de las funcionalidades de back-end y extendiéndose hasta una sólida gestión de bases de datos. Mis responsabilidades clave implican diseñar interfaces de usuario visualmente atractivas y fáciles de usar, desarrollar la lógica de back-end, incluidos los procesos del lado del servidor y las API, y garantizar el almacenamiento de datos eficiente y seguro en bases de datos. Además, creo y mantengo servicios web para facilitar la comunicación fluida entre estos componentes. Mi trabajo se extiende a agregar nuevas funciones, realizar pruebas rigurosas, corregir errores y colaborar con equipos multifuncionales en diversos proyectos. En esencia, soy el arquitecto de soluciones digitales, asegurándome de que se alineen con las necesidades de los clientes y brinden experiencias de usuario de primer nivel mientras mantengo la funcionalidad y la integridad de los datos."
								: "As a full-stack developer, my role is to craft websites that adapt to your preferences, starting from the front-end visual interface, progressing through back-end functionalities, and extending to robust database management. my key responsibilities involve designing visually appealing and user-friendly front-end interfaces, developing the back-end logic, including server-side processes and APIs, and ensuring efficient and secure data storage in databases. Additionally, I create and maintain web services to facilitate seamless communication between these components. My work extends to adding new features, rigorous testing, bug fixing, and collaborating with cross-functional teams on diverse projects. In essence, I am the architect of digital solutions, ensuring they align with clients needs and deliver top-notch user experiences while maintaining functionality and data integrity."}
						</p>
					</div>
					<div
						className={`whatIDo_right ${
							isContentVisible ? "whatIDo_right_animation" : ""
						} `}
					>
						<div>
							<h1 className="blink ">
								{/* {t("whatIDo_right_title")} */}
								{cookieValue === "es"
									? "Constructor de PC"
									: "PC Builder"}
							</h1>
							<p className="blink ">
								{/* {t("whatIDo_right")} */}
								{cookieValue === "es"
									? "Como entusiasta Constructor de computadoras(PC) personalizadas según sus especificaciones. Mi experiencia abarca la selección de componentes, el ensamblaje y la optimización del sistema. Los Constructo de PC comienzan eligiendo meticulosamente CPU, GPU, placa base(motherboard), RAM, almacenamiento y otros componentes según consideraciones de rendimiento, compatibilidad y presupuesto. Instalaré el sistema operativo y los controladores, probaré rigurosamente cada aspecto para confirmar una funcionalidad impecable. Además de construir nuevas PC, también ofrezco servicios de actualización y reparación, manteniéndome actualizado con las últimas tendencias de hardware y software. entregando sistemas optimizados para juegos, creación de contenido, trabajo profesional y más."
									: "As a PC builder enthusiast who makes custom personal computers (PCs) tailored to you specifications. my expertise spans to component selection, assembly, and system optimization. PC builders begin by meticulously choosing CPU, GPU, motherboard, RAM, storage, and other components based on performance, compatibility, and budget considerations.I will install the operating system and drivers, rigorously test each aspect to confirm flawless functionality. In addition to building new PCs, i also provide upgrade and repair services, staying updated with the latest hardware and software trends. delivering systems optimized for gaming, content creation, professional work, and more."}
							</p>
						</div>
					</div>
				</div>
				<div
					className={`whatIDo_bottom ${
						isContentVisible ? "whatIDo_bottom_animation" : ""
					} `}
				>
					<h1 className="blink ">
						{/* {t("whatIDo_bottom_title")} */}
						{cookieValue === "es" ? "Tutor" : "Tutor"}
					</h1>
					<div className="whatIDo_bottom_h1_tag">
						<p className="blink ">
							{/* {t("whatIDo_bottom")} */}
							{cookieValue === "es"
								? "Como tutor, mi objetivo es guiarte para que tengas una comprensión fundamental del desarrollo web. Juntos, nos embarcaremos en un viaje que le proporcionará el conocimiento y las habilidades para navegar con confianza por el mundo del desarrollo web en su esencia. A través del aprendizaje práctico, construirá una base sólida que le permitirá dominar los conceptos básicos del desarrollo web. Comenzaremos con HTML y CSS, los componentes básicos de la web, y pasaremos a JavaScript y otras tecnologías clave, lo que le brindará la competencia necesaria para crear sitios web cautivadores y aplicaciones web dinámicas. Al final de nuestro viaje, poseerá la confianza y el conocimiento para abordar proyectos de desarrollo web de forma independiente, lo que lo encaminará hacia la exploración de infinitas oportunidades de innovación y autosuficiencia en este campo."
								: "As a tutor, my focus is to guide you to have a fundamentals understanding of web development. Together, we will embark on a journey that equips you with the knowledge and skills to confidently navigate the world of web development at its core. Through hands-on learning , you'll build a solid foundation, enabling you to master the essentials of web development. We'll start with HTML and CSS, the building blocks of the web, and them move into JavaScript and other key technologies, giving you the proficiency needed to create captivating websites and dynamic web applications. By the end of our journey, you will possess the confidence and know-how to tackle web development projects independently, setting you on a path to explore endless opportunities for innovation and self-reliance in this field."}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default What_I_Do;
