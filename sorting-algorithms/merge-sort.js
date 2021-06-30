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

console.log(mergeArrays([1,4,7], [2,3,6,7,8,9]));






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