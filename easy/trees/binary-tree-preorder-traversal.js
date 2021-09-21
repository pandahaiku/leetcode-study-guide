
// https://leetcode.com/problems/binary-tree-inorder-traversal/

//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
* @param {TreeNode} root
* @return {number[]}
*/
var preorderRecursive = function (root) {
  let output = [];
  traverseRecursive(root, output);
  return output;
};

var traverseRecursive = function (root, output) {
  if (root === null) return null;
  output.push(root.val);
  traverseRecursive(root.left, output);
  traverseRecursive(root.right, output);
}

var preorderIterative = function (root) {
  if(root === null) return [];
    let output = [];
    // iterative traversal can be done using a stack (or array in javascript)
    // set current to root of tree
    let current = root;
    // create empty stack
    let stack = [];
    // add to the stack
    stack.push(root);
    // keep going until the stack is empty since we already pushed onto stack
    while(stack.length !== 0) {
        current = stack.pop();
        output.push(current.val);
        // push the right, then left children of the popped node to stack
        // right is done first, so that when popped, the left is precessed first
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
    return output;
};

let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null)); // should output [1,3,2]

// recursive solution
console.log(preorderRecursive(root));

// iterative solution
console.log(preorderIterative(root));