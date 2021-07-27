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

  //Depth first traversal - recursive (explore as far down a branch as possible before "backtracking")
  //If vertex is empty - return (this is base case)
  //Add vertex to results list
  //Mark vertex as visited
  //For each neighbor in vertex's neighbors:
    //If neighbor is not visited:
      // recursively call DFS on neighbor
  
  //More detailed pseudocode
  //Function should accept a starting node
  //Create a list to store the end result, to be returned at the very end
  //Create an object to store visited vertices
  //Create a helper function which accepts a vertex
    //The helper function should return early if the vertex is empty
    //The helper function should place the vertex it accepts into the visited object and pus that vertex into the result array
    //Loop over all of the values in the adjacencyList for that vertex
    //If any of those values have not been visited, recursively invoke the helper function with that vertex
  //Invoke the helper function with the starting vertex
  //Return the result array

  dfsRecursive(start){
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    
    function dfs(vertex){
      if(!vertex) return null;
      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          return dfs(neighbor);
        }
      });
    }
    dfs(start);
    return results;
  }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
console.log(g.dfsRecursive('A'));
