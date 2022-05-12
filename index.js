class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class MylinkedList{
constructor(value){
  this.head=new Node(value);
  this.tail=this.head;
  this.length=1;
}
  append(value){
    //create node
    let node=new Node(value);
    this.tail.next = node ;
    this.tail=node;
     this.length=this.length+1;
    return this;
    
  }

  prepend(value){
    //create node
    let node=new Node(value);
    
    
    
        node.next=this.head;
        this.head=node;
        
        this.length=this.length+1;
       
    return this;
    
  }

  insert(index,value){
    //create node
    let node=new Node(value);
    let currentNode = this.head;
    if (index===1) {
        
        return this.prepend(value) ;
      }
    
    if (index > this.length){ console.log("index couldn't be greater than length"+"("+this.length+")" +" of list"); return ;} 
    
    while(1){
      index=index-1;
      if (index===1) {
        node.next=currentNode.next;
        currentNode.next=node;
        
        this.length=this.length+1;
        return ;
      }
      currentNode=currentNode.next;
      
    }
    
  }

  delete(value){
    
    let currentNode = this.head;
    if (currentNode.value===value) {
        this.head=currentNode.next;
        this.length=this.length-1;
        console.log("Deleted !!");
        return ;
      }
    
    while(1){
      if (currentNode===this.tail) {
        console.log("Couldn't find value in list");
      console.log("Not Deleted !!");
        return ;
      }
      if (currentNode.next.value===value) {
        if (currentNode.next===this.tail) {
        this.tail=currentNode;
        }
        currentNode.next=currentNode.next.next;
        
        this.length=this.length-1;
        console.log("Deleted !!");
        return ;
      }
      currentNode=currentNode.next;
      
    }
    
  }

  traverse(){
    let currentNode = this.head;
    let result = '';
    while(1){
      
      if (currentNode===this.tail) {
        result=result+currentNode.value;
        return result;
      }
      result=result+currentNode.value+'->';
      currentNode=currentNode.next;
    }
  }
  
}

let mylinkedList =new MylinkedList(10);
mylinkedList.append(16);
mylinkedList.append(13);
mylinkedList.insert(1,11);
mylinkedList.insert(4,17);
mylinkedList.append(19);
mylinkedList.delete(19);
mylinkedList.delete(13);
mylinkedList.delete(11);
mylinkedList.prepend(23);
console.log(mylinkedList.traverse(),mylinkedList.length);
console.log(mylinkedList);