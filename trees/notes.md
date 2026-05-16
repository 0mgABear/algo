## Trees

- file system is a tree
- dom is a tree
- massively important in compilers
- abstract syntax tree
- root: top most node / most parent node

### Terminology

- height: longest path from the root to the most hcild node
- binary tree - a tree in which at most 2 children, at least 0 children (most common )
- general tree - tree with >= 0 children
- binary search tree - tree in which has a specific ordering to the nodes and at most 2 children
- leaves - a node without children
- balanced - a tree is perfectly balanced when any node's L and R children have the same height
- branching factor - amount of children a tree has

```typescript
type Node<T> = {
  value: T;
  children: [];
};
```

Q:What are three real-world examples of tree data structures?
A:File system, 2. DOM (Document Object Model), 3. Abstract syntax tree used in compilers

Q:What are the key components of a basic tree node?
A:A value and an array of possible children connections, allowing zero or more connections

Q:What is the definition of a tree's height?
A:The longest path from the root to the most distant descendant node

Q:What is a binary tree?
A:A tree where each node has a maximum of two children, typically represented with left and right child nodes

Q:What is a leaf in a tree data structure?
A:A node without any child nodes, located at the end of a branch

### Traversals

visitNode -> do something with the value of the node
recurse

3 types of tree traversals

1. pre-order traversals

- first visit the node then do the recursion
- root at the beginning

2. in-order traversal

- root in the middle

3. post-order traversal

- root at the end

Run Time: O(n)

- input: the whole
  \*\*\* These traversals are known as depth-first. Depth-First Search (DFS)
  \*\*\* Implicitly using a stack - a function call stack.--> Last In First Out (FIFO) / First In Last Out
  \*\*\* PRESERVES the shape of the traversal!

Q:What are the three main types of tree traversals?
A:Pre-order, in-order, and post-order traversals, which differ in the order of node visitation relative to recursing through left and right child nodes

Q:What is the time complexity of a tree traversal?
A:O(N), where N is the number of nodes in the tree. This is because each node must be visited exactly once.

Q:In a pre-order traversal, what is the order of node visitation?
A:Visit the current node first, then recurse to the left child, and then recurse to the right child

Q:In a post-order traversal, when is the root node visited?
A:The root node is visited last, after both left and right subtrees have been fully traversed

Q:What is the primary purpose of a tree traversal?
A:To visit every node in the tree, typically by performing an operation like printing the node's value or processing its data

Q:What are the three main types of binary tree traversal strategies discussed?
A:Pre-order, In-order, and Post-order traversals

Q:In a depth-first search (DFS) traversal, what implicit data structure is being used?
A:The function call stack

Q:What are the three typical steps in a recursive function according to the instructor?
A:Pre (first operation), recurse (visit child nodes), and post (final operation)

Q:Why do tree traversals typically go left before right?
A:It is a convention, potentially influenced by binary search trees, though not strictly necessary

### Breadth-First Search (BFS)

Opposite of DFS
Queue - First In First Out (FIFO)
Tree-level visiting , visit each level first.
O(N)
If you use a Js Array, O(N2)

- No need to use recursion

Q:What data structure is used in a breadth-first search and why?
A:A queue is used in breadth-first search because it follows a first-in, first-out (FIFO) approach, which allows traversing a tree level by level

Q:How does a breadth-first search traverse a tree?
A:It visits nodes level by level, starting at the root and moving across each level from left to right before going to the next level

Q:Why does using a JavaScript array as a queue result in O(n squared) complexity?
A:Shifting elements from the beginning of an array requires reordering all subsequent elements, which becomes increasingly expensive as the queue grows, especially in a binary tree where each level contains approximately half the nodes of the tree

Q:What is the key characteristic of how nodes are visited in a breadth-first search?
A:Nodes are visited in a tree-level order, meaning all nodes at one level are visited before moving to the next level, creating a horizontal traversal pattern

Q:What is the key difference between a breadth-first search (BFS) and a depth-first search (DFS) in terms of traversal approach?
A:BFS uses a queue and explores nodes level by level, while DFS uses a stack or recursion and explores nodes by going deep into one branch before backtracking.

Q:In an iterative BFS implementation, what are the main operations performed on the queue?
A:In an iterative BFS, the main operations are: shift (remove the first element from the front of the queue), check the current node's value, and enqueue (push) the node's left and right children to the end of the queue.

Q:What type of data structure is typically used to implement a breadth-first search?
A:A queue (q) is typically used to implement a breadth-first search, which allows processing nodes in a first-in, first-out (FIFO) order.

