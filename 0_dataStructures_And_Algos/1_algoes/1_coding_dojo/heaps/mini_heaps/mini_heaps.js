// parent is located at: Math.floor(i/ 2);
//  left child is located at : i * 2
//  right child is located at : (i * 2) + 1

class MiniHeap {
	constructor() {
		// making the index 0 to be null so making the array start at index 1 and making the calculations  of the left and right children cleaner
		this.heap = [null];
	}

	// retrieve the top(minimum number) in the heap without removing it
	top() {
		if (this.heap.length > 1) {
			return this.heap[1];
		}
		return null;
	}

	// parent is located at: Math.floor(i/ 2);
	//  left child is located at : i * 2
	//  right child is located at : (i * 2) + 1
	// inserts a new number into the heap and maintains the heaps order
	insert(num) {
		const heap = this.heap;
		heap.push(num); //adding to the heap
		if (heap.length < 2) {
			//returning the heap if is less that 2
			return heap;
		}
		// initialing variable
		let index = heap.length - 1; // No need for -1
		let swap = true;
		let temp;
		let parentLocation;
		//iterating over the heap
		while (swap && index > 1) {
			console.log(heap);
			// making the initializes variable(parentLocation) to be half the length of the heap
			parentLocation = Math.floor(index / 2); // Added index > 1 condition
			//checking to see if the parent is bigger that the child added
			if (heap[index] < heap[parentLocation]) {
				//swapping the parent and the child add
				temp = heap[parentLocation];
				heap[parentLocation] = heap[index];
				// heap[index] = temp;
				heap[index] = temp;
				index = parentLocation;
			} else swap = false; //ending the loop
		}
		return heap; //returning the whole heap
	}

	//cleaner version
	// insert(num) {
	//     const heap = this.heap;
	//     heap.push(num);

	//     let index = heap.length - 1;

	//     while (index > 1) {
	//         const parentIndex = Math.floor(index / 2);
	//         if (heap[index] < heap[parentIndex]) {
	//             [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
	//             index = parentIndex;
	//         } else {
	//             break;
	//         }
	//     }
	//     return heap;
	// }

	// insertRecursive(num, index = this.heap.length) {
	// 	if (index < 2) {
	// 		this.heap[index] = num;
	// 		return;
	// 	}

	// 	const parentIndex = Math.floor(index / 2);
	// 	if (num < this.heap[parentIndex]) {
	// 		this.heap[index] = this.heap[parentIndex];
	// 		this.insertRecursive(num, parentIndex);
	// 	} else {
	// 		this.heap[index] = num;
	// 	}
	// }

	size() {}

	// extract() {
	// 	// swap the last idx and the smallest items in he list
	// 	// ? make temp variables  that swap the last and the first items int he list
	// 	const heap = this.heap;
	// 	heap[1] = heap[heap.length - 1];
	// 	console.log(heap);
	// 	// heap[]
	// 	heap.pop();
	// 	console.log(heap);

	// 	let temp;
	// 	let swap = true;
	// 	let toSwap;
	// 	let index = 1;
	// 	// console.log(heap[index * 2 + 1]);
	// 	let smallest = Math.min(heap[index * 2], heap[index * 2 + 1]);
	// 	console.log(smallest);
	// 	// todo [ null, 1, 10, 5, 20, 14 ]
	// 	// ! compare the children first before swap
	// 	//? make a while loop // if the length if bigger than the heaps length end the loop
	// 	while (swap) {
	// 		// 	//? make and if statement that finds the smallest child
	// 		console.log(smallest);

	// 		if (heap[index * 2] === smallest) {
	// 			toSwap = index * 2;
	// 			temp = heap[toSwap];
	// 			heap[index] = heap[index * 2];
	// 			heap[index * 2] = temp;
	// 			//  = temp
	// 			index = index * 2;
	// 			console.log("it hit this");
	// 			if (heap[index * 2] === NaN) {
	// 				swap = false;
	// 			}
	// 		}

