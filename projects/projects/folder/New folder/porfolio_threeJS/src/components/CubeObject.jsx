import {
	OrbitControls,
	PerspectiveCamera,
	RenderTexture,
	Text,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const CubeObject = () => {
	const textRef = useRef();
	useFrame(
		(state) =>
			(textRef.current.position.x = Math.sin(state.clock.elapsedTime))
	);
	// ! add something to make me bigger faster shape shapes rotation color  and add s text bos where the cube interacts with the person
	return (
		<mesh>
			{/* give you the geometery of a box args = width ,height, depth*/}
			<boxGeometry />
			{/* so we can change the color there is different tips of mesh materials to chose from  you will need to add  light to se the color */}
			<meshStandardMaterial color={"red"}>
				<RenderTexture attach="map">
					<PerspectiveCamera makeDefault position={[0, 0, 5]} />
					<color attach={"background"} args={["pink"]} />
					<Text fontSize={1} color="black" ref={textRef}>
						hello
					</Text>
				</RenderTexture>
			</meshStandardMaterial>
		</mesh>
	);
};

export default CubeObject;
