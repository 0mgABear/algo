## Trees

- file system is a tree
- dom is a tree
- massively important in compilers
- abstract syntax tree
- root: top most node / most parent node

### Terminology

- height: longest path from the root to the most hcild node
- binary tree - a tree in which at most 2 children, at least 0 children (most common)
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
