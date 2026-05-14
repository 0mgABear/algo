## Queues

First In First Out (FIFO)
Specific Implementation of a LL

- peek
- enqueue
- dequeue

Q:What is the primary characteristic of a queue data structure?
A:A queue is a FIFO (First In, First Out) structure, where elements are inserted at the tail and removed from the head of the list, similar to waiting in a line.

Q:What are the two main operations when inserting an element into a queue?
A:Point the current tail to the new element, 2. Update the tail to point to the new element.

Q:What are the performance characteristics of queue operations?
A:Both pushing and popping elements from a queue are constant time (O(1)) operations, as they only involve updating pointers and do not require traversing the entire list.

Q:What type of linked list is typically used to implement a queue?
A:A singly linked list is used, which does not require the additional computation time or storage requirements of a doubly linked list.

Q:What additional operation is commonly included with queue implementations?
A:A peek operation, which allows viewing the first element (at the head) without removing it from the queue, typically accessed via head.value.

Q:What are the primary methods typically implemented in a queue data structure?
A:The primary methods are enqueue (adding an item to the queue), dequeue (removing an item from the queue), and peek (viewing the first item without removing it)

Q:What is the purpose of having a next property as optional in a queue node?
A:An optional next property allows flexibility in the data structure, preventing infinite memory creation and accommodating varying numbers of elements in the queue

Q:What are the two key references maintained in a queue implementation?
A:The two key references are head and tail, which point to the first and last nodes in the queue respectively

Q:What bookkeeping operation is crucial when implementing a queue's dequeue method?
A:Decrementing the length property is crucial to keep track of the number of items in the queue when removing an item

Q:When adding the first element to an empty queue, what special handling is required?
A:When the queue is empty, the first element becomes both the head and tail of the queue, and the length is incremented

Q:What does the peek method do in the context of a queue?
A:The peek method returns the value of the head node without mutating the state of the queue. If the head exists, it returns its value; otherwise, it returns undefined.

Q:When inserting a new node into a queue, what two operations are necessary?
A:First, set the current tail's next pointer to the new node. Second, update the tail to point to the newly added node to ensure the tail always represents the end of the queue.

Q:What happens to the tail when the queue becomes empty?
A:When the queue becomes empty, the tail should be set to undefined to ensure proper bookkeeping.

Q:What is the performance characteristic of push and pop operations in JavaScript arrays?
A:Push and pop operations on JavaScript arrays can be performed at essentially constant time rates.

## Stacks

Also a singly linked list.

Last In First Out (LIFO)

- Add and remove at the head. Makes it fast.

Adding a new head: point to head, then update head to point to latest node.

Q:What is a stack in data structures?
A:A stack is a singly linked list where elements are added and removed only from the head, following a Last-In-First-Out (LIFO) principle, similar to a stack of plates where the last item added is the first one removed.

Q:How does the push operation work in a stack?
A:To push an element in a stack, you point the new element's 'next' pointer to the current head, and then update the head to point to the new element.

Q:How does the pop operation work in a stack?
A:In a pop operation, you first save the current head, then update the head to point to the next element, effectively removing the top element from the stack.

Q:What makes stack operations efficient?
A:Stack operations are efficient because they involve constant time pointer manipulations, which do not depend on the number of items in the list or the size of the values.

Q:How are function calls related to a stack?
A:Function calls are conceptually similar to a stack, with each function call being 'pushed' onto the call stack and 'popped' off when the function completes. The memory used for these calls is literally called the 'stack'.

Q:What is the key difference in node definition when implementing a Stack compared to a traditional linked list?
A:Instead of using 'next', the instructor uses 'previous' to point to the previous node, which helps with visualization and understanding the stack's structure

Q:What are the two key operations when implementing a Stack data structure?
A:Push (adding an element to the top of the stack) and Pop (removing the top element from the stack)

Q:How does the pop method handle length to prevent negative values?
A:By using Math.max(0, this.length - 1) to ensure the length never goes below zero

Q:What are the three main steps when implementing the pop method in a Stack?
A:Save a pointer to the current head, 2. Update head to point to the previous node, 3. Return the value of the popped node
