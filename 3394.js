/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function(n, rectangles) {
    const x = []
    const y = []
    for (const [startx, starty, endx, endy] of rectangles) {
        x.push([startx, endx])
        y.push([starty, endy])
    } 
    const canCut = (arr) => {
        arr.sort((a,b) => a[0] - b[0])
        let cut = -1
        let edge = -1
        for (const [start, end] of arr) {
            if (start >= edge) cut++
            edge = Math.max(edge, end)
        }
        return cut >= 2
    }
    return canCut(x) || canCut(y)
};