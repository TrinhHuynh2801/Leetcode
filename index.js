class Heap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  pop() {
    if (this.size() === 0) return null;
    const top = this.heap[0];
    const end = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = end;
      this.heapifyDown();
    }
    return top; // Return the single value (e.g., a number)
  }

  top() {
    return this.size() > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  empty() {
    return this.size() === 0;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (element >= parent) break;

      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = element;
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swapIndex = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swapIndex === null && rightChild < element) ||
          (swapIndex !== null && rightChild < leftChild)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;

      this.heap[index] = this.heap[swapIndex];
      index = swapIndex;
    }

    this.heap[index] = element;
  }
}

minimumMachines = (tasks) => {
  const startTimes = new Heap();
  const endTimes = new Heap();

  // Push start and end times as pairs into the heap
  for (const task of tasks) {
    startTimes.push(task); // Push the entire task [start, end] as a tuple
  }
  const [start, end] = startTimes.pop(); // Destructure the first task
  endTimes.push(end);

  while (!startTimes.empty()) {
    const [start, end] = startTimes.pop(); // Correctly destructure each task
    if (endTimes.top() <= start) {
      endTimes.pop();
    }
    endTimes.push(end);
  }

  return endTimes.size();
};

console.log(
  minimumMachines([
    [1, 3],
    [5, 7],
    [2, 4],
    [6, 8],
    [9, 11],
    [10, 12],
  ])
);
