//Pivot (or partition) Helper Pseudocode 
//Accept three arguments: array, start index, and an end index (can default to 0 and array length -1 respectively)
//Grab the pivot from the start of the array
//Store the current pivot index in a variable (this will keep track of where the pivot should end up)
//Loop through the array from the start until the end
  //If the pivot is greater than current element, increment pivot index variable and then swap the current element with the element at the pivot index
//Swap the starting element (ex: pivot) with the pivot index
//Return the pivot index
function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivot(arr, start=0, end=arr.length-1){
  let pivot = arr[start];
  let swapIndex = start;
  for(let i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIndex++;
      swap(arr,swapIndex,i);
    }
  }
  swap(arr,start,swapIndex);
  return swapIndex;
}

// console.log(pivot([4,8,2,1,5,7,6,3]));

//QuickSort Pseudocode
//Call the pivot helper on the full array
//When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
//Base case: subarray with less than 2 elements
function quickSort(arr, left=0, right=arr.length-1){
  if(left < right){
    let pivotIndex = pivot(arr, left, right);
    //left side
    quickSort(arr, left, pivotIndex-1);
    //right side
    quickSort(arr, pivotIndex+1, right);
  }
  return arr;
}

console.log(quickSort([4,6,7,1,2,5,3]));
