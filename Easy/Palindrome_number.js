/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    str = str.split('').reverse().join('');
    str = parseInt(str)
    return str === x;
};

console.log(isPalindrome(121));