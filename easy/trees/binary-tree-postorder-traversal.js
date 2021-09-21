
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
  traverseRecursive(root.left, output);
  traverseRecursive(root.right, output);
  output.push(root.val);
}

var preorderIterative = function (root) {
  let stack = [];
  let output = [];
  // Check for empty tree
  if (root == null)
    return output;
  stack.push(root);
  let current = null;
  while (stack.length != 0) {
    current = stack[stack.length - 1];
    /* go down the tree in search of a leaf an if so process it
    and pop stack otherwise move down */
    if (current == null ||
      current.left == current ||
      current.right == current) {
      if (current.left != null)
        stack.push(current.left);
      else if (current.right != null)
        stack.push(current.right);
      else {
        stack.pop();
        output.push(current.val);
      }
      /* go up the tree from left node, if the child is right
      push it onto stack otherwise process parent and pop
      stack */
    }
    else if (current.left == current) {
      if (current.right != null)
        stack.push(current.right);
      else {
        stack.pop();
        output.push(current.val);
      }
      /* go up the tree from right node and after coming back
      from right node process parent and pop stack */
    }
    else if (current.right == current) {
      stack.pop();
      output.push(current.val);
    }
    current = current;
  }
  return output; 1
};

let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null)); // should output [1,3,2]

// recursive solution
console.log(preorderRecursive(root));

// iterative solution
console.log(preorderIterative(root));