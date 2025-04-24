/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    const distinct = new Set
    for (const num of nums) {
        distinct.add(num)
    }
    const distinctCount = distinct.size
    const distinctSubCount = new Map
    let left = 0
    let ans = 0
    for (let right = 0; right < nums.length; right++) {
        const num = nums[right]
        distinctSubCount.set(num, (distinctSubCount.get(num) || 0) + 1)
        while (distinctSubCount.size === distinctCount) {
            const topNum = nums[left]
            ans+= nums.length - right
            distinctSubCount.set(topNum, distinctSubCount.get(topNum) - 1)
            left++
            if (distinctSubCount.get(topNum) === 0) distinctSubCount.delete(topNum)
        }
    }
    return ans
};