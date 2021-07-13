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
}

let bst = new BST();
bst.root = new Node(10);
bst.root.right = new Node(15);
bst.root.left = new Node(7);
bst.root.left.right = new Node(9);
console.log(bst);