/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    const n = nums.length
    const dp = new Array(n).fill(1)
    const parent = new Array(n).fill(-1)
    nums.sort((a,b)=>a-b)
    let maxLen = 1, lastIndex = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] == 0 && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1
                parent[i] = j
            }
        }
        if (maxLen < dp[i]) {
            maxLen = dp[i]
            lastIndex = i
        }
    }

    const result = []
    while (lastIndex != -1) {
        result.push(nums[lastIndex])
        lastIndex = parent[lastIndex]
    }
    return result
};