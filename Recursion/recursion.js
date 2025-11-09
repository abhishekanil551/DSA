// fibonacci find use recursion

// function recursionfboncci(n){
//   if(n<2){
//     return n
//   }

//   return recursionfboncci(n-1)+recursionfboncci(n-2)
// }

// console.log(recursionfboncci(6))



// find factorial use recusion

//function recursionFactroial(n) {
//  if (n === 0) {
//    return 1;
//  }
//  return n * recursionFactroial(n - 1);
//}
//
//console.log(recursionFactroial(5));
//console.log(recursionFactroial(4));
//console.log(recursionFactroial(3);



//string reverse use recusion

//function reveres(string) {
//  if (string.length == 0) {
//    return "";
//  }
//  return string.slice(-1) + reveres(string.slice(0, string.length - 1));
//}
//
//console.log(reveres("java"));

// or

// function reveres(string){
//     if(string=='')return '';
//     return string.slice(-1)+reveres(string.slice(0,-1))
// }

// console.log(reveres('hello'))



// find Power us recusion

// function power(a,b){
//     if(b==0) return 1;
//     return a*power(a,b-1)
// }
// console.log(power(3,3));




// palindrome

// function palindrome(string){
//     if(string.length<=1)return true;
//     if(string[0]!==string[string.length-1]) return false;
//     return palindrome(string.slice(1,-1));
// }
// console.log(palindrome('malayalam'));
// console.log(palindrome('hello'));

// or

// function palindrome(string,start=0,end=string.length-1){
//     if(start>=end) return true;
//     if(string[start]!==string[end]){
//         return false
//     }
//     return palindrome(string,start+1,end-1);
// }
// console.log(palindrome('malayalam'));
// console.log(palindrome('hello'));



//replace all space in a string with hyphen
// function replace(string){
//     if(string=='')return '';
//     let first=string[0];
//     if(first==' '){
//         first='_';
//     }
//     return first+replace(string.slice(1));
// }

// console.log(replace("hello world this is me"))




// count digits

// function count(n){
//     if(n==0)return 0;
//     console.log(n);
//     return 1+count(Math.floor(n/10));
// }
// console.log(count(5));



// reverse an array

// function reverse(arr,index = 0){
//     if(index==Math.floor(arr.length/2)) return arr;
//     let temp=arr[index];
//     arr[index]=arr[arr.length-1-index];
//     arr[arr.length-1-index]=temp;
//     return reverse(arr,index+1);
// }
// console.log(reverse([1,2,3,4,5,7]));


