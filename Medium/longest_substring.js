/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let maxLength = 0;
    let start = 0;
    for(let end = 0; end < s.length; end ++) {
        let lastchar = s[end];
        if(lastchar in map) {
            // console.log('map[lastchar]', map[lastchar]);
            start = Math.max(start, map[lastchar] + 1);
        }
        map[lastchar] = end; // p:0, w:1,w:
        maxLength = Math.max(maxLength, end - start + 1); // 1, 2, 2, 2, 3
        console.log(end,'   ',s[end], '   start  ', start, '   maxlength  ', maxLength);
        // console.log('start', start);
        // console.log('maxLength', maxLength);
    }
    return maxLength;
};


// input = pwwkew, abcabcbb, bbbbb

// let lengthOfLongestSubstring = function(s) {
//     // res should be str and length of str
//     let lengthOfString = s.length;
//     let obj = {};
//     let start = 0;
//     let newStr = "";
//     for(let i = 0; i < s.length; i ++) {
//         if(obj[s[i]] == undefined) {
//             obj[s[i]] = i;
//         } else {
//                 obj = {};
//                 obj[s[i]] = i;
//             // console.log( newStr, newStr.length + 1÷);
//             // delete obj[s[start]];
//             // start ++
//         }
//     }
//     return Object.keys(obj).length;
// };

console.log(lengthOfLongestSubstring('abcabcbb'));
// pwwkew

