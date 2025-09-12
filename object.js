let person = {
  name: "Alice",
  age: 25,
  city: "Delhi",
};

console.log("Name:", person.name);
person.country = "India";
console.log("After insert:", person);
person.age = 26;
console.log("After update age:", person);
delete person.city;
console.log("After delete city:", person);
console.log("Has key 'name'? :", "name" in person);
const hasValue = Object.values(person).includes("India");
console.log("Has value 'India'? :", hasValue);
console.log("Traverse object:");
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Operations:
// Insert (add key)	O(1)	Constant time
// Remove (delete key)	O(1)	Constant time
// Access (get value)	O(1)	Constant time
// Search for key	O(1)	Constant time (using key)
// Search for value	O(n)	Linear time (must check all values)
// Traverse keys/vals	O(n)	n = number of keys
