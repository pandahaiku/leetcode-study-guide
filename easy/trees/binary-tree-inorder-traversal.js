
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
var inorderRecursive = function (root) {
  let output = [];
  traverseRecursive(root, output);
  return output;
};

var traverseRecursive = function (root, output) {
  if (root === null) return null;
  traverseRecursive(root.left, output);
  output.push(root.val);
  traverseRecursive(root.right, output);
}

var inorderIterative = function (root) {
  let output = [];
  // iterative traversal can be done using a stack (or array in javascript)
  // set current to root of tree
  let current = root;
  // create empty stack
  let stack = [];

  // if stack is empty, then we are done
  while (current !== null || stack.length !== 0) {
    // keep adding left node to stack until we reach null
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    // current reached null, set it to the last element
    current = stack.pop();
    // add the current "root" value to the output
    output.push(current.val);
    // check the right node
    current = current.right;
  }
  return output;
};

let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null)); // should output [1,3,2]

// recursive solution
console.log(inorderRecursive(root));

// iterative solution
console.log(inorderIterative(root));