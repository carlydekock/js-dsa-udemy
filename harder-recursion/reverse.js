//Function called reverse, which accepts a string and returns a new string in reverse

function reverse(string){
  //base case - when string has run out of letters
  if(string === ''){
    return '';
  } else {
    return reverse(string.substr(1)) + string.charAt(0);
  }
}

console.log(reverse('hello'));