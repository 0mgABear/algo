## Graphs

Euler

Series of nodes, with some amount of connections. No rules.
Alot of connections / some connections / no connections.

### Terminology

cycle: when you start at Node(X), follow the links and end back at Node(x)
acylic: graph that contains no cycles
connected: every node has a path to another node
directed: direction to the connections (Think Twitter)

- there could also be asymmetric direction

undirected: links have no association, can go both ways
weighted: some value associated with them
dag: directed, acyclic graph

node: a point or vertex on the graph
edge: connection betwixt two nodes

Big O: commonly stated interms of V and E where V = Vertices and E = edges
O(V\*E): check every vertex and at every vertex we check every edge

### Representation of Graph

1. Adjacency List (predominantly)

- list of list of edges (where it's going and associated weights)

```
const graph = [
  [[1, 5], [2, 2]],  // A (index 0) → B(index 1, weight 5), C(index 2, weight 2)
  [[3, 1]],          // B (index 1) → D(index 3, weight 1)
  [[3, 4]],          // C (index 2) → D(index 3, weight 4)
  [],                // D (index 3) → nowhere
];
```

2. Adjacency Matrix
   O(V^2)

```
A   B   C   D
A  [ 0,  5,  2,  0 ]
B  [ 0,  0,  0,  1 ]
C  [ 0,  0,  0,  4 ]
D  [ 0,  0,  0,  0 ]
```

### Searches

- BFS and DFS still exist on a graph
- all trees are graphs

### Use Cases

**Adjacency List** - best for sparse graphs (few connections)

- Space: O(V + E) --> DFS
- Check if edge exists: O(E)
- Get all neighbours: O(E)

**Adjacency Matrix** - best for dense graphs (many connections)

- Space: O(V²)
- Check if edge exists: O(1)
- Get all neighbours: O(V)

### Dijkstra's Shortest Path

- calculating shortest path from 1 node to all other nodes in the graph
- requires a previous array
- only non-negative weights

Steps:

1. prev: [-1,...]
2. seen : [f,....]
3. dist : array of infinitys, source is 0 ( no need to travel)

--> get the nearest unseen / unvisited node
while hasUnvisited(){
lo = getlowestUnseen()
seen[lo]=true
for edge in lo {
if seen[edge] continue
dist = dist[lo] + edge.weight
if dist < dist[edge]{
prev[edge] = lo
distance[edge] = dist
}
}
}

Running Time:

### Q&A

Q:What is a graph defined as in this context?
A:A series of nodes with some amount of connections, with no strict rules about connections, directionality, or structure

Q:What defines a cycle in a graph?
A:A path through at least three nodes where you can start at a node and return to that same node by traversing through other nodes

Q:What is a directed acyclic graph (DAG)?
A:A graph with directional connections between nodes where no path can create a cycle, meaning you cannot return to a previously visited node

Q:What is the difference between a vertex and an edge in graph terminology?
A:A vertex (or node) is a point in the graph, while an edge is the connection between two vertices

Q:What characterizes a connected graph?
A:A graph where every node can reach every other node through some path of connections

Q:What are the two major ways graphs are typically represented?
A:Adjacency list and adjacency matrix

Q:What is the primary drawback of using an adjacency matrix?
A:It takes O(n^2) memory and requires significant setup, making it memory-intensive for graphs with many nodes

Q:In an adjacency list representation, what information is typically stored for each node?
A:A list of edges, where each edge includes the destination node and potentially a weight associated with the connection

Q:What additional data structures are needed to track path information during a breadth-first search on a graph?
A:A 'previous' array (to track node origins) and a 'seen' or 'visited' array (to mark explored nodes)

Q:How can you reconstruct the path taken during a breadth-first search?
A:By walking backwards through the 'previous' array from the target node to the source node, tracing each node's origin

Q:Initialize a seen array with all false values and a previous array with all values set to -1. Mark the source node as seen in the seen array.
A:What are the initial steps in setting up a graph traversal with a seen array and previous array?

Q:What does graph[current] represent when traversing a weighted adjacency matrix?
A:It represents the row of connections for the current node, showing the edges connecting the current node to other nodes in the graph.

Q:What conditions are checked before adding a node to the queue during breadth-first search?
A:Check if there is an edge to the node and if the node has not been seen before. If both conditions are met, mark the node as seen, set its previous node, and add it to the queue.

Q:What conditions are checked before adding a node to the queue during breadth-first search?
A:Check if there is an edge to the node and if the node has not been seen before. If both conditions are met, mark the node as seen, set its previous node, and add it to the queue.

Q:How is the path reconstructed after completing a breadth-first search?
A:Start at the destination node and use the previous array to trace back to the source node, building the path in reverse. Then reverse the path to get the correct order from source to destination.

Q:What is the significance of checking previous[current] != -1 in the path reconstruction process?
A:It determines when to stop tracing back the path. When the previous node is -1, it means the current node is the source node, and the path reconstruction is complete.

Q:What are the three key components when performing a depth-first search (DFS) on a graph?
A:The three key components are pre-operation (visiting the node and adding it to the path), recursive step (exploring connected edges), and post-operation (removing the node from the path)

Q:What does an adjacency list represent in a graph data structure?
A:An adjacency list represents the graph edges, showing which nodes are connected and the associated weights for each connection

Q:What are the primary base cases when implementing a recursive graph traversal function?
A:The primary base cases are: (1) finding the target node (needle), and (2) checking if the current node has already been visited

Q:What is the time complexity of a depth-first search (DFS) on a graph?
A:The time complexity is O(V + E), where V represents vertices and E represents edges, as each vertex and edge is visited approximately once

Q:Why is tracking node visitation important in graph traversal algorithms?
A:Tracking node visitation prevents infinite loops and ensures each node is explored only once, which is crucial for efficiently searching through graph structures

Q:What is the primary constraint for using Dijkstra's shortest path algorithm?
A:The graph must have non-negative edge weights. If negative weights are present, the algorithm will not work correctly.

Q:What are the key data structures needed to implement Dijkstra's shortest path algorithm?
A:Three primary data structures are needed: a previous array (to track path), a seen/visited array (to mark processed nodes), and a distance array (to track shortest distances from the source node)

Q:How is the initial source node configured in Dijkstra's algorithm?
A:The source node's distance is set to 0, and it is marked as seen/visited, while all other nodes have a distance of infinity

Q:What is the core strategy of Dijkstra's shortest path algorithm?
A:Select the unvisited node with the lowest distance, mark it as seen, and then update the distances of its neighboring nodes by comparing the current known distance with a potentially shorter path through the current node

Q:What type of algorithm is Dijkstra's shortest path classified as?
A:Dijkstra's algorithm is classified as a greedy algorithm, where it makes the locally optimal choice at each step with the hope of finding a global optimum

Q:What are the two key functions needed to implement Dijkstra's algorithm with an adjacency list?
A:hasUnvisited and getLowestUnvisited - these functions help track and select the next unvisited node with the lowest distance

Q:What are the primary data structures used in Dijkstra's algorithm implementation?
A:A 'seen' boolean array to track visited nodes, A 'distances' array to store shortest known distances, A 'previous' array to track path reconstruction

Q:How is the initial distance array populated in Dijkstra's algorithm?
A:The source node's distance is set to 0, and all other nodes' distances are set to infinity, representing an initially unreachable state

Q:What is the core logic for updating distances in Dijkstra's algorithm?
A:For each unvisited node, calculate the distance by adding the current node's distance to the edge weight. If this new distance is less than the previously known distance, update the distance and path

Q:How is the shortest path reconstructed after finding the distances?
A:By using the 'previous' array to track back from the destination node to the source node, collecting nodes in order, and then reversing the path
