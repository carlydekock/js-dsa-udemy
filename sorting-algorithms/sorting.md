# Sorting Algorithms

## Elementary (Quadratic) Sorting Algorithms

### Bubble Sort

- Works best if data is nearly sorted
- Fairly inefficient, and therfore not commonly used
- Sorting algorithm where the largest value "bubbles" to the top
- As you loop through the array, you compare the value to the next value, if it's larger you swap the two and then compare the next
- Fewer elements to go through with each iteration
- Can be optimized with a boolean variable, if true that there are no swaps on that iteration, can break out and avoid unnecessary iterations
- Big O time: O(n^2)
- Big O space: O(1)

### Selection Sort

- In a way, the inverse of bubble sort (largest values bubble to the top), in this case we assign the smallest values first and move up from there
- Also fairly inefficient, have to compare every element to every other element, making one less comparison each iteration
- Still not efficient in the case of almost sorted data
- Selection sort is better than bubble sort in one specific scenario: only make one formal swap at the end of each loop, instead of swapping every time like bubble sort
- Big O time: O(n^2)
- Big O space: O(1)

### Insertion Sort

- If data is almost all sorted, this can be an efficient sorting algorithm
- Keeping one side of the array sorted, and adding one item in one at a time, can be good for continuous singular data coming in and needing to find the correct place for it
- Big O time: O(n^2)
- Big O space: O(1)

![Big O](images/BigO_ElemSort.png)

## Intermediate Sorting Algorithms

### Merge Sort

- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building back up a newly sorted array
- Works best with a helper function which merges two sorted arrays
- Recursively, we break down the array into smaller 1 element arrays, and then call the merge helper function to merge the two smaller arrays back together
- Big O time: O(n log(n))
- Big 0 space: O(n)

![Merge Sort](images/MergeSort.png)
![Merge Sort Big O](images/MergeSort_BigO.png)

### Quick Sort

- Helps to have a helper function which designate an element as the pivot. It then rearranges elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot (order of elements on either side of the pivot doesn't matter).
- The helper should do this in place, not create a new array. When complete, it shoud return the index of the pivot.
- Picking a pivot: ideally the pivot should be chosen to that it is the median value of our dataset that you're sorting
- Big O time: O(n log(n0))
- Big O space: O(log n)

![Quick Sort Big O](images/QuickSort_BigO.png)

### Radix Sort

- Different way of sorting than the other sorting methods above, don't comparing to another, but moving into buckets and re-grouping as a means of sorting
- Number of iterations depends on the number of digits in the largest number in the array
- Helps to have a few helper functions: get the digit in the number at the specified place value, how many digits are in a number, and the largest number of digits in a number in a list of numbers
- Big O time: O(nk) where n=length of array, k=avg number of digits
- Big O space: O(n + k)
- Put into buckets of 0 - 9 first for the ones place, then for the tens, then hundreds, etc. Each iteration, put the array back together according to how they numbers were separated into buckets. First iteration for group of numbers pictured below (sort according to digit in the ones place)

![Radix Sort](images/RadixSort.png)
![Radix Sort Big O](images/RadixSort_BigO.png)
