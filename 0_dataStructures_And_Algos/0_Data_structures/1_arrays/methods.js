const arr = [1, 2, 3, "lenddy"];

//Basic array methods
//push,unshift, pop, shift

//! push()
//adds a an item to the end of the array
arr.push(4); //[1,2,3,"Lenddy",4]

//! unshift()
//adds an item to the beginning of the array
arr.unshift(0); // [0,1,2,3,"Lenddy",4]

//! pop();
//deletes the last item in the array
arr.pop(); //[0,1,2,3,"Lenddy"]

//! shift();
//deletes the first item in the array
arr.shift(); //[1,2,3,"Lenddy"]

// arrays are iterable meaning that you ca use a for of loop to log or access all the items in the array
for (const item of arr) {
	//if you know python this is a python loop
	console.log(item);
}

// advance methods
// map, filter, reduce ,concat, slice, splice

//map()
// creates a new array  and lets you manipulate the data in that array

const mapArr = arr.map((item, index, arr) => {
	return item;
});

console.log(mapArr);

//filter()
// filters information and returns a new array with that filter information

const filterArr = arr.filter((item, idx) => {
	return item < 3;
});

console.log(filterArr);

//reduce()
//creates a new array and takes an array of values (any values) and reduces it to one value(it can be an object{} or an array )

//this is a better foreach loop
const reduceArr = arr.reduce((total, item) => {
	return total + item;
}, 0);

console.log("this is the reduce", reduceArr);
