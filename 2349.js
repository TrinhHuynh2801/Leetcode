class NumberContainers {
  constructor() {
    this.numberToIndices = new Map();
    this.indexToNumber = new Map();
  }
  change(index, number) {
    const prevNumber = this.indexToNumber.get(index);
    prevNumber !== undefined &&
      this.numberToIndices.get(prevNumber)?.enqueue(index);
    this.indexToNumber.set(index, number);

    let heap = this.numberToIndices.get(number);
    if (heap === undefined)
      this.numberToIndices.set(number, (heap = new Heap((a, b) => a - b)));
    heap.enqueue(index);
  }
  find(number) {
    const heap = this.numberToIndices.get(number);
    if (heap?.size) {
      while (heap.size) {
        if (this.indexToNumber.get(heap.front()) === number)
          return heap.front();
        heap.dequeue();
      }
    }
    return -1;
  }
}

class Heap {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator;
  }

  get size() {
    return this.heap.length;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.heap[parentIdx];
      if (this.comparator(element, parent) >= 0) break;
      this.heap[parentIdx] = element;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (this.comparator(leftChild, element) < 0) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (!swap && this.comparator(rightChild, element) < 0) ||
          (swap && this.comparator(rightChild, leftChild) < 0)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.heap[idx] = this.heap[swap];
      this.heap[swap] = element;
      idx = swap;
    }
  }

  enqueue(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  dequeue() {
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  front() {
    return this.heap[0];
  }

  toArray() {
    return this.heap;
  }
}
