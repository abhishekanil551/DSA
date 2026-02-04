// GRAPH (Adjacency List)
class Graph{
    constructor(isDirected = false){
        this.adj = new Map();
        this.isDirected = isDirected;
    }
    addvertex(vertex){
        if(!this.adj.has(vertex)){
            this.adj.set(vertex,[])
        }
    };
    
    addEdge(u , v , weight = 1){
        this.addvertex(u);
        this.addvertex(v);
        this.adj.get(u).push([v, weight]);
        if(!this.isDirected){
            this.adj.get(v).push([u , [weight]]);
        }
    };
    
    getNeighbors(vertex){
        return this.adj.get(vertex) || [];
    };
    
    print(){
        for(let [vertex,neighbors] of this.adj){
            console.log(`${vertex}->${neighbors.map(n => n[0]).join(', ')}`)
        }
    };
    
    // DFS (Depth First Search)
    dfs(start){
        const visited = new Set();
        const traverse = (vertex)=>{
            if(visited.has(vertex)) return;
            console(vertex);
            visited.add(vertex);

            for(let neighbors of this.adj.get(vertex)){
                traverse(neighbors);
            }
        }
        traverse(start);
    };

    // BFS (Breadth First Search)
    bfs(start){
        const visited = new Set();
        const queue = [];
        while(queue.length > 0){
            const vertex = queue.shift();
            console(vertex);
            for(let neighbor of this.adj.get(vertex)){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor)
                }
            }
        } 
    };
    
};

const g = new Graph(false); // undirected
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.print();

// Weighted example:
const wg = new Graph(false);
wg.addEdge('A', 'B', 5);
wg.addEdge('A', 'C', 3);