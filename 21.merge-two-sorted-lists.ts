/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start

//Definition for singly-linked list.
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let listNode = new ListNode();
    let result = listNode;
    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            result.next = list1;
            list1 = list1.next;
        }else{
            result.next = list2;
            list2 = list2.next;
        }
        result = result.next;
    }
    result.next = list1 !== null ? list1 : list2;
    return listNode.next;
};
// @lc code=end

