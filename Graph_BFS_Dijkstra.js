// how search happened in database?

//what is use of DFS and BFS ?
//both O(N) used to searching(traversing) for graph(unordered tree)
//BFS(preferable if have higher level info)
//PROS:-Used in shortest path tree,can be used to identifed the level of node,or if u have additional info like level node then closest node can be find at the level
//Cons:-queue take more memory

//DFS(preferable if have lower level info)
//PROS:-stack take less memory,Does Path(S->D) exits
//Cons:-can get slow 

//What is use of in-order,pre-order,post-order


const A=new Array(100000).fill().map(() => Math.floor(Math.random()*10000));

class Node {
  constructor(value) {
    this.value = value;

  }
}

class Graph {
  constructor() {
    this.adjacentList = {};
    this.numberNode = 0;
    this.node = {};
  }

  addEdge(node1, node2, directedFlag = true, weight = 1) {
    if (directedFlag === true) {
      return this._addDirected(node1, node2, weight);
    }
    else {
      return this._addUndirected(node1, node2, weight);
    }
  }

  

  _addUndirected(node1, node2, weight) {
    if (!this.node[node1]){
      this.node[node1] = new Node(node1);
      this.adjacentList[node1] = {};
      this.numberNode++;
    }

    if (!this.node[node2]) {
      this.node[node2] = new Node(node2);
      this.adjacentList[node2] = {};
      this.numberNode++;
    }
    
    this.adjacentList[node1][node2] = weight;
    this.adjacentList[node2][node1] = weight;
    return this;
  }

  _addDirected(node1, node2, weight) {
    if (!this.node[node1]){
      this.node[node1] = new Node(node1);
      this.adjacentList[node1] = {};
      this.numberNode++;
    }

    if (!this.node[node2]) {
      this.node[node2] = new Node(node2);
      this.adjacentList[node2] = {};
      this.numberNode++;
    }
    
    this.adjacentList[node1][node2] = weight;
    return this;
  }

  BreadthFirstSearch(source){
    let currentNode = source;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while(queue.length > 0){
      currentNode = queue.shift();
      
      if(!list.includes(currentNode)) {
          list.push(currentNode);
          }
      for (const item in this.adjacentList[currentNode]) {
          if(!list.includes(item)) {
          queue.push(item);
          }
          }
      
    }
    return list;
  }

  bfsPath(source){
    let currentNode = source;
    let list = [];
    let path={};
    path[currentNode]=[currentNode,0];
    let queue = [];
    queue.push(currentNode);

    while(queue.length > 0){
      
      currentNode = queue.shift();
      
      
      if(!list.includes(currentNode)) {
        
          list.push(currentNode);
        
          }
     
      
      for (const item in this.adjacentList[currentNode]) {
          if(!list.includes(item)) {
          queue.push(item);
            let p=path[currentNode][0]+item;
            let l=path[currentNode][1]+1;
            path[item]=[p,l];
          }
          }
      
    }
    return path;
  }

  Dijkstra(source){
    let currentNode = source;
    let list = [];
    let path={};
    path[currentNode]=[currentNode,0];
    let queue = [];
    queue.push(currentNode);

    while(queue.length > 0){
      
      currentNode = queue.shift();
      
      
      if(!list.includes(currentNode)) {
        
          list.push(currentNode);
        
          }
     
      
      for (const item in this.adjacentList[currentNode]) {
        if (!path[item] || this.adjacentList[currentNode][item]+path[currentNode][1]<path[item][1])
          {
          queue.push(item);
            let p=path[currentNode][0]+item;
            let l=path[currentNode][1]+this.adjacentList[currentNode][item];
            path[item]=[p,l];
          }
          }
      
    }
    return path;
  }


}

const graph = new Graph();
(graph.addEdge('A', 'B', false,2));
(graph.addEdge('B', 'C', false,1));
(graph.addEdge('C', 'E', false,2));
(graph.addEdge('B', 'D', false,3));
(graph.addEdge('D', 'E', false,4));
(graph.addEdge('A', 'E', false,2));
(graph.addEdge('E', 'D', false,1));
(graph.addEdge('D', 'F', false,2));
console.log(graph);
//traversal
console.log('traversal--------->',graph.BreadthFirstSearch('A'));
//path and level
console.log('path and level--------->',graph.bfsPath('A'));
//path and shortest path
console.log('shortest path--------->',graph.Dijkstra('A'));


