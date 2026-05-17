# DSA Cheat Sheet

## Arrays

| Operation              | Time | Notes                 |
| ---------------------- | ---- | --------------------- |
| Access by index        | O(1) | Direct memory address |
| Search                 | O(n) | Linear scan           |
| Insert at end          | O(1) | Push                  |
| Insert at middle/front | O(n) | Must shift elements   |
| Delete at end          | O(1) | Pop                   |
| Delete at middle/front | O(n) | Must shift elements   |

## Linked List

| Operation           | Time | Notes                     |
| ------------------- | ---- | ------------------------- |
| Access by index     | O(n) | Must traverse             |
| Search              | O(n) | Must traverse             |
| Insert at head/tail | O(1) | Just update pointers      |
| Insert at middle    | O(n) | Must traverse to position |
| Delete at head/tail | O(1) | Just update pointers      |
| Delete at middle    | O(n) | Must traverse to position |

## Stack

| Operation | Time | Notes           |
| --------- | ---- | --------------- |
| Push      | O(1) | Add to top      |
| Pop       | O(1) | Remove from top |
| Peek      | O(1) | View top        |
| Search    | O(n) | Must traverse   |

## Queue

| Operation | Time | Notes             |
| --------- | ---- | ----------------- |
| Enqueue   | O(1) | Add to back       |
| Dequeue   | O(1) | Remove from front |
| Peek      | O(1) | View front        |
| Search    | O(n) | Must traverse     |

## Binary Search Tree

| Operation | Time                     | Notes                                      |
| --------- | ------------------------ | ------------------------------------------ |
| Search    | O(log n) avg, O(n) worst | Worst = unbalanced tree                    |
| Insert    | O(log n) avg, O(n) worst | Walk to correct position                   |
| Delete    | O(log n) avg, O(n) worst | 3 cases: no child, one child, two children |

## Heap

| Operation      | Time     | Notes                        |
| -------------- | -------- | ---------------------------- |
| Access min/max | O(1)     | Always at root               |
| Insert         | O(log n) | Add to end, heapify up       |
| Delete min/max | O(log n) | Swap with last, heapify down |
| Search         | O(n)     | Not designed for search      |

## HashMap

| Operation       | Time     | Notes                |
| --------------- | -------- | -------------------- |
| Get             | O(1) avg | Direct key lookup    |
| Set             | O(1) avg | Direct key insert    |
| Delete          | O(1) avg | Direct key delete    |
| Search by value | O(n)     | Must scan all values |

## Trie

| Operation     | Time | Notes                                |
| ------------- | ---- | ------------------------------------ |
| Search        | O(n) | n = word length, not dictionary size |
| Insert        | O(n) | n = word length                      |
| Delete        | O(n) | n = word length                      |
| Prefix search | O(n) | n = prefix length                    |

## Graph

| Operation            | Adjacency List | Adjacency Matrix |
| -------------------- | -------------- | ---------------- |
| Add node             | O(1)           | O(V²)            |
| Add edge             | O(1)           | O(1)             |
| Remove edge          | O(E)           | O(1)             |
| Check if edge exists | O(E)           | O(1)             |
| Get all neighbours   | O(E)           | O(V)             |
| Space                | O(V+E)         | O(V²)            |

## Sorting

| Algorithm   | Best       | Average    | Worst      | Space    | Stable |
| ----------- | ---------- | ---------- | ---------- | -------- | ------ |
| Bubble sort | O(n)       | O(n²)      | O(n²)      | O(1)     | Yes    |
| Quick sort  | O(n log n) | O(n log n) | O(n²)      | O(log n) | No     |
| Merge sort  | O(n log n) | O(n log n) | O(n log n) | O(n)     | Yes    |

## Searching

| Algorithm     | Time     | Space | Requirement                         |
| ------------- | -------- | ----- | ----------------------------------- |
| Linear search | O(n)     | O(1)  | None                                |
| Binary search | O(log n) | O(1)  | Sorted array                        |
| Jump search   | O(√n)    | O(1)  | Sorted array + limited attempts     |
| BFS           | O(V+E)   | O(V)  | None                                |
| DFS           | O(V+E)   | O(V)  | None                                |
| Dijkstra      | O(V²+E)  | O(V)  | Weighted graph, no negative weights |
