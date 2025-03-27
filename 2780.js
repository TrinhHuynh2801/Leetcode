/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
    const freq = new Map
    for (const num of nums)
        freq.set(num, (freq.get(num) || 0) + 1)
    const n = nums.length
    let dominantFreqRight = 0
    let dominantFreqLeft = 0
    let dominant = null
    for (const [key, value] of freq)
        if (value*2>n && value > dominantFreqRight) {
            dominant = key
            dominantFreqRight = value
        }
    if (dominant == null) return -1
    for (let i = 0; i < n - 1; i++) {
        const leftLength = i + 1
        const rightLength = n - leftLength
        if (nums[i] == dominant) {
            dominantFreqLeft++
            dominantFreqRight--
        }
        if (2*dominantFreqLeft > leftLength && 
            2*dominantFreqRight > rightLength)
            return i
    }
    return -1
};