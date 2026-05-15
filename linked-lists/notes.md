## Linked List

node-based data structure
node that contains a value + a reference to the next node
can walk a daisy chain

singly linked list : no walking backwards
doubly linked list: another property prev

- deletion and insertion can be very fast

* inserting is constant time, we are just shifting things, and changing a bunch of "next" and "prev".
* insertion: O(1), nothing based on input
* deletion:
  B = C.prev
  B.next = C.next (for deletion)
  D.prev = C.prev

C.prev = C.next = null

- order of operations matter

* deletion: also O(1)

- deletion in the middle can be costly if the traversal is costly! (getting to that point)
- every single linked list is a graph and also technically a tree

Q:What is a linked list, and how does it fundamentally differ from an array?
A:A linked list is a node-based data structure where each node contains a value and a reference (pointer) to the next node. Unlike arrays, linked lists allow dynamic insertion and deletion with constant time complexity, and do not require shifting indices when modifying the list.

Q:What are the key characteristics of a singly linked list?
A:In a singly linked list, each node points only forward to the next node, which means you can only traverse the list in one direction. If you lose the reference to a previous node, you cannot access it again.

Q:What distinguishes a doubly linked list from a singly linked list?
A:A doubly linked list contains nodes with both a 'next' and a 'previous' pointer, allowing bidirectional traversal. This means you can move forward and backward through the list, unlike a singly linked list which only allows forward movement.

Q:How does insertion work in a linked list, and what is its time complexity?
A:Insertion in a linked list involves adjusting pointers. The pointer manipulation itself is O(1), but finding the insertion position may require O(n) traversal. Overall complexity is O(1) for insertion at the head or with a known reference, and O(n) when searching for a specific position.

Q:What are the memory allocation characteristics of a linked list?
A:Linked lists use heap-allocated objects, which means nodes are stored in memory locations that are typically more expensive than stack memory. Each node is a separate object containing a value and references to other nodes.

Q:What is the time complexity of accessing the head or tail of a linked list?
A:Accessing the head or tail of a linked list is a constant time operation (O(1)) because the linked list maintains direct references to these nodes

Q:What are the time complexities of deletion in a linked list?
A:Deletion at the head or tail is a constant time operation (O(1)), while deletion in the middle requires traversal, making it more costly with a time complexity of O(n)

Q:Why can prepending and appending to a linked list be fast?
A:Prepending and appending are constant time operations because you can simply break and rearrange links at the head or tail without traversing the entire list

Q:How can a linked list be conceptually viewed in relation to other data structures?
A:Every linked list can be considered a graph and technically a tree, making it a foundational data structure for understanding more complex data structures

Q:What is the primary search mechanism for a linked list?
A:Linked lists can only perform linear search, which means traversing each element sequentially until the desired item is found. There is no possibility of binary search or direct random access.

Q:What is an example use case where a linked list might be preferred over an array?
A:A linked list is ideal for scenarios like an async request queue, where you need to efficiently push and pop elements from the head or tail without the performance overhead of

Q:What are the three key steps when prepending a node to a doubly linked list?
A:Make the new node's 'next' point to the current head, 2. Make the current head's 'previous' point to the new node, 3. Set the head to the new node

Q:When inserting a node at a specific index in a doubly linked list, what is the recommended order of operations?
A:First, attach the new node to the desired positions, then break the old links. This ensures that no references are lost during the insertion process.

Q:What bookkeeping tasks are important when modifying a linked list?
A:Increment or decrement the length of the list when adding or removing nodes, and ensure that head and tail references are updated correctly

Q:What special conditions must be handled when implementing insert and append methods in a doubly linked list?
A:Handle cases such as inserting at index 0 (prepend), inserting at the list's length (append), and handling an initially empty list by setting both head and tail to the new node

Q:How do you safely insert a node into the middle of a doubly linked list without losing references?
A:Create the new node, 2. Set its 'next' to the current node, 3. Set its 'previous' to the current node's previous, 4. Update the current node's previous to point to the new node, 5. Update the previous node's 'next' to point to the new node

Q:What are the three main conditions to consider when removing a node from a doubly linked list?
A:The three conditions involve handling the previous node, the next node, and potential updates to the head and tail of the list if the node being removed is at the beginning or end of the list.
