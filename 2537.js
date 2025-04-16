/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    let ans = 0
    let left = 0
    const pairMap = new Map
    let pair = 0
    for (let right = 0; right < nums.length; right++) {
        const num = nums[right]
        pairMap.set(num, (pairMap.get(num) || 0) + 1)
        pair += (pairMap.get(num) - 1)
        while (pair >= k) {
            ans += nums.length - right
            pair -= pairMap.get(nums[left]) - 1
            pairMap.set(nums[left], pairMap.get(nums[left]) - 1)
            left++
        }
    }
    return ans
};