// Queue using array
class ArrayQueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(x) {  // add to end
      this.items.push(x);
    }
  
    dequeue() {  // remove from front
      return this.items.shift();
    }
  
    peek() {  // see front element
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
}

  
// Queue using linked list
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class QueueLL {
    constructor() {
      this.head = this.tail = null;
    }
  
    enqueue(value) {
      const node = new Node(value);
      if (this.tail) {
        this.tail.next = node;
        this.tail = node;
      } else {
        this.head = this.tail = node;
      }
    }
  
    dequeue() {
      if (!this.head) return null;
      const val = this.head.value;
      this.head = this.head.next;
      if (!this.head) this.tail = null; // if queue becomes empty
      return val;
    }
  
    peek() {
      return this.head ? this.head.value : null;
    }
}



// Circular Queue using array
class CircularQueue {
    constructor(k) {
      this.items = Array(k);
      this.head = 0;
      this.tail = 0;
      this.size = 0;
      this.cap = k;
    }
  
    enqueue(value) {
      if (this.size === this.cap) return false; // full
      this.items[this.tail] = value;
      this.tail = (this.tail + 1) % this.cap;
      this.size++;
      return true;
    }
  
    dequeue() {
      if (this.size === 0) return null; // empty
      const val = this.items[this.head];
      this.head = (this.head + 1) % this.cap;
      this.size--;
      return val;
    }
  
    front() {
      return this.size ? this.items[this.head] : null;
    }
}
  

// circular queue using linked list
class NodeLL {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class CircularQueueLL {
    constructor(capacity) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      this.cap = capacity;
    }
  
    enqueue(value) {
      if (this.size === this.cap) return false; // full
      const node = new NodeLL(value);
      if (!this.head) {
        this.head = this.tail = node;
        node.next = this.head; // circular link
      } else {
        node.next = this.head;
        this.tail.next = node;
        this.tail = node;
      }
      this.size++;
      return true;
    }
  
    dequeue() {
      if (!this.head) return null; // empty
      const val = this.head.value;
      if (this.head === this.tail) {
        this.head = this.tail = null; // single element
      } else {
        this.head = this.head.next;
        this.tail.next = this.head;
      }
      this.size--;
      return val;
    }
  
    front() {
      return this.head ? this.head.value : null;
    }
  }
  




console.log("=== Array Queue Test ===");

const qArr = new ArrayQueue();
qArr.enqueue(10);
qArr.enqueue(20);
qArr.enqueue(30);
console.log("Peek (expect 10):", qArr.peek());
console.log("Dequeue (expect 10):", qArr.dequeue());
console.log("Dequeue (expect 20):", qArr.dequeue());
console.log("Is Empty (expect false):", qArr.isEmpty());
console.log("Dequeue (expect 30):", qArr.dequeue());
console.log("Is Empty (expect true):", qArr.isEmpty());



console.log("\n=== Linked List Queue Test ===");

const qLL = new QueueLL();
qLL.enqueue(1);
qLL.enqueue(2);
qLL.enqueue(3);
console.log("Peek (expect 1):", qLL.peek());
console.log("Dequeue (expect 1):", qLL.dequeue());
console.log("Dequeue (expect 2):", qLL.dequeue());
console.log("Peek (expect 3):", qLL.peek());
console.log("Dequeue (expect 3):", qLL.dequeue());
console.log("Dequeue on empty (expect null):", qLL.dequeue());



console.log("\n=== Circular Array Queue Test ===");

const qCircArr = new CircularQueue(3);
console.log("Enqueue 1 (expect true):", qCircArr.enqueue(1));
console.log("Enqueue 2 (expect true):", qCircArr.enqueue(2));
console.log("Enqueue 3 (expect true):", qCircArr.enqueue(3));
console.log("Enqueue 4 (expect false):", qCircArr.enqueue(4));
console.log("Dequeue (expect 1):", qCircArr.dequeue());
console.log("Front (expect 2):", qCircArr.front());



console.log("\n=== Circular Linked List Queue Test ===");

const qCircLL = new CircularQueueLL(3);
console.log("Enqueue 1 (expect true):", qCircLL.enqueue(1));
console.log("Enqueue 2 (expect true):", qCircLL.enqueue(2));
console.log("Enqueue 3 (expect true):", qCircLL.enqueue(3));
console.log("Enqueue 4 (expect false):", qCircLL.enqueue(4));
console.log("Dequeue (expect 1):", qCircLL.dequeue());
console.log("Front (expect 2):", qCircLL.front());
