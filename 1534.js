/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let ans = 0
    const n = arr.length
    const isGood = (i, j, k) => {
        return Math.abs(arr[i] - arr[j]) <= a 
                && Math.abs(arr[j] - arr[k]) <= b
                && Math.abs(arr[i] - arr[k]) <= c
    }
    for (let i = 0; i < n-2; i++)
        for (let j = i+1; j < n - 1; j++)
            for (let k = j+1; k < n; k++)
                if (isGood(i,j,k)) ans++
    return ans
};