	// 		if (heap[index * 2 + 1] === smallest) {
	// 			toSwap = index * 2 + 1;
	// 			temp = heap[toSwap];
	// 			heap[index] = heap[toSwap];
	// 			heap[toSwap] = temp;
	// 			console.log(index);
	// 			index = index * 2 + 1;
	// 			console.log(index);
	// 			console.log("it hit that");
	// 			if (heap[index * 2 + 1] === NaN) {
	// 				swap = false;
	// 			}
	// 		} else {
	// 			swap = false;
	// 			// return heap;
	// 		}
	// 		smallest = Math.min(heap[index * 2], heap[index * 2 + 1]);
	// 	}
	// 	return heap;
	// 	// then check to see if the new root items in the list is smaller than its children
	// 	// compare with of its children is smaller
	// 	//? make use of the previous temp variable and assign it to be the child that is going to be swap
	// 	// then swap places with that children
	// 	// keep comparing both children  to find which one is smallest and keep swapping them  until there is no where else to swap
	// 	// ? return the heap

	// 	// edge cases
	// 	// if there is only one item in the list just remove it and return

	// 	// if the list is empty just return
	// 	// if there is only one children just compare it to that child to see if the it is smaller that the parent
	// }

	extract() {
		// storing the heap in a variable
		const heap = this.heap;

		// checking to see if the heap length is smaller or equals  to 1
		if (heap.length <= 1) return null;

		// swapping the last index with the root element /and then deleting the last element in the heap
		heap[1] = heap[heap.length - 1];
		heap.pop();

		//  initializing variables
		let index = 1; //our index
		let leftChildIdx, rightChildIdx; // left and right child
		let smallestChild; //smallest child between left and right child

		// making a loop  to swap items if needed
		while (true) {
			// assigning the left and right child are
			leftChildIdx = index * 2;
			rightChildIdx = index * 2 + 1;

			// comparing if the left child is smaller that the right child
			//and assigning smallestChild to be the smallest child between left and right child
			smallestChild =
				heap[leftChildIdx] < heap[rightChildIdx]
					? leftChildIdx //if(heap[leftChildIdx] < heap[rightChildIdx]) smallestChild =leftChildIdx
					: rightChildIdx; //else smallestChild = rightChildIdx

			// comparing the smallestChild against the first element in the heap to see if the smallestChild is smaller that the first item in the heap
			if (heap[index] > heap[smallestChild]) {
				// Swap the current element with the smallest child.
				[heap[index], heap[smallestChild]] = [
					//let temp = heap[smallestChild];
					heap[smallestChild], //  heap[smallestChild] = heap[index]
					heap[index], //  heap[index] = temp
				];
				index = smallestChild; //re assigning the index where the root is now
			} else break; //ending the loop if the root index is smaller that the smallestChild

			// checking to see if there are children left to visit
			if (leftChildIdx >= heap.length || rightChildIdx >= heap.length)
				break; // ending the loop is not
		}

		return heap; //returning the whole heap
	}

	printHorizontalTree(parentIDX = 1, spaceCnt = 0, spaceIncr = 10) {
		if (parentIDX < this.heap.length) {
			spaceCnt += spaceIncr;
			this.printHorizontalTree(parentIDX * 2 + 1, spaceCnt);
			console.log(
				" ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
					`${this.heap[parentIDX]}  (${parentIDX}) `
			);
			this.printHorizontalTree(parentIDX * 2, spaceCnt);
		}
	}
}

const mh = new MiniHeap();
console.log(mh);

mh.printHorizontalTree();
console.log(mh.top());

console.log(mh.insert(5));
console.log(mh.insert(10));
console.log(mh.insert(1));
console.log(mh.insert(20));
console.log(mh.insert(14));
mh.printHorizontalTree();
console.log(mh);
console.log(mh.extract());
