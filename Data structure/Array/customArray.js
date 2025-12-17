class Array{
    constructor(){
        this.length=0;
        this.data={};
    }

    getElemetAtIndex(index){
        return this.data[index]
    }
    push(element){
        this.data[this.length]=element;
        this.length++;
        return this.length;
    }
    pop(){
        const item=this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return this.data;
    }
    deleteAt(index){
        for(let i=index; i<this.length-1; i++){
            this.data[i]=this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
        return this.data
    }
    insertAt(item,index){
        for(let i=this.length-1; i>=index; i--){
            this.data[i]=this.data[i-1];
        }
        this.data[index]=item;
        this.length++;
        return this.data;
    }
}

const array = new Array(); 

// Pushing element
array.push(12);
array.push(13); 
array.push(14);
array.push(10);
array.push(989);
console.log("Print element in an array");

for (let key in array.data) {
    console.log(array.data[key]);
}

// Remove last element
console.log("Pop element in an array");
array.pop();
for (var key in array.data) {
    console.log(array.data[key]);
}

// Insert element at certain index
console.log("Inserting element at position 2");
array.insertAt(456, 2); 
for (let key in array.data) {
    console.log(array.data[key]);
}

// Delete element at certain index
console.log("deleting element at position 3");
array.deleteAt(3); 
for (let key in array.data) {
    console.log(array.data[key]);
}

// Get element present at certain inedx
console.log("Getting element at position 2");
console.log(array.getElementAtIndex(2));