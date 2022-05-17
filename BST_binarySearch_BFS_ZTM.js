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

//                    root(50)
//                /              \
//         left(40)             right(60)
//          /    \             /        \
//   left(35)    right(45)  left(55)    right(65)

class Node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}

class BST{
  constructor(){
    this.root=null;
  }

  insert(value){
    if (this.root===null) {
      this.root=new Node(value);
      return this;
    }
    let currentNode=this.root;
    while(1){
      if (value >= currentNode.value){
        if(currentNode.right !==null){
          currentNode=currentNode.right;
        }
        else{
          currentNode.right=new Node(value); 
          return this;
        }
      }
      else{
        if(currentNode.left !==null){
          currentNode=currentNode.left;
        }
        else{
          currentNode.left=new Node(value); 
          return this;
        }
      }
    }
    
    return this;
  }

  lookup(value){
    let currentNode=this.root;
    while(1){
      if (value === currentNode.value){
        return currentNode;
      }
      else if (value > currentNode.value){
        if(currentNode.right !==null){
          currentNode=currentNode.right;
        }
        else{
           
          console.log('Value not present !!')
          return null ;
        }
      }
      else{
        if(currentNode.left !==null){
          currentNode=currentNode.left;
        }
        else{
          
          console.log('Value not present !!')
        return null ;
        }
      }
    }
    console.log('Value not present !!')
    return null ;
  }

    binarySearch(value){
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
       
    console.log('Value not present !!')
    return null ;
  }

  BreadthFirstSearch(){
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while(queue.length > 0){
      currentNode = queue.shift();
      list.push(currentNode.value);
      if(currentNode.left) {
        queue.push(currentNode.left);
      }
      if(currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }


  remove(value){
    let currentNode=this.root;
    while(1){
      if (value === currentNode.value){
        return currentNode;
      }
      else if (value > currentNode.value){
        if(currentNode.right !==null){
          if(currentNode.right.value ===value){
            let removed=currentNode.right;
            let temp =currentNode.right.left;
            currentNode.right=currentNode.right.right;
            this._last_left(currentNode.right).left=temp;
            return removed;
          }
          currentNode=currentNode.right;
        }
        else{
          console.log('Value not present !!')
          return null ;
        }
      }
      else{
        if(currentNode.left !==null){
          if(currentNode.left.value ===value){
            let removed=currentNode.left;
            let temp =currentNode.left.right;
            currentNode.left=currentNode.left.left;
            this._last_right(currentNode.left).right=temp;
            return removed;
          }
          currentNode=currentNode.left;
        }
        else{
          console.log('Value not present !!')
          return null ;
        }
      }
    }
    
    console.log('Value not present !!')
    return null ;
  }

  


  
//                    root(50)
//                /              \
//         left(40)             right(60)
//          /    \             /        \
//   left(35)    right(45)  left(55)    right(65)
  _last_right(currentNode){
  while(1){
    if (currentNode.right === null){
      return currentNode;
    }
    else{
      currentNode =currentNode.right;
    }
  }
    
  }

  _last_left(currentNode){
  while(1){
    if (currentNode.left === null){
      return currentNode;
    }
    else{
      currentNode =currentNode.left;
    }
  }
    
  }

  
  
}
bst= new BST();

(bst.insert(50));
(bst.insert(60));
(bst.insert(40));
(bst.insert(35));
(bst.insert(33));
(bst.insert(32));
(bst.insert(34));
(bst.insert(37));
(bst.insert(36));
(bst.insert(39));
(bst.insert(45));
(bst.insert(55));
(bst.insert(65));
//console.log(bst.binarySearch(40));
//console.log(bst.binarySearch(50));
console.log(bst.lookup(53));
//console.log(JSON.stringify(bst));
console.log(bst.remove(40));
console.log(bst.BreadthFirstSearch());
//console.log(JSON.stringify(bst));
