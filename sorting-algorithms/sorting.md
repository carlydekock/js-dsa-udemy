# Sorting Algorithms

## Bubble Sort

- Works best if data is nearly sorted
- Fairly inefficient, and therfore not commonly used
- Sorting algorithm where the largest value "bubbles" to the top
- As you loop through the array, you compare the value to the next value, if it's larger you swap the two and then compare the next
- Fewer elements to go through with each iteration
- Can be optimized with a boolean variable, if true that there are no swaps on that iteration, can break out and avoid unnecessary iterations
- Big O: O(n^2)

## Selection Sort

- In a way, the inverse of bubble sort (largest values bubble to the top), in this case we assign the smallest values first and move up from there
- Also fairly inefficient, have to compare every element to every other element, making one less comparison each iteration
- Selection sort is better than bubble sort in one specific scenario: only make one formal swap at the end of each loop, instead of swapping every time like bubble sort
- Big O: O(n^2)

