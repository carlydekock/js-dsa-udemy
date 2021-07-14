# Trees

## Terms

- Tree: nonlinear data structure that consists of nodes in a parent/child relationship
- Edge: connection between one node and another
- Root: top node in a tree
- Child: node directly connected to another node when moving away from the root
- Parent: converse notion of a child
- Siblings: group of nodes with the same parent
- Leaf: node with no children

## Use Cases for Trees

- HTML DOM (Document Object Model)
- Network Routing
- Abstract Syntax Trees (describing syntax of a programming language)
- Artificial Intelligence/Machine Learning (decision tree)
- Folders in operating systems
- Parsed JSON data has a tree structure

## Binary Search Trees (BSTs)

- Every parent node has at most two children
- Every node to the left of a parent node is always less than the parent
- Every node to the right of a parent node is always greater than the parent
- BSTs are used to sort data that can be compared and is sortable
- BSTs are very efficient for searching and inserting

### Big O of BST

- Insertion: O(log n)
- Searching: O(log n)

## Binary Trees

- Each node can have at most two children

## Tree Traversal

- Breadth First: traversal level by level, across the tree first, visiting sibling nodes before child nodes
- Depth First: going to the end of the tree vertically, and then coming back up
  - In-order: left -> root -> right
  - Pre-order: root -> left -> right
  - Post-order: left -> right -> root
