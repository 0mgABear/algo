## Heap

Binary Tree where every child / grandchild is smaller (MaxHeap) or larger (MinHeap) than the current node (inclusive of values equal to)

- wwhenever node is added / deleted, it must be adjusted
- no traversing the tree
- weak ordering, they are ordered but not perfectly ordered\
- heap is always full / complete tree, never have empty spaces
- filled in from left to right (except last level)

**MinHeap:** top value smallest

```
        1
       / \
      3   2
     / \ /
    7  4 5
```

- Adding: bubble up (comparison)
- Deletion
  e.g deleting root node
- take the very bottom node, put it at the top, heapify down
- take minimum of the 2 children and heapify
  ? but how do you get the very bottom node?

- Run Time: O(log n). Complete tree

**MaxHeap:** top value biggest

```
        10
       /  \
      7    9
     / \  /
    3   4 5
```

### Reimagination to how we store trees

- Think about it as an array!!!

? how do we do parent-child relationship

starting from index 1, 2
children formulae:
2i + 1 = LHS
2i + 2 = RHS

- traversed to children, no management of links! management of data structure is easy now!
- solved the problem of going down
- generic parent calculation: (i -1)/2 --> have to use floor because it's javascript :(

- so how do we get the end node? LENGTH. just keep track of how many items you have!

Characteristics:

- self balancing
- can be used for priority
- funnest DS to implement, easy to get wrong

Q:What is the key property of a min heap?
A:in a min heap, the top value must be the smallest, and every node's children must be larger than or equal to the parent node

Q:How is a heap maintained when a new node is added?
A:When a new node is added, it is placed at the end of the tree and then 'bubbled up' by comparing and swapping with its parent until the heap condition is satisfied

Q:What is the formula to find a node's left child in a heap implemented as an array?
A:For a node at index i, the left child is located at index 2i + 1

Q:What is the formula to find a node's parent in a heap implemented as an array?
A:For a node at index i, the parent is located at index floor((i - 1) / 2)

Q:What is the key characteristic of heap storage in an array?
A:Heaps are stored as complete binary trees with no gaps, filling in nodes from left to right, which allows efficient parent-child relationship calculations using mathematical formulas instead of explicit links

Q:What is the time complexity of insertion and deletion operations in a heap?
A:Both insertion and deletion operations have a time complexity of O(log n), because the heap is a complete tree where every operation may require traversing from the bottom to the top or vice versa

Q:What are the key private functions needed when implementing a heap?
A:The key private functions are: parent (to get parent index), leftChild (to get left child index), rightChild (to get right child index), heapifyUp (to bubble an element up), and heapifyDown (to bubble an element down)

Q:What is the core strategy for inserting an element into a heap?
A:Insert the new element at the end of the array, then use heapifyUp to move the element to its correct position by comparing and swapping with its parent until the heap property is maintained

Q:What is the core strategy for deleting the root element from a heap?
A:Remove the root element, replace it with the last element in the array, reduce the length, and then use heapifyDown to move the new root to its correct position by comparing and swapping with its children

Q:Why is a heap always a complete or full tree?
A:A heap fills elements from left to right without any gaps, ensuring that every level except possibly the last is completely filled, which guarantees a logarithmic height
