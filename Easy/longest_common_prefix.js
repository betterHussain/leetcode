//Brute Force Method

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(words) {
    if (!words[0] || words.length ==  1) return words[0] || "";
  let i = 0;
  // while all words have the same character at position i, increment i
  while(words[0][i] && words.every(w => w[i] === words[0][i]))
    i++;
  
  // prefix is the substring from the beginning to the last successfully checked i
  return words[0].substr(0, i);
};

let output = longestCommonPrefix(["flower","flow","flight"])
console.log('output is ----->', output);

/**
 * Input: strs = ["flower","flow","flight"]
    Output: "fl"

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.

    input : ["ab", "a"]
    output "a";
 */