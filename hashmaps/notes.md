## Maps

too easy to think of {} or new Map and assume we know them.

### Terminology

- load factor: amount of data points vs storage (data.len / storage.capacity)
  7 items and 10 capacity = load factor of 0.7

key: hashable value, used to look up data

value: associated with a key

collision: when 2 keys map to the same cell

### Concept:

k ==> v, key maps to value. key : consistent hash.
arraylist under the hood
O(1) retrieval

### Q&A

Q:What is the load factor in the context of maps?
A:The load factor is the ratio of the number of data points to the amount of available storage. For example, if seven items are in a map with ten available storage units, the load factor would be 0.7.

Q:What is a collision in a map?
A:A collision occurs when two different keys map to the same storage cell or bucket in the underlying data structure.

Q:What are the key requirements for a hashing function?
A:A hashing function must produce a consistent hash, always returning the same output for a given input, and must convert the key into a numeric value that can be used to determine the storage location.

Q:What is the recommended ideal load factor for a map?
A:The ideal load factor is approximately 0.7, which helps minimize collisions and maintain efficient storage and retrieval operations.

Q:Why do maps typically have O(1) constant lookup time?
A:Maps have O(1) lookup time because hashing functions convert keys to storage indices quickly, and assuming a good hash distribution with minimal collisions, accessing and retrieving a value takes constant time.
