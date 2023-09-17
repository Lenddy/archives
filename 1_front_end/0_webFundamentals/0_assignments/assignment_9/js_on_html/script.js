// where we right our js logic
let count = 1;
const counter = (element) => {
	count++;
	// telling html to update it self with what ever js tells it to update with
	console.log(count);
	console.log(element);
	// element.innerText = count;
	element.innerText++;
	// document.querySelector("#1").innerText++;
};

const like_counter = () => {
	document.querySelector("#number").innerText++;
};

const over = (element) => {
	element.style.backgroundColor = "red";
};

const out = (element) => {
	element.style.backgroundColor = "green";
};
// const move = (element) => {
// 	element.style.backgroundColor = "purple";
// };
