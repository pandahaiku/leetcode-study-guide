// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

/* Algorithm
1. start = 0, end = array.length-1
    mid = (start + end)/2
2. Create a Node with mid as Root
3. Recursively do steps 4 and 5
4. Make mid of left subarray 
    the root of the left subtree
5. Make mid of right subarray 
    the root of the right subtree


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums === null) return null;
  let root = helper(nums, 0, nums.length - 1);
  return root;
};

var helper = function (nums, low, high) {
  // high becomes negative
  if (low > high) {
    return null;
  }
  let midpoint = low + Math.floor((high - low) / 2);
  let node = new TreeNode(nums[midpoint]);
  node.left = helper(nums, low, midpoint - 1);
  node.right = helper(nums, midpoint + 1, high);
  return node;
}