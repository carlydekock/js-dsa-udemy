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
}

let list = new SinglyLinkedList();
list.push(5);
list.push(10);
list.push(15);
console.log(list);
console.log(list.unshift(3));
console.log(list.get(1));
