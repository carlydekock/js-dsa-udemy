//Binary Search Pseudocode
//This function accepts a sorted array and a value
//Assume only working with numbers for now
//Create a left pointer at the start of the array, and a right pointer at the end of the array
//While the left pointer comes before the right pointer: create a pointer in the middle, if you find the value return the index, if the value is too small move left pointer up, if value is too large move right pointer down
//If you never find the value, return -1

function binarySearch(arr, val){
  let left = 0;
  let right = arr.length - 1;
  // let mid = Math.floor((left + right) / 2);

  while(left <= right){
    let mid = Math.floor((left + right)/2);
    if(arr[mid] === val){
      return mid;
    }
    if(arr[mid] < val){
      left = mid + 1;
    }
    if(arr[mid] > val){
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95));