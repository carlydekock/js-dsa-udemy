# Stacks and Queues

## Stacks

- Abstract data structure or concept, collection of data that needs to abide by a LIFO principle (last in first out).
- The last element added to a stack will be the first one removed. (Example: stack of books, or stack of dishes, you'll remove the one just added from the top)
- To implement a stack: could use a linked list, array
- Where are stacks used: managing function invocations, undo/redo, routing (the history object) is treated like a stack
- Not a built in data structure in JavaScript like they are in other languages

### Array Implementation

- Using push and pop on an array functions like a stack
- Using unshift and shift on an array functions like a stack as well
- Remember, adding and removing from the beginning is not good for Big O complexity
- In general for Big O complexity, a linked list is best since all we need to do is add to the end and remove from the end
- Adding/removing from the same direction is the key

### Big O of Stacks

- Insertion: O(1)
- Removal: O(1)
- Searching: O(N)
- Access: O(N)
