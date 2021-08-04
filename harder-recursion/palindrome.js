//Recursive isPalindrome function that returns true if the string passed to it is a palindrome, reads the same forward and backward. Otherwise returns false.

function isPalindrome(string){
  //remove any non-alphanumeric characters
  string = string.replace(/[^a-z0-9]/i, '').toLowerCase();
  const length = string.length;

  //base cases - return if only one letter or if letters don't match
  if(length <= 1){
    return true;
  }
  if(string[0] !== string[length-1]){
    return false;
  }

  return isPalindrome(string.slice(1,-1));
}

console.log(isPalindrome('tacocat'));
console.log(isPalindrome('awesome'));