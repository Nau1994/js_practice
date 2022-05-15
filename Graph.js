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

  spanningTree(node,path=''){
    let resultPath=[];
   
    path=path+[node];

    if (Object.entries(this.adjacentList[node]).map(item => item[0]).every(item1 =>path.split('').includes(item1))){
      resultPath=path;
      
      return resultPath;
    }
    
    for (let vertex in this.adjacentList[node]){
      if (!path.includes(vertex)){
        
        resultPath.push(this.spanningTree(vertex,path));
        
      }
      
    }
    return resultPath;
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


}

const graph = new Graph();
(graph.addEdge('A', 'B', false));
(graph.addEdge('B', 'C', false));
(graph.addEdge('C', 'E', false));
(graph.addEdge('B', 'D', false));
(graph.addEdge('D', 'E', false));
(graph.addEdge('A', 'E', false));
(graph.addEdge('E', 'D', false));
(graph.addEdge('D', 'F', false));
//console.log(JSON.stringify(graph.spanningTree('A')));
console.log(graph);