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
}

// let heap = new MaxBinaryHeap();
// console.log(heap.insertTwo(55));
// console.log(heap.values);
