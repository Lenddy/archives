//! delete and flat

const Array = [[1], [2, 3], 4, [5]];

delete (
	/* the delete() method deletes an item in the array and sets it to undefine.
delete Array[0] ->    [undefined,2,3,4]*/

	Array.flat()
); // The flat() method creates a new array with sub-array elements concatenated to a specified depth : Flattening an array is the process of reducing the dimensionality of an array.
//  arr = [[1],[2,3],4,[5]]  arr.flat() -> [1,2,3,4,5]
