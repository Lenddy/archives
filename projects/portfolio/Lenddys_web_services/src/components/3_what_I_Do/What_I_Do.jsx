import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

const What_I_Do = () => {
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

	// !
	// !
	// !
	// !
	// !
	// !
	// !this si how you get the width of the page
	//import React, { useState, useEffect } from 'react';

	// const PageWidthComponent = () => {
	// 	const [pageWidth, setPageWidth] = useState(window.innerWidth);

	// 	const updatePageWidth = () => {
	// 	  setPageWidth(window.innerWidth);
	// 	};

	// 	useEffect(() => {
	// 	  const handleResize = () => {
	// 		updatePageWidth();
	// 	  };

	// 	  window.addEventListener('resize', handleResize);

	// 	  // Clean up the event listener on component unmount
	// 	  return () => {
	// 		window.removeEventListener('resize', handleResize);
	// 	  };
	// 	}, []); // Empty dependency array ensures this effect runs only on mount and unmount

	// 	return (
	// 	  <div>
	// 		<p>Width of the page is: {pageWidth}px</p>
	// 		{/* You can use pageWidth in your component as needed */}
	// 	  </div>
	// 	);
	//   };

	//   export default PageWidthComponent;

	//! for the animation for the left right and bottom
	//? make them appear in a zigzag  left  title , right  p tag  , bottom title , left p tag , right title , bottom p tag
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
					{/* My Experience */}
					<h1
						className={`whatIDo_top_text ${
							isTitleVisible ? "whatIDo_top_tex_animation" : ""
						} `}
					>
						{t("whatIDo_title")}
					</h1>
					{/* <div
						
					>
						
					</div> */}
				</div>

				<div className="whatIDo_middle" ref={contentRef}>
					<div
						className={`whatIDo_left ${
							isContentVisible ? "whatIDo_left_animation" : ""
						} `}
					>
						<h1 className="blink">{t("whatIDo_left_title")}</h1>
						{/* <p>
							i am a full stack web developer my job is to make
							websites the will adapt to your wants and needs
							starting from the visual interface(front end ),
							functionality(back-end), and how the data is
							stored(data base)
						</p> */}
						<p className="blink ">
							{t("whatIDo_left")}{" "}
							{/* As a full-stack developer,my role is to craft
							websites that adapt to your preferences, starting
							from the front-end visual interface, progressing
							through back-end functionalities, and extending to
							robust database management. my key responsibilities
							involve designing visually appealing and
							user-friendly front-end interfaces, developing the
							back-end logic, including server-side processes and
							APIs, and ensuring efficient and secure data storage
							in databases. Additionally, i create and maintain
							web services to facilitate seamless communication
							between these components. My work extends to adding
							new features, rigorous testing, bug fixing, and
							collaborating with cross-functional teams on diverse
							projects. In essence, i am the architect of digital
							solutions, ensuring they align with clients' needs
							and deliver top-notch user experiences while
							maintaining functionality and data integrity. */}
						</p>
					</div>
					<div
						className={`whatIDo_right ${
							isContentVisible ? "whatIDo_right_animation" : ""
						} `}
					>
						<div>
							<h1 className="blink ">
								{t("whatIDo_right_title")}
							</h1>
							<p className="blink ">
								{t("whatIDo_right")}{" "}
								{/* As a PC builder enthusiast who makes custom
								personal computers (PCs) tailored to you
								specifications. my expertise spans to component
								selection, assembly, and system optimization. PC
								builders begin by meticulously choosing CPU,
								GPU, motherboard, RAM, storage, and other
								components based on performance, compatibility,
								and budget considerations.I will install the
								operating system and drivers, rigorously test
								each aspect to confirm flawless functionality.
								In addition to building new PCs, i also provide
								upgrade and repair services, staying updated
								with the latest hardware and software trends.
								delivering systems optimized for gaming, content
								creation, professional work, and more. */}
							</p>
						</div>
					</div>
				</div>
				<div
					className={`whatIDo_bottom ${
						isContentVisible ? "whatIDo_bottom_animation" : ""
					} `}
				>
					<h1 className="blink ">{t("whatIDo_bottom_title")} </h1>
					<div className="whatIDo_bottom_h1_tag">
						<p className="blink ">{t("whatIDo_bottom")} </p>
					</div>
				</div>

				{/* <ol>
					<li>
						
					</li>
					<li>talk about what front back and dbs are </li>
					<li>talk about building computer </li>
					<li>
						talk abut teaching(instructing) and researching
						technologies that the user might be interested on
					</li>
				</ol> */}
			</div>
		</>
	);

	// useEffect(() => {
	// 	const observer = new IntersectionObserver((entries) => {
	// 		const entry = entries[0];
	// 		setIntersecting_whatIDo(entry.isIntersecting);
	// 	});

	// 	observer.observe(what_i_doRef.current);
	// 	// if (intersecting_whatIDo === false) {
	// 	// 	setNoAnimation(true);
	// 	// }
	// }, []);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const position = window.scrollY;
	// 		if (position >= 300 && position <= 1000) {
	// 			setShow(true);
	// 		}
	// 	};

	// 	window.addEventListener("scroll", handleScroll);

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);
};

export default What_I_Do;
// ! i brock my mind trying to do this  with ternary operator so i ask chat gpt to help me with it i know that there is a wayyyyyy better why of doing it but this is what i got

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

// const whatIDo_top_text_animation = getClassNames(
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
