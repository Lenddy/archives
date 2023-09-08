/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
	const set = new Set(nums);
	const isEqual = set.size === nums.length;
	return !isEqual;
};

const containsDuplicate2 = (nums) => {
	// make 2  variables that one that stores the the int that we want to compare to   and that one that will be comparing against
	let i = 0;
	let j = 1;

	//make a loop that will itearate over the array
	while (i !== null) {
		if (i >= nums.length) {
			i = null;
			return false;
		}

		if (j >= nums.length) {
			i++;
			j = i + 1;
		}
		if (j >= nums.length && i >= nums.length) {
			return false;
		}
		//make a condition that if the index of the current item that we are comparing against is bigger that the array length variable that we compara to is
		if (nums[i] === nums[j]) {
			return true;
		}

		j++;
	}
};
