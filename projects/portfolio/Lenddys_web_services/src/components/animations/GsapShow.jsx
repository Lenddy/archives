import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function GsapShow() {
	const elementRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const element = elementRef.current;

		const onScroll = () => {
			// Calculate the scroll position to determine when to make the element visible
			const scrollY = window.scrollY;
			const scrollThreshold = window.innerHeight * 0.7; // Adjust the threshold as needed

			if (!isVisible && scrollY >= scrollThreshold) {
				// Add a class to the element to trigger animations
				element.classList.add("animate");

				// Trigger your GSAP animation here
				gsap.to(element, { opacity: 1, y: 0, duration: 1 });

				setIsVisible(true); // Update the state to prevent repeated animations
			}
		};

		// Add a scroll event listener
		window.addEventListener("scroll", onScroll);

		// Call the onScroll function when the component mounts to check initial visibility
		onScroll();

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, [isVisible]);

	return (
		<div
			ref={elementRef}
			className={`gsap-show ${isVisible ? "visible" : ""}`}
			style={{
				opacity: 0, // Start with the element hidden
				transform: "translateY(100px)", // Optional initial transformation
			}}
		>
			Your content goes here
		</div>
	);
}

export default GsapShow;
