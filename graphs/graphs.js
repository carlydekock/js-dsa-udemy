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

  //Depth first traversal - iterative
  //Let S be a stack
  //Push the starting node
  //While S is not empty
    //Vertex = S.pop()
    //If vertex is not labeled as discovered:
      //Visit vertex (add to result list)
      //Label vertex as discovered
      //For each of vertex's neighbors, N do S.push(N)

  //The function should accept a starting node
  //Create a stack to help keep track of vertices (use a list/array)
  //Create a list to store the end result, to be returned at the very end
  //Create an object to store visited vertices
  //Add the starting vertex to the stack, and mark it visited
  //While the stack has something in it:
    //Pop the next vertex from the stack
    //If that vertex hasnt been visited yet
      //Mark it as visited
      //Add it to the result list
      //Push all of its neighbors into the stack
  //Return the result array
  
  dfsIterative(start){
    const stack = [start];
    const results = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while(stack.length){
      currentVertex = stack.pop();
      results.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      })
    }
    return results;
  }

  //Breadth First: prioritizes visiting neighbors of given depth before moving downwards or visiting neighbors of neighbors
  //Function should accept a starting vertex
  //Create a queue (use an array), place starting vertex in it
  //Create an array to store nodes visited
  //Create an object to store nodes visited
  //Mark the starting vertex as visited
  //Loop as long as there is anything in the queue
  //Remove the first vertex from the queue and push it into the array that stores nodes visited
  //Loop over each vertex in the adjacency list for the vertex you are visiting
  //If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
  //Once finished looping, return the array of visited nodes

  breadthFirst(start){
    const queue = [start];
    const results = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while(queue.length){
      currentVertex = queue.shift();
      results.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
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
console.log(g.breadthFirst('A'));
