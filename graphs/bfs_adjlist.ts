declare type WeightedAdjacencyList = [number, number][][];

export default function bfs(
  graph: WeightedAdjacencyList,
  source: number,
  needle: number,
): number[] | null {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);
  seen[source] = true;
  const q: number[] = [source];

  do {
    const curr = q.shift() as number;
    if (curr === needle) break;

    const adjs = graph[curr];
    for (let i = 0; i < adjs.length; ++i) {
      const [neighbour] = adjs[i]; // destructure, ignore weight for BFS
      if (seen[neighbour]) continue;
      seen[neighbour] = true;
      prev[neighbour] = curr;
      q.push(neighbour);
    }
  } while (q.length);

  let curr = needle;
  const out: number[] = [];
  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }
  if (out.length) {
    return [source].concat(out.reverse());
  }
  return null;
}
