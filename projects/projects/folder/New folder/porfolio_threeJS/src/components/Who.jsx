import React from "react";
import { styled } from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CubeObject from "./CubeObject";

//???
const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	width: 1400px;
	display: flex;
	justify-content: center;
`;

//everything from the left in the hero component
const Left = styled.div`
	flex: 1;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

//everything from the right in the hero component
const Right = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	@media only screen and (max-width: 768px) {
		align-items: center;
		text-align: center;
	}
`;

const Title = styled.h1`
	font-size: 74px;
	@media only screen and (max-width: 768px) {
		font-size: 60px;
	}
`;

const WhatIDo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Line = styled.img`
	height: 5px;
`;

const Subtitle = styled.h2`
	color: #da4ea2;
`;

const Desc = styled.p`
	font-size: 24px;
	color: lightgray;
`;

const Button = styled.button`
	background-color: #da4ea2;
	color: white;
	font-weight: 500;
	width: 100px;
	height: 50px;
	border: none;
	border-radius: 50px;
	cursor: pointer;
`;

const Who = () => {
	const newTab = (url) => {
		window.open(url);
	};
	return (
		<Section>
			<Container>
				<Left>
					<Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
						{/* allows you to orbit around the element and zoom in and out if it is not disable this is a comment */}
						<OrbitControls
							autoRotate={true}
							autoRotateSpeed={20}
							enableZoom={true}
						/>

						{/* give light equals to every corner of the render    we can also change the intensity */}
						<ambientLight intensity={1} />
						<directionalLight position={[3, 2, 1]} />
						<CubeObject />
						{/* allow the colore to be change 
						 decide if it will change  when the user move the cube around and zoom in and out 
						 or they will have a box to chose from  this is a comment */}
					</Canvas>
				</Left>
				<Right>
					<Title>I am Lenddy Morales </Title>
					<WhatIDo>
						<Line src="./img/line.png" />
						<Subtitle> Think out the square space </Subtitle>
					</WhatIDo>
					<Desc>
						I'm a 19-year-old with a deep passion for software
						development. I'm always eager to expand my horizons by
						learning new software and staying ahead of the curve.
						When I'm not pursuing my software endeavors, I find joy
						in both creating and playing video games. They allow me
						to explore my imagination and immerse myself in
						captivating virtual worlds.
						<br /> <br /> As a Coding Bootcamp graduate, I
						understand the challenges of staying up to date in the
						ever-changing world of software. I have constantly
						learned new things such as programming languages,
						frameworks, libraries, and more. I have hands-on
						experience working both in teams and as an individual.
						This experience has been transformative, opening up new
						possibilities for me in the world of technology. With my
						diverse interests and unquenchable thirst for knowledge,
						I'm excited to embark on an extraordinary journey of
						growth and discovery
					</Desc>
					<Button onClick={() => newTab("https://github.com/Lenddy")}>
						{" "}
						see my work{" "}
					</Button>
				</Right>
			</Container>
		</Section>
	);
};

export default Who;
