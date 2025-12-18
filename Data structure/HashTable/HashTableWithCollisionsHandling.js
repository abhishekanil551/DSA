// Hash Table WITH collision handling 
// Use Separate Chaining

class HashTable {
    constructor(size = 10){
        this.table = new Array(size);
        this.size = 0; 
    }
    _hash(key){
        return key % this.table.length;
    }
    add(key,value){
        const index = this._hash(key);
        if(!this.table[index]){
            this.table[index] = [];
        }
        for(let pair of this.table[index]){
        if(pair[0] == key){
            pair[1] = value;
            return;
        }            
        }
        this.table[index].push([key,value]);
        this.size ++;
    }
    get(key){
        const index = this._hash(key);
        const bucket = this.table[index]
        if(!bucket) return null;
        for(let pair of bucket){
            if(pair[0] == key ){
                return pair[1];
            }
        }
        return null;
    }
    delete(key){
        const index = this._hash(key);
        const bucket = this.table[index];
        if(!bucket) return false;
        for(let i = 0; i < bucket.length; i++){
            if(bucket[i][0] == key){
                bucket.splice(i,1);
                this.size--;
                return true;
            }
        }
        return false;
    }
}