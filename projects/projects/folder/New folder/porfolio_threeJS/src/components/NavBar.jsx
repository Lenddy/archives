import React, { useRef } from "react";
import { useEffect } from "react";
import { styled, keyframes } from "styled-components";
import LinkedIn_logo from "./LinkedIn_logo";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Github_Logo from "./Github_logo";
import Contact from "./Contact";

//???
const Section = styled.div`
	display: flex;

	justify-content: center;
	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;

const Container = styled.div`
	width: 1400px;
	display: flex; //child elements automatically align like column or row with auto width and auto height
	justify-content: center; // defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container
	align-items: center;
	padding: 10px 0px;

	/* @media only screen and (max-width: 768px) {
	} */
`;

const Links = styled.div`
	display: flex;
	align-items: center;
	gap: 50px; // add  a gap of the wanted px count
`;

const List = styled.ul`
	display: flex;
	gap: 100px;
	list-style: none;

	@media only screen and (max-width: 768px) {
		/* display: none; */
		padding: 5px;
		gap: 5px;
	}
`;

const ListItem = styled.li`
	cursor: pointer; //so the cursor turns to the pointer when it hovers over the wanted element
	width: 100px;
	height: 100px;
	@media only screen and (max-width: 768px) {
		/* display: none; */
		width: 50px;
		height: 50px;
	}
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const ListItem2 = styled.li`
	cursor: pointer;
	width: 140px;
	height: 140px;
	transform: translate(-50%, -50%);
	animation: ${rotate} 8s linear infinite;

	@media only screen and (max-width: 768px) {
		width: 50px;
		height: 50px;
	}
`;

const Link = styled.div``;

const Logo = styled.img`
	height: 50px;
`;
const Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 50px; // add  a gap of the wanted px count
`;
const Icon = styled.img`
	width: 20px;
	cursor: pointer;
`;

const growAndShrink = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const Button = styled.button`
	width: 100px;
	padding: 10px;
	background-color: #da4ea2;
	color: white;
	border: none;
	border-radius: 20px;
	cursor: pointer;

	animation: ${growAndShrink} 3s ease-in-out infinite;
`;

const NavBar = () => {
	const newTab = (url) => {
		window.open(url);
	};

	return (
		<Section>
			<Container>
				<Icons>
					<List>
						<ListItem
							onClick={() =>
								newTab("https://www.linkedin.com/in/lenddy/")
							}
						></ListItem>
						<ListItem2
							onClick={() => newTab("https://github.com/Lenddy")}
						></ListItem2>
					</List>
					{/* <Icon src="./img/search.png" /> */}
					<Button
						onClick={() =>
							newTab(
								"https://docs.google.com/document/d/12vkzj7Zjqu1vzWEcVHD0i0UKJ1PYsvx41-QtacLm0os/edit?usp=share_link"
							)
						}
					>
						My Resume
					</Button>
				</Icons>
			</Container>
		</Section>
	);
};

export default NavBar;
