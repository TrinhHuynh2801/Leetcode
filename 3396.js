/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let ans = 0
    const isDistinct = (start) => {
        const set = new Set
        for (let i = start; i < nums.length; i++) {
            if (set.has(nums[i])) return false
            set.add(nums[i])
        }
        return true
    }
    for (let i = 0; i < nums.length; i=i+3) {
        if (isDistinct(i)) return ans
        ans++
    } 
    return ans
};