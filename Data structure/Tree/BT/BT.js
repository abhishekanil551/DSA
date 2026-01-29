class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const node = new Node(12)
node.left = new Node(9);
node.right = new Node(18);
node.left.left = new Node(10);

// Preorder Traversal (Root → Left → Right)

function preorder(node,result = []){
    if(!node) return result;
    result.push(node.value);
    preorder(node.left,result);
    preorder(node.right,result);
    return result;
}

console.log('preorder = ',preorder(node));

// Inorder Traversal (Left → Root → Right)

function inorder(node,result = []){
    if(!node) return result;
    inorder(node.left,result);
    result.push(node.value);
    inorder(node.right, result);
    return result;
}

console.log('inorder = ',inorder(node));

// Postorder Traversal (Left → Right → Root)

function postorder(node,result = []){
    if(!node) return result;
    postorder(node.left,result);
    postorder(node.right,result);
    result.push(node.value);
    return result;
}

console.log('postorder = ',postorder(node))

// Level Order Traversal (BFS)

function levelorder(node) {
  if (!node) return [];

  const result = [];
  const queue = [node];
  let front = 0;

  while (front < queue.length) {
    const current = queue[front++];
    result.push(current.value);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return result;
}

console.log("levelorder =",levelorder(node));

// max depth

function maxdepth(node){
    if(!node) return 0;
    let left = maxdepth(node.left);
    let right = maxdepth(node.right);
    return 1 + Math.max(left,right)
}

console.log('maxdepth = ',maxdepth(node))


// Count Total Nodes

function countNodes(node){
    if(!node) return 0;
    return 1 + countNodes(node.left) + countNodes(node.right);
}

console.log('count nodes = ',countNodes(node))

// Count Leaf Nodes

function countLeafNodes(node){
    if(!node) return 0;
    if(!node.left && !node.right) return 1;
    return countLeafNodes(node.left) + countLeafNodes(node.right);
}

console.log('count Leaf Nodes = ',countLeafNodes(node))

// Check Balanced Tree

function isBalanced(root){
    function height(node){
        if(!node) return 0;
        let left = height(node.left);
        if(left === -1) return -1;
        let right = height(node.right);
        if(right === -1 ) return -1;
        if(Math.abs(left - right ) > 1) return -1;
        return 1 + Math.max(left,right);
    }
      return height(root) !== -1;
}

console.log("isBalanced = ",isBalanced(node))

// Diameter of Binary Tree

function diameter(root){
    let max = 0;
    function dfs(node){
        if(!node) return 0;
        let left = dfs(node.left);
        let right = dfs(node.right);
        max = Math.max(max,left+right);
        return 1 + Math.max(left,right)
    }
    dfs(root);
    return max;
}

console.log("diameter = ",diameter(node))

// LCA (Lowest Common Ancestor)

function lca(node, x, y) {
  if (!node) return null;

  if (node.value === x || node.value === y) return node;

  const left = lca(node.left, x, y);
  const right = lca(node.right, x, y);

  if (left && right) return node;

  return left || right;
}

