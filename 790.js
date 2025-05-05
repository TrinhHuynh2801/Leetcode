/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const MOD = 1e9 + 7
    if (n===1) return 1
    else if (n===2) return 2
    else if (n===3) return 5
    const dp = new Array(n+1).fill(0)
    dp[0] = 1
    dp[1] = 1
    dp[2] = 2
    dp[3] = 5
    for (let i = 4; i <= n; i++) {
        dp[i] = (dp[i-1]*2 + dp[i-3]) % MOD
    }
    return dp[n]
};