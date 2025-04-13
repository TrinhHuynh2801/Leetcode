/**
 * @param {number | string | BigInt} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    const MOD = BigInt(1e9 + 7) 
    const even = Math.ceil(n / 2)
    const odd = n - even   

    const pow = (base, exp) => {
        let result = 1n
        base = BigInt(base)
        exp = BigInt(exp)

        while (exp > 0n) {
            if (exp % 2n === 1n) {
                result = (result * base) % MOD
            }
            base = (base * base) % MOD
            exp = exp / 2n
        }

        return result
    };

    return Number((pow(5, even) * pow(4, odd)) % MOD)
};
