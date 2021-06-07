//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
//Start at beginning and +1
//create a variable to count how many times not equal
//use array itself to store unique values
//build up unique values at beinning
//Input: [-2,-1,-1, 0, 1]
//Output: 4

function countUniqueValues(arr){
  let i = 0;
  let j = 1;

  if(arr.length === 0){
    return 0;
  }

  while(j < arr.length){
    if(arr[i] === arr[j]){
      j++;
    }

    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1;
}

function countUniqueValuesTwo(arr){
  if(arr.length === 0){
    return 0;
  }

  let i = 0;
  for(let j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// console.log(countUniqueValues([-2,-1,-1,0,1]));
console.log(countUniqueValuesTwo([-2,-1,-1,0,1]));