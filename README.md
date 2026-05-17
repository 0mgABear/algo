# The Last Algorithms Course You'll Need

Course: https://frontendmasters.com/courses/algorithms/

## Basics

Big O

## Search

Linear Search, Binary Search, Jump Search
Two Crystal Balls
O(√n) complexity

## Sort

## Arrays

Arrays vs Linked List

- Array: if you want to store X items, you need to allocate all that memory upfront. You may or may not use all.
- LL: memory usage more optimised, but difference in run time cost.

Typically: an array, you have a length and the capacity where length <= capacity.
get(idx): if idx >= length, can throw some sort of error
push: check if length within capacity, push the data, then increment length.

E.g. async request queue

ArrayList

- Array with the ability to grow
- ArrayList: Creating a push operation on top of an array. Using an array as the fundamental data type.
- Pop: returns either T or undefined. Length -1, get the value, decrement the length.
- pushing when exceed capacity? so len = capacity at that point in time

* can create a new array (e.g. with double capacity), and copy all of the values, length would point same place and capacity would increase / double.

* const a = [] is an ArrayList under the hood

-enqueue: need to grow the capacity (if capacity is maxed)
-problem: you can't just write, you would over-write the value. you need to shift all the existing data over by 1. O(N) complexity
-dequeue: shift over everything -1 (to write over)

- bad with enqueue and deque O(N)
- good with push and pop O(1)
- operate best when treated like a stack

Q:What are the two primary operations performed in an ArrayList?
A:Push (adding to the end) and pop (removing from the end), which are stack-like operations with O(1) time complexity when the array has not exceeded its capacity

Q:How does an ArrayList handle capacity when adding elements beyond its initial size?
A:It creates a new array with a larger capacity (often doubled), then copies existing elements to the new array, allowing for dynamic growth

Q:What are the performance characteristics of inserting or deleting elements from the front or middle of an ArrayList?
A:Inserting or deleting from the front or middle requires shifting all subsequent elements, resulting in an O(N) time complexity

Q:What is the primary difference between an ArrayList's push/pop operations versus enqueue/dequeue operations?
A:Push and pop at the end are O(1) operations, while enqueue and dequeue from the front require shifting all elements, making them O(N) operations

Q:What are the key advantages of an ArrayList compared to a Linked List?
A:An ArrayList provides constant-time random access by index and efficient push/pop operations at the end, whereas a Linked List provides efficient insertion and deletion at any point

Q:What are the time complexities for different array operations based on the empirical testing?
A:get: O(1), push/pop: O(1), unshift/shift: O(n)

Q:What type of data structure is JavaScript's array actually implemented as?
A:An ArrayList (dynamic array)

Q:Why do unshift and shift operations become slow as the array grows?
A:Because they require shifting all existing elements, which is a linear O(n) operation

Q:What makes an ArrayList different from a static array?
A:An ArrayList has a capacity that can grow dynamically, whereas a static array has a fixed memory allocation

Q:What does a slice operation typically do when creating a new array segment?
A:It can either create a deep copy (completely new memory) or a shallow slice (pointing to the same underlying memory, depending on the data type)

## Recursion

A function that calls itself until the problem is solved. (Until it reach a base case - where the problem is solved)

Example:

```typescript
function foo(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n + foo(n - 1);
}
```

- return Address: function needs to know how it got here, needs to return it's value --> whoever called the function
- return Value
- Arguments
- Local scope / local variables — each recursive call has its own copy of local variables, independent from the other calls.

- goes down and then up the stack.

Essentially:

- Base Case
- Recurse

Recurse step can be broken into 3 steps "Pathing":

1. pre : do something BEFORE you recurse (in above example: n + )
2. recuse
3. post :

Q:What are the three key components that are used when a function is called?
A:Return address (where the function was called from), 2) Return value (the value to be returned), and 3) Arguments (the input parameters)

Q:What are the three steps of recursion when breaking down the recursive process?
A:Pre-operation (something done before recursion), 2) Recursion (actual function call), and 3) Post-operation (something done after recursion)

Q:What is the most critical aspect of creating a recursive function?
A:Establishing a clear and correct base case. Without a proper base case, recursion becomes extremely difficult to implement and can lead to infinite loops.

Q:How does a recursive function typically terminate its recursive calls?
A:By reaching a base case, where the function no longer calls itself and instead returns a specific value or performs a final operation

Q:What happens to the function call stack during a recursive process?
A:The stack grows downward as recursive calls are made, then unwinds upward as each function returns its calculated value, with each function adding its own computation to the final result

Q:What are the four base cases to consider when implementing a recursive maze solver?
A:Wall encountered, 2) Off the map, 3) Reached the end point, 4) Previously visited tile

Q:Why is it important to track previously visited tiles in a recursive maze solver?
A:To prevent infinite loops and stack overflow by ensuring the algorithm doesn't repeatedly visit the same tiles

Q:What data structure can be used to track visited tiles in a recursive maze solving algorithm?
A 2D boolean array, where false indicates an unvisited tile and true indicates a tile that has been previously explored

