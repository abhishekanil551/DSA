// Cycle Detection (Undirected Graph)

n = 5
edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 1],
  [3, 4]
]

function hasCycle(n, edges) {
  const adj = new Array(n).fill(0).map(() => []);
  for (let [v, u] of edges) {
    adj[v].push(u);
    adj[u].push(v);
  }
  const visited = new Set();

  function dfs(node, parent) {
    visited.add(node);
    for (let neighbor of adj[node]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true
      } else {
        if (neighbor !== parent) {
          return true
        }
      }
    }
    return false
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      if (dfs(i, -1)) return true;
    }
  }
  return false
}
console.log(hasCycle(n, edges))
