Given an array of integer nums and an integer target, return the indices of the 2 numbers such that they add up to the target

Approach 1: Brute Force, O(N)

```python
def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
```

```typescript
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}
```

Approach 2: Two Pointerm, O(n log n)

```python
def two_sum(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        total = nums[left] + nums[right]
        if total == target:
            return [left, right]
        elif total < target:
            left += 1
        else:
            right -= 1
```

```typescript
function twoSum(nums: number[], target: number): number[] {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const total = nums[left] + nums[right];
    if (total === target) return [left, right];
    else if (total < target) left++;
    else right--;
  }
  return [];
}
```

Approach 3: Hash map

```python
def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
```

```typescript
function twoSum(nums: number[], target: number): number[] {
  const seen: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen[complement] !== undefined) return [seen[complement], i];
    seen[nums[i]] = i;
  }
  return [];
}
```
