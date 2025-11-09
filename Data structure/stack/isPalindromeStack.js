// Palindrome using Stack
const Stack=require('./stack');
const stack=new Stack();

function isPalindrome(str){
    for(let i=0; i<str.length; i++){
        stack.push(str[i]);
    }
    let reversed='';
    while(!stack.isEmpty()){
        reversed+=stack.pop();
    }
    return reversed===str;
}


console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));