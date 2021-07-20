# Hash Tables

- Also known as Hash Map
- Built in to pretty much every programming language out there
- Hash table: used to store key-value pairs. They are like arrays, but the keys are not ordered.
- Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values
- Examples from different languages:
  - Python has dictionaries
  - JS has objects and maps
  - Java, Go, and Scala have maps
  - Ruby has hashes

## Hashing Functions

- To implement a hash table, we'll use an array
- Need a way to convert keys into valid array indices
- Hash function: function that performs this task, converting keys into valid indices
- Hashing functions have lots of applications in security and cryptography
- Takes data of arbitrary size, and spits it out in fixed size
- What makes a good hash?
  - Fast, constant time
  - Doesn't cluster outputs at specific indices, but distributes uniformly
  - Deterministic (same input yields same output)
- Hash functions almost always take advantage of prime numbers, prime number in the hash is helpful in spreading out the keys more uniformly

## Dealing with Collisions

- Collisions are inevitable
- Two strategies we'll focus on: separate chaining and linear probing
  - Separate chaining: store the pieces of data at the same spot using another nested data structure (array, linked list, etc)
  - Linear probing: when find collision, search through the array to find the next empty slot (only store one piece of data stored at same index, won't store in nested structure)

## Big O of Hash Tables

- Insert: O(1)
- Deletion: O(1)
- Access: O(1)
