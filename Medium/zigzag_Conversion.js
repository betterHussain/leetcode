/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function(s, numRows) {
//     let text = Array(numRows).fill(''), line = 0;
//     console.log('text', text);
//     const keyLoop = 2 * numRows - 2;
//     // console.log('keuloop', keyLoop);
//     if(keyLoop === 0 || s.length <= numRows) {
//         return s;
//     }

//     for(let i = 0;i < s.length;i++) {
//         line = i % keyLoop;
//         console.log(line);
//         line = line > (numRows - 1) ? (keyLoop - line) : line;
//         // console.log('val of line', line)
//         text[line] += s[i];
//         console.log('text ', text[line], '--->s of i', s[i]);
//     }
    
//     return text.join("");
// };

var convert = function(s, numRows) {
    if( numRows <= 1 ){
        return s;
    }
    let i, row = 0;
    let down = true;
    let array = Array(numRows).fill('');
    for( i = 0; i < s.length; i++ ){
        console.log('val of row', row)
        array[row] += s[i];
        if( row == 0 ){
            down = true;
        }
        if( row == numRows - 1 ){
            down = false;
        }
        down ? row++ : row--;
    }
    console.log('array', array)
    var answer = "";
    for( i = 0; i < numRows; i++ ){
        answer += array[i];
    }
    return answer;
};

console.log(convert('PAYPALISHIRING',3))
/**
 * P   A   H   N
 * A P L S I I G
 * L   I   R
 */

