Reverse a singly linked list

Problem: only have 1 direciton, each node only knows what is in front, not behind. (You only have a next, not a prev)

Need a way to keep track of previous.

3 pointers:

- prev
- curr
- next

```python
def reverse(head):
    prev = None
    curr = head
    while curr:
        next = curr.next    # save next before breaking link
        curr.next = prev    # reverse the pointer
        prev = curr         # move prev forward
        curr = next         # move curr forward
    return prev             # prev is new head
```

```typescript
function reverse<T>(head: Node<T> | undefined): Node<T> | undefined {
  let prev: Node<T> | undefined = undefined;
  let curr: Node<T> | undefined = head;
  while (curr) {
    const next = curr.next; // save next
    curr.next = prev; // reverse pointer
    prev = curr; // move prev forward
    curr = next; // move curr forward
  }
  return prev;
}
```
