class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class BST{
    constructor(){
        this.root=null;
    }
    
    insert(value){
        const node=new Node(value)
        if(!this.root) return (this.root=node);
        let current=this.root;
        while(true){
            if(value<current.value){
                if(!current.left) return current.left=node;
                current=current.left;
            }else if(value>current.value){
                if(!current.right) return current.right=node;
                current=current.right;
            }else return ;
        }
    }

    find(value){
        let current=this.root;
        while(current){
            if(current.value==value) return current;
            current=value<current.value? current.left : current.right;
        }
        return null;
    }

    min(node=this.root){
        while(node.left) node=node.left;
        return node.value;
    }

    max(node=this.root){
        while(node.right) node=node.right;
        return node.value;
    }
    
// Inorder (LNR) → Visit Left → Node → Right
    inorder(node=this.root){
        if(!node)return [];
        return [...this.inorder(node.left),node.value,...this.inorder(node.right)]
    }

// Preorder (NLR) → Visit Node → Left → Right
    preorder(node=this.root){
        if(!node) return [];
        return [node.value,...this.preorder(node.left),...this.preorder(node.right)]
    }

// Postorder (LRN) → Visit Left → Right → Node
    postorder(node=this.root){
        if(!node) return [];
        return [...this.postorder(node.left),...this.postorder(node.right),node];
    }

// Level Order (BFS) → Visit level by level
    levelorder(){
        if(!this.root) return [];
        let res=[],q=[this.root];
        while(q.length){
            let node=q.shift();
            res.push(node.value);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        return res;
    }

    delete(value, node=this.root){
        if(!node) return null;
        if(value<node.value){
            node.left=this.delete(value,node.left);
        }else if(value>node.value){
            node.right=this.delete(value,node.right);
        }else{
            if(!node.left && !node.right) return null;
            if(!node.left) return node.right;
            if(!node.right) return node.left;
            
            let minRight=this.min(node.right);
            node.value=minRight;
            node.right=this.delete(minRight,node.right)
        }
        return node;
    }



}


const tree = new BST();
[8, 3, 10, 1, 6, 14, 4, 7, 13].forEach(x => tree.insert(x));

console.log("Before delete:", tree.levelorder());

tree.delete(6);

console.log("After delete:", tree.levelorder());

console.log("Inorder:", tree.inorder());
