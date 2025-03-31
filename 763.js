/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const lastIndex = {}
    for (let i = 0; i < s.length; i++)
        lastIndex[s[i]] = i
    const ans = []
    let start = 0, end = 0
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex[s[i]])
        if (i == end) {
            ans.push(end - start + 1)
            start = end + 1
        }
    }
    return ans
};