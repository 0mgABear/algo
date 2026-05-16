## Trie

named afte re"trie"val tree
a.k.a prefix trees / digital trees

easiest way to visualise: auto-complete, O(1) time

- root : no value
- english language tree

Q:What is a trie (pronounced 'tree') and what is its primary use case?
A:A trie is a tree-like data structure used for efficient retrieval and autocomplete functionality, where each path from the root to a node represents a word or prefix, typically with 26 possible children for English language words.

Q:How can a trie efficiently mark a complete word?
A:A trie can mark a complete word by either adding a special 'asterisk' child or by using an 'isWord' Boolean flag on the node representing the last character of the word.

Q:What traversal method can be used to retrieve words in a trie in alphabetical order?
A:A depth-first search (pre-order traversal) can be used to retrieve words in a trie in alphabetical order by adding each encountered word to a results list during the traversal.

Q:What is the time complexity of lookup in a trie?
A:Trie lookup is considered O(1) or constant time, as the lookup time is bounded by the maximum length of words in the dictionary, not the total number of words stored.

Q:How can a trie be enhanced for more sophisticated autocomplete functionality?
A:A trie can be enhanced by adding a score or frequency metric to each word, allowing prioritization of more frequently used or recently selected words during autocomplete.
