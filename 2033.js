/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    const arr = []
    for (const row of grid)
        for (const val of row)
        arr.push(val)

    arr.sort((a,b) => a - b)
    for (const num of arr) {
        if ((num - arr[0])%x != 0) return -1
    }
    let count = 0
    const med = arr[Math.floor(arr.length/2)]
    for (const num of arr) 
        count+= Math.abs(med - num)/x
    return count
};