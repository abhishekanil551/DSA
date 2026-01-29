class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else if(value > current.value){
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }else{
                return this
            }
        }
    }

    search(value){
        let current = this.root;
        while(current !== null){
            if(value === current.value) return true;
            if(value < current.value) current = current.left;
            else current = current.right;
        }
        return false;
    }

    delete(value){
        this.root = this._deleteNode(this.root, value);
        return this;
    }
    _deleteNode(node,value){
        if(!node) return null;
        if(value < node.value){
            node.left = this._deleteNode(node.left , value);
            return node;
        }
        if(value > node.value){
            node.right = this._deleteNode(node.right , value);
            return node;
        }

        // Case 1: No child
        if(!node.right && !node.left){
            return null;
        }
        // Case 2: One child
        if(!node.left) return node.right;
        if(!node.right) return node.left;

        // Case 3: Two children
        let successor = node.right;
        while(successor.left !== null){
            successor = successor.left;
        }
        node.value = successor.value;
        node.right = this._deleteNode(node.right, successor.value);
        return node;
    }

    // TRAVERSALS
    // Left → Root → Right
    inorder(node = this.root, result = []){
        if(!node) return result;
        this.inorder(node.left , result);
        result.push(node.value);
        this.inorder(node.right, result);
        return result;
    }

    //  Root → Left → Right
    preorder(node = this.root, result = []){
        if(!node) return result;
        result.push(node.value);
        this.preorder(node.left,result);
        this.preorder(node.right,result);
        return result;
    }


    // Left → Right → Root
    postorder(node = this.root, result = []){
        if(!node) return result;
        this.postorder(node.left, result);
        this.postorder(node.right, result);
        result.push(node.value);
        return result;
    }


}

// a tree looks like a BST doesn’t mean it is one.
function validateBST(root){
    function dfs(node, min , max){
        if(!node) return true;
        if(node.value <= min || node.value >= max) return false;
        return (
            dfs(node.left, min , node.value )&& dfs(node.right, node.value , max)
        );
    }
    return dfs(root , -Infinity , Infinity);
}

function closestValue(root, target){
    let current = root;
    let closest = root.value;
    while(current !== null){
        if(Math.abs(target - current.value) < Math.abs(target - closest)){
            closest = current.value;
        }
        if(target < current.value) current = current.left;
        else if(target > current.value) current = current.right;
        else break;
    }
    return closest;
}


const bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(20);

console.log("Inorder (sorted):", bst.inorder()); 
console.log("Preorder:", bst.preorder());
console.log("Postorder:", bst.postorder());

console.log("Search 7:", bst.search(7));  
console.log("Search 99:", bst.search(99));

console.log("Validate BST:", validateBST(bst.root)); 

console.log("Closest to 13:", closestValue(bst.root, 13)); 

bst.delete(15);
console.log("After delete 15:", bst.inorder());

bst.delete(10);
console.log("After delete 10:", bst.inorder());