import React from "react";
import { styled } from "styled-components";
import NavBar from "./NavBar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";

//???
const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		height: 200vh;
	}
`;

const Container = styled.div`
	height: 100%;
	scroll-snap-align: center;
	width: 1400px;
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

//everything from the left in the hero component
const Left = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	@media only screen and (max-width: 768px) {
		flex: 1;
		align-items: center;
	}
`;
const Title = styled.h1`
	font-size: 74px;
	@media only screen and (max-width: 768px) {
		text-align: center;
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
	@media only screen and (max-width: 768px) {
		padding: 20px;
		text-align: center;
		width: 100%;
	}
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

//everything from the right in the hero component
const Right = styled.div`
	flex: 3;
	position: relative;
	@media only screen and (max-width: 768px) {
		flex: 1;
	}
`;
const Img = styled.img`
	width: 600px;
	height: 500px;
	object-fit: contain;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	animation: animate 2s infinite ease alternate;

	@media only screen and (max-width: 768px) {
		width: 300px;
		height: 300px;
	}

	@keyframes animate {
		to {
			transform: translateY(50px);
		}
	}
`;

const Hero = () => {
	const newTab = (url) => {
		window.open(url);
	};
	return (
		// go to nav bar
		<Section>
			<NavBar />
			<Container>
				<Left>
					<Title>The place To Create Your Dream Web Page </Title>
					<WhatIDo>
						{/* <Line src="./img/line.png" /> */}
						<Subtitle>Hello There... </Subtitle>
					</WhatIDo>
					<Desc>
						{" "}
						The Name is Lenddy Morales. I enjoy creating websites
						and I also Like to make video Games, ones that suit your
						desires and needs using latest technologies and cleanest
						design patterns.
					</Desc>
					<Button
						onClick={() =>
							newTab(
								"https://docs.google.com/document/d/12vkzj7Zjqu1vzWEcVHD0i0UKJ1PYsvx41-QtacLm0os/edit?usp=share_link"
							)
						}
					>
						View Resume
					</Button>
				</Left>
				<Right>
					<Canvas>
						{/* allows you to orbit around the element and zoom in and out if it is not disable this is a comment */}
						<OrbitControls autoRotate={true} enableZoom={false} />

						{/* give light equals to every corner of the render    we can also change the intensitythis is a comment */}
						<ambientLight intensity={1} />
						<directionalLight position={[3, 2, 1]} />
						<Sphere args={[1, 100, 200]} scale={1.7}>
							<MeshDistortMaterial
								color={"#220736"}
								attach="material"
								distort={0.5}
								speed={2}
							/>
						</Sphere>
					</Canvas>
					<Img src="./img/moon.png" />
				</Right>
			</Container>
		</Section>
	);
};

export default Hero;
