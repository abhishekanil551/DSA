// Number of Connected Components in an Undirected Graph

let n = 8;
let edges = [
  [0, 1],
  [1, 2],
  [3, 4],
];

function countComponents(n, edges) {
  let adj = new Array(n).fill(0).map(() => []);
  for (let [v, u] of edges) {
    adj[v].push(u);
    adj[u].push(v);
  }
  const visted = new Set();
  let count = 0;

  function dfs(node) {
    if (visted.has(node)) return;
    visted.add(node);
    for (let neighbor of adj[node]) {
      dfs(neighbor);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visted.has(i)) {
      dfs(i);
      count++;
    }
  }
  return count;
}

console.log(countComponents(n, edges));
