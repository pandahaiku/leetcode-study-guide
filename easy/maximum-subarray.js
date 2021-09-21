// https://leetcode.com/problems/maximum-subarray/

/* Algorithm
1. set maxSum = nums[0]
  and currentSum = maxSum
2. loop throught the array
3. update currentSum with max of either
  a. the current nums[i] OR
  b. nums[i] + currentSum
4. set maxSum to max of maxSum and currentSum
5. return maxSum after loop finished

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  // basically, we want to keep track of a maxSum
  // and a currentSum, which we will compare and take the max
  // set the inital max to just the first element
  let maxSum = nums[0];
  let currentSum = maxSum;
  // while looping through the array
  for(let i = 1; i < nums.length; i++){
      // check the max of what you have plus nums[i] or just nums[i] itself
      currentSum = Math.max(nums[i] + currentSum, nums[i]);
      // store the max sum
      maxSum = Math.max(currentSum, maxSum);
  }
  // when you're done with the loop, we should have the subarray
  // that has the highest sum
  return maxSum;
};