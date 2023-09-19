import React, { useState } from "react";

import { styled } from "styled-components";
import Item1 from "./workItems/Item1";
import Item2 from "./workItems/Item2";
import Item3 from "./workItems/Item3";

//???
const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
	position: relative;
	font-size: 14px;
	font-weight: 300;
`;
const Container = styled.div`
	width: 1400px;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
	}
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	@media only screen and (max-width: 768px) {
		padding: 20px;
		justify-content: center;
		margin-top: 250px;
		margin-right: 20px;
	}
`;
const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
const ListItem = styled.li`
	font-size: 90px;
	font-weight: bold;
	cursor: pointer;
	color: transparent;
	-webkit-text-stroke: 1px white;
	position: relative;
	&::after {
		content: "${(props) => props.text}";
		position: absolute;
		top: 0;
		left: 0;
		color: #da4ea2;
		width: 0px;
		overflow: hidden;
		white-space: nowrap;
	}

	&:hover {
		&::after {
			animation: moveText 0.5s linear both;
			@keyframes moveText {
				to {
					width: 100%;
				}
			}
		}
	}

	@media only screen and (max-width: 768px) {
		font-size: 24px;
		color: white;
		-webkit-text-stroke: 0px;
	}
`;

const Right = styled.div`
	flex: 1;
`;

const data = ["I R Y E", "E C S"];
const Works = () => {
	const [work, setWork] = useState("logo");
	return (
		<Section>
			<Container>
				<Left>
					<List>
						{data.map((item) => (
							<ListItem
								key={item}
								text={item}
								onClick={() => setWork(item)}
							>
								{item}
							</ListItem>
						))}
					</List>
				</Left>
				<Right>the comment info goes here</Right>
			</Container>
		</Section>
	);
};

export default Works;

// {work === "I R Y E" ? (
// 	<Item1 />
// ) : work === "E C S" ? (
// 	<Item2 />
// ) : (
// 	<Item3 />
// )}
