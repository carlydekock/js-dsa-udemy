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
    this.legnth = 0;
  }
}

let list = new SinglyLinkedList();