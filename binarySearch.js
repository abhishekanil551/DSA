function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // found
    } else if (arr[mid] < target) {
      start = mid + 1; // search right half
    } else {
      end = mid - 1; // search left half
    }
  }

  return -1; // not found
}

let sortedArr = [2, 5, 7, 9, 12, 15, 19, 22, 30];
console.log("Index:", binarySearch(sortedArr, 22));
// Output : found at index 5

// ⚙️ How it Works (Logic)

// Set start = 0 and end = n-1.

// Find the middle index → mid = (start + end) / 2.

// Compare arr[mid] with target:

// If arr[mid] == target → ✅ Found.

// If arr[mid] < target → Search in right half (start = mid + 1).

// If arr[mid] > target → Search in left half (end = mid - 1).

// Repeat until found or start > end (means ❌ not found).






// Recursive Binary Search

function recursion(arr, target, a = 0, z = arr.length - 1) {
  if (a > z) {
    return -1;
  }
  let mid = Math.floor((a + z) / 2);
  if (arr[mid] == target) {
    return mid;
  } else if (target < arr[mid]) {
    return recursion(arr, target, a, mid - 1);
  } else {
    return recursion(arr, target, mid - 1, z);
  }
}

let arr = [2, 5, 7, 9, 12, 15, 19, 22, 30];
console.log("Index:", recursion(arr, 15));
