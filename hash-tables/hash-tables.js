// function hash(key, arrayLen){
//   let total = 0;
//   let WEIRD_PRIME = 31;
//   for(let i = 0; i < Math.min(key.length, 100); i++){
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total * WEIRD_PRIME + value) % arrayLen;
//   }
//   return total;
// }

class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  //Set: accepts a key and a value
  //Hash the key
  //Stores the key-value pair in the hash table array via separate chaining
  set(key, value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  //Get: accepts a key
  //Hashes the key
  //Retrieves the key-value pair in the hash table
  //If the key isn't found, returns undefined
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key){
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
}

let ht = new HashTable(4);
ht.set('hello world', 'goodbye!');
ht.set('hi there', 'see you later');
ht.set('aloha', 'mahalo');
ht.set('hola', 'adios');
console.log(ht);
console.log(ht.get('aloha'));
console.log(ht.get('hows it going'));
