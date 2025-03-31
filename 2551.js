/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    const splits = []
    if (k == 1) return 0
    for (let i = 0; i < weights.length-1; i++)
        splits.push(weights[i] + weights[i+1])
    splits.sort((a,b) => a - b)
    let minScore = 0, maxScore = 0
    for (let i = 0; i < k - 1; i++) {
        minScore+= splits[i]
        maxScore+= splits[splits.length - 1 - i]
    }
    return maxScore - minScore
};