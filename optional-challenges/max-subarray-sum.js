//Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
//Note that a subarray must consist of consecutive elements from the original array. 
//Example: maxSubarraySum([100,200,300,400],2) // 700

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length < num){
    return null;
  }

  for(let i = 0; i < num; i++){
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for(let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2));