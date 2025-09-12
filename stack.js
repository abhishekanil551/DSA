class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());

// STACK:-A stack is a linear data structure that follows the principle last in firs out (LIFO)

// Use Cases:
// Undo / Redo
// Browser History Back / Forward
// Function call management

// Operations:
// push() (insert)	O(1)	Add element to the top
// pop() (remove)	O(1)	Remove element from the top
// peek() / top()	O(1)	View the top element without removing
// isEmpty()	O(1)	Check if the stack is empty
// size()	O(1)	Number of elements
// Traversal	O(n)	Loop through elements (not common)
