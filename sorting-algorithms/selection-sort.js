//Selection Sort Pseudocode
//Store the first element as the smallest value you've seen so far
//Compare this item to the next item in the array until you find a smaller number
//Note: saving the index of where the value is found, not necessarily the value
//If smaller number is found, designate the smaller number to be the new "minimum" and continue until the end of the array
//If the "minimum" is not the value (index) you initially began with, swap the two values
//Repeat this with the next element until the array is sorted

function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let currentMin = i;
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[currentMin]){
        currentMin = j;
      }
    }
    if(currentMin !== i){
      let temp = arr[i];
      arr[i] = arr[currentMin];
      arr[currentMin] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([2,1,6,5,4]));