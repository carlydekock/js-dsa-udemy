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

  //Shift: removing node from the beginning of the list
  //If there is no head, return undefined
  //Otherwise, store the current head property in a variable
  //If the length is 1, set the head and tail to be null
  //Update the head to be the next of the old head
  //Set the head's previous property to null
  //Set the old head's next to null
  //Decrement the length and return the old head

  shift(){
    if(!this.head){
      return undefined;
    }
    let oldHead = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  //Unshift: Add a node to the beginning of the list
  //Create a new node with the value passed in
  //If the list is empty, set head and tail to be the new node
  //Otherwise, set the prev property on the head of the list to be the new node
  //Set the next property on the new node to be the head property
  //Update the head to be the new node
  //Increment the length, return the list

  unshift(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //Get: accessing a node in a list by its position
  //If the index is less than 0 or greater than or equal to the length, return null
  //if the index is less than or equal to half the length of the list
    //Loop through the list starting from the head and loop towards the middle
    //Return the node once it is found
  //If the index is greater than half the length of the list
    //Loop through the list starting from the tail and loop towards the middle
    //Return the node once it is found
  
  get(index){
    if(index < 0 || index >= this.length){
      return null;
    }
    if(index <= (this.length / 2)){
      let current = this.head;
      let counter = 0;
      while(counter != index){
        current = current.next;
        counter++;
      }
      return current;
    } else {
      let current = this.tail;
      let counter = this.length - 1;
      while(counter != index){
        current = current.prev;
        counter--;
      }
      return current;
    }
  }

  //Set: replacing value of a node in a list
  //Create a variable which is the result of the get method at the index passed to the function
    //If the get method returns a valid node, set the value of that node to be the value passed to the function
    //Return true
  //Otherwise, return false

  set(index, value){
    let found = this.get(index);
    if(found != null){
      found.val = value;
      return true;
    }
    return false;
  }

  //Insert: adding a node in a list by a certain position
  //If the index is less than 0 or greater than or equal to the length return false
  //If the index is 0, unshift
  //If the index is the same as the length, push
  //Use the get method to access the index -1
  //Set the next and prev properties on the correct nodes to link everything together
  //Increment the length
  //Return true

  insert(index, value){
    if(index < 0 || index >= this.length){
      return false;
    }
    if(index === 0){
      return !!this.unshift(value);
    }
    if(index === this.length){
      return !!this.push(value);
    }
    let previous = this.get(index-1);
    let newNode = new Node(value);
    let after = previous.next;
    previous.next = newNode;
    newNode.prev = previous;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return true;
  }

  //Remove: remove node at index/position
  //If the index is less than 0 or greater than or equal to the length return undefined
  //If the index is 0, shift
  //If the index equals the length-1, pop
  //Use the get method to retrieve the item to be removed
  //Update the next and previous properties to remove the found node from the list
  //Set the next and prev to null on the found node
  //Decrement the length
  //Return the removed node

  remove(index){
    if(index < 0 || index >= this.length){
      return undefined;
    }
    if(index === 0){
      return this.shift();
    }
    if(index === this.length - 1){
      return this.pop();
    }
    let deleted = this.get(index);
    deleted.prev.next = deleted.next;
    deleted.next.prev = deleted.prev;
    deleted.next = null;
    deleted.prev = null;
    this.length--;
    return deleted;
  }
}

// let list = new DoublyLinkedList();
// list.push(5);
// list.push(10);
// list.push(15);
// list.push(20);
// list.push(35)
// console.log(list.remove(3));
// console.log(list);
