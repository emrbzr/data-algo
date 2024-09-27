
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    minNode(root) {
        if(!root) return null;
        let curr = root;
        while(curr && curr.left){ //curr.left as left side is always smaller
            curr = curr.left;
        }
        return curr;
    }
    #minNode(root) {
        return this.minNode(root);
    }
    // Recursive search method
    search(val) {
        return this.#searchRecursive(this.root, val);
    }

    #searchRecursive(root, val) {
        if (!root) return false;
        if (val > root.val) {
            return this.#searchRecursive(root.right, val);
        } else if (val < root.val) {
            return this.#searchRecursive(root.left, val);
        } else {
            return true;
        }
    }

    // Recursive insert method
    insertRecursive(val) {
        this.root = this.#insertRecursive(this.root, val);
    }

    #insertRecursive(root, val) {
        if (!root) {
            return new TreeNode(val);
        }
        if (val > root.val) {
            root.right = this.#insertRecursive(root.right, val);
        } else if (val < root.val) {
            root.left = this.#insertRecursive(root.left, val);
        }
        return root;
    }

    // Iterative insert method
    insert(val) {
        if (!this.root) {
            this.root = new TreeNode(val);
            return;
        }
        let curr = this.root;
        while (curr) {
            if (val > curr.val) {
                if (curr.right) {
                    curr = curr.right;
                } else {
                    curr.right = new TreeNode(val);
                    break;
                }
            } else if (val < curr.val) {
                if (curr.left) {
                    curr = curr.left;
                } else {
                    curr.left = new TreeNode(val);
                    break;
                }
            }
        }
    }

    remove(val) {
        this.root = this.#removeRecursive(this.root, val);
    }

    #removeRecursive(root, val) {
        if (!root) {
            return null;
        }
        if (val > root.val) {
            root.right = this.#removeRecursive(root.right, val);
        } else if (val < root.val) {
            root.left = this.#removeRecursive(root.left, val);
        } else {
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            } else {
                // Find the minimum value in the right subtree
                let midNode = this.minNode(root.right);
                // Replace the current value with the in-order successor
                root.val = midNode.val;
                // Remove the in-order successor
                root.right = this.#removeRecursive(root.right, midNode.val);
            }
        }
        return root;
    }

    inorderTraversalDFS(root) {
        let result = [];

        function inorder(root) {
            if (!root) return;
            inorder(root.left);
            result.push(root.val);
            inorder(root.right);
        }
        inorder(root);
        return result;
    }

    preorderTraversalDFS(root) {
        let result = [];

        function preorder(root) {
            if (!root) return;
            result.push(root.val);
            preorder(root.left);
            preorder(root.right);
        }
        preorder(root);
        return result;
    }

    postorderTraversalDFS(root) {
        let result = [];

        function postorder(root) {
            if (!root) return;
            postorder(root.left);
            postorder(root.right);
            result.push(root.val);
        }
        postorder(root);
        return result;
    }

    bfs(root) {
        let queue = [];
        if (root != null) {
            queue.push(root);
        }
        let level = 0;
        while(queue.length > 0) {
            console.log("level " + level + ": ");
            let levelLength = queue.length;
            for (let i = 0; i < levelLength; i++) {
                let curr = queue.shift();
                console.log(curr.val + " ");
                if(curr.left) {
                    queue.push(curr.left);
                }
                if(curr.right) {
                    queue.push(curr.right);
                }
            }
            level++;
            console.log();
        }
    }
}


let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log(bst.minNode(bst.root).val);
bst.remove(5);
console.log(bst.minNode(bst.root).val);

bst.bfs([3,9,20,15,7]);