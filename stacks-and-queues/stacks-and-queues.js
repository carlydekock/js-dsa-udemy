//Stack implementation with Linked List

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //Push: add a value to the top of the stack
  //Function should accept a value
  //Create a new node with that value
  //If there are no nodes in the stack, set the first and last property to be the newly create node
  //If there is at least one node, create a variable that stores the current first property on the stack
  //Reset the first property to be the newly created node
  //Set the next property on the node to be the previously created variable
  //Increment the size of the stack by 1

  push(value){
    let newNode = new Node(value);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldFirst = this.first;
      this.first = newNode;
      newNode.next = oldFirst;
    }
    this.size++;
    return this.size;
  }

  //Pop: remove a value from the top
  //if there are no nodes in the stack, return null
  //Create a temporary variable to store the first property on the stack
  //If there is only 1 node, set the fist and last to be null
  //If there is more than one node, set the first property to be the next property on the current first
  //Decrement the size by 1, return the value of the removed node

  pop(){
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last){
      this.last = null;
    }
    this.first = temp.next;
    this.size--;
    return temp.value;
    }
}

// let stack = new Stack();
// console.log(stack.push("FIRST"));
// console.log(stack.push("SECOND"));
// console.log(stack.push("THIRD"));
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

