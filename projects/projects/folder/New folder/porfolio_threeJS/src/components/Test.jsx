import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import CubeObject from "./CubeObject";

/*
using three js to make 3d objects 

you need  install 3 dependencies 
npm i three @react-three/fiber @react-three/drei


*/

const Container = styled.div`
	height: 100vh;
	width: 100%;
	scroll-snap-align: center;
`;

const Test = () => {
	return (
		<Container>
			{/* think of this as your scene from unity  this is the space where you can see the changes   */}
			{/* this allows yo to use three js elements  just like html but html element  inside of the Canvas component will break the page  */}
			<Canvas>
				{/* allows you to orbit around the element and zoom in and out if it is not disable */}
				<OrbitControls enableZoom={false} autoRotate={true} />

				{/* give light equals to every corner of the render    we can also change the intensity*/}
				<ambientLight intensity={1} />
				<directionalLight position={[3, 2, 1]} />
				<CubeObject />
			</Canvas>
		</Container>
	);
};

export default Test;
