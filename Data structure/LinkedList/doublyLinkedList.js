class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  class DoublyLinkedList {
    constructor() {
      this.head = null; 
      this.tail = null; 
    }
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {  
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;  
        newNode.prev = this.tail; 
        this.tail = newNode;       
      }
    }
  
    prepend(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }
  
    printForward() {
      let current = this.head;
      let result = [];
      while (current) {
        result.push(current.data);
        current = current.next;
      }
      console.log("Forward:", result.join(" <-> "));
    }
  
    printBackward() {
      let current = this.tail;
      let result = [];
      while (current) {
        result.push(current.data);
        current = current.prev;
      }
      console.log("Backward:", result.join(" <-> "));
    }

    reverse(){
      
    }
  }
  

  let dll = new DoublyLinkedList();

dll.append(10);
dll.append(20);
dll.append(30);

dll.prepend(5);

dll.printForward();   
dll.printBackward(); 
