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


