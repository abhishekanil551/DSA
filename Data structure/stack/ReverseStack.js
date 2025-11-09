// Reverse a stack
const Stack=require('./stack');
const stack=new Stack();

function reverseString(str) {
    const stack = new Stack();
    
    // Push all characters to stack
    for (let char of str) {
        stack.push(char);
    }
    
    // Pop all characters to reverse
    let reversed = '';
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }
    
    return reversed;
}

// Test
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("stack")); // "kcats"

