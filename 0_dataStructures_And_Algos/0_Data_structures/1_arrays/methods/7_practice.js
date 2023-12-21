const arr = [];
const arr2 = [[1], [2, 3], 4, [5]];

arr.length; //gives you the length of the array

arr.push(1, 2, 3, 4, 5, 6); //adds this items to the back of the  array
arr.pop(); //deletes the last item in the array

arr.unshift(-6, -5, -4, -3, -2, -1, 0); //adds this items to the beginning of the  array
arr.shift(); //deletes the first item in the array

arr.splice(arr.length / 2, 1); // allow you to delete one or multiple items anywhere in an array
arr.splice(arr.length / 2, 0, 1.5); // it allow you to add one or multiple items anywhere in an array

arr.toString(); //converts an array to a string  of (comma separated) array values.
arr.concat(arr2); //creates a new array by merging (concatenating) existing arrays
arr.join("."); //creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified character separator string
delete arr[0]; /* the delete() method deletes an item in the array and sets it to undefine.
delete Array[0] ->    [undefined,2,3,4]*/

arr2.flat(); // The flat() method creates a new array with sub-array elements concatenated to a specified depth : Flattening an array is the process of reducing the dimensionality of an array.
//  arr = [[1],[2,3],4,[5]]  arr.flat() -> [1,2,3,4,5]

console.log(arr);
console.log(arr2);
console.log(arr.concat(arr2));
