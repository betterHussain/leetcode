
let twoSum = (nums, target) => {
    var map = {};
    for(var i=0;i< nums.length;i++) {
        var value = nums[i];
        var complementPair = target - value;
        // console.log(complementPair);
        console.log('complete pair',map[complementPair]);
        if(map[complementPair] != undefined) {
            return [map[complementPair], i];
        } else {
            map[value] = i;
            console.log('map',map);
        }
    }
}

// let result = twoSum([1,5,9], 10)
let result = twoSum([2,7,11,15], 9)

console.log(result);