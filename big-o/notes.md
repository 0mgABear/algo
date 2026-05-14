# Big O

Categorise algorithms time or memory requirements based on input.
As your input grows, how fast does computation / memory grow?

1. Growth is with respect to the input.
2. Constants are dropped.

Not trying to get exact time.

## O(n) Example

```typescript
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }
  return sum;
}
```

Simplest trick: look for loops

```typescript
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    const charCode = n.charCodeAt(i);
    // Capital E
    if (charCode === 69) {
      return sum;
    }

    sum += charCode;
  }
  return sum;
}
```
