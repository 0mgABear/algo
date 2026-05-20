Egg Drop Problem
You are given k eggs and a building with n floors. Find the minimum number of drops needed in the worst case to determine the highest floor from which an egg can be dropped without cracking.
Constraints:

If an egg cracks, you cannot use it again
If an egg survives, you can reuse it
All eggs are identical
You are looking for the worst case minimum drops

Example input: k = 2, n = 100
Example output: 14

```python
import math

def egg_drop_sqrt(n):
    return math.ceil(math.sqrt(n))
```

```python
def egg_drop(k, n):
    # memo[i][j] = min drops for i eggs, j floors
    memo = {}

    def solve(k, n):
        if n == 0 or n == 1: return n  # 0 floors = 0, 1 floor = 1
        if k == 1: return n            # 1 egg = linear scan
        if (k, n) in memo: return memo[(k, n)]

        min_drops = float('inf')
        for floor in range(1, n + 1):
            # worst case of: egg cracks vs egg survives
            worst = 1 + max(
                solve(k - 1, floor - 1),  # cracks, check below
                solve(k, n - floor)        # survives, check above
            )
            min_drops = min(min_drops, worst)

        memo[(k, n)] = min_drops
        return min_drops

    return solve(k, n)
```

```typescript
function eggDrop(k: number, n: number): number {
  const memo: Record<string, number> = {};

  function solve(k: number, n: number): number {
    if (n === 0 || n === 1) return n;
    if (k === 1) return n;

    const key = `${k},${n}`;
    if (memo[key] !== undefined) return memo[key];

    let minDrops = Infinity;
    for (let floor = 1; floor <= n; floor++) {
      const worst =
        1 +
        Math.max(
          solve(k - 1, floor - 1), // cracks
          solve(k, n - floor), // survives
        );
      minDrops = Math.min(minDrops, worst);
    }

    memo[key] = minDrops;
    return minDrops;
  }

  return solve(k, n);
}
```
