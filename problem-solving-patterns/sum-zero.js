//Function takes in a sorted array, returns the first pair with sum of zero. If no pair exists, returns undefined.
//Input: [-4,-3,-2,-1, 0, 1, 2, 3, 10];
//Output: [-3,3]

function sumZero(arr){
  let left = 0;
  let right = arr.length - 1;

  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]];
    } else if(sum < 0){
      left++;
    } else {
      right--;
    }
  }
}

// console.log(sumZero([-4,-3,-2,-1, 0, 1, 2, 3, 10]));