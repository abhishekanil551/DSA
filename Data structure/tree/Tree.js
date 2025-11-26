class Node {
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

    // ------------------------------
    // INSERT (Level-order insert)
    // ------------------------------
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();

            if (!node.left) {
                node.left = newNode;
                return;
            }
            if (!node.right) {
                node.right = newNode;
                return;
            }

            queue.push(node.left, node.right);
        }
    }

    // ------------------------------
    // SEARCH
    // ------------------------------
    search(value) {
        if (!this.root) return false;

        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            if (node.value === value) return true;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return false;
    }

    // ------------------------------
    // FIND PARENT OF A NODE
    // ------------------------------
    findParent(value, node = this.root, parent = null) {
        if (!node) return null;
        if (node.value === value) return parent;

        return (
            this.findParent(value, node.left, node) ||
            this.findParent(value, node.right, node)
        );
    }

    // ------------------------------
    // DELETE NODE (replace with deepest node)
    // ------------------------------
    delete(value) {
        if (!this.root) return null;

        if (this.root.value === value && !this.root.left && !this.root.right) {
            this.root = null;
            return;
        }

        let target = null;
        let lastNode = null;
        let parentOfLast = null;
        const queue = [this.root];

        while (queue.length) {
            const node = queue.shift();

            if (node.value === value) target = node;

            if (node.left) {
                parentOfLast = node;
                lastNode = node.left;
                queue.push(node.left);
            }
            if (node.right) {
                parentOfLast = node;
                lastNode = node.right;
                queue.push(node.right);
            }
        }

        if (target) {
            target.value = lastNode.value; // replace value
            if (parentOfLast.right) parentOfLast.right = null;
            else parentOfLast.left = null;
        }
    }

    // ------------------------------
    // DFS Traversals
    // ------------------------------
    preorder(node = this.root) {
        if (!node) return [];
        return [node.value, ...this.preorder(node.left), ...this.preorder(node.right)];
    }

    inorder(node = this.root) {
        if (!node) return [];
        return [...this.inorder(node.left), node.value, ...this.inorder(node.right)];
    }

    postorder(node = this.root) {
        if (!node) return [];
        return [...this.postorder(node.left), ...this.postorder(node.right), node.value];
    }

    // ------------------------------
    // BFS
    // ------------------------------
    bfs() {
        if (!this.root) return [];
        const q = [this.root];
        const res = [];

        while (q.length) {
            const node = q.shift();
            res.push(node.value);

            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        return res;
    }

    // ------------------------------
    // HEIGHT OF TREE
    // ------------------------------
    height(node = this.root) {
        if (!node) return 0;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    // ------------------------------
    // DEPTH OF A NODE
    // ------------------------------
    depth(value, node = this.root, level = 1) {
        if (!node) return 0;
        if (node.value === value) return level;
        return (
            this.depth(value, node.left, level + 1) ||
            this.depth(value, node.right, level + 1)
        );
    }

    // ------------------------------
    // COUNT TOTAL NODES
    // ------------------------------
    count(node = this.root) {
        if (!node) return 0;
        return 1 + this.count(node.left) + this.count(node.right);
    }

    // ------------------------------
    // LEAF NODES
    // ------------------------------
    leafNodes(node = this.root, leaves = []) {
        if (!node) return leaves;

        if (!node.left && !node.right) leaves.push(node.value);

        this.leafNodes(node.left, leaves);
        this.leafNodes(node.right, leaves);

        return leaves;
    }

    // ------------------------------
    // GET LEVEL OF A NODE
    // ------------------------------
    getLevel(value) {
        return this.depth(value);
    }

    // ------------------------------
    // PRETTY PRINT TREE
    // ------------------------------
    print(node = this.root, prefix = "", isLeft = true) {
        if (!node) return;

        console.log(prefix + (isLeft ? "├── " : "└── ") + node.value);

        this.print(node.left, prefix + (isLeft ? "│   " : "    "), true);
        this.print(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }
}
