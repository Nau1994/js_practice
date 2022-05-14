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
//console.log(bst.lookup(40));
//console.log(bst.lookup(50));
//console.log(bst.lookup(36));
console.log(JSON.stringify(bst));
console.log(bst.remove(40));
console.log(JSON.stringify(bst));