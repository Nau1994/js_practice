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
          currentNode.right=new Node(value); 
          return currentNode;
        }
      }
      else{
        if(currentNode.left !==null){
          currentNode=currentNode.left;
        }
        else{
          currentNode.left=new Node(value); 
          return currentNode;
        }
      }
    }
    
    return currentNode;
  }
}
bst= new BST();
console.log(bst);
console.log(bst.insert(50));
console.log(bst.insert(60));
console.log(bst.insert(40));
console.log(bst.insert(35));
console.log(bst.insert(45));
console.log(bst.insert(55));
console.log(bst.insert(65));
console.log(bst.lookup(40));
console.log(bst.lookup(50));
console.log(bst.lookup(60));