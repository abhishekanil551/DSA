class  Stack{
    constructor(){
        this.items=[];
        this.top=-1;
    }
    push(element){
        return this.items[++this.top]=element;
    }
    pop(){
        if(this.isEmpty()){
            return "stack is underflow";
        }
        return this.items[this.top--];
    }
    peek(){
        if(this.isEmpty()){
            return "stack is empty";
        }
        return this.items[this.top];
    }

    isEmpty() {
        return this.top === -1;
    }
    display(){
        if(this.isEmpty()){
            return "Stack is empthy"
        }
        return console.log(this.items)
    }
}


const stack=new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display(); 
console.log(stack.pop()); 
console.log(stack.peek()); 
console.log(stack.reverse());