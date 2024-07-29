//Task - 09: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search(BFS).

//Task - 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    // Method to add a vertex
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    // Method to add an edge
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList.has(vertex1)) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList.has(vertex2)) {
        this.addVertex(vertex2);
      }
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // Assuming an undirected graph
    }
  
    // Method to perform breadth-first search (BFS)
    bfs(startingNode) {
      const visited = new Set();
      const queue = [startingNode];
      visited.add(startingNode);
  
      while (queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode);
  
        const neighbors = this.adjacencyList.get(currentNode);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  
    // Method to find the shortest path using BFS
    findShortestPath(startNode, endNode) {
      const visited = new Set();
      const queue = [[startNode]];
      visited.add(startNode);
  
      while (queue.length > 0) {
        const path = queue.shift();
        const node = path[path.length - 1];
  
        if (node === endNode) {
          return path;
        }
  
        const neighbors = this.adjacencyList.get(node);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            const newPath = [...path, neighbor];
            queue.push(newPath);
          }
        }
      }
      return null; // Return null if no path is found
    }
  }
  
  // Example usage of Graph class
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('D', 'E');
  graph.addEdge('B', 'E');
  
  console.log("BFS traversal starting from node 'A':");
  graph.bfs('A');
  
  const startNode = 'A';
  const endNode = 'E';
  const shortestPath = graph.findShortestPath(startNode, endNode);
  
  console.log(`Shortest path from ${startNode} to ${endNode}:`);
  console.log(shortestPath);
  