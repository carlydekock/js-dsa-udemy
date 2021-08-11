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

  //SLL - pop
  //Function should remove a node at the end of the SLL. It should return the node removed
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
    newTail.next = null;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

let list = new SinglyLinkedList();
list.push(5);
list.push(10);
list.push(15);
console.log(list.push(20));
console.log(list.pop());
console.log(list);