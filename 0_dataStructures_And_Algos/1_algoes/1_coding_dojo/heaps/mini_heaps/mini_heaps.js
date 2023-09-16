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
		return -1;
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
		let index = heap.length; // No need for -1
		let swap = true;
		let temp;
		let parentLocation;
		//iterating over the heap
		while (swap && index > 1) {
			// making the initializes variable(parentLocation) to be half the length of the heap
			parentLocation = Math.floor(heap.length / 2); // Added index > 1 condition
			//cheking to see if the parent is bigger that the child added
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

	insertRecursive(num, index = this.heap.length) {
		if (index < 2) {
			this.heap[index] = num;
			return;
		}

		const parentIndex = Math.floor(index / 2);
		if (num < this.heap[parentIndex]) {
			this.heap[index] = this.heap[parentIndex];
			this.insertRecursive(num, parentIndex);
		} else {
			this.heap[index] = num;
		}
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
mh.printHorizontalTree();
