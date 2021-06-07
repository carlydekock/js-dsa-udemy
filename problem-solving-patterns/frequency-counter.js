//Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
//create object - represent the occurence of each letter in one of the string
//more than one loop
//create object, then loop over the other string, compare and update the object as needed
//all inputs will be single words, no periods/numbers/spaces/punctuation, all lowercase letters

function validAnagram(str1, str2){
  if(str1.length !== str2.length){
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for(let val of str1){
    counter1[val] = (counter1[val] || 0) + 1;
  }

  for(let val of str2){
    counter2[val] = (counter2[val] || 0) + 1;
  }

  for(let key in counter1){
    if(!(key in counter2)){
      return false;
    }
    if(counter2[key] !== counter1[key]){
      return false;
    }
  }
  return true;
}

// console.log(validAnagram('hello', 'ehollsss'));