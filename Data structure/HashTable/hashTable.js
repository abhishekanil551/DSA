// hash table (NO collisions)
class HashTable{
    constructor(size = 10){
        this.table = new Array(size).fill(null);
        this.size = 0; 
    }
    _hash(key){
        return key % this.table.length;
    }
    add(key,value){
        const index = this._hash(key);
        this.table[index] = value;
        this.size++;
    }
    get(key){
        const index = this._hash(key);
        return this.table[index];   
    }
    delete(key){
        const index = this._hash(key);
        this.table[index] = null;
        this.size--;
    }
}

const hashtable = new HashTable();
hashtable.add(12, "Alice");
hashtable.add(23, "Bob");

console.log(hashtable.get(12));