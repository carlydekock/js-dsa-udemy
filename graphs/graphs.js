class Graph {
  constructor(){
    this.adjacencyList = {};
  }

  //Add a vertex
  //Adds a key to the adjacency list with the name of the vertex and set its value to be an empty array
  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = [];
    }
  }
}

let g = new Graph();
g.addVertex('Seattle');
g.addVertex('San Francisco');
g.addVertex('Portland');
console.log(g);