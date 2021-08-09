//Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(array){
  
  //Base case - when there is only one string left in the array
  if(array.length === 1){
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }

  const result = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
  result.push(string);
  return result;
}

console.log(capitalizeFirst(['cat', 'dog', 'pig', 'goat', 'rabbit']));