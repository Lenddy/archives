import { forwardRef } from "react";

const Child = forwardRef(({}, ref) => {
	console.log(ref);
	return <div ref={ref}>Child</div>;
});

export default Child;
