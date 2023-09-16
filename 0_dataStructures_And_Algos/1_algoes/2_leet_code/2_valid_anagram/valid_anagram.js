// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// let s = "rac";
// let t = "car";
// const isAnagram = (s, t) => {
// 	//we have 2 string  s and t
// 	// return true if t is an anagram of s
// 	// else return false
// 	let arr1 = s.split("");

// 	let arr2 = t.split("");
// 	console.log(arr1);
// 	console.log(arr2);
// 	let count = 0;
// 	let count2 = 0;
// 	arr1.sort();
// 	arr2.sort();
// 	console.log("______________");
// 	console.log(arr1);
// 	console.log(arr2);
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (arr1[i] === arr2[i]) {
// 			count++;
// 		}
// 		count2++;
// 	}
// 	if (count === count2) {
// 		return true;
// 	}
// 	return false;
// };

// console.log(isAnagram(s, t));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let s = "rac";
let t = "car";
const isAnagram = (s, t) => {
	if (s.length !== t.length) return false;

	const obj = {};

	for (let i = 0; i < s.length; i++) {
		obj[s[i]] = (obj[s[i]] || 0) + 1;
		obj[t[i]] = (obj[t[i]] || 0) - 1;
	}

	for (const item in obj) {
		if (item > 0) return false;
	}
	return true;
};

console.log(isAnagram(s, t));
