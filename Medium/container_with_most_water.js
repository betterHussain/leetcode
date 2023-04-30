/**
 * @param {number[]} height
 * @return {number}
 */

// Brute force method

// let maxArea = (height) => {
//   let newMaxArea = 0
//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       newMaxArea = Math.max(
//         newMaxArea,
//         Math.min(height[i], height[j]) * (j - i),
//       )
//     }
//   }
//   return newMaxArea
// }

// 1, 8, 6, 2, 5, 4, 8, 3, 7
/**
 * 1, 8 , min = 1, mul = 1* (8-0) = 8
 * 8,7 , min = 7,  mul = 7* (8-1) = 49
 */
//  1,8 = 1 ( 0, 1) ..
//  8,6 = 6 (2 - 1)
//  8,7 = 7 (8 - 1)

// var maxArea = (height) => {
//   let l = 0;
//   let r = height.length - 1;
//   let area = 0;
//   while (l < r) {
//     console.log('l and r', r - l);
//     console.log('----', height[l], height[r]);
//     area = Math.max(area, Math.min(height[l], height[r]) * (r - l));
//     if (height[l] < height[r]) {
//       l++
//     } else {
//       r--
//     }
//   }
//   return area;
// };

var maxArea = (height) => {
    let left = 0;
    let right = height.length - 1;
    let area = 0;
    while(left<right) {
        area = Math.max(area, (Math.min(height[left], height[right]) * (right - left)));
        if(height[left] < height[right]){
            left++
        } else {
            right--
        }
    }
    return area;
  };

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
