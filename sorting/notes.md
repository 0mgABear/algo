## Sorting

- 2 sorting algorithms

### Bubble Sort

General mathy definition of a sorted array: Xi <= Xi+i

- In a singular iteration: the largest item will end up in the last spot.
- So next time you do it, you can go up to the last index (but no need to include it)
- Formula of how many times it's done: N(N +1) /2
- Time Complexity: O(N² + N), but dropping insignficant constants --> O(N²)

Q:What is the mathematical definition of a sorted array?
A:Any element x[i] is less than or equal to x[i+1] throughout the entire array.

Q:How does the basic bubble sort algorithm work?
A:It compares adjacent elements and swaps them if they are in the wrong order, moving the largest element to the end of the array in each iteration.

Q:What is the time complexity of bubble sort?
A:O(n²), where n is the number of elements in the array.

Q:What unique property occurs in each iteration of bubble sort?
A:The largest unsorted element is moved to the end of the unsorted portion of the array.

Q:How does the number of comparisons change in each iteration of bubble sort?
A:The number of comparisons decreases with each pass, as the last element becomes sorted and is no longer compared.

Q:What are the runtime characteristics of Bubble Sort?
Bubble Sort has a time complexity of O(n²) due to nested loops where the outer loop runs n times and the inner loop runs progressively fewer iterations each pass.

Q:What are the key steps in implementing the Bubble Sort algorithm?
A:Use nested loops with outer loop running n times
Inner loop compares adjacent elements
Swap elements if they are in the wrong order
Reduce inner loop iterations with each pass
Largest unsorted element 'bubbles up' to the end in each pass

Q:How does the inner loop range change in Bubble Sort?
A:The inner loop range progressively decreases by subtracting the current outer loop iteration (i), so it goes from n-1 to n-1-i, ensuring already sorted elements at the end are not re-examined.

Q:What is the basic swap operation in Bubble Sort?
A:const temp = array[j]
array[j] = array[j + 1]
array[j + 1] = temp

Q:What happens to the array after each complete pass in Bubble Sort?
A:After each complete pass, the largest unsorted element 'bubbles up' to its correct final position at the end of the array, reducing the range of unsorted elements.
