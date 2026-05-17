function hasUnvisited(seen: boolean[], dist: number[]): boolean {
  return seen.some((s, i) => !s && dist[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dist: number[]): number {
  let idx = -1;
  let lowestDistance = Infinity;

  for (let i = 0; i < seen.length; ++i) {
    if (seen[i]) {
      continue;
    }
    if (lowestDistance > dist[i]) {
      lowestDistance = dist[i];
      idx = i;
    }
  }
  return idx;
}

export default function dijkstra_list(
  source: number,
  sink: number,
  arr: WeightedAdjacenyList,
): number[] {
  const seen = new Array(arr.length).fill(false);
  const prev = new Array(arr.length).fill(-1);
  const dist = new Array(arr.length).fill(Infinity);

  dist[source] = 0; //smallest dist possible, already at the source, always 0

  while (hasUnvisited(seen, dist)) {
    const curr = getLowestUnvisited(seen, dist);
    seen[curr] = true;

    const adjs = arr[curr];
    for (let i = 0; i < adjs.length; i++) {
      const edge = adjs[i];
      if (seen[edge.to]) {
        continue;
      }
      const dist = dist[curr] + edge.weight;
      if (dist < dist[edge.to]) {
        dist[edge.to] = dist;
        prev[edge.to] = curr;
      }
    }
  }
  const out: number[] = [];
  let curr = sink;

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  out.push(source);

  return out.reverse();
}
