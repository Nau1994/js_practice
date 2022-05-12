class MylinkedList{
constructor(value){
  this.head={
    value:value,
    next:null  
  };
  this.tail=this.head;
  this.length=1;
}
  append(value){
    //create node
    let node={
    value:value,
    next:null  
    };
    let NextNode = this.head;
    while(1){
      if (NextNode===this.tail) {
        NextNode.next=node;
    this.tail=node;
    this.length=this.length+1;
        return ;
      }
      NextNode=NextNode.next;
    }
    
  }

  insert(index,value){
    //create node
    let node={
    value:value,
    next:null  
    };
    let NextNode = this.head;
    if (index===1) {
        node.next=NextNode;
        this.head=node;
        
        this.length=this.length+1;
        return ;
      }
    
    if (index > this.length){ console.log("index couldn't be greater than length"+"("+this.length+")" +" of list"); return ;} 
    
    while(1){
      index=index-1;
      if (index===1) {
        node.next=NextNode.next;
        NextNode.next=node;
        
        this.length=this.length+1;
        return ;
      }
      NextNode=NextNode.next;
      
    }
    
  }

  delete(value){
    
    let NextNode = this.head;
    if (NextNode.value===value) {
        this.head=NextNode.next;
        this.length=this.length-1;
        console.log("Deleted !!");
        return ;
      }
    
    while(1){
      if (NextNode===this.tail) {
        console.log("Couldn't find value in list");
      console.log("Not Deleted !!");
        return ;
      }
      if (NextNode.next.value===value) {
        if (NextNode.next===this.tail) {
        this.tail=NextNode;
        }
        NextNode.next=NextNode.next.next;
        
        this.length=this.length-1;
        console.log("Deleted !!");
        return ;
      }
      NextNode=NextNode.next;
      
    }
    
  }

  traverse(){
    let NextNode = this.head;
    let result = '';
    while(1){
      
      if (NextNode===this.tail) {
        result=result+NextNode.value;
        return result;
      }
      result=result+NextNode.value+'->';
      NextNode=NextNode.next;
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
console.log(mylinkedList.traverse(),mylinkedList.length);
console.log(mylinkedList);