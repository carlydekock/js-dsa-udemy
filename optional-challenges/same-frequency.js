//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
//Your solution must have the following complexities:
//Time: O(N)
//Example: sameFrequency(182,281) //true
//Example: sameFrequency(34,14) //false

function sameFrequency(num1, num2){
  let n1 = num1.toString();
  let n2 = num2.toString();
  if(n1.length !== n2.length){
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for(let val of n1){
    counter1[val] = (counter1[val] || 0) + 1;
  }

  for(let val of n2){
    counter2[val] = (counter2[val] || 0) + 1;
  }

  for(let key in counter1){
    if(!(key in counter2)){
      return false;
    }
    if(counter1[key] !== counter2[key]){
      return false;
    }
  }
  return true;
}

// console.log(sameFrequency(182, 281));