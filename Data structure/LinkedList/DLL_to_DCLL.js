class Node{
    constructor(value){
        this.value=value;
        this.prev=null;
        this.next=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
    }
    
    add(value){
        const node=new Node(value);
        if(!this.head){
            this.head=node;
            return;
        }
        let current=this.head;
        while(current.next){
            current=current.next
        }
        current.next=node;
        node.prev=current;
    }
    
    intoCircular(){
        if(!this.head) return 
        let curr=this.head;
        while(curr.next){
            curr=curr.next;
        }
        curr.next=this.head;
        this.head.prev=curr;
    }
    
    display(){
        if(!this.head) return null;
        let current=this.head;
        let result='';
        do{
            result+=current.value+' ';
            current=current.next;
        }while(current!==this.head && current){
            console.log(result)
        }
    }
}


const list = new DoublyLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);

console.log("Before circular:");
list.display();

list.intoCircular();
console.log("After circular:");
list.display();











