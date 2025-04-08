/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a,b) => a + b, 0)
    if (sum % 2 != 0) return false
    const target = sum/2
    let sumSet = new Set([0])
    for (const num of nums) { 
        const newSumSet = new Set(sumSet)
        for (const sum of sumSet) {
            if (sum + num == target) return true
            newSumSet.add(sum+num)
        }
        sumSet = newSumSet
    }
    return sumSet.has(target)
};