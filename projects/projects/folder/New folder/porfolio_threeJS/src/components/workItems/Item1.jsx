import { OrbitControls, Stage } from "@react-three/drei";
import Piggy_bank from "./Piggy_bank";
import { Canvas } from "@react-three/fiber";
import { styled } from "styled-components";

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
	font-size: medium;
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
	width: 150px;
	height: 30px;
	border: none;
	border-radius: 50px;
	cursor: pointer;
`;

const Item1 = () => {
	const newTab = (url) => {
		window.open(url);
	};
	return (
		<>
			<Canvas>
				<Stage environment={"apartment"} intensity={0.6}>
					<Piggy_bank />
				</Stage>

				<OrbitControls enableZoom={true} autoRotate={true} />
			</Canvas>
			<Description>
				Inversiones Ruben Y Estevez A loans management system for a
				family company using: React, MongoDB, MaterialUI, NodeJs, and
				Socket.io.
				<br />
				<Button onClick={() => newTab("https://github.com/Lenddy/app")}>
					View Code
				</Button>
			</Description>
		</>
	);
};

export default Item1;
