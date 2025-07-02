const map = new Map([['a', 1], ['b', 2]]);

map.set('c',3);
console.log("Map:", map);
console.log("Get key 'b':", map.get('b'));
map.delete('b');
for(const[key,value] of map){
    console.log(`${key}:${value}`);
}
map.clear()


// Operations:
// Insert (set)	O(1)	Adds or updates key-value pair
// Delete (delete)	O(1)	Removes key
// Access (get)	O(1)	Retrieves value by key
// Search (has)	O(1)	Checks if a key exists
// Size (size)	O(1)	Returns number of entries
// Iterate	O(n)	Loops through all key-value pairs