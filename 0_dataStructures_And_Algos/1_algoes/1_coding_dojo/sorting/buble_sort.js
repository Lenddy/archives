/*  
    make a function that takes in an array

    you will need to compare  the first element in the array to the one that is next to it 
    
    if the element that is next  is smaller than the previous element  then you will need to swap their positions

    you will need to use nested loops  because you wil need to iterate over every element in the array 


    the time complexity of this algo is  
    o(n^2) 

    space complexity 
    o(?)

*/

const arr = [5, 1, 43, 4, 2, 5, 11, 6, 7, 3, 50];

const bubbleSort = (num = []) => {
	if (num.length < 2) return num;

	if (isSorted(num)) {
		return num;
	}

	for (let i = 0; i < num.length - 1; i++) {
		for (let j = 0; j < num.length - 1; j++) {
			if (num[j] > num[j + 1]) {
				[num[j], num[j + 1]] = [num[j + 1], num[j]];
			}
		}
	}
	return num;
};

const bubbleSort2 = (num = []) => {
	console.log(num);
	if (num.length < 2) return num;

	if (isSorted(num)) {
		return num;
	}
	let i = 0;
	let iterations = 0;

	while (true) {
		if (num[i] > num[i + 1]) {
			[num[i], num[i + 1]] = [num[i + 1], num[i]];
		}
		if (num.length === i) {
			i = 0;
			iterations++;
		}
		if (iterations === num.length - 1) break;

		i++;
	}

	return num;
};

const isSorted = (arr = []) => {
	// helper function
	// check if the provided array is sorted or not
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}
	return true;
};

console.log(bubbleSort2(arr));
