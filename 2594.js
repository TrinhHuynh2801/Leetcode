/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    let min = 1
    let max = Math.min(...ranks)*cars*cars
    const canRepair = (time) => {
        let fixedCar = 0
        for (let rank of ranks) {
            fixedCar += Math.floor(Math.sqrt(time/rank))
            if (fixedCar >= cars) return true
        }
        return false
    }
    while (min < max) {
        let mid = Math.floor((min+max)/2)
        if (canRepair(mid)) {
            max = mid
        }
        else {
            min = mid + 1
        }
    }
    return min
};