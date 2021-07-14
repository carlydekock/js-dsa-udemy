class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(){
    this.root = null;
  }  

  //Insert: will add node into correct spot in the BST
  //Create a new node
  //Starting at the root - check if there is a root, if not the root becomes that new node
    //If there is a root, check if the value of the node is > or < than value of root
    //If its greater => check if there is a node to the right
      //If there is, move to that node and repeat these steps
      //If there isn't, add that node as the right property
    //If it is less => check to see if there is a node to the left
      //If there is, move to that node and repeat these steps
      //If there isn't, add that node as the left property
  //Return the tree

  insert(value){
    let newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
      return this;
    } 
    let current = this.root;
    while(current){
      if(value === current.value) return undefined;
      if(value < current.value){
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      if(value > current.value){
        if(current.right === null){
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  //Find: searching to see if value is in a BST, returns the node
  //Starting at the root
    //Check if there is a root - if not, we're done searching
    //If there is a root, check if the value of the new node is the value we're looking for. If we found it, we're done
    //If not, check to see if the value is greater than or less than the value of the root
    //If it's greater
      //Check to see if there is a node to the right
        //If there is, move that node and repeat these steps
        //If there is not, we're done searching
    //If it's less
      //Check to see if there is a node to the left
        //If there is, move to that node and repeat these steps
        //If there is not, we're done searching
  
  find(value){
    if(this.root === null) return false;
    let current = this.root;
    let found = false;
    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return false;
    return current;
  }

  //Contains: similar to find, but returns true/false 
  contains(value){
    if(this.root === null) return false;
    let current = this.root;
    let found = false;
    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  //Breadth First Search (BFS)
  //Create a queue (can be an array) using push/shift
  //Place the root node in the queue
  //Loop as long as there is anything in the queue
    //Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    //If there is a left property on the node dequeued - add it to the queue
    //If there is a right property on the node dequeued - add it to the queue
  //Return the variable that stores the values
  BFS(){
    let current = this.root;
    let nodes = [];
    let queue = [];
    queue.push(this.root);
    while(queue.length){
      current = queue.shift();
      nodes.push(current.value);
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
    return nodes;
  }

}

let tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
