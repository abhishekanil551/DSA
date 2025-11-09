class StackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new StackNode(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack Underflow";
        }
        const value = this.top.value;
        this.top = this.top.next;
        this.size--;
        return value;
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.top.value;
    }

    isEmpty() {
        return this.top === null;
    }

    display() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }
        let current = this.top;
        const elements = [];
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log("Stack:", elements);
    }
}

const stack=new LinkedListStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display();
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
stack.display();