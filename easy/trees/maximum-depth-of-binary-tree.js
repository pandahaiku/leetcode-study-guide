// https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/

/* Algorithm
1. recursively check the left and right nodes
2. whenever we check we add 1
3. left and right will have their own separate max
4. take the max of left's max and right's max + 1 (for root level)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};