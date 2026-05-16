function search(curr: BinaryNode<number> | null, needle: number): boolean {
  if (!curr) {
    return false;
  }
  if (curr.value === needle) {
    return true;
  }

  if (curr.value < needle) {
    return search(curr.right, needle);
  }
  return search(curr.left, needle);
}

function insert(
  curr: BinaryNode<number> | null,
  value: number,
): BinaryNode<number> {
  if (!curr) return { value, left: null, right: null };
  if (value < curr.value) curr.left = insert(curr.left, value);
  else curr.right = insert(curr.right, value);
  return curr;
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}

export function addNode(
  head: BinaryNode<number>,
  value: number,
): BinaryNode<number> {
  return insert(head, value);
}
