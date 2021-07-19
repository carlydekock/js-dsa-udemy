//Binary Heaps

class MaxBinaryHeap {
  constructor(){
    this.values = [41, 39, 33, 18, 27, 12];
  }

  //Insert: add to the end, bubble up (swap until finds final correct resting place)
  //Push the value into the values property on the heap
  //Bubble up:
    //Create a variable called index which is the length of the values property -1
    //Create a variable called parentIndex which is the floor of (index-1)/2
    //Keep looping as long as the values element at the parentIndex is less than the values element at the child index
      //Swap the values of the values element at the parentIndex with the value of the element property at the child index
      //Set the index to be the parentIndex, and start over
  
  insert(element){
    this.values.push(element);
    let index = this.values.length - 1;
    while(index > 0){
      let parentIndex = Math.floor((index-1)/2);
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
      index = parentIndex;
    }
    return this.values;
  }

  //Alternative to insert method above, with a bubbleUp helper function
  insertTwo(element){
    this.values.push(element);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp(){
    let index = this.values.length - 1;
    const element = this.values[index];
    while(index > 0){
      let parentIndex = Math.floor((index-1)/2);
      let parent = this.values[parentIndex];
      if(element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  //Removing: one area usually removed from is the root (removing the maximum element) and in a min heap, removes the min value
  //Remove root
  //Put most recent element added in the root position
  //Move down/sink down, comparing root to children and swapping until in the correct place
  //Pseudocode:
  //Swap the first value in the values property with the last one
  //Pop from the values property, so you can return the value at the end
  //Have the new root "sink down" to the correct spot
    //Your parent index starts at 0 (the root)
    //Find the index of the left child: 2*index+1 (make sure its not out of bounds)
    //Find the index of the right child: 2*index+2 (make sure its not out of bounds)
    //If the left or right child is greater than the element... swap. If both left and right children are larger, swap with the largest child
    //The child index you swapped to now becomes the new parent index
    //Keep looping and swapping until neither child is larger than the element
    //Return the old root

  extractMax(){
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown(){
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true){
      let leftChildIdx = (2 * index) + 1;
      let rightChildIdx = (2 * index) + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx];
        if(leftChild > element){
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
          swap = rightChildIdx;
        }
      }
      if(swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}


//PriorityQueue (using a min binary heap, for variety)
//Write a min binary heap - lower number means higher priority
//Each node has a val and a priority, use the priority to build the heap
//Enqueue method: accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority
//Dequeue: removes root element, returns it, and rearranges heap using priority

class Node {
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
    //In order to have true queue behavior - first in first out, could have something like below to track time
    // this.insertTime = Date.now();
  }
}

class PriorityQueue {
  constructor(){
    this.values = [];
  }

  enqueue(val, priority){
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp(){
    let index = this.values.length - 1;
    const element = this.values[index];
    while(index > 0){
      let parentIndex = Math.floor((index-1)/2);
      let parent = this.values[parentIndex];
      if(element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue(){
    const min = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown(){
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true){
      let leftChildIdx = (2 * index) + 1;
      let rightChildIdx = (2 * index) + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx];
        if(leftChild.priority < element.priority){
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)){
          swap = rightChildIdx;
        }
      }
      if(swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

//Priority Queue example - ER scenario
// let ER = new PriorityQueue();
// ER.enqueue('common cold', 5);
// ER.enqueue('deep wound', 1);
// ER.enqueue('high fever', 4);
// ER.enqueue('broken arm', 2);
// ER.enqueue('glass in foot', 3);
// console.log(ER.dequeue());
// console.log(ER.dequeue())
// console.log(ER);


// let heap = new MaxBinaryHeap();
// // console.log(heap.insertTwo(55));
// console.log(heap.extractMax())
// console.log(heap.values);