Q:What is the base case or termination condition in a breadth-first search implementation?
A:The base case is when the queue becomes empty, which means all nodes have been processed, or when the target value is found.

Q:How does an iterative BFS handle null or undefined child nodes during tree traversal?
A:In an iterative BFS, null or undefined child nodes are typically checked before being added to the queue, ensuring that only valid nodes are processed.

Q:What is the key difference between breadth-first search and depth-first search when comparing binary trees?
A:Depth-first search preserves the shape of the tree during traversal, while breadth-first search does not, which can lead to incorrect comparisons of tree structure.

Q:When comparing two binary trees for equality, what aspects must be checked?
A:Both the values of the nodes and the structural shape of the trees must be checked to determine true equality.

Q:How does depth-first search help in comparing binary trees?
A:Depth-first search traverses the tree by going down each branch completely before moving to the next, which allows for maintaining the original tree structure during comparison.

Q:What happens when comparing trees with breadth-first search that can lead to incorrect results?
A:Breadth-first search may incorrectly identify trees as equal if the node values match at each level, even if the tree structures are different.

Q:Why is it important to verify both node values and tree structure when comparing binary trees?
A:Simply matching node values is not sufficient to determine tree equality; the hierarchical structure and arrangement of nodes must also match exactly.

Q:What are the base cases for comparing two binary trees recursively?
A:If both nodes are null 2. If one node is null and the other is not 3. If the values of the two nodes are not

Q:How does the recursive comparison of binary trees work after handling the base cases?
A:Recursively compare the left subtrees and right subtrees using the && (logical AND) operator. If all subtree comparisons return true, the entire trees are considered equal.

Q:What does a recursive binary tree comparison function typically take as parameters?
A:Two parameters: two nodes (or null) representing the roots of the trees being compared

Q:Why are the base cases important in a recursive binary tree comparison?
A:Base cases solve simple problems and provide stopping conditions for the recursion, allowing the algorithm to handle edge cases like null nodes and determine when trees are structurally and value-wise equivalent

Q:How does a recursive binary tree comparison handle subtree evaluation?
A:By recursively calling the comparison function on the left subtrees and right subtrees, and combining their results using logical AND. If any subtree comparison returns false, the entire tree comparison returns false.

### Summary

Use DFS when:

Comparing two trees (shape + values)
Finding if a path exists (maze solver)
Searching for a value where you don't care about distance
Problems involving tree structure (subtrees, depth)
Exhaustive search / backtracking

Use BFS when:

Shortest path / minimum steps
Closest node to root
Level order traversal
"Find the nearest X" type problems

### Binary-Search Tree (BST)

NOT a new DS. Just ordering it differently.
Still a binary tree, with a rule applied at every node.
Left side is <= right side

Sounds alot like a quicksort!

Concept:

- DFS with a order to how we traverse

* find(node) : boolean
* if !node, return false
* if node.value = v , return true
* if node.value < v, return find(node.right, value)
* return find(node.left, value)

* O(log n) - O(n), O(log n) on average
* O(h), h = height of the tree

* AVL and Red-Black Trees --> balance trees
* AVL and Red-Black trees are self-balancing BSTs that guarantee O(log n) by automatically rebalancing after every operation

* insert is alot like find --> you have to find your way to a node

Depth-First Insertion (PseudoCode):
insert(node, v):
if node.v < v, insert(node.r, value)
else if(node.v >= v)
insert(node.l, value)

Depth-First Deletion (PseudoCode):
case 1: no child, just delete
case 2: 1 child, set parent to child --> alot like a linked list operation!
case 3: 2 child --> try to reduce it to case 1 / 2

- go down left and side and find the largest element in the smaller subtree
- go left and go right all the way (due to the nature of BST), right is bigger
- and since BST rules are at most 2 children and R is bigger, so we will keep going right until there is 1 or 0 child nodes
  ALTERNATIVELY
- go down right and go down left all the way (smallest of the bigger subtree), and set that as the parent

* smallest on large scale or largest on small side

* height of the tree --> if we kept information in the node what the maximum height is + children have their own maximum height
* can tell which side has the smaller height --> O(1) time
* reorganise the side with the larger height --> benefits to shrinking the tree (tighter)

Q:What is the key rule for a Binary Search Tree (BST)?
A:In a Binary Search Tree, all nodes to the left must be less than or equal to the current node, and all nodes to the right must be greater than the current node.

Q:How does finding a value in a Binary Search Tree (BST) work?
A:Finding a value in a BST is similar to binary search on an array: compare the current node's value, then recursively search left if the target is smaller, or right if the target is larger, until the value is found or a null node is reached.

