// two sum problem

let arr=[2,1,3,4,6], target=5;
let s={};

for(let [index, num] of arr.entries()){
    if(s[num]!=undefined){
       console.log([s[num], index]);
    }
    s[target-num]=index
}
console.log(s);











