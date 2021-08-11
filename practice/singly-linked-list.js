//Singly Linked List exercises

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
  
  //SLL - push
  //Function should take in a value and add a node to the end of the SLL. If should return the SLL.
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

// let list = new SinglyLinkedList();
// console.log(list.push(5));
// console.log(list.push(10));
