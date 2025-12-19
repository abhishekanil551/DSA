// Hash Table with Open Addressing 

class HashTable{
    constructor(size = 10){
        this.table = new Array(size).fill(null);
        this.size = 0;
        this.DELETED = Symbol('DELETED');
    }
    _hash(key){
        return key % this.table.length;
    }
    add(key,value){
        let index = this._hash(key);
        while(this.table[index] !== null && this.table[index] !== this.DELETED && this.table[index][0] !== key){
            index = (index + 1) % this.table.length;
        }
        if(this.table[index] === null || this.table[index] === this.DELETED){
            this.size++;
        }
        this.table[index] = [key,value];
    }
    get(key){
        let index = this._hash(key);
        while(this.table[index] !== null){
            if(this.table[index] !== this.DELETED && this.table[index][0] === key){
                return this.table[index][1];
            }
            index = (index + 1) % this.table.length;
        }
        return null;
    }
    delete(key){
        let index = this._hash(key);
        while(this.table[index] !== null){
            if(this.table[index] !== this.DELETED && this.table[index][0] === key){
                this.table[index] = this.DELETED;
                this.size--;
                return true;
            }
            index = (index + 1) % this.table.length;
        }
        return false;
    }
}


const ht = new HashTable(5);

ht.add(12, "Alice");  
ht.add(7, "Bob");      
ht.add(17, "Charlie"); 
ht.add(22, "David");   

console.log(ht.get(17)); 

ht.delete(7);

console.log(ht.get(7));   
console.log(ht.get(17)); 
