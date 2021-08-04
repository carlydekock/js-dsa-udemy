class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight){
    this.adjacencyList[vertex1].push({node: vertex2, weight: weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight: weight});
  }
}

//Simple priority queue for Dijkstra's algorithm
class PriorityQueue {
  constructor() {
    this.values = [];
  };

  enqueue(val, priority){
    this.values.push({val, priority});
    this.sort();
  };

  dequeue(){
    return this.values.shift();
  };

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

let g = new WeightedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addEdge('A', 'B', 9);
g.addEdge('A', 'C', 5);
g.addEdge('B', 'C', 7);
console.log(g.adjacencyList);


let q = new PriorityQueue();
q.enqueue("B", 3);
q.enqueue("C", 5);
q.enqueue("D", 2);
q.enqueue("Q", 20);
console.log(q.values);
q.enqueue("P", 1.5);
console.log(q.values);
console.log(q.dequeue())