// https://leetcode.com/problems/merge-two-sorted-lists/

/* Algorithm
1. create a intermediate node
2. set root to the new node
3. while l1 and l2 still exist
4. check the lower val of l1, l2
5. add it to p->next
6. move p to p-> next
7. whatever remains after, just append it to p (p->next)
8. return root->next

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// [ 1 -> 2 -> 3 ]
// [ 2 -> 3 -> 4 ]
var mergeTwoLists = function(l1, l2) {
  // create an intermediate node to hold the value from
  // either l1 or l2, depending on which is lower
  let p = new ListNode();
  // set root to this new node so that we know what to return
  let root = p;
  while (l1 && l2) {
      // l1 is lower
      if (l1.val < l2.val) {
          // set the next node to a node w/ the new value
          p.next = new ListNode(l1.val);
          l1 = l1.next;
      } else {
          // don't need to add both if l1 === l2
          // since if we add one, the next time we check
          // the other will be lower
          p.next = new ListNode(l2.val);
          l2 = l2.next;
      }
      // move p to the next value
      p = p.next;
  }
  // whatever remains after, just append it to p (p->next)
  p.next = l1 || l2;
  return root.next;
};