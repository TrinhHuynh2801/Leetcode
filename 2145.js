/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
    let min = 0
    let max = 0
    let cur = 0
    for (const diff of differences) {
        cur+=diff
        min = Math.min(min, cur)
        max = Math.max(max, cur)
        if (max - min > upper - lower) return 0
    }
    return upper - lower + 1 - (max - min) 
};