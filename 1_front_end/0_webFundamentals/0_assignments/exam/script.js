// use an array to change the banners and keep track of the one that is showing at the moment
let index = 0;
const arrBanners = [
	"./images/banner_1.jpeg",
	"./images/banner_2.jpeg",
	"./images/banner_3.jpeg",
	"./images/banner_4.jpeg",
];

let count = 0;
let change = false;

// merger the current_banner_left and current_banner_right functions
const current_banner_left = (element) => {
	let image = document.querySelector("#banner");

	if (index === 0) {
		index = arrBanners.length - 1;
	} else index--;
	console.log(index);

	image.setAttribute("src", `${arrBanners[index]}`);
	// let bottomTab = document.querySelector(`#${index}`);
	// 	console.log(element);
	// 	change = !change;
};

const current_banner_right = () => {
	let image = document.querySelector("#banner");

	if (index === arrBanners.length - 1) {
		index = 0;
	} else index++;
	console.log(index);

	image.setAttribute("src", `${arrBanners[index]}`);
};

const add_cart = () => {
	count++;
	document.querySelector("#counter").innerText = count;
	// document.querySelector(`#${index}`);
	// change = !change;
};

// const active = () => {};
