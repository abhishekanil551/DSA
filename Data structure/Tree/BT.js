class BTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert in first empty spot (level order)
    insert(value) {
        const node = new BTNode(value);
        if (!this.root) {
            this.root = node;
            return;
        }

        const q = [this.root];
        while (q.length) {
            let curr = q.shift();

            if (!curr.left) {
                curr.left = node;
                return;
            }
            if (!curr.right) {
                curr.right = node;
                return;
            }

            q.push(curr.left, curr.right);
        }
    }

    // Search (BFS)
    search(value) {
        if (!this.root) return false;

        const q = [this.root];
        while (q.length) {
            const node = q.shift();
            if (node.value === value) return true;

            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        return false;
    }

    // Delete (replace target with deepest node)
    delete(value) {
        if (!this.root) return;

        let target = null, last = null, parentOfLast = null;
        const q = [this.root];

        while (q.length) {
            let node = q.shift();

            if (node.value === value) target = node;

            if (node.left) {
                parentOfLast = node;
                last = node.left;
                q.push(node.left);
            }
            if (node.right) {
                parentOfLast = node;
                last = node.right;
                q.push(node.right);
            }
        }

        if (target) {
            target.value = last.value; 
            if (parentOfLast.right === last) parentOfLast.right = null;
            else parentOfLast.left = null;
        }
    }

    // DFS
    preorder(node = this.root, res = []) {
        if (!node) return res;
        res.push(node.value);
        this.preorder(node.left, res);
        this.preorder(node.right, res);
        return res;
    }

    inorder(node = this.root, res = []) {
        if (!node) return res;
        this.inorder(node.left, res);
        res.push(node.value);
        this.inorder(node.right, res);
        return res;
    }

    postorder(node = this.root, res = []) {
        if (!node) return res;
        this.postorder(node.left, res);
        this.postorder(node.right, res);
        res.push(node.value);
        return res;
    }

    // BFS
    bfs() {
        if (!this.root) return [];
        const q = [this.root], res = [];
        while (q.length) {
            const n = q.shift();
            res.push(n.value);
            if (n.left) q.push(n.left);
            if (n.right) q.push(n.right);
        }
        return res;
    }

    height(node = this.root) {
        if (!node) return 0;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    count(node = this.root) {
        if (!node) return 0;
        return 1 + this.count(node.left) + this.count(node.right);
    }

    leaves(node = this.root, arr = []) {
        if (!node) return arr;
        if (!node.left && !node.right) arr.push(node.value);
        this.leaves(node.left, arr);
        this.leaves(node.right, arr);
        return arr;
    }

    // Pretty print
    print(node = this.root, prefix = "", isLeft = true) {
        if (!node) return;
        console.log(prefix + (isLeft ? "├── " : "└── ") + node.value);
        this.print(node.left, prefix + (isLeft ? "│   " : "    "), true);
        this.print(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }
}
