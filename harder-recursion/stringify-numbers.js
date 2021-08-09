//Write a function called stringifyNumbers which takes in an object and finds all of the values which
//are numbers and converts them to strings. 

function stringifyNumbers(object){
  let newObject = {};
  for(let key in object){
    if(typeof object[key] === 'number'){
      newObject[key] = object[key].toString();
    } else if(typeof object[key] === 'object' && !Array.isArray(object[key])){
      newObject[key] = stringifyNumbers(object[key]);
    } else {
      newObject[key] = object[key];
    }
  }
  return newObject;
}


let object1 = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
};

let object2 = {
  num: "1",
  test: [],
  data: {
      val: "4",
      info: {
          isRight: true,
          random: "66"
      }
  }
};

console.log(stringifyNumbers(object1));
console.log(stringifyNumbers(object2));