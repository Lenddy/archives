// import Language from "../../assets/circular_menu_items/language.svg";

const Change_language = () => {
	/* make the btn say the words in Spanish if the site is in english and english is the page is on Spanish */

	// make the page language render base on the persons device

	return (
		<>
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
					stroke-width="32"
					d="M48 112h288M192 64v48M272 448l96-224 96 224M301.5 384h133M281.3 112S257 206 199 277 80 384 80 384"
				/>
				<path
					d="M256 336s-35-27-72-75-56-85-56-85"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="32"
				/>
			</svg>
		</>
	);
};

export default Change_language;
