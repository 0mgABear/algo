declare type WeightedAdjacencyMatrix = number[][];

export default function bfs(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number,
): number[] | null {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);
  seen[source] = true;
  const q: number[] = [source];

  do {
    const curr = q.shift() as number;
    if (curr === needle) {
      break;
    }
    const adjs = graph[curr];
    for (let i = 0; i < adjs.length; ++i) {
      if (adjs[i] === 0) {
        continue;
      }
      if (seen[i]) {
        continue;
      }
      seen[i] = true;
      prev[i] = curr;
      q.push(i);
    }
  } while (q.length);

  //build it backwards
  //

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

//source
//know what we are looking for
//return the path that we took
//in a tree, normally we don't consider path since we're just going downwards - still involves a queue
//in a graph - we need a path associated with it

//pre - push

//post - pop

//bfs --> nothing to maintain the shape, so we need to maintain it ourself
//prev = [-1,...] --> an array full of -1s --> whom i came from
//since no node has -1, we don't have to worry about it
//couple it with a seen array = [falses,...] --> array of falses

/* 
Example:
seen = [t, f,...]
prev = [-1,...]
Q = [0]

do {
curr = Q.deque()
if(curr = needle) break
for c in curr
  if seen continue
  else seen[c] = true
  prev[c] = curr
  q.push(c) // enqueue
} while (Q.len);

prev[needle] = -1

*/
