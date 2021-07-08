# Singly Linked List

## Terms

- Linked list: data structure that contains a **head**, **tail**, and **length** property. Consists of nodes, and each **node** has a **value** and a **pointer** to another node or null
- Node: stores piece of data (string, or number), that references next node
- Singly linked list: each node only connected one direction to the next node
- Doubly linked list: has connection pointing back to the previous node

## Singly Linked Lists vs. Arrays

- Lists: do not have indexes, connected via nodes with a **next** pointer, random access is not allowed (can't ask for a specific item, have to traverse from the beginning to the specified item)
  - Linked lists are especially good for: insertion and deletion
- Arrays: indexed in order, insertion and deletion can be expensive, can quickly be accessed at a specific index

## Big O

- Insertion: O(1)
- Removal: It depends on where removing from
  - Removing from the beginning: O(1)
  - Removing from somewhere in between up to the end: O(N)
- Searching: O(N)
- Access: O(N)

## Resources

- VisuAlgo: linked list visuals [here](https://visualgo.net/en/list)
- Code Fellows linked list [docs](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/resources/singly_linked_list.html)
