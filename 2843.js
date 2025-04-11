/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    const isSymmetric = (num) => {
        const arrNum = num.toString()
        if (arrNum.length % 2 != 0) return false
        let left = 0
        let right = 0
        for (let i = 0; i < arrNum.length/2; i++) {
            left+= Number(arrNum[i])
            right+= Number(arrNum[arrNum.length - i - 1])
        }
        return left == right
    }
    let count = 0
    for (let i = low; i <= high; i++)
        if (isSymmetric(i)) count++
    return count
};