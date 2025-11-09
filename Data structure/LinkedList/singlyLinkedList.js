// Singly Linked List implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class DoublyNode {
  constructor(value){
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}



class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }


// O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }


// o(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        // fixed
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  remove(index){
    if(index<0 || index>=this.size){
        return null
    }
    let removeNode
    if(index==0){
        removeNode=this.head
        this.head=this.head.next
    }else{
        let prev=this.head
        for(let i=0; i<index-1 ; i++){
            prev=prev.next
        }
        removeNode=prev.next
        prev.next=removeNode.next
    }
    this.size--
    return removeNode.value
  }

  removeValue(value){
    if(this.isEmpty()){
        return null
    }
    if(this.head.value===value){
        this.head=this.head.next
        this.size--
        return value
    }else{
        let prev=this.head
        while(prev.next && prev.next.value !== value){
            prev=prev.next
        }
        if(prev.next){
            let removeNode=prev.next
            prev.next=removeNode.next
            this.size--
            return value
        }
        return null
    }
  }

  search(value){
    if(this.isEmpty()){
        return -1
    }
    let i=0
    let curr=this.head
    while(curr){
        if(curr.value === value){
            return i
        }
        curr=curr.next
        i++
    }
    return -1
  }

  removeAt(index){
    if(index<0 || !this.head)return null;
    let current=this.head;
    
    if (index === 0) {
    this.head = current.next;
    return current.value;
    }
    
    let prev=null;
    let count=0;
    while(count<index && current){
        prev=current;
        current=current.next;
        count++;
    }
    if(!current){
        return null;
    }
    prev.next=current.next;
    this.size--;
    return current.value;
  }
  
  fromArray(arr){
      if(arr.length==0) return;
      for(let value of arr){
          this.append(value);
      }
  }
  
  
  toArray(){
      if(!this.head)return null;
      let arr=[];
      let current=this.head;
      while(current){
          arr.push(current.value);
          current=current.next;
      }
      return arr;
  }
  
  removeDuplicates(){
      if(!this.head) return
      let seen=new Set();
      let current=this.head;
      let prev=null;
      while(current){
          if(seen.has(current.value)){
              prev.next=current.next;
              this.size--;
          }else{
              seen.add(current.value);
              prev=current;
          }
          current=current.next
      }
  }

  reverse(){
      let current=this.head;
      let prev=null;
      let next=null;
      while(current){
          next=current.next;
          current.next=prev;
          prev=current;
          current=next;
      }
      this.head=prev;
  }

  singlyToDubly(){
    if(!this.head) return null;
    let prewise=null;
    let current=this.head;
    this.doubleHead = null; 

    while(current){
      let node=new DoublyNode(current.value);
      node.prev=prewise;
      if(prewise)prewise.next=node;
      prewise=node;
      current=current.next;
      if(!this.doubleHead)this.doubleHead=node;
    }
    return this.doubleHead
  }

  printDoubly() {
    if(!this.doubleHead) return console.log("Doubly list is empty");
    let curr = this.doubleHead;
    let result = "";
    while(curr) {
        result += ` ${curr.value} `;
        curr = curr.next;
    }
    console.log(result);
  }


  print() {
    if (this.isEmpty()) {
      console.log("is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += ` ${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
console.log("is Empty", list.isEmpty());
console.log("its size", list.getSize());
list.print();

list.insert(10, 0);
list.print();

list.insert(20, 1);
list.print();

list.insert(30, 2);
list.print();

console.log(list.remove(2))
list.removeValue(20)

list.insert(15, 1);
list.print();

console.log(list.search(15))

list.reverse()
list.print()

list.singlyToDubly();
list.printDoubly(); 





