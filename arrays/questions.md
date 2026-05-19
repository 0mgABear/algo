Task 1:
Given an array where each element is a single character, reverse the array in place.

Example input:

["h","e","l","l","o"," ","m","y"," ","n","a","m","e"," ","i","s"," ","m","a","x"]

Example output:
["x","a","m"," ","s","i"," ","e","m","a","n"," ","y","m"," ","o","l","l","e","h"]

Solve using:

a. No built-in functions (two pointer swap)
b. Built-in functions

Task 2:
Given the same character array, reverse the order of words while keeping each word's characters intact.
Example input:
["h","e","l","l","o"," ","m","y"," ","n","a","m","e"," ","i","s"," ","m","a","x"]
Example output:
["max", "is", "name", "my", "hello"]
Constraints:

Words are separated by a single space
No trailing space after the last word

```python
# a. no built-in (two pointer)
inp = ["h","e","l","l","o"," ","m","y"]
left, right = 0, len(inp) - 1
while left < right:
    inp[left], inp[right] = inp[right], inp[left]
    left += 1
    right -= 1

# b. built-in
inp.reverse()        # in-place
# or
inp[::-1]            # returns new array, original unchanged
```

```typescript
// a. no built-in (two pointer)
const inp = ["h","e","l","l","o"," ","m","y"];
let left = 0, right = inp.length - 1;
while (left < right) {
    [inp[left], inp[right]] = [inp[right], inp[left]];  // swap
    left++;
    right--;
}

// b. built-in
inp.reverse()        // in-place, modifies original
// or
[...inp].reverse()   // returns new array, original unchanged

```

Palindrome
Given a string, determine if it reads the same forwards and backwards.
Example input: "racecar" → True
Example input: "hello" → False

```python
# a. no built-in (two pointer)
def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

# b. built-in
def is_palindrome(s):
    return s == s[::-1]

```

```typescript
// a. no built-in (two pointer)
function isPalindrome(s: string): boolean {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

// b. built-in
function isPalindrome(s: string): boolean {
  return s === s.split("").reverse().join("");
}
```

Anagram
Given two strings, determine if they are anagrams of each other.
Example input: "listen", "silent" → True
Example input: "hello", "world" → False
