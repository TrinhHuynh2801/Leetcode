/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let ans = "1"
    if (n == 1) return ans
    const createRLE = () => {
        let count = 1
        let result = ""
        for (let i = 1; i < ans.length; i++) {
            if (ans[i] == ans[i-1]) count++
            else {
                result+= count + ans[i-1]
                count = 1
            }
        }
        result+= count + ans[ans.length - 1]
        return result

    }
    for (let i = 0; i < n - 1; i++) {
        ans = createRLE()
    }
    return ans
};