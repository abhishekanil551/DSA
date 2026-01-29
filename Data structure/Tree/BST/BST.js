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

    Search(value){
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

    inorder(node = this.root, result = []){
        if(!root) return result;
        this.inorder(node.left , result);
        result.push(node.value);
        this.inorder(node.right, result);
        return result;
    }

    preorder(node = this.root, result = []){
        if(!root) return result;
        result.push(node.value);
        this.preorder(node.left,result);
        this.preorder(node.right,result);
        return result;
    }

    postorder(node = this.root, result = []){
        if(!root) return result;
        this.postorder(node.right, result);
        this.postorder(node.left, result);
        result.push(node.value);
        return result;
    }

}