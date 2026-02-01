class TrieNode{
    constructor(){
        this.childern = {};
        this.isEnd = false;
    }
}
class Trie {
    constructor(){
        this.root = new TrieNode();     
    }

    insert(word){
        const node = this.root;
        for(let ch of word){
            if(!node.childern[ch]){
                nodechildern[ch] = new TrieNode();
            }
            node = node.childern[ch];
        }
        node.isEnd = true;
    }

    search(word){
        const node = this.root;
        for(let ch of word){
            if(!node.childern[ch]) return false;
            node = node.childern[ch];
        }
        return node.isEnd === true;
    }

    startsWith(prefix){
        let node = this.root;
        for(let ch of prefix){
            if(!node.childern[ch]) return false;
            node = node.childern[ch];
        }
        return true;
    }
}



const trie = new Trie();

trie.insert("apple");
trie.insert("app");
trie.insert("bat");

console.log(trie.search("apple"));   
console.log(trie.search("app"));     
console.log(trie.search("appl"));    

console.log(trie.startsWith("app"));
console.log(trie.startsWith("ba"));  
console.log(trie.startsWith("cat")); 