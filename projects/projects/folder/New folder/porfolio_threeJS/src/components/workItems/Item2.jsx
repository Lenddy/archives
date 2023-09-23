import { OrbitControls, Stage } from "@react-three/drei";
import React_logo from "./React_logo";
import { Canvas } from "@react-three/fiber";
import { styled } from "styled-components";
import Cleaning from "./Cleaning";

const Description = styled.div`
	width: 200px;
	height: 100px;
	padding: 20px;
	background-color: transparent;
	color: #da4ea2;
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

const Button = styled.button`
	background-color: #da4ea2;
	color: white;
	font-weight: 500;
	width: 100px;
	height: 30px;
	border: none;
	border-radius: 50px;
	cursor: pointer;
`;

const Item2 = () => {
	const newTab = (url) => {
		window.open(url);
	};
	return (
		<>
			<Canvas>
				{/* <React_logo /> */}
				<Stage environment={"lobby"} intensity={0.6}>
					<Cleaning />
				</Stage>
				<OrbitControls enableZoom={true} autoRotate={true} />
			</Canvas>
			<Description>
				Escobar Cleaning Services website for a small cleaning company
				in little rock Arkansas using: react and MaterialUI, AWS, Amazon
				EC2
				<br />
				<Button
					onClick={() =>
						newTab(
							"https://github.com/Lenddy/Escobar_cleaning_services"
						)
					}
				>
					View Code
				</Button>
			</Description>
		</>
	);
};

export default Item2;
