// Shortest Path (Unweighted Graph)

function shortestPath(n,edges,start,end){
    const adj = new Array(n).fill(0).map(()=>[]);
    for(let [v,u] of edges){
        adj[v].push(u);
        adj[u].push(v);
    }
    
    const visited = new Set();
    const queqe = [[start , 0]];
    visited.add(start);
    while( queqe.length > 0){
        const [node , dist] = queqe.shift();
        if(node === end) return dist;
        
        for(let neighbor of adj[node]){
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                queqe.push([neighbor,dist+1])
                console.log("neighbor", neighbor, "newDist", dist + 1);
            }
        }
    }
    return -1;
}


let n = 6;
let edges = [
  [0,1],
  [0,2],
  [1,3],
  [2,4],
  [3,5],
  [4,5]
];

console.log(shortestPath(n, edges, 0, 5));
