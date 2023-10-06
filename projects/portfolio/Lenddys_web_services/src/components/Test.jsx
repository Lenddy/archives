// import { useEffect, useRef } from "react";

// const Test = () => {
// 	const refBox = useRef(null);
// 	const refTop = useRef(null);
// 	const refRight = useRef(null);
// 	const refBottom = useRef(null);
// 	const refLeft = useRef(null);

// 	useEffect(() => {
// 		let resizableElement = refBox.current;
// 		// for the heigh and with of the box
// 		let style = window.getComputedStyle(resizableElement);
// 		let width = parseInt(style.width, 10); //100px = 100
// 		let height = parseInt(style.height, 10); //100px = 100

// 		let xCord = 0;
// 		let yCord = 0;

// 		resizableElement.style.top = "150";
// 		resizableElement.style.left = "150";

// 		// top
// 		const onMouseMoveTopResize = (e) => {
// 			const dy = (e.clientY = yCord);
// 			height -= dy;

// 			yCord = e.clientY;
// 			resizableElement.style.height = `${height}px`;
// 		};

// 		const onMouseUpTopResize = (e) => {
// 			document.removeEventListener("mousemove", onMouseMoveTopResize);
// 		};

// 		const onMouseMoveDownTopResize = (e) => {
// 			yCord = e.clientY;
// 			const styles = window.getComputedStyle(resizableElement);
// 			resizableElement.style.bottom = styles.bottom;
// 			resizableElement.style.top = null;
// 			document.addEventListener("mousemove", onMouseMoveTopResize);
// 			document.addEventListener("mousemove", onMouseUpTopResize);
// 		};

// 		// left
// 		const onMouseMoveLeftResize = (e) => {
// 			const dx = (e.clientX = xCord);
// 			height -= dx;

// 			xCord = e.clientX;
// 			resizableElement.style.height = `${width}px`;
// 		};

// 		const onMouseUpLeftResize = (e) => {
// 			document.removeEventListener("mousemove", onMouseMoveLeftResize);
// 		};

// 		const onMouseMoveDownLeftResize = (e) => {
// 			xCord = e.clientX;
// 			const styles = window.getComputedStyle(resizableElement);
// 			resizableElement.style.right = styles.right;
// 			resizableElement.style.left = null;
// 			document.addEventListener("mousemove", onMouseMoveLeftResize);
// 			document.addEventListener("mousemove", onMouseUpLeftResize);
// 		};

// 		const resizeRight = refRight.current;
// 		// resizeRight.addEventListener("mousedown", onMouseDownRightResize)

// 		const resizeTop = refTop.current;
// 		resizeTop.addEventListener("mousedown", onMouseMoveDownTopResize);

// 		const resizeBottom = refBottom.current;
// 		// resizeBottom.addEventListener("mousedown", onMouseDownBottomResize)

// 		const resizeLeft = refLeft.current;
// 		resizeLeft.addEventListener("mousedown", onMouseMoveDownLeftResize);

// 		return () => {
// 			//             resizeRight.removeEventListener("mousedown" ,onMouseDownRigthResize)
// 			//  resizeTop.removeEventListener("mousedown", onMouseDownTopResize)
// 			// resizeBottom.removeEventListener("mousedown" onMouseDownBottomResize)
// 			// resizeLeft.removeEventListener("mousedown", onMouseDownLeftResize)
// 		};
// 	}, []);

// 	return (
// 		<div className="test">
// 			<h1 className="heading">resizable div</h1>
// 			<div className="wrapper">
// 				<div ref={refBox} className="resizable-box">
// 					<div ref={refTop} className="resizer rl"></div>
// 					<div ref={refRight} className="resizer rt"></div>
// 					<div ref={refBottom} className="resizer rr"></div>
// 					<div ref={refLeft} className="resizer rb"></div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Test;
