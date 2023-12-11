import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function GsapMagnetic({ children }) {
	const ref = useRef(null);

	useEffect(() => {
		const myRef = ref.current;
		const xTo = gsap.quickTo(myRef, "x", {
			duration: 1,
			ease: "elastic.out(2, 0.3)",
		});
		const yTo = gsap.quickTo(myRef, "y", {
			duration: 1,
			ease: "elastic.out(2, 0.3)",
		});
		const mouseMove = (e) => {
			const { clientX, clientY } = e;
			const { width, height, left, top } = myRef.getBoundingClientRect();
			const x = clientX - (left + width / 2);
			const y = clientY - (top + height / 2);
			xTo(x);
			yTo(y);
		};

		const mouseleave = (e) => {
			xTo(0);
			yTo(0);
		};

		myRef.addEventListener("mousemove", mouseMove);
		myRef.addEventListener("mouseleave", mouseleave);

		return () => {
			myRef.removeEventListener("mousemove", mouseMove);
			myRef.removeEventListener("mouseleave", mouseleave);
		};
	}, []);

	return React.cloneElement(children, { ref });
}

export default GsapMagnetic;
