/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0)
    if (sum % 2 != 0) return false
    const find = sum / 2
    let bits = 1
    for (let i = 0; i < nums.length; i++) {
        bits |= bits << nums[i]
    }
    return (bits >> find) & 1
};