Q:What happens if a recursive maze solving algorithm does not prevent revisiting tiles?
A:It can lead to an infinite loop that eventually causes a stack overflow, as the function keeps calling itself repeatedly on the same tiles

### Understanding Recursion

MazeSolver

List of strings, containing characters
"###" are walls - you cannot pass through

[
"######E#",
"# #",
"#S#####",
]

Base Cases:
At any one square, you can go up, right, down, left. But not necessarily all the time (walls). You could go off the graph.
We could also go to a spot we've seen before, just going back and forth.

Need to consider base case and then not check it in the recursive case.

1. it's a wall --> cannot be there
2. off the map --> you have to return
3. it's the end --> done, goal
4. if we have seen it before --> you also don't want to visit anything twice

```typescript
MazeSolver;
const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[],
): boolean {
  //1. Base case
  // off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }
  //on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }
  // it's the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }
  // a place we have seen it before
  if (seen[curr.y][curr.x]) {
    return false;
  }
  seen[curr.y][curr.x] = true;
  path.push(curr);

  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (
      walk(
        maze,
        wall,
        {
          x: curr.x + x,
          y: curr.y + y,
        },
        end,
        seen,
        path,
      )
    ) {
      return true;
    }
  }

  path.pop();
  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point,
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; ++i) {
    seen.push(new Array(maze[0].length).fill(false));
  }
  walk(maze, wall, start, end, seen, path);
  return path;
}
```

Q:What are the three steps in recursion?
A:Pre, recurse, and post

Q:What is the purpose of using direction arrays in recursive maze solving?
A:To systematically explore different directions (left, right, up, down) when navigating through a maze

Q:When is recursion typically recommended over using a for loop?
A:When there is no defined end point, or when there is a significant branching factor that makes linear iteration difficult

Q:What must be tracked when using recursion for pathfinding?
A:Maintaining a path array, marking visited locations, and tracking the current position

Q:What is an important consideration when implementing a recursive function?
A:Clearly defining the base case to determine when to stop recursing, which helps reduce complexity and improve readability

Q:What is the big O time complexity for the maze-solving recursive algorithm?
A:The algorithm has a big O time complexity of O(N), where N is the number of squares, with at most 4 checks per square

Q:What happens when the recursive maze-solving algorithm encounters a scenario where it cannot proceed in any direction?
A:The algorithm will pop the last element off the stack, return to the previous function call, and continue checking other possible directions

Q:How does the maze-solving algorithm handle backtracking?
A:When the algorithm reaches a dead end or a previously visited square, it backtracks by popping elements off the stack and returning to previous positions to explore alternative paths

Q:Does the order of checking directions (top, right, bottom, left) impact the maze-solving algorithm's performance?
A:In the general case, there is no performance difference, as the algorithm will explore the entire graph regardless of the initial direction order

## Quicksort

- Divide and conquer, divide into chunks --> go into the smaller subsets and solve things faster
- After 1st pass: weak sort until you reach an array of length 1 or nothing.
- Progressively more sorted.
- O(n log n)
- Potential: doesn't always sort quickly
- Worst case scenario: O(N^2) - a reverse sorted array
- Always pick the middle element is a strategy

Q:What is the core principle of the Divide and Conquer algorithm strategy?
A:Divide and Conquer involves splitting input into smaller chunks, solving those subsets progressively, and repeatedly splitting until reaching a fundamental unit that can be easily solved.

Q:In QuickSort, what is a 'pivot' and how is it used in the sorting process?
A:A pivot is an element used to partition the array, with elements less than or equal to the pivot placed on one side, and elements greater than the pivot placed on the other side.

Q:What are the potential time complexity ranges for the QuickSort algorithm?
A:QuickSort has a time complexity range from n log n (best case) to n squared (worst case), depending on the initial array configuration.

Q:What makes QuickSort perform poorly in its worst-case scenario?
A:When sorting a reverse sorted array, QuickSort can degrade to O(n squared) time complexity because each pivot selection results in an unbalanced partition.

Q:How does QuickSort handle sorting an array recursively?
A:QuickSort recursively divides the array by selecting a pivot, partitioning elements around the pivot, and then applying the same process to the subarrays until the entire array is sorted.

```typescript
function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);
  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let idx = lo - 1;
  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }
  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
```

Q:What is the key operation in the partition function of QuickSort?
A:The key operation is to move elements less than or equal to the pivot to the left side of the array, creating a weakly sorted subarray with the pivot in the correct position.

Q:What are the two primary functions typically used in implementing QuickSort?
A:The two primary functions are the partition function (which creates the pivot index and moves elements) and the QuickSort function (which performs recursive sorting using the partition result).

Q:What is the base case condition for the QuickSort recursive algorithm?
A:The base case is when the low index is greater than or equal to the high index, at which point the recursion stops and no further sorting is needed.

