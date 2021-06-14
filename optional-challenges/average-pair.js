//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
//Example - averagePair([1,2,3], 2.5) //true
//averagePair([-1,0,3,4,5,6], 4.1) //false

function averagePair(nums, average){
  let i = 0;
  let j = nums.length - 1;
  while(i < j){
    let thisAvg = (nums[i] + nums[j]) / 2;
    if(thisAvg === average){
      return true;
    } else if(thisAvg < average){
      i++;
    } else {
      j--;
    }
  }
  return false;
}

console.log(averagePair([1,2,3], 2.5));