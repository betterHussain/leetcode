/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return res;
    let sorted = nums.sort((a,b) => a-b);
    console.log('sorted', sorted);
    let arr = [];
    for(let i=0;i<sorted.length;i++) {
        let num = sorted[i];
        for(let k=i+1;k<sorted.length;k++) {
            console.log('num+ sorted[k] + sorted[k+1]', num+ sorted[k] + sorted[k+1])
            if((num+ sorted[k] + sorted[k+1]) == 0 && arraysEqual(arr[0],[num, sorted[k] , sorted[k+1]]) == false) {
                arr.push([num,sorted[k], sorted[k+1]]);
            }
        }
    }
    return arr;
};

function arraysEqual(a, b) {
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

// console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([-2,0,1,1,2]));
// console.log(arraysEqual([1,2,3],[1,2,3]))
// firstloop
// 2,
// 1,0
// 0,-1,
// -1,-1
// -1,-4

// 1
// 0,-1
// -1,-1
// -1,-4

// 0
// -1,-1
// -1,-4
