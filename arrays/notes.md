## Arrays

```typescript
const a = [];
```

NOT an array

- contiguous (unbreaking) memory space, a certain amount of bytes. all just 0s and 1s.
- 32 bits = 4 bytes
- 1 byte = 8 bits
- List =/= array

```typescript
const a = new ArrayBuffer(6);

const a8 = new Uint8Array(a);

a8[0] = 45

a

a8[2] = 45

a

const a16 = new Uint16Array(a);

a16[2] = 0xs4545
```

- ArrayBuffer: contiguous memory you can create in Js. Can create views into it
- Getting data at a specific index
  width of the type, multiplies it by the offset

Go to a's memory address + (width (of the type) _ offset)
a + (width _ offset)

Constant time: O(1)

- Insertion: just overwriting
- Deletion: be able to tell yourself when you've deleted something (in C), null.

* Setting it to 0 / sentinel value

Q&A:
Q:What characteristic defines a traditional array's size?
A:A traditional array must have its size specified at initialization and cannot dynamically grow; the size is fixed and must be determined when the array is created

Q:What are the key components needed when defining an array in older languages?
A:In older languages, you need to pass three key pieces: the type of data, a pointer to the beginning of the array, and the length of the array

Q:What considerations are important when determining the initial size of an array's memory buffer?
A:The initial buffer size must balance between having enough space to avoid frequent reallocation and not wasting excessive memory by creating an overly large buffer

Q:What are the different types of array size specification in programming languages?
A:Arrays can have variable sizes (determined at runtime) or compile-time fixed sizes (where the size is a constant known before program execution)

Q:What are the performance characteristics of accessing elements in an array?
A:Array access is O(1), meaning it's fast and constant time. You can directly access elements by their index with immediate retrieval.

Q:What is a key limitation when inserting or deleting elements in an array?
A:Inserting or deleting elements in an array requires manually shifting all other elements, which typically involves writing for loops to move elements and create space for the new value.

Q:How does memory allocation differ between arrays and linked lists?
A:Arrays allocate all memory upfront, meaning if you want space for 1000 items, you reserve all that memory immediately. Linked lists, in contrast, allocate memory dynamically, creating nodes only when elements are inserted.

- What sucks about an Array:

* Deletion --> you can't really delete, can only "zero out" something
* Insertion --> can't insert, can write
* Ungrowable --> might overwrite other adjacent data

### Linear Search

Implementation of indexOf under the hood : Linear Search

Q:What is the time complexity of a linear search algorithm?
A:O(N), which means the time complexity grows linearly with the input size. As the array grows, the search time increases proportionally.

Q:What are the key steps in implementing a basic linear search algorithm?
A:Iterate through the array from index 0 to length-1
Compare each element with the target value
If the target is found, return true
If the target is not found after checking all elements, return false

Q:How does a linear search compare an array's elements to find a specific value?
A:It checks each element sequentially from the beginning of the array, comparing each element with the target value until a match is found or the end of the array is reached.

### Binary Search

- Is the data ordered?
- Any time you do a "scan" --> it becomes O(N)
- Every iteration --> it becomes halved
- N = 2^k
- O(log N)

- Formula: mid = floor(lo + (hi - lo) / 2)

- If you half the input at each step, it's likely O(LogN) or O(NlogN)

Q:What is the key characteristic of an algorithm that can take advantage of an ordered data set?
A:When a data set is ordered, you can optimize the search process by making strategic jumps instead of checking every single element sequentially

Q:What is the primary problem with jumping a fixed percentage (like 10%) through an array when searching?
A:In the worst case, you might end up jumping through the entire array and still have an unsearched portion, resulting in a runtime of O(N)

Q:How does binary search reduce the search space with each iteration?
A:Binary search halves the search space in each iteration by checking the middle element and determining whether to search the left or right half of the remaining array

Q:What is the runtime complexity of binary search?
A:Binary search has a runtime complexity of O(log N), which means the number of steps grows logarithmically with the size of the input array

