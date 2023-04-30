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
var addTwoNumbers = function(l1, l2) {
    let nl1 = "";
    for(let i=l1.length-1 ;i>=0; i--) {
        nl1+= l1[i];
    }
    let nl2 = ""
    for(let i=l2.length-1 ;i>=0; i--) {
        nl2+= l2[i];
    }
    nl1 = parseInt(nl1);
    nl2 = parseInt(nl2);
    let sum = nl1 + nl2;
    sum = sum.toString();
    let arr = [];
    for(let i=sum.length - 1;i>=0;i--){
        arr.push(parseInt(sum[i]));
    }
    return arr;
};


addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])