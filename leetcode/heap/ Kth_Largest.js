//  Kth Largest Element in an Array

var findKthLargest = function(nums, k) {
    const heap = new MinHeap();

    for (let num of nums) {
        heap.insert(num);

        if (heap.size() > k) {
            heap.remove();
        }
    }

    return heap.peek();
};

nums = [3,2,1,5,6,4]
k = 2

