//Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it (ex. 4! = 4 * 3 * 2 * 1). Factorial zero (0!) is always 1.
//factorial(1) // 1
//factorial(4) // 24

function factorial(num){
  if(num === 0){
    return 1;
  }
  return num * factorial(num-1);
}

console.log(factorial(1));