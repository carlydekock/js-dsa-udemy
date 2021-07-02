//Radix Sort Helpers

//getDigit(num, place) => returns the digit in num at the given place value
function getDigit(num, place){
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
// console.log(getDigit(234,4));

//digitCount(num) => returns how many digits are in num
function digitCount(num){
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// console.log(digitCount(234));

//mostDigits(nums) => given an array of numbers, returns the number of digits in the largest numbers in the list
function mostDigits(nums){
  let maxDigits = 0;
  for(let i = 0; i < nums.length; i++){
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
// console.log(mostDigits([1,45,678,34,56789, 6]));

//RadixSort Pseudocode
//Define a function that accepts a list of numbers
//Figure out how many digits the largest number has - will loop that many times
//For each iteration, create buckets (empty array) for each digit (0 to 9)
  //Place each number in the corresponding bucket based on its kth digit
//Replace existing array with values from buckets (reordered a bit each time) - starting with 0 and going up to 9 (concatenate into new array)
//Return the list

function radixSort(nums){
  let maxDigits = mostDigits(nums);
  for(let i = 0; i < maxDigits; i++){
    let buckets = Array.from({length: 10}, () => [])
    for(let j = 0; j < nums.length; j++){
      let result = getDigit(nums[j], i);
      buckets[result].push(nums[j]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}

console.log(radixSort([3,5,18,345,6,43,234]));