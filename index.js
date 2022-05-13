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
    if (this.length===0){console.log('stack is empty'); return;}
    let data = this.top.value;
     this.top=this.top.next;
     this.length=this.length-1;
    if (this.length===0){this.bottom=null;}
    return data;
  }

  peek(){
    if (this.length===0){console.log('stack is empty');return;}
    console.log(this.top.value);
  }

  traverse(){
    let currentNode = this.top;
    let result = [];
    while(currentNode!==null){
      result.push(currentNode.value);
      currentNode=currentNode.next;
    }
    console.log( result);
  }
}

let stack = new Stack();
stack.peek();
stack.traverse();
stack.push(10);
//console.log(stack);
console.log(stack.pop());
stack.peek();stack.traverse();
//console.log(stack);
stack.push(20);stack.push(60);stack.push('a');
stack.peek();stack.traverse();
//console.log(stack);
console.log(stack.pop());
stack.peek();stack.traverse();
//console.log(stack);
console.log(stack.pop());
stack.peek();stack.traverse();
//console.log(stack);
