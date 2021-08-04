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

  //Dijkstra's shortest path: should accept starting and ending vertex
  //Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity,
    //except for the starting vertex which should have a value of 0
  //After setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex,
    //which should have a priority of 0 because that's where we begin
  //Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
  //Start looping as long as there is anything in the priority queue
    //Dequeue a vertex from the priority queue
    //If that vertex is the same as the ending vertex, we are done
    //Otherwise, loop through each value in the adjacency list at that vertex
      //Calculate the distance to that vertex from the starting vertex
      //If the distance is less than what is currently stored in our distances object
        //Update the distances object with new lower distance
        //Update the previous object to contain that vertex
        //Enqueue the vertex with the total distance from the start node

  dijkstra(start, finish){
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at the end
    let smallest;
    
    //build up initial state - looping over adjacency list
    for(let vertex in this.adjacencyList){
      if(vertex === start){
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    //loop as long as there is something to visit
    while(nodes.values.length){
      smallest = nodes.dequeue().val;
      if(smallest === finish){
        //Done, need to build path to return
        while(previous[smallest]){
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if(smallest || distances[smallest] !== Infinity){
        for(let neighbor in this.adjacencyList[smallest]){
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if(candidate < distances[nextNeighbor]){
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}


let g = new WeightedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);
// console.log(g.adjacencyList);

console.log(g.dijkstra("A", "E"));
