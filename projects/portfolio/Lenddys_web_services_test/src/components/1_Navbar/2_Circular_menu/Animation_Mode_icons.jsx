import { useState, useEffect } from "react";

const Animation_Mode_icons = ({ Change_animations }) => {
	// { animations }
	const [animations, setAnimations] = useState();
	// window.localStorage.clear();
	const gls = (key) => window.localStorage.getItem(key); //!gets the key
	const sls = (key, value) => window.localStorage.setItem(key, value); //!sets the key
	//! finds out if there is a given key if not it creates one an sets it to be a value
	const Local_Storage = (getKey, setValue) => {
		if (gls(getKey) === null || gls(getKey) === undefined) {
			return sls(getKey, setValue);
		} else {
			return gls(getKey);
		}
	};

	useEffect(() => {
		//? checks for local storage
		// setLanguage(items_In_Local_Storage("DarkMode",true))
		// setHideNabar(Local_Storage("DarkMode", true));
		// setDarkMode(Local_Storage("Language", true));
		// setNavBarAnimations(Local_Storage("NavBar_Animations", true));
		// Local_Storage("Animations", true);
		// setAnimations(gls("Animations"));
		// console.log("animations is ", animations);
		console.log("this is change animations", Change_animations);
	}, [
		Change_animations,
		// animations,
		// hideNabar, darkMode,  navBarAnimations
	]);

	const animationMode = (key) => {
		// Get the current value from local storage

		const currentValue = gls(key) === "true";
		// Toggle the value (if it's a string, convert it to a boolean first)

		const newValue = currentValue === true ? false : true;

		// Update local storage
		sls(key, newValue);

		// Set the state based on the new value
		setAnimations(newValue === "true");
	};

	return (
		<div>
			{/* {animations === true ? (
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
			) : animations === false ? (
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
			) : (
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
			)} */}
		</div>
	);
};

export default Animation_Mode_icons;
