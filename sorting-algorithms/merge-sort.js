//Merging helper function pseudocode
//Create an empty array, take a look at the smallest values in each input array
//while loops - i and j start at 0
//While there are still values we haven't looked at - haven't hit end of array
  //If the value in the first array is smaller than the value in the second, push the value in the first array into results array and move on to the next value in the first array
  //If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
//Once we exhaust one array, push all remaining values from the other array in
  
function mergeArrays(arr1, arr2){
  let i = 0;
  let j = 0;
  let results = [];
  while (i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      results.push(arr1[i]);
      i++;
    }
    if(arr1[i] > arr2[j]){
      results.push(arr2[j]);
      j++;
    }
    if(arr1[i] === arr2[j]){
      results.push(arr1[i]);
      results.push(arr2[j]);
      i++;
      j++;
    }
  }
  while(i < arr1.length){
    results.push(arr1[i]);
    i++;
  }
  while(j < arr2.length){
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// console.log(mergeArrays([1,4,7], [2,3,6,7,8,9]));

//MergeSort Pseudocode
//Break up the array into halves until you have arrays that are empty or have one element
//Tip: Use arr.slice, 0 to mid, then mid to end, then break each half into own half
//Tip: base case is when length is <= 1
//Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
//Once the array has been merged back together, return the merged (and sorted) array

function mergeSort(arr){
  if(arr.length <= 1){
    return arr;
  }
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right= mergeSort(arr.slice(mid));

  return mergeArrays(left, right);
}

console.log(mergeSort([4,3,1,6,8,5]))


//Alternative to top helper function, simplified a bit in the if/else logic to clean up multiple cases above
// function mergeArrays(arr1, arr2){
//   let i = 0;
//   let j = 0;
//   let results = [];
//   while (i < arr1.length && j < arr2.length){
//     if(arr1[i] < arr2[j]){
//       results.push(arr1[i]);
//       i++;
//     } else {
//        results.push(arr2[j]);
//        j++;
//     }
//   }
//   while(i < arr1.length){
//     results.push(arr1[i]);
//     i++;
//   }
//   while(j < arr2.length){
//     results.push(arr2[j]);
//     j++;
//   }
//   return results;
// }