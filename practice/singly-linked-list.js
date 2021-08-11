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

  //SLL - get
  //Function should find a node at a specified index in a SLL. It should return the found node
  get(index){
    if(!this.head || index >= this.length){
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

  //SLL - insert
  //Function should insert a node at the specified index in a SLL. It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).
  insert(index, value){
    if(index < 0 || index > this.length){
      return false;
    }
    if(index === this.length){
      return !!this.push(value);
    }
    if(index === 0){
      let newNode = new Node(value);
      if(!this.head){
        this.head = newNode;
        this.tail = this.head;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return true;
    }

    let newNode = new Node(value);
    let previous = this.get(index-1);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
}

let list = new SinglyLinkedList();
list.push(5);
list.push(10);
list.push(15);
console.log(list.push(20));
// console.log(list.pop());
// console.log(list);
// console.log(list.get(1));
console.log(list.insert(6, 1));
// console.log(list);
// console.log(list.insert(3, 2));
// console.log(list.head.next.next.next);