Q:What is the basic pseudocode structure for finding a value in a Binary Search Tree?
A:The basic pseudocode involves: checking if the node is null (return false), checking if the current node's value matches the target (return true), recursively searching left if the target is smaller, or searching right if the target is larger.

Q:How does a Binary Search Tree handle nodes with repeated values?
A:Nodes with repeated values can be handled by allowing equal values to be placed on either the left or right side, preventing the creation of an overly long linear structure for repetitive values.

Q:What algorithmic characteristic does a Binary Search Tree share with Quicksort?
A:Both Binary Search Trees and Quicksort use a pivot point and divide values into sections: values less than the pivot on one side, and values greater than the pivot on the other side.

Q:What is the running time of the find algorithm in a binary tree?
A:O(height), which can range from O(log n) for a balanced tree to O(n) for an unbalanced tree

Q:What determines the height of a binary tree?
A:The tree's structure - a complete binary tree has a height of log n, while a single-track tree has a height of n

Q:When inserting a value into a binary tree, how is the placement determined?
A:By comparing the value to the current node: if less than or equal, go left; if greater, go right, until a null position is found

Q:What challenge exists when implementing a recursive binary tree insertion algorithm?
A:Handling the base case (null position) requires mixing the base case with the recursion step, which can complicate the implementation

Q:What are two predominant methods for balancing a binary tree?
A:AVL and Red-Black Trees

Q:What are the three cases for deleting a node in a binary search tree?
A:Node with no children (simply delete), 2. Node with one child (point parent to child), 3. Node with two children (replace with largest element in smaller subtree or smallest element in larger subtree)

Q:When deleting a node with two children in a binary search tree, what strategy is used to maintain the tree's structure?
A:Find the largest element in the smaller subtree (left subtree) or the smallest element in the larger subtree (right subtree), and replace the node being deleted with that element. This ensures the binary search tree properties are maintained.

Q:What guarantee exists when finding the replacement node for a deletion in a binary search tree?
A:The replacement node (found by going right in the left subtree or left in the right subtree) will have either zero or one child, making its removal simpler.

Q:Why might height be considered when choosing which subtree to use for node replacement during deletion?
A:Choosing the replacement node from the subtree with larger height can help maintain a more balanced tree, potentially keeping the tree's structure more compact and improving future search performance.

Q:What are the potential consequences of repeated insertions without careful deletion in a binary search tree?
A:Repeated insertions can create a 'spidery' tree with uneven branches, which can significantly slow down search operations due to increased tree depth and complexity.

Q:What happens to the balance of a binary search tree after insertion?
A:Insertion inherently unbalances a tree. Rotation algorithms like AVL are used to restore balance by walking back up the tree and performing rotations recursively.

Q:What is the primary characteristic of an in-order traversal of a binary search tree?
A:An in-order traversal prints out the tree's values in sorted order by going left, printing the value, then going right. The result is an ordered array.

Q:How do AVL trees maintain balance after insertion?
A:AVL trees perform rotations recursively when walking back up the tree after an insertion. These rotations help bring the tree back to a balanced state, resulting in an almost perfectly balanced tree.

Q:What determines the choice between AVL and Red-Black trees?
A:The choice depends on the frequency of operations: if finding elements is more common, AVL might be better; if insertions are more frequent, Red-Black trees could be preferable.

Q:What is unique about the ordering in a binary search tree?
A:Binary search trees have a strong ordering where elements to the left are smaller and elements to the right are larger, mimicking binary search and quicksort algorithms.

Q:What are the two base cases in a binary search tree (BST) search algorithm?
A:When the current node is null (return false), indicating the value is not found. 2. When the current node's value is equal to the search value (return true), indicating the value is found.

Q:How does a binary search tree (BST) search algorithm reduce search space?
A:By checking only one side of the tree at each step, either going left or right based on the comparison between the current node's value and the search value, effectively reducing the search space by half in each iteration.

Q:What is the time complexity of a binary search in a perfectly balanced tree?
A:O(log n), because the algorithm reduces the search space by half in each step, leading to a logarithmic time complexity.

Q:What determines which side of the binary search tree to traverse during a search?
A:If the current node's value is less than the search value, traverse the right subtree. If the current node's value is greater than the search value, traverse the left subtree.

Q:Why is binary search on a tree different from binary search on an array?
A:In a tree, the 'midpoint' is determined by the binary search tree's structure, where nodes are already organized, whereas in an array, the midpoint must be manually calculated and compared.
