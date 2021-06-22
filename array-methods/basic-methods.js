//Adding or removing from an array
let array = [1,2,5,8,10,12];

array.push(9); //inserts at the end
let last = array.pop(); //removes from the end
array.unshift(3); //inserts an element at the beginning
let first = array.shift(); //removes first element from array

//Iterating through arrays
//ForEach: executes a provided function once for each array element
//ForEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
let copy = [];
array.forEach(num => {
  copy.push(num + 1);
}); //copy = [2,3,6,9,11,13];

//Filter: creates a new array with all elements that pass the test implemented by the provided function
//Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
let words = ['hello', 'hi', 'aloha', 'greetings'];
let results = words.filter(word => word.length > 3); //results = ['hello', 'aloha', 'greetings']

//Map: creates a new array populated with results of calling a provided function on every element in the calling array
//Map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
let nums = [1,4,9,16];
let numsTwo = nums.map(num => num * 2); //numsTwo = [2,8,18,32]

//Reduce: executes a reducer function (that you provide) on each element of the array, resulting in a single output value. Reducer function takes four arguments: accumulator, current value, current index, source array. Reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.
//Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

let values = [1,2,3,4];
let result = values.reduce((total, amount) => total + amount); //result = 10;
