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

  //Pop: remove item from the end of the list
  //Check if there is no tail/head, return undefined
  //Otherwise, take current tail and store in a temp variable
  //If length is 1, set head and tail to be null
  //Update the tail to be the previous node
  //Set the new tail's next to null
  //Decrement the length, return the value removed
  //**Make sure remove both references now (next and prev) to the old node

  pop(){
    if(!this.tail){
      return undefined;
    }
    let poppedNode = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

}

let list = new DoublyLinkedList();
list.push(5);
list.push(10);
// list.push(15);
console.log(list.pop());
console.log(list);
