let arr = [10, 20, 30, 40, 50]; 

console.log("Access index 2:", arr[2]);
console.log("Traverse:");
arr.forEach((el) => console.log(el));
let target = 40;
let foundIndex = arr.indexOf(target);
arr.push(60);
console.log("After push:", arr);
arr.unshift(5);
console.log("After unshift:", arr);
arr.splice(3, 0, 25); 
console.log("After insert at index 3:", arr);
arr.pop();
console.log("After pop:", arr);
arr.shift();
console.log("After shift:", arr);
arr.splice(2, 1); 
console.log("After delete index 2:", arr);


// Operations:
// Access (by index)	O(1)	Constant time – direct access.
// Search (unsorted)	O(n)	Linear search if the array is not sorted.
// Search (sorted, binary)	O(log n)	If sorted, use binary search.
// Insert at end (dynamic)	O(1) avg	Amortized constant time (resizing may take O(n)).
// Insert at beginning/mid	O(n)	Need to shift elements.
// Delete from end	O(1)	Simply reduce the size.
// Delete from beginning/mid	O(n)	Need to shift elements to fill the gap.
// Traverse (loop over all)	O(n)	Required for actions like map, filter, reduce, etc.

