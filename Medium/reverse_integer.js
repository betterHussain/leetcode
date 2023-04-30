/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    console.log('math power', (Math.pow(2,31)-1))
    
    let sign = ""
    if(x<= 0) {
        sign = '-';
    }
    let str = x.toString();
    console.log('len is',str.length);
    str = [...str].reverse().join('');
    str = sign+str;
    console.log(str);
    return parseInt(str);
};

console.log(reverse(-123));