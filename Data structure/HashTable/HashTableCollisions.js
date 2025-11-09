// Hash Table with collision handling

class HashTable{
    constructor(size){
        this.table=new Array(size);
        this.size=size;
    }

    hash(key){
        let total=0;
        for(let char of key){
            total+=char.charCodeAt(0);
        }
        return total % this.size;
    }

    set(key,value){
        const index=this.hash(key);

        if(!this.table[index]){
            this.table[index]=[];
        }

        for(let pair of this.table[index]){
            if(pair[0]==key){
                pair[1]=value;
                return;
            }
        }
        this.table[index].push([key,value]);
    }

    get(key){
        const index=this.hash(key);
        const bucket=this.table[index];

        if(!bucket) return undefined;

        for(let pair of bucket){
            if(pair[0]==key){
                return pair[1];
            }
        }
        return undefined;
    }

    delete(key){
        const index=this.hash(key);
        const bucket=this.table[index];
        if(!bucket) return false;

        const pairIndex=bucket.findIndex(pair=>pair[0]===key);
        if(pairIndex==-1)return false;

        bucket.splice(pairIndex,1);
        return true;
    }

    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i] && this.table[i].length > 0){
                console.log(i,this.table[i])
            }
        }
    }

}


const table = new HashTable(10);
table.set('name', 'Abhishek');          
table.set('mane', 'Reverse'); 
table.set('age', 23);
table.display();
console.log(table.get('name'));