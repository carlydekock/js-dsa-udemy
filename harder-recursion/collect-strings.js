//Write a function called collectStrings which accepts an object and returns an array of all the
//values in the object that have a typeof string.

function collectStrings(object){
  let stringsArr = [];
  for(let key in object){
    if(typeof object[key] === 'string'){
      stringsArr.push(object[key]);
    } else if(typeof object[key] === 'object'){
      stringsArr = stringsArr.concat(collectStrings(object[key]));
    }
  }
  return stringsArr;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj));