// https://leetcode.com/problems/symmetric-tree/submissions/

/* Algorithm
1. split tree into left and right subtrees
2. if left and right are empty
    return true
3. if left is empty but not right
    return false (and vice versa)
4. if at any point left != right
    return false
5. recursively check left subtree's left
    vs. right subtree's right
6. recursively check left subtree's right
    vs. right subtree's left
7. return && of both above checks

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true;
  return check(root.left, root.right);
};

var check = function (left, right) {
  if (!left && !right) return true;
  if (!left || !right) return false;
  if (left.val !== right.val) return false;
  return (check(left.left, right.right) &&
    check(left.right, right.left));
}