//Bubble Sort Pseudocode
//Start looping with a variable called i at the end of the array towards the beginning
//Start an inner loop with a variable j fromt he beginning until i - 1
//If arr[j] is greater than arr[j+1], swap those two values
//Return the sorted array

function bubbleSort(arr){
  let noSwaps;
  for(let i = arr.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1], i-1)
      if (arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([2,3,7,4,6]));