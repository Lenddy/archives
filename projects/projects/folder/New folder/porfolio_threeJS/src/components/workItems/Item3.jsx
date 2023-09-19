import { OrbitControls } from "@react-three/drei";
import React_logo from "./React_logo";
import { Canvas } from "@react-three/fiber";
import { styled } from "styled-components";

const Description = styled.div`
	width: 200px;
	height: 70px;
	padding: 20px;
	background-color: white;
	color: black;
	border-radius: 10px;
	position: absolute;
	top: 100px;
	right: 100px;
	@media only screen and (max-width: 768px) {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
`;

const Item3 = () => {
	return (
		<>
			<Canvas>
				<React_logo />
				<OrbitControls enableZoom={false} autoRotate={true} />
			</Canvas>
			{/* <Description>this is a description</Description> */}
		</>
	);
};

export default Item3;
