import { useRef } from "react";
import Child from "./Child";

const Parent = () => {
	const myRef = useRef(null);

	return <Child ref={myRef} />;
};

export default Parent;
