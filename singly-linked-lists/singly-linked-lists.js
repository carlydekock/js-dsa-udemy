//Node class - stores piece of data (val), and reference to next node (next)
class Node {
  constructor(val){
    this.val = val;
    this.next = null; 
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Push method: take a piece of data, should create and assign as a new node to the list
  //Takes in a value, create a new node using the val
  //If there is no head, set the head and the tail to be the new node
  //Otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
  //Increment the length by one
  //Return the linked list

  push(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //Pop method: remove a node from the end of the linked list
  //Note: To remove the node, have to assign a new tail - don't have a backwards pointer, so can't return the "one before this"
  //Define function called pop - check if nothing in the list, return undefined
  //Otherwise, loop through the entire list until you reach the tail, but also have variable that keeps track of previous item
  //Set the next property of the 2nd to last node to be null
  //Set the tail to be the 2nd to last node
  //Decrement the length of the list by 1
  //Return the value of the node removed

  pop(){
    if(!this.head){
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //Shift: removing a node from the beginning of the linked list
  //If there are no nodes, return undefined
  //Store the current head property in a variable
  //Set the head property to be the current head's next property
  //Decrement the length by 1
  //Return the value of the node removed

  shift(){
    if(!this.head){
      return undefined;
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    return oldHead;
  }

  //Unshift: Adding a new node to the beginning of the linked list
  //Function should accept a value
  //Create a new node using the value passed to the function
  //If there is no head property on the list, set the head and tail to be the newly created node
  //Otherwise, set the newly created node's next property to be the current head property on the list
  //Set the head property on the list to be that newly created node
  //Increment the length of the list by 1
  //Return the linked list

  unshift(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //Get: retrieving a node by it's position in the linked list
  //Function should accept an index
  //If the index is less than 0 or greater than or equal to the length of the list, return null
  //Loop through the list until you reach the index and return the node at that specific index

  get(index){
    if(index < 0 || index >= this.length){
      return null;
    }
    let counter = 0;
    let current = this.head;
    while(counter !== index){
      current = current.next;
      counter++;
    }
    return current;
  }

  //Set: changing the value of a node based on it's position in the linked list
  //Define a function that accepts an index and a value
  //Can use the get function to find the specific node
  //If the node is not found, return false
  //If the node is found, set the value of that node to be the value passed to the function and return true

  set(index, value){
    let found = this.get(index);
    if(found){
      found.val = value;
      return true; 
    }
    return false;
  }

  //Insert: adding a node to the linked list at a specific position
  //If the index is less than 0 or greater than the length, return false
  //If the index is the same as the length, push a new node to the end of the list
  //If the index is 0, unshift a new node to the start of the list
  //Otherwise, using the get method, access the node at index-1 (item before)
  //Set the next property on that node to be the new node
  //Set the next property on the new node to be the previous next
  //Increment the length
  //Return true

  insert(index, value){
    if(index < 0 || index > this.length){
      return false;
    }
    if(index === this.length){
      return !!this.push(value);
    }
    if(index === 0){
      return !!this.unshift(value);
    }

    let newNode = new Node(value);
    let previous = this.get(index-1);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  //Remove: removing a node from the linked list at a specific position
  //Define a function that accepts an index
  //If the index is less than 0 or greater than or equal to the length, return undefined
  //If the index is the same as the length-1, use pop
  //If the index is equal to 0, use shift
  //Otherwise, use get method, access the node at the index-1
  //Set the next property on that node to be the next of the next node
  //Decrement the length
  //Return the value of the node removed

  remove(index){
    if(index < 0 || index >= this.length){
      return undefined;
    }
    if(index === this.length - 1){
      return this.pop();
    }
    if(index === 0){
      return this.shift();
    }

    let previous = this.get(index-1);
    let removed = previous.next;
    previous.next = removed.next;
    this.length--;
    return removed;
  }

  //Reverse: reverse the linked list in place
  //Swap the head and tail
  //Create a variable called next
  //Create a variable called previous
  //Create a variable called node and initialize it to the head property
  //Loop through the list
  //Set next to be the next property on whatever node is
  //Set the next property on the node to be whatever previous is
  //Set previous to be the value of the node variable
  //Set the node variable to be the value of the next variable
  reverse(){
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let previous = null;
    let next = null;
    for(let i = 0; i < this.length; i++){
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this;
  }

  print(){
    let array = [];
    let current = this.head;
    while(current){
      array.push(current.val);
      current = current.next;
    }
    console.log(array);
    return array;
  }
}

let list = new SinglyLinkedList();
list.push(5);
list.push(10);
list.push(15);
list.push(25);
list.print();
list.reverse();
list.print();