Q:What does the equation N/2^k = 1 represent in binary search?
A:This equation represents how many times you need to divide the array in half to reach a single element, which is equivalent to log base 2 of N

Q:What are the three primary conditions in a binary search algorithm?
A:Value equals target (needle), 2) Value is larger than midpoint, 3) Value is smaller than midpoint

Q:What is a sentinel value in the context of binary search?
A:A value like -1 typically returned when the target element is not found in the array

### Jump Search

Given 2 crystal balls that will break if dropped from high enough distance
Determine the exact spot in which it will break in the most optimised way

Assumption: both balls are the same, and will break at the same floor
Cannot do too small jump or too big jumps (like binary search)

Pattern:
Limited resource
If you had unlimited balls → binary search
If you had 1 ball → linear search
If you had 2 balls → √n

"Jump Search"
Binary search — find a specific value in a sorted array, it may or may not exist.
Crystal ball / √n — find the first index where condition flips (false → true), limited "probes" that get consumed on failure.

Approach:
Jump in a certain unit

Q:What is the most efficient approach to finding the breaking point of a crystal ball in an array of increasing 'true' values?
A:Jump by square root of N, then linearly search backwards to find the exact breaking point, resulting in a O(√N) time complexity

Q:What are the drawbacks of linear search and binary search when finding the breaking point of a crystal ball?
A:Linear search is O(N), and binary search with two crystal balls still results in O(N) time complexity, as the second ball requires a linear search after the first ball breaks

Q:How does the square root search strategy work for finding the breaking point of a crystal ball?
A:Jump √N steps at a time until the first ball breaks, then step back to the last known safe point and linearly search forward, resulting in a √N search

Q:What is the time complexity of the square root search algorithm for finding the breaking point of a crystal ball?
A:O(√N), which is achieved by jumping √N steps and then performing a linear search of at most √N steps

Q:What is the key insight in solving the crystal ball breaking point problem?
A:Jump by a fundamentally different unit (square root of N) instead of using traditional linear or binary search methods, allowing for a more efficient search strategy

Q:What is the key advantage of using the square root of N for jumping in the crystal ball problem?
A:It reduces the time complexity from linear to sub-linear, allowing at most square root of N jumps and then a square root of N linear walk, which is more efficient than walking half the array

Q:How is the jump amount calculated in the crystal ball problem?
A:The jump amount is calculated using Math.floor(Math.sqrt(breaks.length)), which ensures a whole number jump size based on the array's length

Q:What are the two main steps in the crystal ball problem's jumping algorithm?
A:First, jump by square root of N increments until a break is detected, then jump back one increment and linearly search forward to find the exact breaking point

Q:What happens if the jumping algorithm reaches the end of the array without finding a break?
A:The algorithm will return -1, indicating that no breaking point was found in the array

Q:Why is jumping by square root of N more efficient than binary search in the crystal ball problem?
A:Square root of N allows for sub-linear searching, whereas binary search still encounters a linear time complexity problem

## RingBuffer

Q:What is a ring buffer, and what makes its operations unique?
A:A ring buffer is a data structure where operations like pushing, popping, shifting, and unshifting are O(1), using modulo arithmetic to wrap around an array. It maintains order by using head and tail indices that can move circularly within a fixed-size array.

Q:What happens when a ring buffer needs to resize?
A:When a ring buffer needs to resize, it creates a new larger buffer, starting at the head and copying elements in order. The head will be set to 0, and the tail will be set to the current length, allowing for additional capacity and continued circular operations.

Q:What is a practical use case for a ring buffer?
A:A ring buffer can be used in log batching scenarios, where logs need to maintain order while being written. It allows for efficient logging by periodically flushing a batch of logs without blocking the main service, and without requiring complex mutex synchronization.

Q:What is an object pool, and how is it related to ring buffers?
A:An object pool is a technique for reusing objects instead of creating new ones repeatedly, which can improve performance and memory usage. While ring buffers can be used for object pooling, a simple ArrayList is often sufficient if the order of object creation is not important.
