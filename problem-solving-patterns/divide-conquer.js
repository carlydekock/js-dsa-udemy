//Given a sorted array of integers, write a function called search that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

function search(arr, val){
  let min = 0;
  let max = arr.length - 1;

  while(min <= max){
    let mid = Math.floor((min + max) / 2);
    let current = arr[mid];

    if(arr[mid] < val){
      min = mid + 1;
    } else if(arr[mid] > val){
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(search([3,4,6,7,9,10], 6))