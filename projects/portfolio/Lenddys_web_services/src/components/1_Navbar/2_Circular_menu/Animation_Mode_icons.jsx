import { useState, useEffect } from "react";

const Animation_Mode_icons = ({
	AnimationsRepetitionMode,
	setAnimationsRepetitionMode,
	animation,
}) => {
	const local_storage = window.localStorage.getItem(
		"Portfolio_page_animation_toggle"
	);

	return (
		<div>
			{(local_storage === animation && animation === true) ||
			animation === "true" ||
			local_storage === true ||
			local_storage === "true" ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="circleItems"
					viewBox="0 0 512 512"
				>
					<path
						d="M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-miterlimit="10"
						stroke-width="32"
					/>
					<path d="M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z" />
				</svg>
			) : (local_storage === animation && animation === false) ||
			  animation === "false" ||
			  local_storage === false ||
			  local_storage === "false" ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="circleItems"
					viewBox="0 0 512 512"
				>
					<path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="48"
						d="M112 268l144 144 144-144M256 392V100"
					/>
				</svg>
			) : (local_storage === animation && animation === null) ||
			  (animation === "null" && local_storage === null) ||
			  local_storage === "null" ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="circleItems"
					viewBox="0 0 512 512"
				>
					<path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" />
				</svg>
			) : null}
		</div>
	);
};

export default Animation_Mode_icons;
