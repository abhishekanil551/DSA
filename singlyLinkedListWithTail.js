

// Singly Linked List with Tail
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;  // keep track of last node
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Insert at beginning
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node; 
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // Insert at end (O(1) with tail)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node; 
      this.tail = node;      
    }
    this.size++;
  }

  // Insert at a given index
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  // Remove from index
  remove(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      if (this.size === 1) {
        this.tail = null; 
      }
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
      if (index === this.size - 1) {
        this.tail = prev; 
      }
    }
    this.size--;
    return removedNode.value;
  }

  // Print linked list
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += ` ${curr.value}  `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}


const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.print(); 
console.log("Tail:", list.tail.value);
console.log(list.getSize())
list.prepend(5);
list.print(); 

list.insert(15, 2);
list.print(); 

console.log("Removed:", list.remove(4)); 
list.print();
console.log("New Tail:", list.tail.value); 








