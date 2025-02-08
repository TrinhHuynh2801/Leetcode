var NumberContainers = function () {
  this.indexMap = new Map();
  this.numberMap = new Map();
  this.numberMap_minIndex = new Map();
};

/**
 * @param {number} index
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function (index, number) {
  if (this.indexMap.has(index)) {
    const oldNumber = this.indexMap.get(index);
    if (oldNumber == number) return;
    this.numberMap.get(oldNumber).delete(index);
    if (
      this.numberMap_minIndex.has(oldNumber) &&
      this.numberMap_minIndex.get(oldNumber) == index
    )
      this.numberMap_minIndex.delete(oldNumber);
  }
  this.indexMap.set(index, number);
  if (!this.numberMap.has(number)) {
    this.numberMap.set(number, new Set());
  }
  this.numberMap.get(number).add(index);
  if (this.numberMap_minIndex.has(number)) {
    this.numberMap_minIndex.set(
      number,
      Math.min(this.numberMap_minIndex.get(number), index)
    );
  }
};

/**
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function (number) {
  if (!this.numberMap.has(number) || this.numberMap.get(number).size == 0)
    return -1;
  if (this.numberMap_minIndex.has(number))
    return this.numberMap_minIndex.get(number);
  const minIndex = Math.min(...this.numberMap.get(number));
  this.numberMap_minIndex.set(number, minIndex);
  return minIndex;
};

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
