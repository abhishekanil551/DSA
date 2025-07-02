const set=new Set();

set.add(10);
set.add(20);
set.add(30);

console.log("Set:", set);
console.log("Has 20:", set.has(20));
set.delete(20);
console.log("After delete 20:", set);
console.log("Size:", set.size);
console.log("Traverse:");
set.forEach((el) => console.log(el));




// Operations:
// Add	O(1)	Adds a value if not already present
// Delete	O(1)	Removes a value
// Has (check exist)	O(1)	Checks if value exists
// Size	O(1)	Returns number of elements
// Iterate	O(n)	Loop through elements