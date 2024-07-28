//Task - 9: Write a recursive function to perform in-order traversal of a binary tree. Log the nodes as they are visited.
class TreeNode {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
function inOrderTraversal(node){
    if (node === null) return
    inOrderTraversal(node.left)
    console.log(node.value)
    inOrderTraversal(node.right)
}

function createTree(){
    let root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(3)
    root.left.left = new TreeNode(4)
    root.left.right = new TreeNode(5)
    root.right.left = new TreeNode(6)
    root.right.right = new TreeNode(7)
    return root
}

let root = createTree()

console.log("In-order traversal of the binary tree:");
inOrderTraversal(root);

//Task - 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

function calculateDepth(node){
    if (node === null) return 0

    let leftDepth = calculateDepth(node.left)
    let rightDepth = calculateDepth(node.right)
    return Math.max(leftDepth, rightDepth) + 1
}

let tree1 = createTree();

let tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.left.left = new TreeNode(3);

console.log("Depth of tree1:", calculateDepth(tree1)); //  3
console.log("Depth of tree2:", calculateDepth(tree2)); // 3
console.log("Depth of an empty tree:", calculateDepth(null)); // 0