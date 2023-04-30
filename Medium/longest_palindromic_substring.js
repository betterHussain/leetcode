/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length < 1 || s === null) return '';
    let longest = '';
    for(let i=0;i<s.length;i++) {
        let oddPalindrome = expandFromCenter(s, i ,i);
        let evenPalindrome = expandFromCenter(s, i -1, i);

        if(oddPalindrome.length > longest.length) {
            longest = oddPalindrome
        }
        if(evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }
    return longest;

};

function expandFromCenter(str, left, right) {
    let i = 0;
    while(str[left - i] && str[left - i] === str [right + i]) {
        i++;
    }
    i--;
    return str.slice(left - i, right + i + 1);
}


console.log(longestPalindrome('abbagdf')); // cbbd // abbagdf acddcalmn //
/**
 * babad
 * b
 */