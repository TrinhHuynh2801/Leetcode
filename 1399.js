/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    const map = new Map
    const sumDigit = (number) => {
        let result = 0
        while (number != 0) {
            result += number % 10
            number= Math.floor(number/10)
        }
        return result
    }
    for (let i = 1; i <= n; i++) {
        const num = sumDigit(i)
        map.set(num, (map.get(num) || 0) + 1)
    }
    let ans = 1
    let max = 0
    for (const [_, value] of map) {
        if (value > max) {
            max = value
            ans = 1
        }
        else if (value == max) ans++
    }
    return ans
};