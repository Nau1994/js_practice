class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class Stack{
constructor(){
  this.top=null;
  this.bottom=null;
  this.length=0;
}

  _prepend(value){
    //create node
    let node=new Node(value);
     node.next=this.top;
     this.top=node;
    this.bottom=node;
     this.length=this.length+1;
       
    return this;
    
  }
  
  push(value){
    //create node
    
    if (this.length==0){
      this._prepend(value);
    }
    else{
     let node=new Node(value);
     node.next=this.top;
     this.top=node;
     this.length=this.length+1;
  } 
    return this;
    
  }

  pop(){
    let data = this.top.value;
     this.top=this.top.next;
     this.length=this.length-1;
    if (this.length===0){this.bottom=null;}
    return data;
  }

  peek(){
    console.log(this._traverse());
  }

  _traverse(){
    let currentNode = this.top;
    let result = [];
    while(currentNode!==null){
      result.push(currentNode.value);
      currentNode=currentNode.next;
    }
    return result;
  }
}

let stack = new Stack();
stack.peek();
//console.log(stack);
stack.push(10);
stack.peek();
//console.log(stack);
stack.push(20);
stack.peek();
//console.log(stack);
console.log(stack.pop());
stack.peek();
//console.log(stack);
console.log(stack.pop());
stack.peek();
//console.log(stack);
