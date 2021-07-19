# Binary Heaps

- Binary heaps are a type of heap, which is another category of trees
- Everything that applies to trees in general, applies to heaps
- Many types of heaps: fibonacci, leftist, soft, etc
- We'll focus on binary heaps, two different types: min and max
- **MaxBinaryHeap**: parent nodes are always larger than child nodes
- **MinBinaryHeap**: parent nodes are always smaller than child nodes
- Each node can have at most two children, but there is no order to the left versus right. No order, just that parents are smaller/larger than child nodes. No relationship to root necessarily like in a binary search tree.
- Heaps are always filled out from left to right, so no opportunity to get really unbalanced heaps like you can get with trees
- Binary heaps are used to implement **Priority Queues**, which are very commonly used data structures
- Also used frequently with graph traversal algorithms

## Max Binary Heap

- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
- In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

![image](images/MaxBinaryHeap.png)
![image](images/MaxBinaryHeap2.png)

## Min Binary Heap

- Each parent has at most two child nodes
- The value of each parent node is always less than its child nodes

![image](images/MinBinaryHeap.png)

## Implementation of Binary Heaps

- Easiest way of storing a binary heap is a list or array
- For any index of an array n... the left child is stored at 2n+1 and the right child is stored at 2n+2
- For any child node at index n... its parent is at index Math.floor((n-1)/2)

## Priority Queues

- Priority queue: data structure where each element has a priority, elements with higher priorities are served before elements with lower priorities
- Priority queues are separate from heaps, they are just an abstract concept. Could be implemented as list, array, etc

## Big O of Binary Heaps

- Insertion: O(log n)
- Removal: O(log n)
- Search: O(n)

![image](images/BinaryHeaps_BigO.png)

