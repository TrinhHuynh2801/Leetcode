/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    const map = new Map
    let minRabbit = 0
    for (let ans of answers) {
        map.set(ans, (map.get(ans) || 0) + 1)
        if (map.get(ans) == 1) minRabbit+= ans + 1
        if (map.get(ans) == ans + 1) {
            map.set(ans, 0)
        }
    }
    return minRabbit
};