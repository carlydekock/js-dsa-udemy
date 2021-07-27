//Constructor and methods for undirected graphs

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

  //Add an edge
  //Function should accept two vertices, vertex1 and vertex2
  //Should find in the adjacency list the key of vertex1 and push vertex2 into the array
  //Do the same thing for vertex2
  addEdge(vertex1, vertex2){
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  //Remove an edge
  //Function should accept two vertices, vertex1 and vertex2
  //Should reassign the key of vertex1 to be an array that does not contain vertex2
  //Same thing for the key of vertex2
  removeEdge(vertex1, vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  //Remove a vertex
  //Should loop as long as there are any other vertices in the adjacency list for that vertex
  //Inside the loop, call removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
  //Delete the key in the adjacency list for that vertex
  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex('Seattle');
g.addVertex('San Francisco');
g.addVertex('Portland');
g.addVertex('Salt Lake City');
g.addEdge('Seattle', 'Portland');
g.addEdge('Seattle', 'San Francisco');
g.addEdge('San Francisco', 'Salt Lake City');
g.addEdge('Salt Lake City', 'Portland');
g.removeVertex('Seattle');
console.log(g);