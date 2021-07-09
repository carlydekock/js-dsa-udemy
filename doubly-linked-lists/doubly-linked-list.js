class Node {
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Push: adds a node to the end of the list
  //Create new node with value passed in
  //Check if head is null or length is O (is the list empty) if so, head and tail are the newly created node
  //Otherwise, set the next property on the tail to be the new node
  //Set the previous property on the new node to be the old tail
  //Set the tail property to be the new node that is now at the end
  //Increment the length and return the list

  push(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new DoublyLinkedList();
console.log(list.push(5));
console.log(list.push(10));