Q:How does QuickSort handle sorting subarrays after partitioning?
A:QuickSort recursively calls itself on the subarrays to the left and right of the pivot, excluding the pivot index, using a divide and conquer strategy.

Q:What is the typical pivot selection method demonstrated in the implementation?
A:In this implementation, the pivot is selected as the last element of the current subarray being sorted.

## Merge Sort

Split array in half recursively until size 1, then merge back together in sorted order.

Q: What is the time complexity of merge sort?
A: O(n log n) always — best, average and worst case. Unlike quicksort it never degrades to O(n²).

Q: What is the space complexity of merge sort?
A: O(n) — requires extra memory to store the merged arrays, unlike quicksort which is in-place.

Q: What is the base case for merge sort?
A: When the array has 0 or 1 elements — already sorted, return as is.

Q: What are the two phases of merge sort?
A: Split phase — recursively divide array in half until size 1. Merge phase — merge pairs back together in sorted order on the way back up.

Q: Why is merge sort preferred over quicksort in some cases?
A: Merge sort is stable (equal elements keep original order) and guaranteed O(n log n). Quicksort is faster in practice but unstable and has O(n²) worst case.

Q: What makes merge sort naturally suited for linked lists?
A: Merge sort doesn't require random access — it just needs to traverse sequentially. Quicksort's random pivot access is inefficient on linked lists.

## Least Recently Used (LRU)

- caching mechanism
- evict the least recently used item
- but how do we do it?

cache: some sort of node container based system, which contains some form of value (from the user to cache)

- linked list which has other items inside it

data structure: doubly linked list and potential for a hashmap

- how do you ask for a specific value inside the cache?
- how can we use it together?
- hashmaps that has items inside of it, which has pointers to other items
- hashmap lookup: constant O(1)
- breaking of links: O(1)

### Q&A

Q:What does LRU stand for, and what is its primary purpose in caching?
A:LRU stands for Least Recently Used. It is a caching mechanism that evicts the least recently used item when the cache reaches its capacity.

Q:What two primary data structures are used to implement an LRU cache?
A:A doubly linked list and a HashMap. The HashMap provides constant-time lookup, while the doubly linked list allows for efficient tracking and updating of item usage order.

Q:How does an LRU cache manage item usage order?
A:When an item is accessed, it is moved to the head of the linked list, making it the most recently used item. The tail of the list represents the least recently used item, which will be evicted when the cache reaches its capacity.

Q:What are the time complexities of key operations in an LRU cache?
A:HashMap lookup is O(1), breaking and inserting items in a linked list are also O(1) operations. Moving an item to the front of the list and removing the least recently used item can be done in constant time.

Q:Why is a doubly linked list preferred over a singly linked list in an LRU cache implementation?
A:A doubly linked list allows for constant-time removal and insertion of nodes from anywhere in the list by maintaining both previous and next pointers, which is essential for efficiently updating the cache's usage order.

Q:What are the two main functions discussed for cache implementation?
A:Get and update functions, where get retrieves a value by key and update adds or modifies a value in the cache

Q:What happens when a value is retrieved from the cache using the get function?
A:The retrieved value is moved to the front of the cache, becoming the most recently used item

Q:What are the key steps in the get function's pseudocode?
A:Check cache for existence of the key, 2. Update value and move to front if found, 3. Return the value or undefined if not found

Q:What considerations are important when implementing the update function?
A:Check if the key already exists, 2. Insert if not found, 3. Check cache capacity, 4. Evict an item if over capacity, 5. Update the value and move to front of the list

Q:How does the cache handle adding a new item when at full capacity?
A:When the cache reaches its capacity, an item must be evicted (typically the least recently used item) before adding a new item

Q:What are the key components of the LRU (Least Recently Used) cache data structure?
A:The LRU cache consists of a map (lookup), a reverse lookup map, a doubly linked list with head and tail nodes, a length counter, and a capacity limit. It uses the linked list to track the order of recently used items and the maps for quick key-to-node lookups.

Q:What are the two primary operations in an LRU cache implementation?
A:The two primary operations are 'get' and 'update'. The 'get' operation retrieves a value and moves the accessed node to the front of the list, while the 'update' operation adds or updates a value and moves it to the front of the list, potentially evicting the least recently used item if the cache is at capacity.

Q:What is the purpose of the 'detach' method in an LRU cache?
A:The 'detach' method removes a specific node from the linked list by adjusting the 'next' and 'prev' pointers of surrounding nodes. It also handles edge cases like updating the head and tail when the list becomes empty or the detached node is at the head or tail.

Q:What is the role of the reverse lookup map in an LRU cache?
A:The reverse lookup map allows tracking which key is associated with a specific node. This is crucial for properly cleaning up and removing items from the primary lookup map when evicting the least recently used item from the cache.

Q:How does an LRU cache maintain its size constraint?
A:The LRU cache maintains its size constraint through the 'trimCache' method, which checks if the current length exceeds the specified capacity. If it does, the method removes the tail node (least recently used item) from the linked list and both lookup maps.
