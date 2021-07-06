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
}

let list = new SinglyLinkedList();
list.push('hello');
list.push('goodbye');
list.push(10);
console.log(list);