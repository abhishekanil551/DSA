// Singly Linked List implementation

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size == 0;
//   }

//   getSize() {
//     return this.size;
//   }

//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }

//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       prev.next = node;
//     }
//     this.size++;
//   }

//   insert(value, index) {
//     if (index < 0 || index > this.size) {
//       return;
//     }

//     if (index === 0) {
//       this.prepend(value);
//     } else {
//       const node = new Node(value);
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         // fixed
//         prev = prev.next;
//       }
//       node.next = prev.next;
//       prev.next = node;
//       this.size++;
//     }
//   }

//   remove(index){
//     if(index<0 || index>=this.size){
//         return null
//     }
//     let removeNode
//     if(index==0){
//         removeNode=this.head
//         this.head=this.head.next
//     }else{
//         let prev=this.head
//         for(let i=0; i<index-1 ; i++){
//             prev=prev.next
//         }
//         removeNode=prev.next
//         prev.next=removeNode.next
//     }
//     this.size--
//     return removeNode.value
//   }

//   removeValue(value){
//     if(this.isEmpty()){
//         return null
//     }
//     if(this.head.value===value){
//         this.head=this.head.next
//         this.size--
//         return value
//     }else{
//         let prev=this.head
//         while(prev.next && prev.next.value !== value){
//             prev=prev.next
//         }
//         if(prev.next){
//             let removeNode=prev.next
//             prev.next=removeNode.next
//             this.size--
//             return value
//         }
//         return null
//     }
//   }

//   search(value){
//     if(this.isEmpty()){
//         return -1
//     }
//     let i=0
//     let curr=this.head
//     while(curr){
//         if(curr.value === value){
//             return i
//         }
//         curr=curr.next
//         i++
//     }
//     return -1
//   }

//   reverse(){
//     let prev=null
//     let curr=this.head
//     while(curr){
//         let next=curr.next
//         curr.next=prev
//         prev=curr
//         curr=next
//     }
//     this.head=prev
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("is empty");
//     } else {
//       let curr = this.head;
//       let listValues = "";
//       while (curr) {
//         listValues += ` ${curr.value} `;
//         curr = curr.next;
//       }
//       console.log(listValues);
//     }
//   }
// }

// const list = new LinkedList();
// console.log("is Empty", list.isEmpty());
// console.log("its size", list.getSize());
// list.print();

// list.insert(10, 0);
// list.print();

// list.insert(20, 1);
// list.print();

// list.insert(30, 2);
// list.print();

// console.log(list.remove(2))
// list.removeValue(20)

// list.insert(15, 1);
// list.print();

// console.log(list.search(15))

// list.reverse()
// list.print()







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
      this.tail = node; // when only 1 node, head & tail are same
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
      this.tail.next = node; // link old tail → new node
      this.tail = node;      // update tail
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
        this.tail = null; // if list becomes empty
      }
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
      if (index === this.size - 1) {
        this.tail = prev; // update tail if last node removed
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
        listValues += curr.value + " ";
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

// --- Testing ---
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print(); // 10 20 30
console.log("Tail:", list.tail.value); // 30

list.prepend(5);
list.print(); // 5 10 20 30

list.insert(15, 2);
list.print(); // 5 10 15 20 30

console.log("Removed:", list.remove(4)); // removes 30
list.print(); // 5 10 15 20
console.log("New Tail:", list.tail.value); // 20







